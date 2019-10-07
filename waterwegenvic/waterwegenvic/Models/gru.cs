namespace waterwegenvic.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("gru")]
    public partial class gru
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Reference_number { get; set; }

        [StringLength(131)]
        public string Address { get; set; }

        public int? Post_Code { get; set; }

        [StringLength(18)]
        public string Suburb { get; set; }

        [Column(TypeName = "numeric")]
        public decimal? Latitude { get; set; }

        [Column(TypeName = "numeric")]
        public decimal? Longitude { get; set; }

        [StringLength(49)]
        public string Site_history { get; set; }

        [StringLength(184)]
        public string Restricted_uses { get; set; }

        [StringLength(80)]
        public string Map_link { get; set; }
    }
}
