import RegisterCSS from './register.module.scss';
//components
import { InputField } from '../../components/inputField/InputField';
import { Navbar } from '../../components/navbar/Navbar';
//formik
import {Formik, Form} from 'formik';
//hooks
import { useHistory } from 'react-router';

export const Register = () => {

    const history = useHistory();

    const goToLogin = () => {
        const location = {
            pathname: `/login`,
        }
        history.push(location);
    }

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
                        <h2>Register</h2>
                        <InputField label="Login" name="login" type="text"/>
                        <InputField label="E-mail" name="email" type="text"/>
                        <InputField label="Password" name="password" type="password"/>
                        <InputField label="Repeat password" name="repeatPassword" type="password"/>
                        <div className={RegisterCSS.mainContainer__contentContainer__formContainer__joinWith}>join with facebook account</div>
                        <div className={RegisterCSS.mainContainer__contentContainer__formContainer__loginLink} onClick={() => goToLogin()}>already have an account? Login here</div>
                        <button type="submit">Register</button>
                    </Form>
                </Formik>
                <div className={RegisterCSS.mainContainer__contentContainer__featuresContainer}><h2>features</h2></div>
            </div>
        </div>
    )
}