import './App.css';
import { sculptureList } from './data';
import { useState } from 'react';

function App(){
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState("false");
  const data = sculptureList[index];

  function handleNextClick (){
    setIndex( (next)=>{
      if (next === sculptureList.length -1){
        return 0;
      }
      return next + 1;
    })
  }

  function HandlePrevClick (prev){
    setIndex( (prev)=>{
      if(prev === 0){
        return sculptureList.length - 1;
      }
     return  prev - 1;
    })
  }

  function handleDesc (){
    setShow(!show);
  }
  return(
    <div className='card'>
      <h1>{data.name}</h1>
      <button onClick={HandlePrevClick}>prev</button>
      <button onClick={handleNextClick}>next</button>
    <img
    src = {data.url}
    alt = {data.alt}
    />
    <button onClick={handleDesc}>
      {show? 'hide' : 'show'} description</button>
      {show && <p>{data.description}</p>}
    </div>
  )

}


export default App;