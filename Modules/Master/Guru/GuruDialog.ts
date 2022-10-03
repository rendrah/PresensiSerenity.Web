
namespace PresensiSerenity.Master {

    @Serenity.Decorators.registerClass()
    export class GuruDialog extends Serenity.EntityDialog<GuruRow, any> {
        protected getFormKey() { return GuruForm.formKey; }
        protected getIdProperty() { return GuruRow.idProperty; }
        protected getLocalTextPrefix() { return GuruRow.localTextPrefix; }
        protected getNameProperty() { return GuruRow.nameProperty; }
        protected getService() { return GuruService.baseUrl; }
        protected getDeletePermission() { return GuruRow.deletePermission; }
        protected getInsertPermission() { return GuruRow.insertPermission; }
        protected getUpdatePermission() { return GuruRow.updatePermission; }

        protected form = new GuruForm(this.idPrefix);

    }
}