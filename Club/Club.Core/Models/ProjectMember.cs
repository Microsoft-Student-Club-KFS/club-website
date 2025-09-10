using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Club.Core.Models;
public class ProjectMember: BaseEntity
{
    public Guid ProjectId { get; set; }
    public Guid UserId { get; set; }

    // Navigation properties
    public Project Project { get; set; } = null!;
    public User User { get; set; } = null!;
}
