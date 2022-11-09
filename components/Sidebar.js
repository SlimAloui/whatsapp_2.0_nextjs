import React from 'react'
import { BsPersonCircle } from 'react-icons/bs';
import { BsFillChatLeftTextFill } from 'react-icons/bs';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
const Sidebar = () => {
  return (
    <div className='w-80 mx-1'>
        <div className='flex items-center border-b-2 sticky'>
            <BsPersonCircle className='w-[2rem] h-[2rem] m-2 text-gray-400 hover:opacity-80'/>
            <p className='pl-2'>Username</p>
            <button className='absolute right-10 text-gray-400'><BsFillChatLeftTextFill className='' /></button>
            <div className='absolute right-5 text-gray-400'><BsThreeDotsVertical /></div>
        </div>
        <div className='flex space-x-5 items-center pt-4'>
            <BsSearch className='w-[1rem] h-[1rem] ml-4 text-gray-400'/>
            <input placeholder='Search in chat' className='flex-1 mr-8'/>
        </div>
        <button className='justify-center w-full bg-neutral-50 hover:bg-neutral-200 h-[2rem] my-5 rounded'>Start a new discussion</button>
    </div>
  )
}

export default Sidebar