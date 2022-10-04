using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace PresensiSerenity.Presensi.Pages
{

    [PageAuthorize(typeof(AbsenRow))]
    public class AbsenController : Controller
    {
        [Route("Presensi/Absen")]
        public ActionResult Index()
        {
            return View("~/Modules/Presensi/Absen/AbsenIndex.cshtml");
        }
    }
}