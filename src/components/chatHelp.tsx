import React from 'react'
import { GiGraduateCap } from 'react-icons/gi'
import { MdEditNote } from 'react-icons/md'
import { PiLightbulb } from 'react-icons/pi'
import { VscVscodeInsiders } from 'react-icons/vsc'

const ChatHelp = () => {

    const chatData = [
        {
        title:'Create Image',
        Icon: <PiLightbulb />,
        IconColor:"#e2c541"
       },
        {
        title:'Get Advice',
        Icon: <MdEditNote />,
        IconColor:"#c285c7"
       },
        {
        title:'Summarize Text',
        Icon: <VscVscodeInsiders />,
        IconColor:"#e86060"
       },
        {
        title:'Code',
        Icon: <GiGraduateCap />,
        IconColor:"#76d0eb"
       },
        {
        title:'Help',
        Icon: <GiGraduateCap />,
        IconColor:"#76d0eb"
       },
       {
        title:"More"
       }
    ]
  return (
    <div className='w-full flex flex-col md:flex-row gap-3 md:items-center justify-center'>
      {chatData.map((item, index)=>(
        <div className='flex border py-2 px-4 rounded-full gap-2 hover:border-white/30 duration-300 border-b-gray-600 hover:bg-white/10  text-sm cursor-pointer justify-center items-center' key={index}>
          {item?.Icon && <span className='text-xl ' style={{color: item?.IconColor}}>{item.Icon}</span>}
          <p className='items-center'>{item.title}</p>
        </div>
      ))}
    </div>
  )
}

export default ChatHelp