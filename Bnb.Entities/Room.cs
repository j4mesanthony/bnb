using Bnb.Entities.Enums;

namespace Bnb.Entities;

public class Room
{
    public int Id { get; set; }
    public required string Name { get; set; }
    public int MaxCapacity { get; set; }
    public RoomType RoomType { get; set; }
}