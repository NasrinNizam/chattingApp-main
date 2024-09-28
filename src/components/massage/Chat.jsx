import React from 'react'
import { ChatBar } from './ChatBar'
import { Massage } from './Massage'

export const Chat = () => {
  return (
    <div className='pl-[200px] flex'>
        <Massage />
        <ChatBar />
    </div>
  )
}
