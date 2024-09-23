import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import s from './BlogPage.module.css'
import Form from "../../components/Form/Form"
import Banner from "../../components/Banner/Banner"

import img1 from '../../assets/img/Place_Image.png'

export const BlogPage = () => {
    const inputSizes = {
        name: '234px',
        company: '234px',
        phone: '234px',
        button: '234px',
    }

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])

    const articleData = [
        {
            img: img1,
            title: 'Four differences between a bot and a human in a telephone conversation',
            describe: 'Sometimes it is impossible to understand by the voice in the handset with whom you have to conduct a dialogue: with a person or a voice bot. For example, when calling job applicants, 80% of people do not realize that they are talking to a bot. The speech of bots is increasingly difficult to distinguish from human speech, but there are signs by which this can be done. We talk about them in the article.',
        },
        {
            img: img1,
            title: 'Four differences between a bot and a human in a telephone conversation',
            describe: 'Sometimes it is impossible to understand by the voice in the handset with whom you have to conduct a dialogue: with a person or a voice bot. For example, when calling job applicants, 80% of people do not realize that they are talking to a bot. The speech of bots is increasingly difficult to distinguish from human speech, but there are signs by which this can be done. We talk about them in the article.',
        },
        {
            img: img1,
            title: 'Four differences between a bot and a human in a telephone conversation',
            describe: 'Sometimes it is impossible to understand by the voice in the handset with whom you have to conduct a dialogue: with a person or a voice bot. For example, when calling job applicants, 80% of people do not realize that they are talking to a bot. The speech of bots is increasingly difficult to distinguish from human speech, but there are signs by which this can be done. We talk about them in the article.',
        },
        {
            img: img1,
            title: 'Four differences between a bot and a human in a telephone conversation',
            describe: 'Sometimes it is impossible to understand by the voice in the handset with whom you have to conduct a dialogue: with a person or a voice bot. For example, when calling job applicants, 80% of people do not realize that they are talking to a bot. The speech of bots is increasingly difficult to distinguish from human speech, but there are signs by which this can be done. We talk about them in the article.',
        },
        {
            img: img1,
            title: 'Four differences between a bot and a human in a telephone conversation',
            describe: 'Sometimes it is impossible to understand by the voice in the handset with whom you have to conduct a dialogue: with a person or a voice bot. For example, when calling job applicants, 80% of people do not realize that they are talking to a bot. The speech of bots is increasingly difficult to distinguish from human speech, but there are signs by which this can be done. We talk about them in the article.',
        },
        {
            img: img1,
            title: 'Four differences between a bot and a human in a telephone conversation',
            describe: 'Sometimes it is impossible to understand by the voice in the handset with whom you have to conduct a dialogue: with a person or a voice bot. For example, when calling job applicants, 80% of people do not realize that they are talking to a bot. The speech of bots is increasingly difficult to distinguish from human speech, but there are signs by which this can be done. We talk about them in the article.',
        },
    ]

    return(
        <div className={s.blogPageContainer}>
            <div className={s.newsContainer}>
            <div className={s.nav}>
                <Link to='/'>Home</Link>
                <span>&gt;</span>
                <span className={s.boldNav}>Blog</span>
            </div>
                <h1>Blog and News</h1>
                
                <Banner
                    oneBanner={true}
                    img={img1} 
                    title={'Four differences between a bot and a human in a telephone conversation'}
                    describe={'Sometimes it is impossible to understand by the voice in the handset with whom you have to conduct a dialogue: with a person or a voice bot. For example, when calling job applicants, 80% of people do not realize that they are talking to a bot. The speech of bots is increasingly difficult to distinguish from human speech, but there are signs by which this can be done. We talk about them in the article.'}
                />

                
                <div style={{display: 'flex', gap:'40px', flexWrap: 'wrap'}}>
                    {articleData.map((data, index)=>(
                        <Banner
                            key={index}
                            img={data.img}
                            title={data.title}
                            describe={data.describe}
                        />
                        ))}
                </div>
            </div>
            
            <Form 
                includeCompanyInput={true}
                inputSizes={inputSizes}
            />

        </div>
    )
}