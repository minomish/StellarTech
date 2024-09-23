

import React from "react";
import s from './Bots5Days.module.css'
import Button from "../Button/Button";
import image from '../../assets/img/ImageHome.png'
import Done from '../../assets/icons/utilities/Done'


const Bots5Days = () => {
    return (
        <div className={s.Bots5Days_Container}>
            <div className={s.Bots5Days_content_Container}>
                <h2 className={s.title_Bots5Days}>
                    <p className={s.nameOfBlock_Bots5Days}>SIMPLY DESCRIBE YOUR PROCESS TO US AND</p>
                    Bots are launched within 5 days
                </h2>

                <p className={s.description_Bots5Days}>Bots can be created and launched within 5 days if there is a ready-to-use solution. Creating a Custom VoiceBot might take from 2 weeks depending on the complexity of the process.</p>

                <Button 
                    text={"Launch the VoiceBot"} 
                    type={"withIconButton"} 
                    icon={<Done/>} 
                    bg_color={"#FFD649"}
                    className={s.btn_bots5Days}
                />
            </div>  
            
            <img src={image} className={s.img_bots5Days}/>

        </div>
    )
}

export default Bots5Days;
