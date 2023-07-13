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

const ContactForm = () => {

    const { control, formState: { errors } } = useFormContext();

    const [professionData, setProfessionData] = useState([]);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('https://fifty-spies-repeat.loca.lt/common/services/getServices');

    //             const jsonData = await response.json();
    //             setDatajj(jsonData);
    //             console.log(jsonData)
    //         } catch (error) {
    //             console.error('Error:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    const fetchData = async () =>{
        try {
        const user = await (await fetch("https://puny-melons-clap.loca.lt/common/services/getServices")).json()
        console.log(user)
        setProfessionData(user)
        }catch(error){
            setProfessionData([])
        }
    }


  useEffect(() => {
    fetchData();
  }, []);
   


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
                             <MenuItem >Select Profession</MenuItem>
                            {
                                  professionData.map((data) => {
                                    return (
                                    <MenuItem key={data.serviceId} value={data.serviceId}>{data.name}</MenuItem>
                                    )
                                })
                            }
                            
                          
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
                            <MenuItem value="Doctor">Doctor</MenuItem>
                            <MenuItem value="Teacher">Teacher</MenuItem>
                            <MenuItem value="Farmer">Farmer</MenuItem>
                        </Select>
                    </>
                )}
            />

            <Button variant="contained" style={{ marginLeft: "10px", width: "40%" }}>Take a video Toure</Button>

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
                        style={{ width: "100%" }}
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
                        style={{ width: "100%" }}
                        margin="normal"
                        {...field}
                        error={Boolean(errors.address)}
                        helperText={errors.address?.message}
                    />
                )}
            />
        </>
    )
}

export default ContactForm