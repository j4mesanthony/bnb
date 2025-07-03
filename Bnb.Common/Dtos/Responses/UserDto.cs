using Bnb.Entities.Enums;

namespace Bnb.Common.Dtos.Responses;

public class UserDto
{
    public int Id { get; set; }
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public int? Age { get; set; }
    public Gender? Gender { get; set; }
    public string? Phone { get; set; }
    public required string Email { get; set; }
}