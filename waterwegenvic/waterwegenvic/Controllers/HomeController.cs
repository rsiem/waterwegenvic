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

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Background()
        {
            ViewBag.Message = "Your background page.";

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

        public ActionResult Groundwater()
        {
            ViewBag.Message = "Your groundwater page.";

            return View();
        }
    }
}