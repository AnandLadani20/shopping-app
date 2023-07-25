
import { useEffect, useRef, useState } from 'react'
import SignaturePad from 'signature_pad';
import {
    TextField,
    Button,
} from "@mui/material";
import {
    Controller,
    useFormContext,
} from "react-hook-form";
import newCommonUrl from "./ApiUrl";


const BusinessDetail = ({ setSignUpload, setCheckValue }) => {
    const { control, formState: { errors } } = useFormContext();
    const [drawsign, SetDrawsign] = useState("")

    const canvasRef = useRef(null);
    const signaturePadRef = useRef(null);


    useEffect(() => {
        const canvas = canvasRef.current;
        signaturePadRef.current = new SignaturePad(canvas);
    }, []);

    const clearSignature = () => {
        signaturePadRef.current.clear();
    };



    const handlesubmitSignature = async (signdata) => {
        const pngDataUrl = signaturePadRef.current.toDataURL("image/jpeg");


        const convertDataURItoBlob = (dataURI) => {
            const encodedImage = dataURI.split(',')[1];
            const decodedImage = atob(encodedImage);
            const arrayBuffer = new ArrayBuffer(decodedImage.length);
            const uint8Array = new Uint8Array(arrayBuffer);

            for (let i = 0; i < decodedImage.length; i++) {
                uint8Array[i] = decodedImage.charCodeAt(i);
            }

            // Create a Blob from the Uint8Array
            return new Blob([uint8Array], { type: 'image/jpeg' });
        };

        // Usage example:
        const dataURI = pngDataUrl;
        const blob = convertDataURItoBlob(dataURI);
        console.log(blob);

        signdata.value = blob
        const url = `${newCommonUrl}/common/general/submitSignature`;
        SetDrawsign(blob)
        const formData = new FormData();
        formData.append('signature', signdata.value);

        await fetch(url, {
            method: 'POST',
            headers: [],
            body: formData
        })
            .then((res) => res.text())
            .then((sign) => {
                console.log(sign)
            })
    }


    const handleUploadCheck = async (checkdata) => {
        try {
            const url = `${newCommonUrl}/common/general/submitCheck`;
            const formData = new FormData();
            formData.append('check', checkdata.value);
            const options = {
                method: 'POST',
                header: [],
                body: formData,
            };

            const response = await fetch(url, options);
            if (response.ok) {
                const data = await response.text();
                console.log(data);
                setCheckValue(data)

            } else {
                console.error('Error uploading check:', response.statusText);
            }
        } catch (error) {
            console.error('Error uploading check:', error);
        }
    }

    const handleUploadSignature = async (signdata) => {
        console.log(signdata)

        // try {
        //     const url = `${newCommonUrl}/common/general/submitSignature`;
        //     const formData = new FormData();


        //     formData.append('signature', signdata.value);
        //     const options = {
        //         method: 'POST',
        //         header: [],
        //         body: formData,
        //     };

        //     const response = await fetch(url, options);
        //     if (response.ok) {
        //         const data = await response.text();
        //         console.log(data);
        //         setSignUpload(data)

        //     } else {
        //         console.error('Error uploading signature:', response.statusText);
        //     }
        // } catch (error) {
        //     console.error('Error uploading signature:', error);
        // }

    }
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
                        style={{ width: "100%" }}
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
                        style={{ width: "100%" }}
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
                        style={{ width: "100%" }}
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
                        style={{ width: "100%" }}
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
                        style={{ width: "100%" }}
                        margin="normal"
                        {...field}
                        error={Boolean(errors.businessAddress)}
                        helperText={errors.businessAddress?.message}
                    />
                )}
            />

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Controller
                control={control}
                name="signatureHere"
                rules={{
                    required: "Signature  is required",

                }}
                render={({ field }) => (
                    <>
                        <label margin="normal"
                            style={{ width: "100%", display: "block" }}
                        >Signature Here </label>
                        <canvas
                            ref={canvasRef}
                            max-width={600}
                            height={200}
                            style={{ border: '1px solid #ccc' }}
                        />
                        <Button variant="contained" type='button' style={{ marginLeft: "15px" }} margin="normal" onClick={clearSignature}>
                            Clear
                        </Button>
                        <TextField
                            id="signatureHere"
                            variant="outlined"
                            style={{ display: 'none' }}
                            {...field}

                        />
                        <Button type="button" style={{ display: "block" }} onClick={() => handlesubmitSignature({ ...field })}>Save</Button>
                    </>
                )}
            />
            <img src={drawsign} alt='signatueDraw' />

            <Controller
                control={control}
                name="signatureUpload"
                rules={{
                    required: "Signature Upload is required",

                }}
                render={({ field }) => (
                    <label margin="normal"
                        style={{ width: "100%", display: "block" }}

                    >Signature Upload
                        <input
                            type="file"
                            style={{ width: "100%", display: "block", marginTop: "20px" }}
                            onChange={(e) => field.onChange(e.target.files[0])}

                        />
                        <TextField
                            id="signatureUpload"
                            variant="filled"
                            type="text"
                            style={{ width: "100%", marginTop: "10px" }}

                            value={field.value ? field.value.name : ''}
                            InputProps={{
                                readOnly: true,
                            }}
                            error={Boolean(errors.signatureUpload)}
                            helperText={errors.signatureUpload?.message}
                        />

                        <Button type="button" onClick={() => handleUploadSignature({ ...field })}>Upload</Button>
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
                        style={{ width: "100%" }}
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
                        style={{ width: "100%" }}
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
                        style={{ width: "100%" }}
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
                        style={{ width: "100%" }}
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
                        style={{ width: "100%" }}
                        margin="normal"
                        {...field}
                        error={Boolean(errors.branchName)}
                        helperText={errors.branchName?.message}
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
                        style={{ width: "100%", display: "block" }}

                    >Check Upload
                        <input
                            type="file"
                            style={{ width: "100%", display: "block", marginTop: "20px" }}
                            onChange={(e) => field.onChange(e.target.files[0])}

                        />
                        <TextField
                            id="checkUpload"
                            variant="filled"
                            type="text"
                            style={{ width: "100%", marginTop: "10px" }}

                            value={field.value ? field.value.name : ''}
                            InputProps={{
                                readOnly: true,
                            }}
                            error={Boolean(errors.checkUpload)}
                            helperText={errors.checkUpload?.message}
                        />

                        <Button type="button" onClick={() => handleUploadCheck({ ...field })}>Upload</Button>
                    </label>
                )}
            />

        </>


    )
}

export default BusinessDetail