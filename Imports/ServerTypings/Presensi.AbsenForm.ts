namespace PresensiSerenity.Presensi {
    export interface AbsenForm {
        Tanggal: Serenity.DateEditor;
        Ijin: Serenity.EnumEditor;
        Image: Serenity.StringEditor;
        Status: Serenity.IntegerEditor;
        SiswaId: Serenity.LookupEditor;
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
                var w1 = s.EnumEditor;
                var w2 = s.StringEditor;
                var w3 = s.IntegerEditor;
                var w4 = s.LookupEditor;

                Q.initFormType(AbsenForm, [
                    'Tanggal', w0,
                    'Ijin', w1,
                    'Image', w2,
                    'Status', w3,
                    'SiswaId', w4,
                    'GuruId', w3
                ]);
            }
        }
    }
}
