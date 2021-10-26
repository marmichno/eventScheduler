import RegisterCSS from './register.module.scss';
//components
import { InputField } from '../../components/inputField/InputField';
import { Navbar } from '../../components/navbar/Navbar';
//formik
import {Formik, Form} from 'formik';

export const Register = () => {

    return(
        <div className={RegisterCSS.mainContainer}>
            <Navbar/>
            <div className={RegisterCSS.mainContainer__contentContainer}>
                <Formik initialValues={{
                    login: '',
                    password: ''
                }}
                // validationSchema={validationSchema}
                onSubmit={ data =>{
                    console.log(data);
                }}
                >
                    <Form className={RegisterCSS.mainContainer__contentContainer__formContainer}>
                        <h1>Register</h1>
                        <div className={RegisterCSS.mainContainer__contentContainer__formContainer__inputContainer}>
                            <InputField label="Login" name="login" type="text"/>
                        </div>
                        <div className={RegisterCSS.mainContainer__contentContainer__formContainer__inputContainer}>
                            <InputField label="E-mail" name="email" type="text"/>
                        </div>
                        <div className={RegisterCSS.mainContainer__contentContainer__formContainer__inputContainer}>
                            <InputField label="Password" name="password" type="password"/>
                        </div>
                        <div className={RegisterCSS.mainContainer__contentContainer__formContainer__inputContainer}>
                            <InputField label="Repeat password" name="repeatPassword" type="password"/>
                        </div>
                        <div className={RegisterCSS.mainContainer__contentContainer__formContainer__loginLink}>
                            <a href="/login">already have an account? Login here</a>
                        </div>
                        <button type="submit">Register</button>
                    </Form>
                </Formik>
                <div className={RegisterCSS.mainContainer__contentContainer__featuresContainer}>
                    <h2>features</h2>
                </div>
            </div>
        </div>
    )
}