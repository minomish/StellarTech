import React from "react";
import s from './BookCall.module.css'
import image from '../../assets/img/BookCall_img.png'
import Button from "../Button/Button";

const BookCall = () => {
    return(
        <div className={s.bookcallContainer}>
            <img src={image} className={s.left_img}/>
            <h2>Get started with StellarTech today</h2>
            <Button 
                width={"182px"} 
                text={"Book a call"}
                type={"blueButton"}/>
            <img src={image} className={s.right_img}/>
        </div>
    )
}

export default BookCall;