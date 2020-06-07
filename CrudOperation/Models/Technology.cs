using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
namespace CrudOperation.Models
{
    public class Technology
    {
        public int TechnologyID { get; set; }        
        public int EmployeeID { get; set; }       

        public virtual Employee Employee { get; set; }       
    }
}