import React from 'react'

const AddFriend = ({handleSubmit, handleFriendChange}) => {

    const handleChange = (event, handler) => {
        handleFriendChange(event.currentTarget.value);
    }

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-x-4 text-center">
        <input 
            placeholder='Mail address...' 
            className='border-solid border-1 border-red-500' 
            onChange={handleChange}
            />
        <button type="submit" className='rounded-[0.25rem] bg-gray-300 w-[4rem]'>Add</button>
    </form>
  )
}

export default AddFriend