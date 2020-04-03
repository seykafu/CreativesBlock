import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/fontawesome-free'
import { faBowlingBall } from '@fortawesome/free-solid-svg-icons'

export default () => 
  <div className='spinner fadein'>
    <FontAwesomeIcon icon={faBowlingBall} size='5x' color='#3B5998' />
  </div>