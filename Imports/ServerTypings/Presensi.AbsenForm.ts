namespace PresensiSerenity.Presensi {
    export interface AbsenForm {
        Tanggal: Serenity.DateEditor;
        Ijin: Serenity.StringEditor;
        Image: Serenity.StringEditor;
        Status: Serenity.IntegerEditor;
        SiswaId: Serenity.IntegerEditor;
        GuruId: Serenity.IntegerEditor;
    }

    export class AbsenForm extends Serenity.PrefixedContext {
        static formKey = 'Presensi.Absen';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AbsenForm.init)  {
                AbsenForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.StringEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(AbsenForm, [
                    'Tanggal', w0,
                    'Ijin', w1,
                    'Image', w1,
                    'Status', w2,
                    'SiswaId', w2,
                    'GuruId', w2
                ]);
            }
        }
    }
}
