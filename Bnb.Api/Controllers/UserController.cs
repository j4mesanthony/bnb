using Bnb.Api.Dtos.Responses;
using Microsoft.AspNetCore.Mvc;
using Bnb.Repos;
using Microsoft.AspNetCore.Authorization;

namespace Bnb.Api
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class UserController : ControllerBase
    {
        private readonly IUserRepo _repo;

        public UserController(IUserRepo repo)
        {
            _repo = repo ?? throw new ArgumentNullException(nameof(repo));
        }
        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserDto>>> GetUsers()
        {
            var users = await _repo.GetUsersAsync();
            var dto = users.Select(x => new UserDto
            {
                Id = x.Id,
                Age = x.Age,
                Email = x.Email,
                FirstName = x.FirstName,
                Gender = x.Gender,
                LastName = x.LastName,
                Phone = x.Phone
            });
            return Ok(dto);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<UserDto>> GetUserById(int id)
        {
            var user = await _repo.GetUserByIdAsync(id);
            
            if (user == null)
            {
                return NotFound();
            }

            var dto = new UserDto
            {
                Id = user.Id,
                Age = user.Age,
                Email = user.Email,
                FirstName = user.FirstName,
                Gender = user.Gender,
                LastName = user.LastName,
                Phone = user.Phone
            };

            return dto;
        }

    }
}
