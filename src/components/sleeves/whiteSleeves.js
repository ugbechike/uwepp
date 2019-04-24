import React from 'react'
import LongSleeve from '../assets/whiteSleeve.png';
import Long from '../assets/Long.PNG';
import whiteShortSleeve from '../assets/whiteSleeve.png';
import Shortg from '../assets/Short.png';


export default function WhiteSleeves(props) {
  return (
    <div className="shirt-container">
        <div onClick={() => props.changeSleeves(<img className='sleeves_image2' src={LongSleeve} alt='sleeves' />)}>
            <img className='sleeves-side' src={LongSleeve} alt='shirt' />
            <p className='tooltiptext'><strong>Long <br/>Sleeve</strong></p>
        </div>

        <div onClick={() => props.changeSleeves(<img className='sleeves_image2' src={whiteShortSleeve} alt='sleeves' />)}>
            <img className='sleeves-side' src={whiteShortSleeve} alt='shirt' />
            <p className='tooltiptext'><strong>Short <br/>Sleeve</strong></p>
        </div>

    </div>
  )
}
