import React from 'react'
import style from './Display.module.css'
import Autocorrect from '../Autocorrect/Autocorrect';

const Display = (props) => {
  return ( 
    <section className={style.Container}>
      <h1>Autocorrect Commonly Misspelled Words</h1>
      <div>Enter Text Below</div>
      <Autocorrect />
    </section>
  );
}

export default Display;