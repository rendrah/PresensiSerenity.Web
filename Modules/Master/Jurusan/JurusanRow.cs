using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace PresensiSerenity.Master
{
    [ConnectionKey("Presensi"), Module("Master"), TableName("jurusan")]
    [DisplayName("Jurusan"), InstanceName("Jurusan")]
    [ReadPermission("Jurusan:View")]
    [ModifyPermission("Jurusan:Modify")]
    [LookupScript]
    public sealed class JurusanRow : Row<JurusanRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id Jurusan"), Identity, IdProperty]
        public int? IdJurusan
        {
            get => fields.IdJurusan[this];
            set => fields.IdJurusan[this] = value;
        }

        [DisplayName("Nama Jurusan"), Size(50), QuickSearch, NameProperty]
        public string NamaJurusan
        {
            get => fields.NamaJurusan[this];
            set => fields.NamaJurusan[this] = value;
        }

        public JurusanRow()
            : base()
        {
        }

        public JurusanRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdJurusan;
            public StringField NamaJurusan;
        }
    }
}
