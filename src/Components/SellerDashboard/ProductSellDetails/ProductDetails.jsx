import {
    TextField,
    Button,
} from "@mui/material";
import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import { Controller, useFormContext } from 'react-hook-form'

const ProductDetails = () => {
    const { control, formState: { errors } } = useFormContext()
    return (
        <>
            <div>
                <Controller
                    control={control}
                    name='artistName'
                    rules={{
                        required: "artist Name is required"
                    }}
                    render={({ field }) => (
                        <>
                            <div className='d-flex align-items-center'>
                                <label className="labelbold me-2">Artist</label>
                                <TextField
                                    placeholder="Artist"
                                    id="artistName"
                                    variant="outlined"
                                    {...field}
                                    style={{ width: "50%" }}
                                    error={Boolean(errors.artistName)}
                                />
                            </div>
                        </>
                    )}
                />

            </div>
            <div>
                <Controller
                    control={control}
                    name="artworkMedium"
                    rules={{
                        required: "artworkMedium is required",
                    }}
                    render={({ field }) => (
                        <>
                        <div className='d-flex align-items-center mt-3'>
                             <label className="labelbold me-2">Artwork Medium</label>
                            <TextField
                                id="artworkMedium-select"
                                variant="outlined"
                                select
                                style={{ width: "50%"}}
                                placeholder="Oil"
                                {...field}
                                error={Boolean(errors.artworkMedium)}

                            >
                                <MenuItem value="">-Select-</MenuItem>
                                <MenuItem value="Encaustic">Encaustic</MenuItem>
                                <MenuItem value="Textile">Textile</MenuItem>
                                <MenuItem value="Ink">Ink</MenuItem>
                                <MenuItem value="Pastel">Pastel</MenuItem>
                                <MenuItem value="Drypoint">Drypoint</MenuItem>
                            </TextField>
                            </div>
                        </>
                    )}
                />
            </div>
            <div>
                <Controller
                    control={control}
                    name='productDate'
                    rules={{
                        required: "productDate is required",
                        pattern:{
                            value:new RegExp('^[0-9]+$'),
                            message:"not a valid formate"
                        }
                    }}
                    render={({ field }) => (
                        <>
                            <div className='d-flex align-items-center mt-3'>
                                <label className="labelbold me-2">Date</label>
                                <TextField
                                    placeholder="1998"
                                    id="productDate"
                                    variant="outlined"
                                    {...field}
                                    style={{ width: "50%" }}
                                    error={Boolean(errors.productDate)}
                                />
                            </div>
                        </>
                    )}
                />

            </div>
            <div>
                <Controller
                    control={control}
                    name="productFramed"
                    rules={{
                        required: "productFramed is required",
                    }}
                    render={({ field }) => (
                        <>
                        <div className='d-flex align-items-center mt-3'>
                             <label className="labelbold me-2">Framed</label>
                            <TextField
                                id="productFramed-select"
                                variant="outlined"
                                select
                                style={{ width: "50%"}}
                                placeholder="Oil"
                                {...field}
                                error={Boolean(errors.productFramed)}

                            >
                                <MenuItem value="">-Select-</MenuItem>
                                <MenuItem value="Yes">Yes</MenuItem>
                                <MenuItem value="No">No</MenuItem>
                               
                            </TextField>
                            </div>
                        </>
                    )}
                />
            </div>
            <div>
                <Controller
                    control={control}
                    name="productSaleType"
                    rules={{
                        required: "productSaleType is required",
                    }}
                    render={({ field }) => (
                        <>
                        <div className='d-flex align-items-center mt-3'>
                             <label className="labelbold me-2">Sale Type</label>
                            <TextField
                                id="productSaleType-select"
                                variant="outlined"
                                select
                                style={{ width: "50%"}}
                                placeholder="Oil"
                                {...field}
                                error={Boolean(errors.productSaleType)}

                            >
                                
                                <MenuItem value="Primary">Primary</MenuItem>
                                <MenuItem value="Secondary">Secondary</MenuItem>
                               
                            </TextField>
                            </div>
                        </>
                    )}
                />
            </div>
        </>
    )
}

export default ProductDetails