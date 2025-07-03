using Bnb.Entities;

namespace Bnb.Repos;

public interface IUserRepo
{
    Task<IEnumerable<User>> GetUsersAsync();
    Task<User?> GetUserByIdAsync(int id);

    Task<User?> GetUserByEmailAsync(string email);
    Task<bool> AddNewUserAsync(User newUser);

}