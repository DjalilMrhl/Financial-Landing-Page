import React from 'react'
import './header.css'
import {Link} from 'react-scroll'
import { Link as LinkRouter } from 'react-router-dom';

function Header(props) {
    return (
        <header className='header'>
            <div className="header--container">
                <Link id='logo-home' to='home' spy={true} smooth={true} offset={-160} duration={700}>dolla</Link>
                <ul>
                    <li><Link className='link' to='about' spy={true} smooth={true} offset={-120} duration={700}>about</Link></li>
                    <li><Link className='link' to='discover' spy={true} smooth={true} offset={-120} duration={700}>discover</Link></li>
                    <li><Link className='link' to='services' spy={true} smooth={true} offset={-120} duration={700}>services</Link></li>
                    <li><Link className='link' to='signup' spy={true} smooth={true} offset={-120} duration={700}>sign up</Link></li>
                </ul>
                <LinkRouter id='btn' to='sign-in'>sign in</LinkRouter>
                <div className="icon" onClick={props.showMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    )
}

export default Header;