using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace PresensiSerenity.Master.Columns
{
    [ColumnsScript("Master.Siswa")]
    [BasedOnRow(typeof(SiswaRow), CheckNames = true)]
    public class SiswaColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int Id { get; set; }
        [EditLink]
        public string Nis { get; set; }
        public string Nama { get; set; }
        public string Tempat { get; set; }
        public DateTime TanggalLahir { get; set; }
        //    [Width(100), GenderFormatter] 
        public int JenisKelamin { get; set; }
        public int Agama { get; set; }
        public string NoHp { get; set; }
        public string Alamat { get; set; }
        public string NamaAyah { get; set; }
        public string NamaIbu { get; set; }
        // [QuickFilter]
        public string KelasNamaKelas { get; set; }
    }
}