using Bnb.Entities;
using Bnb.Entities.Enums;
using Microsoft.EntityFrameworkCore;

namespace Bnb.Core;

public class BnbContext(DbContextOptions<BnbContext> options) : DbContext(options)
{

    public DbSet<Booking> Bookings { get; set; }
    public DbSet<Guest> Guests { get; set; }
    public DbSet<Pet> Pets { get; set; }
    public DbSet<Room> Rooms { get; set; }
    public DbSet<User> Users { get; set; }

    // protected override void OnModelCreating(ModelBuilder modelBuilder)
    // {
    //     modelBuilder.Entity<User>().HasData(
    //         new User()
    //         {
    //             Id = 1,
    //             FirstName = "James",
    //             LastName = "Anthony",
    //             Age = 39,
    //             Gender = Gender.Male,
    //             Phone = "+61412345678",
    //             Email = "test@test.com",
    //             UserType = UserType.Administrator
    //         }
    //     );
    // }
}

