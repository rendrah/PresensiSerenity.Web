using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace PresensiSerenity.Master
{
    public partial class SiswaDetailEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "PresensiSerenity.Master.SiswaDetailEditor";

        public SiswaDetailEditorAttribute()
            : base(Key)
        {
        }
    }
}
