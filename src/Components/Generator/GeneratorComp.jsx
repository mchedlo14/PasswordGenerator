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
              <input type="range" min="0" max="10" onChange={(e) => setInputRangeVal(e.target.value)}/>
            </div>
          </div>
        </div>
    </section>
  )
}

export default GeneratorComp