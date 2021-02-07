require("dotenv").config()

const postsQuery = `{
  posts: allMarkdownRemark(
    sort: { fields: frontmatter___date, order: DESC }
  ) {
    edges {
      node {
        objectID: id
        frontmatter {
          title
          category
          date_timestamp: date
          date(locale: "pt-br", formatString: "DD MMM YYYY")
          description
        }
        fields {
          slug
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`

const flatten = (arr) =>
  arr.map(({node: { frontmatter, ...rest }}) => ({
    ...frontmatter,
    date_timestamp: parseInt(
      (new Date(frontmatter.date_timestamp).getDate() / 1000).toFixed(0)
    ),
    ...rest
  }))

const queries = [
  {
    query: postsQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]

module.exports = queries
