import React from "react"
import { Link } from "gatsby"

const Menu = () => (
  <div className="rd-navbar-nav-wrap">
    <ul className="rd-navbar-nav">
      <li className="active"><Link to="/">Home</Link></li>
      <li><Link to="/about">O escritório</Link></li>
      <li><Link to="/practice-areas">Áreas de atuação</Link></li>
      <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/contact">Contato</Link></li>
    </ul>
  </div>
)

export default Menu
