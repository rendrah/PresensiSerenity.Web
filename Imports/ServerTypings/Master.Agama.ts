namespace PresensiSerenity.Master {
    export enum Agama {
        Islam = 1,
        Kristen = 2,
        Katolik = 3,
        Hindu = 4,
        Budha = 5,
        Khonghucu = 6
    }
    Serenity.Decorators.registerEnumType(Agama, 'PresensiSerenity.Master.Agama', 'Siswa.Agama');
}
