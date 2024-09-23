import React, { useEffect } from "react"
import s from './LatestNewsPage.module.css'

import LatestNewsMain from "../../components/LatestNewsMain/LatestNewsMain"
import BlogNews from "../../components/BlogNews/BlogNews"
import Form from "../../components/Form/Form"
import ModalForm from "../../components/ModalForm/ModalForm"


export const LatestNewsPage = () => {
    
    const inputSizes = {
        name: '234px',
        company: '234px',
        phone: '234px',
        button: '234px',
    }

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])

    return(
        <div className={s.LatestNewsContainer}>
            <ModalForm/>
            <LatestNewsMain/>

            <BlogNews
                latestPage={true}
            />

            <Form 
                includeCompanyInput={true}
                inputSizes={inputSizes}
            />
        </div>
        
    )
}