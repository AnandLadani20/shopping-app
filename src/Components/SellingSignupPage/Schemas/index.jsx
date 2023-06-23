import * as Yup from "yup";

export const signUpSchema = Yup.object({
    select_profession:Yup.mixed().required('File is required'),
    select_categories:Yup.mixed().required('File is required'),
    pin_code: Yup.number().max(6).required("Please Enter the Pin code"),
    address:Yup.string().min(5).max(50).required("Please Enter the Address")

})