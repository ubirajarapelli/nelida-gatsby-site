const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)


exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({
      node,
      getNode,
      basePath: "blog",
    })

    createNodeField({
      node,
      name: "slug",
      value: `/blog/${slug.slice(12)}`,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {

  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            frontmatter {
              title
              category
              date(locale: "pt-br", formatString: "DD MM YYYY")
              description
            }
            timeToRead
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    const posts = result.data.allMarkdownRemark.edges

    console.log(posts.length);
    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/blogPost.js`),
        context: {
          slug: node.fields.slug,
        },
      })
    })

    const postPerPage = 3
    const numPages = Math.ceil(posts.length / postPerPage)

    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? '/blog' : `/blog/page/${ index + 1 }`,
        component: path.resolve(`./src/templates/blogList.js`),
        context: {
          limit: postPerPage,
          skip: index * postPerPage,
          numPages,
          currentPage: index + 1
        }
      })
    })
  })
}
