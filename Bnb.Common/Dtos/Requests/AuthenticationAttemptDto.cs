using System.ComponentModel.DataAnnotations;

namespace Bnb.Common.Dtos.Requests;

public class AuthenticationAttemptDto
{
    [EmailAddress]   
    public required string Email { get; set; }
    [MinLength(12)]
    public required string Password { get; set; }
}