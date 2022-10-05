namespace PresensiSerenity.Presensi {
    export interface AbsenRow {
        Id?: number;
        Tanggal?: string;
        Ijin?: Ijintype;
        Image?: string;
        Status?: number;
        UserId?: number;
        SiswaId?: number;
        GuruId?: number;
        SiswaNis?: string;
        SiswaNama?: string;
        SiswaTempat?: string;
        SiswaTanggalLahir?: string;
        SiswaJenisKelamin?: number;
        SiswaAgama?: number;
        SiswaNoHp?: string;
        SiswaAlamat?: string;
        SiswaNamaAyah?: string;
        SiswaNamaIbu?: string;
        SiswaKelasId?: number;
        GuruNip?: string;
        GuruNama?: string;
        GuruTempat?: string;
        GuruTanggallahir?: string;
        GuruJenisKelamin?: number;
        GuruAgama?: number;
        GuruAlamat?: string;
        GuruStatus?: number;
    }

    export namespace AbsenRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Ijin';
        export const localTextPrefix = 'Presensi.Absen';
        export const deletePermission = 'Absensi:Modify';
        export const insertPermission = 'Absensi:Modify';
        export const readPermission = 'Absensi:View';
        export const updatePermission = 'Absensi:Modify';

        export declare const enum Fields {
            Id = "Id",
            Tanggal = "Tanggal",
            Ijin = "Ijin",
            Image = "Image",
            Status = "Status",
            UserId = "UserId",
            SiswaId = "SiswaId",
            GuruId = "GuruId",
            SiswaNis = "SiswaNis",
            SiswaNama = "SiswaNama",
            SiswaTempat = "SiswaTempat",
            SiswaTanggalLahir = "SiswaTanggalLahir",
            SiswaJenisKelamin = "SiswaJenisKelamin",
            SiswaAgama = "SiswaAgama",
            SiswaNoHp = "SiswaNoHp",
            SiswaAlamat = "SiswaAlamat",
            SiswaNamaAyah = "SiswaNamaAyah",
            SiswaNamaIbu = "SiswaNamaIbu",
            SiswaKelasId = "SiswaKelasId",
            GuruNip = "GuruNip",
            GuruNama = "GuruNama",
            GuruTempat = "GuruTempat",
            GuruTanggallahir = "GuruTanggallahir",
            GuruJenisKelamin = "GuruJenisKelamin",
            GuruAgama = "GuruAgama",
            GuruAlamat = "GuruAlamat",
            GuruStatus = "GuruStatus"
        }
    }
}
