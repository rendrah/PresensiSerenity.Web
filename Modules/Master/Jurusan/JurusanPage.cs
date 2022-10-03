using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace PresensiSerenity.Master.Pages
{

    [PageAuthorize(typeof(JurusanRow))]
    public class JurusanController : Controller
    {
        [Route("Master/Jurusan")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/Jurusan/JurusanIndex.cshtml");
        }
    }
}