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

        public IActionResult DeliveryPackage()
        {
            return View();
        }

        public IActionResult ViewDeliveryPackage()
        {
            return View();
        }

        public IActionResult NewDeliveryPackage()
        {
            return View();
        }

		public IActionResult DeliveryMen()
		{
			return View();
		}

        public IActionResult Report()
        {
            return View();
        }

		public IActionResult ViewReport()
		{
			return View();
		}

		public IActionResult Item()
		{
			return View();
		}
	}
}
