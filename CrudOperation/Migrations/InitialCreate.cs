namespace CrudOperation.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Employee",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        FirstName = c.String(),
                        LastName = c.String(),
                        JoinDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "dbo.Technology",
                c => new
                    {
                        TechnologyID = c.Int(nullable: false, identity: true),
                        EmployeeID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.TechnologyID)
                .ForeignKey("dbo.Employee", t => t.EmployeeID, cascadeDelete: true)
                .Index(t => t.EmployeeID);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Technology", "EmployeeID", "dbo.Employee");
            DropIndex("dbo.Technology", new[] { "EmployeeID" });
            DropTable("dbo.Technology");
            DropTable("dbo.Employee");
        }
    }
}
