import React from "react";
import s from './InnovativeCompany.module.css'
import MatkerGrey from "../MatkerGrey/MatkerGrey";

const InnovativeCompany = () => {
    const innovativeData = [
        {
            title1:'People',
            title2:' are our priority',
            description1: 'Technology and business are crafted by individuals, and everyone is a unique person with their own needs and emotions.',
            description2: ' Our mission is to understand and meet these needs, fostering genuine connections and delivering exceptional value.',
        },
        {
            title1:'Quality',
            title2:' is our foundation',
            description1: 'Technology and business are crafted by individuals, and everyone is a unique person with their own needs and emotions.',
            description2: ' Our mission is to understand and meet these needs, fostering genuine connections and delivering exceptional value.',
        },
        {
            title1:'Integrity',
            title2:' is our core value',
            description1: 'Technology and business are crafted by individuals, and everyone is a unique person with their own needs and emotions.',
            description2: ' Our mission is to understand and meet these needs, fostering genuine connections and delivering exceptional value.',
        },
    ]
    return (
        <div className={s.innovativeContainer}>
            <h2>StellarTech is an innovative company</h2>
            <div className={s.innovativeBox}>
            {innovativeData.map((innovative, index) => (
                <MatkerGrey 
                key={index} 
                number={`0${index + 1}.`} 
                title1={innovative.title1}
                title2={innovative.title2}
                description1={innovative.description1}
                description2={innovative.description2}
            />  
            ))}
            </div>

        </div>
    )
}

export default InnovativeCompany;