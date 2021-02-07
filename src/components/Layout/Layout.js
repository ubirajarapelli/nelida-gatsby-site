import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header"
import Footer from "../Footer"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <div className="page text-center text-md-left">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
      <div className="snackbars" id="form-output-global"></div>
      </>
    )
  }

  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }

  export default Layout

    // <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
