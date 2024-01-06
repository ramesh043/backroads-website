import React from 'react'
import Title from './Title';
import about from "../images/about.jpeg"
function About() {
  return (
    
      <section className='section' id='about'>
      <Title title="About" desc="Us"/>
      <div className='section-center about-center'>
        <div className='about-img'>
          <img src={about} alt='about' className='about-photo'/>

        </div>
        <article className='about-info'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Eius facilis velit dicta facere pariatur! Id!</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, debitis.
            </p>
            <a href='#explore' className='btn' >Explore More</a>
        </article>

      </div>

      </section>

     
    
  )
}

export default About;