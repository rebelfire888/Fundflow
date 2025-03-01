import React from 'react'
import {NavLink} from "react-router-dom"
import fundflow from "../../assets/images/fundflow-logo2.png"
import Admin from '../Admin/Admin'

const Navbar = () => {
  return (
    <nav className='navbar  flex flex-row justify-between mx-auto items-center h-[15vh] bg-gray-300 mx-auto px-[7rem]'>
        <div><img src={fundflow} className="logo w-[17rem]" alt="Fundflow" /></div>
        <div>
          <a className='abc hover:bg-slate-300/[0.1] py-[0.2rem] px-[1.0rem] rounded-lg duration-[0.5s]  transition-all font-semibold' href="https://github.com/Udhal883/Fundflow" target="_blank" >Github</a>

        <NavLink  to={"/contactUs"}><a href="#" className="abc hover:bg-slate-300/[0.1] py-[0.2rem] px-[1.0rem] rounded-lg duration-[0.5s]  transition-all font-semibold">Contact Us</a></NavLink> 
        
          <NavLink  to={"/about"}><a href="#" className="abc hover:bg-slate-300/[0.1] py-[0.2rem] px-[1.0rem] rounded-lg duration-[0.5s]  transition-all font-semibold">About</a></NavLink> 
          
            <NavLink to={"/login"} className="abc hover:bg-slate-600 hover:text-[#f1f2f6] bg-[#f1f2f6] py-[0.4rem] px-[1.0rem] rounded-lg  duration-[0.5s]transition-all font-semibold">Sign In</NavLink >
        </div>
    </nav>
  )
}

export default Navbar