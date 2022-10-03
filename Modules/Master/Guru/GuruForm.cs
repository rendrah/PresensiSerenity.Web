using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace PresensiSerenity.Master.Forms
{
    [FormScript("Master.Guru")]
    [BasedOnRow(typeof(GuruRow), CheckNames = true)]
    public class GuruForm
    {
        public string Nip { get; set; }
        public string Nama { get; set; }
        public string Tempat { get; set; }
        public DateTime Tanggallahir { get; set; }
        public int JenisKelamin { get; set; }
        public int Agama { get; set; }
        public string Alamat { get; set; }
        public string Status { get; set; }
    }
}