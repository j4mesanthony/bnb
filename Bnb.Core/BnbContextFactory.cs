using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace Bnb.Core
{
    public class BnbContextFactory : IDesignTimeDbContextFactory<BnbContext>
    {
        public BnbContext CreateDbContext(string[] args)
        {

            var basePath = AppDomain.CurrentDomain.BaseDirectory;
            
            var config = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "..", "Bnb.Api"))
                .AddJsonFile(AppConstants.SettingsFile)
                .Build();
            
            var optionsBuilder = new DbContextOptionsBuilder<BnbContext>();
            optionsBuilder.UseSqlServer(config.GetConnectionString("DefaultConnection"));

            return new BnbContext(optionsBuilder.Options);
        }
    }
}

