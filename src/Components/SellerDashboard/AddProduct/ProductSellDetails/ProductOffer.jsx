import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import {
    TextField,
    Button,
} from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import { Pattern } from '@mui/icons-material';

const ProductOffer = () => {
    const { control, formState: { errors } } = useFormContext()
    return (
        <>
            <div>
                <Controller
                    control={control}
                    name='productSellCountry'
                    rules={{
                        required: "country name is required"
                    }}
                    render={({ field }) => (
                        <>
                            <div className='d-flex align-items-center'>
                                <label className='labelbold me-2'>Country/Region Of Origin</label>
                                <TextField
                                    id="productSellCountry"
                                    variant="outlined"
                                    select
                                    style={{ width: "50%" }}
                                    {...field}
                                    error={Boolean(errors.productSellCountry)}
                                >
                                    <MenuItem value="India">India</MenuItem>
                                    <MenuItem value="China">China</MenuItem>

                                </TextField>
                            </div>
                        </>
                    )}

                />
            </div>
            <div>
                <Controller
                    control={control}
                    name='productSellPrice'
                    rules={{
                        required: "productSellPrice is required",
                        pattern:{
                            value:new RegExp('^[0-9]+$'),
                            message:"not a valid formate"
                        }
                    }}
                    render={({ field }) => (
                        <>
                            <div className='d-flex align-items-center mt-3'>
                                <label className="labelbold me-2">Your Price</label>
                                <TextField
                                    disabled
                                    id="productSellPrice"
                                    variant="outlined"
                                    value="INR"
                                    style={{ width: "4%" }}

                                />
                                <TextField
                                    placeholder="Ex:50.00"
                                    id="productSellPrice"
                                    variant="outlined"
                                    {...field}
                                    style={{ width: "50%" }}
                                    error={Boolean(errors.productSellPrice)}
                                />
                            </div>
                        </>
                    )}
                />

            </div>
            <div>
                <Controller
                    control={control}
                    name='productSellQuantity'
                    rules={{
                        required: "productSellQuantity is required",
                        pattern:{
                            value:new RegExp('^[0-9]+$'),
                            message:"not a valid formate"
                        }
                    }}
                    render={({ field }) => (
                        <>
                            <div className='d-flex align-items-center mt-3'>
                                <label className="labelbold me-2">Quantity</label>

                                <TextField
                                    placeholder="200"
                                    id="productSellPrice"
                                    variant="outlined"
                                    {...field}
                                    style={{ width: "50%" }}
                                    error={Boolean(errors.productSellQuantity)}
                                />
                            </div>
                        </>
                    )}
                />

            </div>
            <div>
                <Controller
                    control={control}
                    name='productSellCondition'
                    rules={{
                        required: "productSellCondition is required"
                    }}
                    render={({ field }) => (
                        <>
                            <div className='d-flex align-items-center mt-3'>
                                <label className='labelbold me-2'>Condition</label>
                                <TextField
                                    id="productSellCountry"
                                    variant="outlined"
                                    select
                                    style={{ width: "50%" }}
                                    {...field}
                                    error={Boolean(errors.productSellCondition)}
                                >
                                    <MenuItem value="">-Select-</MenuItem>
                                    <MenuItem value="New">New</MenuItem>

                                </TextField>
                            </div>
                        </>
                    )}

                />
            </div>
            <div>
                <Controller
                    control={control}
                    name='productHSNcode'
                    rules={{
                        required: "productHSNcode is required",
                        pattern:{
                            value:new RegExp('^[0-9]+$'),
                            message:"not a valid formate"
                        }
                    }}
                    render={({ field }) => (
                        <>
                            <div className='d-flex align-items-center mt-3'>
                                <label className="labelbold me-2">HSN code</label>

                                <TextField
                                    placeholder="610510,61051048"
                                    id="productHSNcode"
                                    variant="outlined"
                                    {...field}
                                    style={{ width: "50%" }}
                                    error={Boolean(errors.productHSNcode)}
                                />
                            </div>
                        </>
                    )}
                />

            </div>
            <div>
                <Controller
                    control={control}
                    name='productSellMaxRetailPrice'
                    rules={{
                        required: "productSellMaxRetailPrice is required",
                        pattern:{
                            value:new RegExp('^[0-9]+$'),
                            message:"not a valid formate"
                        }
                    }}
                    render={({ field }) => (
                        <>
                            <div className='d-flex align-items-center mt-3'>
                                <label className="labelbold me-2"> Maximum Retail Price</label>
                                <TextField
                                    disabled
                                    id="productSellMaxRetailPrice"
                                    variant="outlined"
                                    value="INR"
                                    style={{ width: "4%" }}

                                />
                                <TextField
                                    placeholder="Ex:50.00"
                                    id="productSellMaxRetailPrice"
                                    variant="outlined"
                                    {...field}
                                    style={{ width: "50%" }}
                                    error={Boolean(errors.productSellMaxRetailPrice)}
                                />
                            </div>
                        </>
                    )}
                />

            </div>
            <div>
                <div>
                    <label className='labelbold'>Item Dimensions</label>

                </div>
                <div>
                    <div>
                        <div className='d-flex align-items-end gap-2'>
                            <Controller
                                control={control}
                                name='productSellLength'
                                rules={{
                                    required: "productSellLength is required",
                                    pattern:{
                                        value:new RegExp('^[0-9]+$'),
                                        message:"not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className='d-flex flex-column' style={{ width: "50%" }}>
                                            <label className="labelbold me-2">Item Length</label>
                                            <TextField
                                                placeholder="12"
                                                id="productSellLength"
                                                variant="outlined"
                                                {...field}
                                              
                                                error={Boolean(errors.productSellLength)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                            <Controller
                                control={control}
                                name='productSellLengthUnit'
                                rules={{
                                    required: "productSellLengthUnit is required"
                                }}
                                render={({ field }) => (
                                    <>


                                        <TextField
                                            id="productSellLengthUnit"
                                            variant="outlined"
                                            select
                                            style={{ width: "40%" }}
                                            {...field}
                                            error={Boolean(errors.productSellLengthUnit)}
                                        >
                                            <MenuItem value="">-Select-</MenuItem>
                                            <MenuItem value="New">Angstrom</MenuItem>
                                            <MenuItem value="New">Mils</MenuItem>
                                            <MenuItem value="New">Yards</MenuItem>
                                            <MenuItem value="New">Picometer</MenuItem>
                                            <MenuItem value="New">Miles</MenuItem>
                                            <MenuItem value="New">DM</MenuItem>
                                            <MenuItem value="New">MM</MenuItem>
                                            <MenuItem value="New">M</MenuItem>
                                            <MenuItem value="New">IN</MenuItem>
                                            <MenuItem value="New">FT</MenuItem>
                                            <MenuItem value="New">Hundredths-Inchese</MenuItem>
                                            <MenuItem value="New">Nanometer</MenuItem>
                                            <MenuItem value="µm">µm</MenuItem>
                                            <MenuItem value="New">Kilometer</MenuItem>


                                        </TextField>

                                    </>
                                )}

                            />

                        </div>
                        <div className='d-flex align-items-end gap-2'>
                            <Controller
                                control={control}
                                name='productSellWidth'
                                rules={{
                                    required: "productSellWidth is required",
                                    pattern:{
                                        value:new RegExp('^[0-9]+$'),
                                        message:"not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className='d-flex flex-column' style={{ width: "50%" }}>
                                            <label className="labelbold me-2">Item Width</label>
                                            <TextField
                                                placeholder="12"
                                                id="productSellWidth"
                                                variant="outlined"
                                                {...field}

                                                error={Boolean(errors.productSellWidth)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                            <Controller
                                control={control}
                                name='productSellWidthUnit'
                                rules={{
                                    required: "productSellWidthUnit is required"
                                }}
                                render={({ field }) => (
                                    <>


                                        <TextField
                                            id="productSellWidthUnit"
                                            variant="outlined"
                                            select
                                            style={{ width: "40%" }}
                                            {...field}
                                            error={Boolean(errors.productSellWidthUnit)}
                                        >
                                            <MenuItem value="">-Select-</MenuItem>
                                            <MenuItem value="New">Angstrom</MenuItem>
                                            <MenuItem value="New">Mils</MenuItem>
                                            <MenuItem value="New">Yards</MenuItem>
                                            <MenuItem value="New">Picometer</MenuItem>
                                            <MenuItem value="New">Miles</MenuItem>
                                            <MenuItem value="New">DM</MenuItem>
                                            <MenuItem value="New">MM</MenuItem>
                                            <MenuItem value="New">M</MenuItem>
                                            <MenuItem value="New">IN</MenuItem>
                                            <MenuItem value="New">FT</MenuItem>
                                            <MenuItem value="New">Hundredths-Inchese</MenuItem>
                                            <MenuItem value="New">Nanometer</MenuItem>
                                            <MenuItem value="µm">µm</MenuItem>
                                            <MenuItem value="New">Kilometer</MenuItem>


                                        </TextField>

                                    </>
                                )}

                            />
                        </div>
                        <div className='d-flex align-items-end gap-2'>
                            <Controller
                                control={control}
                                name='productSellHeight'
                                rules={{
                                    required: "productSellHeight is required",
                                    pattern:{
                                        value:new RegExp('^[0-9]+$'),
                                        message:"not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className='d-flex flex-column' style={{ width: "50%" }}>
                                            <label className="labelbold me-2">Item Height</label>
                                            <TextField
                                                placeholder="12"
                                                id="productSellHeight"
                                                variant="outlined"
                                                {...field}

                                                error={Boolean(errors.productSellHeight)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                            <Controller
                                control={control}
                                name='productSellHeightUnit'
                                rules={{
                                    required: "productSellHeightUnit is required"
                                }}
                                render={({ field }) => (
                                    <>


                                        <TextField
                                            id="productSellHeightUnit"
                                            variant="outlined"
                                            select
                                            style={{ width: "40%" }}
                                            {...field}
                                            error={Boolean(errors.productSellHeightUnit)}
                                        >
                                            <MenuItem value="">-Select-</MenuItem>
                                            <MenuItem value="New">Angstrom</MenuItem>
                                            <MenuItem value="New">Mils</MenuItem>
                                            <MenuItem value="New">Yards</MenuItem>
                                            <MenuItem value="New">Picometer</MenuItem>
                                            <MenuItem value="New">Miles</MenuItem>
                                            <MenuItem value="New">DM</MenuItem>
                                            <MenuItem value="New">MM</MenuItem>
                                            <MenuItem value="New">M</MenuItem>
                                            <MenuItem value="New">IN</MenuItem>
                                            <MenuItem value="New">FT</MenuItem>
                                            <MenuItem value="New">Hundredths-Inchese</MenuItem>
                                            <MenuItem value="New">Nanometer</MenuItem>
                                            <MenuItem value="µm">µm</MenuItem>
                                            <MenuItem value="New">Kilometer</MenuItem>
                                        </TextField>

                                    </>
                                )}

                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductOffer