import {
    TextField,

} from "@mui/material";
import React from 'react'
import MenuItem from '@mui/material/MenuItem';

import { Controller, useFormContext } from 'react-hook-form'

const ProductDetails = () => {
    const { control, formState: { errors } } = useFormContext()

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
    return (
        <>
            <h5>Appliances/
                Heating & Cooling/
                Air Coolers/
                Desert
            </h5>
            <div>
                <Controller
                    control={control}
                    name='modalnumber'
                    rules={{
                        required: "Modal Number is required",
                    }}
                    render={({ field }) => (
                        <>
                            <div className='d-flex align-items-center mb-3'>
                                <label className="labelbold me-2">Modal Number </label>
                                <TextField
                                    placeholder="AZL20"
                                    id="modalnumber"
                                    variant="outlined"
                                    {...field}
                                    style={{ width: "50%" }}
                                    error={Boolean(errors.modalnumber)}
                                />
                            </div>
                        </>
                    )}
                />

            </div>
            <div>
                <Controller
                    control={control}
                    name='warrantyDesc'
                    rules={{
                        required: "warranty description is required",
                    }}
                    render={({ field }) => (
                        <>
                            <div className='d-flex align-items-center mb-3'>
                                <label className="labelbold me-2">Warranty Description </label>
                                <TextField
                                    placeholder="1 year manufacturer warranty is non-transferable and valid for 1 year from the original date of purchase."
                                    id="warrantyDesc"
                                    variant="outlined"
                                    {...field}
                                    style={{ width: "50%" }}
                                    error={Boolean(errors.warrantyDesc)}
                                />
                            </div>
                        </>
                    )}
                />

            </div>
            <div>
                <label className="labelbold me-2">Included Components</label>



                {/* <Controller
                    control={control}
                    name="includedComponent[]"
                    
                    rules={{
                        required: "This field is required",
                    }}
                    render={({
                        field
                        
                    }) => (
                        <>
                            <div className='d-flex align-items-center mb-3'>
                              
                           <label> Remote </label>
                             <input type="checkbox" 
                           
                             value="Remote"
                             {...field}
                             />
                             <input type="checkbox" 
                           
                             value="cover"
                             {...field}
                             />
                             <input type="checkbox" 
                          
                             value="instruction"
                             {...field}
                             />
                               
                            <button type="button" onClick={console.log(field.value)}>add</button>

                            </div>
                          
                        </>
                    )}
                /> */}


            </div>
            <div>
                <Controller
                    control={control}
                    name="itemOEMauth"
                    rules={{
                        required: "This field  is required",
                    }}
                    render={({ field }) => (
                        <>
                            <div className='d-flex align-items-center mb-3'>
                                <label className="labelbold me-2"> Is the item OEM authorized?</label>
                                <TextField
                                    id="itemOEMauth-select"
                                    variant="outlined"
                                    select
                                    style={{ width: "50%" }}
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
            <div>
                <Controller
                    control={control}
                    name='numberofBoxes'
                    rules={{
                        required: "this field is required",
                    }}
                    render={({ field }) => (
                        <>
                            <div className='d-flex align-items-center mb-3'>
                                <label className="labelbold me-2"> Number of Boxes </label>
                                <TextField
                                    placeholder="5"
                                    id="numberofBoxes"
                                    variant="outlined"
                                    {...field}
                                    style={{ width: "50%" }}
                                    error={Boolean(errors.numberofBoxes)}
                                />
                            </div>
                        </>
                    )}
                />
            </div>
            <div>
                <div>
                    <label className='labelbold'>Item Dimensions D x W x H</label>

                </div>
                <div>
                    <div>
                        <div className='d-flex align-items-end gap-2'>
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
                                        <div className='d-flex flex-column' style={{ width: "50%" }}>
                                            <label className="labelbold me-2">Item Depth Front To Back</label>
                                            <TextField
                                                placeholder="30"
                                                id="itemDepthfrontToback"
                                                variant="outlined"
                                                {...field}

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


                                        <TextField
                                            id="itemDepthfrontTobackUnit"
                                            variant="outlined"
                                            select
                                            style={{ width: "40%" }}
                                            {...field}
                                            error={Boolean(errors.itemDepthfrontTobackUnit)}
                                        >
                                            <MenuItem value="">-Select-</MenuItem>
                                            <MenuItem value="New">Centimeters</MenuItem>


                                        </TextField>

                                    </>
                                )}

                            />

                        </div>
                        <div className='d-flex align-items-end gap-2'>
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
                                        <div className='d-flex flex-column' style={{ width: "50%" }}>
                                            <label className="labelbold me-2">Item Width Side to Side</label>
                                            <TextField
                                                placeholder="25"
                                                id="itemWidthsideToside"
                                                variant="outlined"
                                                {...field}

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
                                        <TextField
                                            id="itemWidthsideTosideUnit"
                                            variant="outlined"
                                            select
                                            style={{ width: "40%" }}
                                            {...field}
                                            error={Boolean(errors.itemWidthsideTosideUnit)}
                                        >
                                            <MenuItem value="">-Select-</MenuItem>
                                            <MenuItem value="New">Centimeters</MenuItem>
                                        </TextField>
                                    </>
                                )}
                            />
                        </div>
                        <div className='d-flex align-items-end gap-2'>
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
                                        <div className='d-flex flex-column' style={{ width: "50%" }}>
                                            <label className="labelbold me-2">Height Base to Top</label>
                                            <TextField
                                                placeholder="80"
                                                id="itemHeightbaseTotop"
                                                variant="outlined"
                                                {...field}

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
                                        <TextField
                                            id="itemHeightbaseTotopUnit"
                                            variant="outlined"
                                            select
                                            style={{ width: "40%" }}
                                            {...field}
                                            error={Boolean(errors.itemHeightbaseTotopUnit)}
                                        >
                                            <MenuItem value="">-Select-</MenuItem>
                                            <MenuItem value="New">Centimeters</MenuItem>

                                        </TextField>
                                    </>
                                )}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Controller
                    control={control}
                    name='itemManufacturer'
                    rules={{
                        required: "this field is required",
                    }}
                    render={({ field }) => (
                        <>
                            <div className='d-flex align-items-center mb-3'>
                                <label className="labelbold me-2">Manufacturer</label>
                                <TextField
                                    placeholder="XYZ Pvt Ltd"
                                    id="itemManufacturer"
                                    variant="outlined"
                                    {...field}
                                    style={{ width: "50%" }}
                                    error={Boolean(errors.itemManufacturer)}
                                />
                            </div>
                        </>
                    )}
                />

            </div>
            <h5>Appliances/
                Heating & Cooling/
                Air Purifiers/
                Air Ionizers
            </h5>

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
            <div>
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
                            <div className='d-flex align-items-center mb-3'>
                                <label className="labelbold me-2">Unit Count</label>
                                <TextField
                                    placeholder="12"
                                    id="unitCount"
                                    variant="outlined"
                                    {...field}
                                    style={{ width: "50%" }}
                                    error={Boolean(errors.unitCount)}
                                />
                            </div>
                        </>
                    )}
                />
            </div>
            <div>
                <Controller
                    control={control}
                    name="unitCountType"
                    rules={{
                        required: "this field is required",
                    }}
                    render={({ field }) => (
                        <>
                            <div className='d-flex align-items-center mb-3'>
                                <label className="labelbold me-2">Unit Count Type</label>
                                <TextField
                                    id="unitCountType-select"
                                    variant="outlined"
                                    select
                                    style={{ width: "50%" }}
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
            <div>
                <Controller
                    control={control}
                    name='productCareInstruction'
                    rules={{
                        required: "this field is required",

                    }}
                    render={({ field }) => (
                        <>
                            <div className='d-flex align-items-center mb-3'>
                                <label className="labelbold me-2">Product Care Instructions</label>
                                <TextField
                                    placeholder="Dry clean only"
                                    id="productCareInstruction"
                                    variant="outlined"
                                    {...field}
                                    style={{ width: "50%" }}
                                    error={Boolean(errors.productCareInstruction)}
                                />
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
                    name="assemblyRequired"
                    rules={{
                        required: "this field is required",
                    }}
                    render={({ field }) => (
                        <>
                            <div className='d-flex align-items-center mb-3'>
                                <label className="labelbold me-2">Is Assembly Required</label>
                                <TextField
                                    id="assemblyRequired-select"
                                    variant="outlined"
                                    select
                                    style={{ width: "50%" }}
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
            <div>
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
                            <div className='d-flex align-items-center mb-3'>
                                <label className="labelbold me-2">Number of Pieces</label>
                                <TextField
                                    placeholder="5"
                                    id="numberofPieces"
                                    variant="outlined"
                                    {...field}
                                    style={{ width: "50%" }}
                                    error={Boolean(errors.numberofPieces)}
                                />
                            </div>
                        </>
                    )}
                />
            </div>
            <div>
                <label className="labelbold me-2">Included Components</label>
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
                    name='productColor'
                    rules={{
                        required: "this field is required",

                    }}
                    render={({ field }) => (
                        <>
                            <div className='d-flex align-items-center mb-3'>
                                <label className="labelbold me-2">Color</label>
                                <TextField
                                    placeholder=""
                                    id="productColor"
                                    variant="outlined"
                                    {...field}
                                    style={{ width: "50%" }}
                                    error={Boolean(errors.productColor)}
                                />
                            </div>
                        </>
                    )}
                />
            </div>
            <div>
                <Controller
                    control={control}
                    name="productColorMap"
                    rules={{
                        required: "this field is required",
                    }}
                    render={({ field }) => (
                        <>
                            <div className='d-flex align-items-center mb-3'>
                                <label className="labelbold me-2">Color Map</label>
                                <TextField
                                    id="productColorMap-select"
                                    variant="outlined"
                                    select
                                    style={{ width: "50%" }}
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
                                    <MenuItem value="Bronze">Nylon</MenuItem>
                                    <MenuItem value="Brown">Aluminum</MenuItem>
                                    <MenuItem value="Gold">Solid Gold</MenuItem>
                                    <MenuItem value="Blue">Cedar</MenuItem>
                                    <MenuItem value="Multicolor">Stone</MenuItem>
                                    <MenuItem value="Black">Porcelain</MenuItem>
                                    <MenuItem value="Orange">Porcelain Bone China</MenuItem>
                                    <MenuItem value="Clear">Pewter</MenuItem>
                                    <MenuItem value="Red">Stainless Steel</MenuItem>
                                    <MenuItem value="Silver">Teracotta</MenuItem>
                                    <MenuItem value="Pink">Neoprene</MenuItem>
                                    <MenuItem value="White">Copper</MenuItem>
                                    <MenuItem value="Metalic">Polycarbonate</MenuItem>
                                    <MenuItem value="Beige">Recycled</MenuItem>
                                    <MenuItem value="Purple">Bronze</MenuItem>
                                    <MenuItem value="Yellow">Clay</MenuItem>
                                    <MenuItem value="Turquoise">Elmwood</MenuItem>
                                    <MenuItem value="Green">Polyester</MenuItem>
                                    <MenuItem value="Grey">Hard-Anodized Aluminum</MenuItem>
                                    <MenuItem value="Offwhite">Leaded Crystal</MenuItem>
                                    <MenuItem value="Offwhite">Silicone</MenuItem>
                                    <MenuItem value="Offwhite">Cherrywood</MenuItem>
                                    <MenuItem value="Offwhite">Marble</MenuItem>
                                    <MenuItem value="Offwhite">Nonstick</MenuItem>
                                    <MenuItem value="Offwhite">Silver</MenuItem>
                                    <MenuItem value="Offwhite">Pine</MenuItem>
                                    <MenuItem value="Offwhite">Oak</MenuItem>
                                    <MenuItem value="Offwhite">Non-Leaded Crystal</MenuItem>
                                    <MenuItem value="Offwhite">Bamboo</MenuItem>
                                    <MenuItem value="Offwhite">Fabric</MenuItem>
                                    <MenuItem value="Offwhite">Acrylic</MenuItem>
                                    <MenuItem value="Offwhite">Crystal</MenuItem>
                                    <MenuItem value="Offwhite">Silver-Plated</MenuItem>
                                    <MenuItem value="Offwhite">Synthetic</MenuItem>
                                    <MenuItem value="Offwhite">Birch</MenuItem>
                                    <MenuItem value="Offwhite">18/8 Steel</MenuItem>
                                    <MenuItem value="Offwhite">Beechwood</MenuItem>
                                    <MenuItem value="Offwhite">Stoneware</MenuItem>
                                    <MenuItem value="Offwhite">Brass</MenuItem>
                                    <MenuItem value="Offwhite">Multi-ply</MenuItem>
                                    <MenuItem value="Offwhite">Glass</MenuItem>
                                    <MenuItem value="Offwhite">Leather</MenuItem>
                                    <MenuItem value="Offwhite">Iron</MenuItem>
                                    <MenuItem value="Offwhite">Plastic</MenuItem>
                                    <MenuItem value="Offwhite">Cotton</MenuItem>
                                    <MenuItem value="Offwhite">Paraffin</MenuItem>
                                    <MenuItem value="Offwhite">Polyresin</MenuItem>
                                    <MenuItem value="Offwhite">Wax</MenuItem>
                                    <MenuItem value="Offwhite">Bone China</MenuItem>
                                    <MenuItem value="Offwhite">Platinume</MenuItem>
                                    <MenuItem value="Offwhite">Chrome</MenuItem>
                                    <MenuItem value="Offwhite">Mahogany</MenuItem>
                                    <MenuItem value="Offwhite">Olive Wood</MenuItem>
                                    <MenuItem value="Offwhite">18/10 Steel</MenuItem>
                                    <MenuItem value="Offwhite">Rubber</MenuItem>
                                    <MenuItem value="Offwhite">Teak</MenuItem>
                                    <MenuItem value="Offwhite">Maple</MenuItem>
                                    <MenuItem value="Offwhite">Acrylic Coated Cotton</MenuItem>
                                    <MenuItem value="Offwhite">Rosewood</MenuItem>
                                    <MenuItem value="Offwhite">Cork</MenuItem>
                                    <MenuItem value="Offwhite">Melamine</MenuItem>
                                    <MenuItem value="Offwhite">Gilded Gold</MenuItem>
                                    <MenuItem value="Offwhite">HardWood</MenuItem>
                                    <MenuItem value="Offwhite">Steel</MenuItem>
                                    <MenuItem value="Offwhite">Carbon</MenuItem>
                                    <MenuItem value="Offwhite">Zinc</MenuItem>
                                    <MenuItem value="Offwhite">Earthenware</MenuItem>
                                    <MenuItem value="Offwhite">Chromium Steel</MenuItem>
                                    <MenuItem value="Offwhite">Walnut</MenuItem>
                                    <MenuItem value="Offwhite">Cast Iron</MenuItem>
                                    <MenuItem value="Offwhite">Rattan & Wicker</MenuItem>
                                    <MenuItem value="Offwhite">Tin</MenuItem>
                                    <MenuItem value="Offwhite">Ceramic</MenuItem>
                                    <MenuItem value="Offwhite">Paper</MenuItem>
                                    <MenuItem value="Offwhite">Tritan</MenuItem>
                                    <MenuItem value="Offwhite">Nickel</MenuItem>
                                    <MenuItem value="Offwhite">Polycast</MenuItem>
                                    <MenuItem value="Offwhite">Other</MenuItem>
                                </TextField>
                            </div>
                        </>
                    )}
                />
            </div>
            <div>
                <Controller
                    control={control}
                    name='numberofBoxes'
                    rules={{
                        required: "this field is required",
                    }}
                    render={({ field }) => (
                        <>
                            <div className='d-flex align-items-center mb-3'>
                                <label className="labelbold me-2"> Number of Boxes </label>
                                <TextField
                                    placeholder="5"
                                    id="numberofBoxes"
                                    variant="outlined"
                                    {...field}
                                    style={{ width: "50%" }}
                                    error={Boolean(errors.numberofBoxes)}
                                />
                            </div>
                        </>
                    )}
                />
            </div>
            <div>
                <div>
                    <label className='labelbold'>Item Dimensions D x W x H</label>

                </div>
                <div>
                    <div>
                        <div className='d-flex align-items-end gap-2'>
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
                                        <div className='d-flex flex-column' style={{ width: "50%" }}>
                                            <label className="labelbold me-2">Item Depth Front To Back</label>
                                            <TextField
                                                placeholder="30"
                                                id="itemDepthfrontToback"
                                                variant="outlined"
                                                {...field}

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


                                        <TextField
                                            id="itemDepthfrontTobackUnit"
                                            variant="outlined"
                                            select
                                            style={{ width: "40%" }}
                                            {...field}
                                            error={Boolean(errors.itemDepthfrontTobackUnit)}
                                        >
                                            <MenuItem value="">-Select-</MenuItem>
                                            <MenuItem value="New">Centimeters</MenuItem>


                                        </TextField>

                                    </>
                                )}

                            />

                        </div>
                        <div className='d-flex align-items-end gap-2'>
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
                                        <div className='d-flex flex-column' style={{ width: "50%" }}>
                                            <label className="labelbold me-2">Item Width Side to Side</label>
                                            <TextField
                                                placeholder="25"
                                                id="itemWidthsideToside"
                                                variant="outlined"
                                                {...field}

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
                                        <TextField
                                            id="itemWidthsideTosideUnit"
                                            variant="outlined"
                                            select
                                            style={{ width: "40%" }}
                                            {...field}
                                            error={Boolean(errors.itemWidthsideTosideUnit)}
                                        >
                                            <MenuItem value="">-Select-</MenuItem>
                                            <MenuItem value="New">Centimeters</MenuItem>
                                        </TextField>
                                    </>
                                )}
                            />
                        </div>
                        <div className='d-flex align-items-end gap-2'>
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
                                        <div className='d-flex flex-column' style={{ width: "50%" }}>
                                            <label className="labelbold me-2">Height Base to Top</label>
                                            <TextField
                                                placeholder="80"
                                                id="itemHeightbaseTotop"
                                                variant="outlined"
                                                {...field}

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
                                        <TextField
                                            id="itemHeightbaseTotopUnit"
                                            variant="outlined"
                                            select
                                            style={{ width: "40%" }}
                                            {...field}
                                            error={Boolean(errors.itemHeightbaseTotopUnit)}
                                        >
                                            <MenuItem value="">-Select-</MenuItem>
                                            <MenuItem value="New">Centimeters</MenuItem>

                                        </TextField>
                                    </>
                                )}
                            />
                        </div>
                    </div>
                </div>
            </div>



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

            <h5>Fine Art/
                Drawing/
                Chalk Drawings</h5>
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
                                    style={{ width: "50%" }}
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
                        pattern: {
                            value: new RegExp('^[0-9]+$'),
                            message: "not a valid formate"
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
                                    style={{ width: "50%" }}
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
                                    style={{ width: "50%" }}
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