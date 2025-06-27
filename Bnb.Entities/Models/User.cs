using Bnb.Entities.Enums;

namespace Bnb.Entities;

public class User
{
    public int Id { get; set; }
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public int? Age { get; set; }
    public Gender? Gender { get; set; }
    public string? Phone { get; set; }
    public required string Email { get; set; }
    public required string PasswordHash { get; set; }
    public UserType UserType { get; set; } = UserType.User;
}