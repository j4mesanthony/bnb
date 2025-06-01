using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace Bnb.Core
{
    public class BnbContextFactory : IDesignTimeDbContextFactory<BnbContext>
    {
        public BnbContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<BnbContext>();
            optionsBuilder.UseSqlServer("Server=localhost;Initial Catalog=Bnb2025;User Id=sa;Password=p@ssw0rd;MultipleActiveResultSets=True;Timeout=30;Encrypt=False");

            return new BnbContext(optionsBuilder.Options);
        }
    }
}

