using Bnb.Entities;

namespace Bnb.Repos;

public interface IUserRepo
{

    Task<IEnumerable<User>> GetUsersAsync();
    Task<User> GetUserByIdAsync(int id);

}