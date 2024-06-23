using FFM.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace FFM.Controllers
{
    public class DeliveryMen : Controller
    {
        // GET: DeliveryMen
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult AccountInfo()
        {
            return View();
        }

        public IActionResult UpdateAccountInfo()
        {
            return View();
        }

        public IActionResult PackageAvailable()
        {
            return View();
        }

        public IActionResult DeliveredPackage()
        {
            return View();
        }

        public IActionResult PackageDetails()
        {
            return View();
        }

        public IActionResult UpdateOrderStatus()
        {
            return View();
        }

        public IActionResult ViewDeliveryRoute()
        {
            return View();
        }

        // GET: DeliveryMen/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: DeliveryMen/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: DeliveryMen/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: DeliveryMen/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: DeliveryMen/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: DeliveryMen/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: DeliveryMen/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
