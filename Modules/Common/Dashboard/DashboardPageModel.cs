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
        public int jmlBAbsen { get; set; }
        public int jmlBSakit { get; set; }
        public int jmlBIjin { get; set; }
        public int jmlBAlpha { get; set; }
        string connectionString = "Server=localhost;Port=3306;Database=presensidb;Username=root;Password=";


        public int AbsenCount { get; set; } 
        public int SakitCount { get; set; } 
        public int IjinCount { get; set; } 
        public int AlphaCount { get; set; } 

        public DashboardPageModel() 
        {
            FetchAbsenProperty();
            jmlBulanSakit();
            jmlBulanIjin();
            jmlBulanAlpha();
           
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

        public void jmlBulanSakit()
        {            
            string sakitString = "SELECT COUNT(*) FROM absen WHERE ijin=1 and Month(tanggal) =  Month(Now())";
            var con = new MySqlConnection(connectionString);
            con.Open();

            MySqlCommand request = new MySqlCommand(sakitString, con);
            using MySqlDataReader rdr = request.ExecuteReader();
            rdr.Read();
            SakitCount = rdr.GetInt32(0);
            
            
            
            con.Close();
        }
        public void jmlBulanIjin()
        {            
            
            string ijinString = "SELECT COUNT(*) FROM absen WHERE ijin=3 and Month(tanggal) =  Month(Now())";
            
            var con = new MySqlConnection(connectionString);
            con.Open();

            MySqlCommand request = new MySqlCommand(ijinString, con);
            using MySqlDataReader rdr = request.ExecuteReader();
            rdr.Read();
            IjinCount = rdr.GetInt32(0);   

            con.Close();
        }

        public void jmlBulanAlpha()
        {            
            
            string ijinString = "SELECT COUNT(*) FROM absen WHERE ijin=2 and Month(tanggal) =  Month(Now())";
            
            var con = new MySqlConnection(connectionString);
            con.Open();

            MySqlCommand request = new MySqlCommand(ijinString, con);
            using MySqlDataReader rdr = request.ExecuteReader();
            rdr.Read();
            AlphaCount = rdr.GetInt32(0);   

            con.Close();
        }
    }
}