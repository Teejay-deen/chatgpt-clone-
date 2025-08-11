import React from 'react'
import NewChat from './NewChat'
import Link from 'next/link'
import { IoHome } from 'react-icons/io5'

const SideBar = () => {
  return (
    <div className='hidden md:flex flex-col h-screen relative p-2.5 '>
       <div className='flex items-center gap-1'>
         <Link className='border border-white/20 rounded-md text-white/50 hover:border-white/50 hover:text-white text-xs md:text-base p-1.5 md:p-2' href={"/"}>
         <IoHome /> 
         
        </Link>
        <NewChat />
       </div>
    </div>
  )
}

export default SideBar