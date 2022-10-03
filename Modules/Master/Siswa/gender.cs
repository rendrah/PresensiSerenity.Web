using System.ComponentModel; 
using Serenity.ComponentModel; 
 
namespace PresensiSerenity.Master
{ 
    [EnumKey("Siswa.gender")] 
    public enum gender
    { 
        [Description("Laki - Laki")] 
        LakiLaki = 1, 
        [Description("Perempuan")] 
        Perempuan = 2 
    } 
} 