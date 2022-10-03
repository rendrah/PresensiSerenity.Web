using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;
using System.Collections.Generic;

namespace PresensiSerenity.Master
{
    [ConnectionKey("Presensi"), Module("Master"), TableName("kelas")]
    [DisplayName("Kelas"), InstanceName("Kelas")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class KelasRow : Row<KelasRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id Kelas"), Identity, IdProperty]
        public int? IdKelas
        {
            get => fields.IdKelas[this];
            set => fields.IdKelas[this] = value;
        }

        [DisplayName("Nama Kelas"), Size(50), QuickSearch, NameProperty]
        public string NamaKelas
        {
            get => fields.NamaKelas[this];
            set => fields.NamaKelas[this] = value;
        }

        [DisplayName("Jurusan"), Column("jurusanId"), ForeignKey("jurusan", "IdJurusan"), LeftJoin("jJurusan"), TextualField("JurusanNamaJurusan")]
        [LookupEditor(typeof(JurusanRow), InplaceAdd = true)]
        public int? JurusanId
        {
            get => fields.JurusanId[this];
            set => fields.JurusanId[this] = value;
        }

        [DisplayName("Jurusan Nama Jurusan"), Expression("jJurusan.[NamaJurusan]")]
        public string JurusanNamaJurusan
        {
            get => fields.JurusanNamaJurusan[this];
            set => fields.JurusanNamaJurusan[this] = value;
        }

        public List<SiswaRow> SiswaDetail
        {
            get => fields.SiswaDetail[this];
            set => fields.SiswaDetail[this] = value;
        }


        public KelasRow()
            : base()
        {
        }

        public KelasRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdKelas;
            public StringField NamaKelas;
            public Int32Field JurusanId;

            public StringField JurusanNamaJurusan;

            public RowListField<SiswaRow> SiswaDetail;
        }
    }
}
