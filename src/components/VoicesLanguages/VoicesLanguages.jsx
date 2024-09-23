
import React from "react";
import s from './VoicesLanguages.module.css'
import American from '../../assets/icons/flags/American'
import British from '../../assets/icons/flags/British'
import Australian from '../../assets/icons/flags/Australian'
import Canadian from '../../assets/icons/flags/Canadian'
import Irish from '../../assets/icons/flags/Irish'
import German from '../../assets/icons/flags/German'
import Spanish from '../../assets/icons/flags/Spanish'
import French from '../../assets/icons/flags/French'
import Hindi from '../../assets/icons/flags/Hindi'
import BrazilianPortuguese from '../../assets/icons/flags/BrazilianPortuguese'
import MexicanSpanish from '../../assets/icons/flags/MexicanSpanish'
import Finnish from '../../assets/icons/flags//Finnish'
import Italian from '../../assets/icons/flags//Italian'
import Turkish from '../../assets/icons/flags/Turkish'
import Kazakh from '../../assets/icons/flags/Kazakh'
import Russian from '../../assets/icons/flags/Russian'

const VoicesLanguages = () =>{

    const countriesData = [
        {
            flag: <American/>,
            country:"American English",
        },
        {
            flag: <British/>,
            country:"British English",
        },
        {
            flag: <Australian/>,
            country:"Australian English",
        },
        {
            flag:  <Canadian/>,
            country:"Canadian English",
        },
        {
            flag:  <Irish/>,
            country:"Irish English",
        },
        {
            flag: <German/>,
            country:"German",
        },
        {
            flag: <Spanish/>,
            country:"Spanish",
        },
        {
            flag: <French/>,
            country:"French",
        },
        {
            flag: <Hindi/>,
            country:"Hindi",
        },
        {
            flag: <BrazilianPortuguese/>,
            country:"Brazilian Portuguese",
        },
        {
            flag: <MexicanSpanish/>,
            country:"Mexican Spanish",
        },
        {
            flag: <Finnish/>,
            country:"Finnish",
        },
        {
            flag: <Italian/>,
            country:"Italian",
        },
        {
            flag: <Turkish/>,
            country:"Turkish",
        },
        {
            flag: <Kazakh/>,
            country:"Kazakh",
        },
        {
            flag: <Russian/>,
            country:"Russian",
        },

    ]
    return(
        <div className={s.VoicesLanguages_Container}>
            <h2 className={s.title_VoicesLanguages}>Voices in 100+ Languages
                <p className={s.description_VoicesLanguages}>Our comprehensive AI voice library covers all major languages, dialects and accents worldwide</p>
            </h2>
            
            <div className={s.countries_box}>
                {countriesData.map((country, index)=>(
                    <div key={index} className={s.country_box}>
                        <div className={s.country_flag}>{country.flag}</div>
                        <div className={s.country_name}>{country.country}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default VoicesLanguages;