namespace Bnb.Entities;

public class Booking
{
    public int Id { get; set; }
    public int Pax { get; set; }
    public DateOnly CheckIn { get; set; }
    public DateOnly CheckOut { get; set; }
    public int GuestId { get; set; }
    public int RoomId { get; set; }
    public bool IsIncludingBreakfast { get; set; }
}