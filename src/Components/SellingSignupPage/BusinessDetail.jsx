
import { useEffect, useRef, useState } from 'react'
import SignaturePad from 'signature_pad';
import {
    TextField,
    Button,

} from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import {
    Controller,
    useFormContext,
} from "react-hook-form";
import authService from './../../Config/ApiUrl';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const BusinessDetail = ({ setSignUpload, setCheckValue }) => {
    const { control, formState: { errors }, getValues, setValue ,watch} = useFormContext();
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
            console.log("blob", blob)
            setValue("signatureUpload", blob)
        };
        signatureImage.src = signatureDataUrl;

    }
    const handlesubmitSignature = async (signdata) => {


        console.log("drawSignData", signdata)
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
        console.log("signData", signdata)
        // setValue("signatureUpload", signdata.value)

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
    const LightTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: theme.palette.common.white,
            color: 'rgba(0, 0, 0, 0.87)',
            boxShadow: theme.shadows[1],
            fontSize: 11,
        },
    }));

    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const gstNumber = watch("gstNumber");
    const panNumber = watch("panNumber");
    const businessName = watch("businessName");
    const businessType = watch("businessType");
    const addressProof = watch("addressProof");
    const signatureUpload = watch("signatureUpload");
// console.log(errors)
    useEffect(() => {
       
        if (gstNumber && panNumber && businessName && businessType && addressProof && signatureUpload) {
            // All conditions are met, so setExpanded to false and update the state
            setExpanded(false);
            console.log("OK");
        }
    }, [gstNumber,panNumber,businessName,businessType,addressProof,signatureUpload]);
