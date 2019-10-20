using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Configuration;
using System.Web.Mvc;
using waterwegenvic.Models;

namespace waterwegenvic.Controllers
{
    public class HomeController : Controller
    {

        private gruModels db = new gruModels(WebConfigurationManager.ConnectionStrings["gruModels"].ConnectionString);

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

            return View(db.grus.ToList());
        }
    }
}