
import React from "react";
import { useState } from 'react'
import {
    TextField,
    Button,
} from "@mui/material";
// import { MuiOtpInput } from 'mui-one-time-password-input'
import {
    Controller,
    useFormContext,
} from "react-hook-form";
import InputLabel from '@mui/material/InputLabel';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import OtpInput from 'otp-input-react';
import toast from 'react-hot-toast';
import authService from './ApiUrl';



const Verification = ({ setRequirePhoneOtp }) => {
    const [verifyotp, setVerifyOtp] = useState("");
    const [showverify, setShowVerify] = useState(false)
    const [showemailverify, setShowEmailVerify] = useState(false)
    const [verifyemailotpp, setVerifyEmailOtpp] = useState("");
    const { control, formState: { errors }, getValues, } = useFormContext();
    const [selectedCountryCode, setSelectedCountryCode] = useState("");
    // ={ newCommonUrl }
    const handleSendOTP = async (data,datacode) => {

        setShowVerify(true)
        const number = data.value;
        // const code = datacode.value
        // const url = ;
        try {
            const response = await fetch(`${authService.newCommonUrl}/common/general/sendOtp?contactNumber=${number}&countryCode=${datacode}`, {
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

    const handleVerifyOTP = async (otp, data,code) => {
        const number2 = data.value
        // const countryCode2 = code.value
        console.log(number2);
        console.log(code);
        console.log(otp)
        const url = `${authService.newCommonUrl}/common/general/verifyOtp?countryCode=${code}&contactNumber=${number2}&otp=${otp}`;
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
                        setRequirePhoneOtp(false)
                    }
                    if (val.valid === true) {
                        console.log("otp is verified")
                        setRequirePhoneOtp(true)
                    }

                })
        } catch (error) {
            console.log(error, "error");
        }
    }

    const handleEmailOTP = async (data) => {

        const email = data.value;
        setShowEmailVerify(true)

        const makeEmail = email.replace("@", "%40")

        const url = `${authService.newCommonUrl}/common/general/sendOtpForVerifyEmail?email=${makeEmail}`;
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

    const handleVerifyEmail = async (otpp, datas) => {
        const emails = datas.value;

        const newEmail = emails.replace("@", "%40")
        console.log(newEmail)
        const num = otpp;
        console.log(num)

        const url = `${authService.newCommonUrl}/common/general/verifyEmailOtp?email=${newEmail}&otp=${num}`;
        try {
            const emailresponse = await fetch(url, {
                method: 'POST',
                headers: {
                    'authority': 'six-paths-start.loca.lt',
                    'accept': '*/*',
                    'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8,gu;q=0.7',
                    'cache-control': 'no-cache',
                    'content-length': '0',
                    'origin': 'https://localhost:3000',
                    'pragma': 'no-cache',
                    'referer': 'https://localhost:3000/',
                    'sec-ch-ua': '',
                    'Cookie': 'JSESSIONID=768F95D7F69DAAA91E74108F6B8A1C97',
                }

            })
            const val = await emailresponse.json()
            console.log(val)

        } catch (error) {
            console.log(error, "error");
        }
        console.log(url)
    }

    // const handleFaceVeri = async (facedata) => {
    //     const url = `${newCommonUrl}/common/general/captureFace`;


    //     await fetch(url, {
    //         method: 'POST',
    //         headers: [],
    //     })
    //         .then((res) => res.json())
    //         .then((face) => {
    //             console.log(face)
    //             facedata.value = face;
    //         })

    // }
    return (
        <>
            <div className="d-flex gap-2">
                <Controller
                    control={control}
                    name="firstName"
                    rules={{
                        required: "First Name is required",
                        minLength: {
                            value: 4,
                            message: "First Name is min. 2 characters"
                        }
                    }}
                    render={({ field }) => (
                        <TextField
                            id="firstName"
                            label="First Name"
                            variant="outlined"
                            className="textfield"
                            placeholder="Enter Your First Name"
                            style={{ width: "50%" }}
                            margin="normal"
                            {...field}
                            error={Boolean(errors.firstName)}
                            helperText={errors.firstName?.message}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="lastName"
                    rules={{
                        required: "Last Name is required",
                        minLength: {
                            value: 4,
                            message: "Last Name is min. 2 characters"
                        }
                    }}
                    render={({ field }) => (
                        <TextField
                            id="lastName"
                            label="Last Name"
                            variant="outlined"
                            placeholder="Enter Your Last Name"
                            style={{ width: "50%" }}
                            margin="normal"
                            {...field}
                            error={Boolean(errors.lastName)}
                            helperText={errors.lastName?.message}
                        />
                    )}
                />
            </div>
            {/* <Controller
                control={control}
                name="userName"
                rules={{
                    required: " UserName is required",
                    minLength: {
                        value: 4,
                        message: "UserName is min. 2 characters"
                    }
                }}
                render={({ field }) => (
                    <TextField
                        id="userName"
                        label="UserName"
                        variant="outlined"
                        placeholder="Enter Your UserName"
                        style={{ width: "40%" }}
                        margin="normal"
                        {...field}
                        error={Boolean(errors.userName)}
                        helperText={errors.userName?.message}
                    />
                )}
            /> */}


            {/* <Controller
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
                        <div style={{ position: "relative" }}>
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
                                field.value.length === 10 ? <Button style={{ position: "absolute", right: "3%", top: "22px" }} type="button" onClick={() => handleSendOTP({ ...field })}>Send OTP</Button> : ""
                            }

                            {
                                showverify ? (<>

                                </>) : (<></>)
                            }


                            <Controller
                                control={control}
                                name="phoneOtp"

                                rules={{
                                    required: "Phone number Otp is required.",
                                    minLength: {
                                        value: 2,
                                        message: "Country Name is min. 2 characters"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        {/* <MuiOtpInput
                                            id="phoneOtp"
                                            label="phoneOtp "
                                            variant="outlined"
                                            placeholder="Enter Your Phone phoneOtp"
                                            // style={{ width: "100%" }}
                                            margin="normal"
                                            {...field}
                                            error={Boolean(errors.phoneOtp)}
                                            helperText={errors.phoneOtp?.message}
                                            length={6}
                                        /> */}
            {/* <OtpInput OTPLength={6} otpType="number" disabled={false} value={verifyotp} style={{ margin: "10px 0px" }} onChange={setVerifyOtp} autoFocus classname="border border-primary"></OtpInput>
                                        <Button type="button" onClick={() => handleVerifyOTP(verifyotp, { ...field })}>Verfy OTP</Button>
                                    </>
                                )}
                            />

                        </div>
                    </>
                )}

            /> */}
            <div className="d-flex align-items-start" style={{ width: "100%", height: "100%" }}>
                <Controller
                    control={control}
                    name="countrycode"
                    rules={{
                        required: "countrycode is required",

                    }}
                    render={({ field }) => (
                        <>
                            <div style={{ width: "90px", marginRight: "10px", marginTop: "16px" }}>
                                <Select
                                    labelId="demo-simple-select-autowidth-label"
                                    id="countrycode-select"
                                    variant="outlined"
                                    style={{ width: "100%" }}
                                    displayEmpty
                                    {...field}
                                    error={Boolean(errors.countrycode)}
                                    helperText={errors.countrycode?.message}
                                    onChange={(e) => {
                                        setSelectedCountryCode(e.target.value); // Update selected country code
                                        field.onChange(e); // Notify Controller about the change
                                    }}
                                >

                                    <MenuItem value="">IN +91</MenuItem>
                                    <MenuItem value="91">IN +91</MenuItem>
                                </Select>
                                {/* <Button style={{ position: "absolute", right: "5%", top: "22px",display:"none" }} type="button" onClick={() => handleSendOTP({ ...field })}>Send OTP</Button> */}
                            </div>
                        </>
                    )}
                />
                <Controller
                    control={control}
                    name="phoneNumber"

                    rules={{
                        required: "Phone number is required.",
                        pattern: {
                            value: new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/),
                            message: "Not a valid phone number."
                        }
                    }}
                    render={({ field }) => (
                        <>
                            <div style={{ position: "relative", width: "calc(100% - 100px)" }}>
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
                                    field.value.length === 10 ? <Button style={{ position: "absolute", right: "5%", top: "22px" }} type="button" onClick={() => handleSendOTP({ ...field },selectedCountryCode)}>Send OTP</Button> : ""
                                }

                                {
                                    showverify ? (<><OtpInput OTPLength={6} otpType="number" disabled={false} value={verifyotp} style={{ margin: "10px 0px", marginLeft: "-100px" }} onChange={setVerifyOtp} autoFocus classname="border border-primary"></OtpInput>
                                        <Button type="button" style={{ marginLeft: "-100px" }} onClick={() => handleVerifyOTP(verifyotp, { ...field },selectedCountryCode)}>Verfy OTP</Button>
                                    </>) : (<></>)
                                }

                            </div>
                        </>
                    )}

                />
            </div>
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
                                !errors.emailAddress?.message ? <Button style={{ position: "absolute", right: "5%", top: "22px" }} type="button" onClick={() => handleEmailOTP({ ...field })}>Send Email</Button> : ""
                            }
                            {
                                showemailverify ? (<><OtpInput OTPLength={6} otpType="number" style={{ margin: "10px 0px" }} disabled={false} value={verifyemailotpp} onChange={setVerifyEmailOtpp} autoFocus classname="border border-primary"></OtpInput>
                                    <Button type="button" onClick={() => handleVerifyEmail(verifyemailotpp, { ...field })}>Verfy Email OTP</Button></>) : (<></>)
                            }
                        </div>
                    </>

                )}
            />
            <div className="d-flex gap-2">
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
                            style={{ width: "50%" }}
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
                            style={{ width: "50%" }}
                            margin="normal"
                            {...field}
                            error={Boolean(errors.confirmPassword)}
                            helperText={errors.confirmPassword?.message}
                        />
                    )}
                />
            </div>
            <div className="d-block" id="checkbx">
                <Controller
                    control={control}
                    name="termsandcondition"
                    rules={{
                        required: "terms and condition is required"
                    }}
                    render={({ field }) => (
                        <>

                            <div className="checkbox-container-verify">
                                <Checkbox
                                    {...field}
                                    color="primary"
                                />
                                <InputLabel htmlFor="termsandcondition">
                                    terms and condition...
                                </InputLabel>
                            </div>
                            {Boolean(errors.termsandcondition) && (
                                <div className="error-message">
                                    {errors.termsandcondition.message}
                                </div>
                            )}


                        </>
                    )}
                />
            </div>

            {/* <Controller
                control={control}
                name="faceverification"
                rules={{ required: 'Face verification is required' }}
                render={({ field }) => (
                    <>
                       <Button type="button" onClick={() => handleFaceVeri({...field})}>Face Verify</Button>

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
            /> */}

        </>
    )
}

export default Verification