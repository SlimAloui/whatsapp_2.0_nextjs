import React, {useState} from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { BsFillChatLeftTextFill } from 'react-icons/bs';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import AddFriend from './AddFriend';
import Friend from './Friend';

const Sidebar = ({username, email}) => {

  const [friends, setFriends] = useState([
    {
      Username:"Friend 1",
      Email: "friend@mail.com"
    },
    {
      Username:"Friend 2",
      Email: "friend@mail.com"
    },
    {
      Username:"Friend 3",
      Email: "friend@mail.com"
    },
  ]);
  
  const [popupFriendToAdd, setPopupFriendToAdd] = useState(false);

  const [friendToAdd, setFriendToAdd] = useState("rrr");

  const handleSubmitAddFriend = (event) => {
    event.preventDefault();
    const updatedFriends = [...friends];

    console.log(friendToAdd);

    updatedFriends.push({
      Username:friendToAdd,
      Email: "friend@mail.com"
    });
    setPopupFriendToAdd(false);
    setFriends(updatedFriends);
  };

  const handleAddFriend = () => {
    if(!popupFriendToAdd) {
      setPopupFriendToAdd(!popupFriendToAdd);
    }
  };

  const handleCloseFriend = (username) => {
    const updatedFriends = [...friends];
    const filtredFriends = updatedFriends.filter(friend => friend.Username != username);
    setFriends(filtredFriends);
  };

  return (
    <div className='w-80 mx-1'>
        <div className='flex items-center border-b-2 sticky'>
            <BsPersonCircle className='w-[2rem] h-[2rem] m-2 text-gray-400 hover:opacity-80'/>
            <p className='pl-2'>{username}</p>
            <button className='absolute right-10 text-gray-400'><BsFillChatLeftTextFill className='' /></button>
            <div className='absolute right-5 text-gray-400'><BsThreeDotsVertical /></div>
        </div>
        <div className='flex space-x-5 items-center pt-4'>
            <BsSearch className='w-[1rem] h-[1rem] ml-4 text-gray-400'/>
            <input placeholder='Search in chat' className='flex-1 mr-8'/>
        </div>
        <button 
          className='justify-center w-full bg-neutral-50 hover:bg-neutral-200 h-[2rem] my-5 rounded'
          onClick={handleAddFriend}>Start a new discussion</button>
        {
          popupFriendToAdd ? <AddFriend 
            handleSubmit={handleSubmitAddFriend} 
            handleFriendChange={setFriendToAdd} /> : null
        }

        <ul>
          { friends.map((friend, i) => 
              <Friend 
                username={friend.Username} 
                key={i} 
                CloseFriend={()=> handleCloseFriend(friend.Username)} />) }
        </ul>
    </div>
  )
}

export default Sidebar