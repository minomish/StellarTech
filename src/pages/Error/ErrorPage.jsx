import React, { useEffect } from 'react';
import s from './ErrorPage.module.css'
import error404 from '../../assets/img/error404.jpeg'
import { Button } from '../../components/Button/Button';


export const ErrorPage = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return(
        <div className={s.errorContainer}>
            <img className={s.error_img} src={error404}/>

            <h1 className={s.error_title}>Page Not Found</h1>
            <p className={s.error_description}>The page you are looking for may have been moved, deleted, or possibly never existed</p>
            <Button width={"509px"} text={"Go to the Homepage"} type={"blueButton"}/>
        </div>
    )
}