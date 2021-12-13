import * as Yup from "yup";

export const addNewEventValidationSchema = Yup.object({
    name: Yup.string()
        .required("Name is required.")
        .max(20, "Must be 20 characters or less.")
        .min(4, "Must be at least 4 characters."),
    description: Yup.string()
        .min(20, "Must be at least 20 characters or less.")
        .max(1000, "Must be 1000 characters or less."),
    dateFrom: Yup.string()
        .required("Starting date is required."),
    timeFrom: Yup.string()
        .required("Starting time is required"),
    dateTo: Yup.string()
        .required("Ending date is required"),
    timeTo: Yup.string()
        .required("Ending time is required"),
    eventAvailabilityType: Yup.string()
        .required("Choose if event should be public or private"),
    maxNumberOfParticipants: Yup.number()
        .required("Number of participants is required")
        .min(1, "Must have atleast 1 participant"),
    houseNumber: Yup.string()
        .required("House number is required"),
    street: Yup.string()
        .required("Street is required"),
    city: Yup.string()
        .required("City is required"),
    state: Yup.string()
        .required("State is required")

})