import React from 'react'
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
        title:'Create Image',
        Icon: <VscVscodeInsiders />,
        IconColor:"#e2c541"
       },
        {
        title:'Create Image',
        Icon: <PiLightbulb />,
        IconColor:"#e2c541"
       },
    ]
  return (
    <div>chatHelp</div>
  )
}

export default ChatHelp