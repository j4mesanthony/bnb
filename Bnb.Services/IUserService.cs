using Bnb.Common.Dtos.Requests;
using Bnb.Common.Dtos.Responses;

namespace Bnb.Services;

public interface IUserService
{
    Task<IEnumerable<UserDto>> GetUsersAsync();
    Task<UserDto?> GetUserByIdAsync(int id);
    Task<UserDto> RegisterNewUserAsync(RegisterUserDto dto);
}