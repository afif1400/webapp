import React from 'react'

const ModalF = ({ open, setOpen }) => {
  return (
    <div className={open.f ? `services__modal active-modal` : 'services__modal'}>
      <div className="services__modal-content">
        <h4 className="services__modal-title">Frontend <br />Developer </h4>
        <i class="uil uil-times services__modal-close" onClick={() => setOpen({ f: false })}></i>
        <ul className="services__modal-services grid">
          <li className="services__modal-service">
            <i className="uil uil-check services__modal-icon"></i>
            <p>I make awesome User Interfaces</p>
          </li>
          <li className="services__modal-service">
            <i className="uil uil-check services__modal-icon"></i>
            <p>I love to code in typescript</p>
          </li>
          <li className="services__modal-service">
            <i className="uil uil-check services__modal-icon"></i>
            <p>I develop Single Page Applications in React</p>
          </li>
          <li className="services__modal-service">
            <i className="uil uil-check services__modal-icon"></i>
            <p>I also developer cool interactions on the web</p>
          </li>
        </ul>
      </div>
    </div>
  )

}

export default ModalF
