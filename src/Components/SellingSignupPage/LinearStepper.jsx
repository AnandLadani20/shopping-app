import React from "react";
import { useState } from 'react'
import {
    Typography,
    TextField,
    Button,
    Stepper,
    Step,
    StepLabel,
} from "@mui/material";

import {
    useForm,
    Controller,
    FormProvider,
    useFormContext,
} from "react-hook-form";
import Profession from "./Profession";
import Verification from "./Verification";
import BusinessDetail from "./BusinessDetail";
import Verified from "./Verified";

import authService from './ApiUrl';

function getSteps() {
    return [
        "Mobile,Email & Face Verification",
        "Profession & Pick-up",
        "Business & Bank Detail",
        "Dashbord",
    ];
}

const PaymentForm = () => {
    const { control } = useFormContext();
    return (
        <>
            <Controller
                control={control}
                name="cardNumber"
                render={({ field }) => (
                    <TextField
                        id="cardNumber"
                        label="Card Number"
                        variant="outlined"
                        placeholder="Enter Your Card Number"
                        style={{ width: "100%" }}
                        margin="normal"
                        {...field}
                    />
                )}
            />
            <Controller
                control={control}
                name="cardMonth"
                render={({ field }) => (
                    <TextField
                        id="cardMonth"
                        label="Card Month"
                        variant="outlined"
                        placeholder="Enter Your Card Month"
                        style={{ width: "100%" }}
                        margin="normal"
                        {...field}
                    />
                )}
            />
            <Controller
                control={control}
                name="cardYear"
                render={({ field }) => (
                    <TextField
                        id="cardYear"
                        label="Card Year"
                        variant="outlined"
                        placeholder="Enter Your Card Year"
                        style={{ width: "100%" }}
                        margin="normal"
                        {...field}
                    />
                )}
            />
        </>
    );
};


