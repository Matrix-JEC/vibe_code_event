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
            <h2 className='font-syne ml:text-4xl ms:text-3xl text-xl text-center my-6 max-[25rem]:w-72 m-auto'>There's a space for everybody at <span className='text-[#FF0105] font-black font-space-grostesk'>VIBE CODE</span> 2025.</h2>
            <div className='flex font-syne ml:h-75 ms:h-64 h-48 bg-[#1C1A1A] py-4 ml:px-8 px-4 rounded-4xl justify-between items-center w-fit ml:w-full m-auto ml:gap-12 ms:gap-6 gap-2'>
                <div className='justify-center items-center h-full flex flex-col'>
                    <h3 className='text-[#FF3044C9] text-2xl font-bold self-start'>Event starts in</h3>
                    <div className='w-fit flex flex-col items-center mt-2 ms:mb-8 mb-4'>
                        <div className='ml:text-8xl ms:text-6xl text-4xl w-fit mb-4'>
                            <span className='w-12 ms:w-22 ml:w-28 inline-block text-center'>{(hours) < 10 ? "0" : ""}{hours}</span>:<span className='w-12 ms:w-22 ml:w-28 inline-block text-center'>{minutes < 10 ? "0" : ""}{minutes}</span>:<span className='w-12 ms:w-22 ml:w-28 inline-block text-center'>{seconds < 10 ? "0" : ""}{seconds}</span>
                        </div>
                        <div className='text-[0.6rem] flex justify-between w-full'>
                            <span className='w-12 ms:w-22 ml:w-28 text-center'>HOURS</span> <span className='w-12 ms:w-22 ml:w-28 text-center'>MINUTES</span> <span className='w-12 ms:w-22 ml:w-28 text-center'>SECONDS</span>
                        </div>
                    </div>
                    <button className='font-inter font-bold text-sm bg-[#FF0000CC] rounded-lg px-8 py-1.5'>
                        Register
                    </button>
                </div>
                <img src={timerIllustrationPng} alt="" className='ml:h-full h-4/5' />
            </div>
        </section>
    )
}

export default CountdownTimer