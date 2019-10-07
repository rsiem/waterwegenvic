using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using waterwegenvic;
using waterwegenvic.Controllers;

namespace waterwegenvic.Tests.Controllers
{
    [TestClass]
    public class HomeControllerTest
    {
        [TestMethod]
        public void Index()
        {
            // Arrange
            HomeController controller = new HomeController();

            // Act
            ViewResult result = controller.Index() as ViewResult;

            // Assert
            Assert.IsNotNull(result);
        }

        [TestMethod]
        public void Substance()
        {
            // Arrange
            HomeController controller = new HomeController();

            // Act
            ViewResult result = controller.Substance() as ViewResult;

            // Assert
            Assert.AreEqual("Your application description page.", result.ViewBag.Message);
        }

        [TestMethod]
        public void Litter()
        {
            // Arrange
            HomeController controller = new HomeController();

            // Act
            ViewResult result = controller.Litter() as ViewResult;

            // Assert
            Assert.IsNotNull(result);
        }

        [TestMethod]
        public void Stormwater()
        {
            // Arrange
            HomeController controller = new HomeController();

            // Act
            ViewResult result = controller.Stormwater() as ViewResult;

            // Assert
            Assert.IsNotNull(result);
        }
    }
}
