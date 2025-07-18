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
    <div className='ms:px-6 px-3 lg:w-[60rem] w-full h-screen min-h-fit lg:m-auto'>
      <p className='text-[#FF0105] font-bold font-poppins ms:text-6xl text-4xl text-center lg:p-4'>GOT QUESTIONS ?</p>
      <p className='text-white font-medium font-poppins ms:text-xl text-lg text-center lg:mx-20 mb-8 mt-4'>We’ve answered the most common queries about the event—rules, registration, participation, and more. If you're still unsure, we’ve got your back!</p>
      <div className='flex items-center justify-between mb-20'>
      <div>
        <p className='text-white font-bold ms:text-6xl text-4xl font-poppins  p-4'>
          FAQS
        </p>
        
        <p className='text-white px-4 font-inter'>
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
        <img src={faq_img} alt="faq_img" className='md:w-80 w-60 self-end max-ms:hidden' />
      </div>
      {
        faqs.map((faq, idx) => (
          <div
            className={`${openIndex === idx ? 'bg-[#FF3B30]' : 'bg-white'} min-w-fit max-w-[46rem] mx-auto px-4 ml:px-8 py-2 m-4 text-black rounded-4xl`}
            key={faq.id}
          >
            <div className='flex items-center justify-between gap-2'>
              <div className='flex font-bold gap-2 flex-1'>
                <p className='text-3xl font-[500] py-2 text-center'>
                  {faq.id}
                </p>
              
              <p className='ml:p-2 my-auto ml:text-xl ms:text-lg font-semibold flex-1'>
                  {faq.que}
                </p>
              </div>
              {openIndex === idx ? (
                <button
                  onClick={() => setOpenIndex(null)}
                  className='border  border-black cursor-pointer rounded-full w-12 h-12 text-4xl text-center pb-2 font-extrabold bg-white'
                >
                  &minus;
                </button>
              ) : (
                <button
                  onClick={() => setOpenIndex(idx)}
                  className='cursor-pointer rounded-full border bg-white border-black w-12 h-12 text-4xl text-center pb-2 font-extrabold'
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
