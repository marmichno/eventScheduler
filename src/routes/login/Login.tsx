import LoginCSS from './login.module.scss';
//components
import { Navbar } from '../../components/navbar/Navbar';
import { LoginInputField } from './loginInputField/LoginInputField';
//formik
import {Formik, Form, Field, ErrorMessage} from 'formik';

export const Login = () => {
    return(
        <div className={LoginCSS.mainContainer}>
            <Navbar/>
            <div className={LoginCSS.mainContainer__contentContainer}>
                <Formik initialValues={{
                    login: '',
                    password: ''
                }}
                // validationSchema={validationSchema}
                onSubmit={ data =>{
                    console.log(data);
                }}
                >
                    <Form className={LoginCSS.mainContainer__contentContainer__formContainer}>
                        <h2>Login</h2>
                        <LoginInputField label="Login" name="login" type="text"/>
                        <LoginInputField label="Password" name="password" type="password"/>
                        <button type="submit">Login</button>
                    </Form>

                </Formik>
            </div>
        </div>
    )
}