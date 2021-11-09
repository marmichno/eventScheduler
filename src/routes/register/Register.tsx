import RegisterCSS from './register.module.scss';
//components
import { InputField } from '../../components/inputField/InputField';
import { Navbar } from '../../components/navbar/Navbar';
//formik
import {Formik, Form} from 'formik';
//validationSchema
import { registerValidationSchema } from './registerValidationSchema/registerValidationSchema';
//requests
import { createUser } from './requests/createUser';
//router
import { useHistory } from "react-router-dom";

export const Register = () => {

    const history = useHistory();

    return(
        <div className={RegisterCSS.mainContainer}>
            <Navbar/>
            <div className={RegisterCSS.mainContainer__contentContainer}>
                <Formik initialValues={{
                    name: '',
                    description: '',
                    username: '',
                    password: '',
                    repeatPassword: '',
                    email:''

                }}
                validationSchema={registerValidationSchema}
                
                onSubmit={ async (data) =>{

                    const response = await createUser(data);

                    if(response === 201){
                        const location = {
                            pathname: '/login'
                        }
                        history.push(location);
                    }
                }}
                >
                    <Form className={RegisterCSS.mainContainer__contentContainer__formContainer}>
                        <h1>Register</h1>
                        <div className={RegisterCSS.mainContainer__contentContainer__formContainer__inputContainer}>
                            <InputField label="Name" name="name" type="text"/>
                        </div>
                        <div className={RegisterCSS.mainContainer__contentContainer__formContainer__inputContainer}>
                            <InputField label="Description" name="description" type="text"/>
                        </div>
                        <div className={RegisterCSS.mainContainer__contentContainer__formContainer__inputContainer}>
                            <InputField label="Username" name="username" type="text"/>
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