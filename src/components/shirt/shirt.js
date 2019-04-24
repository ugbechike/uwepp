import React from 'react';
// import Shirt1 from '../assets/shirtYesBtn.png'
import Shirt1 from '../assets/gg.png'
// import Shirt2 from '../assets/shirtNoBtn.png'
import Shirt2 from '../assets/dottedShirt.png'
import Shirt3 from '../assets/ghanaShirt.png'
import Shirt4 from '../assets/igboShirt.png'
import Shirt5 from '../assets/kanoShirt.png'
import backShirt1 from '../assets/ggBackShirt.png';
import backShirt2 from '../assets/dottedShirtBack.png';


export default function Shirt(props) {
    return (
        <div className="shirt-container">
            <div onClick={() => props.changeShirt(<img className='shirt_image1' src={Shirt1} alt='shirt' />, <img className='back_shirt_image1' src={backShirt1} alt='shirt' />)}>
                <img className='shirt-side' src={Shirt1} alt='shirt' />
                <p className='tooltiptext'><strong>Button <br />placket</strong></p>
            </div>
            <div onClick={() => props.changeShirt(<img className='shirt_image1' src={Shirt2} alt='shirt' />, <img className='back_shirt_image1'  src={backShirt2} alt='shirt' />)}>
                <img className='shirt-side' src={Shirt2} alt='shirt' />
                <p className='tooltiptext'><strong>Plain <br />placket</strong></p>
            </div>
            <div onClick={() => props.changeShirt(<img className='shirt_image1' src={Shirt3} alt='shirt' />, <img className='back_shirt_image1'  src={backShirt2} alt='shirt' />)}>
                <img className='shirt-side' src={Shirt3} alt='shirt' />
                <p className='tooltiptext'><strong>Plain <br />placket</strong></p>
            </div>
            <div onClick={() => props.changeShirt(<img className='shirt_image1' src={Shirt4} alt='shirt' />, <img className='back_shirt_image1'  src={backShirt2} alt='shirt' />)}>
                <img className='shirt-side' src={Shirt4} alt='shirt' />
                <p className='tooltiptext'><strong>Plain <br />placket</strong></p>
            </div>
            <div onClick={() => props.changeShirt(<img className='shirt_image1' src={Shirt5} alt='shirt' />, <img className='back_shirt_image1'  src={backShirt2} alt='shirt' />)}>
                <img className='shirt-side' src={Shirt5} alt='shirt' />
                <p className='tooltiptext'><strong>Plain <br />placket</strong></p>
            </div>
            <div onClick={() => props.changeShirt(<img className='shirt_image1' src={Shirt1} alt='shirt' />, <img className='b_shirt_image1' src={backShirt1} alt='shirt' />)}>
                <img className='shirt-side' src={Shirt1} alt='shirt' />
                <p className='tooltiptext'><strong>Button <br />placket</strong></p>
            </div>
        </div>
    )
}
