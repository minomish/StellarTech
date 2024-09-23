

import React from "react";
import s from './AboutBlock2.module.css'
import Radio from "../../assets/icons/utilities/Radio";

const AboutBlock2 = () => {
    const formData = [
        "Training employees",
        "Optimizing sales",
        "Maintaining customer relationships",
        "And many more",
    ]
    return(
        <div className={s.AboutBlock2_Container}>
            <h2 className={s.title_AboutBlock2}>The future is shaped by those who dare to reimagine what's possible and innovate beyond boundaries</h2>

            <div className={s.AboutBlock2_content}>
                <div className={s.description_AboutBlock2}>
                    <p className={s.text_AboutBlock2}>Picture a world where all routine tasks are handled by easy to make no-code <b>AI-powered bots,</b> freeing you to focus solely on refining your products or pioneering new, impactful creations</p>

                    <div className={s.points_container}>
                        {formData.map((data, index) => (
                            <div key={index} className={s.request_points}>
                                <Radio width={"16px"} height={"16px"}/>
                                <p className={s.request_point}>{data}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={s.description2_AboutBlock2}>
                    <h3 className={s.title_description2}>We bring innovation to your business!</h3>

                    <p className={s.text_description2}>Transform the traditional work format, and welcome innovation into the business activities
                        <br/><br/>
                        <b>Take it to the next level from its previous state.</b>
                    </p>
                </div>
            </div>


           
        </div>
    )
}

export default AboutBlock2;