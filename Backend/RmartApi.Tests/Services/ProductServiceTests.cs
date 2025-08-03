using Moq;
using RmartApi.DTOs;
using RmartApi.Models;
using RmartApi.Repositories;
using RmartApi.Services;
using Xunit;

namespace RmartApi.Tests.Services
{
    public class ProductServiceTests
    {
        private readonly Mock<IProductRepository> _mockRepository;
        private readonly ProductService _service;

        public ProductServiceTests()
        {
            _mockRepository = new Mock<IProductRepository>();
            _service = new ProductService(_mockRepository.Object);
        }

        [Fact]
        public async Task GetAllProductsAsync_ShouldReturnProductDtos()
        {
            // Arrange
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
                }
            };

            _mockRepository.Setup(r => r.GetAllProductsAsync())
                          .ReturnsAsync(products);

            // Act
            var result = await _service.GetAllProductsAsync();

            // Assert
            Assert.Equal(2, result.Count());
            var productDtos = result.ToList();
            Assert.Equal("Test Product 1", productDtos[0].Name);
            Assert.Equal("Test Product 2", productDtos[1].Name);
            _mockRepository.Verify(r => r.GetAllProductsAsync(), Times.Once);
        }

        [Fact]
        public async Task GetProductByIdAsync_WithValidId_ShouldReturnProductDto()
        {
            // Arrange
            var product = new Product
            {
                Id = 1,
                Name = "Test Product",
                Description = "Test Description",
                Price = 10.99m,
                StockQuantity = 100,
                Category = "Electronics",
                ImageUrl = "test.jpg",
                IsActive = true,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            };

            _mockRepository.Setup(r => r.GetProductByIdAsync(1))
                          .ReturnsAsync(product);

            // Act
            var result = await _service.GetProductByIdAsync(1);

            // Assert
            Assert.NotNull(result);
            Assert.Equal("Test Product", result.Name);
            Assert.Equal(10.99m, result.Price);
            _mockRepository.Verify(r => r.GetProductByIdAsync(1), Times.Once);
        }

        [Fact]
        public async Task GetProductByIdAsync_WithInvalidId_ShouldReturnNull()
        {
            // Arrange
            _mockRepository.Setup(r => r.GetProductByIdAsync(999))
                          .ReturnsAsync((Product)null);

            // Act
            var result = await _service.GetProductByIdAsync(999);

            // Assert
            Assert.Null(result);
            _mockRepository.Verify(r => r.GetProductByIdAsync(999), Times.Once);
        }

        [Fact]
        public async Task GetProductsByCategoryAsync_ShouldReturnProductDtos()
        {
            // Arrange
            var products = new List<Product>
            {
                new Product
                {
                    Id = 1,
                    Name = "Electronics Product",
                    Description = "Electronics Description",
                    Price = 10.99m,
                    StockQuantity = 100,
                    Category = "Electronics",
                    ImageUrl = "electronics.jpg",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow
                }
            };

            _mockRepository.Setup(r => r.GetProductsByCategoryAsync("Electronics"))
                          .ReturnsAsync(products);

            // Act
            var result = await _service.GetProductsByCategoryAsync("Electronics");

            // Assert
            Assert.Single(result);
            Assert.Equal("Electronics Product", result.First().Name);
            _mockRepository.Verify(r => r.GetProductsByCategoryAsync("Electronics"), Times.Once);
        }

        [Fact]
        public async Task GetActiveProductsAsync_ShouldReturnActiveProductDtos()
        {
            // Arrange
            var products = new List<Product>
            {
                new Product
                {
                    Id = 1,
                    Name = "Active Product",
                    Description = "Active Description",
                    Price = 10.99m,
                    StockQuantity = 100,
                    Category = "Electronics",
                    ImageUrl = "active.jpg",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow
                }
            };

            _mockRepository.Setup(r => r.GetActiveProductsAsync())
                          .ReturnsAsync(products);

            // Act
            var result = await _service.GetActiveProductsAsync();

            // Assert
            Assert.Single(result);
            Assert.True(result.First().IsActive);
            _mockRepository.Verify(r => r.GetActiveProductsAsync(), Times.Once);
        }

        [Fact]
        public async Task CreateProductAsync_ShouldReturnCreatedProductDto()
        {
            // Arrange
            var createDto = new CreateProductDto
            {
                Name = "New Product",
                Description = "New Description",
                Price = 15.99m,
                StockQuantity = 75,
                Category = "Home",
                ImageUrl = "new.jpg",
                IsActive = true
            };

            var createdProduct = new Product
            {
                Id = 1,
                Name = "New Product",
                Description = "New Description",
                Price = 15.99m,
                StockQuantity = 75,
                Category = "Home",
                ImageUrl = "new.jpg",
                IsActive = true,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            };

            _mockRepository.Setup(r => r.CreateProductAsync(It.IsAny<Product>()))
                          .ReturnsAsync(createdProduct);

            // Act
            var result = await _service.CreateProductAsync(createDto);

            // Assert
            Assert.NotNull(result);
            Assert.Equal("New Product", result.Name);
            Assert.Equal(15.99m, result.Price);
            _mockRepository.Verify(r => r.CreateProductAsync(It.IsAny<Product>()), Times.Once);
        }

        [Fact]
        public async Task UpdateProductAsync_WithValidId_ShouldReturnUpdatedProductDto()
        {
            // Arrange
            var updateDto = new UpdateProductDto
            {
                Name = "Updated Product",
                Description = "Updated Description",
                Price = 25.99m,
                StockQuantity = 80,
                Category = "Updated Category",
                ImageUrl = "updated.jpg",
                IsActive = false
            };

            var updatedProduct = new Product
            {
                Id = 1,
                Name = "Updated Product",
                Description = "Updated Description",
                Price = 25.99m,
                StockQuantity = 80,
                Category = "Updated Category",
                ImageUrl = "updated.jpg",
                IsActive = false,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            };

            _mockRepository.Setup(r => r.UpdateProductAsync(1, It.IsAny<Product>()))
                          .ReturnsAsync(updatedProduct);

            // Act
            var result = await _service.UpdateProductAsync(1, updateDto);

            // Assert
            Assert.NotNull(result);
            Assert.Equal("Updated Product", result.Name);
            Assert.Equal(25.99m, result.Price);
            Assert.False(result.IsActive);
            _mockRepository.Verify(r => r.UpdateProductAsync(1, It.IsAny<Product>()), Times.Once);
        }

        [Fact]
        public async Task UpdateProductAsync_WithInvalidId_ShouldReturnNull()
        {
            // Arrange
            var updateDto = new UpdateProductDto
            {
                Name = "Updated Product",
                Description = "Updated Description",
                Price = 25.99m,
                StockQuantity = 80,
                Category = "Updated Category",
                ImageUrl = "updated.jpg",
                IsActive = false
            };

            _mockRepository.Setup(r => r.UpdateProductAsync(999, It.IsAny<Product>()))
                          .ReturnsAsync((Product)null);

            // Act
            var result = await _service.UpdateProductAsync(999, updateDto);

            // Assert
            Assert.Null(result);
            _mockRepository.Verify(r => r.UpdateProductAsync(999, It.IsAny<Product>()), Times.Once);
        }

        [Fact]
        public async Task DeleteProductAsync_WithValidId_ShouldReturnTrue()
        {
            // Arrange
            _mockRepository.Setup(r => r.DeleteProductAsync(1))
                          .ReturnsAsync(true);

            // Act
            var result = await _service.DeleteProductAsync(1);

            // Assert
            Assert.True(result);
            _mockRepository.Verify(r => r.DeleteProductAsync(1), Times.Once);
        }

        [Fact]
        public async Task DeleteProductAsync_WithInvalidId_ShouldReturnFalse()
        {
            // Arrange
            _mockRepository.Setup(r => r.DeleteProductAsync(999))
                          .ReturnsAsync(false);

            // Act
            var result = await _service.DeleteProductAsync(999);

            // Assert
            Assert.False(result);
            _mockRepository.Verify(r => r.DeleteProductAsync(999), Times.Once);
        }

        [Fact]
        public async Task SearchProductsAsync_ShouldReturnMatchingProductDtos()
        {
            // Arrange
            var products = new List<Product>
            {
                new Product
                {
                    Id = 1,
                    Name = "Search Result Product",
                    Description = "Search Description",
                    Price = 10.99m,
                    StockQuantity = 100,
                    Category = "Electronics",
                    ImageUrl = "search.jpg",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow
                }
            };

            _mockRepository.Setup(r => r.SearchProductsAsync("Search"))
                          .ReturnsAsync(products);

            // Act
            var result = await _service.SearchProductsAsync("Search");

            // Assert
            Assert.Single(result);
            Assert.Contains("Search", result.First().Name);
            _mockRepository.Verify(r => r.SearchProductsAsync("Search"), Times.Once);
        }
    }
}
