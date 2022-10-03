
namespace PresensiSerenity.Master {

    @Serenity.Decorators.registerClass()
    export class JurusanDialog extends Serenity.EntityDialog<JurusanRow, any> {
        protected getFormKey() { return JurusanForm.formKey; }
        protected getIdProperty() { return JurusanRow.idProperty; }
        protected getLocalTextPrefix() { return JurusanRow.localTextPrefix; }
        protected getNameProperty() { return JurusanRow.nameProperty; }
        protected getService() { return JurusanService.baseUrl; }
        protected getDeletePermission() { return JurusanRow.deletePermission; }
        protected getInsertPermission() { return JurusanRow.insertPermission; }
        protected getUpdatePermission() { return JurusanRow.updatePermission; }

        protected form = new JurusanForm(this.idPrefix);

    }
}