import LoginCSS from './login.module.scss';
//components
import { Navbar } from '../../components/navbar/Navbar';
import { InputField } from '../../components/inputField/InputField';
//formik
import {Formik, Form} from 'formik';
//hooks
import { useHistory } from 'react-router';

export const Login = () => {

    const history = useHistory();

    const goToRegister = () => {
        const location = {
            pathname: `/register`,
        }
        history.push(location);
    }

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
                        <InputField label="Login" name="login" type="text"/>
                        <InputField label="Password" name="password" type="password"/>
                        <div className={LoginCSS.mainContainer__contentContainer__formContainer__registerLink} onClick={() => goToRegister()}>don't have an account? Register here</div>
                        <button type="submit">Login</button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}