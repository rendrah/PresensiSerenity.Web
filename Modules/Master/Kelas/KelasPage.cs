using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace PresensiSerenity.Master.Pages
{

    [PageAuthorize(typeof(KelasRow))]
    public class KelasController : Controller
    {
        [Route("Master/Kelas")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/Kelas/KelasIndex.cshtml");
        }
    }
}