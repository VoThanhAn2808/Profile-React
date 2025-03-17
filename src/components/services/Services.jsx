import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container service__container">
        <article className='service'>
          <div className="service__head">
            <h3>UX/UI Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
          </ul>
        </article>
        {/* END OF UX/UI */}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
          </ul>
        </article>
        {/* END OF WebDevelopment */}
        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
          </ul>
        </article>
        {/* END OF Content Creation */}
      </div>
    </section>
  )
}

export default Services