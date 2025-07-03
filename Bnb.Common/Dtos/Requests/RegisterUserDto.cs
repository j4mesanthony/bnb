using System.ComponentModel.DataAnnotations;

namespace Bnb.Common.Dtos.Requests;

public class RegisterUserDto
{
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;

    [EmailAddress]
    public string Email { get; set; } = string.Empty;
    
    [MinLength(12)]
    public string Password { get; set; } = string.Empty;
}