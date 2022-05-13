import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
const [stuff, getData] = useState([]);

  const data = () => {
    axios.get("https://www.jalirani.com/files/barstool.json").then((response) => {
      console.log(response);
      const allData = response.data;
      getData(allData);
    });
  };
  useEffect(() => data(), []);

  return (
  <>
  <h1 className='heading'>Alexander's Barstool-Archive</h1>
  
    <ul>
    {stuff.map((items) => (
      <div className='container'>
        <li key = {items.id}>
          <div className='img-div'>
            <img className='thumbnail' src={items.thumbnail.location + items.thumbnail.images.small} alt='thumbnail'/>
            <div className='innerContainer'>
              <a className='title' href={items.url}><h1>{"'"+ items.title +"'"}</h1></a>
              <div className='authorStuff-comments'>
                  <div className='author-stuff'>
                      <img className='author-avi' src= {items.author.avatar} alt='author img'/>
                      <h4 className='author-name'>{items.author.name}</h4>
                  </div> 
                <h5 className='comments'>{"Comments:" + items.comment_count}</h5>
              </div>
            </div>
          </div>
        </li>
      </div>
      ))}
    </ul>
    
  
  </>
  );
}

export default App;
