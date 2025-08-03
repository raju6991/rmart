using Microsoft.EntityFrameworkCore;
using RmartApi.Models;

namespace RmartApi.Data
{
    public class RmartDbContext : DbContext
    {
        public RmartDbContext(DbContextOptions<RmartDbContext> options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configure Product entity
            modelBuilder.Entity<Product>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Name).IsRequired().HasMaxLength(100);
                entity.Property(e => e.Description).HasMaxLength(500);
                entity.Property(e => e.Price).HasColumnType("decimal(10,2)").IsRequired();
                entity.Property(e => e.StockQuantity).IsRequired();
                entity.Property(e => e.Category).HasMaxLength(50);
                entity.Property(e => e.ImageUrl).HasMaxLength(200);
                entity.Property(e => e.IsActive).HasDefaultValue(true);
                entity.Property(e => e.CreatedAt).HasDefaultValueSql("datetime('now')");
                entity.Property(e => e.UpdatedAt).HasDefaultValueSql("datetime('now')");

                // Index for better performance
                entity.HasIndex(e => e.Category);
                entity.HasIndex(e => e.IsActive);
            });

            // Seed data
            modelBuilder.Entity<Product>().HasData(
                new Product
                {
                    Id = 1,
                    Name = "iPhone 15 Pro",
                    Description = "Latest iPhone with A17 Pro chip",
                    Price = 999.99m,
                    StockQuantity = 50,
                    Category = "Electronics",
                    ImageUrl = "https://example.com/iphone15pro.jpg",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow
                },
                new Product
                {
                    Id = 2,
                    Name = "Samsung Galaxy S24",
                    Description = "Flagship Android phone with AI features",
                    Price = 849.99m,
                    StockQuantity = 75,
                    Category = "Electronics",
                    ImageUrl = "https://example.com/galaxys24.jpg",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow
                },
                new Product
                {
                    Id = 3,
                    Name = "MacBook Air M3",
                    Description = "Lightweight laptop with M3 chip",
                    Price = 1299.99m,
                    StockQuantity = 30,
                    Category = "Computers",
                    ImageUrl = "https://example.com/macbookair.jpg",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow
                }
            );
        }

        public override int SaveChanges()
        {
            UpdateTimestamps();
            return base.SaveChanges();
        }

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            UpdateTimestamps();
            return base.SaveChangesAsync(cancellationToken);
        }

        private void UpdateTimestamps()
        {
            var entries = ChangeTracker.Entries()
                .Where(e => e.Entity is Product && (e.State == EntityState.Added || e.State == EntityState.Modified));

            foreach (var entry in entries)
            {
                if (entry.Entity is Product product)
                {
                    if (entry.State == EntityState.Added)
                    {
                        product.CreatedAt = DateTime.UtcNow;
                    }
                    product.UpdatedAt = DateTime.UtcNow;
                }
            }
        }
    }
}
