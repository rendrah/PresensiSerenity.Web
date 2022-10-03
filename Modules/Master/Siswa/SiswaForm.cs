using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace PresensiSerenity.Master.Forms
{
    [FormScript("Master.Siswa")]
    [BasedOnRow(typeof(SiswaRow), CheckNames = true)]
    public class SiswaForm
    {
        public string Nis { get; set; }
        public string Nama { get; set; }
        public string Tempat { get; set; }
        public DateTime TanggalLahir { get; set; }
        public int JenisKelamin { get; set; }
        public int Agama { get; set; }
        public string NoHp { get; set; }
        public string Alamat { get; set; }
        public string NamaAyah { get; set; }
        public string NamaIbu { get; set; }
        public int KelasId { get; set; }
    }
}