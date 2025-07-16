import React from 'react'
import faq_img from '../assets/faq_img.png'

export default function FAQpage() {

 const [openIndex, setOpenIndex] = React.useState(null);
  
  const faqs = [
    {
      id: "01",
      que: "Do projects need to be related to the theme?",
      ans: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: "02",
      que: "How many team members do I need?",
      ans: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: "03",
      que: "How do I register ?",
      ans: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: "04",
      que: "Can we bring a pre-built project to the hackathon?",
      ans: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: "05",
      que: "What are the prerequisites to participate in this hackathon ?",
      ans: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: "06",
      que: "How much are the participation fees?",
      ans: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: "07",
      que: "Will the Hackathon be in person or online ?",
      ans: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: "08",
      que: "What is the venue for vibe coding 2025 ?",
      ans: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
  ]



  return (
    <div className='bg-black p-16 w-[100vw] min-w-fit lg:px-60 h-screen min-h-fit'>
      <p className='text-[#FF0105] font-[800] text-6xl text-center lg:p-4'>GOT QUESTIONS ?</p>
      <p className='text-white font-[800] text-xl text-center lg:mx-20 mb-8 mt-4'>We’ve answered the most common queries about the event—rules, registration, participation, and more. If you're still unsure, we’ve got your back!</p>
      <div className='flex items-center justify-between mb-20'>
      <div>
        <p className='text-white font-[800] text-7xl p-4'>
          FAQS
        </p>
        
        <p className='text-white px-4 '>
          Got questions about the hackathon?
          <br/>
          We’ve got all the info you need to get started 
          <br/>
          <br/>
          Still curious?
          <br/>
          Ping us anytime at &nbsp;
          <span className='text-[#FF0105]'>
             team.matrix.jec@gmail.com    
          </span>
          <br/>
          — we’re all ears (and keyboards)! 👨‍💻👩‍💻
        </p>
      </div>
        <img src={faq_img} alt="faq_img" className='mt-4 md:h-52 md:w-80 w-48 h-48' />
      </div>
      {
        faqs.map((faq, idx) => (
          <div
            className={`${openIndex === idx ? 'bg-[#FF3B30]' : 'bg-white'} min-w-fit  px-12 py-4 m-4 text-black rounded-4xl`}
            key={faq.id}
          >
            <div className='flex items-center justify-between'>
              <div className='flex font-bold'>
                <p className='text-5xl font-[500] py-4 text-center'>
                  {faq.id}
                </p>
              
              <p className='p-4 my-auto text-2xl text-center font-semibold'>
                  {faq.que}
                </p>
              </div>
              {openIndex === idx ? (
                <button
                  onClick={() => setOpenIndex(null)}
                  className='border  border-black cursor-pointer rounded-full w-12 h-12 text-4xl text-center pb-2 font-extrabold bg-white m-4 mr-0'
                >
                  &minus;
                </button>
              ) : (
                <button
                  onClick={() => setOpenIndex(idx)}
                  className='cursor-pointer rounded-full border bg-white border-black w-12 h-12 text-4xl text-center pb-2 m-4 mr-0 font-extrabold'
                >
                  &#x2B;
                </button>
              )}
            </div>
            <div>
              {openIndex === idx && <p className='p-4'>
                <hr/>
                <br/>
                {faq.ans}
                </p>}
            </div>
          </div>
        ))
      }
    </div>
  )
}
