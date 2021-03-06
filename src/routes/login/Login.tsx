import LoginCSS from './login.module.scss';
//components
import { Navbar } from '../../components/navbar/Navbar';
import { InputField } from '../../components/inputField/InputField';
//formik
import {Formik, Form} from 'formik';
//requests
import {loginUser} from './requests/loginUser';
//hooks
import { useAppDispatch } from '../../hooks';
//actions
import { isLogged } from '../../actions';
//icons
import {GrFacebook} from 'react-icons/gr';

export const Login = () => {

    const dispatch = useAppDispatch();

    return(
        <div className={LoginCSS.mainContainer}>
            <Navbar/>
            <div className={LoginCSS.mainContainer__contentContainer}>
                <Formik initialValues={{
                    login: '',
                    password: ''
                }}
                // validationSchema={validationSchema}
                onSubmit={ async (data) =>{
                    const response = await loginUser(data);
                    if(response === 200){
                        dispatch(isLogged(true))
                    }
                }}
                >
                    <Form className={LoginCSS.mainContainer__contentContainer__formContainer}>
                        <h2>Login</h2>
                        <div className={LoginCSS.mainContainer__contentContainer__formContainer__inputContainer}>
                            <InputField label="Login" name="login" type="text"/>
                        </div>
                        <div className={LoginCSS.mainContainer__contentContainer__formContainer__inputContainer}>
                            <InputField label="Password" name="password" type="password"/>
                        </div>
                        <div className={LoginCSS.mainContainer__contentContainer__formContainer__registerLink}><a href="/register">don't have an account? Register here</a></div>
                        <button type="submit">Login</button>

                        <div className={LoginCSS.mainContainer__contentContainer__formContainer__facebook}><p>join with <GrFacebook/></p></div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}