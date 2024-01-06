import React from 'react'
import Title from './Title';
import Tour from './Tour';
import { tours } from '../data';

function Tours() {
  return (
  <section className='section' id='tours'>
    <Title title="featured" subTitle="tours"></Title>
    <div className='section-center featured-center' >
      {tours.map((tour)=>{
        return <Tour {...tour} key={tour.id}></Tour>
      })}

    </div>
  </section>
  )
}

export default Tours;