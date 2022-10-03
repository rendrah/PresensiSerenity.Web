using Serenity.Navigation;
using MyPages = PresensiSerenity.Master.Pages;
[assembly: NavigationLink(1000, "Dashboard", url: "~/", permission: "", icon: "fa-tachometer")]


[assembly: NavigationLink(1100, "Master/Guru", typeof(MyPages.GuruController), icon: null)]
[assembly: NavigationLink(1200, "Master/Jurusan", typeof(MyPages.JurusanController), icon: null)]
[assembly: NavigationLink(1300, "Master/Kelas", typeof(MyPages.KelasController), icon: null)]
[assembly: NavigationLink(1400, "Master/Siswa", typeof(MyPages.SiswaController), icon: null)]
