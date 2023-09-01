import React from 'react'
import {
    TextField,
    Button,
} from "@mui/material";
import {
    Controller,
    useFormContext,
} from "react-hook-form";
import ModalSellingButton from '../ModalSellingButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import "react-toastify/dist/";
// import 'react-toastify';

const LoginForm = () => {
    const { control, formState: { errors } } = useFormContext();
    const validateloginform = (value) => {
        let phonevalid = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/);
        let emailvalid = new RegExp(/\S+@\S+\.\S+/);

        if (phonevalid.test(value) || emailvalid.test(value)) {
            return true;
        }
        else {
            return "Email or phone number is not in a valid format.";
        }

    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSignin = () => {
        toast.success("Account is signed sucessfull");
        toast("Wow so easy!")
    }
    return (
        <>
            <Controller
                control={control}
                name="phoneNumber"
                rules={{
                    validate: validateloginform,
                }}
                render={({ field }) => (
                    <>
                        <TextField
                            id="phoneNumber"
                            label="Email or phone number"
                            variant="outlined"
                            placeholder="Enter Your Phone Number"
                            style={{ width: "100%" }}
                            margin="normal"
                            {...field}
                            error={Boolean(errors.phoneNumber)}
                            helperText={errors.phoneNumber?.message}
                        />
                    </>
                )}
            />
            <Controller
                control={control}
                name="password"
                rules={{
                    required: "Password is required",
                    pattern: {
                        value: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                        message: "(UpperCase, LowerCase, Number/SpecialChar and min 8 Chars)"
                    }
                }}
                render={({ field }) => (
                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        variant="outlined"
                        placeholder="Enter Your Password"
                        style={{ width: "100%" }}
                        margin="normal"
                        {...field}
                        error={Boolean(errors.password)}
                        helperText={errors.password?.message}
                    />
                )}
            />
            <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ width: "100%", marginTop: "10px" }}
                onClick={handleSignin}
            >Sign in</Button>
            <ToastContainer />
            <div className='sellingpage-login-form-description'>
                <p>By continuing, I agree to Dhiyodha Terms of Use & Privacy Policy</p>
            </div>

            <div className='sellingpage-login-newregister'>
                <p>New to Dhiyodha</p>
                <Button onClick={handleOpen}>Create your Dhiyodha account</Button>
                <ModalSellingButton handleClose={handleClose} open={open} />
            </div>
        </>
    )
}

export default LoginForm