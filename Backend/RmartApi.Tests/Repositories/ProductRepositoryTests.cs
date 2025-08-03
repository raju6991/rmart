using Microsoft.EntityFrameworkCore;
using RmartApi.Data;
using RmartApi.Models;
using RmartApi.Repositories;
using Xunit;

namespace RmartApi.Tests.Repositories
{
    public class ProductRepositoryTests : IDisposable
    {
        private readonly RmartDbContext _context;
        private readonly ProductRepository _repository;

        public ProductRepositoryTests()
        {
            var options = new DbContextOptionsBuilder<RmartDbContext>()
                .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString())
                .Options;

            _context = new RmartDbContext(options);
            _repository = new ProductRepository(_context);

            SeedTestData();
        }

        private void SeedTestData()
        {
            var products = new List<Product>
            {
                new Product
                {
                    Id = 1,
                    Name = "Test Product 1",
                    Description = "Test Description 1",
                    Price = 10.99m,
                    StockQuantity = 100,
                    Category = "Electronics",
                    ImageUrl = "test1.jpg",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow
                },
                new Product
                {
                    Id = 2,
                    Name = "Test Product 2",
                    Description = "Test Description 2",
                    Price = 20.99m,
                    StockQuantity = 50,
                    Category = "Books",
                    ImageUrl = "test2.jpg",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow
                },
                new Product
                {
                    Id = 3,
                    Name = "Inactive Product",
                    Description = "Inactive Description",
                    Price = 30.99m,
                    StockQuantity = 0,
                    Category = "Electronics",
                    ImageUrl = "test3.jpg",
                    IsActive = false,
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow
                }
            };

            _context.Products.AddRange(products);
            _context.SaveChanges();
        }

        [Fact]
        public async Task GetAllProductsAsync_ShouldReturnAllProducts()
        {
            // Act
            var result = await _repository.GetAllProductsAsync();

            // Assert
            Assert.Equal(3, result.Count());
            Assert.Contains(result, p => p.Name == "Test Product 1");
            Assert.Contains(result, p => p.Name == "Test Product 2");
            Assert.Contains(result, p => p.Name == "Inactive Product");
        }

        [Fact]
        public async Task GetProductByIdAsync_WithValidId_ShouldReturnProduct()
        {
            // Act
            var result = await _repository.GetProductByIdAsync(1);

            // Assert
            Assert.NotNull(result);
            Assert.Equal("Test Product 1", result.Name);
            Assert.Equal(10.99m, result.Price);
        }

        [Fact]
        public async Task GetProductByIdAsync_WithInvalidId_ShouldReturnNull()
        {
            // Act
            var result = await _repository.GetProductByIdAsync(999);

            // Assert
            Assert.Null(result);
        }

        [Fact]
        public async Task GetProductsByCategoryAsync_ShouldReturnProductsInCategory()
        {
            // Act
            var result = await _repository.GetProductsByCategoryAsync("Electronics");

            // Assert
            Assert.Equal(2, result.Count());
            Assert.All(result, p => Assert.Equal("Electronics", p.Category));
        }

        [Fact]
        public async Task GetActiveProductsAsync_ShouldReturnOnlyActiveProducts()
        {
            // Act
            var result = await _repository.GetActiveProductsAsync();

            // Assert
            Assert.Equal(2, result.Count());
            Assert.All(result, p => Assert.True(p.IsActive));
            Assert.DoesNotContain(result, p => p.Name == "Inactive Product");
        }

        [Fact]
        public async Task CreateProductAsync_ShouldAddProductToDatabase()
        {
            // Arrange
            var newProduct = new Product
            {
                Name = "New Product",
                Description = "New Description",
                Price = 15.99m,
                StockQuantity = 75,
                Category = "Home",
                ImageUrl = "new.jpg",
                IsActive = true
            };

            // Act
            var result = await _repository.CreateProductAsync(newProduct);

            // Assert
            Assert.NotNull(result);
            Assert.True(result.Id > 0);
            Assert.Equal("New Product", result.Name);

            var productInDb = await _context.Products.FindAsync(result.Id);
            Assert.NotNull(productInDb);
            Assert.Equal("New Product", productInDb.Name);
        }

        [Fact]
        public async Task UpdateProductAsync_WithValidId_ShouldUpdateProduct()
        {
            // Arrange
            var updatedProduct = new Product
            {
                Name = "Updated Product",
                Description = "Updated Description",
                Price = 25.99m,
                StockQuantity = 80,
                Category = "Updated Category",
                ImageUrl = "updated.jpg",
                IsActive = false
            };

            // Act
            var result = await _repository.UpdateProductAsync(1, updatedProduct);

            // Assert
            Assert.NotNull(result);
            Assert.Equal("Updated Product", result.Name);
            Assert.Equal(25.99m, result.Price);
            Assert.False(result.IsActive);

            var productInDb = await _context.Products.FindAsync(1);
            Assert.Equal("Updated Product", productInDb.Name);
        }

        [Fact]
        public async Task UpdateProductAsync_WithInvalidId_ShouldReturnNull()
        {
            // Arrange
            var updatedProduct = new Product
            {
                Name = "Updated Product",
                Description = "Updated Description",
                Price = 25.99m,
                StockQuantity = 80,
                Category = "Updated Category",
                ImageUrl = "updated.jpg",
                IsActive = false
            };

            // Act
            var result = await _repository.UpdateProductAsync(999, updatedProduct);

            // Assert
            Assert.Null(result);
        }

        [Fact]
        public async Task DeleteProductAsync_WithValidId_ShouldDeleteProduct()
        {
            // Act
            var result = await _repository.DeleteProductAsync(1);

            // Assert
            Assert.True(result);

            var productInDb = await _context.Products.FindAsync(1);
            Assert.Null(productInDb);
        }

        [Fact]
        public async Task DeleteProductAsync_WithInvalidId_ShouldReturnFalse()
        {
            // Act
            var result = await _repository.DeleteProductAsync(999);

            // Assert
            Assert.False(result);
        }

        [Fact]
        public async Task ProductExistsAsync_WithValidId_ShouldReturnTrue()
        {
            // Act
            var result = await _repository.ProductExistsAsync(1);

            // Assert
            Assert.True(result);
        }

        [Fact]
        public async Task ProductExistsAsync_WithInvalidId_ShouldReturnFalse()
        {
            // Act
            var result = await _repository.ProductExistsAsync(999);

            // Assert
            Assert.False(result);
        }

        [Fact]
        public async Task SearchProductsAsync_WithValidTerm_ShouldReturnMatchingProducts()
        {
            // Act
            var result = await _repository.SearchProductsAsync("Test");

            // Assert
            Assert.Equal(2, result.Count());
            Assert.All(result, p => Assert.Contains("Test", p.Name));
        }

        [Fact]
        public async Task SearchProductsAsync_WithEmptyTerm_ShouldReturnActiveProducts()
        {
            // Act
            var result = await _repository.SearchProductsAsync("");

            // Assert
            Assert.Equal(2, result.Count());
            Assert.All(result, p => Assert.True(p.IsActive));
        }

        [Fact]
        public async Task SearchProductsAsync_WithCategoryTerm_ShouldReturnMatchingProducts()
        {
            // Act
            var result = await _repository.SearchProductsAsync("Electronics");

            // Assert
            Assert.Single(result); // Only active Electronics product
            Assert.Equal("Test Product 1", result.First().Name);
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
