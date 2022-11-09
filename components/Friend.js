import React from 'react';
import Image from 'next/image';
import Avatar from '../assets/profil.png';
import {BsFillFileXFill} from 'react-icons/bs';

const Friend = ({username, index, CloseFriend}) => {
  return (
    <li>
        <div className='flex space-x-5 items-center border-solid border-2 h-[3rem] px-4 rounded-[0.25rem] mb-1 bg-gray-200 relative'>
            <Image src={Avatar} className='w-[2rem] h-[2rem] ' />
            <p>{ username }</p>
            <BsFillFileXFill 
              className='absolute right-5 text-gray-300 hover:text-gray-400'
              onClick={CloseFriend} />
        </div>
    </li>
  )
}
 
export default Friend