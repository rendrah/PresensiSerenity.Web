using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace PresensiSerenity.Master.Columns
{
    [ColumnsScript("Master.Kelas")]
    [BasedOnRow(typeof(KelasRow), CheckNames = true)]
    public class KelasColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int IdKelas { get; set; }
        [EditLink]
        public string NamaKelas { get; set; }
        public string JurusanNamaJurusan { get; set; }
    }
}