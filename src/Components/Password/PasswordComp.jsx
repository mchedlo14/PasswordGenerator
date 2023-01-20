import React from 'react'
import './PasswordComp.css'
const PasswordComp = ({password}) => {
  const copyPassword = () => {
    navigator.clipboard.writeText(password)
  }
  return (
    <div className='password-wrapper'>
        {
          password.length > 0 ? <p className='password-text'>{password}</p>
          :
          <p className='password-text'>P4&5WOrD!</p>
        }
        <img src='/images/copy-icon.svg' alt='copy icon' className='copy-icon' onClick={copyPassword}/>
    </div>
  )
}

export default PasswordComp