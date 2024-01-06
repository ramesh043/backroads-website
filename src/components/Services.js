import React from 'react'
import Title from './Title';
import { services } from '../data';
import Service from '../components/Service';
function Services() {
  return (
    <section className='section services' id='services'>
      <Title title="Our" subTitle="Services"/>
      <div className='section-center services-center'>
      {services.map((service)=>{
        return           <Service {...service} key={service.id}/>
        



})}
      </div>
       
    </section>
  )
}

export default Services;