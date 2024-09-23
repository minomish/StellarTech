import s from './UseCases.module.css'
import Button from '../Button/Button';
import Play from '../../assets/icons/utilities/Play';
import Null from '../../assets/icons/utilities/Null';
import video_img from '../../assets/img/ds.cart_video.png'

const UseCases = () => {
    return (
        <div className={s.UseCasesContainer}>
            <div className={s.titleContainer}>
                <span className={s.nameOfBlock_useCases}>USE CASES</span>
                <h2 className={s.title_useCases}>Increase Conversion Rates 
                    <span style={{color: '#06F'}}> x3.5 </span> 
                    with No-Code AI Solution
                </h2>
            </div>
            

            <div className={s.useCasesInfo}>

                <div className={s.buttons_useCases}>
                    <div className={s.buttons_container}>
                        <Button 
                            text={'Birthday Wishes'} 
                            type={"blueButton"} 
                            className={s.btn_useCases_1}
                            />
                        <Button 
                            text={"Promotional Calls"} 
                            type={"lineButton"} 
                            className={s.btn_useCases_2}
                            />
                        <Button 
                            text={"Loyalty Program"} 
                            type={"lineButton"} 
                            className={s.btn_useCases_3}
                            />
                        <Button 
                            text={"Order Status Update"} 
                            type={"lineButton"} 
                            className={s.btn_useCases_4}
                            />
                        <Button 
                            text={"Insurance Prolongation"} 
                            type={"lineButton"} 
                            className={s.btn_useCases_5}
                            />
                    </div>
                    
                    <span className={s.description_usecases}>Boost loyalty, engagement, and retention with personalized birthday wishes to your customers.</span>
                </div>
                
                <a href='https://www.meme-arsenal.com/memes/2756162205cc2e693f22a877173247ef.jpg' className={s.video_useCases}>
                    
                    <img src={video_img} className={s.video_img}/>
                    {/* <div className={s.player}><Play className={s.player_size}/></div> */}
                </a>
            </div>
            
        </div>
        
    )
}

export default UseCases;


//className={({isActive})=>{return isActive ? s.player_active : s.player}
//className={s.player}



{// реализация видео проигрователя через элементы
    /* <a href='https://www.meme-arsenal.com/memes/2756162205cc2e693f22a877173247ef.jpg' className={s.video_useCases}>
    <div className={s.player}><Play className={s.player_size}/></div>
                    
    <div className={s.title_video_useCases}>
        <span className={s.title_video}>This is how voice bot speaks</span>
        <span className={s.logo_video}>LOGO</span>
    </div>

    <div className={s.buttons_video}>
        <Button 
            text={'Expect you tomorrow?'} 
            type={"withIconButton"} 
            icon={<Null/>}
            className={s.btn_video_1}
            />
        <Button 
            text={'Tomorrow... i don’t know, I... How about'} 
            type={"withIconButton"} 
            icon={<Null/>}
            className={s.btn_video_2}
            />
        <Button 
            text={'Today... Today I’m free this afternoon'} 
            type={"withIconButton"} 
            icon={<Null/>}
            className={s.btn_video_3}
            />
    </div></a> */
}