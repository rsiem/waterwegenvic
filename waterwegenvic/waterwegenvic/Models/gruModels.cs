namespace waterwegenvic.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class gruModels : DbContext
    {
        public gruModels(String connectionString)
        {
            this.Database.Connection.ConnectionString = connectionString;
        }

        public gruModels()
            : base("name=gruModels")
        {
        }

        public virtual DbSet<gru> grus { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<gru>()
                .Property(e => e.Latitude)
                .HasPrecision(10, 8);

            modelBuilder.Entity<gru>()
                .Property(e => e.Longitude)
                .HasPrecision(10, 7);
        }
    }
}
