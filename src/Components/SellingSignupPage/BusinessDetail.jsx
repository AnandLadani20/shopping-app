
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
import authService from './ApiUrl';


const BusinessDetail = ({ setSignUpload, setCheckValue }) => {
    const { control, formState: { errors } } = useFormContext();
    const [drawsign, setDrawsign] = useState(null)

    const canvasRef = useRef(null);
    const signaturePadRef = useRef(null);

    const validateSignatureUpload = (value) => {
        if (!drawsign && !value) {
            return "Please draw or upload a signature before saving.";
        }
        return true;
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Set the background color to white
        context.fillStyle = 'white';
        context.fillRect(0, 0, canvas.width, canvas.height);
        signaturePadRef.current = new SignaturePad(canvas);
    }, []);

    const clearSignature = () => {
        signaturePadRef.current.clear();
    };
    const handleSaveSignature = () => {

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

        // Create a new canvas with white background
        const newCanvas = document.createElement('canvas');
        newCanvas.width = canvasRef.current.width;
        newCanvas.height = canvasRef.current.height;
        const context = newCanvas.getContext('2d');
        context.fillStyle = 'white';
        context.fillRect(0, 0, newCanvas.width, newCanvas.height);

        // Draw the signature on the new canvas
        const signatureDataUrl = signaturePadRef.current.toDataURL('image/png');
        const signatureImage = new Image();
        signatureImage.onload = () => {
            context.drawImage(signatureImage, 0, 0);
            const jpegDataUrl = newCanvas.toDataURL('image/jpeg');

            // Convert the JPEG data URL to a Blob
            const blob = convertDataURItoBlob(jpegDataUrl);
            setDrawsign(blob);
        };
        signatureImage.src = signatureDataUrl;
    }


    const handlesubmitSignature = async (signdata) => {


        console.log(signdata)
        const url = `${authService.newCommonUrl}/common/general/submitSignature`;

        const formData = new FormData();
        formData.append('signature', signdata.value);
        try {


            const response = await fetch(url, {
                method: 'POST',
                headers: [],
                body: formData
            })
            const dataString = await response.text();
            const data = JSON.parse(dataString)
            console.log(data.url);
            setSignUpload(data.url)

        }
        catch (error) {
            console.error('Error uploading check:', error);
        }
    }


    const handleUploadCheck = async (checkdata) => {
        console.log(checkdata.value.name)
        try {
            const url = `${authService.newCommonUrl}/common/general/submitCheck`;
            const formData = new FormData();
            formData.append('check', checkdata.value);
            const options = {
                method: 'POST',
                header: [],
                body: formData,
            };

            const response = await fetch(url, options);
            if (response.ok) {
                const dataString = await response.text();
                const data = JSON.parse(dataString)
                console.log(data.url);
                setCheckValue(data.url)

            } else {
                console.error('Error uploading check:', response.statusText);
            }
        } catch (error) {
            console.error('Error uploading check:', error);
        }
    }

    const handleUploadSignature = async (signdata) => {
        console.log(signdata)

        try {
            const url = `${authService.newCommonUrl}/common/general/submitSignature`;
            const formData = new FormData();


            formData.append('signature', signdata.value);
            const options = {
                method: 'POST',
                header: [],
                body: formData,
            };

            const response = await fetch(url, options);
            if (response.ok) {
                const dataString = await response.text();
                const data = JSON.parse(dataString)
                console.log("signature upload data", data.url);
                setSignUpload(data.url)

            } else {
                console.error('Error uploading signature:', response.statusText);
            }
        } catch (error) {
            console.error('Error uploading signature:', error);
        }

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
                name="signatureUpload"
                rules={{
                    validate: validateSignatureUpload,

                }}
                render={({ field }) => (
                    <>
                        <label margin="normal" style={{ width: "100%", display: "block" }}>
              Signature Here
            </label>
            <canvas
              ref={canvasRef}
              max-width={600}
              height={200}
              style={{ border: '1px solid #ccc' }}
            />
            <Button variant="contained" type='button' style={{ marginLeft: "15px" }} margin="normal" onClick={clearSignature}>
              Clear
            </Button>
            <Button type="button" style={{ display: "block", marginTop: "10px" }} variant="contained" onClick={handleSaveSignature}>Save</Button>
            <Button type="button" style={{ display: "block" }} onClick={() => handlesubmitSignature({ ...field })}>Upload</Button>
            {/* Render the file input */}
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

                    </>
                )}
            />
 {/* Display the saved signature image if available */}
      {drawsign && <img src={URL.createObjectURL(drawsign)} alt="Saved Signature" />}

            {/* <Controller
                control={control}
                name="signatureUpload"
                rules={{
                    required: "Signature Upload is required",

                }}
                render={({ field }) => (
                    
                )}
            /> */}




            {/* <Controller
                control={control}
                name="signatureUpload"
                rules={{
                    validate: validateSignatureUpload, 
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
                        <Button type="button" style={{ display: "block",marginTop:"10px" }} variant="contained"  onClick={handlesaveSignature}>Save</Button>
                        <TextField
                            
                            variant="filled"
                            InputProps={{
                                readOnly: true,
                            }}
                            style={{ display: 'none' }}
                            value={ field.value = drawsign}
                              
                        />
                        <TextField
                            id="signatureUpload"
                            variant="filled"
                            InputProps={{
                                readOnly: true,
                            }}                           
                            value={field.value } 
                            error={Boolean(errors.signatureUpload)}
                            helperText={errors.signatureUpload?.message}
                            
                        />
                        <Button type="button" style={{ display: "block" }} onClick={() => handlesubmitSignature({ ...field })}>Save</Button>
                    </>
                )}
            />
         

            <Controller
                control={control}
                name="signatureUpload2"
                rules={{
                    validate: validateSignatureUpload, 
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
                            id="signatureUpload2"
                            variant="filled"
                            type="text"
                            style={{ width: "100%", marginTop: "10px" }}
                            value={field.value ? field.value.name : ''}
                            InputProps={{
                                readOnly: true,
                            }}
                            error={Boolean(errors.signatureUpload2)}
                            helperText={errors.signatureUpload2?.message}
                        />

                        <Button type="button" onClick={() => handleUploadSignature({ ...field })}>Upload</Button>
                    </label>
                )}
            /> */}

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