import './menu.css'
import {Link} from 'react-scroll'
import { NavLink } from 'react-router-dom';

function Menu(props) {
    return (
            <nav className={props.menu? 'show-menu': undefined}>
                <button onClick={props.hideMenu}>X</button>
                <ul>
                    <li><Link to='about' spy={true} smooth={true} offset={0} onClick={props.hideMenu}>about</Link></li>
                    <li><Link to='discover' spy={true} smooth={true} offset={0} onClick={props.hideMenu}>discover</Link></li>
                    <li><Link to='services' spy={true} smooth={true} offset={0} onClick={props.hideMenu}>services</Link></li>
                    <li><Link to='signup' spy={true} smooth={true} offset={0} onClick={props.hideMenu}>sign up</Link></li>
                </ul>
                <NavLink id='btn' to='sign-in'>sign in</NavLink>
            </nav>
    )
}


export default Menu;