import React from 'react'
import {BsFacebook, BsYoutube, BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://facebook.com" target='_blank'><BsFacebook /></a>
        <a href="https://youtube.com" target='_blank'><BsYoutube /></a>
        <a href="https://github.com" target='_blank'><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials