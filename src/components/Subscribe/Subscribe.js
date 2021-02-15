import React, { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

const Subscribe = () => {

  const [ subscribe, setSubscribe ] = useState('')
  const [ submited, setSubmited ] = useState(false)

  const handleFocus = (event) => {
    const { id } = event.target;
    const element = document.querySelector(`#${id}`);

    element.previousSibling.classList.add('focus')
  }

  const handleBlur = (event) => {
    const { id, textLength } = event.target;
    const element =  document.querySelector(`#${id}`)
    if(textLength > 0) {
      return
    }

    element.previousSibling.classList.remove('focus')
  }

  const handleChange = (event) => {
    const { value } = event.target
    setSubscribe(value)
    console.log(value);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Submit', subscribe);
    addToMailchimp(subscribe, {subscribe})
      .then(({ msg, result }) => {
        console.log('msg', `${result}: ${msg}`)
        setSubmited(true)
      })
      .catch(error => {
        console.log('err', error)
      })
  }

  return (
    <div className="subscribe-block">
      <div className="subscribe-block-top">
        <h4 className="font-weight-bold">Need legal advice?</h4>
        <p>We will be sending you all the best cases we've worked out with our clients and more!</p>
        {!submited &&
        <form className="rd-mailform text-center"
          data-form-output="form-output-global"
          data-form-type="contact"
          onSubmit={handleSubmit}
        >
          <div className="form-wrap">
            <label className="form-label" htmlFor="contact-email">Digite seu email</label>
            <input
              className="form-input"
              id="contact-email"
              type="email"
              name="email"
              onBlur={e => handleBlur(e)}
              onChange={e => handleChange(e)}
              onFocus={e => handleFocus(e)}
            />
          </div>
          <button className="btn btn-primary" type="submit">Inscreva-se</button>
        </form>}
        {submited &&
        <div>
          <h4 className="font-weight-bold">Inscrição realizada com sucesso!</h4>
        </div>}
      </div>
      <div className="subscribe-block-bottom">
        <h4>Informações jurídicas em  nossas redes sociais</h4>
        <ul className="list-inline list-inline-xs">
          <li><a className="icon icon-white icon-xs fa-linkedin" aria-label="link para o perfil de Nélida Moreno no LinkedIn" href="https://www.linkedin.com/nelidamoreno"></a></li>
          <li><a className="icon icon-white icon-xs fa-facebook" aria-label="link para a página de Nélida Moreno no Facebook" href="https://www.fb/nelidamorenoadv"></a></li>
          <li><a className="icon icon-white icon-xs fa-instagram" aria-label="link para o perfil de Nélida Moreno no Instagram" href="http://www.instagram.com/nelidamorenoadv"></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Subscribe
