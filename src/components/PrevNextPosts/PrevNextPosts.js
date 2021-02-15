import React from 'react'
import { Link } from 'gatsby'

const PrevNextPosts = ({data}) => {
  const {
    next,
    previous
  } = data;
  return (
  <div>
    { previous && (
      <div className="naw-wrapper naw-wrapper-left">
        <Link className="nav-prev" to={previous.fields.slug}><span className="page-prev icon icon-lg icon-primary icon-round-small material-icons-navigate_before icon-shadow-primary"></span>
        <div className="nav-title">
          <h4 className="text-primary font-weight-bold">Anterior</h4>
          <h6 className="text-regular">{previous.frontmatter.title}</h6>
        </div>
        </Link>
      </div>
    )}
    { next && (
      <div className="naw-wrapper naw-wrapper-right">
        <Link className="nav-next" to={next.fields.slug}>
          <div className="nav-title">
            <h4 className="text-primary font-weight-bold">Próximo</h4>
            <h6 className="text-regular">{next.frontmatter.title}</h6>
          </div>
          <span className="page-next icon icon-lg icon-primary icon-round-small material-icons-navigate_next icon-shadow-primary"></span>
        </Link>;
      </div>
      )
    }
  </div>
)}

export default PrevNextPosts
