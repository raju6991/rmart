using Microsoft.AspNetCore.Mvc;
using Moq;
using RmartApi.Controllers;
using RmartApi.DTOs;
using RmartApi.Services;
using Xunit;

namespace RmartApi.Tests.Controllers
{
    public class ProductsControllerTests
    {
        private readonly Mock<IProductService> _mockService;
        private readonly ProductsController _controller;

        public ProductsControllerTests()
        {
            _mockService = new Mock<IProductService>();
            _controller = new ProductsController(_mockService.Object);
        }

        [Fact]
        public async Task GetAll_ShouldReturnOkWithProducts()
        {
            // Arrange
            var products = new List<ProductDto>
            {
                new ProductDto { Id = 1, Name = "Product 1" },
                new ProductDto { Id = 2, Name = "Product 2" }
            };
            _mockService.Setup(s => s.GetAllProductsAsync()).ReturnsAsync(products);

            // Act
            var result = await _controller.GetAll();

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            var returnProducts = Assert.IsType<List<ProductDto>>(okResult.Value);
            Assert.Equal(2, returnProducts.Count);
        }

        [Fact]
        public async Task GetById_ExistingId_ShouldReturnOkWithProduct()
        {
            // Arrange
            var product = new ProductDto { Id = 1, Name = "Product 1" };
            _mockService.Setup(s => s.GetProductByIdAsync(1)).ReturnsAsync(product);

            // Act
            var result = await _controller.GetById(1);

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            var returnProduct = Assert.IsType<ProductDto>(okResult.Value);
            Assert.Equal(1, returnProduct.Id);
        }

        [Fact]
        public async Task GetById_NonExistingId_ShouldReturnNotFound()
        {
            // Arrange
            _mockService.Setup(s => s.GetProductByIdAsync(999)).ReturnsAsync((ProductDto)null);

            // Act
            var result = await _controller.GetById(999);

            // Assert
            Assert.IsType<NotFoundResult>(result);
        }

        [Fact]
        public async Task Create_ShouldReturnCreatedWithProduct()
        {
            // Arrange
            var createProduct = new CreateProductDto { Name = "New Product" };
            var createdProduct = new ProductDto { Id = 1, Name = "New Product" };
            _mockService.Setup(s => s.CreateProductAsync(createProduct)).ReturnsAsync(createdProduct);

            // Act
            var result = await _controller.Create(createProduct);

            // Assert
            var createdAtActionResult = Assert.IsType<CreatedAtActionResult>(result);
            var returnProduct = Assert.IsType<ProductDto>(createdAtActionResult.Value);
            Assert.Equal(1, returnProduct.Id);
        }

        [Fact]
        public async Task Update_ExistingId_ShouldReturnOkWithUpdatedProduct()
        {
            // Arrange
            var updateProduct = new UpdateProductDto { Name = "Updated Product" };
            var updatedProduct = new ProductDto { Id = 1, Name = "Updated Product" };
            _mockService.Setup(s => s.UpdateProductAsync(1, updateProduct)).ReturnsAsync(updatedProduct);

            // Act
            var result = await _controller.Update(1, updateProduct);

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            var returnProduct = Assert.IsType<ProductDto>(okResult.Value);
            Assert.Equal("Updated Product", returnProduct.Name);
        }

        [Fact]
        public async Task Update_NonExistingId_ShouldReturnNotFound()
        {
            // Arrange
            var updateProduct = new UpdateProductDto { Name = "Updated Product" };
            _mockService.Setup(s => s.UpdateProductAsync(999, updateProduct)).ReturnsAsync((ProductDto)null);

            // Act
            var result = await _controller.Update(999, updateProduct);

            // Assert
            Assert.IsType<NotFoundResult>(result);
        }

        [Fact]
        public async Task Delete_ExistingId_ShouldReturnNoContent()
        {
            // Arrange
            _mockService.Setup(s => s.DeleteProductAsync(1)).ReturnsAsync(true);

            // Act
            var result = await _controller.Delete(1);

            // Assert
            Assert.IsType<NoContentResult>(result);
        }

        [Fact]
        public async Task Delete_NonExistingId_ShouldReturnNotFound()
        {
            // Arrange
            _mockService.Setup(s => s.DeleteProductAsync(999)).ReturnsAsync(false);

            // Act
            var result = await _controller.Delete(999);

            // Assert
            Assert.IsType<NotFoundResult>(result);
        }

        [Fact]
        public async Task Search_WithResults_ShouldReturnOkWithProducts()
        {
            // Arrange
            var products = new List<ProductDto>
            {
                new ProductDto { Id = 1, Name = "Search Product" }
            };
            _mockService.Setup(s => s.SearchProductsAsync("search")).ReturnsAsync(products);

            // Act
            var result = await _controller.Search("search");

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            var returnProducts = Assert.IsType<List<ProductDto>>(okResult.Value);
            Assert.Single(returnProducts);
        }
    }
}
