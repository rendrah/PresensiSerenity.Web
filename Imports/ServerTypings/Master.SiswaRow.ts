namespace PresensiSerenity.Master {
    export interface SiswaRow {
        Id?: number;
        Nis?: string;
        Nama?: string;
        Tempat?: string;
        TanggalLahir?: string;
        JenisKelamin?: gender;
        Agama?: Agama;
        NoHp?: string;
        Alamat?: string;
        NamaAyah?: string;
        NamaIbu?: string;
        KelasId?: number;
        KelasNamaKelas?: string;
        KelasJurusanId?: number;
    }

    export namespace SiswaRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nama';
        export const localTextPrefix = 'Master.Siswa';
        export const lookupKey = 'Master.Siswa';

        export function getLookup(): Q.Lookup<SiswaRow> {
            return Q.getLookup<SiswaRow>('Master.Siswa');
        }
        export const deletePermission = 'Siswa:General';
        export const insertPermission = 'Siswa:General';
        export const readPermission = 'Siswa:General';
        export const updatePermission = 'Siswa:General';

        export declare const enum Fields {
            Id = "Id",
            Nis = "Nis",
            Nama = "Nama",
            Tempat = "Tempat",
            TanggalLahir = "TanggalLahir",
            JenisKelamin = "JenisKelamin",
            Agama = "Agama",
            NoHp = "NoHp",
            Alamat = "Alamat",
            NamaAyah = "NamaAyah",
            NamaIbu = "NamaIbu",
            KelasId = "KelasId",
            KelasNamaKelas = "KelasNamaKelas",
            KelasJurusanId = "KelasJurusanId"
        }
    }
}
