import React, { useContext, useState } from 'react';
import './Righsection.css';
import Post from './post';
import jsonData from './post.json';
import Write from './Write';
import {UserContext} from './App';


export default function Rightsection() {
  const [allpost, setallpost] = useState([]);
  const {islogin,setislogin}=useContext(UserContext);

  function getwrite(data) {
  
    setallpost([data, ...allpost]);
    // localStorage.setItem(data.id,[data.title,data.content,data.imageUrl]);

  }

  return (
    <>
      <div className='postarea'>
     {islogin && 
        <Write fun={getwrite} />
        }

        {allpost.map((data) => (
          <Post key={data.id} data={data} />
        ))}
        {jsonData.slice(0, 20).map((data) => (
          <Post key={data.id} data={data} />
        ))}
      </div>
    </>
  );
}
