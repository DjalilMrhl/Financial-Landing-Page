import React from 'react'
import { NavLink } from 'react-router-dom';
import './sign-in.css'


function SignIn(props) {
  return (
    <section className="sign-in--page">
        <NavLink id='logo' to='/'>dolla</NavLink>
        <div className='sign-in--page--container'>
            <h1>Sign in to your account</h1>
            <form>
                <label htmlFor="email">Email
                <input type="text" name='email' id='email' autoComplete='off'/>
                </label>
                <label htmlFor="password">Password
                <input type="password" name="password" id="password" autoComplete='off'/>
                </label>
                <button type="submit">Continue</button>
                <a href="#?" target="_blank" rel='noreferrer noopener'>Forget password</a>
            </form>
        </div>
    </section>
  )
}

export default SignIn;