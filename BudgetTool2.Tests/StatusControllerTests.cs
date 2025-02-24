using Microsoft.AspNetCore.Mvc;
using BudgetTool2.Controllers;

namespace BudgetTool2.Tests;

public class StatusControllerTests
{
    [Fact]
    public void GetStatus_ReturnsOkWithCorrectMessage()
    {
        // Arrange
        var controller = new StatusController();

        // Act
        var result = controller.GetStatus();

        // Assert
        var okResult = Assert.IsType<OkObjectResult>(result);
        Assert.Equal("Api is working!", okResult.Value);
    }
} 