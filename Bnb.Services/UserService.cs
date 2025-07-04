using Bnb.Common.Dtos.Requests;
using Bnb.Common.Dtos.Responses;
using Bnb.Common.Exceptions;
using Bnb.Entities;
using Bnb.Repos;
using Microsoft.AspNetCore.Identity;

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

    public async Task<UserDto> RegisterNewUserAsync(RegisterUserDto dto)
    {
        var user = await _repo.GetUserByEmailAsync(dto.Email);
        
        if (user != null) throw new ResourceAlreadyExistsException("User already exists!");
        
        var newUser = new User
        {
            FirstName = dto.FirstName,
            LastName = dto.LastName,
            Email = dto.Email,
            NormalizedEmail = dto.Email.ToUpperInvariant(),
            PasswordHash = ""
        };

        var passwordHash = HashPassword(newUser, dto.Password);
        newUser.PasswordHash = passwordHash;

        var created = await _repo.AddNewUserAsync(newUser);

        return new UserDto
        {
            Id = created.Id, 
            FirstName = created.FirstName, 
            LastName = created.LastName, 
            Email = created.Email
        };
    }
    
    private static string HashPassword(User user, string password)
    {
        var hasher = new PasswordHasher<User>();
        var hashed = hasher.HashPassword(user, password);
        return hashed;
    }
}