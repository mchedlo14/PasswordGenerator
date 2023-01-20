import React, { useEffect } from 'react'
import { useState } from 'react'
import PasswordComp from '../Password/PasswordComp'
import './GeneratorComp.css'
import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
} from '../Characters'
const GeneratorComp = () => {
  const [password, setPassword] = useState('')
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
    let characterList = ''

    
    if (LowerCase) {
      characterList = characterList + lowerCaseLetters
    }

    if (Uppercase) {
      characterList = characterList + upperCaseLetters
    }

    if (includeNumber) {
      characterList = characterList + numbers
    }

    if (includeSymbol) {
      characterList = characterList + specialCharacters
    }
    setPassword(createPassword(characterList))
  } 



  const createPassword = (characterList) => {
    let password = ''
    const characterListLength = characterList.length

    for (let i = 0; i < characterLength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength)
      password = password + characterList.charAt(characterIndex)
    }
    return password
  }



  return (
    <section className='generator-wrapper'>
        <p className='title'>Password Generator</p>
        <PasswordComp password={password}/>

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
            <input type="checkbox" checked={Uppercase} onChange={e => setUpperCase(e.target.checked)}/> 
            <label>Include Uppercase Letters</label>
          </div>

          <div className='checkbox-wrapper'>
            <input type="checkbox" checked={LowerCase} onChange={e => setLowerCase(e.target.checked)}/> 
            <label>Include Lowercase Letters</label>
          </div>

          <div className='checkbox-wrapper'>
            <input type="checkbox" checked={includeNumber} onChange={e => setIncludeNumber(e.target.checked)}/> 
            <label>Include Numbers</label>
          </div>

          <div className='checkbox-wrapper'>
            <input type="checkbox" checked={includeSymbol} onChange={e => setIncludeSymbol(e.target.checked)}/> 
            <label>Include Symbols</label>
          </div>

          <button className='generate-btn' onClick={geteratePassword}>GENERATE</button>
        </div>
        
    </section>
  )
}

export default GeneratorComp