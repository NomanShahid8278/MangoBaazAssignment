import axios from 'axios'
import { useState,useEffect } from 'react'
const [advice, setAdvice] = useState({})
const apiCall = ()=>{
  axios.get('https://api.adviceslip.com/advice').then((resp)=>{
    setAdvice(resp.data.slip)
  })
  .catch(err=>{
    console.log(err)
  })
}
useEffect(()=>{
  apiCall()
},[])