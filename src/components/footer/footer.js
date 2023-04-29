import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-scroll'
import './footer.scss'

function Footer(props) {
  return (
    <footer>
        <div className="footer--container">
            <div className="footer--container--1">
                <ul className="about-us"><span>About Us</span>
                    <li>How it works</li>
                    <li>Testimonials</li>
                    <li>Careers</li>
                    <li>Investors</li>
                    <li>Terms of Service</li>
                </ul>
                <ul className="contact"><span>Contact Us</span>
                    <li>Contact</li>
                    <li>Support</li>
                    <li>Destinations</li>
                    <li>Sponsorships</li>
                </ul>
                <ul className="videos"><span>Videos</span>
                    <li>Submit Video</li>
                    <li>Ambassadors</li>
                    <li>Agency</li>
                    <li>Influencer</li>
                </ul>
                <ul className="social-media"><span>Social Media</span>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Youtube</li>
                    <li>Twitter</li>
                </ul>
            </div>
            <div className="footer--container--2">
                <Link id='logo-home' to='home' spy={true} smooth={true} offset={-160} duration={700}>dolla</Link>
                <p>dolla © 2023 All rights reserved.</p>
                <ul className="links">
                    <li><FaFacebookF/></li>
                    <li><FaInstagram/></li>
                    <li><FaYoutube/></li>
                    <li><FaTwitter/></li>
                    <li><FaLinkedin/></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer;