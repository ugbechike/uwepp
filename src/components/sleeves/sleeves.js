import React from 'react';
import LongSleeve from '../assets/longSleeves.png';
import ShortSleeve from '../assets/shortSleeves.png';
import Long from '../assets/Long.PNG'
import Shortg from '../assets/Short.png';


export default function Sleeves(props) {
  return (
    <div className="shirt-container">
        <div onClick={() => props.changeSleeves(<img className='sleeves_image1'  src={LongSleeve} alt='sleeves' />)}>
            <img className='sleeves-side' src={Long} alt='shirt' />
            <p className='tooltiptext'><strong>Long <br/>Sleeve</strong></p>
        </div>
        <div onClick={() => props.changeSleeves(<img className='sleeves_image' src={ShortSleeve} alt='sleeves' />)}>
            <img className='sleeves-side' src={Shortg} alt='shirt' />
            <p className='tooltiptext'><strong>Short <br/>Sleeve</strong></p>
        </div>

    </div>
  )
}
