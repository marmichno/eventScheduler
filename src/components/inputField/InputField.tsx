import InputCSS from './InputField.module.scss';
//formik
import {Field, ErrorMessage} from 'formik';

interface InputProps {
    label: string,
    name: string,
    type: string
}

export const InputField = ({label, name, type}: InputProps) => {
    return(
    <div className={InputCSS.inputContainer}>
            <div className={InputCSS.inputContainer__input}>
                <label htmlFor={name}>{label}</label>
                <Field name={name} type={type}/>
            </div>
            <div className={InputCSS.inputContainer__error}>
                <ErrorMessage name={name}/>
            </div>
        </div>
    )
}