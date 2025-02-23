using Microsoft.AspNetCore.Mvc;
using BudgetTool2.Controllers;

namespace BudgetTool2.Tests.Controllers;

public class StatusControllerTests
{
    [Fact]
    public void Get_ReturnsOkResultWithCorrectMessage()
    {
        // Arrange
        var controller = new StatusController();

        // Act
        var result = controller.Get();

        // Assert
        var okResult = Assert.IsType<OkObjectResult>(result);
        Assert.Equal("Api is working!", okResult.Value);
    }
} 