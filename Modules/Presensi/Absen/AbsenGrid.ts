
namespace PresensiSerenity.Presensi {

    @Serenity.Decorators.registerClass()
    export class AbsenGrid extends Serenity.EntityGrid<AbsenRow, any> {
        protected getColumnsKey() { return AbsenColumns.columnsKey; }
        protected getDialogType() { return AbsenDialog; }
        protected getIdProperty() { return AbsenRow.idProperty; }
        protected getInsertPermission() { return AbsenRow.insertPermission; }
        protected getLocalTextPrefix() { return AbsenRow.localTextPrefix; }
        protected getService() { return AbsenService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}