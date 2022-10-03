using System.ComponentModel; 
using Serenity.ComponentModel; 
 
namespace PresensiSerenity.Master
{ 
    [EnumKey("Siswa.Agama")] 
    public enum Agama
    { 
        [Description("Islam")] 
        Islam = 1, 
        [Description("Kristen")] 
        Kristen = 2 ,
        [Description("Katolik")] 
        Katolik = 3 ,
        [Description("Hindu")] 
        Hindu = 4 ,
        [Description("Budha")] 
        Budha = 5 ,
        [Description("Khonghucu")] 
        Khonghucu = 6               
    } 
} 