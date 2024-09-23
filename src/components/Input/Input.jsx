
import React from "react";
import s from './Input.module.css'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;

const Input = ({ name, width, placeholder, className}) => {
    return(
        <div className={s.input_field}>
            <input className={`${s.input} ${className}`}
                style={{width: width}}
                name={name}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input;





// import React from 'react';
// import s from './TextField.module.css';

// const TextField = ({ name, type, register, rules={}, errors, placeholder, icon,autocomplete, value, onChange }) => {
//   return (
//     <div className={s.input_field}>
//       <input
//         name={name}
//         type={type}
//         {...register(name, { ...rules })}
//         placeholder={placeholder}
//         value={value}
//         onChange={onChange}
//         className={errors[name] ? s.error : ''}
//       />
//       <div className={s.errors}>
//         {errors[name]?.message}
//       </div>
//       <i className={icon} />
//     </div>
//   );
// };

// export default TextField;