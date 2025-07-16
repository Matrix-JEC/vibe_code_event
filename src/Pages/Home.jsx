import React from 'react'
import HeroSection from '../components/HeroSection'
import CountdownTimer from '../components/CountdownTimer'

const Home = () => {
  return (<div className='mx-12 flex flex-col gap-6'>
    <HeroSection />
    <CountdownTimer />
  </div>
  )
}

export default Home