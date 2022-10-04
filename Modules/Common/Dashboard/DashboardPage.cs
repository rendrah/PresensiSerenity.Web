using Microsoft.AspNetCore.Mvc;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Web;
using System;

namespace PresensiSerenity.Common.Pages
{
    [Route("Dashboard/[action]")]
    public class DashboardController : Controller
    {
        [PageAuthorize, HttpGet, Route("~/")]
        public ActionResult Index(
        	//<if:Northwind>
        	[FromServices] ITwoLevelCache cache,
        	[FromServices] ISqlConnections sqlConnections
        	//</if:Northwind>
        	)
        {
            //<if:Northwind>
            if (cache is null)
            	throw new ArgumentNullException(nameof(cache));

            if (sqlConnections is null)
            	throw new ArgumentNullException(nameof(sqlConnections));

            var o = PresensiSerenity.Presensi.AbsenRow.Fields;           

            var cachedModel = cache.GetLocalStoreOnly("DashboardPageModel", TimeSpan.FromMinutes(5),
                o.GenerationKey, () =>
                {
                    var model = new DashboardPageModel();
                    using (var connection = sqlConnections.NewFor<PresensiSerenity.Presensi.AbsenRow>())
                    {
                        model.jmlSiswaAbsen = connection.Count<Presensi.AbsenRow>();
                        model.jmlSiswaSakit = connection.Count<Presensi.AbsenRow>( o.Ijin == 1 && o.Tanggal == DateTime.Today );
                        model.jmlSiswaIjin = connection.Count<Presensi.AbsenRow>( o.Ijin == 3 && o.Tanggal == DateTime.Today );
                        model.jmlSiswaAlpha = connection.Count<Presensi.AbsenRow>( o.Ijin == 2 && o.Tanggal == DateTime.Today );                                                     
                    }
                    return model;
                });
            return View(MVC.Views.Common.Dashboard.DashboardIndex, cachedModel);
            //<else>
            //return View(MVC.Views.Common.Dashboard.DashboardIndex, new DashboardPageModel());
            //</if:Northwind>
        }
    }
}
