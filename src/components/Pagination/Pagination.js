import React from 'react'
import { Link } from 'gatsby'

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage}) => {
  return (
    <div className="nav-links text-center">
      {!isFirst &&
        <Link className="page-prev icon icon-lg icon-primary icon-round-small material-icons-navigate_before icon-shadow-primary" to={prevPage}></Link>
      }
      <span className="page-numbers active">{currentPage}</span>
      {/*<Link className="page-numbers" href="#">2</Link>*/}
      <span className="page-numbers">de  {numPages}</span>
      {!isLast &&

        <Link className="page-next icon icon-lg icon-primary icon-round-small material-icons-navigate_next icon-shadow-primary" to={nextPage}></Link>
      }
    </div>
  )
}

export default Pagination
