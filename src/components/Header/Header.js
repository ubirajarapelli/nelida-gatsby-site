import React, { useLayoutEffect } from "react"
import PropTypes from "prop-types"
// import { Link } from "gatsby"
import Menu from "../Menu"
import Search from '../Search'
import SocialLinkItens from '../SocialLinkItens'

const Header = ({ siteTitle }) => {
  useLayoutEffect(() => {
    const headerNavEl = document.querySelector('nav.rd-navbar')

    document.addEventListener("scroll", function(){
      if(window.pageYOffset > 10) {

        headerNavEl.classList.add("rd-navbar--is-stuck");
      } else {
        headerNavEl.classList.remove("rd-navbar--is-stuck");
      }
    })

  }, [])

  return (
    <header className="page-head">
      <div className="rd-navbar-wrap" style={{height: '303px'}}>
        <nav className="rd-navbar rd-navbar-original rd-navbar-static" data-layout="rd-navbar-fixed" data-md-layout="rd-navbar-static" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-static" data-lg-device-layout="rd-navbar-static" data-lg-stick-up-offset="261px">
          <div className="rd-navbar-inner rd-navbar-inner-top">
            {/*RD Navbar Panel */}
            <div className="rd-navbar-panel">
              {/*RD Navbar Toggle */}
              <button aria-label="Menu" className="rd-navbar-toggle" data-rd-navbar-toggle=".rd-navbar-nav-wrap"><span></span></button>
              <button aria-label="Busca" className="rd-navbar-collapse-toggle" data-rd-navbar-toggle=".rd-navbar-panel-aside"><span></span></button>
              {/*RD Navbar Brand */}
              <div className="rd-navbar-brand"><a className="brand-name" href="index.html">Fenimore</a></div>
              <div className="rd-navbar-call"><span className="icon icon-sm icon-shadow icon-rounded material-icons-local_phone icon-primary"></span><a href="tel:#">011 99150-8324</a><a href="free-consultation.html">Request a Callback</a></div>
            </div>
            <div className="rd-navbar-panel-aside">
              <SocialLinkItens />
              {/* RD Navbar Search */}
              <div className="rd-navbar-search"><a className="rd-navbar-search-toggle" data-rd-navbar-toggle=".rd-navbar-search" href="#"><span></span></a>
                <Search />
              </div>
              <a href="tel:#">800-2345-6789</a><a className="fixed-link" href="free-consultation.html">Request a Callback</a><a href="mailto:#">nelida.moreno@adv.oabsp.org.br</a>
            </div>
          </div>
          <div className="rd-navbar-inner rd-navbar-inner-bottom"><a className="brand-name" href="index.html"><img src="images/brand-header.png" width="215" height="34" alt="" /></a>
          <Menu />



          {/* RD Navbar Collapse */}
          <div className="rd-navbar-collapse">
            <div className="rd-navbar-collapse-items"><span className="icon material-design-write20 icon-xs-big icon-primary"></span><a href="mailto:#">nelida.moreno@adv.oabsp.org.br</a></div>
          </div>
        </div>
      </nav>
    </div>
  </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
