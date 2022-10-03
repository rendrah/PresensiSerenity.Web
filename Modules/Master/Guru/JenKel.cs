using Serenity.ComponentModel;
using System.ComponentModel;

namespace PresensiSerenity.Master
{
    [EnumKey("Master.JenKel")]
    public enum JenKel
    {
        [Description("Laki - Laki")]
        LakiLaki = 1,
        [Description("perempuan")]
        Perempuan = 2
    }
}