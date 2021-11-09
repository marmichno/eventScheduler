import * as Yup from "yup";

export const registerValidationSchema = Yup.object({
    name: Yup.string()
        .required("Name is required.")
        .max(20, "Must be 20 characters or less.")
        .min(4, "Must be at least 4 characters."),
    description: Yup.string()
        .max(1000, "Must be 1000 characters or less."),
    username: Yup.string()
        .required("Username is required.")
        .max(20, "Username must be 20 characters or less.")
        .min(4, "Username must be at least 4 characters."),
    password: Yup.string()
        .required("Password is required.")
        .max(20, "Password must be 20 characters or less.")
        .min(8, "Must be at least 8 characters")
        .matches(
            /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\.\,])/g,
            "Must contain one uppercase, one lowercase, one number and One Special Case Character"),
    repeatPassword: Yup.string()
        .required("Repeat your password.")
        .test('passwords-match', 'Passwords must match', function(value){
            return this.parent.password === value
        }),
    email: Yup.string()
        .required("Email is required.")
        .matches(
            /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
            "Please enter valid email adress"
        )

})