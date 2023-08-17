import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import {
    TextField,
    Button,
} from "@mui/material";

import {
    Controller,
    useFormContext,
} from "react-hook-form";
import { useEffect, useState } from 'react'
import authService from './ApiUrl';

const Profession = ({ methods }) => {
    
    const { control, formState: { errors } } = useFormContext();

    const [professionData, setProfessionData] = useState([]);
    const [categoriesData, setCategoriesData] = useState(["No service"]);


    const professionFetchData = async () => {
        try {
            const user = await (await fetch(`${authService.newCommonUrl}/common/services/getServices`)).json()
            console.log(user)
            setProfessionData(user)
            console.log(professionData)
          
        } catch (error) {
            setProfessionData([])
        }
    }
    
    useEffect(() => {
        professionFetchData();
        
    }, []);
    // const idObject = {
    //     "MY_MAID": "645a4849103a6368712285c5",
    //     "SKILL_TRAINING": "64be48cd07b254806ed90978",
    //     "SOCIAL_NETWORK": "64be48da07b254806ed90979",
    //     "TALENT_MASTER": "64be48f807b254806ed9097a",
    //     "ECOMMERCE": "64be491b07b254806ed9097b",
    //     "APPOINTMENT_BOOK": "64be492f07b254806ed9097c",
    //     "BANK": "64be494407b254806ed9097d",
    //     "BEAUTY_PARLOR": "64be495907b254806ed9097e",
    //     "EXHIBITION": "64be496a07b254806ed9097f",
    //     "HOLIDAY_PACKAGE": "64be498507b254806ed90980",
    //     "JOB_PORTAL": "64be499907b254806ed90981",
    //     "MAMAS_KITCHEN": "64be49ae07b254806ed90982"
    // }
    //     const idArray = [
    //         "645a4849103a6368712285c5", "64be48cd07b254806ed90978","64be48da07b254806ed90979","64be48f807b254806ed9097a","64be491b07b254806ed9097b","64be492f07b254806ed9097c","64be494407b254806ed9097d","64be495907b254806ed9097e","64be496a07b254806ed9097f","64be498507b254806ed90980","64be499907b254806ed90981","64be49ae07b254806ed90982"
    //     ]
    //  idArray.map((e)=>{
    //     console.log(e)
    //  })
    // console.log(methods.control._fields.profession._f.value)


    useEffect(() => {

        catagoriesFetchdata()
    }, [methods.control._fields.profession])

    const catagoriesFetchdata = () =>{


        if (methods.control._fields.profession._f.value === "64be491b07b254806ed9097b") {
            fetch(`${authService.newEcommercUrl}/category/getMainCategories`)
            .then((res) => res.json())
            .then((user2) => {
                setCategoriesData(user2)
                console.log(user2)
            })
            
        }
        else {
            setCategoriesData([])
        }
        
   

} 

    return (
        <>


            <Controller
                control={control}
                name="profession"
                rules={{
                    required: "profession is required",

                }}
                render={({ field }) => (
                    <>
                        <InputLabel id="demo-simple-select-autowidth-label" style={{ marginTop: "20px" }}>profession</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="profession-select"
                            variant="outlined"
                            style={{ width: "50%" }}
                            label="profession"
                            placeholder='profession'
                            {...field}
                            error={Boolean(errors.profession)}
                            helperText={errors.profession?.message}
                        >
                            <MenuItem value="">Select Profession</MenuItem>
                            {
                                professionData.map((data,index) => {
                                    return (
                                        <MenuItem key={index} value={data.serviceId}>{data.name}</MenuItem>
                                    )
                                })
                            }
                            <MenuItem value="s"> Profession</MenuItem>
                        </Select>
                    </>
                )}
            />

            <Button variant="contained" style={{ marginLeft: "10px", width: "40%" }}>Take a video Toure</Button>

            <Controller
                control={control}
                name="categories"
                rules={{
                    required: "categories is required",
                }}
                render={({ field }) => (
                    <>
                        <InputLabel id="demo-simple-select-autowidth-label" style={{ marginTop: "20px" }}>categories</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="categories-select"
                            variant="outlined"
                            style={{ width: "50%" }}
                            label="categories"
                            {...field}
                            error={Boolean(errors.categories)}
                            helperText={errors.categories?.message}
                        >
                            <MenuItem value="">Select Categories</MenuItem>
                            {
                                categoriesData.map((data,index) => {
                                    return (
                                        <MenuItem key={index} value={data.categoryId}>{data.label}</MenuItem>
                                    )
                                })
                            }
                            <MenuItem value="n"> No Service Available</MenuItem>
                        </Select>
                    </>
                )}
            />

            <Button variant="contained" style={{ marginLeft: "10px", width: "40%" }}>Take a video Toure</Button>

            <Controller
                control={control}
                name="addressLine1"
                rules={{
                    required: "Address is required",
                    minLength: {
                        value: 4,
                        message: "Address is min. 4 characters"
                    }
                }}
                render={({ field }) => (
                    <TextField
                        id="addressLine1"
                        label="Address Line 1"
                        variant="outlined"
                        placeholder="Enter Your Address"
                        style={{ width: "91%" }}
                        margin="normal"
                        {...field}
                        error={Boolean(errors.addressLine1)}
                        helperText={errors.addressLine1?.message}
                    />
                )}
            />

            <Controller
                control={control}
                name="addressLine2"
                rules={{
                    required: "Address is required",
                    minLength: {
                        value: 4,
                        message: "Address is min. 4 characters"
                    }
                }}
                render={({ field }) => (
                    <TextField
                        id="addressLine2"
                        label="Address Line 2"
                        variant="outlined"
                        placeholder="Enter Your Address"
                        style={{ width: "91%" }}
                        margin="normal"
                        {...field}
                        error={Boolean(errors.addressLine2)}
                        helperText={errors.addressLine2?.message}
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
                        style={{ width: "45%" }}
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
                        style={{ width: "45%",marginLeft:"10px" }}
                        margin="normal"
                        {...field}
                        error={Boolean(errors.stateName)}
                        helperText={errors.stateName?.message}
                    />
                )}
            />

            <Controller
                control={control}
                name="countryName"
                rules={{
                    required: "Country Name is required",
                    minLength: {
                        value: 2,
                        message: "Country Name is min. 2 characters"
                    }
                }}
                render={({ field }) => (
                    <TextField
                        id="countryName"
                        label="Country"
                        variant="outlined"
                        placeholder="Enter Your Country Name"
                        style={{ width: "45%" }}
                        margin="normal"
                        {...field}
                        error={Boolean(errors.countryName)}
                        helperText={errors.countryName?.message}
                    />
                )}
            />

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
                        style={{ width: "45%",marginLeft:"10px" }}
                        margin="normal"
                        {...field}
                        error={Boolean(errors.pincode)}
                        helperText={errors.pincode?.message}
                    />
                )}
            />

        </>
    )
}

export default Profession