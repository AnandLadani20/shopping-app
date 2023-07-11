import React, { useState } from "react";
import {
    Typography,
    TextField,
    Button,
    Stepper,
    Step,
    StepLabel,
    Box
} from "@mui/material";

import {
    useForm,
    Controller,
    FormProvider,
    useFormContext,
} from "react-hook-form";
import SignaturePadCom from "./SignaturePadCom";




function getSteps() {
    return [
        "Mobile,Email & Face Verification",
        "Profession & Pick-up",
        "Business & Bank Detail",
        "Dashbord",
    ];
}
const BasicForm = () => {
    const { control, formState: { errors }, getValues } = useFormContext();
    return (
        <>


            <Controller
                control={control}
                name="phoneNumber"
                style={{position:"relative"}}
                rules={{
                    required: "Phone number is required.",
                    pattern: {
                        value: new RegExp(/^[0-9 ()+-]+$/),
                        message: "Not a valid phone number."
                    }
                }}
                render={({ field }) => (
                    <>
                    <TextField
                        id="phoneNumber"
                        label="Phone Number"
                        variant="outlined"
                        placeholder="Enter Your Phone Number"
                        style={{width:"100%"}}
                        margin="normal"
                        {...field}
                        error={Boolean(errors.phoneNumber)}
                        helperText={errors.phoneNumber?.message}
                        
                    />
                    <Button style={{position:"absolute",right:"4%",top:"6%"}}>Send OTP</Button>
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
                    <TextField
                        id="email"
                        label="E-mail"
                        variant="outlined"
                        placeholder="Enter Your E-mail Address"
                        style={{width:"100%"}}
                        margin="normal"
                        {...field}
                        error={Boolean(errors.emailAddress)}
                        helperText={errors.emailAddress?.message}
                    />
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
                        style={{width:"100%"}}
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
                        style={{width:"100%"}}
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
                rules={{
                    required: "Face verification is required",

                }}
                render={({ field }) => (
                    <label margin="normal"
                        style={{width:"100%",display: "block" }}
                       
                    >Face Verification
                        <TextField
                            id="faceverification"
                            // label="Face Verification"
                            type="file"
                            accept="image/png, image/jpeg"
                            variant="outlined"
                            style={{width:"100%",display: "block" }}
                        
                            // margin="normal"
                            {...field}
                            error={Boolean(errors.faceverification)}
                            helperText={errors.faceverification?.message}
                        />
                    </label>
                )}
            />
        </>
    );
};
const ContactForm = () => {
    const { control, formState: { errors } } = useFormContext();
    return (
        <>

            <Controller
                control={control}
                name="pincode"
                rules={{
                    required: "Pincode is required",
                    pattern: {
                        value: new RegExp(/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/),
                        message: "Pincode is not a valid"
                    }
                }}
                render={({ field }) => (
                    <TextField
                        id="pincode"
                        label="Pin Code "
                        variant="outlined"
                        placeholder="Enter Your City Pincode"
                        style={{width:"100%"}}
                        margin="normal"
                        {...field}
                        error={Boolean(errors.pincode)}
                        helperText={errors.pincode?.message}
                    />
                )}
            />
            <Controller
                control={control}
                name="address"
                rules={{
                    required: "Address is required",
                    minLength: {
                        value: 4,
                        message: "Address is min. 4 characters"
                    }
                }}
                render={({ field }) => (
                    <TextField
                        id="address"
                        label="Address"
                        variant="outlined"
                        placeholder="Enter Your Address"
                        style={{width:"100%"}}
                        margin="normal"
                        {...field}
                        error={Boolean(errors.address)}
                        helperText={errors.address?.message}
                    />
                )}
            />


        </>
    );
};
const PersonalForm = () => {
    const { control, formState: { errors } } = useFormContext();
    return (
        <>
            <Controller
                control={control}
                name="gstNumber"
                rules={{
                    required: "GST Number is required.",
                    pattern: {
                        value: new RegExp(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/),
                        message: "GST is not in a valid format."
                    }
                }}
                render={({ field }) => (
                    <TextField
                        id="gstNumber"
                        label="GST Number"
                        variant="outlined"
                        placeholder="Enter Your GST Number"
                        style={{width:"100%"}}
                        margin="normal"
                        {...field}
                        error={Boolean(errors.gstNumber)}
                        helperText={errors.gstNumber?.message}
                    />
                )}
            />

            <Controller
                control={control}
                name="businessName"
                rules={{
                    required: "Business Name is required",
                    minLength: {
                        value: 4,
                        message: "Business Name is min. 4 characters"
                    }
                }}
                render={({ field }) => (
                    <TextField
                        id="businessName"
                        label="Business Name"
                        variant="outlined"
                        placeholder="Enter Your Business Name"
                        style={{width:"100%"}}
                        margin="normal"
                        {...field}
                        error={Boolean(errors.businessName)}
                        helperText={errors.businessName?.message}
                    />
                )}
            />

            <Controller
                control={control}
                name="panNumber"
                rules={{
                    required: "PAN Number is required.",
                    pattern: {
                        value: new RegExp(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/),
                        message: "PAN is not in a valid format."
                    }
                }}
                render={({ field }) => (
                    <TextField
                        id="panNumber"
                        label="PAN Number"
                        variant="outlined"
                        placeholder="Enter Your PAN Number"
                        style={{width:"100%"}}
                        margin="normal"
                        {...field}
                        error={Boolean(errors.panNumber)}
                        helperText={errors.panNumber?.message}
                    />
                )}
            />

            <Controller
                control={control}
                name="businessType"
                rules={{
                    required: "Business Type is required",
                    minLength: {
                        value: 4,
                        message: "Business Type is min. 4 characters"
                    }
                }}
                render={({ field }) => (
                    <TextField
                        id="businessType"
                        label="Business Type"
                        variant="outlined"
                        placeholder="Enter Your Business Type"
                        style={{width:"100%"}}
                        margin="normal"
                        {...field}
                        error={Boolean(errors.businessType)}
                        helperText={errors.businessType?.message}
                    />
                )}
            />

            <Controller
                control={control}
                name="businessAddress"
                rules={{
                    required: "Business Address is required",
                    minLength: {
                        value: 4,
                        message: "Business Address is min. 4 characters"
                    }
                }}
                render={({ field }) => (
                    <TextField
                        id="businessAddress"
                        label="Business Address"
                        variant="outlined"
                        placeholder="Enter Your Business Address"
                        style={{width:"100%"}}
                        margin="normal"
                        {...field}
                        error={Boolean(errors.businessAddress)}
                        helperText={errors.businessAddress?.message}
                    />
                )}
            />


            <Box>
                <label margin="normal"
                    style={{width:"100%", display: "block"}}
                    
                >Signature Here
                </label>
                <SignaturePadCom />
            </Box>

            <Controller
                control={control}
                name="signatureUpload"
                rules={{
                    required: "Signature Upload is required",

                }}
                render={({ field }) => (
                    <label margin="normal"
                        style={{width:"100%",display: "block"}}
                        
                    >Signature Upload

                        <TextField
                            id="signatureUpload"
                            // label="Signature Upload"
                            type="file"
                            variant="outlined"
                            style={{width:"100%"}}

                            {...field}
                            error={Boolean(errors.signatureUpload)}
                            helperText={errors.signatureUpload?.message}
                        />
                    </label>
                )}
            />

            <Controller
                control={control}
                name="accountHolderName"
                rules={{
                    required: "Account Holder Name is required",
                    minLength: {
                        value: 2,
                        message: "Account Holder Name is min. 2 characters"
                    }
                }}
                render={({ field }) => (
                    <TextField
                        id="accountHolderName"
                        label="Account Holder Name"
                        variant="outlined"
                        placeholder="Enter Your Account Holder Name"
                        style={{width:"100%"}}
                        margin="normal"
                        {...field}
                        error={Boolean(errors.accountHolderName)}
                        helperText={errors.accountHolderName?.message}
                    />
                )}
            />

            <Controller
                control={control}
                name="accountHolderNumber"
                rules={{
                    required: "Account Number is required.",
                    pattern: {
                        value: new RegExp(/^[0-9]{9,18}$/),
                        message: "Account Number is not in a valid."
                    }
                }}
                render={({ field }) => (
                    <TextField
                        id="accountHolderNumber"
                        label="Account Holder Number"
                        variant="outlined"
                        placeholder="Enter Your Account Holder Number"
                        style={{width:"100%"}}
                        margin="normal"
                        {...field}
                        error={Boolean(errors.accountHolderNumber)}
                        helperText={errors.accountHolderNumber?.message}
                    />
                )}
            />

            <Controller
                control={control}
                name="ifscCode"
                rules={{
                    required: "IFSC Code is required.",
                    pattern: {
                        value: new RegExp(/^[A-Z]{4}0[A-Z0-9]{6}$/),
                        message: "IFSC Code is not in a valid ."
                    }
                }}
                render={({ field }) => (
                    <TextField
                        id="ifscCode"
                        label=" IFSC Code"
                        variant="outlined"
                        placeholder="Enter Your IFSC Code "
                        style={{width:"100%"}}
                        margin="normal"
                        {...field}
                        error={Boolean(errors.ifscCode)}
                        helperText={errors.ifscCode?.message}
                    />
                )}
            />

            <Controller
                control={control}
                name="bankName"
                rules={{
                    required: "Bank Name is required",
                    minLength: {
                        value: 2,
                        message: "Bank Name is min. 2 characters"
                    }
                }}
                render={({ field }) => (
                    <TextField
                        id="bankName"
                        label="Bank Name"
                        variant="outlined"
                        placeholder="Enter Your Bank Name"
                        style={{width:"100%"}}
                        margin="normal"
                        {...field}
                        error={Boolean(errors.bankName)}
                        helperText={errors.bankName?.message}
                    />
                )}
            />

            <Controller
                control={control}
                name="branchName"
                rules={{
                    required: "Branch Name is required",
                    minLength: {
                        value: 2,
                        message: "Branch Name is min. 2 characters"
                    }
                }}
                render={({ field }) => (
                    <TextField
                        id="branchName"
                        label="Branch Name"
                        variant="outlined"
                        placeholder="Enter Your Bank Branch Name"
                        style={{width:"100%"}}
                        margin="normal"
                        {...field}
                        error={Boolean(errors.branchName)}
                        helperText={errors.branchName?.message}
                    />
                )}
            />

            <Controller
                control={control}
                name="cityName"
                rules={{
                    required: "City Name is required",
                    minLength: {
                        value: 2,
                        message: "City Name is min. 2 characters"
                    }
                }}
                render={({ field }) => (
                    <TextField
                        id="cityName"
                        label="City"
                        variant="outlined"
                        placeholder="Enter Your City Name"
                        style={{width:"100%"}}
                        margin="normal"
                        {...field}
                        error={Boolean(errors.cityName)}
                        helperText={errors.cityName?.message}
                    />
                )}
            />

            <Controller
                control={control}
                name="stateName"
                rules={{
                    required: "State Name is required",
                    minLength: {
                        value: 2,
                        message: "State Name is min. 2 characters"
                    }
                }}
                render={({ field }) => (
                    <TextField
                        id="stateName"
                        label="State"
                        variant="outlined"
                        placeholder="Enter Your State Name"
                        style={{width:"100%"}}
                        margin="normal"
                        {...field}
                        error={Boolean(errors.stateName)}
                        helperText={errors.stateName?.message}
                    />
                )}
            />


            <Controller
                control={control}
                name="checkUpload"
                rules={{
                    required: "Check Upload is required",

                }}
                render={({ field }) => (
                    <label margin="normal"
                        style={{width:"100%",display: "block"}}
                       
                    >Check Upload
                        <TextField
                            id="checkUpload"
                            // label="Check Upload"
                            type="file"
                            variant="outlined"
                            style={{width:"100%"}}
                            // margin="normal"
                            {...field}
                            error={Boolean(errors.checkUpload)}
                            helperText={errors.checkUpload?.message}
                        />
                    </label>
                )}
            />

        </>
    );
};
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
                        style={{width:"100%"}}
                        
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
                        style={{width:"100%"}}
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
                        style={{width:"100%"}}
                        margin="normal"
                        {...field}
                    />
                )}
            />
        </>
    );
};

