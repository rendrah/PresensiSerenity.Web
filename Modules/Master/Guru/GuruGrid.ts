
namespace PresensiSerenity.Master {

    import fld = GuruRow.Fields;
    @Serenity.Decorators.registerClass()
    export class GuruGrid extends Serenity.EntityGrid<GuruRow, any> {
        protected getColumnsKey() { return GuruColumns.columnsKey; }
        protected getDialogType() { return GuruDialog; }
        protected getIdProperty() { return GuruRow.idProperty; }
        protected getInsertPermission() { return GuruRow.insertPermission; }
        protected getLocalTextPrefix() { return GuruRow.localTextPrefix; }
        protected getService() { return GuruService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();
            buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: GuruService.baseUrl + '/ListExcel',
                separator: true
            }));
            buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));
            return buttons;
        }
        protected getQuickSearchFields(): Serenity.QuickSearchField[] {
            const txt = (s) =>
                Q.text(`Db.${GuruRow.localTextPrefix}.${s}`).toLowerCase();
            return [
                { name: "", title: "all" },
                { name: fld.Nip, title: txt(fld.Nip) },
                { name: fld.Nama, title: txt(fld.Nama) },
                { name: fld.Alamat, title: txt(fld.Alamat) }
            ];
        }
    }
    
}