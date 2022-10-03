using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace PresensiSerenity.Master.Forms
{
    [FormScript("Master.Jurusan")]
    [BasedOnRow(typeof(JurusanRow), CheckNames = true)]
    public class JurusanForm
    {
        public string NamaJurusan { get; set; }
    }
}