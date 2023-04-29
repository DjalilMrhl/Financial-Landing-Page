import React from 'react'
import './services.css'
import img1 from './original-870301a45dc3b9ff12e9428493563514.webp'
import img2 from './original-a3b882256321dd0153922913ac9ac7b4.webp'
import img3 from './original-ad5b47636617c31353d0af169bf175a8.webp'

function Services(props) {
  return (
    <section className="services">
        <div className="services--container">
            <h1>our services</h1>
            <div>
                <img src={img1} alt="" />
                <h4>reduce expenses</h4>
                <p>We help reduce your fees and increase your overall revenue.</p>
            </div>
            <div>
                <img src={img2} alt="" />
                <h4>virtual offices</h4>
                <p>You can access our platform online anywhere in the world.</p>
            </div>
            <div>
                <img src={img3} alt="" />
                <h4>premuim benefits</h4>
                <p>unlock our special membership card that returns 5% cash back.</p>
            </div>
        </div>
    </section>
  )
}

export default Services;