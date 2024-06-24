using Microsoft.AspNetCore.Mvc;

namespace FFM.Controllers
{
    public class Seller : Controller
    {
        public IActionResult Index()
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

        public IActionResult UpdateOrderStatus()
        {
            return View();
        }

        public IActionResult OrderStatus()
        {
            return View();
        }
    }
}
