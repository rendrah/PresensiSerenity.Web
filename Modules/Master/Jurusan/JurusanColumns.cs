using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace PresensiSerenity.Master.Columns
{
    [ColumnsScript("Master.Jurusan")]
    [BasedOnRow(typeof(JurusanRow), CheckNames = true)]
    public class JurusanColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int IdJurusan { get; set; }
        [EditLink]
        public string NamaJurusan { get; set; }
    }
}