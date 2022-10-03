
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
    }
}