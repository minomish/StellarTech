
import React from "react";
import s from './Form.module.css'

import image from '../../assets/img/img_Bots5Days.png'
import Radio from '../../assets/icons/utilities/Radio'
import Input from '../Input/Input';
import Button from '../Button/Button';


const Form = ({ includeCompanyInput = false, inputSizes={} }) => {
    const formData = [
        "See how the platform works and how it benefits your business",
        "Explore successful examples that align with your business goals",
        "Tell us about the process to automate to get the pricing details",
    ]

    return (
        <div className={s.formContainer}>
            <div className={s.requestContainer}>
                <div className={s.requestPoints_container}>
                    <h2 className={s.title_formContainer}>Boost Customer Retention  with StellarTech</h2>
                    <div className={s.points_container}>
                        {formData.map((data, index) => (
                            <div key={index} className={s.request_points}>
                                <Radio width={"16px"} height={"16px"}/>
                                <p className={s.request_point}>{data}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <img src={image} className={s.img_requestForm}/> 
            </div>
            
            <form className={s.consultation_form}>
                        <Input
                            name="name"
                            width={inputSizes.name}
                            placeholder="Your name"
                            className={s.input_consultationForm}
                        />
                        {includeCompanyInput && (
                            <Input
                                name="company"
                                width={inputSizes.company}
                                placeholder="Your company name"
                                className={s.input_consultationForm}
                            />
                        )}
                        <Input
                            name="phone"
                            width={inputSizes.phone}
                            placeholder="+7 (999) 999-99-99"
                            className={s.input_consultationForm}
                        />
                        <Button 
                            width={inputSizes.button}
                            text={"Send"} 
                            type={"blueButton"} 
                            className={s.btn_consultationForm}
                        />
            </form>   
        </div>
    )
}

export default Form;