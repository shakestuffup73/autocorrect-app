import React, {useState} from "react";
import words from '../data/words.js'
import style from './Autocorrect.module.css'

const Autocorrect = () => {

  const [input, setInput] = useState('')

  function checkWord(event){
    let allWords = event.split(' ')
    let lastWord = allWords[allWords.length-1]
    let currentTextLength = event.length
    let wordToReplace = words[lastWord]
    if (words[lastWord] !== undefined){
      event = event.slice(0, currentTextLength - lastWord.length) + wordToReplace
    }
    setInput(event)
  }

  return ( 
    <input type="text" onChange={(event) => checkWord(event.target.value)} value={input} className={style.Input}/>
  );
}

export default Autocorrect;