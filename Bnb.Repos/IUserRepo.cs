using Bnb.Entities;

namespace Bnb.Repos;

public interface IUserRepo
{

    public Task<IEnumerable<User>> GetUsersAsync();
    public Task<User> GetUserByIdAsync(int id);

}