using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Bnb.Common.Dtos.Requests;
using Bnb.Core;
using Bnb.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace Bnb.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AuthenticationController : ControllerBase
{

    private readonly BnbContext _context;
    private readonly IConfiguration _configuration;
    
    public AuthenticationController(BnbContext context, IConfiguration configuration)
    {
        _context = context;
        _configuration = configuration ?? throw new ArgumentNullException(nameof(configuration));
    }

    [HttpPost]
    public ActionResult Authenticate(AuthenticationAttemptDto dto)
    {
        var user = ValidateUserCredentials(dto.Email, dto.Password);
        if (user == null) return Unauthorized();

        // Create token signature
        var key = Convert.FromBase64String(_configuration["Authentication:JwtSigningKey"] ?? throw new NullReferenceException());
        var securityKey = new SymmetricSecurityKey(key);
        var signingCredentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

        // Build claims list
        var claims = new List<Claim>();
        claims.Add(new Claim("sub", user.Id.ToString()));
        claims.Add(new Claim("given_name", user.FirstName));
        claims.Add(new Claim("family_name", user.LastName));
        
        // Create token
        var jwt = new JwtSecurityToken(
            _configuration["Authentication:Issuer"],
            _configuration["Authentication:Audience"],
            claims,
            DateTime.UtcNow,
            DateTime.UtcNow.AddMinutes(10),
            signingCredentials);
        
        // Write token
        var token = new JwtSecurityTokenHandler().WriteToken(jwt);
        
        return Ok(token);
    }

    public User? ValidateUserCredentials(string email, string providedPassword)
    {
        var user = _context.Users.FirstOrDefault(x => x.Email == email);
        if (user == null) return null;
        
        var hasher = new PasswordHasher<User>();
        var isMatch = hasher.VerifyHashedPassword(user, user.PasswordHash, providedPassword) == PasswordVerificationResult.Success;
        
        return isMatch ? user : null;
    }
    
}