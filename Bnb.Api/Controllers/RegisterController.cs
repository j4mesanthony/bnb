using Bnb.Common.Dtos.Requests;
using Bnb.Common.Dtos.Responses;
using Bnb.Common.Exceptions;
using Bnb.Services;
using Microsoft.AspNetCore.Mvc;

namespace Bnb.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class RegisterController(IUserService service) : ControllerBase
{
    private readonly IUserService _service = service ?? throw new ArgumentNullException(nameof(service));
    
    [HttpPost]
    public async Task<ActionResult<UserDto>> Register(RegisterUserDto dto)
    {
        try
        {
            await _service.RegisterNewUserAsync(dto);
        }
        catch(ResourceAlreadyExistsException error)
        {
            return Conflict(error.Message);
        }
        
        return Created();
    }
    
}