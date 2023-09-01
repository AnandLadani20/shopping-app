import React, { useState } from 'react'
import {
    Button,
    TextField,
} from "@mui/material";
import OtpInput from 'otp-input-react';
import {
    Controller,
    useFormContext,
} from "react-hook-form";




const LoginOtpVerify = ({setShowVerify}) => {
    const [verifyotp, setVerifyOtp] = useState("");
    const { control, formState: { errors } } = useFormContext();
    const handleVerifyOTP = async () => {

    }

    const handleNotReceiveOTP = () =>{
        setShowVerify("showTwoStepVerificaton")
    }
    return (
        <div>
            <div className='sellingpage-login-otpForm'>
                <h3 className='mt-2'>Two-Step Verification</h3>
                <p className='mt-1 mb-2'>For added security, please enter the one Time Password (OTP) that has been sent to phone number ending in 493</p>



                <Controller
                    control={control}
                    name="loginOtp"
                    rules={{
                        required: "OTP is required",

                    }}
                    render={({ field }) => (
                        <>


                            <OtpInput OTPLength={6} otpType="number" disabled={false} value={verifyotp} onChange={setVerifyOtp} autoFocus classname="border border-primary"></OtpInput>

                            <TextField
                                id="loginOtp"
                                variant="filled"
                                type="text"
                                style={{ display: "none" }}
                                value={field.value ? "" : verifyotp}
                                // {...field}
                                InputProps={{
                                    readOnly: true,
                                }}
                                error={Boolean(errors.checkUpload)}
                            />
                            {Boolean(errors.loginOtp) && (
                                <div className="error-message">
                                    {errors.loginOtp.message}
                                </div>
                            )}
                            <Button type="submit" variant='contained' className='mt-3' style={{ width: "100%" }} onClick={() => handleVerifyOTP}>Sign IN</Button>

                            <div className='sellingpage-login-notreceive-otp'>
                                <ul>
                                    <li><button type='button' className='border-0' onClick={handleNotReceiveOTP}>Didn't receive the OTP?</button></li>
                                </ul>
                            </div>


                        </>
                    )}
                />
            </div>
        </div>
    )
}

export default LoginOtpVerify