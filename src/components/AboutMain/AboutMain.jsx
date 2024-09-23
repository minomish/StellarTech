
import React from "react";
import s from './AboutMain.module.css'
import { Link } from "react-router-dom";

import image from '../../assets/img/aboutUs_Pattern.png'


const AboutMain = () => {
    return(
        <div className={s.aboutContainer}>
            <div className={s.nav}>
                <Link to='/'>Home</Link>
                <span>&gt;</span>
                <span className={s.boldNav}>About Us</span>
            </div>
            
            <div className={s.titleBox_aboutUs}>
                <h1 className={s.title_aboutUs}>StellarTech is a company that increases retail businesses’ conversion rates</h1>
                <span className={s.description_aboutUs}>We offer AI-powered calling bots that empower you to effectively communicate with your existing clients</span>
            </div>
            <img src={image}/>
            
        </div>
    )
}

export default AboutMain;