import React from 'react'
import { pageLinks,socialLinks } from '../data';

import logo from "../images/logo.svg"

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
        <img src={logo} alt='blackRoad' className='nav-logo'/>
        <button type='button' className='nav-toggle'>
          <i className='fa fa-bars'></i>

        </button>

        


          <ul className='nav-links' id='nav-links'>
            {pageLinks.map((link)=>{
            return (<li key={link.id}>
              <a href={link.href} className='nav-link'>{link.text}</a>
                                    
              </li>
              
              )
            })}

          </ul>


          <ul className='nav-icons'>
            {socialLinks.map((links)=>{
              const{id,href,icon}=links;
              return(
                <li key={id}>
                  <a href={href} className='nav-icon' rel="noreferrer" target='_blank'><i className={icon}></i></a>
                </li>
              )
            })}
          </ul>

      </div>
      </div>
    </nav>
  )
}

export default Navbar;