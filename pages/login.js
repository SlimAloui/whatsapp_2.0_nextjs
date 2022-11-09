import React, { useState } from 'react'

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event, handler) => {
    handler(event.currentTarget.value);
  }

  const handleAuthentification = (event) => {
    event.preventDefault();

    if(username == "TOUDII" && password == "1234") {

      localStorage.setItem("CurrentUser", JSON.stringify({
        username : username,
        email : ""
      }));

      return {
        redirect: {
          destination: "/api/hello",
          permanent: false,
        }, 
      }
    } else { 
      alert("Error");
    }
  }

  return (
    <div className='grid place-items-center h-screen'>
    <div className='border-solid border-2 rounded-[0.25rem] p-2 border-gray-200 shadow-lg'>
      <form  className='flex flex-col space-y-3' onSubmit={handleAuthentification}>
        <input 
          placeholder='Login' 
          className='rounded-[0.25rem] px-2 border-solid border-[0.1rem] border-neutral-100'
          value={username}
          onChange={event => handleChange(event, setUsername)}
        />
        <input 
          placeholder='Password' 
          type='password' 
          className='rounded-[0.25rem] px-2 border-solid border-[0.1rem] border-neutral-100'
          value={password}
          onChange={event => handleChange(event, setPassword)}
          />
        <button type='submit'
                className='bg-blue-100 rounded-[0.25rem] py-1 text-gray-500' >Connexion</button>
      </form>
    </div>
    </div>
  )
}

export default Login