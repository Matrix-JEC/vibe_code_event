import React from 'react'
import HeroSection from '../components/HeroSection'
import CountdownTimer from '../components/CountdownTimer'
import Flow from '../components/Flow'

const Home = () => {
  return (<div className='mx-12 flex flex-col gap-6'>
    <HeroSection />
    <CountdownTimer />
    <Flow />
  </div>
  )
}

export default Home