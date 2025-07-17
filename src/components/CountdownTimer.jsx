import React from 'react'
import { useTimer } from 'react-timer-hook';
import timerIllustrationPng from "/timerIllustration.png"

const CountdownTimer = () => {
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
    } = useTimer({ expiryTimestamp: new Date(Date.now() + 60 * 60 * 1000), onExpire: () => console.warn('onExpire called'), interval: 20 });


    return (
        <section className='w-fit m-auto mb-8'>
            <h2 className='font-syne text-4xl text-center my-6'>There's a space for everybody at <span className='text-[#FF0105] font-black font-space-grostesk'>VIBE CODE</span> 2025.</h2>
            <div className='flex font-syne h-75 bg-[#1C1A1A] py-4 px-8 rounded-4xl justify-between w-full m-auto gap-12'>
                <div className='justify-center items-center h-full flex flex-col'>
                    <h3 className='text-[#FF3044C9] text-2xl font-bold self-start'>Event starts in</h3>
                    <div className='w-fit flex flex-col items-center mt-2 mb-8'>
                        <div className='text-8xl w-fit'>
                            <span className='w-28 inline-block'>{(hours) < 10 ? "0" : ""}{hours}</span>:<span className='w-28 inline-block'>{minutes < 10 ? "0" : ""}{minutes}</span>:<span className='w-28 inline-block'>{seconds < 10 ? "0" : ""}{seconds}</span>
                        </div>
                        <div className='text-xs flex justify-between w-full'>
                            <span className='w-28 text-center'>HOURS</span> <span className='w-28 text-center'>MINUTES</span> <span className='w-28 text-center'>SECONDS</span>
                        </div>
                    </div>
                    <button className='font-inter font-bold text-sm bg-[#FF0000CC] rounded-lg px-8 py-1.5'>
                        Register
                    </button>
                </div>
                <img src={timerIllustrationPng} alt="" className='h-full' />
            </div>
        </section>
    )
}

export default CountdownTimer