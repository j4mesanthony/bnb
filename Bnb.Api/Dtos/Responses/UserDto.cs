using Bnb.Entities.Enums;

namespace Bnb.Api.Dtos.Responses;

public class UserDto
{
    public int Id { get; set; }
    public required string FirstName { get; set; }
    public required string LastName { get; set; }
    public int Age { get; set; }
    public Gender Gender { get; set; }
    public string? Phone { get; set; }
    public required string Email { get; set; }
}