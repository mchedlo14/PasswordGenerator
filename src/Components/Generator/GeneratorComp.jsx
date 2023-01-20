import React, { useEffect } from 'react'
import { useState } from 'react'
import PasswordComp from '../Password/PasswordComp'
import './GeneratorComp.css'
const GeneratorComp = () => {
  const [inputRangeVal, setInputRangeVal] = useState('0')
  const [characterLength,setCharacterLength] = useState(0)
  const [Uppercase,setUpperCase] = useState(false)
  const [LowerCase,setLowerCase] = useState(false);
  const [includeNumber,setIncludeNumber] = useState(false)
  const [includeSymbol,setIncludeSymbol] = useState(false)

  useEffect(() => {
    setCharacterLength(parseInt(inputRangeVal))
  },[inputRangeVal])

  const geteratePassword = () => {
    const numbersArray = [0,1,2,3,4,5,6,7,8,9];
    const symbolsArray = ['!','@','#','$','%','^','&','*','(',')'];

    const characterCodes = Array.from(Array(26).map((e,i) => i +97));
    const lowerCaseLetters = characterCodes.map(letter => String.fromCharCode(letter));

    const UpperCaseLetters = lowerCaseLetters.map(letter => letter.toUpperCase());

    
  }

  geteratePassword()



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
            <input type="checkbox" onChange={e => setUpperCase(!Uppercase)}/> 
            <label>Include Uppercase Letters</label>
          </div>

          <div className='checkbox-wrapper'>
            <input type="checkbox" onChange={e => setLowerCase(!LowerCase)}/> 
            <label>Include Lowercase Letters</label>
          </div>

          <div className='checkbox-wrapper'>
            <input type="checkbox" onChange={e => setIncludeNumber(!includeNumber)}/> 
            <label>Include Numbers</label>
          </div>

          <div className='checkbox-wrapper'>
            <input type="checkbox" onChange={e => setIncludeSymbol(!includeSymbol)}/> 
            <label>Include Symbols</label>
          </div>

          <button className='generate-btn'>GENERATE</button>
        </div>
        
    </section>
  )
}

export default GeneratorComp