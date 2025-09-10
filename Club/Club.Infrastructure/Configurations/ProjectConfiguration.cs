using Club.Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Club.Infrastructure.Configurations;
public class ProjectConfiguration : IEntityTypeConfiguration<Project>
{
    public void Configure(EntityTypeBuilder<Project> builder)
    {
        builder.HasMany(project => project.Members)
            .WithOne(member => member.Project)
            .HasForeignKey(member => member.ProjectId)
            .OnDelete(DeleteBehavior.NoAction);
    }
}
