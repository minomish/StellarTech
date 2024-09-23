
import React, { useEffect } from "react";
import s from './ModalForm.module.css'
import { Link } from "react-router-dom";
import Close from '../../assets/icons/utilities/Close'
import Radio from "../../assets/icons/utilities/Radio";
import Input from "../Input/Input";
import Button from "../Button/Button";

import image from '../../assets/img/ImageУгловой.png'

const ModalForm = ({isOpenModal, onClose }) => {

    const disabledScroll = () => document.body.style.overflow = "hidden";
    const enabledScroll = () => document.body.style.overflow = "";

    useEffect(()=>{
        if(isOpenModal){
            disabledScroll()
        }else{
            enabledScroll()
        }
    })

    const onWrapperClick = (e) => {
        if (e.target.getAttribute("data-close") === "modal-close") {
            onClose()
        }
    }


    const formData = [
        "See if our bot is a good fit for your company",
        "Showcase successful examples that align with your business goals",
        "Demonstrate real conversations with our AI",
    ]
    return(
        <>
        { isOpenModal &&(
        <div className={s.modal} >   
            <div data-close="modal-close" className={s.modalConrainer} onClick={onWrapperClick}>
                <div className={s.modalContent}>

                    <img src={image} className={s.left_img}/>
                    <Link to="#" 
                        className={s.modal_close} 
                        onClick={()=>onClose()}
                    >
                        <Close/>
                    </Link>

                    <h2 className={s.modal_header}>Meeting with a StellarTech expert</h2>

                    <div className={s.modal_content}>
                        <div className={s.modalText_box}>
                            <h3>In 20-30 minutes we will:</h3>

                            <div className={s.points_container}>
                                {formData.map((data, index) => (
                                    <div key={index} className={s.request_points}>
                                        <Radio min-width={"16px"} min-height={"16px"}/>
                                        <p className={s.request_point}>{data}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <form action="Submit" className={s.formContainer}>
                            <Input
                                name="name"
                                width="344px"
                                placeholder="Name"
                            />
                            <Input
                                name="phone"
                                width="344px"
                                placeholder="+7 (999) 999-99-99"
                            />
                            <Button 
                                text={"Send"} 
                                type={"blueButton"}
                                className={s.btn_modalForm}
                            />
                            <p className={s.agreeText_modal}>I agree to the processing of personal data and agree with he privacy policy of this site.</p>
                        </form>
                        
                    </div>
                    <img src={image} className={s.right_img}/>
                </div>
            </div> 
        </div>
        )}
        </>
    )
}

export default ModalForm;

// {
//     let modal = document.getElementById("modal");
//     function openModal 
// }