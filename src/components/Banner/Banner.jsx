
import React from "react";
import s from './Banner.module.css'
import {Link, useLocation } from 'react-router-dom';

const Banner = ({img, title, describe, oneBanner = false}) => {
    const location = useLocation()
    const isBlog = location.pathname === '/blog'

    return (
        <div className={oneBanner ? s.oneBannerContainer : s.bannerContainer} >
            <Link to={isBlog ? '/latestNews' : '/blog'}><img src={img} className={oneBanner ? s.img_card_One : s.img_card}/>
            <div className={oneBanner ? s.textOneBannerContainer : s.textBannerContainer}>
                <h3 className={oneBanner ? s.title_banner_One :s.title_banner}>{title}</h3>
                <p className={oneBanner ? s.describe_banner_One :s.describe_banner}>{describe}</p>
            </div>
            </Link>
        </div>
    )
}

export default Banner;
