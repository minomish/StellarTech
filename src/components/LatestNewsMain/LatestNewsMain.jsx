
import React from "react";
import s from './LatestNewsMain.module.css'
import { Link } from "react-router-dom";

import Radio from '../../assets/icons/utilities/Radio'

import img from '../../assets/img/Place_Image.png'


const LatestNewsMain = () => {
    const formData = [
        "See how the platform works and how it benefits your business",
        "Explore successful examples that align with your business goals",
        "Tell us about the process to automate to get the pricing details",
        "See how the platform works and how it benefits your business",
        "Explore successful examples that align with your business goals",
        "Tell us about the process to automate to get the pricing details",
    ]

    return(
        <div className={s.latestMainContainer}>
            <div className={s.nav}>
                <Link to='/'>Home</Link>
                <span>&gt;</span>
                <Link to='/blog'>Blog</Link>
                <span>&gt;</span>
                <span className={s.boldNav}>Latest news</span>
            </div>
            <h1 className={s.title_latestMain}>Four differences between a bot and a human in a telephone conversation</h1>

            <p className={s.description_latestMain}>Sometimes it is impossible to understand by the voice in the handset with whom you have to conduct a dialogue: with a person or a voice robot. For example, when calling job applicants, 80% of people do not realize that they are talking to a robot. The speech of robots is increasingly difficult to distinguish from human speech, but there are signs by which this can be done. We talk about them in the article.</p>

            <img src={img} className={s.img_latestMain}/>

            <div className={s.sub_latestMain}>
                <p className={s.description_latestMain}>Sometimes it is impossible to understand by the voice in the handset with whom you have to conduct a dialogue: with a person or a voice robot. For example, when calling job applicants, 80% of people do not realize that they are talking to a robot. The speech of robots is increasingly difficult to distinguish from human speech, but there are signs by which this can be done. We talk about them in the article.</p>

                <img src={img} className={s.img_sub_latestMain}/>
            </div>

            <div className={s.sub_latestMain}>
                <img src={img} className={s.img_sub_latestMain}/>

                <div className={s.points_container}>
                        {formData.map((data, index) => (
                            <div key={index} className={s.request_points}>
                                <Radio width={"16px"} height={"16px"}/>
                                <p className={s.request_point}>{data}</p>
                            </div>
                        ))}
                </div>
                
            </div>

            <p className={s.description_latestMain}>Sometimes it is impossible to understand by the voice in the handset with whom you have to conduct a dialogue: with a person or a voice robot. For example, when calling job applicants, 80% of people do not realize that they are talking to a robot. The speech of robots is increasingly difficult to distinguish from human speech, but there are signs by which this can be done. We talk about them in the article.</p>

        </div>
    )
}

export default LatestNewsMain;