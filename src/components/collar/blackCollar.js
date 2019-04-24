import React from 'react'
// import Collar4 from '../assets/whitecollar1.png';
import Collar4 from '../assets/blackCollar.png';
// import BtnDown from '../assets/buttonDown.png'

export default function BlackCollar(props) {
  return (
    <div className='collar_container'>
      <div onClick={() => props.changeCollar(<img className='white_collar-display' src={Collar4} alt='collar' />)}>
          <img className='collar_image_side1' src={Collar4} alt='collar' />
          <p className='tooltiptext'><strong>Button <br/>collar</strong></p>
      </div>

      <div onClick={() => props.changeCollar(<img className='white_collar-display' src={Collar4} alt='collar' />)}>
          <img className='collar_image_side1' src={Collar4} alt='collar' />
          <p className='tooltiptext'><strong>Button <br/>collar</strong></p>
      </div>
    </div>
  )
}
