import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PostCard from '../components/PostCard'
import Pagination from '../components/Pagination'

const blogList = props => {

  const postList = props.data.allMarkdownRemark.edges
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? `/blog` : `/blog/page/${ currentPage - 1 }`
  const nextPage = `/blog/page/${ currentPage + 1 }`

  return (
    <Layout>
      <SEO title="Blog" />
      <section className="section-50 section-sm-65 section-md-85 section-bottom-65">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="inset-xl-right-0">
                  <div className="row row-50">
                  {
                    postList.map(({ node: {
                      fields: {
                          slug
                      },
                      frontmatter: {
                        title,
                        category,
                        date,
                        description,
                      },
                      timeToRead
                    }
                  }, index) => (
                      <PostCard
                        key={index}
                        slug={slug}
                        title={title}
                        date={date}
                        category={category}
                        description={description}
                      />
                    ))
                  }
                  </div>
                  <hr className="divider-xl" />
                  <Pagination
                    isFirst={isFirst}
                    isLast={isLast}
                    currentPage={currentPage}
                    numPages={numPages}
                    prevPage={prevPage}
                    nextPage={nextPage}
                  />
                  <hr className="divider-xl" />
                </div>
              </div>
            </div>
          </div>
        </section>
    </Layout>
  )
}

export const query = graphql`
  query Posts($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            title
            category
            date(locale: "pt-br", formatString: "DD MMM YYYY")
            description
          }
          timeToRead
          fields {
            slug
          }
        }
      }
    }
  }`

export default blogList
