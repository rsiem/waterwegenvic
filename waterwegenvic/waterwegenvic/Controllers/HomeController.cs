using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace waterwegenvic.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Substance()
        {
            ViewBag.Message = "Your substance page.";

            return View();
        }

        public ActionResult Litter()
        {
            ViewBag.Message = "Your litter page.";

            return View();
        }

        public ActionResult Stormwater()
        {
            ViewBag.Message = "Your stormwater page.";

            return View();
        }
    }
}