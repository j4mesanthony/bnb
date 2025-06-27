using Bnb.Api.Dtos.Requests;
using Bnb.Api.Dtos.Responses;
using Bnb.Core;
using Bnb.Entities;
using Microsoft.AspNetCore.Identity;
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
    public async Task<ActionResult<UserDto>> Register(RegisterUserDto dto)
    {
        var user = _context.Users.FirstOrDefault(x => x.Email.ToLower() == dto.Email.ToLower());
        if (user != null) return Conflict("User already exists!");

        var newUser = new User
        {
            FirstName = dto.FirstName,
            LastName = dto.LastName,
            Email = dto.Email,
            PasswordHash = "",
        };

        newUser.PasswordHash = HashPassword(newUser, dto.Password);
        
        _context.Users.Add(newUser);
        await _context.SaveChangesAsync();
        
        return CreatedAtAction("Register", new UserDto
        {
            Id = newUser.Id,
            FirstName = newUser.FirstName,
            LastName = newUser.LastName,
            Email = newUser.Email,
        });
    }

    private string HashPassword(User user, string password)
    {
        var hasher = new PasswordHasher<User>();
        var hashed = hasher.HashPassword(user, password);
        return hashed;
    }
}