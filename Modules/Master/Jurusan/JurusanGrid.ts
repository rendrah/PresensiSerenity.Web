
namespace PresensiSerenity.Master {

    @Serenity.Decorators.registerClass()
    export class JurusanGrid extends Serenity.EntityGrid<JurusanRow, any> {
        protected getColumnsKey() { return JurusanColumns.columnsKey; }
        protected getDialogType() { return JurusanDialog; }
        protected getIdProperty() { return JurusanRow.idProperty; }
        protected getInsertPermission() { return JurusanRow.insertPermission; }
        protected getLocalTextPrefix() { return JurusanRow.localTextPrefix; }
        protected getService() { return JurusanService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}