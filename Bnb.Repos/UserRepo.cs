using Bnb.Core;
using Bnb.Entities;
using Microsoft.EntityFrameworkCore;

namespace Bnb.Repos;

public class UserRepo(BnbContext context) : IUserRepo
{
    private readonly BnbContext _context = context ?? throw new ArgumentNullException(nameof(context));

    public async Task<IEnumerable<User>> GetUsersAsync()
    {
        var users = await _context.Users.ToListAsync();
        return users;
    }

    public async Task<User?> GetUserByIdAsync(int id)
    {
        var user = await _context.Users.FindAsync(id);
        return user;
    }
}