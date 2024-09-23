


// import React from "react";
// import s from './Footer.module.css'
// import Insta from '../../assets/icons/socials/Insta'
// import Facebook from '../../assets/icons/socials/Facebook'
// import Twitter from '../../assets/icons/socials/Twitter'
// import Instagram from '../../assets/icons/socials/Instagram'

// export const Footer = () => {

//     const contactInfo = [
//         { 
//             text: "LOGO", 
//             type: "logo" 
//         },

//         { 
//             text: "+7(999)-999-99-99", 
//             url: "#", 
//             className: s.link_title
//         },

//         { 
//             text: "info@company.com", 
//             url: "#", 
//             style: { textDecorationLine: "underline" } 
//         },

//         { 
//             text: "349 5th Avenue, New York, NY 10016", 
//             url: "#", 
//             style: { maxWidth: '344px' } 
//         },

//     ];


//     const socialIcons = [
//         { 
//             svg: <Insta />, 
//             url: "#" 
//         },

//         { 
//             svg: <Facebook />, 
//             url: "#" },
//         { 
//             svg: <Twitter />, 
//             url: "#" 
//         },

//         { 
//             svg: <Instagram />,
//             url: "#" 
//         }
//     ];


//     const navigationSections = [
//         {
//             title: "Company",
//             links: [
//                 {link_title:"Use cases", url: "#"},
//                 {link_title:"About Us", url: "#"},
//                 {link_title:"Blog", url: "#"},
//             ]
//         },

//         {
//             title: "Tomoru Career",
//             links: [
//                 {link_title:"Sales manager", url: "#"},
//             ]
//         },

//         {
//             title: "Documents",
//             links: [
//                 {link_title:"Privacy policy", url: "#"},
//                 {link_title:"User agreement", url: "#"},
//             ]
//         },
        
//         {
//             title: "Partners",
//             links: [
//                 {link_title:"Become a partner", url: "#"},
//             ]
//         },
//     ]

//     return (
//         <footer>
//             <div className={s.footer_container}>
//                 <div className={s.link_container}>
//                     {contactInfo.map((info, index) => (
//                         info.type === "logo" ? (
//                             <h1 key={index} className={s.footer_logo}>{info.text}</h1>
//                         ) : (
//                             <a key={index} href={info.url} className={info.className} style={info.style}>{info.text}</a>
//                         )
//                     ))}

//                     <div className={s.social_icons}>
//                         {socialIcons.map((icon, index) => (
//                             <a key={index} href={icon.url}>
//                                 {icon.svg}
//                             </a>
//                         ))}
//                     </div>
        
//                 </div>

//                 {navigationSections.map((navigationSection, index) => (
//                     <div key={index} className={s.link_container}>
//                         <span className={s.link_title}>{navigationSection.title}</span>
//                         {navigationSection.links.map((link, i)=>(
//                             <a href={link.url} key={i}>{link.link_title}</a>
//                         ))}
//                     </div>
//                 ))}

//             </div>
            
//             <div className={s.footer_copyright_container} style={{flexDirection:'column'}}>
//                 <div className={s.footerBottomLine}></div>
//                 <span className={s.footer_copyright}>© 2024 Company. All rights reserved.</span>
//             </div>

//         </footer>
//     )
// }




import React from "react";
import s from './Footer.module.css'
import Insta from '../../assets/icons/socials/Insta'
import Facebook from '../../assets/icons/socials/Facebook'
import Twitter from '../../assets/icons/socials/Twitter'
import Instagram from '../../assets/icons/socials/Instagram'

export const Footer = () => {

    const contactInfo = [
        { 
            text: "LOGO", 
            type: "logo" 
        },

        { 
            text: "+7(999)-999-99-99", 
            url: "#", 
            className: s.link_title
        },

        { 
            text: "info@company.com", 
            url: "#", 
            style: { textDecorationLine: "underline" } 
        },

        { 
            text: "349 5th Avenue, New York, NY 10016", 
            url: "#", 
            style: { maxWidth: '344px' } 
        },

    ];

    const socialIcons = [
        { 
            svg: <Insta />, 
            url: "#" 
        },

        { 
            svg: <Facebook />, 
            url: "#" 
        },

        { 
            svg: <Twitter />, 
            url: "#" 
        },

        { 
            svg: <Instagram />,
            url: "#" 
        }
    ];

    const navigationSections = [
        {
            title: "Company",
            links: [
                {link_title:"Use cases", url: "#"},
                {link_title:"About Us", url: "#"},
                {link_title:"Blog", url: "#"},
            ]
        },

        {
            title: "Documents",
            links: [
                {link_title:"Privacy policy", url: "#"},
                {link_title:"User agreement", url: "#"},
            ]
        },
        
        // {
        //     title: "Partners",
        //     links: [
        //         {link_title:"Become a partner", url: "#"},
        //     ]
        // },
    ];

    return (
        <footer>
            <div className={s.mainFooterContainer}>
            <div className={s.footer_container}>
                <div className={s.link_container}>
                    {contactInfo.map((info, index) => (
                        info.type === "logo" ? (
                            <h1 key={index} className={s.footer_logo}>{info.text}</h1>
                        ) : (
                            <a key={index} href={info.url} className={info.className} style={info.style}>{info.text}</a>
                        )
                    ))}

                    <div className={s.social_icons}>
                        {socialIcons.map((icon, index) => (
                            <a key={index} href={icon.url}>
                                {icon.svg}
                            </a>
                        ))}
                    </div>
                </div>

                <div className={s.navigation_columns}>
                    {navigationSections.map((navigationSection, index) => (
                        <div key={index} className={s.navigation_section}>
                            <span className={s.link_title}>{navigationSection.title}</span>
                            {navigationSection.links.map((link, i) => (
                                <a href={link.url} key={i}>{link.link_title}</a>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            
            <div className={s.footer_copyright_container} style={{flexDirection:'column'}}>
                <div className={s.footerBottomLine}></div>
                <span className={s.footer_copyright}>© 2024 Company. All rights reserved.</span>
            </div>
            </div>
           
        </footer>
    );
}

