namespace PresensiSerenity.Master {
    export interface KelasForm {
        NamaKelas: Serenity.StringEditor;
        JurusanId: Serenity.LookupEditor;
        SiswaDetail: SiswaDetailEditor;
    }

    export class KelasForm extends Serenity.PrefixedContext {
        static formKey = 'Master.Kelas';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!KelasForm.init)  {
                KelasForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = SiswaDetailEditor;

                Q.initFormType(KelasForm, [
                    'NamaKelas', w0,
                    'JurusanId', w1,
                    'SiswaDetail', w2
                ]);
            }
        }
    }
}
