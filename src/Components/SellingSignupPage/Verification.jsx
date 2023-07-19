
import React from "react";
import { useState } from 'react'
import {
    TextField,
    Button,

} from "@mui/material";

import {
    Controller,
    useFormContext,
} from "react-hook-form";
import OtpInput from 'otp-input-react';
import toast from 'react-hot-toast';
;


const Verification = () => {
    const [verifyotp, setVerifyOtp] = useState("");
    const [showverify, setShowVerify] = useState(false)
    const [showemailverify, setShowEmailVerify] = useState(false)
    const [verifyemailotp, setVerifyEmailOtp] = useState("");
    const { control, formState: { errors }, getValues, } = useFormContext();




    const handleSendOTP = async (data) => {
        // console.log(data)
        setShowVerify(true)
        const number = data.value;

        const url = `https://swift-boats-bow.loca.lt/common/general/sendOtp?contactNumber=${number}&countryCode=91`;
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: [],
            });

            if (response.ok) {
                console.log("OTP sent successfully");
                toast.success('OTP sent successfully!')
            }
            if (response) {
                console.log(response)
            }
            else {
                throw new Error("Failed to send OTP");
            }
        } catch (error) {
            console.log(error, "error");
        }
    };

    const handleVerifyOTP = async (otp, data) => {

        const number2 = data.value
        console.log(number2);
        console.log(otp)

        const url = `https://swift-boats-bow.loca.lt/common/general/verifyOtp?countryCode=91&contactNumber=${number2}&otp=${otp}`;
        try {
            await fetch(url, {
                method: 'POST',
                headers: [],
            })
                .then((res) => res.json())
                .then((val) => {
                    console.log(val)
                    if (val.code === 20404) {
                        console.log("Failed to verify OTP")
                    }
                    if (val.valid === true) {
                        console.log("otp is verified")
                    }

                })

        } catch (error) {
            console.log(error, "error");
        }
    }

    const handleEmailOTP = async (data) => {

        const email = data.value;
        setShowEmailVerify(true)


        const url = `https://swift-boats-bow.loca.lt/common/general/sendOtpForVerifyEmail?email=${email}`;
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: [],
            });

            if (response.ok) {
                console.log("OTP sent in Email successfully");
            }
            if (response) {
                console.log(response)
            }
            else {
                throw new Error("Failed to send OTP");
            }
        } catch (error) {
            console.log(error, "error");
        }
    }

    const handleVerifyEmail = async (datas, otpp) => {
        const emails = datas.value;
        console.log(datas)
        const num = parseInt(otpp);

        const url = `https://swift-boats-bow.loca.lt/common/general/verifyEmailOtp?email=${emails}&otp=${num}`;
        try {
            await fetch(url, {
                method: 'POST',
                headers: [],
            })
                .then((res) => res.json())
                .then((val) => {
                    console.log(val.result)
                })

        } catch (error) {
            console.log(error, "error");
        }
        console.log(typeof (num))
        console.log(typeof (emails))
    }

    const handleFaceVeri = async () => {
        const url = `https://swift-boats-bow.loca.lt/common/general/captureFace`;


        await fetch(url, {
            method: 'POST',
            headers: [],
        })
            .then((res) => res.json())
            .then((face) => {
                console.log(face)
            })
        // .then((val)=> {
        //    console.log(Boolean(val))
        // })
    }
    return (
        <>

            <Controller
                control={control}
                name="phoneNumber"
               
                rules={{
                    required: "Phone number is required.",
                    pattern: {
                        value: new RegExp(/^[0-9 ()+-]+$/),
                        message: "Not a valid phone number."
                    }
                }}
                render={({ field }) => (
                    <>
                        <div  style={{ position: "relative" }}>
                            <TextField
                                id="phoneNumber"
                                label="Phone Number"
                                variant="outlined"
                                placeholder="Enter Your Phone Number"
                                style={{ width: "100%" }}
                                margin="normal"
                                {...field}
                                error={Boolean(errors.phoneNumber)}
                                helperText={errors.phoneNumber?.message}

                            />
                            {
                                field.value.length === 10 ? <Button style={{ position: "absolute", right: "4%", top: "25%" }} type="button" onClick={() => handleSendOTP({ ...field })}>Send OTP</Button> : ""
                            }

                            {
                                showverify ? (<><OtpInput OTPLength={6} otpType="number" disabled={false} value={verifyotp} onChange={setVerifyOtp} autoFocus classname="border border-primary"></OtpInput>
                                    <Button style={{ position: "absolute", right: "4%", top: "75%" }} type="button" onClick={() => handleVerifyOTP(verifyotp, { ...field })}>Verfy OTP</Button>
                                </>) : (<></>)
                            }


                        </div>
                    </>
                )}

            />



            <Controller
                control={control}
                name="emailAddress"

                rules={{
                    required: "Email field is required.",
                    pattern: {
                        value: new RegExp(/\S+@\S+\.\S+/),
                        message: "Email is not in a valid format."
                    }
                }}
                render={({ field }) => (
                    <>
                        <div style={{ position: "relative" }}>
                            <TextField
                                id="email"
                                label="E-mail"
                                variant="outlined"
                                placeholder="Enter Your E-mail Address"
                                style={{ width: "100%" }}
                                margin="normal"
                                {...field}
                                error={Boolean(errors.emailAddress)}
                                helperText={errors.emailAddress?.message}
                            />
                            {
                                !errors.emailAddress?.message ? <Button style={{ position: "absolute", right: "4%", top: "25%" }} type="button" onClick={() => handleEmailOTP({ ...field })}>Send Email</Button> : ""
                            }
                            {
                                showemailverify ? (<><OtpInput OTPLength={6} otpType="number" disabled={false} value={verifyemailotp} onChange={setVerifyEmailOtp} autoFocus classname="border border-primary"></OtpInput>
                                    <Button style={{ position: "absolute", right: "4%", top: "75%" }} type="button" onClick={() => handleVerifyEmail({ ...field }, verifyemailotp)}>Verfy Email OTP</Button></>) : (<></>)
                            }
                        </div>
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
            <Controller
                control={control}
                name="confirmPassword"
                rules={{
                    required: "Confirm password is required",
                    validate: value => value === getValues("password") || "Confirm Password should be match with password."
                }}
                render={({ field }) => (
                    <TextField
                        id="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        variant="outlined"
                        placeholder="Enter Your Confirm Password"
                        style={{ width: "100%" }}
                        margin="normal"
                        {...field}
                        error={Boolean(errors.confirmPassword)}
                        helperText={errors.confirmPassword?.message}
                    />
                )}
            />

            <Controller
                control={control}
                name="faceverification"
                rules={{ required: 'Face verification is required' }}
                render={({ field }) => (
                    <>
                        <input
                            type="file"
                            style={{ width: "100%", display: "block", marginTop: "20px" }}
                            onChange={(e) => field.onChange(e.target.files[0])}

                        // style={{ display: 'none' }}
                        />
                        <label style={{ display: "block" }} htmlFor="faceverification">
                            <TextField
                                id="faceverification"
                                type="text"
                                variant="filled"
                                style={{ width: "100%", marginTop: "10px" }}
                                value={field.value ? field.value.name : ''}
                                InputProps={{
                                    readOnly: true,
                                }}
                                error={Boolean(field.error)}
                                helperText={field.error ? field.error.message : ''}

                            />
                        </label>
                    </>
                )}
            />
            <Button type="button" onClick={handleFaceVeri}>Face Verify</Button>
        </>
    )
}

export default Verification