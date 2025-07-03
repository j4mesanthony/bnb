using Bnb.Common.Dtos.Responses;
using Bnb.Entities;
using Bnb.Repos;

namespace Bnb.Services;

public class UserService(IUserRepo repo) : IUserService
{
    private readonly IUserRepo _repo = repo ?? throw new ArgumentNullException(nameof(repo));
    
    public async Task<IEnumerable<UserDto>> GetUsersAsync()
    {
        var users = await _repo.GetUsersAsync();
        var dto = users.Select(x => new UserDto
        {
            Id = x.Id,
            Age = x.Age,
            Email = x.Email,
            FirstName = x.FirstName,
            Gender = x.Gender,
            LastName = x.LastName,
            Phone = x.Phone
        });

        return dto;
    }

    public async Task<UserDto?> GetUserByIdAsync(int id)
    {
        var user = await _repo.GetUserByIdAsync(id);

        if (user == null)
        {
            return null;
        }
        
        var dto = new UserDto
        {
            Id = user.Id,
            Age = user.Age,
            Email = user.Email,
            FirstName = user.FirstName,
            Gender = user.Gender,
            LastName = user.LastName,
            Phone = user.Phone
        };

        return dto;
    }
}