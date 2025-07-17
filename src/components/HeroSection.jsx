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
        <h1 className='font-goldman ml:text-9xl ms:text-8xl min-[25rem]:text-7xl text-6xl relative mr-4'><span className='text-outline'>VIBE CODE</span> <span className='text-[#FF3B30] ml:text-3xl ms:text-2xl min-[25rem]:text-lg text-[1rem] absolute rotate-90 top-0 bottom-0 -right-4 font-semibold'>2025</span></h1>
        <h2 className='font-syne ml:text-2xl ms:text-xl text-lg flex items-center gap-2'>Powered by <span className='font-bold text-[#FF0000] flex items-center font-k2d'><img src={matrixLogoPng} alt="" className='h-10' />ATRIX</span></h2>
        <h3 className='font-poppins ml:text-2xl ms:text-xl text-lg font-medium max-[25rem]:w-60 text-center'>Where Al Meets Creativity. Code Meets Vibe.</h3>
      </header>
      <div className='flex justify-around max-ml:flex-col gap-2 items-center'>
        {cardsContent.map((ele)=>{
          return <Card url={ele.url} text={ele.text}/>
        })}
      </div>
    </section>
  )
}

export default HeroSection