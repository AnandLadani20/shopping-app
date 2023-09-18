import React, { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import {
    TextField,
    Button,
} from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Pattern } from '@mui/icons-material';
import { useSelector } from 'react-redux';

const ProductOffer = () => {
    const { control, formState: { errors } } = useFormContext()
    const [showShipSuggest, setshowShipSuggest] = useState('');
    const handleChange = (event) => {
        setshowShipSuggest(event.target.value);
    }
    const DesertOfferState = useSelector((state) => state.desertForm)
    const miniCoolersOfferState = useSelector((state) => state.miniCoolersForm)
    const otherAirCoolersOfferState = useSelector((state) => state.otherAirCoolersForm)
    const portableCoolersOfferState = useSelector((state) => state.portableCoolersForm)
    const towerCoolersOfferState = useSelector((state) => state.towerCoolersForm)
    const windowCoolersOfferState = useSelector((state) => state.windowCoolersForm)

    const airIonizersOfferState = useSelector((state) => state.airIonizersForm)
    const carAirPurifiersOfferState = useSelector((state) => state.carAirPurifierForm)
    const charcoalAirPuriOfferSt = useSelector((state) => state.charcoalAirPurifierForm)
    const electroAirPuriOfferSt = useSelector((state) => state.electroAirPurifierForm)
    const hepaAirPuriOfferSt = useSelector((state) => state.hepaAirPurifierForm)
    const otherAirPuriOfferSt = useSelector((state) => state.otherAirPurifierForm)
    const portableAirPuriOfferSt = useSelector((state) => state.portableAirPurifierForm)
    const ulpaAirPuriOfferSt = useSelector((state) => state.ulpaAirPurifierForm)

    const otherDehumidifiersOfferSt = useSelector((state) => state.otherDehumidifiersForm)

    const otherDeodorisersOfferSt = useSelector((state) => state.otherDeodorisersForm)

    const blowerFansOfferSt = useSelector((state) => state.blowerFansForm)
    const boxFansOfferSt = useSelector((state) => state.boxFansForm)
    const ceilingFansOfferSt = useSelector((state) => state.ceilingFansForm)
    const clipFansOfferSt = useSelector((state) => state.clipFansForm)
    const drumFansOfferS = useSelector((state) => state.drumFansForm)
    const exhaustFansOfferSt = useSelector((state) => state.exhaustFansForm)
    const floorFansOfferSt = useSelector((state) => state.floorFansForm)
    const otherFansOfferSt = useSelector((state) => state.otherFansForm)
    const pedestalFansOfferSt = useSelector((state) => state.pedestalFansForm)
    const personalFansOfferSt = useSelector((state) => state.personalFansForm)
    const tableFansOfferSt = useSelector((state) => state.tableFansForm)
    const towerFansOfferSt = useSelector((state) => state.towerFansForm)
    const vortexActionFansOfferSt = useSelector((state) => state.vortexActionFansForm)
    const wallMountedFansOfferSt = useSelector((state) => state.wallMountedFansForm)
    const windowFansOfferSt = useSelector((state) => state.windowFansForm)

    const otherHumidifiersOfferSt = useSelector((state) => state.otherHumidifierForm)
    const singleRoomHumidifiersOfferSt = useSelector((state) => state.singleRoomHumidifierForm)
    const wholeHouseHumidifiersOfferSt = useSelector((state) => state.wholeHouseHumidifierForm)

    const otherHeatNCoolingOfferSt = useSelector((state) => state.otherHeatNCoolingForm)

    const airPuriPartNAccessOfferSt = useSelector((state) => state.airPuriPartNAccessForm)
    const dehumidPartNAccessOfferSt = useSelector((state) => state.dehumidPartNAccessForm)
    const evaCoolerPartNAccessOfferSt = useSelector((state) => state.evaCoolerPartNAccessForm)
    const fanPartNAccessOfferSt = useSelector((state) => state.fanPartNAccessForm)
    const heaterPartNAccessOfferSt = useSelector((state) => state.heaterPartNAccessForm)
    const humidiPartNAccessOfferSt = useSelector((state) => state.humidiPartNAccessForm)
    const otherPartNAccessOfferSt = useSelector((state) => state.otherPartNAccessForm)
    const replaceBelthumidiOfferSt = useSelector((state) => state.replaceBelthumidiForm)


    const chalkdrawingOfferState = useSelector((state) => state.chalkdrawingForm)
    return (
        <>
            {
                chalkdrawingOfferState && (
                    <>
                        <div className='row'>
                            <Controller
                                control={control}
                                name='productSellCountry'
                                rules={{
                                    required: "country name is required"
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className='labelbold me-2'>Country/Region Of Origin</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                id="productSellCountry"
                                                variant="outlined"
                                                select
                                                style={{ width: "100%" }}
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
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellPrice'
                                rules={{
                                    required: "productSellPrice is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Your Price</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                disabled
                                                id="productSellPrice"
                                                variant="outlined"
                                                value="INR"
                                                style={{ width: "10%" }}
                                            />
                                            <TextField
                                                placeholder="Ex:50.00"
                                                id="productSellPrice"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "90%" }}
                                                error={Boolean(errors.productSellPrice)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellQuantity'
                                rules={{
                                    required: "productSellQuantity is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Quantity</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="200"
                                                id="productSellPrice"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.productSellQuantity)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellCondition'
                                rules={{
                                    required: "productSellCondition is required"
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className='labelbold me-2'>Condition</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                id="productSellCountry"
                                                variant="outlined"
                                                select
                                                style={{ width: "100%" }}
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
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productHSNcode'
                                rules={{
                                    required: "productHSNcode is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">HSN code</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="610510,61051048"
                                                id="productHSNcode"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.productHSNcode)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellMaxRetailPrice'
                                rules={{
                                    required: "productSellMaxRetailPrice is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2"> Maximum Retail Price</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                disabled
                                                id="productSellMaxRetailPrice"
                                                variant="outlined"
                                                value="INR"
                                                style={{ width: "10%" }}

                                            />
                                            <TextField
                                                placeholder="Ex:50.00"
                                                id="productSellMaxRetailPrice"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "90%" }}
                                                error={Boolean(errors.productSellMaxRetailPrice)}
                                            />
                                        </div>

                                    </>
                                )}
                            />

                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                <label className='labelbold'>Item Dimensions</label>
                            </div>

                            <div className="col-8 col-sm-7 col-lg-6">
                                <div>
                                    <div className='row align-items-end'>
                                        <Controller
                                            control={control}
                                            name='productSellLength'
                                            rules={{
                                                required: "productSellLength is required",
                                                pattern: {
                                                    value: new RegExp('^[0-9]+$'),
                                                    message: "not a valid formate"
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className='col-12 col-sm-6'>
                                                        <label className="labelbold me-2">Item Length</label>
                                                        <TextField
                                                            placeholder="12"
                                                            id="productSellLength"
                                                            variant="outlined"
                                                            {...field}
                                                            style={{ width: "100%" }}
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

                                                    <div className='col-12 col-sm-6'>
                                                        <TextField
                                                            id="productSellLengthUnit"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            {...field}
                                                            error={Boolean(errors.productSellLengthUnit)}
                                                        >
                                                            <MenuItem value="">-Select-</MenuItem>
                                                            <MenuItem value="Angstrom">Angstrom</MenuItem>
                                                            <MenuItem value="Mils">Mils</MenuItem>
                                                            <MenuItem value="Yards">Yards</MenuItem>
                                                            <MenuItem value="Picometer">Picometer</MenuItem>
                                                            <MenuItem value="Miles">Miles</MenuItem>
                                                            <MenuItem value="DM">DM</MenuItem>
                                                            <MenuItem value="MM">MM</MenuItem>
                                                            <MenuItem value="M">M</MenuItem>
                                                            <MenuItem value="IN">IN</MenuItem>
                                                            <MenuItem value="FT">FT</MenuItem>
                                                            <MenuItem value="Hundredths-Inchese">Hundredths-Inchese</MenuItem>
                                                            <MenuItem value="Nanometer">Nanometer</MenuItem>
                                                            <MenuItem value="µm">µm</MenuItem>
                                                            <MenuItem value="Kilometer">Kilometer</MenuItem>


                                                        </TextField>
                                                    </div>
                                                </>
                                            )}

                                        />

                                    </div>
                                    <div className='row align-items-end'>
                                        <Controller
                                            control={control}
                                            name='productSellWidth'
                                            rules={{
                                                required: "productSellWidth is required",
                                                pattern: {
                                                    value: new RegExp('^[0-9]+$'),
                                                    message: "not a valid formate"
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className='col-12 col-sm-6'>
                                                        <label className="labelbold me-2">Item Width</label>
                                                        <TextField
                                                            placeholder="12"
                                                            id="productSellWidth"
                                                            variant="outlined"
                                                            {...field}
                                                            style={{ width: "100%" }}
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

                                                    <div className='col-12 col-sm-6'>
                                                        <TextField
                                                            id="productSellWidthUnit"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            {...field}
                                                            error={Boolean(errors.productSellWidthUnit)}
                                                        >
                                                            <MenuItem value="">-Select-</MenuItem>
                                                            <MenuItem value="Angstrom">Angstrom</MenuItem>
                                                            <MenuItem value="Mils">Mils</MenuItem>
                                                            <MenuItem value="Yards">Yards</MenuItem>
                                                            <MenuItem value="Picometer">Picometer</MenuItem>
                                                            <MenuItem value="Miles">Miles</MenuItem>
                                                            <MenuItem value="DM">DM</MenuItem>
                                                            <MenuItem value="MM">MM</MenuItem>
                                                            <MenuItem value="M">M</MenuItem>
                                                            <MenuItem value="IN">IN</MenuItem>
                                                            <MenuItem value="FT">FT</MenuItem>
                                                            <MenuItem value="Hundredths-Inchese">Hundredths-Inchese</MenuItem>
                                                            <MenuItem value="Nanometer">Nanometer</MenuItem>
                                                            <MenuItem value="µm">µm</MenuItem>
                                                            <MenuItem value="Kilometer">Kilometer</MenuItem>


                                                        </TextField>
                                                    </div>
                                                </>
                                            )}

                                        />
                                    </div>
                                    <div className='row align-items-end'>
                                        <Controller
                                            control={control}
                                            name='productSellHeight'
                                            rules={{
                                                required: "productSellHeight is required",
                                                pattern: {
                                                    value: new RegExp('^[0-9]+$'),
                                                    message: "not a valid formate"
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className='col-12 col-sm-6'>
                                                        <label className="labelbold me-2">Item Height</label>
                                                        <TextField
                                                            placeholder="12"
                                                            id="productSellHeight"
                                                            variant="outlined"
                                                            {...field}
                                                            style={{ width: "100%" }}
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

                                                    <div className='col-12 col-sm-6'>
                                                        <TextField
                                                            id="productSellHeightUnit"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            {...field}
                                                            error={Boolean(errors.productSellHeightUnit)}
                                                        >
                                                            <MenuItem value="">-Select-</MenuItem>
                                                            <MenuItem value="Angstrom">Angstrom</MenuItem>
                                                            <MenuItem value="Mils">Mils</MenuItem>
                                                            <MenuItem value="Yards">Yards</MenuItem>
                                                            <MenuItem value="Picometer">Picometer</MenuItem>
                                                            <MenuItem value="Miles">Miles</MenuItem>
                                                            <MenuItem value="DM">DM</MenuItem>
                                                            <MenuItem value="MM">MM</MenuItem>
                                                            <MenuItem value="M">M</MenuItem>
                                                            <MenuItem value="IN">IN</MenuItem>
                                                            <MenuItem value="FT">FT</MenuItem>
                                                            <MenuItem value="Hundredths-Inchese">Hundredths-Inchese</MenuItem>
                                                            <MenuItem value="Nanometer">Nanometer</MenuItem>
                                                            <MenuItem value="µm">µm</MenuItem>
                                                            <MenuItem value="Kilometer">Kilometer</MenuItem>
                                                        </TextField>
                                                    </div>
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
            {
                (DesertOfferState || miniCoolersOfferState || otherAirCoolersOfferState || portableCoolersOfferState || towerCoolersOfferState || windowCoolersOfferState
                    || airIonizersOfferState || carAirPurifiersOfferState || charcoalAirPuriOfferSt || electroAirPuriOfferSt || hepaAirPuriOfferSt || otherAirPuriOfferSt
                    || portableAirPuriOfferSt || ulpaAirPuriOfferSt || otherDeodorisersOfferSt) && (
                    <>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productHSNcode'
                                rules={{
                                    required: "productHSNcode is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">HSN code</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="610510,61051048"
                                                id="productHSNcode"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.productHSNcode)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellMaxRetailPrice'
                                rules={{
                                    required: "productSellMaxRetailPrice is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2"> Maximum Retail Price</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                disabled
                                                id="productSellMaxRetailPrice"
                                                variant="outlined"
                                                value="INR"
                                                style={{ width: "10%" }}

                                            />
                                            <TextField
                                                placeholder="Ex:50.00"
                                                id="productSellMaxRetailPrice"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "90%" }}
                                                error={Boolean(errors.productSellMaxRetailPrice)}
                                            />
                                        </div>

                                    </>
                                )}
                            />

                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productsellerSKU'
                                rules={{
                                    required: "productsellerSKU is required",

                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Seller SKU</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="101MyCollectible1"
                                                id="productsellerSKU"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.productsellerSKU)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellPrice'
                                rules={{
                                    required: "productSellPrice is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Your Price</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                disabled
                                                id="productSellPrice"
                                                variant="outlined"
                                                value="INR"
                                                style={{ width: "10%" }}
                                            />
                                            <TextField
                                                placeholder="Ex:50.00"
                                                id="productSellPrice"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "90%" }}
                                                error={Boolean(errors.productSellPrice)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productListPrice'
                                rules={{
                                    required: "productListPrice is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">List Price</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                disabled
                                                id="productListPrice"
                                                variant="outlined"
                                                value="INR"
                                                style={{ width: "10%" }}
                                            />
                                            <TextField
                                                placeholder="Ex:50.00"
                                                id="productListPrice"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "90%" }}
                                                error={Boolean(errors.productListPrice)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellQuantity'
                                rules={{
                                    required: "productSellQuantity is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Quantity</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="200"
                                                id="productSellPrice"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.productSellQuantity)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellCondition'
                                rules={{
                                    required: "productSellCondition is required"
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className='labelbold me-2'>Item Condition</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                id="productSellCountry"
                                                variant="outlined"
                                                select
                                                style={{ width: "100%" }}
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
                        <div className='row'>
                            <Controller
                                control={control}
                                name='productSellCountry'
                                rules={{
                                    required: "country name is required"
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className='labelbold me-2'>Country/Region Of Origin</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                id="productSellCountry"
                                                variant="outlined"
                                                select
                                                style={{ width: "100%" }}
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
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name="productFulfillmentChannel"
                                rules={{
                                    required: "this field is required",

                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold  mb-1">Fulfillment Channel</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">


                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                id="productFulfillmentChannel"
                                                name="row-radio-buttons-group"
                                                {...field}
                                                error={Boolean(errors.productFulfillmentChannel)}
                                                style={{ width: "100%" }}
                                            >
                                                <FormControlLabel
                                                    value="Merchant Fulfilled"
                                                    control={<Radio />}
                                                    label="I will ship this item myself (Self Ship) or I will pack this item and
                                                           Amazon will pick up & ship (Easy Ship) (Merchant Fulfilled)"
                                                    checked={showShipSuggest === 'Merchant Fulfilled'}
                                                    onChange={handleChange}
                                                    style={{ padding: "5px" }}
                                                />
                                                <FormControlLabel
                                                    value="Fulfilled by Amazon"
                                                    control={<Radio />}
                                                    label="Amazon will ship and provide customer service
                                                            (Fulfilled by Amazon)"
                                                    checked={showShipSuggest === 'Fulfilled by Amazon'}
                                                    onChange={handleChange}
                                                    style={{ padding: "5px" }}
                                                />

                                            </RadioGroup>
                                            <div>
                                                {
                                                    showShipSuggest === 'Fulfilled by Amazon' ? <label> You have chosen to have Amazon fulfill orders for this item. Your item will be available for sale, when Amazon receives it. Fulfillment by Amazon fees will apply.</label> : ""
                                                }

                                            </div>

                                        </div>
                                    </>
                                )}
                            />
                        </div>

                        <div className='row' style={{ marginTop: "10px" }}>

                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                <label className="labelbold me-2">Shipping Weight</label>
                            </div>
                            <div className="col-8 col-sm-7 col-lg-6">
                                <div className='row'>
                                    <Controller
                                        control={control}
                                        name='productShippingWeight'
                                        rules={{
                                            required: "productShippingWeight is required",
                                            pattern: {
                                                value: new RegExp('^[0-9]+$'),
                                                message: "not a valid formate"
                                            }
                                        }}
                                        render={({ field }) => (
                                            <>

                                                <div className='col-12 col-sm-6'>
                                                    <TextField
                                                        placeholder="2.33,20.75,10000"
                                                        id="productShippingWeight"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.productShippingWeight)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                    <Controller
                                        control={control}
                                        name='productShippingWeightUnit'
                                        rules={{
                                            required: "productShippingWeightUnit is required"
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className='col-12 col-sm-6'>
                                                    <TextField
                                                        id="productShippingWeightUnit"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        {...field}
                                                        error={Boolean(errors.productShippingWeightUnit)}
                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="LB">LB</MenuItem>
                                                        <MenuItem value="KG">KG</MenuItem>
                                                        <MenuItem value="GR">GR</MenuItem>
                                                        <MenuItem value="Hundredths Pounds">Hundredths Pounds</MenuItem>
                                                        <MenuItem value="MG">MG</MenuItem>
                                                        <MenuItem value="Tons">Tons</MenuItem>
                                                        <MenuItem value="OZ">OZ</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                            </div>
                        </div>

                    </>
                )}

            {
                (otherDehumidifiersOfferSt || otherHumidifiersOfferSt || singleRoomHumidifiersOfferSt || wholeHouseHumidifiersOfferSt) && (
                    <>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productsellerSKU'
                                rules={{
                                    required: "productsellerSKU is required",

                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Seller SKU</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="101MyCollectible1"
                                                id="productsellerSKU"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.productsellerSKU)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellPrice'
                                rules={{
                                    required: "productSellPrice is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Your Price</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                disabled
                                                id="productSellPrice"
                                                variant="outlined"
                                                value="INR"
                                                style={{ width: "10%" }}
                                            />
                                            <TextField
                                                placeholder="Ex:50.00"
                                                id="productSellPrice"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "90%" }}
                                                error={Boolean(errors.productSellPrice)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellQuantity'
                                rules={{
                                    required: "productSellQuantity is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Quantity</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="200"
                                                id="productSellPrice"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.productSellQuantity)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellCondition'
                                rules={{
                                    required: "productSellCondition is required"
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className='labelbold me-2'>Item Condition</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                id="productSellCountry"
                                                variant="outlined"
                                                select
                                                style={{ width: "100%" }}
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
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellCountry'
                                rules={{
                                    required: "country name is required"
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className='labelbold me-2'>Country/Region Of Origin</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                id="productSellCountry"
                                                variant="outlined"
                                                select
                                                style={{ width: "100%" }}
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
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productHSNcode'
                                rules={{
                                    required: "productHSNcode is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">HSN code</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="610510,61051048"
                                                id="productHSNcode"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.productHSNcode)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellMaxRetailPrice'
                                rules={{
                                    required: "productSellMaxRetailPrice is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2"> Maximum Retail Price</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                disabled
                                                id="productSellMaxRetailPrice"
                                                variant="outlined"
                                                value="INR"
                                                style={{ width: "10%" }}

                                            />
                                            <TextField
                                                placeholder="Ex:50.00"
                                                id="productSellMaxRetailPrice"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "90%" }}
                                                error={Boolean(errors.productSellMaxRetailPrice)}
                                            />
                                        </div>

                                    </>
                                )}
                            />

                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name="productFulfillmentChannel"
                                rules={{
                                    required: "this field is required",

                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold  mb-1">Fulfillment Channel</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">


                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                id="productFulfillmentChannel"
                                                name="row-radio-buttons-group"
                                                {...field}
                                                error={Boolean(errors.productFulfillmentChannel)}
                                                style={{ width: "100%" }}
                                            >
                                                <FormControlLabel
                                                    value="Merchant Fulfilled"
                                                    control={<Radio />}
                                                    label="I will ship this item myself (Self Ship) or I will pack this item and
                                                           Amazon will pick up & ship (Easy Ship) (Merchant Fulfilled)"
                                                    checked={showShipSuggest === 'Merchant Fulfilled'}
                                                    onChange={handleChange}
                                                    style={{ padding: "5px" }}
                                                />
                                                <FormControlLabel
                                                    value="Fulfilled by Amazon"
                                                    control={<Radio />}
                                                    label="Amazon will ship and provide customer service
                                                            (Fulfilled by Amazon)"
                                                    checked={showShipSuggest === 'Fulfilled by Amazon'}
                                                    onChange={handleChange}
                                                    style={{ padding: "5px" }}
                                                />

                                            </RadioGroup>
                                            <div>
                                                {
                                                    showShipSuggest === 'Fulfilled by Amazon' ? <label> You have chosen to have Amazon fulfill orders for this item. Your item will be available for sale, when Amazon receives it. Fulfillment by Amazon fees will apply.</label> : ""
                                                }

                                            </div>

                                        </div>
                                    </>
                                )}
                            />
                        </div>
                    </>
                )
            }
            {
                (blowerFansOfferSt || boxFansOfferSt || ceilingFansOfferSt || clipFansOfferSt || drumFansOfferS || exhaustFansOfferSt || floorFansOfferSt || otherFansOfferSt
                    || pedestalFansOfferSt || personalFansOfferSt || tableFansOfferSt || towerFansOfferSt || vortexActionFansOfferSt || wallMountedFansOfferSt || windowFansOfferSt || otherHeatNCoolingOfferSt
                    || airPuriPartNAccessOfferSt || dehumidPartNAccessOfferSt || evaCoolerPartNAccessOfferSt || fanPartNAccessOfferSt || heaterPartNAccessOfferSt || humidiPartNAccessOfferSt || otherPartNAccessOfferSt) && (
                    <>
                        {/* Seller SKU,Your price,List Price,Quantity,Condition Type,Country/Region Of Origin,HSN Code,Maximum Retail Price,Fulfillment Channel */}

                        <div className='row'>
                            <Controller
                                control={control}
                                name='productsellerSKU'
                                rules={{
                                    required: "productsellerSKU is required",

                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Seller SKU</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="101MyCollectible1"
                                                id="productsellerSKU"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.productsellerSKU)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellPrice'
                                rules={{
                                    required: "productSellPrice is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Your Price</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                disabled
                                                id="productSellPrice"
                                                variant="outlined"
                                                value="INR"
                                                style={{ width: "10%" }}
                                            />
                                            <TextField
                                                placeholder="Ex:50.00"
                                                id="productSellPrice"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "90%" }}
                                                error={Boolean(errors.productSellPrice)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productListPrice'
                                rules={{
                                    required: "productListPrice is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">List Price</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                disabled
                                                id="productListPrice"
                                                variant="outlined"
                                                value="INR"
                                                style={{ width: "10%" }}
                                            />
                                            <TextField
                                                placeholder="Ex:50.00"
                                                id="productListPrice"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "90%" }}
                                                error={Boolean(errors.productListPrice)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellQuantity'
                                rules={{
                                    required: "productSellQuantity is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Quantity</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="200"
                                                id="productSellPrice"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.productSellQuantity)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellCondition'
                                rules={{
                                    required: "productSellCondition is required"
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className='labelbold me-2'>Condition</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                id="productSellCountry"
                                                variant="outlined"
                                                select
                                                style={{ width: "100%" }}
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
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellCountry'
                                rules={{
                                    required: "country name is required"
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className='labelbold me-2'>Country/Region Of Origin</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                id="productSellCountry"
                                                variant="outlined"
                                                select
                                                style={{ width: "100%" }}
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
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productHSNcode'
                                rules={{
                                    required: "productHSNcode is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">HSN code</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="610510,61051048"
                                                id="productHSNcode"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.productHSNcode)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellMaxRetailPrice'
                                rules={{
                                    required: "productSellMaxRetailPrice is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2"> Maximum Retail Price</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                disabled
                                                id="productSellMaxRetailPrice"
                                                variant="outlined"
                                                value="INR"
                                                style={{ width: "10%" }}

                                            />
                                            <TextField
                                                placeholder="Ex:50.00"
                                                id="productSellMaxRetailPrice"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "90%" }}
                                                error={Boolean(errors.productSellMaxRetailPrice)}
                                            />
                                        </div>

                                    </>
                                )}
                            />

                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name="productFulfillmentChannel"
                                rules={{
                                    required: "this field is required",

                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold  mb-1">Fulfillment Channel</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">


                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                id="productFulfillmentChannel"
                                                name="row-radio-buttons-group"
                                                {...field}
                                                error={Boolean(errors.productFulfillmentChannel)}
                                                style={{ width: "100%" }}
                                            >
                                                <FormControlLabel
                                                    value="Merchant Fulfilled"
                                                    control={<Radio />}
                                                    label="I will ship this item myself (Self Ship) or I will pack this item and
                                                           Amazon will pick up & ship (Easy Ship) (Merchant Fulfilled)"
                                                    checked={showShipSuggest === 'Merchant Fulfilled'}
                                                    onChange={handleChange}
                                                    style={{ padding: "5px" }}
                                                />
                                                <FormControlLabel
                                                    value="Fulfilled by Amazon"
                                                    control={<Radio />}
                                                    label="Amazon will ship and provide customer service
                                                            (Fulfilled by Amazon)"
                                                    checked={showShipSuggest === 'Fulfilled by Amazon'}
                                                    onChange={handleChange}
                                                    style={{ padding: "5px" }}
                                                />

                                            </RadioGroup>
                                            <div>
                                                {
                                                    showShipSuggest === 'Fulfilled by Amazon' ? <label> You have chosen to have Amazon fulfill orders for this item. Your item will be available for sale, when Amazon receives it. Fulfillment by Amazon fees will apply.</label> : ""
                                                }

                                            </div>

                                        </div>
                                    </>
                                )}
                            />
                        </div>
                    </>
                )
            }
            {
                replaceBelthumidiOfferSt && (
                    <>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productsellerSKU'
                                rules={{
                                    required: "productsellerSKU is required",

                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Seller SKU</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="101MyCollectible1"
                                                id="productsellerSKU"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.productsellerSKU)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellPrice'
                                rules={{
                                    required: "productSellPrice is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Your Price</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                disabled
                                                id="productSellPrice"
                                                variant="outlined"
                                                value="INR"
                                                style={{ width: "10%" }}
                                            />
                                            <TextField
                                                placeholder="Ex:50.00"
                                                id="productSellPrice"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "90%" }}
                                                error={Boolean(errors.productSellPrice)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productListPrice'
                                rules={{
                                    required: "productListPrice is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">List Price</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                disabled
                                                id="productListPrice"
                                                variant="outlined"
                                                value="INR"
                                                style={{ width: "10%" }}
                                            />
                                            <TextField
                                                placeholder="Ex:50.00"
                                                id="productListPrice"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "90%" }}
                                                error={Boolean(errors.productListPrice)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellQuantity'
                                rules={{
                                    required: "productSellQuantity is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Quantity</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="200"
                                                id="productSellPrice"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.productSellQuantity)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellCondition'
                                rules={{
                                    required: "productSellCondition is required"
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className='labelbold me-2'>Item Condition</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                id="productSellCountry"
                                                variant="outlined"
                                                select
                                                style={{ width: "100%" }}
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
                        <div className='row'>
                            <Controller
                                control={control}
                                name='productSellCountry'
                                rules={{
                                    required: "country name is required"
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className='labelbold me-2'>Country/Region Of Origin</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                id="productSellCountry"
                                                variant="outlined"
                                                select
                                                style={{ width: "100%" }}
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
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellMaxRetailPrice'
                                rules={{
                                    required: "productSellMaxRetailPrice is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2"> Maximum Retail Price</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                disabled
                                                id="productSellMaxRetailPrice"
                                                variant="outlined"
                                                value="INR"
                                                style={{ width: "10%" }}

                                            />
                                            <TextField
                                                placeholder="Ex:50.00"
                                                id="productSellMaxRetailPrice"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "90%" }}
                                                error={Boolean(errors.productSellMaxRetailPrice)}
                                            />
                                        </div>

                                    </>
                                )}
                            />

                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name="productFulfillmentChannel"
                                rules={{
                                    required: "this field is required",

                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold  mb-1">Fulfillment Channel</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">


                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                id="productFulfillmentChannel"
                                                name="row-radio-buttons-group"
                                                {...field}
                                                error={Boolean(errors.productFulfillmentChannel)}
                                                style={{ width: "100%" }}
                                            >
                                                <FormControlLabel
                                                    value="Merchant Fulfilled"
                                                    control={<Radio />}
                                                    label="I will ship this item myself (Self Ship) or I will pack this item and
                                                           Amazon will pick up & ship (Easy Ship) (Merchant Fulfilled)"
                                                    checked={showShipSuggest === 'Merchant Fulfilled'}
                                                    onChange={handleChange}
                                                    style={{ padding: "5px" }}
                                                />
                                                <FormControlLabel
                                                    value="Fulfilled by Amazon"
                                                    control={<Radio />}
                                                    label="Amazon will ship and provide customer service
                                                            (Fulfilled by Amazon)"
                                                    checked={showShipSuggest === 'Fulfilled by Amazon'}
                                                    onChange={handleChange}
                                                    style={{ padding: "5px" }}
                                                />

                                            </RadioGroup>
                                            <div>
                                                {
                                                    showShipSuggest === 'Fulfilled by Amazon' ? <label> You have chosen to have Amazon fulfill orders for this item. Your item will be available for sale, when Amazon receives it. Fulfillment by Amazon fees will apply.</label> : ""
                                                }

                                            </div>

                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                <label className='labelbold'>Item Dimensions</label>
                            </div>

                            <div className="col-8 col-sm-7 col-lg-6">
                                <div>
                                    <div className='row align-items-end'>
                                        <Controller
                                            control={control}
                                            name='productSellLength'
                                            rules={{
                                                required: "productSellLength is required",
                                                pattern: {
                                                    value: new RegExp('^[0-9]+$'),
                                                    message: "not a valid formate"
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className='col-12 col-sm-6'>
                                                        <label className="labelbold me-2">Item Length</label>
                                                        <TextField
                                                            placeholder="12"
                                                            id="productSellLength"
                                                            variant="outlined"
                                                            {...field}
                                                            style={{ width: "100%" }}
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

                                                    <div className='col-12 col-sm-6'>
                                                        <TextField
                                                            id="productSellLengthUnit"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            {...field}
                                                            error={Boolean(errors.productSellLengthUnit)}
                                                        >
                                                            <MenuItem value="">-Select-</MenuItem>
                                                            <MenuItem value="Angstrom">Angstrom</MenuItem>
                                                            <MenuItem value="Mils">Mils</MenuItem>
                                                            <MenuItem value="Yards">Yards</MenuItem>
                                                            <MenuItem value="Picometer">Picometer</MenuItem>
                                                            <MenuItem value="Miles">Miles</MenuItem>
                                                            <MenuItem value="DM">DM</MenuItem>
                                                            <MenuItem value="MM">MM</MenuItem>
                                                            <MenuItem value="M">M</MenuItem>
                                                            <MenuItem value="IN">IN</MenuItem>
                                                            <MenuItem value="FT">FT</MenuItem>
                                                            <MenuItem value="Hundredths-Inchese">Hundredths-Inchese</MenuItem>
                                                            <MenuItem value="Nanometer">Nanometer</MenuItem>
                                                            <MenuItem value="µm">µm</MenuItem>
                                                            <MenuItem value="Kilometer">Kilometer</MenuItem>


                                                        </TextField>
                                                    </div>
                                                </>
                                            )}

                                        />

                                    </div>
                                    <div className='row align-items-end'>
                                        <Controller
                                            control={control}
                                            name='productSellWidth'
                                            rules={{
                                                required: "productSellWidth is required",
                                                pattern: {
                                                    value: new RegExp('^[0-9]+$'),
                                                    message: "not a valid formate"
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className='col-12 col-sm-6'>
                                                        <label className="labelbold me-2">Item Width</label>
                                                        <TextField
                                                            placeholder="12"
                                                            id="productSellWidth"
                                                            variant="outlined"
                                                            {...field}
                                                            style={{ width: "100%" }}
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

                                                    <div className='col-12 col-sm-6'>
                                                        <TextField
                                                            id="productSellWidthUnit"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            {...field}
                                                            error={Boolean(errors.productSellWidthUnit)}
                                                        >
                                                            <MenuItem value="">-Select-</MenuItem>
                                                            <MenuItem value="Angstrom">Angstrom</MenuItem>
                                                            <MenuItem value="Mils">Mils</MenuItem>
                                                            <MenuItem value="Yards">Yards</MenuItem>
                                                            <MenuItem value="Picometer">Picometer</MenuItem>
                                                            <MenuItem value="Miles">Miles</MenuItem>
                                                            <MenuItem value="DM">DM</MenuItem>
                                                            <MenuItem value="MM">MM</MenuItem>
                                                            <MenuItem value="M">M</MenuItem>
                                                            <MenuItem value="IN">IN</MenuItem>
                                                            <MenuItem value="FT">FT</MenuItem>
                                                            <MenuItem value="Hundredths-Inchese">Hundredths-Inchese</MenuItem>
                                                            <MenuItem value="Nanometer">Nanometer</MenuItem>
                                                            <MenuItem value="µm">µm</MenuItem>
                                                            <MenuItem value="Kilometer">Kilometer</MenuItem>


                                                        </TextField>
                                                    </div>
                                                </>
                                            )}

                                        />
                                    </div>
                                    <div className='row align-items-end'>
                                        <Controller
                                            control={control}
                                            name='productSellHeight'
                                            rules={{
                                                required: "productSellHeight is required",
                                                pattern: {
                                                    value: new RegExp('^[0-9]+$'),
                                                    message: "not a valid formate"
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className='col-12 col-sm-6'>
                                                        <label className="labelbold me-2">Item Height</label>
                                                        <TextField
                                                            placeholder="12"
                                                            id="productSellHeight"
                                                            variant="outlined"
                                                            {...field}
                                                            style={{ width: "100%" }}
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

                                                    <div className='col-12 col-sm-6'>
                                                        <TextField
                                                            id="productSellHeightUnit"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            {...field}
                                                            error={Boolean(errors.productSellHeightUnit)}
                                                        >
                                                            <MenuItem value="">-Select-</MenuItem>
                                                            <MenuItem value="Angstrom">Angstrom</MenuItem>
                                                            <MenuItem value="Mils">Mils</MenuItem>
                                                            <MenuItem value="Yards">Yards</MenuItem>
                                                            <MenuItem value="Picometer">Picometer</MenuItem>
                                                            <MenuItem value="Miles">Miles</MenuItem>
                                                            <MenuItem value="DM">DM</MenuItem>
                                                            <MenuItem value="MM">MM</MenuItem>
                                                            <MenuItem value="M">M</MenuItem>
                                                            <MenuItem value="IN">IN</MenuItem>
                                                            <MenuItem value="FT">FT</MenuItem>
                                                            <MenuItem value="Hundredths-Inchese">Hundredths-Inchese</MenuItem>
                                                            <MenuItem value="Nanometer">Nanometer</MenuItem>
                                                            <MenuItem value="µm">µm</MenuItem>
                                                            <MenuItem value="Kilometer">Kilometer</MenuItem>
                                                        </TextField>
                                                    </div>
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

        </>
    )
}

export default ProductOffer