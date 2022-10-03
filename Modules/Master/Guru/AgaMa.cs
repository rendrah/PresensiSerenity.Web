using Serenity.ComponentModel;
using System.ComponentModel;

namespace PresensiSerenity.Master
{
    [EnumKey("Master.AgaMa")]
    public enum AgaMa
    {
        [Description("Islam")]
        Islam = 1,
        [Description("Kristen")]
        Kristen = 2,

        [Description("Katolik")]
        Katolik = 3,
        [Description("Hindu")]
        Hindu = 4,
        [Description("Budha")]
        Budha = 5,
        [Description("Konghucu")]
        Konghucu = 6,
    }
}