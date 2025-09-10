using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Club.Core.Models;
public class Project: BaseEntity
{
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string? Links { get; set; }
    public string Technologies { get; set; } = string.Empty; // Comma-separated list of technologies
    public string Category { get; set; } = string.Empty; // e.g., Web, Mobile, Data Science
    public Guid CreatedById { get; set; }


    // Navigation property
    public User CreatedBy { get; set; } = null!;
    public IEnumerable<ProjectMember> Members { get; set; } = new List<ProjectMember>();

}
