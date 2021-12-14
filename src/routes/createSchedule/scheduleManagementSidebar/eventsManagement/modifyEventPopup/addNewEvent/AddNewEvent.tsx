import AddNewEventCSS from './addNewEvent.module.scss';
//components
import { InputField } from '../../../../../../components/inputField/InputField';
//formik
import { Formik, Form } from 'formik';
//validationSchema
import { addNewEventValidationSchema } from './validationSchema/addNewEventValidationSchema';
//requests
import { createNewEvent } from './requests/creatNewEvent';

export const AddNewEvent = () => {
    return (
        <div className={AddNewEventCSS.mainContainer}>
            <Formik initialValues={{
                name: "",
                description: "",
                timeFrom: "",
                dateFrom: "",
                timeTo: "",
                dateTo: "",
                eventAvailabilityType: "",
                maxNumberOfParticipants: 1,
                eventAddress: {
                    houseNumber: "",
                    street: "",
                    city: "",
                    state: "",
                    coordinates: "XYZ"
                }
            }}
                validationSchema={addNewEventValidationSchema}
                onSubmit={ async (data) => {
                    console.log(data);
                    const response = await createNewEvent(data);
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
                        <InputField label="Start time" name="timeFrom" type="time" />
                    </div>
                    <div className={AddNewEventCSS.mainContainer__formContainer__inputContainer}>
                        <InputField label="Start date" name="dateFrom" type="date" />
                    </div>
                    <div className={AddNewEventCSS.mainContainer__formContainer__inputContainer}>
                        <InputField label="End time" name="timeTo" type="time" />
                    </div>
                    <div className={AddNewEventCSS.mainContainer__formContainer__inputContainer}>
                        <InputField label="End date" name="dateTo" type="date" />
                    </div>
                    <div className={AddNewEventCSS.mainContainer__formContainer__inputContainer}>
                        <InputField label="Event type" name="eventAvailabilityType" type="text" />
                    </div>
                    <div className={AddNewEventCSS.mainContainer__formContainer__inputContainer}>
                        <InputField label="Maximum nuber of participants" name="maxNumberOfParticipants" type="text" />
                    </div>
                    <div className={AddNewEventCSS.mainContainer__formContainer__inputContainer}>
                        <InputField label="House number" name="eventAddress.houseNumber" type="text" />
                    </div>
                    <div className={AddNewEventCSS.mainContainer__formContainer__inputContainer}>
                        <InputField label="Street" name="eventAddress.street" type="text" />
                    </div>
                    <div className={AddNewEventCSS.mainContainer__formContainer__inputContainer}>
                        <InputField label="City" name="eventAddress.city" type="text" />
                    </div>
                    <div className={AddNewEventCSS.mainContainer__formContainer__inputContainer}>
                        <InputField label="State" name="eventAddress.state" type="text" />
                    </div>
                    <button type="submit">Add Event</button>
                </Form>
            </Formik>
        </div>
    )
}