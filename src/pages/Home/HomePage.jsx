import React, { useEffect, useState }  from 'react';
import s from './HomePage.module.css'
import Home from '../../components/Home/Home'
import CompanyLogoCarousel from '../../components/CompanyLogoCarousel/CompanyLogoCarousel'
import Achievements from '../../components/Achievements/Achievements'
import UseCases from '../../components/UseCases/UseCases';
import TypesBots from '../../components/TypesOfAIBots/TypesBots'
import UseCasesAIVoiceBots from '../../components/UseCasesAIVoiceBots/UseCasesAIVoiceBots';
import GetCustomVoiceBot from '../../components/GetCustomVoiceBot/GetCustomVoiceBot'
import OurAdvantages from '../../components/OurAdvantages/OurAdvantages';
import Bots5Days from '../../components/Bots5Days/Bots5Days';
import VoicesLanguages from '../../components/VoicesLanguages/VoicesLanguages';
import BlogNews from '../../components/BlogNews/BlogNews';
import Form from '../../components/Form/Form';
import ModalForm from '../../components/ModalForm/ModalForm';

export const HomePage = ({openModal}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  
    return (
      <div className={s.homePageContainer}>
        <Home 
              isOpenModal={isOpenModal}
              setIsOpenModal={setIsOpenModal}
              openModal={()=>setIsOpenModal(true)}
        />
        <CompanyLogoCarousel/>
        <Achievements/>
        <UseCases/>
        <TypesBots/>
        <UseCasesAIVoiceBots/>
        <GetCustomVoiceBot/>
        <OurAdvantages/>
        <Bots5Days/>
        <VoicesLanguages/>
        <BlogNews/>
        <Form/>

        <ModalForm
          isOpenModal={isOpenModal}
          onClose={()=>setIsOpenModal(false)}
        />
        

      </div>
  );
};
  