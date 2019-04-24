import React from 'react';
import backShirt1 from '../assets/ggBackShirt.png'
import backShirt2 from '../assets/ghanaShirtBack.png';
import backShirt3 from '../assets/igboShirtBack.png';

export default function BackShirt(props) {
  return (
    <div className="shirt-container">
        <div className="shirt_cover_side" onClick={() => props.changeShirt(<img className='back_shirt_image1'  src={backShirt1} alt='shirt' />)}>
            <img className='shirt-side' src={backShirt1} alt='shirt' />
            <p>Inverted pleats</p>
        </div>
        <div onClick={() => props.changeShirt(<img className='back_shirt_image1'  src={backShirt2} alt='shirt' />)}>
            <img className='shirt-side' src={backShirt2} alt='shirt' />
            <p>No pleats</p>
        </div>
        <div onClick={() => props.changeShirt(<img className='back_shirt_image1'  src={backShirt3} alt='shirt' />)}>
            <img className='shirt-side' src={backShirt3} alt='shirt' />
            <p>Pleats</p>
        </div>
    </div>
  )
}
