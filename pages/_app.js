import '../styles/globals.css'
import Login from './login';

function MyApp({ Component, pageProps }) {
  if (typeof window == "undefined") {
    return <Login />;
  }
  
  const user = localStorage.getItem("CurrentUser");

  if(!user) return <Login />;

  return <Component {...pageProps} />;
}

export default MyApp
