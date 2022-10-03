using Serenity.ComponentModel;
using System.ComponentModel;

namespace PresensiSerenity.Master
{
    [EnumKey("Master.StaTus")]
    public enum StaTus
    {
        [Description("Piket")]
        Piket = 1,
        [Description("Guru")]
        Guru = 2,

        
    }
}