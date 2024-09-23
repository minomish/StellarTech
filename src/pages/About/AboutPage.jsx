import React, { useEffect } from 'react'
import s from './AboutPage.module.css'
import AboutMain from '../../components/AboutMain/AboutMain'
import AboutBlock2 from '../../components/AboutBlock2/AboutBlock2'
import OutTeam from '../../components/OurTeam/OurTeam'
import InnovativeCompany from '../../components/InnovativeCompany/InnovativeCompany'
import BlogNews from '../../components/BlogNews/BlogNews'
import BookCall from '../../components/BookCall/BookCall'

export const AboutPage = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return(
        <div className={s.aboutPageContainer}>
            <AboutMain/>
            <AboutBlock2/>
            <OutTeam/>
            <InnovativeCompany/>
            <BlogNews/>
            <BookCall/>
        </div>
        
    )
}