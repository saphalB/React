import { useState } from 'react'           //hooks are brought from this line.for eg.import {useState, useEffect so on} from 'react'
import reactLogo from './assets/react.svg'              /*need to use hooks to update on UI*/
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(5) //0th index->variable & 1st index->function responsible for updation of that variable
  
  // let counter = 5;

  const increaseValue = function(){
    if (counter < 20) {
      setCounter(counter + 1)
    }
     
  }


  const decreaseValue = function(){
    if (counter > 0){
     setCounter(counter - 1)
    }
  }

  return (
    <>
     <h1>Let's learn about hooks.</h1>
     <h2>Counter value : {counter}</h2>

     <button onClick ={increaseValue}>Increase Value</button>              
     <br />
     <br />
    
     <button onClick = {decreaseValue}>Decrease Value</button>
    </>
  )                                                             
}

export default App
