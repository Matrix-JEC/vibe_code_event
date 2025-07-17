import React from 'react'
import rulesPng from '/rules.png'
import rewardsPng from '/rewards.png'
import { FlipCard } from './FlipCard'

const content = [
    { heading: "Rules", img: rulesPng, textContent: "TEXT CONTENT" },
    { heading: "Rewards", img: rewardsPng, textContent: "TEXT CONTENT" },
]

const FrontOfCard = ({ heading, img }) => {
    return <div className="card bg-[#1C1A1A] rounded-2xl w-80 h-96 flex items-center justify-between py-6 flex-col">
        <h2 className='text-[#FF3B30] font-syne font-bold text-2xl'>{heading}</h2>
        <img src={img} alt="" className='w-64' />
    </div>
}

const BackOfCard = ({ heading, textContent }) => {
    return <div className="card bg-[#1C1A1A] rounded-2xl w-80 h-96 flex items-center justify-between py-6 flex-col">
        <h2 className='text-[#FF3B30] font-syne font-bold text-2xl'>{heading}</h2>
        <div className='w-60 h-72 flex items-center justify-center'>{textContent}</div>
    </div>
}

const RulesAndRewards = () => {
    return (
        <section className='flex gap-10 w-full items-center justify-center my-8 max-[48rem]:flex-col'>
            {content.map((ele) => {
                return (<div className='w-80 h-fit'>
                    <FlipCard frontOfCard={<FrontOfCard img={ele.img} heading={ele.heading} />} backOfCard={<BackOfCard heading={ele.heading} textContent={ele.textContent}/>} />
                </div>)
            })}
        </section>
    )
}

export default RulesAndRewards