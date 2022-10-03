using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace PresensiSerenity.Master
{
    public partial class GenderFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "PresensiSerenity.Master.GenderFormatter";

        public GenderFormatterAttribute()
            : base(Key)
        {
        }
    }
}
