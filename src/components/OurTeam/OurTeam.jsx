

import React from "react";
import s from './OurTeam.module.css'
import TeamCard from '../../components/TeamCard/TeamCard'
import photo from '../../assets/img/photo.jpeg'

const OurTeam = () => {

    const teamData = [
        {
            name: 'Daniyar Tuleutayev',
            link: 'https://www.linkedin.com/in/dan-serikson/',
            post: 'Founder',
            about: 'I am an engineer and entrepreneur - who created several profitable ventures, including the largest digital agency in Central Asia, a member of YPO, and an investor. appreciate openness, speed, and determination. love space, technology, science fiction, and all the geeky stuff. Also, I love riding sports bikes',
            photo: photo,
        },
        {
            name: 'Mukhtar Mukhtarov',
            link: 'https://www.linkedin.com/in/dan-serikson/',
            post: 'Co-Founder',
            about: 'man',
            photo: photo,
        },
        {
            name: 'Aikun Nazrakhmet',
            link: 'https://www.linkedin.com/in/dan-serikson/',
            post: 'CEO',
            about: 'man',
            photo: photo,
        },
        {
            name: 'Diana Tleubayeva',
            link: 'https://www.linkedin.com/in/dan-serikson/',
            post: 'Team Leader',
            about: 'man',
            photo: photo,
        },
        {
            name: 'Alan Dostanov',
            link: 'https://www.linkedin.com/in/dan-serikson/',
            post: 'Account Executive',
            about: 'man',
            photo: photo,
        },
        {
            name: 'Aidana Nurbek',
            link: 'https://www.linkedin.com/in/dan-serikson/',
            post: 'Account Executive',
            about: 'man',
            photo: photo,
        },
    ]
    return(
        <div className={s.team_container}>
            <h2>Out team</h2>
            
            <div className={s.teamInfo}>
                {teamData.map((person, index) => (
                    <TeamCard 
                        key={index}
                        dataCard={person}
                    />  
                ))}
            </div>
        </div>
    )
} 

export default OurTeam;


