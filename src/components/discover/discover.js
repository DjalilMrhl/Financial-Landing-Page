import React from 'react'
import './discover.scss'
import img from './original-5a9c24badcceaa75cd248b84be4f6fc7.webp'

function Discover(props) {
  return (
    <section className='discover' id='discover'>
        <div className="discover--container">
          <img src={img} alt="" />
          <article>
              <h4>unlimited access</h4>
              <h1>Login to your account at any time</h1>
              <p>We have you covered no matter what where you are located. All you need is an internet connection and a phone or computer.</p>
              <button>learn more</button>
            </article>
        </div>
    </section>
  )
}

export default Discover;