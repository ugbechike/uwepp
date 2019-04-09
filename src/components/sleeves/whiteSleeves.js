import React from 'react'
import WhiteSleeve from '../assets/whitesleeve.png';
import Long from '../assets/Long.PNG';
import whiteShortSleeve from '../assets/whiteshortSleeves.png';
import Shortg from '../assets/Short.png';


export default function WhiteSleeves(props) {
  return (
    <div className="shirt-container">
        <div onClick={() => props.changeSleeves(<img className='sleeves_image1' src={WhiteSleeve} alt='sleeves' />)}>
            <img className='sleeves-side2' src={Long} alt='shirt' />
            <p className='tooltiptext'><strong>Long <br/>Sleeve</strong></p>
        </div>

        <div onClick={() => props.changeSleeves(<img className='sleeves_image' src={whiteShortSleeve} alt='sleeves' />)}>
            <img className='sleeves-side' src={Shortg} alt='shirt' />
            <p className='tooltiptext'><strong>Short <br/>Sleeve</strong></p>
        </div>

    </div>
  )
}
