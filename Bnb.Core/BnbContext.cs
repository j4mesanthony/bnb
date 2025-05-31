using Bnb.Entities;
using Microsoft.EntityFrameworkCore;

namespace Bnb.Core;

public class BnbContext : DbContext
{
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        // TODO: Implement configuration
    }

    DbSet<User> Users { get; set; }
    DbSet<Booking> Bookings { get; set; }
    DbSet<Room> Rooms { get; set; }
    DbSet<Pet> Pets { get; set; }
    
}