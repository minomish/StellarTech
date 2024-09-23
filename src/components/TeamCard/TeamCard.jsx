
import React from "react";
import s from './TeamCard.module.css'
import Linkedin from "../../assets/icons/socials/Linkedin";

const TeamCard = ({dataCard}) => {
    const {name, link, post, about, photo} = dataCard
    return(
        <div className={s.person_card}>
            <img src={photo} className={s.person_photo}/>
            <div className={s.overlay}>
                <p className={s.text_about}>{about}</p>
            </div>
            <div>
                <div className={s.name_with_icon}>
                    <h3 className={s.person_name}>{name}</h3>
                    <a href={link}><Linkedin/></a>
                </div>
                
                <p className={s.person_post}>{post}</p>
            </div>
            
        </div>
    )
} 

export default TeamCard;




