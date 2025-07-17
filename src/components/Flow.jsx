import React from 'react'
import flow1Png from "/flow1.png"
import flow2Png from "/flow2.png"
import flow3Png from "/flow3.png"
import flow4Png from "/flow4.png"
import flow5Png from "/flow5.png"
import flow6Png from "/flow6.png"

const cardContents = [
    { heading: "Register your vibe", text: "Play solo or team up with a coding buddy. Fill out the form and get ready to vibe.", img: flow1Png, position: "self-start" },
    { heading: "Show Up, Sync Up", text: "Arrive at the venue, settle in, and meet fellow devs. Bring your laptop, ideas & good vibes.", img: flow2Png, position: "self-end" },
    { heading: "The Briefing Begins", text: "Understand the rules, judging criteria, problem statement scope, and tech do’s & don’ts.", img: flow3Png, position: "self-start" },
    { heading: "Think It. Plan It.", text: "You get 20 minutes to brainstorm, whiteboard, or just vibe your ideas before hands-on starts.", img: flow4Png, position: "self-end" },
    { heading: "Build in the Zone", text: "4 hours of pure building. Use AI + Web tools to create your problem-solving website.", img: flow5Png, position: "self-start" },
    { heading: "Demo & Decide", text: "Mentors and judges review your work. Shortlisted teams demo. Winners announced on the spot.", img: flow6Png, position: "self-end" },
]

const FlowCard = ({ heading, text, img, position }) => {
    return (
        <div className={`bg-[#1C1A1A] rounded-4xl flex pl-32 h-48 w-[38rem] justify-evenly py-6 ${position}`}>
            <div className='w-fit'>
                <h3 className='font-syne font-semibold text-2xl w-64 mb-6'>{heading}</h3>
                <p className='font-syne text-sm w-50 pl-8'>{text}</p>
            </div>
            <img src={img} alt="" className='h-full w-50 object-contain' />
        </div>
    )
}

const Flow = () => {
    return (
        <section>
            <h2 className='font-poppins text-[#CF2C3C] font-bold text-5xl mb-8'>Hackathon Flow</h2>
            <div className='relative flex flex-col gap-8 w-[56rem] m-auto'>
                <div className='absolute z-10 h-full hidden'>
                    <svg className='h-full block stroke-2 stroke-[#CF2C3C]' style={{}} viewBox="0 0 543 1830" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 0V232.41C1 243.456 9.95431 252.41 21 252.41H522C533.046 252.41 542 261.365 542 272.41V587C542 598.046 533.046 607 522 607H21C9.95431 607 1 615.954 1 627V938C1 949.046 9.95431 958 21 958H522C533.046 958 542 966.954 542 978V1281C542 1292.05 533.046 1301 522 1301H21C9.95431 1301 1 1309.95 1 1321V1651C1 1662.05 9.95431 1671 21 1671H522C533.046 1671 542 1679.95 542 1691V1829.5" />
                    </svg>
                </div>
                {cardContents.map((ele) => {
                    return <FlowCard heading={ele.heading} text={ele.text} img={ele.img} position={ele.position} />
                })}
            </div>
        </section>
    )
}

export default Flow