using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace PresensiSerenity.Master.Forms
{
    [FormScript("Master.Kelas")]
    [BasedOnRow(typeof(KelasRow), CheckNames = true)]
    public class KelasForm
    {
        public string NamaKelas { get; set; }
        public int JurusanId { get; set; }

        [SiswaDetailEditor]
        public List<SiswaRow> SiswaDetail { get; set; }
    }
}