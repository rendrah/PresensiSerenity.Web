
namespace PresensiSerenity.Master {

    @Serenity.Decorators.registerClass()
    export class DetailSiswaEditorDialog extends Serenity.Extensions.GridEditorDialog<SiswaRow> {
        protected getFormKey() { return SiswaForm.formKey; }
       
        protected getLocalTextPrefix() { return SiswaRow.localTextPrefix; }
        

        protected form : SiswaForm;
        constructor(){
            super();
            this.form = new SiswaForm(this.idPrefix);
        }

    }
}