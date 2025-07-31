
"use client";
import React, { useState } from 'react'
import { ImArrowUpRight2 } from 'react-icons/im'
import { TbPaperclip } from 'react-icons/tb'

const ChatInput = () => {
    const [prompt , setPrompt] = useState("")
    
  return (
    <div className='w-full flex flex-col gap-2 justify-center items-center max-w-3xl px-4  mx-auto pt-3'>
        <form className='bg-white/10 rounded-full flex items-center py-2.5 px-4 w-full'>
             <TbPaperclip className='text-2xl -rotate-45 text-white' />
            <input onChange={(e)=> setPrompt(e.target.value)} value={prompt} className='text-white px-3 outline-none font-medium tracking-wide w-full placeholder:text-gray-400 bg-transparent ' type="text" placeholder='Message Fortress ChatGPT' name="" id="" />
            <button disabled={!prompt} className='rounded-full p-2.5 text-black bg-white disabled:bg-white/30'>
                <ImArrowUpRight2 className='text-sm -rotate-45 text-black/80' />
            </button>
        </form>
        <p className='text-sm font-medium text-gray-400'>Fortress ChatGPT can make mistake. Check the important Info.</p>
        {/* model selection for smaller screen */}

    </div>
  )
}

export default ChatInput