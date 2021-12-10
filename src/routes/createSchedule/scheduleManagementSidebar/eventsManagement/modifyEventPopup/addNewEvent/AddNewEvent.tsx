import AddNewEventCSS from './addNewEvent.module.scss';
//components
import { InputField } from '../../../../../../components/inputField/InputField';
//formik
import { Formik, Form } from 'formik';

export const AddNewEvent = () => {
    return (
        <div className={AddNewEventCSS.mainContainer}>
            <Formik initialValues={{
                "name": "",
                "description": "",
                "dateFrom": "",
                "dateTo": "",
                "eventAvailabilityType": "",
                "maxNumberOfParticipants": "",
                "eventAddress": {
                    "houseNumber": "",
                    "street": "",
                    "city": "",
                    "state": "",
                    "coordinates": ""
                }
            }}
                // validationSchema={validationSchema}
                onSubmit={data => {
                    console.log(data);
                }}
            >
                <Form className={AddNewEventCSS.mainContainer__formContainer}>
                    <div className={AddNewEventCSS.mainContainer__formContainer__inputContainer}>
                        <InputField label="Event name" name="name" type="text" />
                    </div>
                    <div className={AddNewEventCSS.mainContainer__formContainer__inputContainer}>
                        <InputField label="Event Description" name="description" type="text" />
                    </div>
                    <div className={AddNewEventCSS.mainContainer__formContainer__inputContainer}>
                        <InputField label="Start date" name="dateFrom" type="text" />
                    </div>
                    <div className={AddNewEventCSS.mainContainer__formContainer__inputContainer}>
                        <InputField label="End date" name="date To" type="text" />
                    </div>
                    <div className={AddNewEventCSS.mainContainer__formContainer__inputContainer}>
                        <InputField label="Event type" name="eventAvailabilityType" type="text" />
                    </div>
                    <div className={AddNewEventCSS.mainContainer__formContainer__inputContainer}>
                        <InputField label="Maximum nuber of participants" name="maxNumberOfParticipants" type="text" />
                    </div>
                    <div className={AddNewEventCSS.mainContainer__formContainer__inputContainer}>
                        <InputField label="Event address" name="eventAddress" type="text" />
                    </div>
                    <div className={AddNewEventCSS.mainContainer__formContainer__inputContainer}>
                        <InputField label="House number" name="houseNumber" type="text" />
                    </div>
                    <div className={AddNewEventCSS.mainContainer__formContainer__inputContainer}>
                        <InputField label="Street" name="street" type="text" />
                    </div>
                    <div className={AddNewEventCSS.mainContainer__formContainer__inputContainer}>
                        <InputField label="City" name="city" type="text" />
                    </div>
                    <div className={AddNewEventCSS.mainContainer__formContainer__inputContainer}>
                        <InputField label="State" name="state" type="text" />
                    </div>
                    <button type="submit">Add Event</button>
                </Form>
            </Formik>
        </div>
    )
}