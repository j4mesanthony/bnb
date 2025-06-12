using Bnb.Core;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddDbContext<BnbContext>(
    opt => opt
        .UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))
        .EnableSensitiveDataLogging()
        .UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking));

var app = builder.Build();

// Configure the HTTP request pipeline (Middleware)
app.UseHttpsRedirection();

app.UseCors(opts =>
{
    opts.WithOrigins(AppConstants.LocalHost);
    opts.AllowAnyHeader();
    opts.AllowAnyMethod();
});

app.UseAuthorization();

app.MapControllers();

app.Run();
