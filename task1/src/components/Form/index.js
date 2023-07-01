import { FaPlus } from 'react-icons/fa';
import PropTypes from 'prop-types'
import React from 'react';
import './Form.css'

export default function Form({handleSubmit, handleChange}) {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange}></input>
      <button type="submit">
        <FaPlus/>
      </button>
    </form>
  )
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}