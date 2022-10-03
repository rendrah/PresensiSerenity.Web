using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace PresensiSerenity.Master.Pages
{

    [PageAuthorize(typeof(GuruRow))]
    public class GuruController : Controller
    {
        [Route("Master/Guru")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/Guru/GuruIndex.cshtml");
        }
    }
}