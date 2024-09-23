

import React from 'react';
import s from './GetCustomVoiceBot.module.css';
import image from '../../assets/img/ImageHome.png'
import Radio from '../../assets/icons/utilities/Radio'
import Input from '../Input/Input';
import Button from '../Button/Button';


const customBotData = [
    "See how the platform works and how it benefits your business",
    "Explore successful examples that align with your business goals",
    "Tell us about the process to automate to get the pricing details",
]

const GetCustomVoiceBot = () => {
    
    return (
        <div className={s.CustomVoiceBotContainer}>
            <img src={image} className={s.img_custom}/>    
            <div className={s.requestContainer}>
                <h2 className={s.title_blockOfGetCustomVoiceBot}>Get your Custom VoiceBot</h2>
                <div className={s.request}>
                    <span className={s.request_title}>Send request for a free consultation to:</span>
                    <div className={s.requestPoints_container}>
                        {customBotData.map((data, index) => (
                            <div key={index} className={s.request_points}>
                                <Radio width={"16px"} height={"16px"}/>
                                <p className={s.request_point}>{data}</p>
                            </div>
                        ))}
                    </div>
                    <form className={s.consultation_form}>
                        <Input
                            name="phone"
                            // width={"295px"}
                            className={s.input_of_form}
                            placeholder="+7 (999) 999-99-99"
                        />
                        <Button 
                            // width={"100%"} 
                            className={s.send_btn_forn}
                            text={"Send"} 
                            type={"blueButton"} 
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default GetCustomVoiceBot;