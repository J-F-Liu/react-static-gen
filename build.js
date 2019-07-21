import fs from "fs";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";

const Title = ({ sitemap, page }) => {
  const pageData = sitemap.pages.find(p => p.name == page);
  return <title>{pageData.name}</title>;
};

export async function genHtml(folder) {
  console.log("Generating html files...");
  const srcFolder = path.join(folder, "src");
  const pagesFolder = path.join(srcFolder, "pages");
  const template = fs.readFileSync(
    path.join(folder, "src", "template.html"),
    "utf8"
  );
  const sitemap = JSON.parse(
    fs.readFileSync(path.join(srcFolder, "sitemap.json"), "utf8")
  );
  const pattern = /\.jsx?$/;
  for (let file of fs.readdirSync(pagesFolder)) {
    if (file.match(pattern)) {
      const page = file.replace(pattern, "");
      console.log(page);
      const component = await import(path.join(pagesFolder, file));
      const Component = component.default;
      const content = ReactDOMServer.renderToStaticMarkup(
        <Component sitemap={sitemap} page={page} />
      );
      const title = ReactDOMServer.renderToStaticMarkup(
        <Title sitemap={sitemap} page={page} />
      );
      const html = template
        .replace("<title />", title)
        .replace('<div id="content" />', content);
      fs.writeFileSync(path.join(folder, "public", page + ".html"), html);
    }
  }
  console.log("Done.");
}

genHtml(__dirname);
