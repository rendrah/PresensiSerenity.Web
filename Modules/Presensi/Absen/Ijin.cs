using Serenity.ComponentModel;
using System.ComponentModel;

namespace PresensiSerenity.Presensi
{
    [EnumKey("Absensi.Ijin")]
    public enum Ijintype
    {
        [Description("Sakit")]
        Sakit = 1,
        [Description("Alpha")]
        Alpha = 2,
        [Description("Izin")]
        Izin = 3
    }
}