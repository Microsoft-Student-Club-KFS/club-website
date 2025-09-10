using Club.Core.Models;
using Club.Infrastructure.Repositories;

namespace Club.WebApi.Services;

public class UserService
{
    private readonly UserRepository _userRepository;

    public UserService(UserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    public User CreateUser(string username)
    {
        var user = new User
        {
            UserName = username
        };
        _userRepository.Add(user);
        return user;
    }
}
