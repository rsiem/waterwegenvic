using System.Web;
using System.Web.Optimization;

namespace waterwegenvic
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            //bundles.Add(new ScriptBundle("~/bundles/script").Include(
            //          "~/Scripts/wordcloud.js",
            //          "~/Scripts/tree.js"));
            //          //"~/Scripts/d3-funnel.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/Site.css",
                      "~/Content/footer.css",
                      "~/Content/section.css",
                      "~/Content/solution.css",
                      "~/Content/last-section.css"));

            // iteration 1 page bundle
            bundles.Add(new StyleBundle("~/Content/Iteration1").Include(
                      "~/Content/tree.css"));

            bundles.Add(new ScriptBundle("~/bundles/iteration1").Include(
                      "~/Scripts/tree.js",
                      "~/Scripts/wordcloud.js",
                      "~/Scripts/site.js"));

            // index page bundle
            bundles.Add(new StyleBundle("~/Content/index").Include(
                      "~/Content/CollapseBox.css"));

            bundles.Add(new ScriptBundle("~/bundles/index").Include(
                      "~/Scripts/CollapseBox.js"));

            // substance page bundle
            bundles.Add(new StyleBundle("~/Content/substance").Include(
                      "~/Content/lightbox.css",
                      "~/Content/flipping_card.css"));

            bundles.Add(new ScriptBundle("~/bundles/substance").Include(
                      "~/Scripts/flipping_card.js",
                      "~/Scripts/lightbox.js"));
            //"~/Scripts/wordcloud.js"));

            // litter page bundle
            bundles.Add(new StyleBundle("~/Content/litter").Include(
                      "~/Content/litter.css",
                      "~/Content/funnel.css"));

            bundles.Add(new ScriptBundle("~/bundles/litter").Include(
                      "~/Scripts/site.js",
                      //"~/Scripts/d3-funnel.js",
                      "~/Scripts/funnel.js"));

            bundles.Add(new StyleBundle("~/Content/stormwater").Include(
                    "~/Content/stormwater.css"));
        }
    }
}
