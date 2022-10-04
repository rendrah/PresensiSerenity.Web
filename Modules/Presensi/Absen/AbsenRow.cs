using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace PresensiSerenity.Presensi
{
    [ConnectionKey("Presensi"), Module("Presensi"), TableName("absen")]
    [DisplayName("Absen"), InstanceName("Absen")]
    [ReadPermission("Absensi:View")]
    [ModifyPermission("Absensi:Modify")]
    public sealed class AbsenRow : Row<AbsenRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Tanggal"), Column("tanggal")]
        public DateTime? Tanggal
        {
            get => fields.Tanggal[this];
            set => fields.Tanggal[this] = value;
        }

        [DisplayName("Ijin"), Column("ijin"), Size(20), QuickSearch, NameProperty]
        public string Ijin
        {
            get => fields.Ijin[this];
            set => fields.Ijin[this] = value;
        }

        [DisplayName("Image"), Column("image"), Size(50)]
        public string Image
        {
            get => fields.Image[this];
            set => fields.Image[this] = value;
        }

        [DisplayName("Status"), Column("status")]
        public int? Status
        {
            get => fields.Status[this];
            set => fields.Status[this] = value;
        }

        [DisplayName("Siswa"), Column("siswaId"), ForeignKey("siswa", "Id"), LeftJoin("jSiswa"), TextualField("SiswaNis")]
        public int? SiswaId
        {
            get => fields.SiswaId[this];
            set => fields.SiswaId[this] = value;
        }

        [DisplayName("Guru"), Column("guruId"), ForeignKey("guru", "Id"), LeftJoin("jGuru"), TextualField("GuruNip")]
        public int? GuruId
        {
            get => fields.GuruId[this];
            set => fields.GuruId[this] = value;
        }

        [DisplayName("Siswa Nis"), Expression("jSiswa.[NIS]")]
        public string SiswaNis
        {
            get => fields.SiswaNis[this];
            set => fields.SiswaNis[this] = value;
        }

        [DisplayName("Siswa Nama"), Expression("jSiswa.[Nama]")]
        public string SiswaNama
        {
            get => fields.SiswaNama[this];
            set => fields.SiswaNama[this] = value;
        }

        [DisplayName("Siswa Tempat"), Expression("jSiswa.[Tempat]")]
        public string SiswaTempat
        {
            get => fields.SiswaTempat[this];
            set => fields.SiswaTempat[this] = value;
        }

        [DisplayName("Siswa Tanggal Lahir"), Expression("jSiswa.[TanggalLahir]")]
        public DateTime? SiswaTanggalLahir
        {
            get => fields.SiswaTanggalLahir[this];
            set => fields.SiswaTanggalLahir[this] = value;
        }

        [DisplayName("Siswa Jenis Kelamin"), Expression("jSiswa.[JenisKelamin]")]
        public int? SiswaJenisKelamin
        {
            get => fields.SiswaJenisKelamin[this];
            set => fields.SiswaJenisKelamin[this] = value;
        }

        [DisplayName("Siswa Agama"), Expression("jSiswa.[Agama]")]
        public int? SiswaAgama
        {
            get => fields.SiswaAgama[this];
            set => fields.SiswaAgama[this] = value;
        }

        [DisplayName("Siswa No Hp"), Expression("jSiswa.[noHP]")]
        public string SiswaNoHp
        {
            get => fields.SiswaNoHp[this];
            set => fields.SiswaNoHp[this] = value;
        }

        [DisplayName("Siswa Alamat"), Expression("jSiswa.[Alamat]")]
        public string SiswaAlamat
        {
            get => fields.SiswaAlamat[this];
            set => fields.SiswaAlamat[this] = value;
        }

        [DisplayName("Siswa Nama Ayah"), Expression("jSiswa.[namaAyah]")]
        public string SiswaNamaAyah
        {
            get => fields.SiswaNamaAyah[this];
            set => fields.SiswaNamaAyah[this] = value;
        }

        [DisplayName("Siswa Nama Ibu"), Expression("jSiswa.[namaIbu]")]
        public string SiswaNamaIbu
        {
            get => fields.SiswaNamaIbu[this];
            set => fields.SiswaNamaIbu[this] = value;
        }

        [DisplayName("Siswa Kelas Id"), Expression("jSiswa.[kelasId]")]
        public int? SiswaKelasId
        {
            get => fields.SiswaKelasId[this];
            set => fields.SiswaKelasId[this] = value;
        }

        [DisplayName("Guru Nip"), Expression("jGuru.[nip]")]
        public string GuruNip
        {
            get => fields.GuruNip[this];
            set => fields.GuruNip[this] = value;
        }

        [DisplayName("Guru Nama"), Expression("jGuru.[nama]")]
        public string GuruNama
        {
            get => fields.GuruNama[this];
            set => fields.GuruNama[this] = value;
        }

        [DisplayName("Guru Tempat"), Expression("jGuru.[tempat]")]
        public string GuruTempat
        {
            get => fields.GuruTempat[this];
            set => fields.GuruTempat[this] = value;
        }

        [DisplayName("Guru Tanggallahir"), Expression("jGuru.[tanggallahir]")]
        public DateTime? GuruTanggallahir
        {
            get => fields.GuruTanggallahir[this];
            set => fields.GuruTanggallahir[this] = value;
        }

        [DisplayName("Guru Jenis Kelamin"), Expression("jGuru.[jenisKelamin]")]
        public int? GuruJenisKelamin
        {
            get => fields.GuruJenisKelamin[this];
            set => fields.GuruJenisKelamin[this] = value;
        }

        [DisplayName("Guru Agama"), Expression("jGuru.[agama]")]
        public int? GuruAgama
        {
            get => fields.GuruAgama[this];
            set => fields.GuruAgama[this] = value;
        }

        [DisplayName("Guru Alamat"), Expression("jGuru.[alamat]")]
        public string GuruAlamat
        {
            get => fields.GuruAlamat[this];
            set => fields.GuruAlamat[this] = value;
        }

        [DisplayName("Guru Status"), Expression("jGuru.[status]")]
        public int? GuruStatus
        {
            get => fields.GuruStatus[this];
            set => fields.GuruStatus[this] = value;
        }

        public AbsenRow()
            : base()
        {
        }

        public AbsenRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public DateTimeField Tanggal;
            public StringField Ijin;
            public StringField Image;
            public Int32Field Status;
            public Int32Field SiswaId;
            public Int32Field GuruId;

            public StringField SiswaNis;
            public StringField SiswaNama;
            public StringField SiswaTempat;
            public DateTimeField SiswaTanggalLahir;
            public Int32Field SiswaJenisKelamin;
            public Int32Field SiswaAgama;
            public StringField SiswaNoHp;
            public StringField SiswaAlamat;
            public StringField SiswaNamaAyah;
            public StringField SiswaNamaIbu;
            public Int32Field SiswaKelasId;

            public StringField GuruNip;
            public StringField GuruNama;
            public StringField GuruTempat;
            public DateTimeField GuruTanggallahir;
            public Int32Field GuruJenisKelamin;
            public Int32Field GuruAgama;
            public StringField GuruAlamat;
            public Int32Field GuruStatus;
        }
    }
}
