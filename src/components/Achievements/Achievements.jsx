import React from "react";
import s from './Achievements.module.css'

const Achievements = () => {

    const achievementsInfo = [
        {
            title: "+500%",
            description: "Reactivated clients",
        },
        {
            title: ">3000",
            description: "Call VoiceBots launched",
        },
        {
            title: "+300%",
            description: "Company growth in 2024",
        },
        {
            title: "1,000,000+",
            description: "Contacts Processed Per Day.",
        },
    ]

    return(
        <div className={s.achievementsContainer}>
            <h2>Our achievements</h2>

            <div className={s.achievementsInfo}>
            {achievementsInfo.map((info, index) => (
                <div key={index} className={s.achievementInfo}>
                    <span className={s.achievementTitle}>{info.title}</span>
                    <span className={s.achievementDescription}>{info.description}</span>
                </div>      
            ))}
            </div>
        </div>
    );
}

export default Achievements;