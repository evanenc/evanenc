import React from 'react'
import '../css/Home.css'

const Home=()=>{
  return(
    <section id='home'>
      <div id='welcome'>
        <h2>Hi, my name is</h2>
        <h1 className='welcomeName'>Evan Encarnacion.</h1>
        <h1 className='welcomeInfo'>A Full-Stack Developer from Denver!</h1>
      </div>
    </section>
  )
}

export default Home