import React from 'react'
import PageLinks from './PageLinks';
import SocialLink from './SocialLink';
import { socialLinks } from '../data';

function Footer() {
  return (
   <footer className='section footer'>
    <PageLinks parentClass="footer-links" itemClass="footer-link"></PageLinks>
    <ul className='footer-icons'>
      {socialLinks.map((link)=>{
              return <SocialLink key={link.id} {...link} itemClass="footer-icon"></SocialLink>
      })}
      

    </ul>
    <p className='copyright'>
      copyright &copy; BackDoor Travels tour Company
      <span id='date'>{new Date().getFullYear()}</span>
      All Rights Reserved

    </p>
   </footer>
  )
}

export default Footer;