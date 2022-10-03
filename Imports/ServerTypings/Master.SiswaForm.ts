namespace PresensiSerenity.Master {
    export interface SiswaForm {
        Nis: Serenity.StringEditor;
        Nama: Serenity.StringEditor;
        Tempat: Serenity.StringEditor;
        TanggalLahir: Serenity.DateEditor;
        JenisKelamin: Serenity.EnumEditor;
        Agama: Serenity.EnumEditor;
        NoHp: Serenity.StringEditor;
        Alamat: Serenity.StringEditor;
        NamaAyah: Serenity.StringEditor;
        NamaIbu: Serenity.StringEditor;
        KelasId: Serenity.LookupEditor;
    }

    export class SiswaForm extends Serenity.PrefixedContext {
        static formKey = 'Master.Siswa';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SiswaForm.init)  {
                SiswaForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.EnumEditor;
                var w3 = s.LookupEditor;

                Q.initFormType(SiswaForm, [
                    'Nis', w0,
                    'Nama', w0,
                    'Tempat', w0,
                    'TanggalLahir', w1,
                    'JenisKelamin', w2,
                    'Agama', w2,
                    'NoHp', w0,
                    'Alamat', w0,
                    'NamaAyah', w0,
                    'NamaIbu', w0,
                    'KelasId', w3
                ]);
            }
        }
    }
}
