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
    ]
  return (
    <div>chatHelp</div>
  )
}

export default ChatHelp