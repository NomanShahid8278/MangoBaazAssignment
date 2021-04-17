import {useState} from 'react'
export const copyText = ()=>{
    // CopyText Code

    let copy = document.getElementsByClassName('advice')[0].innerText;
    let inputElem = document.createElement('input')
    inputElem.setAttribute('value',copy)
    document.body.appendChild(inputElem)
    inputElem.select()
    document.execCommand('copy')
    inputElem.parentNode.removeChild(inputElem)

    // Display Message

    document.getElementById('message').style.display="inline"
    setTimeout(()=>{
      document.getElementById('message').style.display="none"
    },1000)
  }

const PopupCenter = (url, title, w, h) => {
    var dualScreenLeft = window.screenLeft;
    var dualScreenTop = window.screenTop;
    var width = window.innerWidth;
    var height = window.innerHeight;
    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;
    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
    // Puts focus on the newWindow
    if (window.focus) {
        newWindow.focus();
    }
}

const getUrl = (text)=>{
   return "https://twitter.com/intent/tweet?text=" + text + "&url="
}

export const tweetAdvice = ()=>{
    let copy = document.getElementsByClassName('advice')[0].innerText;
    let url = getUrl(copy)
    PopupCenter(url,copy,"590","253")
  }