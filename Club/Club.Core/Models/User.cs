using Microsoft.AspNetCore.Identity;

namespace Club.Core.Models;
public class User: IdentityUser<Guid>
{

    // Navigation property
    public IEnumerable<ProjectMember> Projects { get; set; } = new List<ProjectMember>();
}
