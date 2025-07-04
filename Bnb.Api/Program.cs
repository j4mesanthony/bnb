using Bnb.Core;
using Bnb.Repos;
using Bnb.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddDbContext<BnbContext>(
    opt => opt
        .UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))
        .EnableSensitiveDataLogging()
        .UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking));

// Services
builder.Services.AddScoped<IUserService, UserService>();

// Repos
builder.Services.AddScoped<IUserRepo, UserRepo>();

builder.Services.AddAuthentication("Bearer")
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = builder.Configuration["Authentication:Issuer"],
            ValidAudience = builder.Configuration["Authentication:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(Convert.FromBase64String(builder.Configuration["Authentication:JwtSigningKey"] ?? throw new NullReferenceException()))
        };
    });

var app = builder.Build();

app.UseCors(opts =>
{
    opts.WithOrigins(EnvironmentOrigins.LocalHost);
    opts.AllowAnyHeader();
    opts.AllowAnyMethod();
});

app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();
app.Run();
