import React from 'react'
import Cuff1 from '../assets/whiteCuffs.png';
import Cuff2 from '../assets/whiteCuffs.png';

import Cuff3 from '../assets/cuff.PNG'

export default function WhiteCuffs(props) {
  return (
    <div className="cuff-container">
    <div onClick={() => props.changeCuff(<img className='white_cuff_image'  src={Cuff1} alt='shirt' />)}>
            <img className='cuff-side' src={Cuff1} alt='shirt' />
            <p className='tooltiptext'><strong>Button <br/>Cuffs</strong></p>
        </div>
        <div onClick={() => props.changeCuff(<img className='white_cuff_image'  src={Cuff2} alt='shirt' />)}>
            <img className='cuff-side' src={Cuff2} alt='shirt' />
            <p className='tooltiptext'><strong>Cufflings </strong></p>
        </div>
    </div>
  )
}
