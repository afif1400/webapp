import React from 'react'

const ModalB = ({ open, setOpen }) => {

  return (
    <div className={open.b ? `services__modal active-modal` : 'services__modal'}>
      <div className="services__modal-content">
        <h4 className="services__modal-title">Backend <br />Developer </h4>
        <i class="uil uil-times services__modal-close" onClick={() => setOpen({ b: false })}></i>
        <ul className="services__modal-services grid">
          <li className="services__modal-service">
            <i className="uil uil-check services__modal-icon"></i>
            <p>I develop robust backend API's</p>
          </li>
          <li className="services__modal-service">
            <i className="uil uil-check services__modal-icon"></i>
            <p>Quick Response time by adding caching</p>
          </li>
          <li className="services__modal-service">
            <i className="uil uil-check services__modal-icon"></i>
            <p>Can use any database - mysql, postgres, mongodb etc</p>
          </li>
          <li className="services__modal-service">
            <i className="uil uil-check services__modal-icon"></i>
            <p>I can also deploy it on the cloud server</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ModalB
