using Microsoft.EntityFrameworkCore;
using SignarRChartApp.Models;

namespace SignarRChartApp.Migrations
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> dbContextOptions)
            : base(dbContextOptions)
        {

        }
        public DbSet<Product> Products { get; set; }
    }
}
