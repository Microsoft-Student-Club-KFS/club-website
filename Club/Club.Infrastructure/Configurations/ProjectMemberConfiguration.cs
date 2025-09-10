using Club.Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Club.Infrastructure.Configurations;
public class ProjectMemberConfiguration : IEntityTypeConfiguration<ProjectMember>
{
    public void Configure(EntityTypeBuilder<ProjectMember> builder)
    {
        builder.HasOne(project => project.Project)
               .WithMany(project => project.Members)
               .HasForeignKey(project => project.ProjectId)
               .OnDelete(DeleteBehavior.Cascade);

        builder.HasOne(user => user.User)
            .WithMany(user => user.Projects)
            .HasForeignKey(user => user.UserId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
