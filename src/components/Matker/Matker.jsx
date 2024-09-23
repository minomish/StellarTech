
import React from "react";
import s from './Matker.module.css';

const Matker = ({ number, description }) => {
    return (
        <div className={s.box}>
            <div className={s.numder_matker}>{number}</div>
            <div className={s.line_matker}></div>
            <div className={s.description_matker}>{description}</div>
        </div>
    );
};

export default Matker;
