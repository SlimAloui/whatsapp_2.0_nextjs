import React, { useState } from 'react'
import { RiSendPlane2Fill } from 'react-icons/ri';
import { BsFillFileXFill } from 'react-icons/bs';
import { BsEmojiSmile } from 'react-icons/bs';
import { FiPaperclip } from 'react-icons/fi'
import Bubble
 from './Bubble';
const Main = () => {

    const [messages, setMessages] = useState([
        {
            friend : "SA",
            date : "09:00",
            message : "Va fa napoli"
        },
        {
            friend : null,
            date : "09:01",
            message : "Rude !!"
        },
    ]);

    const [message, setMessage] = useState("");

    const handleAddMessage = () => {
        const messageToUpdate = [...messages];
        messageToUpdate.push({
            friend : null,
            date : "09:01",
            message : message
        });
        setMessages(messageToUpdate);
    }

  return (
    <div className='bg-gray-200 w-full h-screen py-5 px-5'>
        <div className=' bg-white h-full relative content-center  rounded-2xl'>
        
            <div className='space-y-4 p-4'>
                {messages.map((message) => {
                    return <Bubble friend={message.friend} message ={message.message} date={message.date}/>;
                })}
            </div>
            <div className='flex items-center space-x-1  w-full absolute bottom-5 justify-center'>
                <div className='flex w-11/12 bg-gray-200 rounded-[1rem] p-2 space-x-1 text-[1.75rem] items-center'>
                    <BsEmojiSmile className='subpixel-antialiased'/>
                    <input  placeholder='Type a message'
                            className='bg-gray-200 w-full pl-3 h-8 focus:outline-none text-[1rem]'
                            value= {message}
                            onChange={(event) => setMessage(event.currentTarget.value)} />
                    <FiPaperclip className='antialiased'/>
                </div>
                <button className='bg-emerald-500 p-3 rounded-[2rem] overflow-hidden 
                                    transition ease-in-out delay-150 hover:scale-110  duration-300'
                        onClick={handleAddMessage}>
                    <RiSendPlane2Fill className=' text-white -rotate-45 text-xl'/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Main