namespace PresensiSerenity.Master {
    export interface GuruForm {
        Nip: Serenity.StringEditor;
        Nama: Serenity.StringEditor;
        Tempat: Serenity.StringEditor;
        Tanggallahir: Serenity.DateEditor;
        JenisKelamin: Serenity.EnumEditor;
        Agama: Serenity.EnumEditor;
        Alamat: Serenity.StringEditor;
        Status: Serenity.EnumEditor;
    }

    export class GuruForm extends Serenity.PrefixedContext {
        static formKey = 'Master.Guru';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!GuruForm.init)  {
                GuruForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.EnumEditor;

                Q.initFormType(GuruForm, [
                    'Nip', w0,
                    'Nama', w0,
                    'Tempat', w0,
                    'Tanggallahir', w1,
                    'JenisKelamin', w2,
                    'Agama', w2,
                    'Alamat', w0,
                    'Status', w2
                ]);
            }
        }
    }
}
