exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allYaml {
        nodes {
          slug
          template
          content {
            title
            introduction
          }
        }
      }
    }
  `)
  data.allYaml.nodes.forEach(node => {
    actions.createPage({
      path: node.slug,
      component: require.resolve("./src/templates/" + node.template + ".jsx"),
      context: { slug: node.slug },
    })
  })
}
