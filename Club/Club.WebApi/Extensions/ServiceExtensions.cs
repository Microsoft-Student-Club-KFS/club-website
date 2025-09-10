using Club.Infrastructure.Repositories;
using Club.WebApi.Services;

namespace Club.WebApi.Extensions;

public static class ServiceExtensions
{
    public static IServiceCollection ConfigureApplicationServices(this IServiceCollection services)
    {

        services.AddScoped<UserRepository>();

        services.AddScoped<UserService>();

        return services;
    }
}
