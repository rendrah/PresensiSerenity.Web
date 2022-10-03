
namespace PresensiSerenity.Master {

    @Serenity.Decorators.registerClass()
    export class KelasGrid extends Serenity.EntityGrid<KelasRow, any> {
        protected getColumnsKey() { return KelasColumns.columnsKey; }
        protected getDialogType() { return KelasDialog; }
        protected getIdProperty() { return KelasRow.idProperty; }
        protected getInsertPermission() { return KelasRow.insertPermission; }
        protected getLocalTextPrefix() { return KelasRow.localTextPrefix; }
        protected getService() { return KelasService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}