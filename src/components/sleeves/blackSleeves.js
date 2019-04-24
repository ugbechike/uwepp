import React from 'react'
import BlackSleeve from '../assets/blackSleeve.png';
import Long from '../assets/Long.PNG';
import Shortg from '../assets/Short.png';
import blackShortSleeve from '../assets/blackSleeve.png';



export default function BlackSleeves(props) {
  return (
    <div className="shirt-container">
        <div onClick={() => props.changeSleeves(<img className='sleeves_image2' src={BlackSleeve} alt='sleeves' />)}>
            <img className='sleeves-side' src={BlackSleeve} alt='shirt' />
            <p className='tooltiptext'><strong>Long <br/>Sleeve</strong></p>
        </div>

         <div onClick={() => props.changeSleeves(<img className='sleeves_image2' src={blackShortSleeve} alt='sleeves' />)}>
            <img className='sleeves-side' src={blackShortSleeve} alt='shirt' />
            <p className='tooltiptext'><strong>Short <br/>Sleeve</strong></p>
        </div>
    </div>
  )
}
