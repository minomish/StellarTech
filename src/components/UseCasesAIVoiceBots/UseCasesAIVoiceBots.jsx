import React from 'react';
import s from './UseCasesAIVoiceBots.module.css';

const UseCasesAIVoiceBots = () => {

    const aiVoicebotsData = [
        {
            title: "Birthday Wishes",
            number: "11.5%",
            description: "Conversion Rate",
        },
        {
            title: "Promotional calls",
            number: "3,5X",
            description: "in Revenue",
        },
        {
            title: "Loyalty Program",
            number: "80%",
            description: "Automation",
        },
        {
            title: "Insurance Prolongation",
            number: "187%",
            description: "increase in Retention",
        },
    ]

    return (
        <div className={s.aiVoiceBots}>
            <div className={s.title_box_aiVoiceBots}>
                <h2 className={s.title_aiVoiceBots}>
                    <span style={{color: '#06F'}}>Use Cases </span> 
                    of AI VoiceBots
                </h2>

                <span className={s.text_aiVoiceBots}>STELLARTECH IS THE MOST EFFECTIVE FOR:</span>
            </div>
            
            <div className={s.botTypesContainer}>
                {aiVoicebotsData.map((bot, index) => (
                    <div key={index} className={s.voiceBot_case}>
                        <span className={s.voiceBot_title}>{bot.title}</span>
                        <div className={s.voiceBot_case_description}>
                            <span className={s.voiceBot_number}>{bot.number}</span>
                            <p className={s.voiceBot_description}>{bot.description}</p>
                        </div>
                        
                    </div>
                ))}
            </div>          

        </div>
    )
}

export default UseCasesAIVoiceBots;