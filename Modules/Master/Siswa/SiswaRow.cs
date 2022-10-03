using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace PresensiSerenity.Master
{
    [ConnectionKey("Presensi"), Module("Master"), TableName("siswa")]
    [DisplayName("Siswa"), InstanceName("Siswa")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class SiswaRow : Row<SiswaRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Nis"), Column("NIS"), Size(10), QuickSearch, NameProperty]
        public string Nis
        {
            get => fields.Nis[this];
            set => fields.Nis[this] = value;
        }

        [DisplayName("Nama"), Size(50)]
        public string Nama
        {
            get => fields.Nama[this];
            set => fields.Nama[this] = value;
        }

        [DisplayName("Tempat"), Size(25)]
        public string Tempat
        {
            get => fields.Tempat[this];
            set => fields.Tempat[this] = value;
        }

        [DisplayName("Tanggal Lahir")]
        public DateTime? TanggalLahir
        {
            get => fields.TanggalLahir[this];
            set => fields.TanggalLahir[this] = value;
        }

        [DisplayName("Jenis Kelamin")]
        public int? JenisKelamin
        {
            get => fields.JenisKelamin[this];
            set => fields.JenisKelamin[this] = value;
        }

        [DisplayName("Agama")]
        public int? Agama
        {
            get => fields.Agama[this];
            set => fields.Agama[this] = value;
        }

        [DisplayName("No Hp"), Column("noHP"), Size(25)]
        public string NoHp
        {
            get => fields.NoHp[this];
            set => fields.NoHp[this] = value;
        }

        [DisplayName("Alamat"), Size(50)]
        public string Alamat
        {
            get => fields.Alamat[this];
            set => fields.Alamat[this] = value;
        }

        [DisplayName("Nama Ayah"), Column("namaAyah"), Size(25)]
        public string NamaAyah
        {
            get => fields.NamaAyah[this];
            set => fields.NamaAyah[this] = value;
        }

        [DisplayName("Nama Ibu"), Column("namaIbu"), Size(25)]
        public string NamaIbu
        {
            get => fields.NamaIbu[this];
            set => fields.NamaIbu[this] = value;
        }

        [DisplayName("Kelas"), Column("kelasId"), ForeignKey("kelas", "IdKelas"), LeftJoin("jKelas"), TextualField("KelasNamaKelas")]
        public int? KelasId
        {
            get => fields.KelasId[this];
            set => fields.KelasId[this] = value;
        }

        [DisplayName("Kelas Nama Kelas"), Expression("jKelas.[NamaKelas]")]
        public string KelasNamaKelas
        {
            get => fields.KelasNamaKelas[this];
            set => fields.KelasNamaKelas[this] = value;
        }

        [DisplayName("Kelas Jurusan Id"), Expression("jKelas.[jurusanId]")]
        public int? KelasJurusanId
        {
            get => fields.KelasJurusanId[this];
            set => fields.KelasJurusanId[this] = value;
        }

        public SiswaRow()
            : base()
        {
        }

        public SiswaRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Nis;
            public StringField Nama;
            public StringField Tempat;
            public DateTimeField TanggalLahir;
            public Int32Field JenisKelamin;
            public Int32Field Agama;
            public StringField NoHp;
            public StringField Alamat;
            public StringField NamaAyah;
            public StringField NamaIbu;
            public Int32Field KelasId;

            public StringField KelasNamaKelas;
            public Int32Field KelasJurusanId;
        }
    }
}