function getStepContent(step) {
    switch (step) {
        case 0:
            return <BasicForm />;

        case 1:
            return <ContactForm />;
        case 2:
            return <PersonalForm />;
        case 3:
            return <PaymentForm />;
        default:
            return "unknown step";
    }
}

const LinaerStepper = () => {
    //   const classes = useStyles();
    const methods = useForm({
        defaultValues: {
            phoneNumber: "",
            emailAddress: "",
            cardNumber: "",
            cardMonth: "",
            cardYear: "",
            pincode: "",
            password: "",
            confirmPassword: "",
            faceverification:[],
            address: "",
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
        },
    });
    const [activeStep, setActiveStep] = useState(0);
    const [skippedSteps, setSkippedSteps] = useState([]);
    const steps = getSteps();

    const isStepFailed = () => {
        // console.log(methods.formState.errors)
        return Boolean(Object.keys(methods.formState.errors).length)
    }

    const isStepOptional = (step) => {
        return step === 1 || step === 2;
    };

   

    const handleNext = (data) => {

        console.log(data);
        if (activeStep === steps.length - 1) {
            fetch("https://jsonplaceholder.typicode.com/comments")
                .then((data) => data.json())
                .then((res) => {
                    console.log(res);
                    setActiveStep(activeStep + 1);
                });
        } else {
            setActiveStep(activeStep + 1);
            setSkippedSteps(
                skippedSteps.filter((skipItem) => skipItem !== activeStep)
            );
        }
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };



    // const onSubmit = (data) => {
    //   console.log(data);
    // };
    return (
        <div>
            <Stepper alternativeLabel activeStep={activeStep}>
                {steps.map((step, index) => {
                    const labelProps = {};
                    const stepProps = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = (
                            <Typography
                                variant="caption"
                                align="center"
                                style={{ display: "block" }}
                            >
                                optional
                            </Typography>
                        );
                    }

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
                        <form onSubmit={methods.handleSubmit(handleNext)} style={{position:"relative"}}>
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
