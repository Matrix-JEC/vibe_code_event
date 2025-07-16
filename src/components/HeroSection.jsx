import React from 'react'
import matrixLogoPng from "/matrixLogo.png"
import beginnerPng from "/beginner.png"
import pairProgrammerPng from "/pairProgrammer.png"
import sessonedDevPng from "/sessonedDev.png"

const cardsContent = [
  { url: beginnerPng, text: "whether u are a curious beginner" },
  { url: sessonedDevPng, text: "A seasoned DEV" },
  { url: pairProgrammerPng, text: "Or a person who thrives in a team" },
]

const Card = ({ url, text }) => {
  return (
    <div className='w-fit'>
      <div className='flex items-center justify-center w-60 h-52'>
      <img src={url} alt="" className='w-60'/>
      </div>
      <div className='font-syne border border-[#FF0105] flex justify-center items-center rounded-xl w-60 h-14 px-8'><p className='text-center w-full'>{text}</p></div>
    </div>
  )
}

const HeroSection = () => {
  return (
    <section className='w-full min-h-fit max-h-[40rem] h-[calc(100dvh-3.5rem)] justify-evenly flex flex-col'>
      <header className='flex flex-col items-center justify-center gap-2'>
        <h1 className='font-goldman text-9xl relative mr-4'><span className='text-outline'>VIBE CODE</span> <span className='text-[#FF3B30] text-3xl absolute rotate-90 top-0 bottom-0 -right-4 font-semibold'>2025</span></h1>
        <h2 className='font-syne text-2xl flex items-center gap-2'>Powered by <span className='font-bold text-[#FF0000] flex items-center font-k2d'><img src={matrixLogoPng} alt="" className='h-10' />ATRIX</span></h2>
        <h3 className='font-poppins text-2xl font-medium'>Where Al Meets Creativity. Code Meets Vibe.</h3>
      </header>
      <div className='flex justify-around'>
        {cardsContent.map((ele)=>{
          return <Card url={ele.url} text={ele.text}/>
        })}
      </div>
    </section>
  )
}

export default HeroSection