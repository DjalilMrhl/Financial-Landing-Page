import React from 'react'
import './sign-up.scss'
import img from './original-9676f982b46bd8d6910d4eafb8b5706e.webp'
import { Link } from 'react-scroll';

function SignUp(props) {
  return (
    <section className='sign-up' id='signup'>
        <div className="sign-up--container">
          <article>
            <h4>join our team</h4>
            <h1>Creating an account is extremly easy</h1>
            <p>Get everything setup and ready in under 10 minutes. All you need to do is add your information and you're ready to go.</p>
            <button><Link className='link' to='home' spy={true} smooth={true} offset={-300} duration={700}>start now</Link></button>
          </article>
          <img src={img} alt="" />
        </div>
    </section>
  )
}

export default SignUp;