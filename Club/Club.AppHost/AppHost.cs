var builder = DistributedApplication.CreateBuilder(args);

builder.AddProject<Projects.Club_WebApi>("club-webapi");

builder.Build().Run();
