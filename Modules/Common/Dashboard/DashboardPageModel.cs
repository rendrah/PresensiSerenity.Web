using System.Collections.Generic;
using Serenity;
using MySql.Data.MySqlClient;
using System.Linq;

namespace PresensiSerenity.Common
{
    public class DashboardPageModel
    {    
        public int jmlSiswaAbsen { get; set; }
        public int jmlSiswaSakit { get; set; }
        public int jmlSiswaIjin { get; set; }
        public int jmlSiswaAlpha { get; set; }

        string connectionString = "Server=localhost;Port=3306;Database=presensidb;Username=root;Password=";
=======
        string connectionString = "Server=localhost;Port=3306;Database=presensiDB;Username=rendra;Password=123";
>>>>>>> b219e455dd7dbb1ad2d6acbfed18512b83d3272b
        // public string KotaKota { get; set; } //nama nama kota
        public int AbsenCount { get; set; } 

        public DashboardPageModel() 
        {
            FetchAbsenProperty();
           
        }
        public void FetchAbsenProperty()
        {            
            List<int> absenCount = new List<int>();

            string yearString = "SELECT COUNT(*) FROM absen WHERE tanggal =  CURDATE()";
            var con = new MySqlConnection(connectionString);
            con.Open();

            MySqlCommand request = new MySqlCommand(yearString, con);

            using MySqlDataReader rdr = request.ExecuteReader();

            // while (rdr.Read()) // deteksi apakah variabel rdr ada datanya, jika ada masuk ke while
            // {                
            //     absenCount.Add(rdr.GetInt32(0));
            // }
            rdr.Read();
            AbsenCount = rdr.GetInt32(0);
            con.Close();
        }
    }
}