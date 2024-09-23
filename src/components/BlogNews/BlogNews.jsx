
import React from "react";
import s from './BlogNews.module.css'
import Banner from "../Banner/Banner";
import img1 from '../../assets/img/banner_Place Image_1.png'

const BlogNews = ({latestPage=false}) => {
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
    ]
    return (
        <div className={s.BlogNews_Container}>
            <h2>{latestPage ? "Other articles" : "Blog and news"}</h2>
            <div className={s.articles}>
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
    )
}

export default BlogNews;