import React from 'react'
import { Link } from 'react-router-dom'

function Head() {
  return (
    <div className='head-container'>
      <img src='/text_logo.png' alt='VISIT' height='35px' width='80px' />
      <button>Sign in</button>
    </div>
  )
}

export default Head