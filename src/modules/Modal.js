import React from 'react'
import "../App.scss"

const Modal = ({show, message, status, closeModal}) => {
  const handleClick = (event) => {
    event.preventDefault()
    closeModal()
  }
  return (
    <div id="modal" className={show}>
      <div className={`modal-content ${status}`}>
        <p className="modal-text">{message}</p>
      </div>
      <p onClick={handleClick} className="modal-close">&times;</p>
    </div>
  )
}

export default Modal
