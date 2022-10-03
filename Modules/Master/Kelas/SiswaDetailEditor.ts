
namespace PresensiSerenity.Master {

    @Serenity.Decorators.registerEditor("PresensiSerenity.SiswaDetailEditor")
    export class SiswaDetailEditor extends
        Serenity.Extensions.GridEditorBase<SiswaRow> {
        protected getColumnsKey() { return SiswaColumns.columnsKey; }
        protected getDialogType(){return DetailSiswaEditorDialog}
        protected getLocalTextPrefix() { return SiswaRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getAddButtonCaption() {
            return "Add";
        }
    }
}