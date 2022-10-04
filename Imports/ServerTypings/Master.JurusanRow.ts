namespace PresensiSerenity.Master {
    export interface JurusanRow {
        IdJurusan?: number;
        NamaJurusan?: string;
    }

    export namespace JurusanRow {
        export const idProperty = 'IdJurusan';
        export const nameProperty = 'NamaJurusan';
        export const localTextPrefix = 'Master.Jurusan';
        export const lookupKey = 'Master.Jurusan';

        export function getLookup(): Q.Lookup<JurusanRow> {
            return Q.getLookup<JurusanRow>('Master.Jurusan');
        }
        export const deletePermission = 'Jurusan:Modify';
        export const insertPermission = 'Jurusan:Modify';
        export const readPermission = 'Jurusan:View';
        export const updatePermission = 'Jurusan:Modify';

        export declare const enum Fields {
            IdJurusan = "IdJurusan",
            NamaJurusan = "NamaJurusan"
        }
    }
}
