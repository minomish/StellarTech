import React from "react";
import s from './CompanyLogoCarousel.module.css';
import Exeed from "../../assets/companyLogo/Exeed";
import Sulpak from "../../assets/companyLogo/Sulpak";
import YvesRocher from "../../assets/companyLogo/YvesRocher";
import Invictus from "../../assets/companyLogo/Invictus";
import Zeta from "../../assets/companyLogo/Zeta";
import Magnum from "../../assets/companyLogo/Magnum";




const CompanyLogoCarousel = () => {

    return (
        <div className={s.companyLogos}>
            <h2>Companies that trust us</h2>

            <div className={s.companyLogosCarousel}>
                <div className={s.companyLogoCarousel}>
                    <Exeed/>
                    <Sulpak/>
                    <YvesRocher/>
                    <Invictus/>
                    <Zeta/>
                    <Magnum/>
                </div>
                <div className={s.companyLogoCarousel}>
                    <Exeed/>
                    <Sulpak/>
                    <YvesRocher/>
                    <Invictus/>
                    <Zeta/>
                    <Magnum/>
                </div>
                
            </div>

            
        </div>
    );
};

export default CompanyLogoCarousel;




