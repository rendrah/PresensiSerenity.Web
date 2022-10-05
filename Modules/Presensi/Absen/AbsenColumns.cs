using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace PresensiSerenity.Presensi.Columns
{
    [ColumnsScript("Presensi.Absen")]
    [BasedOnRow(typeof(AbsenRow), CheckNames = true)]
    public class AbsenColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int Id { get; set; }
        public DateTime Tanggal { get; set; }
        [EditLink]
        public string Ijin { get; set; }
        public string Image { get; set; }
        public int Status { get; set; }
        public string SiswaNis { get; set; }
        public string GuruNip { get; set; }
    }

}