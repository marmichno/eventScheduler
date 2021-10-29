import AddNewEventCSS from './addNewEvent.module.scss';
//components
import { InputField } from '../../../../../components/inputField/InputField';
//formik
import {Formik, Form} from 'formik';

export const AddNewEvent = () => {
    return(
        <div className={AddNewEventCSS.mainContainer}>
            <Formik initialValues={{
                    eventName: '',
                    eventDate: ''
                }}
                // validationSchema={validationSchema}
                onSubmit={ data =>{
                    console.log(data);
                }}
                >
                    <Form className={AddNewEventCSS.mainContainer__formContainer}>
                        <div className={AddNewEventCSS.mainContainer__formContainer__inputContainer}>
                            <InputField label="Event name" name="eventName" type="text"/>
                        </div>
                        <div className={AddNewEventCSS.mainContainer__formContainer__inputContainer}>
                            <InputField label="Event Date" name="eventDate" type="text"/>
                        </div>
                        <button type="submit">Add Event</button>
                    </Form>
                </Formik>
        </div>
    )
}