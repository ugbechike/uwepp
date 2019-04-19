import React from 'react'
import Cuff1 from '../assets/igboCuff.png';
import Cuff2 from '../assets/grn.png';

import Cuff3 from '../assets/cuff.PNG'

export default function Cuff(props) {
  return (
    <div className="cuff-container">
    <div onClick={() => props.changeCuff(<img className='cuff_image1'  src={Cuff1} alt='shirt' />)}>
            <img className='cuff-side' src={Cuff1} alt='shirt' />
            <p className='tooltiptext'><strong>Button <br/>Cuffs</strong></p>
        </div>
        <div onClick={() => props.changeCuff(<img className='cuff_image1'  src={Cuff2} alt='shirt' />)}>
            <img className='cuff-side' src={Cuff2} alt='shirt' />
            <p className='tooltiptext'><strong>Cufflings </strong></p>
        </div>
    </div>
  )
}
