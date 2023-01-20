import React, { useEffect } from 'react'
import { useState } from 'react'
import PasswordComp from '../Password/PasswordComp'
import './GeneratorComp.css'
const GeneratorComp = () => {
  const [inputRangeVal, setInputRangeVal] = useState('0')
  const [characterLength,setCharacterLength] = useState(0)

  useEffect(() => {
    setCharacterLength(parseInt(inputRangeVal))
  },[inputRangeVal])


  return (
    <section className='generator-wrapper'>
        <p className='title'>Password Generator</p>
        <PasswordComp />

        <div className='generator-box'>
          <div className='input-range-wrapper'>
            <div className='character-length-wrapper'>
              <p className='character-text'>Character Length</p>
              <p className='character-quantity'>{characterLength}</p>
            </div>

            <div className='range-input-box'>
              <input type="range" min="0" max="20" onChange={(e) => setInputRangeVal(e.target.value)}/>
            </div>
          </div>

          <div className='checkbox-wrapper'>
            <input type="checkbox" /> 
            <label>Include Uppercase Letters</label>
          </div>

          <div className='checkbox-wrapper'>
            <input type="checkbox" /> 
            <label>Include Lowercase Letters</label>
          </div>

          <div className='checkbox-wrapper'>
            <input type="checkbox" /> 
            <label>Include Numbers</label>
          </div>

          <div className='checkbox-wrapper'>
            <input type="checkbox" /> 
            <label>Include Symbols</label>
          </div>

          <button className='generate-btn'>GENERATE</button>
        </div>
        
    </section>
  )
}

export default GeneratorComp