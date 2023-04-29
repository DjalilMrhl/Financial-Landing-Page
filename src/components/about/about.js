import React from 'react'
import './about.css'
import img from './original-d034d1bb1868fd90f5f5f3bf448a3f55.webp'

function About(props) {
  return (
    <section className='about'>
        <div className="about--container">
          <article>
            <h4>premium bank</h4>
            <h1>Unlimited Transactions with zero fees</h1>
            <p>Get acess to our exclusive app that allows you to send unlimited transactions without getting charged any fees</p>
            <button>get started</button>
          </article>
          <img src={img} alt="" />
        </div>
    </section>
  )
}

export default About;