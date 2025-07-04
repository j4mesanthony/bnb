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

    public async Task<User?> GetUserByEmailAsync(string email)
    {
        return await _context.Users.FirstOrDefaultAsync(x => x.NormalizedEmail == email.ToUpperInvariant());
    }

    public async Task<bool> AddNewUserAsync(User newUser)
    {
        _context.Users.Add(newUser);
        return await _context.SaveChangesAsync() > 0;
    }
}