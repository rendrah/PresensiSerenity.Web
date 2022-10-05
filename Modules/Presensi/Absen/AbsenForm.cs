using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace PresensiSerenity.Presensi.Forms
{
    [FormScript("Presensi.Absen")]
    [BasedOnRow(typeof(AbsenRow), CheckNames = true)]
    public class AbsenForm
    {
        [DefaultValue("Now")]
        public DateTime Tanggal { get; set; }
        public string Ijin { get; set; }
        [ReadPermission("Absensi:SiswaRead"),ModifyPermission("Absensi:SiswaModify")]
        public string Image { get; set; }
        public int Status { get; set; }
        [ReadOnly(true)]
        [ReadPermission("Absensi:SiswaRead"),ModifyPermission("Absensi:SiswaModify")]
        public int SiswaId { get; set; }
        [ReadOnly(true)]
        [ReadPermission("Absensi:GuruRead"),ModifyPermission("Absensi:GuruModify")]
        public int GuruId { get; set; }
    }
}