import React, { useState } from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const Contact = () => {

  const initialData = {
    name: {
      value: "",
      error: false,
      message: ''
    },
    email: {
      value: "",
      error: false,
      message: ''
    },
    message:{
      value: "",
      error: false,
      message: ''
    }
  }

  const regexEmail = new RegExp(/^[-!#$%&'*+/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/)

  const [ data, setData ] = useState(initialData)

  const handleFocus = (event) => {
    const { id, value } = event.target;

    const element = document.querySelector(`#${id}`);

    if(value !== "") {
      element.previousSibling.parentNode.classList.remove('has-error');
    }

    element.previousSibling.classList.add('focus')

  }

  const handleBlur = (event) => {
    const { id, name, value } = event.target;
    const el =  document.querySelector(`label[for=${id}]`)

    if(!value) {
      el.parentNode.classList.add('has-error');
      el.classList.remove('focus')
      setData({
        ...data,
        [name]: {
          ...data[name],
          error: true,
          message: "O campo não pode ser vazio"
        }
      })
      return
    }

    if(name === 'email') {
      return data['email'].error
    }

    return setData({
      ...data,
      [name]: {
        ...data[name],
        error: false,
        message: ''
      }
    })
  }

  const handleChange = (event) => {

    const { id, name, value } = event.target;
    const el =  document.querySelector(`label[for=${id}]`)
    el.parentNode.classList.remove('has-error');

    let internalData = {
      ...data,
      [name]: {
        ...data[name],
        value,
      }
    }

    if(name === 'email') {

      if(!regexEmail.test(internalData['email'].value)) {
        internalData['email'].error = !regexEmail.test(internalData['email'].value)
        internalData['email'].message = 'Digite um email válido'
        el.parentNode.classList.add('has-error');
        setData(internalData)
        return
      }

      internalData['email'].error = !regexEmail.test(internalData['email'].value)
      internalData['email'].message = ''
      setData(internalData)
      return
    }

    setData(internalData)
  }

  const validateInput = (data) => {
    let internalError = false
    const validate = Object.keys(data)

    for(let key of validate) {
      if(data[key].value === "") {
        setData({
          ...data,
          [key]: {
            ...data[key],
            error: true,
            message: "O campo não pode ser vazio"
          }
        })
        internalError = true
        return
      }

      if(data[key].error) {
        internalError = true
        return
      }
    }
    return internalError
  }

  const send = () => {
    console.log('veio aqui');
  }

  const handleSand = (event) => {
    event.preventDefault()

    if(validateInput(data) !== false) {
      return
    }

    send()

  }

  return (
  <Layout>
    <SEO title="Contato" />
    <section className="section-top-50 section-sm-top-75 section-md-top-90 section-lg-top-100 section-bottom-30">
      <div className="container text-center">
        <h3>Nossos</h3>
        <h2>Contatos</h2>
        <address className="offset-top-20 offset-sm-top-30 offset-md-top-40 offset-lg-top-60">
          <p>87 Tennesee hwy., Alexandria, VA USA, 22303</p>
          <div className="offset-top-15"></div><span className="icon icon-lg material-icons-phone icon-primary" style={{verticalAlign: 'sub'}}></span>	<a className="text-content font-weight-bold" href="tel:#">800-2345-6789</a>
        </address>
        <div className="row"></div>
      </div>
    </section>

    <section className="section-bottom-50 section-sm-bottom-70 section-md-bottom-90 section-xl-bottom-100">
      <div className="container text-center">
        <h3>We review and accept your consultation</h3>
        <h2 className="text-info">requests on a 24/7 basis</h2>
        <form className="rd-mailform text-center rd-mailform-small offset-top-30 offset-md-top-40 offset-lg-top-60 offset-xl-top-80" data-form-output="form-output-global" data-form-type="contact" method="post" action="bat/rd-mailform.php">
          <div className="form-wrap">
            <label className="form-label" htmlFor="contact-name">Seu nome</label>
            <input className="form-input" id="contact-name" type="text" name="name" onFocus={e => handleFocus(e)} onBlur={e => handleBlur(e)} onChange={e => handleChange(e)} />
            { data['name'].error && <span className="form-validation">{data['name'].message}</span> }

          </div>
          <div className="form-wrap">
            <label className="form-label" htmlFor="contact-email-form">Seu e-mail</label>
            <input className="form-input" id="contact-email-form" type="email" name="email" onFocus={e => handleFocus(e)} onBlur={e => handleBlur(e)} onChange={e => handleChange(e)} />
            { data.email.error && <span className="form-validation">{data.email.message}</span> }

          </div>
          <div className="form-wrap">
            <label className="form-label" htmlFor="contact-message">Escreva sua mensagem</label>
            <textarea className="form-input" id="contact-message" name="message" onFocus={e => handleFocus(e)} onBlur={e => handleBlur(e)} onChange={e => handleChange(e)} ></textarea>
            { data.message.error && <span className="form-validation">{data.message.message}</span> }

          </div>
          <button className="btn btn-info" type="submit" onClick={e => handleSand(e)}>Enviar</button>
        </form>
      </div>
    </section>
  </Layout>
)}

export default Contact
