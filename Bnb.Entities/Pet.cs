using Bnb.Entities.Enums;

namespace Bnb.Entities;

public class Pet
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public int Age { get; set; }
    public PetType PetType { get; set; }
}