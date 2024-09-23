// import React from 'react';
// import s from './Header.module.css';
// import Logo from '../../assets/logo/Logo';

// import { NavLink } from 'react-router-dom';
// import { Button } from '../../components/Button/Button';

// export const Header = ({ openModal}) => {
//   return (
//     <header>
//       <div className={s.headerContainer}>
//         <h1 className={s.headerLogo}>
//           <NavLink to='/'>
//             <Logo/>
//             Liberty.space
//           </NavLink> 
//         </h1>

//         <nav className={s.headerNav}>
//           <NavLink to='/cases' 
//             className={({ isActive }) => {
//               return isActive ? s.isActiveNav : s.notActiveNav;
//             }}
//             >Use cases</NavLink>
//           <NavLink to='/about' className={({ isActive }) => {
//               return isActive ? s.isActiveNav : s.notActiveNav;
//             }}>About Us</NavLink>
//           <NavLink to='/blog' className={({ isActive }) => {
//               return isActive ? s.isActiveNav : s.notActiveNav;
//             }}>Blog</NavLink>
//         </nav>

//         <Button 
//             width={'186px'} 
//             text={"Get a consultation"} 
//             type={'blueButton'}
//             onClick={openModal}
//         />

        
//       </div>

      
//       <div className={s.headerBottomLine}></div>
//     </header>
//   );
// };


// import React,{ useState } from 'react';
// import s from './Header.module.css';
// import Logo from '../../assets/logo/Logo';
// import Close from '../../assets/icons/utilities/Close';
// import Menu from '../../assets/icons/utilities/Menu'
// import { NavLink } from 'react-router-dom';
// import { Button } from '../../components/Button/Button';

// export const Header = ({ openModal}) => {
//   const [isOpenMenu, setIsOpenMenu] = useState(false)

//   const toggleMenu = () =>{
//     setIsOpenMenu(!isOpenMenu)
//   }

//   const Links = [
//     {name:'About Us', link:'/about'},
//     {name:'Blog', link:'/blog'},
//   ]
//   return (
//     <header>
//       <div className={s.headerContainer}>
//         <h1 className={s.headerLogo}>
//           <NavLink to='/'>
//             <Logo/>
//             Liberty.space
//           </NavLink> 
//         </h1>

//         <nav className={isOpenMenu ? `${s.headerNav} ${s.active}` : s.headerNav}>
//              { 
//               Links.map((link,index)=>(
//                 <NavLink 
//                   to={link.link} 
//                   key={index} 
//                   className={({ isActive }) => {
//                     return isActive ? s.isActiveNav : s.notActiveNav;
//                   }}>
//                   {link.name}
//                 </NavLink>
//               ))
//             }
//           <div className={s.menuClose} onClick={toggleMenu}><Close /></div>
//           <div className={s.menuIcon} onClick={toggleMenu}><Menu/></div> 
//         </nav>

        
//          <Button 
//           width={'186px'} 
//           text={"Get a consultation"} 
//           type={'blueButton'}
//           onClick={openModal}
//           className={s.navBtn}
//         />

        
//       </div>

      
//       <div className={s.headerBottomLine}></div>
//     </header>
//   );
// };



import React, { useState } from 'react';
import s from './Header.module.css';
import Logo from '../../assets/logo/Logo';
import Menu from '../../assets/icons/utilities/Menu'
import Close from '../../assets/icons/utilities/Close'
import ModalForm from '../ModalForm/ModalForm';
import { NavLink } from 'react-router-dom';
import { Button } from '../../components/Button/Button';


import Insta from '../../assets/icons/socials/Insta'
import Facebook from '../../assets/icons/socials/Facebook'
import Twitter from '../../assets/icons/socials/Twitter'
import Instagram from '../../assets/icons/socials/Instagram'

export const Header = ({ openModal}) => {

  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const toggleMenu = () =>{
    setIsOpenMenu(!isOpenMenu)
  }

  const Links = [
    {
      name:'About Us', 
      link:'/about'
    },

    {
      name:'Blog',
      link:'/blog'
    },
  ]

  const socialIcons = [
    { 
        svg: <Insta fill={'black'}/>, 
        url: "#" 
    },

    { 
        svg: <Facebook fill={'black'}/>, 
        url: "#" 
    },

    { 
        svg: <Twitter fill={'black'}/>, 
        url: "#" 
    },

    { 
        svg: <Instagram fill={'black'}/>,
        url: "#" 
    }
];


  return (
    <header>
      <div className={s.headerContainer}>
        <h1 className={s.headerLogo}>
          <NavLink to='/'>
            <Logo/>
          </NavLink> 
        </h1>
        <div className={isOpenMenu ? `${s.menuClose} ${s.active}` : s.menuClose} onClick={toggleMenu}><Close /></div>
        <nav className={isOpenMenu ? `${s.headerNav} ${s.active}` : s.headerNav}>
         
          <Button 
            width={'auto'} 
            text={"Get a consultation"} 
            type={'textButton'}
            onClick={openModal}
            className={s.navTextBtn}
          />
            { 
              Links.map((link,index)=>(
                <NavLink 
                  to={link.link} 
                  key={index} 
                  className={({ isActive }) => {
                    return isActive ? s.isActiveNav : s.notActiveNav;
                  }}>
                  {link.name}
                </NavLink>
              ))
            }
            <div className={s.social_icons}>
                        {socialIcons.map((icon, index) => (
                            <a key={index} href={icon.url}>
                                {icon.svg}
                            </a>
                        ))}
                    </div>
        </nav>
        <div className={isOpenMenu ? s.menuIcon : `${s.menuIcon} ${s.active}`} onClick={toggleMenu}><Menu/></div>

        <Button 
          width={'257px'} 
          text={"Get a consultation"} 
          type={'blueButton'}
          onClick={openModal}
          className={s.navBtn}
        />
        
      </div>

      <div className={s.headerBottomLine}></div>

    </header>
    
  );
};