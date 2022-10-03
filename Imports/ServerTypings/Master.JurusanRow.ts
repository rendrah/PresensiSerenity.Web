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
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            IdJurusan = "IdJurusan",
            NamaJurusan = "NamaJurusan"
        }
    }
}
