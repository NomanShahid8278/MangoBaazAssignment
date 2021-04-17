import React, { useState } from 'react'
import {copyText,tweetAdvice} from './functions'
import axios from 'axios'
function App() {
  const [advice, setAdvice] = useState({})
  const apiCall = ()=>{
    axios.get('https://api.adviceslip.com/advice').then((resp)=>{
      setAdvice(resp.data.slip)
    })
    .catch(err=>{
      console.log(err)
    })
  }

  return (
    <main>
      <section className='container'>
        <h3>Advice</h3>
        <h4>Load Advice</h4>
        <div className="reload" onClick={() => apiCall()}></div>
        {
          <ul>
              <li className="advice" key={advice.id}>{advice.advice}</li>
              <li id="message">Text Copied</li>
          </ul>
        }
        <div className="controllers">
          <button onClick={()=>copyText()}>Copy Text</button>
          <button id="tweet" onClick={() => tweetAdvice()}>Tweet</button>
        </div>
      </section>
    </main>
  )
}

export default App
