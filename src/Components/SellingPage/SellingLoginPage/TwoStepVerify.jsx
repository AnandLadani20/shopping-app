import React from 'react'
import {
    Controller,
    useFormContext,
} from "react-hook-form";
import {
    Button
} from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useNavigate } from 'react-router-dom';

const TwoStepVerify = ({setShowVerify}) => {
    const { control, formState: { errors } } = useFormContext();

   const handleSendOTPTwoStep = () =>{

   }
   const handleBackOtpVerify = ()=>{
    setShowVerify("show")
   }
   const navigate = useNavigate();
   const handleAccountRecoveryPage = () => {
       // Perform login logic
       // Redirect to the home page
       navigate('/AccountRecovery');
   };
    return (
        <div>
            <div className='sellingpage-login-notreceive-otpForm'>
                <h3 className='mt-2'>Two-Step Verification</h3>
                <p className='mt-1 mb-2'>Choose where to receive or generate the One Time Password(OTP)</p>

                <Controller
                    control={control}
                    name="loginOtpTwostep"
                    rules={{
                        required: "terms and condition is required"
                    }}
                    render={({ field }) => (
                        <>

                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="textSendOtp"
                                // name="loginOtpTwostep"
                                {...field}

                            >
                                <FormControlLabel value="textSendOtp" control={<Radio />} label="Text me at my number ending in 493" />
                                <FormControlLabel value="callSendOtp" control={<Radio />} label="Call me at my number ending in 493" />
                               
                            </RadioGroup>
                            {Boolean(errors.loginOtpTwostep) && (
                                <div className="error-message">
                                    {errors.loginOtpTwostep.message}
                                </div>
                            )}
                            <Button type="button" variant='contained' className='mt-3' style={{ width: "100%" }} onClick={() => handleSendOTPTwoStep}>Send OTP</Button>

                            <Button type="button" variant='contained' className='mt-3' style={{ width: "100%" }} onClick={handleBackOtpVerify}>Back</Button>
                         
                            <Button className='mt-3' onClick={handleAccountRecoveryPage}>Two-Step Verification Account Recovery</Button>

                        </>
                    )}
                />
            </div>
        </div>
    )
}

export default TwoStepVerify