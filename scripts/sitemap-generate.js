const fs = require("fs");
const path = require("path");
const XMLWriter = require("xml-writer");
const prettier = require("prettier");

const __PUBLIC__ = path.resolve("./public");
const baseURL = "https://fiandev.my.id";

let sitemap = path.join(__PUBLIC__, "./sitemap.xml");
let sitemap_index = path.join(__PUBLIC__, "./sitemap_index.xml");

let data = {
  routes: {
    guest: {
      path: [
        "/",
        "/services",
        // "/login",
        // "/products",
        // "/blog"
      ],
    },
    auth: {
      path: [
        // "/dashboard",
        // "/dashboard/projects",
        // "/dashboard/links",
        // "/dashboard/profile",
      ],
    },
  },
};

const formatXml = async (sitemap) =>
  await prettier.format(sitemap, { parser: "html" });

async function generate_sitemap_index(files) {
  let xw = new XMLWriter();

  xw.startDocument();
  xw.startElement("sitemapindex");
  xw.writeAttribute("xmlns", "http://www.sitemaps.org/schemas/sitemap/0.9");

  for (let file of files) {
    let location = new URL(file, baseURL).href;
    let now = new Date().toISOString();

    xw.startElement("sitemap");
    xw.startElement("loc");
    xw.text(location);
    xw.endElement("loc");

    xw.startElement("lastmode");
    xw.text(now);
    xw.endElement("lastmode");
    xw.endElement("sitemap");
  }

  xw.endElement("sitemapindex");

  xw.endDocument();

  return await xw.toString();
}

async function generate_sitemap() {
  let xw = new XMLWriter();

  xw.startDocument();
  xw.startElement("urlset");
  xw.writeAttribute("xmlns", "http://www.sitemaps.org/schemas/sitemap/0.9");

  let pages = [];
  Object.keys(data.routes).forEach((key, index) => {
    let pathURLs = data.routes[key].path;

    for (let pathURL of pathURLs) {
      let url = new URL(pathURL, baseURL).href;
      let res = [url, new URL(`${pathURL}/index.html`, url).href];

      pages.push(...res);
    }
  });

  for (let page of pages) {
    let now = new Date().toISOString();

    xw.startElement("sitemap");
    xw.startElement("loc");
    xw.text(page);
    xw.endElement("loc");

    xw.startElement("lastmode");
    xw.text(now);
    xw.endElement("lastmode");
    xw.endElement("sitemap");
  }

  xw.endElement();
  xw.endDocument();

  return await xw.toString();
}

(async () => {
  fs.writeFileSync(sitemap, await generate_sitemap());
  fs.writeFileSync(
    sitemap_index,
    await generate_sitemap_index(["sitemap.xml"]),
  );
})();
