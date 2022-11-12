import React from 'react'
import Image from 'next/image';
import Avatar from '../assets/profil.png';

const Bubble = ({friend, message, date}) => {

  const align = friend === null ? 'flex-row-reverse'  : '';
  return (
    <div className={` mx-1 `}>
      {/*`${friend} : ${date} => ${message}`*/}
      <div className={`flex ${align} items-center`}>
        <Image className='w-[2rem] h-[2rem] mx-4' src={Avatar} />
        <div className='bg-gray-200 p-2 rounded-lg'>
          <p>{message}</p>
        </div>
      </div>
    </div>
  )
}

export default Bubble