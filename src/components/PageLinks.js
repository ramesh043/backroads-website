import React from 'react'
import PageLink from './PageLink';
import { pageLinks } from '../data';
function PageLinks({parentClass,itemClass}) {

  return (
    <ul className={parentClass} id='nav-links'>
        {pageLinks.map((link)=>{
            return <PageLink key={link.id} link={link} itemClass={itemClass}></PageLink>
        })}
    </ul>
  )
}

export default PageLinks;