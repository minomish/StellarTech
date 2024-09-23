
import React from 'react';
import s from './Home.module.css'
import Play from '../../assets/icons/utilities/Play'
import { Button } from '../../components/Button/Button';
import bg_block1 from '../../assets/img/ImageHome.png'


const Home = ({openModal}) => {

    return (
      <div className={s.homeContainer}>
        <img className={s.homeBlock_img} src={bg_block1} alt='bg_block1'/>
        <div className={s.homeBlock}>
          <h1 className={s.home_h1}>Conversational AI Platform for B2C Businesses</h1>
          <h3 className={s.home_h3}>Automating and Transforming Sales, Marketing,<br/>
          and Recruiting with omnichannel AI VoiceBots</h3>

          <div className={s.textsWithIcons}>
            <div className={s.textWithIcon}>
              <Play/>
              <h4><b>Listen to our VoiceBot’s</b><br/>Birthday Call</h4>
            </div>

            <div className={s.textWithIcon}>
              <Play/>
              <h4><b>Listen to our VoiceBot’s</b><br/>Promotional Call</h4>
            </div>
          </div>

          <Button
            text={'Get a consultation for free'}
            type={"orangeButton"}
            onClick={openModal}
            className={s.btn_home_mobile}
          />
          
        </div>
        
      </div>

    );
  };

export default Home;
  