using Bnb.Api.Dtos.Responses;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Bnb.Core;

namespace Bnb.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController(BnbContext context) : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserDto>>> GetUsers()
        {
            var users = await context.Users.ToListAsync();
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
        public async Task<ActionResult<UserDto>> GetUser(int id)
        {
            var user = await context.Users.FindAsync(id);

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

            return Ok(dto);
        }

    }
}
