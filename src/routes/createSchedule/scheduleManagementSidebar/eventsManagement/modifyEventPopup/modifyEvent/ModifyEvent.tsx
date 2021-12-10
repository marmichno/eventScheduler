import ModifyEventCSS from './modifyEvent.module.scss';
//components
import { InputField } from '../../../../../../components/inputField/InputField';
//formik
import {Formik, Form} from 'formik';

export const ModifyEvent = () => {
    return(
        <div className={ModifyEventCSS.mainContainer}>
            <Formik initialValues={{
                    eventName: '',
                    eventDate: ''
                }}
                // validationSchema={validationSchema}
                onSubmit={ data =>{
                    console.log(data);
                }}
                >
                    <Form className={ModifyEventCSS.mainContainer__formContainer}>
                        <div className={ModifyEventCSS.mainContainer__formContainer__inputContainer}>
                            <InputField label="Event name" name="eventName" type="text"/>
                        </div>
                        <div className={ModifyEventCSS.mainContainer__formContainer__inputContainer}>
                            <InputField label="Event Date" name="eventDate" type="text"/>
                        </div>
                        <button type="submit">Add Event</button>
                    </Form>
                </Formik>
        </div>
    )
}