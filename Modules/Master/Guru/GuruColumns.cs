using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace PresensiSerenity.Master.Columns
{
    [ColumnsScript("Master.Guru")]
    [BasedOnRow(typeof(GuruRow), CheckNames = true)]
    public class GuruColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int Id { get; set; }
        [EditLink]
        public string Nip { get; set; }
        public string Nama { get; set; }
        [Width(200), QuickFilter]
        public string Tempat { get; set; }
        public DateTime Tanggallahir { get; set; }
        [Width(200), QuickFilter]

        [JenKelFormatter]
        public JenKel JenisKelamin { get; set; }
        public Agama Agama { get; set; }
        [Width(200), QuickFilter]
        public string Alamat { get; set; }
        public StaTus Status { get; set; }
    }
}