using Bnb.Api.Dtos.Requests;
using Bnb.Api.Dtos.Responses;
using Bnb.Core;
using Microsoft.AspNetCore.Mvc;

namespace Bnb.Api;

[Route("api/[controller]")]
[ApiController]
public class RegisterController : ControllerBase
{
    private readonly BnbContext _context;
    
    public RegisterController(BnbContext context)
    {
        _context = context;
    }

    [HttpPost]
    public ActionResult<string> Register(RegisterUserDto dto)
    {
        var user = _context.Users.FirstOrDefault(x => x.Email.ToLower() == dto.Email.ToLower());
        if (user != null) return Conflict("User already exists!");
        
        // TODO: Hash password and insert into newUser instance below.
        
        return CreatedAtAction("Register", new UserDto
        {
            Id = 1,
            FirstName = dto.FirstName,
            LastName = dto.LastName,
            Email = dto.Email,
        });
    }

    // private string HashPassword(User user, string password)
    // {
    //     return "wut.";
    // }
}