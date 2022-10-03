namespace PresensiSerenity.Master {
    export interface GuruRow {
        Id?: number;
        Nip?: string;
        Nama?: string;
        Tempat?: string;
        Tanggallahir?: string;
        JenisKelamin?: JenKel;
        Agama?: Agama;
        Alamat?: string;
        Status?: StaTus;
    }

    export namespace GuruRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nip';
        export const localTextPrefix = 'Master.Guru';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Nip = "Nip",
            Nama = "Nama",
            Tempat = "Tempat",
            Tanggallahir = "Tanggallahir",
            JenisKelamin = "JenisKelamin",
            Agama = "Agama",
            Alamat = "Alamat",
            Status = "Status"
        }
    }
}
