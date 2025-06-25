namespace Bnb.Api.Dtos.Requests;

public class AuthenticationAttemptDto
{
    public required string Email { get; set; }
    public required string Password { get; set; }
}