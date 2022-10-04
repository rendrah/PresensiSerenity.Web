
namespace PresensiSerenity.Presensi {

    @Serenity.Decorators.registerClass()
    export class AbsenDialog extends Serenity.EntityDialog<AbsenRow, any> {
        protected getFormKey() { return AbsenForm.formKey; }
        protected getIdProperty() { return AbsenRow.idProperty; }
        protected getLocalTextPrefix() { return AbsenRow.localTextPrefix; }
        protected getNameProperty() { return AbsenRow.nameProperty; }
        protected getService() { return AbsenService.baseUrl; }
        protected getDeletePermission() { return AbsenRow.deletePermission; }
        protected getInsertPermission() { return AbsenRow.insertPermission; }
        protected getUpdatePermission() { return AbsenRow.updatePermission; }

        protected form = new AbsenForm(this.idPrefix);

    }
}