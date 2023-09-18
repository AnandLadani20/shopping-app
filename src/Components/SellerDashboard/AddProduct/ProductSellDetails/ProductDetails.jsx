import {
    TextField,
    Button

} from "@mui/material";
import React, { useState } from 'react'
import MenuItem from '@mui/material/MenuItem';
import { useSelector } from 'react-redux';
import { Controller, useFormContext } from 'react-hook-form'


const ProductDetails = () => {
    const { control, formState: { errors } } = useFormContext()
    const DesertDetailsState = useSelector((state) => state.desertForm)
    const miniCoolersDetailsState = useSelector((state) => state.miniCoolersForm)
    const otherAirCoolersDetailsState = useSelector((state) => state.otherAirCoolersForm)
    const portableCoolersDetailsState = useSelector((state) => state.portableCoolersForm)
    const towerCoolersDetailsState = useSelector((state) => state.towerCoolersForm)
    const windowCoolersDetailsState = useSelector((state) => state.windowCoolersForm)

    const airIonizersDetailsState = useSelector((state) => state.airIonizersForm)
    const carAirPurifierDetailsState = useSelector((state) => state.carAirPurifierForm)
    const charcoalAirPuriDetailsSt = useSelector((state) => state.charcoalAirPurifierForm)
    const electroAirPuriDetailsSt = useSelector((state) => state.electroAirPurifierForm)
    const hepaAirPuriDetailsSt = useSelector((state) => state.hepaAirPurifierForm)
    const otherAirPuriDetailsSt = useSelector((state) => state.otherAirPurifierForm)
    const portableAirPuriDetailsSt = useSelector((state) => state.portableAirPurifierForm)
    const ulpaAirPuriDetailsSt = useSelector((state) => state.ulpaAirPurifierForm)

    const otherDehumidifiersDetailsSt = useSelector((state) => state.otherDehumidifiersForm)

    const otherDeodorisersDetailsSt = useSelector((state) => state.otherDeodorisersForm)

    const blowerFansDetailsSt = useSelector((state) => state.blowerFansForm)
    const boxFansDetailsSt = useSelector((state) => state.boxFansForm)
    const ceilingFansDetailsSt = useSelector((state) => state.ceilingFansForm)
    const clipFansDetailsSt = useSelector((state) => state.clipFansForm)
    const drumFansDetailsSt = useSelector((state) => state.drumFansForm)
    const exhaustFansDetailsSt = useSelector((state) => state.exhaustFansForm)
    const floorFansDetailsSt = useSelector((state) => state.floorFansForm)
    const otherFansDetailsSt = useSelector((state) => state.otherFansForm)
    const pedestalFansDetailsSt = useSelector((state) => state.pedestalFansForm)
    const personalFansDetailsSt = useSelector((state) => state.personalFansForm)
    const tableFansDetailsSt = useSelector((state) => state.tableFansForm)
    const towerFansDetailsSt = useSelector((state) => state.towerFansForm)
    const vortexActionFansDetailsSt = useSelector((state) => state.vortexActionFansForm)
    const wallMountedFansDetailsSt = useSelector((state) => state.wallMountedFansForm)
    const windowFansDetailsSt = useSelector((state) => state.windowFansForm)

    const otherHumidifiersDetailsSt = useSelector((state) => state.otherHumidifierForm)
    const singleRoomHumidifiersDetailsSt = useSelector((state) => state.singleRoomHumidifierForm)
    const wholeHouseHumidifiersDetailsSt = useSelector((state) => state.wholeHouseHumidifierForm)

    const otherHeatNCoolingDetailsSt = useSelector((state) => state.otherHeatNCoolingForm)

    const airPuriPartNAccessDetailsSt = useSelector((state) => state.airPuriPartNAccessForm)
    const dehumidPartNAccessDetailsSt = useSelector((state) => state.dehumidPartNAccessForm)
    const evaCoolerPartNAccessDetailsSt = useSelector((state) => state.evaCoolerPartNAccessForm)
    const fanPartNAccessDetailsSt = useSelector((state) => state.fanPartNAccessForm)
    const heaterPartNAccessDetailsSt = useSelector((state) => state.heaterPartNAccessForm)
    const humidiPartNAccessDetailsSt = useSelector((state) => state.humidiPartNAccessForm)
    const otherPartNAccessDetailsSt = useSelector((state) => state.otherPartNAccessForm)
    const replaceBelthumidiDetailsSt = useSelector((state) => state.replaceBelthumidiForm)



    const babyShopState = useSelector((state) => state.showOneForm)
    const otherHumidifiersDetailsState = useSelector((state) => state.showOneForm)
    const chalkdrawingDetailsState = useSelector((state) => state.showOneForm)


    const [isFocused, setIsFocused] = useState(false);
    // const checboxArray = [{
    //     name: 'includedComponent1',
    //     label: 'Remote',
    //     value:"Remote"
    //   },
    //   {
    //     name: 'includedComponent2',
    //     label: 'Cover',
    //     value:"Cover"
    //   },
    //   {
    //     name: 'includedComponent3',
    //     label: 'Instruction Manual',
    //     value:"Instruction Manual"
    //   },
    //   {
    //     name: 'includedComponent4',
    //     label: 'Wheels',
    //     value:"Wheels"
    //   },
    // ]; 

    // const [inputValue, setInputValue] = React.useState('');


    const handleSetIncludedValue = () => {

    }
    return (
        <>
            {
                (DesertDetailsState || miniCoolersDetailsState || otherAirCoolersDetailsState || portableCoolersDetailsState || towerCoolersDetailsState || windowCoolersDetailsState) && (
                    <>

                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='modalnumber'
                                rules={{
                                    required: "Modal Number is required",
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Modal Number </label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="AZL20"
                                                id="modalnumber"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.modalnumber)}
                                            />
                                        </div>

                                    </>
                                )}
                            />

                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='warrantyDesc'
                                rules={{
                                    required: "warranty description is required",
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Warranty Description </label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="1 year manufacturer warranty is non-transferable and valid for 1 year from the original date of purchase."
                                                id="warrantyDesc"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.warrantyDesc)}
                                            />
                                        </div>

                                    </>
                                )}
                            />

                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>

                            <Controller
                                control={control}
                                name="includedComponent"
                                rules={{
                                    required: "This field is required",
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Included Components</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="1 year manufacturer."
                                                id="includedComponent"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                onFocus={() => setIsFocused(true)}
                                                onBlur={() => setIsFocused(false)}
                                                error={Boolean(errors.includedComponent)}
                                            />
                                            {errors.inputValue && <p>{errors.inputValue.message}</p>}

                                            {isFocused && (
                                                <ul>
                                                    <li onClick={handleSetIncludedValue} value="remote">remote</li>
                                                    <li>cover</li>
                                                    <li>wheels</li>
                                                </ul>
                                            )}
                                        </div>


                                    </>
                                )}
                            />


                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name="itemOEMauth"
                                rules={{
                                    required: "This field  is required",
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2"> Is the item OEM authorized?</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                id="itemOEMauth-select"
                                                variant="outlined"
                                                select
                                                style={{ width: "100%" }}
                                                placeholder="women"
                                                {...field}
                                                error={Boolean(errors.itemOEMauth)}

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
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='numberofBoxes'
                                rules={{
                                    required: "this field is required",
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2"> Number of Boxes </label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="5"
                                                id="numberofBoxes"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.numberofBoxes)}
                                            />
                                        </div>

                                    </>
                                )}
                            />
                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                <label className='labelbold'>Item Dimensions D x W x H</label>
                            </div>
                            <div className="col-8 col-sm-7 col-lg-6">
                                <div>
                                    <div className='row align-items-end'>
                                        <Controller
                                            control={control}
                                            name='itemDepthfrontToback'
                                            rules={{
                                                required: "this field is required",
                                                pattern: {
                                                    value: new RegExp('^[0-9]+$'),
                                                    message: "not a valid formate"
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-12 col-sm-6">
                                                        <div className='d-flex flex-column' style={{ width: "100%" }}>
                                                            <label className="labelbold me-2">Item Depth Front To Back</label>
                                                            <TextField
                                                                placeholder="30"
                                                                id="itemDepthfrontToback"
                                                                variant="outlined"
                                                                {...field}

                                                                error={Boolean(errors.itemDepthfrontToback)}
                                                            />
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        />
                                        <Controller
                                            control={control}
                                            name='itemDepthfrontTobackUnit'
                                            rules={{
                                                required: "this is required"
                                            }}
                                            render={({ field }) => (
                                                <>

                                                    <div className="col-12 col-sm-6">
                                                        <TextField
                                                            id="itemDepthfrontTobackUnit"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            {...field}
                                                            error={Boolean(errors.itemDepthfrontTobackUnit)}
                                                        >
                                                            <MenuItem value="">-Select-</MenuItem>
                                                            <MenuItem value="New">Centimeters</MenuItem>
                                                        </TextField>
                                                    </div>
                                                </>
                                            )}

                                        />

                                    </div>
                                    <div className='row align-items-end'>
                                        <Controller
                                            control={control}
                                            name='itemWidthsideToside'
                                            rules={{
                                                required: "this field is required",
                                                pattern: {
                                                    value: new RegExp('^[0-9]+$'),
                                                    message: "not a valid formate"
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-12 col-sm-6">
                                                        <div className='d-flex flex-column' style={{ width: "100%" }}>
                                                            <label className="labelbold me-2">Item Width Side to Side</label>
                                                            <TextField
                                                                placeholder="25"
                                                                id="itemWidthsideToside"
                                                                variant="outlined"
                                                                {...field}
                                                                error={Boolean(errors.itemWidthsideToside)}
                                                            />
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        />
                                        <Controller
                                            control={control}
                                            name='itemWidthsideTosideUnit'
                                            rules={{
                                                required: "this field is required"
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-12 col-sm-6">
                                                        <TextField
                                                            id="itemWidthsideTosideUnit"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            {...field}
                                                            error={Boolean(errors.itemWidthsideTosideUnit)}
                                                        >
                                                            <MenuItem value="">-Select-</MenuItem>
                                                            <MenuItem value="New">Centimeters</MenuItem>
                                                        </TextField>
                                                    </div>
                                                </>
                                            )}
                                        />
                                    </div>
                                    <div className='row align-items-end'>
                                        <Controller
                                            control={control}
                                            name='itemHeightbaseTotop'
                                            rules={{
                                                required: "this field is required",
                                                pattern: {
                                                    value: new RegExp('^[0-9]+$'),
                                                    message: "not a valid formate"
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-12 col-sm-6">
                                                        <div className='d-flex flex-column' style={{ width: "100%" }}>
                                                            <label className="labelbold me-2">Height Base to Top</label>
                                                            <TextField
                                                                placeholder="80"
                                                                id="itemHeightbaseTotop"
                                                                variant="outlined"
                                                                {...field}

                                                                error={Boolean(errors.itemHeightbaseTotop)}
                                                            />
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        />
                                        <Controller
                                            control={control}
                                            name='itemHeightbaseTotopUnit'
                                            rules={{
                                                required: "this field is required"
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-12 col-sm-6">
                                                        <TextField
                                                            id="itemHeightbaseTotopUnit"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            {...field}
                                                            error={Boolean(errors.itemHeightbaseTotopUnit)}
                                                        >
                                                            <MenuItem value="">-Select-</MenuItem>
                                                            <MenuItem value="New">Centimeters</MenuItem>

                                                        </TextField>
                                                    </div>
                                                </>
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='itemManufacturer'
                                rules={{
                                    required: "this field is required",
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Manufacturer</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="XYZ Pvt Ltd"
                                                id="itemManufacturer"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.itemManufacturer)}
                                            />
                                        </div>

                                    </>
                                )}
                            />

                        </div>
                    </>
                )
            }

            {
                (airIonizersDetailsState || carAirPurifierDetailsState || charcoalAirPuriDetailsSt || electroAirPuriDetailsSt || hepaAirPuriDetailsSt || otherAirPuriDetailsSt
                    || portableAirPuriDetailsSt || ulpaAirPuriDetailsSt || otherDeodorisersDetailsSt || blowerFansDetailsSt || boxFansDetailsSt || ceilingFansDetailsSt || clipFansDetailsSt
                    || drumFansDetailsSt || exhaustFansDetailsSt || floorFansDetailsSt || otherFansDetailsSt || pedestalFansDetailsSt || personalFansDetailsSt || tableFansDetailsSt || towerFansDetailsSt
                    || vortexActionFansDetailsSt || wallMountedFansDetailsSt || windowFansDetailsSt) && (
                    <>
                        <h5>Appliances/
                            Heating & Cooling/
                            Air Purifiers/
                            Air Ionizers
                        </h5>
                        {/* Model,Number of Items,Unit Count,Unit Count Type,Product Care Instructions,Contains Liquid Contents?,Is Assembly Required,Number of Pieces,Included Components,Size,Color,Material Type,Number of Boxes,Manufacturer,Item Dimensions D x W x H */}

                        <div className="row">
                            <Controller
                                control={control}
                                name='modelname'
                                rules={{
                                    required: "this field is required",
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">model</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="model"
                                                id="modelname"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.modelname)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='numberofitems'
                                rules={{
                                    required: "Number of Items is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "value is invalid"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Number of Items</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="1"
                                                id="numberofitems"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.numberofitems)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='unitCount'
                                rules={{
                                    required: "this field is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "value is invalid"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Unit Count</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="12"
                                                id="unitCount"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.unitCount)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name="unitCountType"
                                rules={{
                                    required: "this field is required",
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Unit Count Type</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                id="unitCountType-select"
                                                variant="outlined"
                                                select
                                                style={{ width: "100%" }}
                                                placeholder="women"
                                                {...field}
                                                error={Boolean(errors.unitCountType)}

                                            >
                                                <MenuItem value="">-Select-</MenuItem>
                                                <MenuItem value="Women">Meters</MenuItem>
                                                <MenuItem value="Unisex Children">Pouch</MenuItem>
                                                <MenuItem value="Men">Grams</MenuItem>
                                                <MenuItem value="Boys">Liters</MenuItem>
                                                <MenuItem value="Girls">Mililiters</MenuItem>
                                                <MenuItem value="Set">Set</MenuItem>
                                                <MenuItem value="Kilograms">Kilograms</MenuItem>
                                                <MenuItem value="Count">Count</MenuItem>
                                                <MenuItem value="Square Meters">Square Meters</MenuItem>
                                                <MenuItem value="Case">Case</MenuItem>
                                                <MenuItem value="Feet">Feet</MenuItem>
                                                <MenuItem value="Can">Can</MenuItem>
                                                <MenuItem value="Pounds">Pounds</MenuItem>
                                                <MenuItem value="Piece">Piece</MenuItem>
                                                <MenuItem value="Ounce">Ounce</MenuItem>
                                                <MenuItem value="Pint">Pint</MenuItem>
                                                <MenuItem value="Pack">Pack</MenuItem>
                                                <MenuItem value="Square feet">Square feet</MenuItem>
                                                <MenuItem value="Fluid Ounces">Fluid Ounces</MenuItem>
                                            </TextField>
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productCareInstruction'
                                rules={{
                                    required: "this field is required",

                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Product Care Instructions</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="Dry clean only"
                                                id="productCareInstruction"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.productCareInstruction)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name="containsliquidcontent"
                                rules={{
                                    required: "Contains liquid content is required",
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Contains Liquid Contents?</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                id="containsliquidcontent-select"
                                                variant="outlined"
                                                select
                                                style={{ width: "100%" }}
                                                placeholder="select"
                                                {...field}
                                                error={Boolean(errors.containsliquidcontent)}
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
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name="assemblyRequired"
                                rules={{
                                    required: "this field is required",
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Is Assembly Required</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                id="assemblyRequired-select"
                                                variant="outlined"
                                                select
                                                style={{ width: "100%" }}
                                                placeholder="select"
                                                {...field}
                                                error={Boolean(errors.assemblyRequired)}
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
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='numberofPieces'
                                rules={{
                                    required: "this field is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "value is invalid"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Number of Pieces</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="5"
                                                id="numberofPieces"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.numberofPieces)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                <label className="labelbold me-2">Included Components</label>
                            </div>
                            <div className="col-8 col-sm-7 col-lg-6"></div>

                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSize'
                                rules={{
                                    required: "this field is required",

                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Size</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder=""
                                                id="productSize"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.productSize)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productColor'
                                rules={{
                                    required: "this field is required",

                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Color</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder=""
                                                id="productColor"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.productColor)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name="productColorMap"
                                rules={{
                                    required: "this field is required",
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Color Map</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                id="productColorMap-select"
                                                variant="outlined"
                                                select
                                                style={{ width: "100%" }}
                                                placeholder="select"
                                                {...field}
                                                error={Boolean(errors.productColorMap)}
                                            >
                                                <MenuItem value="">-Select-</MenuItem>
                                                <MenuItem value="Bronze">Bronze</MenuItem>
                                                <MenuItem value="Brown">Brown</MenuItem>
                                                <MenuItem value="Gold">Gold</MenuItem>
                                                <MenuItem value="Blue">Blue</MenuItem>
                                                <MenuItem value="Multicolor">Multicolor</MenuItem>
                                                <MenuItem value="Black">Black</MenuItem>
                                                <MenuItem value="Orange">Orange</MenuItem>
                                                <MenuItem value="Clear">Clear</MenuItem>
                                                <MenuItem value="Red">Red</MenuItem>
                                                <MenuItem value="Silver">Silver</MenuItem>
                                                <MenuItem value="Pink">Pink</MenuItem>
                                                <MenuItem value="White">White</MenuItem>
                                                <MenuItem value="Metalic">Metalic</MenuItem>
                                                <MenuItem value="Beige">Beige</MenuItem>
                                                <MenuItem value="Purple">Purple</MenuItem>
                                                <MenuItem value="Yellow">Yellow</MenuItem>
                                                <MenuItem value="Turquoise">Turquoise</MenuItem>
                                                <MenuItem value="Green">Green</MenuItem>
                                                <MenuItem value="Grey">Grey</MenuItem>
                                                <MenuItem value="Offwhite">Offwhite</MenuItem>
                                            </TextField>
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name="materialType"
                                rules={{
                                    required: "this field is required",
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Material Type</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                id="materialType-select"
                                                variant="outlined"
                                                select
                                                style={{ width: "100%" }}
                                                placeholder="select"
                                                {...field}
                                                error={Boolean(errors.materialType)}
                                            >
                                                <MenuItem value="">-Select-</MenuItem>
                                                <MenuItem value="Nylon">Nylon</MenuItem>
                                                <MenuItem value="Aluminum">Aluminum</MenuItem>
                                                <MenuItem value="Solid Gold">Solid Gold</MenuItem>
                                                <MenuItem value="Cedar">Cedar</MenuItem>
                                                <MenuItem value="Stone">Stone</MenuItem>
                                                <MenuItem value="Porcelain">Porcelain</MenuItem>
                                                <MenuItem value="Porcelain Bone China">Porcelain Bone China</MenuItem>
                                                <MenuItem value="Pewter">Pewter</MenuItem>
                                                <MenuItem value="Stainless Steel">Stainless Steel</MenuItem>
                                                <MenuItem value="Teracotta">Teracotta</MenuItem>
                                                <MenuItem value="Neoprene">Neoprene</MenuItem>
                                                <MenuItem value="Copper">Copper</MenuItem>
                                                <MenuItem value="Polycarbonate">Polycarbonate</MenuItem>
                                                <MenuItem value="Recycled">Recycled</MenuItem>
                                                <MenuItem value="Bronze">Bronze</MenuItem>
                                                <MenuItem value="Clay">Clay</MenuItem>
                                                <MenuItem value="Elmwood">Elmwood</MenuItem>
                                                <MenuItem value="Polyester">Polyester</MenuItem>
                                                <MenuItem value="Hard-Anodized Aluminum">Hard-Anodized Aluminum</MenuItem>
                                                <MenuItem value="Leaded Crystal">Leaded Crystal</MenuItem>
                                                <MenuItem value="Silicone">Silicone</MenuItem>
                                                <MenuItem value="Cherrywood">Cherrywood</MenuItem>
                                                <MenuItem value="Marble">Marble</MenuItem>
                                                <MenuItem value="Nonstick">Nonstick</MenuItem>
                                                <MenuItem value="Silver">Silver</MenuItem>
                                                <MenuItem value="Pine">Pine</MenuItem>
                                                <MenuItem value="Oak">Oak</MenuItem>
                                                <MenuItem value="Non-Leaded Crystal">Non-Leaded Crystal</MenuItem>
                                                <MenuItem value="Bamboo">Bamboo</MenuItem>
                                                <MenuItem value="Fabric">Fabric</MenuItem>
                                                <MenuItem value="Acrylic">Acrylic</MenuItem>
                                                <MenuItem value="Crystal">Crystal</MenuItem>
                                                <MenuItem value="Silver-Plated">Silver-Plated</MenuItem>
                                                <MenuItem value="Synthetic">Synthetic</MenuItem>
                                                <MenuItem value="Birch">Birch</MenuItem>
                                                <MenuItem value="18/8 Steel">18/8 Steel</MenuItem>
                                                <MenuItem value="Beechwood">Beechwood</MenuItem>
                                                <MenuItem value="Stoneware">Stoneware</MenuItem>
                                                <MenuItem value="Brass">Brass</MenuItem>
                                                <MenuItem value="Multi-ply">Multi-ply</MenuItem>
                                                <MenuItem value="Glass">Glass</MenuItem>
                                                <MenuItem value="Leather">Leather</MenuItem>
                                                <MenuItem value="Iron">Iron</MenuItem>
                                                <MenuItem value="Plastic">Plastic</MenuItem>
                                                <MenuItem value="Cotton">Cotton</MenuItem>
                                                <MenuItem value="Paraffin">Paraffin</MenuItem>
                                                <MenuItem value="Polyresin">Polyresin</MenuItem>
                                                <MenuItem value="Wax">Wax</MenuItem>
                                                <MenuItem value="Bone China">Bone China</MenuItem>
                                                <MenuItem value="Platinume">Platinume</MenuItem>
                                                <MenuItem value="Chrome">Chrome</MenuItem>
                                                <MenuItem value="Mahogany">Mahogany</MenuItem>
                                                <MenuItem value="Olive Wood">Olive Wood</MenuItem>
                                                <MenuItem value="18/10 Steel">18/10 Steel</MenuItem>
                                                <MenuItem value="Rubber">Rubber</MenuItem>
                                                <MenuItem value="Teak">Teak</MenuItem>
                                                <MenuItem value="Maple">Maple</MenuItem>
                                                <MenuItem value="Acrylic Coated Cotton">Acrylic Coated Cotton</MenuItem>
                                                <MenuItem value="Rosewood">Rosewood</MenuItem>
                                                <MenuItem value="Cork">Cork</MenuItem>
                                                <MenuItem value="Melamine">Melamine</MenuItem>
                                                <MenuItem value="Gilded Gold">Gilded Gold</MenuItem>
                                                <MenuItem value="HardWood">HardWood</MenuItem>
                                                <MenuItem value="Steel">Steel</MenuItem>
                                                <MenuItem value="Carbon">Carbon</MenuItem>
                                                <MenuItem value="Zinc">Zinc</MenuItem>
                                                <MenuItem value="Earthenware">Earthenware</MenuItem>
                                                <MenuItem value="Chromium Steel">Chromium Steel</MenuItem>
                                                <MenuItem value="Walnut">Walnut</MenuItem>
                                                <MenuItem value="Cast Iron">Cast Iron</MenuItem>
                                                <MenuItem value="Rattan & Wicker">Rattan & Wicker</MenuItem>
                                                <MenuItem value="Tin">Tin</MenuItem>
                                                <MenuItem value="Ceramic">Ceramic</MenuItem>
                                                <MenuItem value="Paper">Paper</MenuItem>
                                                <MenuItem value="Tritan">Tritan</MenuItem>
                                                <MenuItem value="Nickel">Nickel</MenuItem>
                                                <MenuItem value="Polycast">Polycast</MenuItem>
                                                <MenuItem value="Other">Other</MenuItem>
                                            </TextField>
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='numberofBoxes'
                                rules={{
                                    required: "this field is required",
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2"> Number of Boxes </label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="5"
                                                id="numberofBoxes"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.numberofBoxes)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                <label className='labelbold'>Item Dimensions D x W x H</label>
                            </div>
                            <div className="col-8 col-sm-7 col-lg-6">

                                <div className='row align-items-end'>
                                    <Controller
                                        control={control}
                                        name='itemDepthfrontToback'
                                        rules={{
                                            required: "this field is required",
                                            pattern: {
                                                value: new RegExp('^[0-9]+$'),
                                                message: "not a valid formate"
                                            }
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-12 col-sm-6 col-lg-6">
                                                    <label className="labelbold me-2">Item Depth Front To Back</label>
                                                    <TextField
                                                        placeholder="30"
                                                        id="itemDepthfrontToback"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.itemDepthfrontToback)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                    <Controller
                                        control={control}
                                        name='itemDepthfrontTobackUnit'
                                        rules={{
                                            required: "this is required"
                                        }}
                                        render={({ field }) => (
                                            <>

                                                <div className="col-12 col-sm-6 col-lg-6">
                                                    <TextField
                                                        id="itemDepthfrontTobackUnit"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        {...field}
                                                        error={Boolean(errors.itemDepthfrontTobackUnit)}
                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="New">Centimeters</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}

                                    />

                                </div>
                                <div className='row align-items-end'>
                                    <Controller
                                        control={control}
                                        name='itemWidthsideToside'
                                        rules={{
                                            required: "this field is required",
                                            pattern: {
                                                value: new RegExp('^[0-9]+$'),
                                                message: "not a valid formate"
                                            }
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-12 col-sm-6 col-lg-6">
                                                    <label className="labelbold me-2">Item Width Side to Side</label>
                                                    <TextField
                                                        placeholder="25"
                                                        id="itemWidthsideToside"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.itemWidthsideToside)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                    <Controller
                                        control={control}
                                        name='itemWidthsideTosideUnit'
                                        rules={{
                                            required: "this field is required"
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-12 col-sm-6 col-lg-6">
                                                    <TextField
                                                        id="itemWidthsideTosideUnit"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        {...field}
                                                        error={Boolean(errors.itemWidthsideTosideUnit)}
                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="New">Centimeters</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className='row align-items-end'>
                                    <Controller
                                        control={control}
                                        name='itemHeightbaseTotop'
                                        rules={{
                                            required: "this field is required",
                                            pattern: {
                                                value: new RegExp('^[0-9]+$'),
                                                message: "not a valid formate"
                                            }
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-12 col-sm-6 col-lg-6">
                                                    <label className="labelbold me-2">Height Base to Top</label>
                                                    <TextField
                                                        placeholder="80"
                                                        id="itemHeightbaseTotop"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.itemHeightbaseTotop)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                    <Controller
                                        control={control}
                                        name='itemHeightbaseTotopUnit'
                                        rules={{
                                            required: "this field is required"
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-12 col-sm-6 col-lg-6">
                                                    <TextField
                                                        id="itemHeightbaseTotopUnit"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        {...field}
                                                        error={Boolean(errors.itemHeightbaseTotopUnit)}
                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="New">Centimeters</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                    </>)}

            {babyShopState && (
                <>
                    <h5>Baby care / Bathing / Babyshop</h5>
                    <div>
                        <Controller
                            control={control}
                            name="targetAudience"
                            rules={{
                                required: "Target Audience is required",
                            }}
                            render={({ field }) => (
                                <>
                                    <div className='d-flex align-items-center mb-3'>
                                        <label className="labelbold me-2">Target Audience</label>
                                        <TextField
                                            id="targetAudience-select"
                                            variant="outlined"
                                            select
                                            style={{ width: "50%" }}
                                            placeholder="women"
                                            {...field}
                                            error={Boolean(errors.targetAudience)}

                                        >
                                            <MenuItem value="">-Select-</MenuItem>
                                            <MenuItem value="Women">Women</MenuItem>
                                            <MenuItem value="Unisex Children">Unisex Children</MenuItem>
                                            <MenuItem value="Men">Men</MenuItem>
                                            <MenuItem value="Boys">Boys</MenuItem>
                                            <MenuItem value="Girls">Girls</MenuItem>
                                            <MenuItem value="Unisex Audit">Unisex Adult</MenuItem>
                                        </TextField>
                                    </div>
                                </>
                            )}
                        />
                    </div>
                    {/* <div>
                <Controller
                    control={control}
                    name='searchTerms'
                    rules={{
                        required: "Search Terms is required"
                    }}
                    render={({ field }) => (
                        <>
                            <div className='d-flex align-items-center mb-3'>
                                <label className="labelbold me-2">Search Tearms</label>
                                <TextField
                                    placeholder="Electric"
                                    id="searchTerms"
                                    variant="outlined"
                                    {...field}
                                    style={{ width: "50%" }}
                                    error={Boolean(errors.searchTerms)}
                                />
                            </div>
                        </>
                    )}
                />

            </div> */}
                    <div>
                        <Controller
                            control={control}
                            name='manufacturepartno'
                            rules={{
                                required: "Manufacturer Part Number is required",
                            }}
                            render={({ field }) => (
                                <>
                                    <div className='d-flex align-items-center mb-3'>
                                        <label className="labelbold me-2">Manufacturer Part Number </label>
                                        <TextField
                                            placeholder="SB-122"
                                            id="manufacturepartno"
                                            variant="outlined"
                                            {...field}
                                            style={{ width: "50%" }}
                                            error={Boolean(errors.manufacturepartno)}
                                        />
                                    </div>
                                </>
                            )}
                        />

                    </div>
                    {/* <div>
                <Controller
                    control={control}
                    name="variationTheme"
                    rules={{
                        required: "Variation Theme is required",
                    }}
                    render={({ field }) => (
                        <>
                            <div className='d-flex align-items-center mb-3'>
                                <label className="labelbold me-2">Variation Theme</label>
                                <TextField
                                    id="variationTheme-select"
                                    variant="outlined"
                                    select
                                    style={{ width: "50%" }}
                                    placeholder="women"
                                    {...field}
                                    error={Boolean(errors.variationTheme)}

                                >
                                    <MenuItem value="">-Select-</MenuItem>
                                    <MenuItem value="Numberofitems">Numberofitems</MenuItem>
                                    <MenuItem value="Itemform">Itemform</MenuItem>
                                    <MenuItem value="Sizename-numberofitems">Sizename-numberofitems</MenuItem>
                                    <MenuItem value="Color">Color</MenuItem>
                                    <MenuItem value="Size-unitcount">Size-unitcount</MenuItem>
                                    <MenuItem value="Itemform-sizename">Itemform-sizename</MenuItem>
                                    <MenuItem value="ColourAndScent">Colour & Scent</MenuItem>
                                    <MenuItem value="Size-Color">Size-Color</MenuItem>
                                    <MenuItem value="Sizename-colorname-numberofitems">Sizename-colorname-numberofitems</MenuItem>
                                    <MenuItem value="Size-Scent">Size-Scent</MenuItem>
                                    <MenuItem value="SizeName">SizeName</MenuItem>
                                    <MenuItem value="colorname-numberofitems">colorname-numberofitems</MenuItem>
                                    <MenuItem value="size">size</MenuItem>
                                    <MenuItem value="Scent">Scent</MenuItem>
                                    <MenuItem value="model-sizename">model-sizename</MenuItem>
                                    <MenuItem value="model">model</MenuItem>
                                    <MenuItem value="ColorName">ColorName</MenuItem>
                                    <MenuItem value="itemweight">itemweight</MenuItem>
                                </TextField>
                            </div>
                        </>
                    )}
                />
            </div> */}
                    <div>
                        <Controller
                            control={control}
                            name='numberofitems'
                            rules={{
                                required: "Number of Items is required",
                                pattern: {
                                    value: new RegExp('^[0-9]+$'),
                                    message: "value is invalid"
                                }
                            }}
                            render={({ field }) => (
                                <>
                                    <div className='d-flex align-items-center mb-3'>
                                        <label className="labelbold me-2">Number of Items</label>
                                        <TextField
                                            placeholder="1"
                                            id="numberofitems"
                                            variant="outlined"
                                            {...field}
                                            style={{ width: "50%" }}
                                            error={Boolean(errors.numberofitems)}
                                        />
                                    </div>
                                </>
                            )}
                        />

                    </div>
                    <div>
                        <Controller
                            control={control}
                            name='safetyWarning'
                            rules={{
                                required: "safety warning is required"
                            }}
                            render={({ field }) => (
                                <>
                                    <div className='d-flex align-items-center mb-3'>
                                        <label className="labelbold me-2">Safety Warning</label>
                                        <TextField
                                            placeholder="Consult with a doctor before using this product."
                                            id="safetyWarning"
                                            variant="outlined"
                                            {...field}
                                            style={{ width: "50%" }}
                                            error={Boolean(errors.safetyWarning)}
                                        />
                                    </div>
                                </>
                            )}
                        />

                    </div>
                    <div>
                        <Controller
                            control={control}
                            name='ppuCount'
                            rules={{
                                required: "PPU Count is required",
                                pattern: {
                                    value: new RegExp('^[0-9]+$'),
                                    message: "value is invalid"
                                }
                            }}
                            render={({ field }) => (
                                <>
                                    <div className='d-flex align-items-center mb-3'>
                                        <label className="labelbold me-2">PPU Count</label>
                                        <TextField
                                            placeholder="6"
                                            id="ppuCount"
                                            variant="outlined"
                                            {...field}
                                            style={{ width: "50%" }}
                                            error={Boolean(errors.ppuCount)}
                                        />
                                    </div>
                                </>
                            )}
                        />

                    </div>
                    <div>
                        <Controller
                            control={control}
                            name="ppuCountUnit"
                            rules={{
                                required: "PPU Count Unit of Measure is required",
                            }}
                            render={({ field }) => (
                                <>
                                    <div className='d-flex align-items-center mb-3'>
                                        <label className="labelbold me-2">PPU Count Unit of Measure</label>
                                        <TextField
                                            id="ppuCountUnit-select"
                                            variant="outlined"
                                            select
                                            style={{ width: "50%" }}
                                            placeholder="women"
                                            {...field}
                                            error={Boolean(errors.ppuCountUnit)}

                                        >
                                            <MenuItem value="">-Select-</MenuItem>
                                            <MenuItem value="count">count</MenuItem>
                                            <MenuItem value="gram">gram</MenuItem>
                                            <MenuItem value="metre">metre</MenuItem>
                                            <MenuItem value="mililitre">mililitre</MenuItem>
                                            <MenuItem value="Gsquare metreirls">square metre</MenuItem>

                                        </TextField>
                                    </div>
                                </>
                            )}
                        />
                    </div>
                    <div>
                        <Controller
                            control={control}
                            name="containsliquidcontent"
                            rules={{
                                required: "Contains liquid content is required",
                            }}
                            render={({ field }) => (
                                <>
                                    <div className='d-flex align-items-center mb-3'>
                                        <label className="labelbold me-2">Contains Liquid Contents?</label>
                                        <TextField
                                            id="containsliquidcontent-select"
                                            variant="outlined"
                                            select
                                            style={{ width: "50%" }}
                                            placeholder="select"
                                            {...field}
                                            error={Boolean(errors.containsliquidcontent)}

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
                            name="itemHeatSensitive"
                            rules={{
                                required: "this field is required",
                            }}
                            render={({ field }) => (
                                <>
                                    <div className='d-flex align-items-center mb-3'>
                                        <label className="labelbold me-2">Is the Item Heat Sensitive?</label>
                                        <TextField
                                            id="itemHeatSensitive-select"
                                            variant="outlined"
                                            select
                                            style={{ width: "50%" }}
                                            placeholder="select"
                                            {...field}
                                            error={Boolean(errors.itemHeatSensitive)}

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
                            name="itemForm"
                            rules={{
                                required: "this field is required",
                            }}
                            render={({ field }) => (
                                <>
                                    <div className='d-flex align-items-center mb-3'>
                                        <label className="labelbold me-2">Item Form</label>
                                        <TextField
                                            id="itemForm-select"
                                            variant="outlined"
                                            select
                                            style={{ width: "50%" }}
                                            placeholder="Cream"
                                            {...field}
                                            error={Boolean(errors.itemForm)}

                                        >
                                            <MenuItem value="">-Select-</MenuItem>
                                            <MenuItem value="Bar">Bar</MenuItem>
                                            <MenuItem value="Cream">Cream</MenuItem>
                                            <MenuItem value="Gel">Gel</MenuItem>
                                            <MenuItem value="Paste">Paste</MenuItem>
                                            <MenuItem value="Lotion">Lotion</MenuItem>
                                            <MenuItem value="Mousse">Mousse</MenuItem>
                                            <MenuItem value="Oil">Oil</MenuItem>
                                            <MenuItem value="Serum">Serum</MenuItem>
                                            <MenuItem value="Flake">Flake</MenuItem>
                                            <MenuItem value="Blam">Blam</MenuItem>
                                            <MenuItem value="Powder">Powder</MenuItem>
                                            <MenuItem value="Wipe">Wipe</MenuItem>
                                            <MenuItem value="Capsule">Capsule</MenuItem>
                                            <MenuItem value="Aerosol">Aerosol</MenuItem>


                                        </TextField>
                                    </div>
                                </>
                            )}
                        />
                    </div>
                    <div>
                        <Controller
                            control={control}
                            name="lifestyle"
                            rules={{
                                required: "this field is required",
                            }}
                            render={({ field }) => (
                                <>
                                    <div className='d-flex align-items-center mb-3'>
                                        <label className="labelbold me-2">Lifestyle</label>
                                        <TextField
                                            id="lifestyle-select"
                                            variant="outlined"
                                            select
                                            style={{ width: "50%" }}
                                            placeholder="Mass Beauty,Premium Beauty"
                                            {...field}
                                            error={Boolean(errors.lifestyle)}

                                        >
                                            <MenuItem value="">-Select-</MenuItem>
                                            <MenuItem value="Premium-Beauty">Premium Beauty</MenuItem>
                                            <MenuItem value="Mass-Beauty">Mass Beauty</MenuItem>
                                        </TextField>
                                    </div>
                                </>
                            )}
                        />
                    </div>
                    <div>
                        <Controller
                            control={control}
                            name="skinType"
                            rules={{
                                required: "this field is required",
                            }}
                            render={({ field }) => (
                                <>
                                    <div className='d-flex align-items-center mb-3'>
                                        <label className="labelbold me-2">Skin Type</label>
                                        <TextField
                                            id="skinType-select"
                                            variant="outlined"
                                            select
                                            style={{ width: "50%" }}
                                            placeholder="Sensitive"
                                            {...field}
                                            error={Boolean(errors.skinType)}

                                        >
                                            <MenuItem value="">-Select-</MenuItem>
                                            <MenuItem value="All">All</MenuItem>
                                            <MenuItem value="Oily">Oily</MenuItem>
                                            <MenuItem value="Combination">Combination</MenuItem>
                                            <MenuItem value="Sensitive">Sensitive</MenuItem>
                                            <MenuItem value="Dry">Dry</MenuItem>
                                            <MenuItem value="Normal">Normal</MenuItem>
                                        </TextField>
                                    </div>
                                </>
                            )}
                        />
                    </div>
                    <div>
                        <Controller
                            control={control}
                            name="scent"
                            rules={{
                                required: "this field is required",
                            }}
                            render={({ field }) => (
                                <>
                                    <div className='d-flex align-items-center mb-3'>
                                        <label className="labelbold me-2">Scent</label>
                                        <TextField
                                            id="scent-select"
                                            variant="outlined"
                                            select
                                            style={{ width: "50%" }}
                                            placeholder="Musk"
                                            {...field}
                                            error={Boolean(errors.scent)}

                                        >
                                            <MenuItem value="">-Select-</MenuItem>
                                            <MenuItem value="Orchid">Orchid</MenuItem>
                                            <MenuItem value="Fresh">Fresh</MenuItem>
                                            <MenuItem value="Passion Fruit">Passion Fruit</MenuItem>
                                            <MenuItem value="Amber">Amber</MenuItem>
                                            <MenuItem value="Cherry">Cherry</MenuItem>
                                            <MenuItem value="Musk">Musk</MenuItem>
                                            <MenuItem value="Apricot">Apricot</MenuItem>
                                            <MenuItem value="Honeysuckel">Honeysuckel</MenuItem>
                                            <MenuItem value="Ginger">Ginger</MenuItem>
                                            <MenuItem value="Cedar">Cedar</MenuItem>
                                            <MenuItem value="Lemon">Lemon</MenuItem>
                                            <MenuItem value="Orange">Orange</MenuItem>
                                            <MenuItem value="Blueberry">Blueberry</MenuItem>
                                            <MenuItem value="Strawberry">Strawberry</MenuItem>
                                            <MenuItem value="Geranium">Geranium</MenuItem>
                                            <MenuItem value="Neem">Neem</MenuItem>
                                            <MenuItem value="Verbena">Verbena</MenuItem>
                                            <MenuItem value="Pomegranate">Pomegranate</MenuItem>
                                            <MenuItem value="Oat Blossom">Oat Blossom</MenuItem>
                                            <MenuItem value="Oriental">Oriental</MenuItem>
                                            <MenuItem value="Pear">Pear</MenuItem>
                                            <MenuItem value="Mint">Mint</MenuItem>
                                            <MenuItem value="Peppermint">Peppermint</MenuItem>
                                            <MenuItem value="Coriander">Coriander</MenuItem>
                                            <MenuItem value="Magnolia">Magnolia</MenuItem>
                                            <MenuItem value="Ylang Ylang">Ylang Ylang</MenuItem>
                                            <MenuItem value="Bergamot">Bergamot</MenuItem>
                                            <MenuItem value="Cantaloupe">Cantaloupe</MenuItem>
                                            <MenuItem value="Banana">Banana</MenuItem>
                                            <MenuItem value="Cranberry">Cranberry</MenuItem>
                                            <MenuItem value="Honey">Honey</MenuItem>
                                            <MenuItem value="Starfruit">Starfruit</MenuItem>
                                            <MenuItem value="Tobacco">Tobacco</MenuItem>
                                            <MenuItem value="Almond">Almond</MenuItem>
                                            <MenuItem value="Pine">Pine</MenuItem>
                                            <MenuItem value="Unscented">Unscented</MenuItem>
                                            <MenuItem value="Rosemary">Rosemary</MenuItem>
                                            <MenuItem value="Parsley">Parsley</MenuItem>
                                            <MenuItem value="Cucumber">Cucumber</MenuItem>
                                            <MenuItem value="Cherry Blossom">Cherry Blossom</MenuItem>
                                            <MenuItem value="Papaya">Papaya</MenuItem>
                                            <MenuItem value="Vanilla">Vanilla</MenuItem>
                                            <MenuItem value="Coconut">Coconut</MenuItem>
                                            <MenuItem value="Peach">Peach</MenuItem>
                                            <MenuItem value="Tea Tree">Tea Tree</MenuItem>
                                            <MenuItem value="Mango">Mango</MenuItem>
                                            <MenuItem value="Rose">Rose</MenuItem>
                                            <MenuItem value="Coffee">Coffee</MenuItem>
                                            <MenuItem value="Lily">Lily</MenuItem>
                                            <MenuItem value="Eucalyptus">Eucalyptus</MenuItem>
                                            <MenuItem value="Lavender">Lavender</MenuItem>
                                            <MenuItem value="Myrhh">Myrhh</MenuItem>
                                            <MenuItem value="Peony">Peony</MenuItem>
                                            <MenuItem value="Lemongrass">Lemongrass</MenuItem>
                                            <MenuItem value="Aquatic">Aquatic</MenuItem>
                                            <MenuItem value="Jasmine">Jasmine</MenuItem>
                                            <MenuItem value="Basil">Basil</MenuItem>
                                            <MenuItem value="Grapefruit">Grapefruit</MenuItem>
                                            <MenuItem value="Pineapple">Pineapple</MenuItem>
                                            <MenuItem value="Vetiver">Vetiver</MenuItem>
                                            <MenuItem value="Chamomile">Chamomile</MenuItem>
                                            <MenuItem value="Bay Rum">Bay Rum</MenuItem>
                                            <MenuItem value="Guava">Guava</MenuItem>
                                            <MenuItem value="Sandalwood">Sandalwood</MenuItem>
                                            <MenuItem value="Watermelon">Watermelon</MenuItem>
                                            <MenuItem value="Chocolate">Chocolate</MenuItem>
                                            <MenuItem value="Aloe Vera">Aloe Vera</MenuItem>
                                            <MenuItem value="Sage">Sage</MenuItem>
                                            <MenuItem value="Frankincense">Frankincense</MenuItem>
                                            <MenuItem value="Thyme">Thyme</MenuItem>
                                            <MenuItem value="Patchouli">Patchouli</MenuItem>
                                            <MenuItem value="Citrus">Citrus</MenuItem>
                                            <MenuItem value="Turmeric">Turmeric</MenuItem>
                                            <MenuItem value="Kiwi">Kiwi</MenuItem>
                                            <MenuItem value="Green Apple">Green Apple</MenuItem>
                                            <MenuItem value="Cypress">Cypress</MenuItem>
                                            <MenuItem value="Tangerine">Tangerine</MenuItem>
                                            <MenuItem value="Raspberry">Raspberry</MenuItem>
                                            <MenuItem value="Carnation">Carnation</MenuItem>
                                        </TextField>
                                    </div>
                                </>
                            )}
                        />
                    </div>
                    <div>
                        <Controller
                            control={control}
                            name='meltingTemperature'
                            rules={{
                                required: "This field is required",
                                max: {
                                    value: 1100,
                                    message: "The value in this field exceeds the maximum quantity allowed: 1100"
                                }

                            }}
                            render={({ field }) => (
                                <>
                                    <div className='d-flex align-items-center mb-3'>
                                        <label className="labelbold me-2">Melting Temperature (degrees Celsius)</label>
                                        <TextField
                                            placeholder="100,200"
                                            id="meltingTemperature"
                                            variant="outlined"
                                            {...field}
                                            style={{ width: "50%" }}
                                            error={Boolean(errors.meltingTemperature)}
                                        />
                                        {Boolean(errors.meltingTemperature) && (
                                            <div className="error-message mt-1 mt-lg-0">
                                                {errors.meltingTemperature.message}
                                            </div>
                                        )}
                                    </div>
                                </>
                            )}
                        />

                    </div>
                    <div>
                        <Controller
                            control={control}
                            name="meltingTemperatureUnit"
                            rules={{
                                required: "this field is required",
                            }}
                            render={({ field }) => (
                                <>
                                    <div className='d-flex align-items-center mb-3'>

                                        <TextField
                                            id="meltingTemperatureUnit-select"
                                            variant="outlined"
                                            select
                                            style={{ width: "50%" }}
                                            placeholder="Sensitive"
                                            {...field}
                                            error={Boolean(errors.meltingTemperatureUnit)}

                                        >
                                            <MenuItem value="">-Select-</MenuItem>
                                            <MenuItem value="degrees_fahrenheit">degrees_fahrenheit</MenuItem>
                                            <MenuItem value="Kelvin">Kelvin</MenuItem>
                                            <MenuItem value="degrees_celsius">degrees_celsius</MenuItem>

                                        </TextField>
                                    </div>
                                </>
                            )}
                        />
                    </div>
                    {/* <div>
                <Controller
                    control={control}
                    name='size'
                    rules={{
                        required: "This field is required",
                     
                    }}
                    render={({ field }) => (
                        <>
                            <div className='d-flex align-items-center mb-3'>
                                <label className="labelbold me-2">Size</label>
                                <TextField
                                    placeholder="6"
                                    id="ppuCount"
                                    variant="outlined"
                                    {...field}
                                    style={{ width: "50%" }}
                                    error={Boolean(errors.ppuCount)}
                                />
                            </div>
                        </>
                    )}
                />

            </div> */}
                </>
            )}

            {chalkdrawingDetailsState && (
                <>

                    <h5>Fine Art/
                        Drawing/
                        Chalk Drawings</h5>
                    <div className="row">
                        <Controller
                            control={control}
                            name='artistName'
                            rules={{
                                required: "artist Name is required"
                            }}
                            render={({ field }) => (
                                <>

                                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                                        <label className="labelbold me-2">Artist</label>
                                    </div>
                                    <div className="col-8 col-sm-7 col-lg-6">
                                        <TextField
                                            placeholder="Artist"
                                            id="artistName"
                                            variant="outlined"
                                            {...field}
                                            style={{ width: "100%" }}
                                            error={Boolean(errors.artistName)}
                                        />
                                    </div>

                                </>
                            )}
                        />

                    </div>
                    <div className="row" style={{ marginTop: "10px" }}>
                        <Controller
                            control={control}
                            name="artworkMedium"
                            rules={{
                                required: "artworkMedium is required",
                            }}
                            render={({ field }) => (
                                <>
                                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                                        <label className="labelbold me-2">Artwork Medium</label>
                                    </div>
                                    <div className="col-8 col-sm-7 col-lg-6">
                                        <TextField
                                            id="artworkMedium-select"
                                            variant="outlined"
                                            select
                                            style={{ width: "100%" }}
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
                    <div className="row" style={{ marginTop: "10px" }}>
                        <Controller
                            control={control}
                            name='productDate'
                            rules={{
                                required: "productDate is required",
                                pattern: {
                                    value: new RegExp('^[0-9]+$'),
                                    message: "not a valid formate"
                                }
                            }}
                            render={({ field }) => (
                                <>
                                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                                        <label className="labelbold me-2">Date</label>
                                    </div>
                                    <div className="col-8 col-sm-7 col-lg-6">
                                        <TextField
                                            placeholder="1998"
                                            id="productDate"
                                            variant="outlined"
                                            {...field}
                                            style={{ width: "100%" }}
                                            error={Boolean(errors.productDate)}
                                        />
                                    </div>
                                </>
                            )}
                        />

                    </div>
                    <div className="row" style={{ marginTop: "10px" }}>
                        <Controller
                            control={control}
                            name="productFramed"
                            rules={{
                                required: "productFramed is required",
                            }}
                            render={({ field }) => (
                                <>
                                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                                        <label className="labelbold me-2">Framed</label>
                                    </div>
                                    <div className="col-8 col-sm-7 col-lg-6">
                                        <TextField
                                            id="productFramed-select"
                                            variant="outlined"
                                            select
                                            style={{ width: "100%" }}
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
                    <div className="row" style={{ marginTop: "10px" }}>
                        <Controller
                            control={control}
                            name="productSaleType"
                            rules={{
                                required: "productSaleType is required",
                            }}
                            render={({ field }) => (
                                <>
                                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                                        <label className="labelbold me-2">Sale Type</label>
                                    </div>
                                    <div className="col-8 col-sm-7 col-lg-6">
                                        <TextField
                                            id="productSaleType-select"
                                            variant="outlined"
                                            select
                                            style={{ width: "100%" }}
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
            )}
            {
                (otherDehumidifiersDetailsSt || otherHumidifiersDetailsSt || singleRoomHumidifiersDetailsSt || wholeHouseHumidifiersDetailsSt) && (
                    <div>
                        <div>
                            <Controller
                                control={control}
                                name='modelname'
                                rules={{
                                    required: "this field is required",
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className='d-flex align-items-center my-3'>
                                            <label className="labelbold me-2">model</label>
                                            <TextField
                                                placeholder="model"
                                                id="modelname"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "50%" }}
                                                error={Boolean(errors.modelname)}
                                            />
                                        </div>
                                    </>
                                )}
                            />

                        </div>
                        <div>
                            <Controller
                                control={control}
                                name='numberofitems'
                                rules={{
                                    required: "Number of Items is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "value is invalid"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className='d-flex align-items-center mb-3'>
                                            <label className="labelbold me-2">Number of Items</label>
                                            <TextField
                                                placeholder="1"
                                                id="numberofitems"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "50%" }}
                                                error={Boolean(errors.numberofitems)}
                                            />
                                        </div>
                                    </>
                                )}
                            />

                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                <label className='labelbold'>Item Dimensions D x W x H</label>
                            </div>
                            <div className="col-8 col-sm-7 col-lg-6">
                                <div>
                                    <div className='row align-items-end'>
                                        <Controller
                                            control={control}
                                            name='itemDepthfrontToback'
                                            rules={{
                                                required: "this field is required",
                                                pattern: {
                                                    value: new RegExp('^[0-9]+$'),
                                                    message: "not a valid formate"
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-12 col-sm-6">
                                                        <div className='d-flex flex-column' style={{ width: "100%" }}>
                                                            <label className="labelbold me-2">Item Depth Front To Back</label>
                                                            <TextField
                                                                placeholder="30"
                                                                id="itemDepthfrontToback"
                                                                variant="outlined"
                                                                {...field}

                                                                error={Boolean(errors.itemDepthfrontToback)}
                                                            />
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        />
                                        <Controller
                                            control={control}
                                            name='itemDepthfrontTobackUnit'
                                            rules={{
                                                required: "this is required"
                                            }}
                                            render={({ field }) => (
                                                <>

                                                    <div className="col-12 col-sm-6">
                                                        <TextField
                                                            id="itemDepthfrontTobackUnit"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            {...field}
                                                            error={Boolean(errors.itemDepthfrontTobackUnit)}
                                                        >
                                                            <MenuItem value="">-Select-</MenuItem>
                                                            <MenuItem value="New">Centimeters</MenuItem>
                                                        </TextField>
                                                    </div>
                                                </>
                                            )}

                                        />

                                    </div>
                                    <div className='row align-items-end'>
                                        <Controller
                                            control={control}
                                            name='itemWidthsideToside'
                                            rules={{
                                                required: "this field is required",
                                                pattern: {
                                                    value: new RegExp('^[0-9]+$'),
                                                    message: "not a valid formate"
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-12 col-sm-6">
                                                        <div className='d-flex flex-column' style={{ width: "100%" }}>
                                                            <label className="labelbold me-2">Item Width Side to Side</label>
                                                            <TextField
                                                                placeholder="25"
                                                                id="itemWidthsideToside"
                                                                variant="outlined"
                                                                {...field}
                                                                error={Boolean(errors.itemWidthsideToside)}
                                                            />
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        />
                                        <Controller
                                            control={control}
                                            name='itemWidthsideTosideUnit'
                                            rules={{
                                                required: "this field is required"
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-12 col-sm-6">
                                                        <TextField
                                                            id="itemWidthsideTosideUnit"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            {...field}
                                                            error={Boolean(errors.itemWidthsideTosideUnit)}
                                                        >
                                                            <MenuItem value="">-Select-</MenuItem>
                                                            <MenuItem value="New">Centimeters</MenuItem>
                                                        </TextField>
                                                    </div>
                                                </>
                                            )}
                                        />
                                    </div>
                                    <div className='row align-items-end'>
                                        <Controller
                                            control={control}
                                            name='itemHeightbaseTotop'
                                            rules={{
                                                required: "this field is required",
                                                pattern: {
                                                    value: new RegExp('^[0-9]+$'),
                                                    message: "not a valid formate"
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-12 col-sm-6">
                                                        <div className='d-flex flex-column' style={{ width: "100%" }}>
                                                            <label className="labelbold me-2">Height Base to Top</label>
                                                            <TextField
                                                                placeholder="80"
                                                                id="itemHeightbaseTotop"
                                                                variant="outlined"
                                                                {...field}

                                                                error={Boolean(errors.itemHeightbaseTotop)}
                                                            />
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        />
                                        <Controller
                                            control={control}
                                            name='itemHeightbaseTotopUnit'
                                            rules={{
                                                required: "this field is required"
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-12 col-sm-6">
                                                        <TextField
                                                            id="itemHeightbaseTotopUnit"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            {...field}
                                                            error={Boolean(errors.itemHeightbaseTotopUnit)}
                                                        >
                                                            <MenuItem value="">-Select-</MenuItem>
                                                            <MenuItem value="New">Centimeters</MenuItem>

                                                        </TextField>
                                                    </div>
                                                </>
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>

                            <Controller
                                control={control}
                                name="includedComponent"
                                rules={{
                                    required: "This field is required",
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Included Components</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="1 year manufacturer."
                                                id="includedComponent"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                onFocus={() => setIsFocused(true)}
                                                onBlur={() => setIsFocused(false)}
                                                error={Boolean(errors.includedComponent)}
                                            />
                                            {errors.inputValue && <p>{errors.inputValue.message}</p>}

                                            {isFocused && (
                                                <ul>
                                                    <li onClick={handleSetIncludedValue} value="remote">remote</li>
                                                    <li>cover</li>
                                                    <li>wheels</li>
                                                </ul>
                                            )}
                                        </div>


                                    </>
                                )}
                            />


                        </div>
                        <div>
                            <Controller
                                control={control}
                                name='productSize'
                                rules={{
                                    required: "this field is required",

                                }}
                                render={({ field }) => (
                                    <>
                                        <div className='d-flex align-items-center mb-3'>
                                            <label className="labelbold me-2">Size</label>
                                            <TextField
                                                placeholder=""
                                                id="productSize"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "50%" }}
                                                error={Boolean(errors.productSize)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div>
                            <Controller
                                control={control}
                                name="materialType"
                                rules={{
                                    required: "this field is required",
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className='d-flex align-items-center mb-3'>
                                            <label className="labelbold me-2">Material Type</label>
                                            <TextField
                                                id="materialType-select"
                                                variant="outlined"
                                                select
                                                style={{ width: "50%" }}
                                                placeholder="select"
                                                {...field}
                                                error={Boolean(errors.materialType)}
                                            >
                                                <MenuItem value="">-Select-</MenuItem>
                                                <MenuItem value="Nylon">Nylon</MenuItem>
                                                <MenuItem value="Aluminum">Aluminum</MenuItem>
                                                <MenuItem value="Solid Gold">Solid Gold</MenuItem>
                                                <MenuItem value="Cedar">Cedar</MenuItem>
                                                <MenuItem value="Stone">Stone</MenuItem>
                                                <MenuItem value="Porcelain">Porcelain</MenuItem>
                                                <MenuItem value="Porcelain Bone China">Porcelain Bone China</MenuItem>
                                                <MenuItem value="Pewter">Pewter</MenuItem>
                                                <MenuItem value="Stainless Steel">Stainless Steel</MenuItem>
                                                <MenuItem value="Teracotta">Teracotta</MenuItem>
                                                <MenuItem value="Neoprene">Neoprene</MenuItem>
                                                <MenuItem value="Copper">Copper</MenuItem>
                                                <MenuItem value="Polycarbonate">Polycarbonate</MenuItem>
                                                <MenuItem value="Recycled">Recycled</MenuItem>
                                                <MenuItem value="Bronze">Bronze</MenuItem>
                                                <MenuItem value="Clay">Clay</MenuItem>
                                                <MenuItem value="Elmwood">Elmwood</MenuItem>
                                                <MenuItem value="Polyester">Polyester</MenuItem>
                                                <MenuItem value="Hard-Anodized Aluminum">Hard-Anodized Aluminum</MenuItem>
                                                <MenuItem value="Leaded Crystal">Leaded Crystal</MenuItem>
                                                <MenuItem value="Silicone">Silicone</MenuItem>
                                                <MenuItem value="Cherrywood">Cherrywood</MenuItem>
                                                <MenuItem value="Marble">Marble</MenuItem>
                                                <MenuItem value="Nonstick">Nonstick</MenuItem>
                                                <MenuItem value="Silver">Silver</MenuItem>
                                                <MenuItem value="Pine">Pine</MenuItem>
                                                <MenuItem value="Oak">Oak</MenuItem>
                                                <MenuItem value="Non-Leaded Crystal">Non-Leaded Crystal</MenuItem>
                                                <MenuItem value="Bamboo">Bamboo</MenuItem>
                                                <MenuItem value="Fabric">Fabric</MenuItem>
                                                <MenuItem value="Acrylic">Acrylic</MenuItem>
                                                <MenuItem value="Crystal">Crystal</MenuItem>
                                                <MenuItem value="Silver-Plated">Silver-Plated</MenuItem>
                                                <MenuItem value="Synthetic">Synthetic</MenuItem>
                                                <MenuItem value="Birch">Birch</MenuItem>
                                                <MenuItem value="18/8 Steel">18/8 Steel</MenuItem>
                                                <MenuItem value="Beechwood">Beechwood</MenuItem>
                                                <MenuItem value="Stoneware">Stoneware</MenuItem>
                                                <MenuItem value="Brass">Brass</MenuItem>
                                                <MenuItem value="Multi-ply">Multi-ply</MenuItem>
                                                <MenuItem value="Glass">Glass</MenuItem>
                                                <MenuItem value="Leather">Leather</MenuItem>
                                                <MenuItem value="Iron">Iron</MenuItem>
                                                <MenuItem value="Plastic">Plastic</MenuItem>
                                                <MenuItem value="Cotton">Cotton</MenuItem>
                                                <MenuItem value="Paraffin">Paraffin</MenuItem>
                                                <MenuItem value="Polyresin">Polyresin</MenuItem>
                                                <MenuItem value="Wax">Wax</MenuItem>
                                                <MenuItem value="Bone China">Bone China</MenuItem>
                                                <MenuItem value="Platinume">Platinume</MenuItem>
                                                <MenuItem value="Chrome">Chrome</MenuItem>
                                                <MenuItem value="Mahogany">Mahogany</MenuItem>
                                                <MenuItem value="Olive Wood">Olive Wood</MenuItem>
                                                <MenuItem value="18/10 Steel">18/10 Steel</MenuItem>
                                                <MenuItem value="Rubber">Rubber</MenuItem>
                                                <MenuItem value="Teak">Teak</MenuItem>
                                                <MenuItem value="Maple">Maple</MenuItem>
                                                <MenuItem value="Acrylic Coated Cotton">Acrylic Coated Cotton</MenuItem>
                                                <MenuItem value="Rosewood">Rosewood</MenuItem>
                                                <MenuItem value="Cork">Cork</MenuItem>
                                                <MenuItem value="Melamine">Melamine</MenuItem>
                                                <MenuItem value="Gilded Gold">Gilded Gold</MenuItem>
                                                <MenuItem value="HardWood">HardWood</MenuItem>
                                                <MenuItem value="Steel">Steel</MenuItem>
                                                <MenuItem value="Carbon">Carbon</MenuItem>
                                                <MenuItem value="Zinc">Zinc</MenuItem>
                                                <MenuItem value="Earthenware">Earthenware</MenuItem>
                                                <MenuItem value="Chromium Steel">Chromium Steel</MenuItem>
                                                <MenuItem value="Walnut">Walnut</MenuItem>
                                                <MenuItem value="Cast Iron">Cast Iron</MenuItem>
                                                <MenuItem value="Rattan & Wicker">Rattan & Wicker</MenuItem>
                                                <MenuItem value="Tin">Tin</MenuItem>
                                                <MenuItem value="Ceramic">Ceramic</MenuItem>
                                                <MenuItem value="Paper">Paper</MenuItem>
                                                <MenuItem value="Tritan">Tritan</MenuItem>
                                                <MenuItem value="Nickel">Nickel</MenuItem>
                                                <MenuItem value="Polycast">Polycast</MenuItem>
                                                <MenuItem value="Other">Other</MenuItem>
                                            </TextField>
                                        </div>
                                    </>
                                )}
                            />
                        </div>


                    </div>
                )
            }

            <div className="row" style={{ marginTop: "10px" }}>

                <Controller
                    control={control}
                    name="includedComponent"
                    rules={{
                        required: "This field is required",
                    }}
                    render={({ field }) => (
                        <>
                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                <label className="labelbold me-2">Included Components</label>
                            </div>
                            <div className="col-8 col-sm-7 col-lg-6">
                                <TextField
                                    placeholder="1 year manufacturer."
                                    id="includedComponent"
                                    variant="outlined"
                                    {...field}
                                    style={{ width: "100%" }}
                                    onFocus={() => setIsFocused(true)}
                                    onBlur={() => setIsFocused(false)}
                                    error={Boolean(errors.includedComponent)}
                                />
                                {errors.inputValue && <p>{errors.inputValue.message}</p>}

                                {/* {isFocused && (
                                    <ul>
                                        <li onClick={handleSetIncludedValue} value="remote">remote</li>
                                        <li>cover</li>
                                        <li>wheels</li>
                                    </ul>
                                )} */}
                                <TextField
                                    id="includedComponent-select"
                                    variant="outlined"
                                    select

                                    style={{ width: "50%" }}
                                    placeholder="select"
                                    {...field}
                                    error={Boolean(errors.includedComponent)}
                                >
                                    <MenuItem value="">-Select-</MenuItem>
                                    <MenuItem value="Nylon">Nylon</MenuItem>
                                    <MenuItem value="Aluminum">Aluminum</MenuItem>
                                    <MenuItem value="minum">minum</MenuItem>
                                    <MenuItem value="Aluum">Aluum</MenuItem>
                                </TextField>
                            </div>


                        </>
                    )}
                />
                {
                    (otherHeatNCoolingDetailsSt || airPuriPartNAccessDetailsSt || dehumidPartNAccessDetailsSt || evaCoolerPartNAccessDetailsSt || fanPartNAccessDetailsSt || heaterPartNAccessDetailsSt
                        || humidiPartNAccessDetailsSt || otherPartNAccessDetailsSt) && (
                        <>
                            <div className="row">
                                <Controller
                                    control={control}
                                    name='modelname'
                                    rules={{
                                        required: "this field is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">model</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="model"
                                                    id="modelname"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.modelname)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='numberofitems'
                                    rules={{
                                        required: "Number of Items is required",
                                        pattern: {
                                            value: new RegExp('^[0-9]+$'),
                                            message: "value is invalid"
                                        }
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Number of Items</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="1"
                                                    id="numberofitems"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.numberofitems)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='productCareInstruction'
                                    rules={{
                                        required: "this field is required",

                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Product Care Instructions</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="Dry clean only"
                                                    id="productCareInstruction"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.productCareInstruction)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name="containsliquidcontent"
                                    rules={{
                                        required: "Contains liquid content is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Contains Liquid Contents?</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    id="containsliquidcontent-select"
                                                    variant="outlined"
                                                    select
                                                    style={{ width: "100%" }}
                                                    placeholder="select"
                                                    {...field}
                                                    error={Boolean(errors.containsliquidcontent)}
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
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name="assemblyRequired"
                                    rules={{
                                        required: "this field is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Is Assembly Required</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    id="assemblyRequired-select"
                                                    variant="outlined"
                                                    select
                                                    style={{ width: "100%" }}
                                                    placeholder="select"
                                                    {...field}
                                                    error={Boolean(errors.assemblyRequired)}
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
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='numberofPieces'
                                    rules={{
                                        required: "this field is required",
                                        pattern: {
                                            value: new RegExp('^[0-9]+$'),
                                            message: "value is invalid"
                                        }
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Number of Pieces</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="5"
                                                    id="numberofPieces"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.numberofPieces)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                            <div className="row" style={{ marginTop: "10px" }}>

                                <Controller
                                    control={control}
                                    name="includedComponent"
                                    rules={{
                                        required: "This field is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Included Components</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="1 year manufacturer."
                                                    id="includedComponent"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    onFocus={() => setIsFocused(true)}
                                                    onBlur={() => setIsFocused(false)}
                                                    error={Boolean(errors.includedComponent)}
                                                />
                                                {errors.inputValue && <p>{errors.inputValue.message}</p>}

                                                {isFocused && (
                                                    <ul>
                                                        <li onClick={handleSetIncludedValue} value="remote">remote</li>
                                                        <li>cover</li>
                                                        <li>wheels</li>
                                                    </ul>
                                                )}
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='productSize'
                                    rules={{
                                        required: "this field is required",

                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Size</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder=""
                                                    id="productSize"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.productSize)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name="materialType"
                                    rules={{
                                        required: "this field is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Material Type</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    id="materialType-select"
                                                    variant="outlined"
                                                    select
                                                    style={{ width: "100%" }}
                                                    placeholder="select"
                                                    {...field}
                                                    error={Boolean(errors.materialType)}
                                                >
                                                    <MenuItem value="">-Select-</MenuItem>
                                                    <MenuItem value="Nylon">Nylon</MenuItem>
                                                    <MenuItem value="Aluminum">Aluminum</MenuItem>
                                                    <MenuItem value="Solid Gold">Solid Gold</MenuItem>
                                                    <MenuItem value="Cedar">Cedar</MenuItem>
                                                    <MenuItem value="Stone">Stone</MenuItem>
                                                    <MenuItem value="Porcelain">Porcelain</MenuItem>
                                                    <MenuItem value="Porcelain Bone China">Porcelain Bone China</MenuItem>
                                                    <MenuItem value="Pewter">Pewter</MenuItem>
                                                    <MenuItem value="Stainless Steel">Stainless Steel</MenuItem>
                                                    <MenuItem value="Teracotta">Teracotta</MenuItem>
                                                    <MenuItem value="Neoprene">Neoprene</MenuItem>
                                                    <MenuItem value="Copper">Copper</MenuItem>
                                                    <MenuItem value="Polycarbonate">Polycarbonate</MenuItem>
                                                    <MenuItem value="Recycled">Recycled</MenuItem>
                                                    <MenuItem value="Bronze">Bronze</MenuItem>
                                                    <MenuItem value="Clay">Clay</MenuItem>
                                                    <MenuItem value="Elmwood">Elmwood</MenuItem>
                                                    <MenuItem value="Polyester">Polyester</MenuItem>
                                                    <MenuItem value="Hard-Anodized Aluminum">Hard-Anodized Aluminum</MenuItem>
                                                    <MenuItem value="Leaded Crystal">Leaded Crystal</MenuItem>
                                                    <MenuItem value="Silicone">Silicone</MenuItem>
                                                    <MenuItem value="Cherrywood">Cherrywood</MenuItem>
                                                    <MenuItem value="Marble">Marble</MenuItem>
                                                    <MenuItem value="Nonstick">Nonstick</MenuItem>
                                                    <MenuItem value="Silver">Silver</MenuItem>
                                                    <MenuItem value="Pine">Pine</MenuItem>
                                                    <MenuItem value="Oak">Oak</MenuItem>
                                                    <MenuItem value="Non-Leaded Crystal">Non-Leaded Crystal</MenuItem>
                                                    <MenuItem value="Bamboo">Bamboo</MenuItem>
                                                    <MenuItem value="Fabric">Fabric</MenuItem>
                                                    <MenuItem value="Acrylic">Acrylic</MenuItem>
                                                    <MenuItem value="Crystal">Crystal</MenuItem>
                                                    <MenuItem value="Silver-Plated">Silver-Plated</MenuItem>
                                                    <MenuItem value="Synthetic">Synthetic</MenuItem>
                                                    <MenuItem value="Birch">Birch</MenuItem>
                                                    <MenuItem value="18/8 Steel">18/8 Steel</MenuItem>
                                                    <MenuItem value="Beechwood">Beechwood</MenuItem>
                                                    <MenuItem value="Stoneware">Stoneware</MenuItem>
                                                    <MenuItem value="Brass">Brass</MenuItem>
                                                    <MenuItem value="Multi-ply">Multi-ply</MenuItem>
                                                    <MenuItem value="Glass">Glass</MenuItem>
                                                    <MenuItem value="Leather">Leather</MenuItem>
                                                    <MenuItem value="Iron">Iron</MenuItem>
                                                    <MenuItem value="Plastic">Plastic</MenuItem>
                                                    <MenuItem value="Cotton">Cotton</MenuItem>
                                                    <MenuItem value="Paraffin">Paraffin</MenuItem>
                                                    <MenuItem value="Polyresin">Polyresin</MenuItem>
                                                    <MenuItem value="Wax">Wax</MenuItem>
                                                    <MenuItem value="Bone China">Bone China</MenuItem>
                                                    <MenuItem value="Platinume">Platinume</MenuItem>
                                                    <MenuItem value="Chrome">Chrome</MenuItem>
                                                    <MenuItem value="Mahogany">Mahogany</MenuItem>
                                                    <MenuItem value="Olive Wood">Olive Wood</MenuItem>
                                                    <MenuItem value="18/10 Steel">18/10 Steel</MenuItem>
                                                    <MenuItem value="Rubber">Rubber</MenuItem>
                                                    <MenuItem value="Teak">Teak</MenuItem>
                                                    <MenuItem value="Maple">Maple</MenuItem>
                                                    <MenuItem value="Acrylic Coated Cotton">Acrylic Coated Cotton</MenuItem>
                                                    <MenuItem value="Rosewood">Rosewood</MenuItem>
                                                    <MenuItem value="Cork">Cork</MenuItem>
                                                    <MenuItem value="Melamine">Melamine</MenuItem>
                                                    <MenuItem value="Gilded Gold">Gilded Gold</MenuItem>
                                                    <MenuItem value="HardWood">HardWood</MenuItem>
                                                    <MenuItem value="Steel">Steel</MenuItem>
                                                    <MenuItem value="Carbon">Carbon</MenuItem>
                                                    <MenuItem value="Zinc">Zinc</MenuItem>
                                                    <MenuItem value="Earthenware">Earthenware</MenuItem>
                                                    <MenuItem value="Chromium Steel">Chromium Steel</MenuItem>
                                                    <MenuItem value="Walnut">Walnut</MenuItem>
                                                    <MenuItem value="Cast Iron">Cast Iron</MenuItem>
                                                    <MenuItem value="Rattan & Wicker">Rattan & Wicker</MenuItem>
                                                    <MenuItem value="Tin">Tin</MenuItem>
                                                    <MenuItem value="Ceramic">Ceramic</MenuItem>
                                                    <MenuItem value="Paper">Paper</MenuItem>
                                                    <MenuItem value="Tritan">Tritan</MenuItem>
                                                    <MenuItem value="Nickel">Nickel</MenuItem>
                                                    <MenuItem value="Polycast">Polycast</MenuItem>
                                                    <MenuItem value="Other">Other</MenuItem>
                                                </TextField>
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='numberofBoxes'
                                    rules={{
                                        required: "this field is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2"> Number of Boxes </label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="5"
                                                    id="numberofBoxes"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.numberofBoxes)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='productColor'
                                    rules={{
                                        required: "this field is required",

                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Color</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder=""
                                                    id="productColor"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.productColor)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>
                    )
                }
                {
                    replaceBelthumidiDetailsSt && (
                        <>
                            <div>
                                <Controller
                                    control={control}
                                    name='manufacturepartno'
                                    rules={{
                                        required: "Manufacturer Part Number is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className='d-flex align-items-center mb-3'>
                                                <label className="labelbold me-2">Manufacturer Part Number </label>
                                                <TextField
                                                    placeholder="SB-122"
                                                    id="manufacturepartno"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "50%" }}
                                                    error={Boolean(errors.manufacturepartno)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />

                            </div>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='numberofitems'
                                    rules={{
                                        required: "Number of Items is required",
                                        pattern: {
                                            value: new RegExp('^[0-9]+$'),
                                            message: "value is invalid"
                                        }
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Number of Items</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="1"
                                                    id="numberofitems"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.numberofitems)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name="containsliquidcontent"
                                    rules={{
                                        required: "Contains liquid content is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Contains Liquid Contents?</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    id="containsliquidcontent-select"
                                                    variant="outlined"
                                                    select
                                                    style={{ width: "100%" }}
                                                    placeholder="select"
                                                    {...field}
                                                    error={Boolean(errors.containsliquidcontent)}
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
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='boxContents'
                                    rules={{
                                        required: "Box Contents is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Box Contents</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="speaker,power cable,user manual,warranty certificate"
                                                    id="boxContents"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.boxContents)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='numberofBoxes'
                                    rules={{
                                        required: "this field is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2"> Number of Boxes </label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="5"
                                                    id="numberofBoxes"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.numberofBoxes)}
                                                />
                                            </div>

                                        </>
                                    )}
                                />
                            </div>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='itemManufacturer'
                                    rules={{
                                        required: "this field is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Manufacturer</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="XYZ Pvt Ltd"
                                                    id="itemManufacturer"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.itemManufacturer)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>
                    )
                }
            </div>
        </>
    )
}

export default ProductDetails