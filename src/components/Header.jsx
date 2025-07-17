import React from 'react'
import { NavLink } from 'react-router'
import logoPng from '/logo.png'

const navList = [
  {label: "Home", path: "/"},
  {label: "Gallery", path: "/gallery"},
  {label: "Sponsers", path: "/sponsers"},
  {label: "Humans", path: "/humans"},
  {label: "FAQs", path: "/faqs"},
  {label: "Contact us", path: "/constact-us"},
]

const Header = () => {
  return (
    <header className='md:flex justify-between items-center mx-12 my-1 hidden'>
      <img src={logoPng} alt="" className='h-14'/>
      <nav className='flex gap-2 font-space-grostesk font-normal items-center'>
        {navList.map((ele)=>{
          return (<NavLink to={ele.path} className={"px-2 rounded-full"} style={({isActive})=>{ return {backgroundColor: isActive ? "rgb(0 156 255 / 50%)": "transparent"}}} end>{ele.label}</NavLink>)
        })}
      </nav>
      <button className='font-inter font-bold text-sm bg-[#FF0000CC] rounded-lg px-8 py-1.5'>
        Register
      </button>
    </header>
  )
}

export default Header