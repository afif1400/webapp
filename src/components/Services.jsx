import React, { useState } from 'react'
import ModalF from './ModalF'
import ModalB from './ModalB'

const Services = () => {
  const [open, setOpen] = useState({
    f: false,
    b: false
  })
  return (
    <section className="services section" id="services">
      <h2 className="section__title">
        Services
      </h2>
      <span className="section__subtitle">I Work On</span>
      <div className="services__container container">
        {/* service-1 */}
        <div className="services__content">
          <div>
            <i class="uil uil-vuejs services__icon"></i>
            <h3 className="services__title">
              Frontend <br /> Developer
            </h3>
          </div>
          <span className="button button--flex button--small button--link services__button" onClick={() => setOpen({ f: true })}>
            View More
            <i class="uil uil-arrow-right button__icon"></i>
          </span>
          <ModalF open={open} setOpen={setOpen} />
        </div>
        <div className="services__content">
          <div>
            <i class="uil uil-server services__icon"></i>
            <h3 className="services__title">
              Backend <br /> Developer
            </h3>
          </div>
          <span className="button button--flex button--small button--link services__button" onClick={() => setOpen({ b: true })}>
            View More
            <i class="uil uil-arrow-right button__icon"></i>
          </span>
          <ModalB open={open} setOpen={setOpen} />
        </div>
      </div>
    </section>
  )
}

export default Services
