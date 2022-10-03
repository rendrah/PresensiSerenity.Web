using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace PresensiSerenity.Master
{
    [ConnectionKey("Presensi"), Module("Master"), TableName("guru")]
    [DisplayName("Guru"), InstanceName("Guru")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class GuruRow : Row<GuruRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Nip"), Column("nip"), Size(25), QuickSearch, NameProperty]
        public string Nip
        {
            get => fields.Nip[this];
            set => fields.Nip[this] = value;
        }

        [DisplayName("Nama"), Column("nama"), Size(50)]
        public string Nama
        {
            get => fields.Nama[this];
            set => fields.Nama[this] = value;
        }

        [DisplayName("Tempat"), Column("tempat"), Size(50)]
        public string Tempat
        {
            get => fields.Tempat[this];
            set => fields.Tempat[this] = value;
        }

        [DisplayName("Tanggallahir"), Column("tanggallahir")]
        public DateTime? Tanggallahir
        {
            get => fields.Tanggallahir[this];
            set => fields.Tanggallahir[this] = value;
        }

        [DisplayName("Jenis Kelamin"), Column("jenisKelamin")]
        public JenKel? JenisKelamin
        {
            get => (JenKel)fields.JenisKelamin[this];
            set => fields.JenisKelamin[this] = (int)value;
        }

        [DisplayName("Agama"), Column("agama")]
        public Agama? Agama
        {
            get => (Agama)fields.Agama[this];
            set => fields.Agama[this] = (int)value;
        }

        [DisplayName("Alamat"), Column("alamat"), Size(50)]
        public string Alamat
        {
            get => fields.Alamat[this];
            set => fields.Alamat[this] = value;
        }

        [DisplayName("Status"), Column("status"), Size(25)]
        public StaTus Status
        {
            get => (StaTus)fields.Status[this];
            set => fields.Status[this] = (int)value;
        }

        public GuruRow()
            : base()
        {
        }

        public GuruRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Nip;
            public StringField Nama;
            public StringField Tempat;
            public DateTimeField Tanggallahir;
            public Int32Field JenisKelamin;
            public Int32Field Agama;
            public StringField Alamat;
            public Int32Field Status;
        }
    }
}