// console.log("render")
// console.log(Boolean(errors.gstNumber))
    // useEffect(() => {
       
    //     if (Boolean(errors.gstNumber) && Boolean(errors.panNumber) && Boolean(errors.businessName)) {
    //         // All conditions are met, so setExpanded to false and update the state
    //         setExpanded(true);
    //         console.log("OK");
    //     }
    //     else{
    //         setExpanded(false);
    //     }
    // }, [errors.gstNumber,errors.panNumber,errors.businessName]);

    return (
        <>

            <Accordion className='mt-3 rounded-top' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    // expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                    className='py-2'
                    style={{ backgroundColor: "#F3F3F3" }}
                >
                    <Typography>Business Details</Typography>
                </AccordionSummary>
                <AccordionDetails>


                    <div className='d-flex flex-md-row flex-column gap-md-2'>
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
                                <>
                                    <div style={{ width: "50%" }}>
                                        <TextField
                                            id="gstNumber"
                                            label="GST Number"
                                            variant="outlined"
                                            placeholder="Enter Your GST Number"
                                            className='w-100 w-md-50'
                                            // style={{ width: "50%" }}
                                            margin="normal"
                                            {...field}
                                            error={Boolean(errors.gstNumber)}
                                        // helperText={errors.gstNumber?.message}
                                        />
                                        {Boolean(errors.gstNumber) && (
                                            <div className="error-message">
                                                {errors.gstNumber?.message}
                                            </div>
                                        )}
                                    </div>
                                </>
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
                                <div style={{ width: "50%" }}>
                                    <TextField
                                        id="panNumber"
                                        label="PAN Number"
                                        variant="outlined"
                                        placeholder="Enter Your PAN Number"
                                        className='w-100 w-md-50'
                                        // style={{ width: "50%" }}
                                        margin="normal"
                                        {...field}
                                        error={Boolean(errors.panNumber)}
                                    // helperText={errors.panNumber?.message}
                                    />
                                    {Boolean(errors.panNumber) && (
                                        <div className="error-message">
                                            {errors.panNumber?.message}
                                        </div>
                                    )}
                                </div>
                            )}
                        />
                    </div>
                    <div className='d-flex gap-2'>
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
                                <div style={{ width: "50%" }}>
                                    <TextField
                                        id="businessName"
                                        label="Business Name"
                                        variant="outlined"
                                        placeholder="Enter Your Business Name"
                                        style={{ width: "100%" }}
                                        margin="normal"
                                        {...field}
                                        error={Boolean(errors.businessName)}
                                    // helperText={errors.businessName?.message}
                                    />
                                    {Boolean(errors.businessName) && (
                                        <div className="error-message">
                                            {errors.businessName?.message}
                                        </div>
                                    )}
                                </div>
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
                                <div style={{ width: "50%" }}>
                                    <TextField
                                        id="businessType"
                                        label="Business Type"
                                        variant="outlined"
                                        placeholder="Enter Your Business Type"
                                        style={{ width: "100%" }}
                                        margin="normal"
                                        {...field}
                                        error={Boolean(errors.businessType)}
                                    // helperText={errors.businessType?.message}
                                    />
                                    {Boolean(errors.businessType) && (
                                        <div className="error-message">
                                            {errors.businessType?.message}
                                        </div>
                                    )}
                                </div>
                            )}
                        />
                    </div>


                    <div className='w-100 w-md-50 d-flex flex-column gap-1 addressProofArea'>
                        <LightTooltip title="Require one of them : AdharCard,PassPort,Driving Licence,Light Bill,Bank PassBook" arrow>
                            <div className='ms-2 d-flex align-items-center gap-1'><p style={{ cursor: "pointer" }}>Upload Address Proof</p>
                           
                            
                            </div>
                        </LightTooltip>
                        <Controller
                            control={control}
                            name="addressProof"
                            rules={{
                                required: "Address Proof  is required",

                            }}
                            render={({ field }) => (
                                <>
                                    <div className='d-flex p-1'>
                                        <div className='adaddressProof-uploadArea' onClick={() => document.getElementById("file-input").click()}>
                                            <p>Upload a File</p>
                                            <span className='fileUploadIcon'>upload icon</span>
                                            {/* <FaUpload className='fileUploadIcon' /> */}
                                        </div>

                                        {/* <Button
                                            type="button"
                                            size="small"

                                            variant="contained"
                                            onClick={() => document.getElementById("file-input").click()}
                                        >

                                            Upload
                                        </Button> */}
                                        <input
                                            id="file-input"
                                            type="file"
                                            style={{ display: "none" }}
                                            onChange={(e) => field.onChange(e.target.files[0])}
                                        />
                                        <TextField
                                            id="addressProof"
                                            variant="standard"
                                            type="text"
                                            style={{ display: "block" }}
                                            value={field.value ? field.value.name : "No file chosen"}
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                        />
                                    </div>
                                    {Boolean(errors.addressProof) && (
                                        <div className="error-message mt-1 mt-lg-0">
                                            {errors.addressProof.message}
                                        </div>
                                    )}
                                </>
                            )}
                        />
                    </div>


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
                                    style={{ border: '1px solid #ccc', display: "inline-block", verticalAlign: "top", marginRight: "10px", marginBottom: "10px" }}
                                />
                                {drawsign && <img src={URL.createObjectURL(drawsign)} style={{ display: "inline-block" }} alt="Saved Signature" />}
                                <div>
                                    <Button variant="contained" size="small" type='button' style={{ display: "inline-block" }} margin="normal" onClick={clearSignature}>
                                        Clear
                                    </Button>
                                    <Button type="button" size="small" style={{ display: "inline-block", marginLeft: "10px" }} variant="contained" onClick={handleSaveSignature}>Save</Button>
                                    <Button type="button" variant="contained" size="small" style={{ display: "inline-block", marginLeft: "10px" }} onClick={() => handlesubmitSignature({ ...field })}>Upload</Button>
                                </div>
                                {/* Render the file input */}
                                <p className='mt-2'>OR</p>
                                <p className='mt-2'>Signature Upload</p>
                                <div className='d-flex align-items-center mt-2'>
                                    <input
                                        type="file"
                                        className='signuploadbusiness'
                                        onChange={(e) => field.onChange(e.target.files[0])}
                                    />
                                    <TextField
                                        id="signatureUpload"
                                        variant="filled"
                                        type="text"
                                        style={{ width: "25%", marginTop: "10px", display: "none" }}
                                        value={field.value ? field.value.name : ''}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        error={Boolean(errors.signatureUpload)}
                                    // helperText={errors.signatureUpload?.message}
                                    />
                                    <div>
                                        <Button type="button" variant="contained" size="small" className='signaturebtnstyle' style={{ marginLeft: "15px" }} onClick={() => handleUploadSignature({ ...field })}>Upload</Button>
                                    </div>
                                </div>
                                {Boolean(errors.signatureUpload) && (
                                    <div className="error-message">
                                        {errors.signatureUpload.message}
                                    </div>
                                )}
                            </>
                        )}
                    />
                    {/* Display the saved signature image if available */}


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
                </AccordionDetails>
            </Accordion>

            <Accordion className='mt-3 rounded-top' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    // expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                    className='py-2'
                    style={{ backgroundColor: "#F3F3F3" }}
                >
                    <Typography>Bank Details</Typography>
                </AccordionSummary>
                <AccordionDetails>
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
                            <>
                                <TextField
                                    id="accountHolderName"
                                    label="Account Holder Name"
                                    variant="outlined"
                                    placeholder="Enter Your Account Holder Name"
                                    style={{ width: "100%" }}
                                    margin="normal"
                                    {...field}
                                    error={Boolean(errors.accountHolderName)}
                                // helperText={errors.accountHolderName?.message}
                                />
                                {Boolean(errors.accountHolderName) && (
                                    <div className="error-message mt-1 mt-lg-0">
                                        {errors.accountHolderName?.message}
                                    </div>
                                )}
                            </>
                        )}
                    />
                    <div className='d-flex  flex-column flex-md-row gap-md-2'>
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
                                <div style={{ width: "50%" }}>
                                    <TextField
                                        id="accountHolderNumber"
                                        label="Bank Account Number"
                                        variant="outlined"
                                        placeholder="Enter Your Bank Account Number"
                                        className='w-100 w-md-50'
                                        margin="normal"
                                        {...field}
                                        error={Boolean(errors.accountHolderNumber)}
                                    // helperText={errors.accountHolderNumber?.message}
                                    />
                                    {Boolean(errors.accountHolderNumber) && (
                                        <div className="error-message mt-1 mt-lg-0">
                                            {errors.accountHolderNumber?.message}
                                        </div>
                                    )}
                                </div>
                            )}
                        />
                        <Controller
                            control={control}
                            name="confirmbankAccountNo"
                            rules={{
                                required: "Confirm Account Number is required.",
                                validate: value => value === getValues("accountHolderNumber") || "Confirm Account number should be match with Account Number."
                            }}
                            render={({ field }) => (
                                <div style={{ width: "50%" }}>
                                    <TextField
                                        id="confirmbankAccountNo"
                                        label="Re-Enter Bank Account Number"
                                        variant="outlined"
                                        placeholder="Re-Enter Your Bank Account Number"
                                        className='w-100 w-md-50'
                                        margin="normal"
                                        {...field}
                                        error={Boolean(errors.confirmbankAccountNo)}
                                    // helperText={errors.confirmbankAccountNo?.message}
                                    />
                                    {Boolean(errors.confirmbankAccountNo) && (
                                        <div className="error-message mt-1 mt-lg-0">
                                            {errors.confirmbankAccountNo?.message}
                                        </div>
                                    )}
                                </div>
                            )}
                        />
                    </div>
                    <div className='d-flex gap-2'>

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
                                <div style={{ width: "50%" }}>
                                    <TextField
                                        id="ifscCode"
                                        label=" IFSC Code"
                                        variant="outlined"
                                        placeholder="Enter Your IFSC Code "
                                        style={{ width: "100%", }}
                                        margin="normal"
                                        {...field}
                                        error={Boolean(errors.ifscCode)}
                                    // helperText={errors.ifscCode?.message}
                                    />
                                    {Boolean(errors.ifscCode) && (
                                        <div className="error-message mt-1 mt-lg-0">
                                            {errors.ifscCode?.message}
                                        </div>
                                    )}
                                </div>

                            )}
                        />


                        <Controller
                            control={control}
                            name="bankAccountType"
                            rules={{
                                required: "bankAccountType is required",
                            }}
                            render={({ field }) => (
                                <div style={{ width: "50%" }}>
                                    <TextField
                                        id="bankAccountType-select"
                                        variant="outlined"
                                        select
                                        style={{ width: "100%", marginTop: "15px" }}
                                        label="Bank Account Type"
                                        {...field}
                                        error={Boolean(errors.bankAccountType)}
                                    // helperText={errors.bankAccountType?.message}
                                    >
                                        <MenuItem value="">Select Categories</MenuItem>
                                        <MenuItem value="Saving">Saving</MenuItem>
                                        <MenuItem value="Current">Current</MenuItem>
                                        <MenuItem value="OverDraft">Over Draft</MenuItem>
                                    </TextField>
                                    {Boolean(errors.bankAccountType) && (
                                        <div className="error-message mt-1 mt-lg-0">
                                            {errors.bankAccountType?.message}
                                        </div>
                                    )}
                                </div>
                            )}
                        />

                    </div>
                    {/* <Controller
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
                        style={{ width: "45%" }}
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
                        style={{ width: "45%", marginLeft: "10px" }}
                        margin="normal"
                        {...field}
                        error={Boolean(errors.branchName)}
                        helperText={errors.branchName?.message}
                    />
                )}
            /> */}


                    <Controller
                        control={control}
                        name="checkUpload"
                        rules={{
                            required: "Check Upload is required",

                        }}
                        render={({ field }) => (
                            <>
                                <label margin="normal"
                                    style={{ width: "100%", display: "block" }}

                                >Check Upload</label>
                                <div className='d-flex align-items-center mt-2'>
                                    <input
                                        type="file"
                                        className='checkuploadbusiness'
                                        // style={{ width: "50%"}}
                                        onChange={(e) => field.onChange(e.target.files[0])}

                                    />
                                    <TextField
                                        id="checkUpload"
                                        variant="filled"
                                        type="text"
                                        style={{ width: "91%", display: "none" }}
                                        value={field.value ? field.value.name : ''}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        error={Boolean(errors.checkUpload)}

                                    />
                                    <div>
                                        <Button type="button" variant="contained" size="small" onClick={() => handleUploadCheck({ ...field })}>Upload</Button>
                                    </div>
                                </div>
                                {/* <img src={URL.revokeObjectURL(field.value)}  alt='check'/> */}
                                {Boolean(errors.checkUpload) && (
                                    <div className="error-message">
                                        {errors.checkUpload.message}
                                    </div>
                                )}
                            </>
                        )}
                    />
                </AccordionDetails>
            </Accordion>
        </>


    )
}

export default BusinessDetail