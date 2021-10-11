import LoginInputCSS from './loginInputField.module.scss';
//formik
import {Field, ErrorMessage} from 'formik';

interface LoginProps {
    label: string,
    name: string,
    type: string
}

export const LoginInputField = ({label, name, type}: LoginProps) => {
    return(
    <div className={LoginInputCSS.inputContainer}>
            <div className={LoginInputCSS.inputContainer__input}>
                <label htmlFor={name}>{label}</label>
                <Field name={name} type={type}/>
            </div>
            <div className={LoginInputCSS.inputContainer__error}>
                <ErrorMessage name={name}/>
            </div>
        </div>
    )
}