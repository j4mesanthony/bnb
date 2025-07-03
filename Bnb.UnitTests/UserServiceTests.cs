using Bnb.Entities;
using Bnb.Repos;
using Bnb.Services;
using Moq;

namespace Bnb.UnitTests;

[TestClass]
public class UserServiceTests
{

    private readonly UserService _sut;
    private readonly Mock<IUserRepo> _userRepoMock = new();

    public UserServiceTests()
    {
        _sut = new UserService(_userRepoMock.Object);
    }

    [TestMethod]
    public async Task GetUsersAsync_ReturnsEmptyUserDtoList()
    {
        var users = new List<User>();
        _userRepoMock
            .Setup(x => x.GetUsersAsync())
            .ReturnsAsync(users);
        
        var expected = 0;
        var result = await _sut.GetUsersAsync();
        
        Assert.AreEqual(expected, result.Count());
    }

    [TestMethod]
    public async Task GetUsersAsync_ReturnsUserDtoList()
    {
        var users = new List<User>();
        var user1 = new User(){ Id = 1, FirstName = "User", LastName = "Test #1", Email = "test@email.com", PasswordHash = "Password12345" };
        var user2 = new User(){ Id = 1, FirstName = "User", LastName = "Test #1", Email = "test@email.com", PasswordHash = "Password12345" };
        users.AddRange([user1, user2]);
        
        _userRepoMock
            .Setup(x => x.GetUsersAsync())
            .ReturnsAsync(users);

        var actual = await _sut.GetUsersAsync();
        
        Assert.AreEqual(users.Count, actual.Count());
    }

    [TestMethod]
    public async Task GetUserByIdAsync_ReturnsUserDto()
    {
        var userId = 5;
        var testUser = new User()
        {
            Id = userId, FirstName = "Joe", LastName = "Bloggs", Email = "test@email.com", PasswordHash = "uyffds67yu"
        };
        _userRepoMock
            .Setup(x => x.GetUserByIdAsync(userId))
            .ReturnsAsync(testUser);

        var actual = await _sut.GetUserByIdAsync(userId);
        
        Assert.AreEqual(userId, actual!.Id);
        Assert.AreEqual(testUser.FirstName, actual!.FirstName);
        Assert.AreEqual(testUser.LastName, actual!.LastName);
        Assert.AreEqual(testUser.Email, actual!.Email);
    }
    
}