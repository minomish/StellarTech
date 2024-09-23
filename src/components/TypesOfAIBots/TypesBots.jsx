

import React from 'react';
import s from './TypesBots.module.css';
import Message from '../../assets/icons/utilities/Message';
import Voise from '../../assets/icons/utilities/Voise';

const botsData = [
    {
        icon: Message,
        title: "Text ChatBots",
        description: "Text chatbots can be effortlessly tailored to any scenario or process, enabling the use of variables for personalized messaging and follow-up communications post-call. Engage your customers through various channels such as WhatsApp, Email, and SMS.",
    },
    {
        icon: Voise,
        title: "VoiceBots",
        description: "Handle outbound and inbound calls using our Human-like AI bots, utilizing pre-recorded voices, speech synthesis, and Natural Language Understanding, ensuring authentic and personalized communication with your customers.",
    }
]

const TypesBots = () => {
    return (
        <div className={s.typesBotsContainer}>
            <h2>Types of AI Bots</h2>
            <div className={s.botTypesContainer}>
                {botsData.map((bot, index) => (
                    <div key={index} className={s.botType}>
                        <bot.icon width={'32px'} height={'32px'} />
                        <span className={s.botType_title}>{bot.title}</span>
                        <p className={s.botType_description}>{bot.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TypesBots;