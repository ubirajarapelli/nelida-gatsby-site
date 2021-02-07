import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
      <section className="section-30 section-bottom-50 section-sm-bottom-80 section-md-bottom-115 section-lg-bottom-140 section-xl-bottom-200">
        <div className="container">
          <div className="row section-404">
            <div className="col-lg-12 text-center">
              <h1 className="text-info">404</h1>
              <h2 className="offset-top-35">The page was not found.</h2><a className="btn btn-primary offset-md-top-45 offset-lg-top-60" href="index.html">visit home page</a>
              <h4 className="offset-top-30 offset-lg-top-45 offset-xl-top-55">Unfortunately, the page you were looking for could not be found. Maybe search can help.</h4>
              {/*<!-- RD Search-->*/}
              <form className="rd-search offset-top-40 rd-search-small" action="search-results.html" method="GET">
                <div className="form-wrap">
                  <label className="form-label" htmlFor="rd-search-form-input">Search...</label>
                  <input className="form-input" id="rd-search-form-input" type="text" name="s" autoComplete="off" />
                </div>
                <button className="rd-search-form-submit material-icons-search" type="submit"></button>
              </form>
            </div>
          </div>
        </div>
      </section>
  </Layout>
)

export default NotFoundPage
