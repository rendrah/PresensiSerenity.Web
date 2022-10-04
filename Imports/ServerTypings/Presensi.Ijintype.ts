namespace PresensiSerenity.Presensi {
    export enum Ijintype {
        Sakit = 1,
        Alpha = 2,
        Izin = 3
    }
    Serenity.Decorators.registerEnumType(Ijintype, 'PresensiSerenity.Presensi.Ijintype', 'Absensi.Ijin');
}
