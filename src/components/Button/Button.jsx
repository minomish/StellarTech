
import s from './Button.module.css';

export const Button = (props) => {
    const { width, text, type, icon, bg_color, onClick, className} = props
    const typeOfButton = {
        blueButton: s.blueButton,
        orangeButton: s.orangeButton,
        withIconButton: s.withIconButton,
        lineButton: s.lineButton,
        textButton: s.textButton
    }

    return (
        <button 
            aria-label='' 
            type='button' 
            style={{ width: width, backgroundColor: bg_color }}
            className={`${typeOfButton[type]} ${className} `} 
            onClick={onClick}
        >
            {type === 'withIconButton' && icon  }
            {text} 
        </button>
    );
};

export default Button;


    // const getTypeOfButton = () =>{     способ по функции
    //     switch (type) {
    //         case 'blueButton': 
    //             return s.blueButton;
    //         case 'whiteButton': 
    //             return s.whiteButton;
    //         case 'lineButton': 
    //             return s.lineButton;
    //         case 'textButton':
    //             return s.textButton;
    //         default:
    //             return s.blueButton;
    //     }
    // }