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
    public class gruController : Controller
    {
        private gruModels db = new gruModels(WebConfigurationManager.ConnectionStrings["gruModels"].ConnectionString);
        // private gruModels db = new gruModels();

        // GET: gru
        public ActionResult Index()
        {
            return View(db.grus.ToList());
        }

        // GET: gru/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            gru gru = db.grus.Find(id);
            if (gru == null)
            {
                return HttpNotFound();
            }
            return View(gru);
        }

        // GET: gru/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: gru/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Reference_number,Address,Post_Code,Suburb,Latitude,Longitude,Site_history,Restricted_uses,Map_link")] gru gru)
        {
            if (ModelState.IsValid)
            {
                db.grus.Add(gru);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(gru);
        }

        // GET: gru/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            gru gru = db.grus.Find(id);
            if (gru == null)
            {
                return HttpNotFound();
            }
            return View(gru);
        }

        // POST: gru/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Reference_number,Address,Post_Code,Suburb,Latitude,Longitude,Site_history,Restricted_uses,Map_link")] gru gru)
        {
            if (ModelState.IsValid)
            {
                db.Entry(gru).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(gru);
        }

        // GET: gru/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            gru gru = db.grus.Find(id);
            if (gru == null)
            {
                return HttpNotFound();
            }
            return View(gru);
        }

        // POST: gru/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            gru gru = db.grus.Find(id);
            db.grus.Remove(gru);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
