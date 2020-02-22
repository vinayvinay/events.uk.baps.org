const fs = require("fs")
const yaml = require("js-yaml")

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const sites = fs.readdirSync("./src/content/");

  sites.forEach(site => {
    const sitePages = fs.readdirSync("./src/content/" + site);

    sitePages.forEach(sitePage => {
      const sitePageInfo = yaml.safeLoad(
        fs.readFileSync("./src/content/" + site + "/" + sitePage, "utf-8")
      );

      createPage({
        path: sitePageInfo.path,
        component: require.resolve("./src/templates/" + sitePageInfo.template + ".jsx"),
        context: {
          pageContent: sitePageInfo.content,
        },
      })
    })
  })
}
