using Microsoft.AspNetCore.Mvc;

namespace BudgetTool2.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StatusController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Api is working!");
        }
    }
} 