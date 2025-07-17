import React from 'react'
import { Link } from 'react-router'
import matrixLogoPng from "/matrixLogo.png"
import twitterLogoPng from "/twitterLogo.png"
import discordLogoPng from "/discordLogo.png"
import githubLogoPng from "/githubLogo.png"
import linkdinLogoPng from "/linkdinLogo.png"

const navigationLinks = {
  "Community": [
    { label: "About", path: "/about" },
    { label: "Guidelines", path: "/guidelines" },
    { label: "Events", path: "/events" },
    { label: "Blogs", path: "/blogs" },
  ],
  "Resources": [
    { label: "Documentaion", path: "/documentaion" },
    { label: "Learning Center", path: "/learning-center" },
    { label: "API Reference", path: "/api-reference" },
    { label: "Support", path: "/support" },
  ],
};

const Footer = () => {
  return (
    <footer className='grid grid-cols-2 ml:flex items-start justify-between mx-12 mt-12 mb-6'>
      <div className='flex flex-col items-center justify-center gap-6 self-center col-span-2'>
        <div className='flex items-center gap-4'>
          <img src={matrixLogoPng} alt="" className='w-14' />
          <div className='font-semibold sm:text-2xl text-xl font-inter w-44'>
            Building the <span className='text-[#FF3044]'>future together.</span>
          </div>
        </div>
        <div className='text-xs font-inter'>© 2025 Matrix JEC, All rights are reserved.</div>
      </div>

      {Object.keys(navigationLinks).map((key) => {
        return (
          <div className='text-[#FFFFFFCC] font-inter max-ml:w-4/5 max-ml:ml-auto'>
            <h4 className='text-lg font-semibold mb-2'>{key}</h4>
            <nav className='flex flex-col text-sm gap-2'>
              {navigationLinks[key].map((ele)=>{
                return <Link to={ele.path}>{ele.label}</Link>
              })}
            </nav>
          </div>
        )
      })}


      <div className='flex justify-center items-center flex-col gap-4 max-ml:col-span-2 max-ml:my-8 max-ml:row-start-2'>
        <div className='text-2xl font-inter font-semibold'>Connect with us</div>
        <div className='flex gap-6'>
          {[twitterLogoPng, githubLogoPng, linkdinLogoPng, discordLogoPng].map((ele) => {
            return <img src={ele} alt="" className='h-7' />
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer