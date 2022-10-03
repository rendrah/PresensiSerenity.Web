using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace PresensiSerenity.Master
{
    public partial class JenKelFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "PresensiSerenity.Master.JenKelFormatter";

        public JenKelFormatterAttribute()
            : base(Key)
        {
        }
    }
}
