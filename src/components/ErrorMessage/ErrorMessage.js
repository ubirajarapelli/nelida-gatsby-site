import React from "react"

const ErrorMessage = ({ isError = false, message }) => {

  return (

    <span className="form-validation">{message}</span>
  )

}

export default ErrorMessage
