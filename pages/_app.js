import { useState, useEffect } from 'react';
import '../styles/globals.css'
import Login from './login';

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState();

  useEffect(() => {
    var server = typeof window !== undefined ? false : true;
    console.log("is this server side : " + server);
    const currentUser = localStorage.getItem('CurrentUser');
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  console.log("user on app : " + JSON.stringify(user));

  if(!user) return <Login />;

  return <Component {...pageProps} />;
}

export default MyApp
