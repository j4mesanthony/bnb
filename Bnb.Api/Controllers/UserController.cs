using Bnb.Common.Dtos.Responses;
using Bnb.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Bnb.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class UserController(IUserService service) : ControllerBase
    {
        private readonly IUserService _service = service ?? throw new ArgumentNullException(nameof(service));
        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserDto>>> GetUsers()
        {
            var users = await _service.GetUsersAsync();
            return Ok(users);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<UserDto>> GetUserById(int id)
        {
            var user = await _service.GetUserByIdAsync(id);
            
            if (user == null) 
                return NotFound();
            
            return Ok(user);
        }

    }
}
