
namespace PresensiSerenity.Master {

    @Serenity.Decorators.registerClass()
    export class KelasDialog extends Serenity.EntityDialog<KelasRow, any> {
        protected getFormKey() { return KelasForm.formKey; }
        protected getIdProperty() { return KelasRow.idProperty; }
        protected getLocalTextPrefix() { return KelasRow.localTextPrefix; }
        protected getNameProperty() { return KelasRow.nameProperty; }
        protected getService() { return KelasService.baseUrl; }
        protected getDeletePermission() { return KelasRow.deletePermission; }
        protected getInsertPermission() { return KelasRow.insertPermission; }
        protected getUpdatePermission() { return KelasRow.updatePermission; }

        protected form = new KelasForm(this.idPrefix);

    }
}