import React from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'

export default connectSearchBox(
  ({ refine, currentRefinement, onFocus, onChange, onBlur }) => {

    const handleFocus = focusHandler => (event) => {
      const { id } = event.target;
      const element = document.querySelector(`#${id}`);

      element.previousSibling.classList.add('focus')

      if (focusHandler === undefined) {
        return
      }

      return focusHandler(event)
    }

    const handleBlur = blurHandle => (event) => {
      const { id, textLength } = event.target;
      const element =  document.querySelector(`#${id}`)
      if(textLength > 0) {
        return
      }

      element.previousSibling.classList.remove('focus')

      if(blurHandle === undefined) {
        return
      }

      return blurHandle(event)
    }

    const handleChange = changeHandler => (event) => {
      refine(event.target.value)

      if (changeHandler === undefined) {
        return
      }

      return changeHandler(event)
    }

    return (
    <form className="rd-search" data-search-live="rd-search-results-live">
      <div className="form-wrap">
        <label className="form-label" htmlFor="rd-navbar-search-form-input">Search...</label>
        <input
          className="rd-navbar-search-form-input form-input form-input-gray-lightest"
          id="rd-navbar-search-form-input"
          type="text"
          name="s"
          autoComplete="off"
          onFocus={handleFocus(onFocus)}
          onBlur={handleBlur(onBlur)}
          onChange={handleChange(onChange)}
          value={currentRefinement}
        />
        <div className="rd-search-results-live" id="rd-search-results-live"></div>
        <span className="rd-search-form-submit"></span>
      </div>
    </form>
  )}
)

