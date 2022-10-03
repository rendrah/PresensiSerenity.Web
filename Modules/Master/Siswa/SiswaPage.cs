using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace PresensiSerenity.Master.Pages
{

    [PageAuthorize(typeof(SiswaRow))]
    public class SiswaController : Controller
    {
        [Route("Master/Siswa")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/Siswa/SiswaIndex.cshtml");
        }
    }
}