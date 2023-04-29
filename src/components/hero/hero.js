import React from 'react'
import { Link } from 'react-scroll';
import './hero.css'
import video from './pexels-cottonbro-studio-3945149-426x226-25fps.mp4'

function Hero(props) {
  return (
    <main className='hero' id='home'>
        <video src={video} autoPlay muted loop></video>
        <div className="hero--container">
          <h1>virtual banking made easy</h1>
          <p>Sign up for a new account today and receive $250 in credit towards your next payment.</p>
          <button><Link className='link' to='signup' spy={true} smooth={true} offset={0} duration={700}>get started</Link></button>
        </div>
    </main>
  )
}
export default Hero;