import Link from 'next/link'
import React from 'react'
import { IoChevronDown } from "react-icons/io5";


const Header = () => {
  return (
    <div className='flex justify-between items-center m-2.5 h-10 top-0 left-0 pl-2 pr-12 absolute w-full'>
        <button className='flex items-center hover:bg-black font-semibold tracking-wide px-3 rounded-lg py-2 gap-2 bg-[#2f2f2f]'>FORTRESS CHATGPT<IoChevronDown /></button>
        <Link href={"/sigin"} >Sign In</Link>
    </div>
  )
}

export default Header