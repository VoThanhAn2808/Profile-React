import React from 'react'
import './footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FiYoutube} from 'react-icons/fi'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Võ Thành An</a>
      
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookSquare/></a>
        <a href="https://instagram.com"><FaInstagram /></a>
        <a href="https://youtube.com"><FiYoutube /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; VoThanhAn Tutorials. All right reserved</small>
      </div>
    </footer>
  )
}

export default Footer