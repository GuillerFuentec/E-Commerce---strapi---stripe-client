import * as Yup from "yup";

export function initialValues() {
    return {
        name: '',
        email: "",
        username: "",
        passwaord: "",
    };
}

export function validationSchema() {
    return Yup.object({
        email: Yup.string().email("invalid email").required(true),
        username: Yup.string().required(true),
        name: Yup.string().required(true),
        password: Yup.string().required(true),
    });
}