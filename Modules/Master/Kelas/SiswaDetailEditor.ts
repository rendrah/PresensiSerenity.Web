
namespace PresensiSerenity.Master {

    @Serenity.Decorators.registerEditor("PresensiSerenity.SiswaDetailEditor")
    export class SiswaDetailEditor extends
        Serenity.Extensions.GridEditorBase<SiswaRow> {
        protected getColumnsKey() { return SiswaColumns.columnsKey; }
        protected getDialogType() { return DetailSiswaEditorDialog }
        protected getLocalTextPrefix() { return SiswaRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getAddButtonCaption() {
            return "Add";
        }

        // protected getQuickFilters() {
        //     var flt = super.getQuickFilters();
        //     var q = this.id.toString();
        //     var category = Q.tryFirst(flt, x => x.field == "KelasNamaKelas");
        //     category.init = e => {
        //         e.element.getWidget(Serenity.LookupEditor).value = q;
        //     };
        //     return flt;
        // }
    }
}