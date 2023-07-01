import React from 'react';
import PropTypes from 'prop-types'
import './Tarefas.css'

import { FaEdit, FaWindowClose } from 'react-icons/fa';

export default function Tarefas({tarefas, handleEdit, handleDelete}) {
  return (
    <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            {tarefa}
            <div className="li-btns">
              <FaEdit onClick={handleEdit} className="edit-btn"/>
              <FaWindowClose onClick={handleDelete} className="del-btn"/>
            </div>
          </li>
        ))}
      </ul>
  )
}

Tarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
}