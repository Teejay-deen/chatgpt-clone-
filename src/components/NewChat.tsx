"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaPlus } from 'react-icons/fa'


const NewChat = () => {
    const router =useRouter()
    
    const createNewChat =async()=>{
        //creating a new chats id in firestore
        router.push("/chat/676767")
    }
  return (
    <button onClick={createNewChat} className='flex items-center justify-center gap-2 border border-white/20 rounded-md text-white/50 hover:border-white/50 w-full hover:text-white text-xs md:text-base px-2 py-1'> <FaPlus /> New Chat</button>
  )
}

export default NewChat