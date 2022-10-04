
namespace PresensiSerenity.Master {
    import fld = SiswaRow.Fields;

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

        protected getQuickSearchFields(): Serenity.QuickSearchField[] {
            const txt = (s) =>
                Q.text(`Db.${SiswaRow.localTextPrefix}.${s}`).toLowerCase();

            return [
                { name: "", title: "all" },
                { name: fld.Nis, title: txt(fld.Nis) },
                { name: fld.Nama, title: txt(fld.Nama) },
                { name: fld.Alamat, title: txt(fld.Alamat) },
                { name: fld.JenisKelamin, title: txt(fld.JenisKelamin) }
            ];
        }
        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();
            buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: SiswaService.baseUrl + '/ListExcel',
                separator: true
            }));
            buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));
            return buttons;
        }
        protected getSlickOptions(): Slick.GridOptions {
            let opt = super.getSlickOptions();
            opt.rowHeight = 80;
            opt.enableTextSelectionOnCells = true;
            opt.selectedCellCssClass = "slick-row-selected";
            opt.enableCellNavigation = true;
            return opt;
        }

        protected createSlickGrid(): Slick.Grid {
            var grid = super.createSlickGrid();
            grid.setSelectionModel(new Slick.RowSelectionModel());
            return grid;
        }
        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();
            Q.first(columns, x => x.field == fld.Nis).format =
                ctx => `<a href="javascript:;" class="Buku-
            link">${Q.htmlEncode(ctx.value)}</a>`;


            columns.unshift({
                field: 'Delete Row',
                name: '',
                //     format: ctx => '<a class="inline-action delete-row" title="delete 
                //     "style="cursor: pointer;" > ' +
                // '<i class="fa fa-trash-o text-red"></i></a>',
                format: ctx => `<a class="inline-action view-details" title="view
            details" style="cursor: pointer;">
            <i class="fa fa-search"></i></a>`,
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            columns.splice(1, 0, {
                field: 'View Details',
                name: '',
                format: ctx => `<a class="inline-action view-details" title="view
            details" style="cursor: pointer;">
            <i class="fa fa-search"></i></a>`,
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            return columns;
        }
    }
}