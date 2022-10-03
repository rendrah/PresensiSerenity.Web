
namespace PresensiSerenity.Master {

    @Serenity.Decorators.registerClass()
    export class SiswaGrid extends Serenity.EntityGrid<SiswaRow, any> {
        protected getColumnsKey() { return SiswaColumns.columnsKey; }
        protected getDialogType() { return SiswaDialog; }
        protected getIdProperty() { return SiswaRow.idProperty; }
        protected getInsertPermission() { return SiswaRow.insertPermission; }
        protected getLocalTextPrefix() { return SiswaRow.localTextPrefix; }
        protected getService() { return SiswaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}