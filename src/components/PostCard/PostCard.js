import React from 'react'
import { Link } from 'gatsby'

const PostCard = ({ slug, title, date, category, description, index }) => (
  <div key={index} className="col-lg-6 col-xl-4">
    <article className="news-post h-100">
      <div className="news-post-header">
        <Link to={slug}>
          <img className="img-responsive" src="images/blog-masonry-01-536x505.jpg" alt="" width="536" height="505"/>
        </Link>
        <ul className="label-list">
          <li><Link className="label-custom" to={slug}>{category}</Link></li>
        </ul>
      </div>
      <div className="news-post-body">
        <h4><Link to={slug}>{title}</Link></h4>
        <p>{description}</p><Link className="btn btn-primary" to={slug}>Leia mais</Link>
        <ul className="list-inline offset-top-30">
          <li><Link className="text-info h6 text-regular" to={slug}>
            <time dateTime={date}>{date}</time></Link>
          </li>
          <li>
            <p className="h6 text-regular text-content">by	<Link className="text-content" to="/">admin</Link></p>
          </li>
          <li><Link className="text-info h6 text-regular" to="/"><span className="icon material-icons-chat_bubble_outline"></span>	3 comment(s)</Link></li>
        </ul>
      </div>
    </article>
  </div>
)

export default PostCard
