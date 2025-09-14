using Club.Core.Models;
using Club.Infrastructure.Repositories;
using Club.WebApi.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Club.WebApi.Controllers;
[Route("api/[controller]")]
[ApiController]
public class UserController : ControllerBase
{
    private readonly UserService _userService;
    public UserController(UserService userService)
    {
        _userService = userService;
    }

    [HttpPost]
    [Authorize]
    public IActionResult AddUser()
    {
        _userService.CreateUser("Test User");
        return Ok();
    }

    [HttpGet]
    [Authorize]
    public IActionResult GetUser()
    {
        return Ok("User data");
    }
}
