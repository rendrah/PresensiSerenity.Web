using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace PresensiSerenity.Presensi.Forms
{
    [FormScript("Presensi.Absen")]
    [BasedOnRow(typeof(AbsenRow), CheckNames = true)]
    public class AbsenForm
    {
        public DateTime Tanggal { get; set; }
        public string Ijin { get; set; }
        public string Image { get; set; }
        public int Status { get; set; }
        public int SiswaId { get; set; }
        public int GuruId { get; set; }
    }

}