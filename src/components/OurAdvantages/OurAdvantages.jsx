
import React from "react";
import s from './OurAdvantages.module.css';
import Matker from "../Matker/Matker";

const OurAdvantages = () => {

    const advantagesData = [
        "No-code Platform to quickly and cheaply make changes",
        "Omnichannel platform to seamlessly transfer between channels",
        "Database Segmentation and Advanced Reports",
        "Bots are indistinguishable from Real Agents",
        "NLU trained for specific industries",
        "Integration with any CRM and ATS",
        "Database Encryption for security",
        "Custom Bots to automate any scenario",
    ];

    return (
        <div className={s.advantagesContainer}>
            <h2>Our advantages</h2>
            <div className={s.advantagesBox}>
            {advantagesData.map((advantage, index) => (
                <Matker 
                key={index} 
                number={`0${index + 1}.`} 
                description={advantage} 
            />  
            ))}
            </div>
        </div>
    );
};

export default OurAdvantages;