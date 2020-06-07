using CrudOperation.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace CrudOperation.DAL
{
   
    public class CompanyContext : DbContext
    {

        public CompanyContext() : base("CompanyContext")
        {
        }
      
        public DbSet<Technology> Technologies { get; set; }
        public DbSet<Employee> Employees { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}