const LinaerStepper = () => {

    const [signupload, setSignUpload] = useState("");
    const [checkvalue, setCheckValue] = useState("");
    const [requirephoneotp, setRequirePhoneOtp] = useState(false)

    const methods = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            userName: "",
            phoneNumber: "",
            emailAddress: "",
            cardNumber: "",
            cardMonth: "",
            cardYear: "",
            pincode: "",
            password: "",
            confirmPassword: "",
            // faceverification: "",
            addressLine1: "",
            addressLine2: "",
            countryName: "",
            gstNumber: "",
            businessName: "",
            panNumber: "",
            businessType: "",
            businessAddress: "",
            signatureUpload: "",
            accountHolderName: "",
            accountHolderNumber: "",
            ifscCode: "",
            bankName: "",
            branchName: "",
            cityName: "",
            stateName: "",
            checkUpload: "",
            profession: "",
            categories: "",
            signatureUpload2: "",

        },
    });


    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();
    const isStepFailed = () => {
        return Boolean(Object.keys(methods.formState.errors).length)
    }

    const handleNext = async (data) => {

        console.log(data);
        if (activeStep === steps.length - 1) {
            setActiveStep(activeStep + 1);
            const response1 = await fetch(`${authService.newCommonUrl}/common/service-provider-register/personal-details`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    [
                        {
                            "firstName": data.firstName,
                            "lastName": data.lastName,
                            "username": data.userName,
                            "password": data.password,
                            "confirmPassword": data.confirmPassword,
                            "email": data.emailAddress,
                            "contactNumber": data.phoneNumber,
                            "role": "ADMIN",
                            "faceImageUrl": "C:\\Software\\rashtra-sakhi\\dhiyodha-common\\faces\\face_1682070189846.jpg",
                            "agreed": "true",
                            "active": "true"
                        }
                    ]
                ),

            })
            const post1 = await response1.json();

            const data1 = await post1[0].userId
            console.log(post1)

            const response2 = await fetch(`${authService.newCommonUrl}/common/service-provider-register/register/business-and-bank-details`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Cookie": "JSESSIONID=7F34F1BAC1A98750B480367C2C5315CD"
                },
                body: JSON.stringify(
                    [
                        {
                            "accountType": "SAVINGS",
                            "userId": data1,
                            "legalName": "abcde",
                            "isDefault": "false",
                            "docSignature": signupload,
                            "gstNumberVerified": "true",
                            "defaultGstPercentage": "14",
                            "panNumber": data.panNumber,
                            "gstNumber": data.gstNumber,
                            "active": "true",
                            "gstNumberAvailable": "true",
                            "gstnumberRequired": "true",
                            "bankAccountHolderName": data.accountHolderName,
                            "bankAccountHolderNumber": data.accountHolderNumber,
                            "ifscCode": data.ifscCode,
                            "bankDetailsAvailable": "true",
                            "cancelledCheckUrl": checkvalue


                        }
                    ]
                ),

            })
            // "signaturalUrl" 
            const post2 = await response2.json();
            console.log("data2", post2)

            const response3 = await fetch(`${authService.newCommonUrl}/common/service-provider-register/business-and-bank-details?userId=${data1}`, {
                method: 'GET',
                headers: [],
            })

            const post3 = await response3.json();
            const data3 = await post3
            console.log("data3", data3)



            // fetch(`${authService.newCommonUrl}/common/address/saveAdress`, {
            //     method: 'POST',
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify(

            //             {
            //                 "addressLine1":data.addressLine1,
            //                 "addressLine2":data.addressLine2,
            //                 "city":data.cityName,
            //                 "state":data.stateName,
            //                 "country":data.countryName,
            //                 "pincode":data.pincode
            //             }

            //     ),
            // })
            //     .then((res) => res.json())
            //     .then((post5) => {
            //         console.log("data5",post5);
            //         // setActiveStep(activeStep + 1);
            //     })


            const response4 = await fetch(`${authService.newCommonUrl}/common/service-provider-register/register/professional-details`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    {

                        "userId": data1,
                        "professionId": [data.profession],
                        "categoryId": data.categories,
                        "address": {
                            "addressLine1": data.addressLine1,
                            "addressLine2": data.addressLine2,
                            "city": data.cityName,
                            "state": data.stateName,
                            "country": data.countryName,
                            "pincode": data.pincode
                        }
                    }

                ),

            })
            const post4 = await response4.json();
            const data4 = await post4
            console.log("data4", data4);

            setActiveStep(activeStep + 1);
        }
        // else if(activeStep === 0) {

        //     requirephoneotp && (setActiveStep(activeStep + 1))


        // } 
        else {

            setActiveStep(activeStep + 1);

        }
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    function getStepContent(step) {
        switch (step) {
            case 0:
                return <Verification setRequirePhoneOtp={setRequirePhoneOtp} />;

            case 1:
                return <Profession methods={methods} />;
            case 2:
                return <BusinessDetail setSignUpload={setSignUpload} setCheckValue={setCheckValue} />;
            case 3:
                return <Verified />;
            default:
                return "unknown step";
        }
    }


    return (
        <div>
            <Stepper alternativeLabel activeStep={activeStep}>
                {steps.map((step, index) => {
                    const labelProps = {};
                    const stepProps = {};

                    if (isStepFailed() && activeStep === index) {
                        labelProps.error = true;
                    }

                    return (
                        <Step {...stepProps} key={index}>
                            <StepLabel {...labelProps}>{step}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>

            {activeStep === steps.length ? (
                <Typography variant="h3" align="center">
                    Thank You
                </Typography>
            ) : (
                <>
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(handleNext)} style={{ position: "relative" }}>
                            {getStepContent(activeStep)}

                            <Button
                                style={{ marginTop: "10px" }}
                                disabled={activeStep === 0}
                                onClick={handleBack}
                            >
                                back
                            </Button>

                            <Button
                                style={{ marginTop: "10px", marginLeft: "10px" }}
                                variant="contained"
                                color="primary"
                                // onClick={handleNext}
                                type="submit"
                            >
                                {activeStep === steps.length - 1 ? "Finish" : "Next"}
                            </Button>
                        </form>
                    </FormProvider>
                </>
            )}
        </div>
    );
};

export default LinaerStepper;
