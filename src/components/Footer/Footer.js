import React, { useLayoutEffect, useState } from "react"
import { Link } from "gatsby"
import SocialLinkItens from '../SocialLinkItens'

const Footer = () => {

  const [thisYear, setThisYear] = useState(0)

  useLayoutEffect(() => {
    const fullYear = new Date().getFullYear()
    setThisYear(fullYear)
  }, [])

  return (
  <footer className="page-footer">
    <div className="container">
      <div className="row row-40 justify-content-md-around justify-content-xl-start text-md-left">
        <div className="col-xl-4 col-xxl-3 col-lg-5 col-md-7">

          <div className="brand-footer h3">Nélida <span>Moreno</span></div><br />
            <p>Advocacia de resultado</p>
            <p></p>
            <p className="text-gray-lighter">O escritório existe para atender aos problemas dos clientes, orientando sempre que possível de forma preventiva, para contribuir na redução de passivos judiciais ou para facilitar a vida jurídica dos clientes, por meio de uma atuação agregadora, criativa, ética, transparente e com responsabilidade social.</p>
          </div>
          <div className="col-md-3 col-lg-2 col-xxl-3">
            <h5>Navegação</h5>
            <ul className="list">
              <li><Link to="about.html">About us</Link></li>
              <li><Link to="practice-areas.html">Practice Areas</Link></li>
              <li><Link to="won-cases.html">Won Cases</Link></li>
              <li><Link to="news.html">News</Link></li>
              <li><Link to="contacts.html">Contacts </Link></li>
            </ul>
          </div>
          <div className="col-md-5 col-lg-4 col-xl-3">
            <h5>Informações de contato</h5>
            <address>
              <p>4096 N Highland St, Arlington<br />VA 32101, USA</p><a href="mailto:#">nelida.moreno@adv.oabsp.org.br</a>
              <SocialLinkItens />
            </address>
          </div>
          <div className="col-md-5 col-xl-3 col-xxl-3 col-lg-3">
            <h5>We are working on</h5>
            <div className="list-terms-footer">
              <dl>
                <dt>Mon-Thu:</dt>
                <dd>9:30 - 21:00</dd>
              </dl>
              <dl>
                <dt>Fri:</dt>
                <dd>6:00 - 21:00</dd>
              </dl>
              <dl>
                <dt>Sat:</dt>
                <dd>10:00 - 15:00</dd>
              </dl>
            </div>
          </div>
        </div>
        <div className="row text-center offset-top-55">
          <div className="col-lg-12">
            <p className="copyright"><span className="copyright-year">{thisYear}</span>	&#169;	Nélida Moreno. Todos os direitos reservados<span className="divider-vertical">|</span>	<Link to="/privacy">Política de privacidade</Link>
            </p>
          </div>
        </div>
      </div>
  </footer>
)}

export default Footer
