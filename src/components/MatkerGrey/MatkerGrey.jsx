import React from "react";
import s from './MatkerGrey.module.css'

const MatkerGrey = ({number, title1, title2, description1, description2}) => {
    return(
        <div className={s.box}>
            <div className={s.numder_matker}>{number}</div>
            <div className={s.line_matker}></div>
            <div className={s.title_matker}>
                <span className={s.bluetitle}>
                    {title1}
                </span>
                {title2}
                </div>
            <div className={s.description_matker}>{description1}</div>
            <div className={s.description_matker}>{description2}</div>
        </div>
        
    )
}

export default MatkerGrey;