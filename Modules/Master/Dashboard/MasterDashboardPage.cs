using Microsoft.AspNetCore.Mvc;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Web;
using System;

namespace PresensiSerenity.Master.Pages
{
    [Route("Master/Dashboard/[action]")]
    public class MasterDashboardController : Controller
    {
        [PageAuthorize, HttpGet, Route("~/Dashboard")]
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

            var o = Serenity.Demo.Northwind.OrderRow.Fields;

            var cachedModel = cache.GetLocalStoreOnly("MasterDashboardPageModel", TimeSpan.FromMinutes(5),
                o.GenerationKey, () =>
                {
                    var model = new MasterDashboardPageModel();
                    using (var connection = sqlConnections.NewFor<Serenity.Demo.Northwind.OrderRow>())
                    {
                        model.OpenOrders = connection.Count<Serenity.Demo.Northwind.OrderRow>(
                            o.ShippingState == (int)Serenity.Demo.Northwind.OrderShippingState.NotShipped);
                        var closedOrders = connection.Count<Serenity.Demo.Northwind.OrderRow>(
                            o.ShippingState == (int)Serenity.Demo.Northwind.OrderShippingState.Shipped);
                        var totalOrders = model.OpenOrders + closedOrders;
                        model.ClosedOrderPercent = (int)Math.Round(totalOrders == 0 ? 100 :
                            ((double)closedOrders / totalOrders * 100));
                        model.CustomerCount = connection.Count<Serenity.Demo.Northwind.CustomerRow>();
                        model.ProductCount = connection.Count<Serenity.Demo.Northwind.ProductRow>();
                    }
                    return model;
                });
            return View(MVC.Views.Master.Dashboard.MasterDashboardIndex, cachedModel);
            //<else>
            //return View(MVC.Views.Common.Dashboard.DashboardIndex, new DashboardPageModel());
            //</if:Northwind>
        }
    }
}
