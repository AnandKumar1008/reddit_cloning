import React, { useState } from 'react';
import './App.css';
import Nav from './Component/Nav';
import Leftslider from './Component/leftslider';
import Rightsection from './Rightsection';
import Login from './login';
import { createContext } from 'react';


const UserContext=createContext();
function App() {
  const [count, setCount] = useState(0);
  const [loginshow, setLoginShow] = useState(false);
 const [islogin,setislogin] =useState(false);
 const [closebtnlogin, setclosebtnlogin] = useState(false);

  return (
    <>
    <UserContext.Provider value={{islogin,setislogin,closebtnlogin,setclosebtnlogin}}>
      <div>
        <h1> {loginshow}</h1>
        <Nav count={count} loginshow={loginshow} />
        <div className='leftSlider'>
        
          <Leftslider />
          <Rightsection />
        </div>
      </div>
      </UserContext.Provider>
    </>
  );
}

export default App;
export {UserContext};
