using Club.Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Club.Infrastructure.Configurations;
public class UserConfiguration : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {

        builder.HasMany(user => user.Projects)
            .WithOne(project => project.User)
            .HasForeignKey(project => project.UserId)
            .OnDelete(DeleteBehavior.NoAction);
    }
}
