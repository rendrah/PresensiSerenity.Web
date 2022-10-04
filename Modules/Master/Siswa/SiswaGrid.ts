
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
                format: ctx => `<a class="inline-action view-details" title="view-details" style="cursor: pointer;"><i class="fa fa-search"></i></a>`,
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            return columns;
        }
        protected onClick(e: JQueryEventObject, row: number, cell: number): void {

            // let base grid handle clicks for its edit links
            super.onClick(e, row, cell);

            // if base grid already handled, we shouldn"t handle it again
            if (e.isDefaultPrevented()) {
                return;
            }

            // get reference to current item
            var item = this.itemAt(row);

            // get reference to clicked element
            var target = $(e.target);

            // if (target.hasClass("Buku-link")) {
            //     e.preventDefault();

            //     let message = Q.format(
            //         "<p>Anda menekan Sebuah Detail Buku</p>" +
            //         "<p>Jika Anda Menekan YES, Maka Itu Akan Membuka Form Buku</p>" +
            //         "<p>Jika Anda Menekan NO, Maka Itu Akan Menutup Dialog</p>",
            //         Q.htmlEncode(item.JudulBuku));

            //     Q.confirm(message, () => {
            //         // CustomerDialog doesn't use CustomerID but ID (identity)
            //         // so need to find customer to get its actual ID
            //         var buku = Q.first(Perpustakaan.BukuRow.getLookup().items,
            //             x => x.JudulBuku == item.JudulBuku);

            //         new Perpustakaan.BukuDialog().loadByIdAndOpenDialog(buku.Id);
            //     },
            //         {
            //             htmlEncode: false,
            //             onNo: () => {
            //                 Q.notifyInfo("Anda Menekan No. Kenapa?")
            //             }
            //         });
            // }
            // else if (target.hasClass("Rak-link")) {
            //     e.preventDefault();

            //     Q.notifySuccess("Anda Memfilter Data Rak " + item.NamaRak);
            //     var rakFilter = this.findQuickFilter(Serenity.LookupEditor,
            //         Perpustakaan.BukuRow.Fields.IdRak);
            //     rakFilter.value = item.IdRak.toString();
            //     this.refresh();
            // }
            // else if (target.hasClass("Kategori-link")) {
            //     e.preventDefault();

            //     Q.notifySuccess("Anda Memfilter Data Kategori " + item.NamaKategori);
            //     var kategoriFilter = this.findQuickFilter(Serenity.LookupEditor,
            //         Perpustakaan.BukuRow.Fields.IdKategori);
            //     kategoriFilter.value = item.IdKategori.toString();
            //     this.refresh();
            // }

            if (target.parent().hasClass('inline-action'))
                target = target.parent();

            if (target.hasClass('inline-action')) {
                e.preventDefault();

                if (target.hasClass('delete-row')) {
                //     Q.confirm('Delete record?', () => {
                //         Perpustakaan.BukuService.Delete({
                //             EntityId: item.Id,
                //         }, response => {
                //             this.refresh();
                //         });
                //     });
                }
                else if (target.hasClass('view-details')) {
                    // this.editItem(item.Id);
                    var dialog = new Presensi.AbsenDialog();
                    this.initDialog(dialog);
                    dialog.loadEntityAndOpenDialog(<Presensi.AbsenRow>{ 
                        SiswaId : item.Id,
                        GuruId : 1
                    });
                }
            }
        }
    }
}