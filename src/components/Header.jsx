import React, { useState } from 'react'
import { NavLink } from 'react-router'
import logoPng from '/logo.png'

const navList = [
  { label: "Home", path: "/" },
  { label: "Sponsers", path: "/sponsers" },
  { label: "Humans", path: "/humans" },
  { label: "FAQs", path: "/faqs" },
  { label: "Contact us", path: "/contact" },
  { label: "Register", path: "/register" },
]

const Header = () => {
  return (
    <header className='flex justify-between items-center lg:mx-12 mx-6 my-1'>
      <img src={logoPng} alt="" className='h-14' />
      <nav className='flex gap-2 font-space-grostesk font-normal items-center max-ml:hidden'>
        {navList.map((ele) => {
          return (<NavLink to={ele.path} className={"px-2 rounded-full"} style={({ isActive }) => { return { backgroundColor: isActive ? "rgb(0 156 255 / 50%)" : "transparent" } }} end>{ele.label}</NavLink>)
        })}
      </nav>
      <ProfileLogo />
      <button className='font-inter font-bold text-sm bg-[#FF0000CC] rounded-lg px-8 py-1.5'>
        Register
      </button>
    </header>
  )
}

export default Header


const ProfileLogo = () => {

  const [display, setDisplay] = useState(false);
  const [currPage, setCurrPage] = useState("Home");

  return (
    <>
      <div className='relative w-fit block ml:hidden text-white'
        onClick={() => { setDisplay((display) => !display) }}>
        <div className='px-2 rounded-full bg-[#009cff80] w-24 text-center'>{currPage}</div>
        {display && <nav className='absolute flex-col min-w-fit flex py-2 rounded-lg mt-0.5 z-101 w-48 -left-12 overflow-hidden bg-[#0000005b]' style={{ backdropFilter: "blur(3px)" }}>
          {navList.map((ele) => {
            return (<NavLink to={ele.path} className={"px-2 rounded-full text-center"} style={({ isActive }) => { if (isActive) setCurrPage(ele.label); return { backgroundColor: isActive ? "rgb(0 156 255 / 50%)" : "transparent" } }} end>{ele.label}</NavLink>)
          })}
        </nav>
        }
      </div>
      {!!display && <div className='w-dvw h-full absolute z-100 top-0 bg-transparent left-0' onClick={(e) => { setDisplay((display) => !display) }}></div>}
    </>
  )
}