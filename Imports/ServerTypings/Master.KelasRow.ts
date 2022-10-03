namespace PresensiSerenity.Master {
    export interface KelasRow {
        IdKelas?: number;
        NamaKelas?: string;
        JurusanId?: number;
        JurusanNamaJurusan?: string;
        SiswaDetail?: SiswaRow[];
    }

    export namespace KelasRow {
        export const idProperty = 'IdKelas';
        export const nameProperty = 'NamaKelas';
        export const localTextPrefix = 'Master.Kelas';
        export const lookupKey = 'Master.Kelas';

        export function getLookup(): Q.Lookup<KelasRow> {
            return Q.getLookup<KelasRow>('Master.Kelas');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            IdKelas = "IdKelas",
            NamaKelas = "NamaKelas",
            JurusanId = "JurusanId",
            JurusanNamaJurusan = "JurusanNamaJurusan",
            SiswaDetail = "SiswaDetail"
        }
    }
}
