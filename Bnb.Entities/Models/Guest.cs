using Bnb.Entities.Enums;

namespace Bnb.Entities;

public class Guest
{
    public int Id { get; set; }
    public required string FirstName { get; set; }
    public required string LastName { get; set; }
    public int Age { get; set; }
    public Gender Gender { get; set; }
    public string? Phone { get; set; }
    public required string Email { get; set; }
    public string? PassportNumber { get; set; }
}