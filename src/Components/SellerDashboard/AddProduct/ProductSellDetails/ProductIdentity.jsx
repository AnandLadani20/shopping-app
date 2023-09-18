import {
  TextField,
  Button,
} from "@mui/material";
import React, { useState, useEffect } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import InputLabel from '@mui/material/InputLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import { useSelector } from 'react-redux';
import { GrFormNext } from 'react-icons/gr'

const ProductIdentity = () => {

  const chalkdrawingIdentityState = useSelector((state) => state.showOneForm)
  const desertIdentityState = useSelector((state) => state.desertForm)
  const miniCoolersIdentityState = useSelector((state) => state.miniCoolersForm)
  const otherAirCoolersIdentityState = useSelector((state) => state.otherAirCoolersForm)
  const portableCoolersIdentityState = useSelector((state) => state.portableCoolersForm)
  const towerCoolersIdentityState = useSelector((state) => state.towerCoolersForm)
  const windowCoolersIdentityState = useSelector((state) => state.windowCoolersForm)

  const airIonizersIdentityState = useSelector((state) => state.airIonizersForm)
  const carAirPurifierIdentityState = useSelector((state) => state.carAirPurifierForm)
  const charcoalAirPuriIdentitySt = useSelector((state) => state.charcoalAirPurifierForm)
  const electroAirPuriIdentitySt = useSelector((state) => state.electroAirPurifierForm)
  const hepaAirPuriIdentitySt = useSelector((state) => state.hepaAirPurifierForm)
  const otherAirPuriIdentitySt = useSelector((state) => state.otherAirPurifierForm)
  const portableAirPuriIdentitySt = useSelector((state) => state.portableAirPurifierForm)
  const ulpaAirPuriIdentitySt = useSelector((state) => state.ulpaAirPurifierForm)

  const otherDehumidifiersIdentitySt = useSelector((state) => state.otherDehumidifiersForm)

  const otherDeodorisersIdentitySt = useSelector((state) => state.otherDeodorisersForm)

  const blowerFansIdentitySt = useSelector((state) => state.blowerFansForm)
  const boxFansIdentitySt = useSelector((state) => state.boxFansForm)
  const ceilingFansIdentitySt = useSelector((state) => state.ceilingFansForm)
  const clipFansIdentitySt = useSelector((state) => state.clipFansForm)
  const drumFansIdentitySt = useSelector((state) => state.drumFansForm)
  const exhaustFansIdentitySt = useSelector((state) => state.exhaustFansForm)
  const floorFansIdentitySt = useSelector((state) => state.floorFansForm)
  const otherFansIdentitySt = useSelector((state) => state.otherFansForm)
  const pedestalFansIdentitySt = useSelector((state) => state.pedestalFansForm)
  const personalFansIdentitySt = useSelector((state) => state.personalFansForm)
  const tableFansIdentitySt = useSelector((state) => state.tableFansForm)
  const towerFansIdentitySt = useSelector((state) => state.towerFansForm)
  const vortexActionFansIdentitySt = useSelector((state) => state.vortexActionFansForm)
  const wallMountedFansIdentitySt = useSelector((state) => state.wallMountedFansForm)
  const windowFansIdentitySt = useSelector((state) => state.windowFansForm)

  const otherHumidifiersIdentitySt = useSelector((state) => state.otherHumidifierForm)
  const singleRoomHumidifiersIdentitySt = useSelector((state) => state.singleRoomHumidifierForm)
  const wholeHouseHumidifiersIdentitySt = useSelector((state) => state.wholeHouseHumidifierForm)

  const otherHeatNCoolingIdentitySt = useSelector((state) => state.otherHeatNCoolingForm)

  const airPuriPartNAccessIdentitySt = useSelector((state) => state.airPuriPartNAccessForm)
  const dehumidPartNAccessIdentitySt = useSelector((state) => state.dehumidPartNAccessForm)
  const evaCoolerPartNAccessIdentitySt = useSelector((state) => state.evaCoolerPartNAccessForm)
  const fanPartNAccessIdentitySt = useSelector((state) => state.fanPartNAccessForm)
  const heaterPartNAccessIdentitySt = useSelector((state) => state.heaterPartNAccessForm)
  const humidiPartNAccessIdentitySt = useSelector((state) => state.humidiPartNAccessForm)
  const otherPartNAccessIdentitySt = useSelector((state) => state.otherPartNAccessForm)
  const replaceBelthumidiIdentitySt = useSelector((state) => state.replaceBelthumidiForm)


  const { control, formState: { errors }, setValue } = useFormContext()
  const [showSearchproduct, setShowSearchproduct] = useState('singleProduct');
  const handleChange = (event) => {
    setShowSearchproduct(event.target.value); 
  };
  const [productTypestate, setProductTypestate] = useState(''); // Initialize with an empty string

  useEffect(() => {

    if (chalkdrawingIdentityState) {
      setValue('productType', 'Fine Art');
      setProductTypestate("Fine Art")
    }
    else if (desertIdentityState) {
      setValue('productType', 'Air Cooler');
      setProductTypestate("Air Cooler")
    }
    else if (miniCoolersIdentityState) {
      setValue('productType', 'Air Cooler');
      setProductTypestate("Air Cooler")
    }
    else if (otherAirCoolersIdentityState) {
      setValue('productType', 'Air Cooler');
      setProductTypestate("Air Cooler")
    }
    else if (portableCoolersIdentityState) {
      setValue('productType', 'Air Cooler');
      setProductTypestate("Air Cooler")
    }
    else if (towerCoolersIdentityState) {
      setValue('productType', 'Air Cooler');
      setProductTypestate("Air Cooler")
    }
    else if (windowCoolersIdentityState) {
      setValue('productType', 'Air Cooler');
      setProductTypestate("Air Cooler")
    }
    else if (airIonizersIdentityState) {
      setValue('productType', 'Air Purifier');
      setProductTypestate("Air Purifier")
    }
    else if (carAirPurifierIdentityState) {
      setValue('productType', 'Air Purifier');
      setProductTypestate("Air Purifier")
    }
    else if (charcoalAirPuriIdentitySt) {
      setValue('productType', 'Air Purifier');
      setProductTypestate("Air Purifier")
    }
    else if (electroAirPuriIdentitySt) {
      setValue('productType', 'Air Purifier');
      setProductTypestate("Air Purifier")
    }
    else if (hepaAirPuriIdentitySt) {
      setValue('productType', 'Air Purifier');
      setProductTypestate("Air Purifier")
    }
    else if (otherAirPuriIdentitySt) {
      setValue('productType', 'Air Purifier');
      setProductTypestate("Air Purifier")
    }
    else if (portableAirPuriIdentitySt) {
      setValue('productType', 'Air Purifier');
      setProductTypestate("Air Purifier")
    }
    else if (ulpaAirPuriIdentitySt) {
      setValue('productType', 'Air Purifier');
      setProductTypestate("Air Purifier")
    }
    else if (otherDehumidifiersIdentitySt) {
      setValue('productType', 'Dehumidifiers');
      setProductTypestate("Dehumidifiers")
    }
    else if (otherDeodorisersIdentitySt) {
      setValue('productType', 'Air Purifier');
      setProductTypestate("Air Purifier")
    }
    else if (blowerFansIdentitySt) {
      setValue('productType', 'Electric Fan');
      setProductTypestate("Electric Fan")
    }
    else if (boxFansIdentitySt) {
      setValue('productType', 'Electric Fan');
      setProductTypestate("Electric Fan")
    }
    else if (ceilingFansIdentitySt) {
      setValue('productType', 'Electric Fan');
      setProductTypestate("Electric Fan")
    }
    else if (clipFansIdentitySt) {
      setValue('productType', 'Electric Fan');
      setProductTypestate("Electric Fan")
    }
    else if (drumFansIdentitySt) {
      setValue('productType', 'Electric Fan');
      setProductTypestate("Electric Fan")
    }
    else if (exhaustFansIdentitySt) {
      setValue('productType', 'Electric Fan');
      setProductTypestate("Electric Fan")
    }
    else if (floorFansIdentitySt) {
      setValue('productType', 'Electric Fan');
      setProductTypestate("Electric Fan")
    }
    else if (otherFansIdentitySt) {
      setValue('productType', 'Electric Fan');
      setProductTypestate("Electric Fan")
    }
    else if (pedestalFansIdentitySt) {
      setValue('productType', 'Electric Fan');
      setProductTypestate("Electric Fan")
    }
    else if (personalFansIdentitySt) {
      setValue('productType', 'Electric Fan');
      setProductTypestate("Electric Fan")
    }
    else if (tableFansIdentitySt) {
      setValue('productType', 'Electric Fan');
      setProductTypestate("Electric Fan")
    }
    else if (towerFansIdentitySt) {
      setValue('productType', 'Electric Fan');
      setProductTypestate("Electric Fan")
    }
    else if (vortexActionFansIdentitySt) {
      setValue('productType', 'Electric Fan');
      setProductTypestate("Electric Fan")
    }
    else if (wallMountedFansIdentitySt) {
      setValue('productType', 'Electric Fan');
      setProductTypestate("Electric Fan")
    }
    else if (windowFansIdentitySt) {
      setValue('productType', 'Electric Fan');
      setProductTypestate("Electric Fan")
    }
    else if (otherHumidifiersIdentitySt) {
      setValue('productType', 'Humidifier');
      setProductTypestate("Humidifier")
    }
    else if (singleRoomHumidifiersIdentitySt) {
      setValue('productType', 'Humidifier');
      setProductTypestate("Humidifier")
    }
    else if (wholeHouseHumidifiersIdentitySt) {
      setValue('productType', 'Humidifier');
      setProductTypestate("Humidifier")
    }
    else if (otherHeatNCoolingIdentitySt) {
      setValue('productType', 'Small Home Appliances');
      setProductTypestate("Small Home Appliances")
    }
    else if (airPuriPartNAccessIdentitySt) {
      setValue('productType', 'Small Home Appliances');
      setProductTypestate("Small Home Appliances")
    }
    else if (dehumidPartNAccessIdentitySt) {
      setValue('productType', 'Small Home Appliances');
      setProductTypestate("Small Home Appliances")
    }
    else if (evaCoolerPartNAccessIdentitySt) {
      setValue('productType', 'Small Home Appliances');
      setProductTypestate("Small Home Appliances")
    }
    else if (fanPartNAccessIdentitySt) {
      setValue('productType', 'Small Home Appliances');
      setProductTypestate("Small Home Appliances")
    }
    else if (heaterPartNAccessIdentitySt) {
      setValue('productType', 'Small Home Appliances');
      setProductTypestate("Small Home Appliances")
    }
    else if (humidiPartNAccessIdentitySt) {
      setValue('productType', 'Small Home Appliances');
      setProductTypestate("Small Home Appliances")
    }
    else if (otherPartNAccessIdentitySt) {
      setValue('productType', 'Small Home Appliances');
      setProductTypestate("Small Home Appliances")
    }
    else if (replaceBelthumidiIdentitySt) {
      setValue('productType', 'Mechanical Belt');
      setProductTypestate("Mechanical Belt")
    }
  }, [setValue])

  // const handleGetValue = (get) => {
  //   console.log("val", get)
  // }

  return (
    <div>
      {
        chalkdrawingIdentityState && (

          <div>
            <div className="row">
              <Controller
                control={control}
                rules={{
                  required: "Item Name is required",
                }}
                name='productType'
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                      <label htmlFor="itemname" className="labelbold">
                        Product Type
                      </label>
                    </div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <h6>{productTypestate}</h6>
                      <TextField
                        id="productType"
                        type='text'
                        placeholder="Product Type"
                        variant="outlined"
                        style={{ width: "100%", display: "none" }}
                        InputProps={{
                          readOnly: true,
                        }}
                        {...field}
                        error={Boolean(errors.productType)}
                      />
                    </div>
                    {/* <button type="button" onClick={() => handleGetValue({ ...field })}>ss</button> */}
                  </>
                )}
              />
            </div>
            <div className="row" style={{ marginTop: "10px" }}>
              <Controller
                control={control}
                name='itemName'
                rules={{
                  required: "Item Name is required",

                }}
                render={({ field }) => (
                  <>

                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                      <label htmlFor="itemname" className="labelbold">
                        *Item Name (aka Title)
                      </label>
                    </div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <TextField
                        id="itemName"
                        placeholder="Item Name"
                        variant="outlined"
                        style={{ width: "100%" }}
                        {...field}
                        error={Boolean(errors.itemName)}
                      />
                    </div>
                  </>

                )}
              />
            </div>
            <div className="row" style={{ marginTop: "10px" }}>
              <Controller
                control={control}
                name="productVariation"
                rules={{
                  required: "production variation is required",

                }}
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                      <label className="labelbold  mb-1">Variations</label>
                    </div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <div className="d-flex align-items-center">
                        <InputLabel className="me-2">Does the product have variations?</InputLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          id="productVariation"
                          name="row-radio-buttons-group"
                          {...field}
                          error={Boolean(errors.productVariation)}
                        >
                          <FormControlLabel value="Yes" control={<Radio />} label="Yes" checked={showSearchproduct === 'Yes'} onChange={handleChange} />
                          <FormControlLabel value="No" control={<Radio />} label="No" checked={showSearchproduct === 'No'} onChange={handleChange} />

                        </RadioGroup>
                      </div>
                    </div>
                  </>
                )}
              />
            </div>
            <div>
              {
                showSearchproduct === 'Yes' ? <label>Which of these attributes are different across the product variants?</label> : ""
              }

            </div>

            <div className="row" style={{ marginTop: "10px" }}>
              <Controller
                control={control}
                name="productID"
                rules={{
                  required: 'product id is required',
                  pattern: {
                    value: new RegExp('^[0-9]+$'),
                    message: "not a valid formate"
                  }
                }}
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                      <label className="labelbold mb-1">Product Id</label>
                    </div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <TextField
                        id="productID"
                        placeholder="5279173125000"
                        {...field}
                        variant="outlined"
                        error={Boolean(errors.productID)}
                        style={{ width: "100%" }}
                      />
                    </div>

                  </>
                )}
              />
            </div>
            <div className="row" style={{ marginTop: "10px" }}>
              <Controller
                control={control}
                name="productSelectcode"
                rules={{
                  required: "productSelectcode is required",
                }}
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 "></div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <TextField
                        id="productSelectcode-select"
                        variant="outlined"
                        select
                        style={{ width: "100%" }}
                        label="-Select-"
                        {...field}
                        error={Boolean(errors.profession)}

                      >
                        <MenuItem value="">-Select-</MenuItem>
                        <MenuItem value="EAN">EAN</MenuItem>
                        <MenuItem value="GCID">GCID</MenuItem>
                        <MenuItem value="GTIN">GTIN</MenuItem>
                        <MenuItem value="UPC">UPC</MenuItem>
                        <MenuItem value="ASIN">ASIN</MenuItem>
                      </TextField>
                    </div>

                  </>
                )}
              />
            </div>

            <div className="row">
              <Controller
                control={control}
                name="productIdNot"
                rules={{
                  required: "please check this box"
                }}
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 "></div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <div className="d-flex align-items-center">

                        <Checkbox
                          {...field}
                          color="primary"
                        />
                        <InputLabel htmlFor="productIdNot">
                          i do not have a Product Id
                        </InputLabel>
                      </div>
                      {Boolean(errors.termsandcondition) && (
                        <div className="error-message">
                          {errors.termsandcondition.message}
                        </div>
                      )}
                    </div>
                  </>
                )}
              />
            </div>
          </div>

        )
      }

      {
        (desertIdentityState || miniCoolersIdentityState || otherAirCoolersIdentityState || portableCoolersIdentityState || towerCoolersIdentityState || windowCoolersIdentityState
          || blowerFansIdentitySt || boxFansIdentitySt || ceilingFansIdentitySt || clipFansIdentitySt || drumFansIdentitySt || exhaustFansIdentitySt || floorFansIdentitySt
          || otherFansIdentitySt || pedestalFansIdentitySt || personalFansIdentitySt || tableFansIdentitySt || towerFansIdentitySt || vortexActionFansIdentitySt || wallMountedFansIdentitySt
          || windowFansIdentitySt) && (


          <div>
            <h6 className="mb-3">Appliances <GrFormNext className="navigate-next-icon" />
              Heating & Cooling <GrFormNext className="navigate-next-icon" />
              Air Coolers <GrFormNext className="navigate-next-icon" />
              Desert
            </h6>
            <div className="row">
              <Controller
                control={control}
                rules={{
                  required: " Product Type is required",
                }}
                name='productType'
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                      <label htmlFor="productType" className="labelbold">
                        Product Type
                      </label>
                    </div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <h6>{productTypestate}</h6>
                      <TextField
                        id="productType"
                        type='text'
                        placeholder="Product Type"
                        variant="outlined"
                        style={{ width: "100%", display: "none" }}
                        InputProps={{
                          readOnly: true,
                        }}
                        {...field}
                        error={Boolean(errors.productType)}
                      />
                    </div>
                    {/* <button type="button" onClick={() => handleGetValue({ ...field })}>ss</button> */}
                  </>
                )}
              />
            </div>
            <div className="row">
              <Controller
                control={control}
                name='productName'
                rules={{
                  required: "Product Name is required",

                }}
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                      <label htmlFor="productName" className="labelbold">
                        * Product Name
                      </label>
                    </div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <TextField
                        id="productName"
                        placeholder="product Name"
                        variant="outlined"
                        style={{ width: "100%" }}
                        {...field}
                        error={Boolean(errors.productName)}
                      />
                    </div>
                  </>
                )}
              />
            </div>

            <div className="row" style={{ marginTop: "10px" }}>
              <Controller
                control={control}
                name="productVariation"
                rules={{
                  required: "production variation is required",

                }}
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                      <label className="labelbold  mb-1">Variations</label>
                    </div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <div className="d-flex align-items-center">
                        <InputLabel className="me-2">Does the product have variations?</InputLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          id="productVariation"
                          name="row-radio-buttons-group"
                          {...field}
                          error={Boolean(errors.productVariation)}
                        >
                          <FormControlLabel value="Yes" control={<Radio />} label="Yes" checked={showSearchproduct === 'Yes'} onChange={handleChange} />
                          <FormControlLabel value="No" control={<Radio />} label="No" checked={showSearchproduct === 'No'} onChange={handleChange} />

                        </RadioGroup>
                      </div>
                    </div>
                  </>
                )}
              />
            </div>
            <div className="row">
              {
                showSearchproduct === 'Yes' ? <>

                  <div className="col-4 col-sm-3 col-lg-2 text-end"></div>
                  <div className="col-8 col-sm-7 col-lg-4">
                    <div>
                      <label>Which of these attributes are different across the product variants?</label>
                    </div>
                    <div>
                      <Controller
                        control={control}
                        name="colorVariationIdentity"
                        rules={{
                          required: "please check this box"
                        }}
                        render={({ field }) => (
                          <>


                            <div className="d-flex align-items-center">

                              <Checkbox
                                {...field}
                                color="primary"
                              />
                              <InputLabel htmlFor="colorVariationIdentity">
                                Color
                              </InputLabel>
                            </div>
                            {Boolean(errors.colorVariationIdentity) && (
                              <div className="error-message">
                                {errors.colorVariationIdentity.message}
                              </div>
                            )}

                          </>
                        )}
                      />
                    </div>
                  </div>

                </> : ""
              }

            </div>
            <div className="row">
              <Controller
                control={control}
                name='productBrandName'
                rules={{
                  required: "Brand Name is required",

                }}
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                      <label htmlFor="productBrandName" className="labelbold">
                        * Brand Name
                      </label>
                    </div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <TextField
                        id="productBrandName"
                        placeholder="Brand Name"
                        variant="outlined"
                        style={{ width: "100%" }}
                        {...field}
                        error={Boolean(errors.productBrandName)}
                      />
                    </div>
                  </>
                )}
              />
            </div>
            <div className="row">
              <Controller
                control={control}
                name="productBrandNot"

                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 text-end"></div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <div className="d-flex align-items-center">
                        <Checkbox
                          {...field}
                          color="primary"
                        />
                        <InputLabel htmlFor="productBrandNot">
                          This product does not have a brand name
                        </InputLabel>
                      </div>
                    </div>

                  </>
                )}
              />
            </div>
            <div className="row" style={{ marginTop: "10px" }}>
              <Controller
                control={control}
                name="productID"
                rules={{
                  required: 'product id is required',
                  pattern: {
                    value: new RegExp('^[0-9]+$'),
                    message: "not a valid formate"
                  }
                }}
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                      <label className="labelbold mb-1">Product Id</label>
                    </div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <TextField
                        id="productID"
                        placeholder="5279173125000"
                        {...field}
                        variant="outlined"
                        error={Boolean(errors.productID)}
                        style={{ width: "100%" }}
                      />
                    </div>

                  </>
                )}
              />
            </div>
            <div className="row" style={{ marginTop: "10px" }}>
              <Controller
                control={control}
                name="productSelectcode"
                rules={{
                  required: "productSelectcode is required",
                }}
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 "></div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <TextField
                        id="productSelectcode-select"
                        variant="outlined"
                        select
                        style={{ width: "100%" }}
                        label="-Select-"
                        {...field}
                        error={Boolean(errors.profession)}

                      >
                        <MenuItem value="">-Select-</MenuItem>
                        <MenuItem value="EAN">EAN</MenuItem>
                        <MenuItem value="GCID">GCID</MenuItem>
                        <MenuItem value="GTIN">GTIN</MenuItem>
                        <MenuItem value="UPC">UPC</MenuItem>
                        <MenuItem value="ASIN">ASIN</MenuItem>
                      </TextField>
                    </div>

                  </>
                )}
              />
            </div>

            <div className="row" >
              <Controller
                control={control}
                name="productIdNot"
                rules={{
                  required: "please check this box"
                }}
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 "></div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <div className="d-flex align-items-center">

                        <Checkbox
                          {...field}
                          color="primary"
                        />
                        <InputLabel htmlFor="productIdNot">
                          i do not have a Product Id
                        </InputLabel>
                      </div>
                      {Boolean(errors.termsandcondition) && (
                        <div className="error-message">
                          {errors.termsandcondition.message}
                        </div>
                      )}
                    </div>
                  </>
                )}
              />
            </div>

          </div>
        )
      }
      {
        (airIonizersIdentityState || carAirPurifierIdentityState || charcoalAirPuriIdentitySt || electroAirPuriIdentitySt || hepaAirPuriIdentitySt || otherAirPuriIdentitySt || portableAirPuriIdentitySt || ulpaAirPuriIdentitySt || otherDehumidifiersIdentitySt
          || otherDeodorisersIdentitySt || otherHeatNCoolingIdentitySt || airPuriPartNAccessIdentitySt || dehumidPartNAccessIdentitySt || evaCoolerPartNAccessIdentitySt || fanPartNAccessIdentitySt || heaterPartNAccessIdentitySt
          || humidiPartNAccessIdentitySt || otherPartNAccessIdentitySt || replaceBelthumidiIdentitySt) && (
          <div>
            <div className="row">
              <Controller
                control={control}
                rules={{
                  required: "Product Type is required",
                }}
                name='productType'
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                      <label htmlFor="itemname" className="labelbold">
                        Product Type
                      </label>
                    </div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <h6>{productTypestate}</h6>
                      <TextField
                        id="productType"
                        type='text'
                        placeholder="Product Type"
                        variant="outlined"
                        style={{ width: "100%", display: "none" }}
                        InputProps={{
                          readOnly: true,
                        }}
                        {...field}
                        error={Boolean(errors.productType)}
                      />
                    </div>
                    {/* <button type="button" onClick={() => handleGetValue({ ...field })}>ss</button> */}
                  </>
                )}
              />
            </div>
            <div className="row" style={{ marginTop: "10px" }}>
              <Controller
                control={control}
                name='itemName'
                rules={{
                  required: "Item Name is required",

                }}
                render={({ field }) => (
                  <>

                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                      <label htmlFor="itemname" className="labelbold">
                        *Item Name (aka Title)
                      </label>
                    </div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <TextField
                        id="itemName"
                        placeholder="Item Name"
                        variant="outlined"
                        style={{ width: "100%" }}
                        {...field}
                        error={Boolean(errors.itemName)}
                      />
                    </div>
                  </>

                )}
              />
            </div>
            <div className="row" style={{ marginTop: "10px" }}>
              <Controller
                control={control}
                name="productVariation"
                rules={{
                  required: "production variation is required",

                }}
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                      <label className="labelbold  mb-1">Variations</label>
                    </div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <div className="d-flex align-items-center">
                        <InputLabel className="me-2">Does the product have variations?</InputLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          id="productVariation"
                          name="row-radio-buttons-group"
                          {...field}
                          error={Boolean(errors.productVariation)}
                        >
                          <FormControlLabel value="Yes" control={<Radio />} label="Yes" checked={showSearchproduct === 'Yes'} onChange={handleChange} />
                          <FormControlLabel value="No" control={<Radio />} label="No" checked={showSearchproduct === 'No'} onChange={handleChange} />

                        </RadioGroup>
                      </div>
                    </div>
                  </>
                )}
              />
            </div>
            <div>
              {
                showSearchproduct === 'Yes' ? <label>Which of these attributes are different across the product variants?</label> : ""
              }

            </div>

            <div className="row" style={{ marginTop: "10px" }}>
              <Controller
                control={control}
                name="productID"
                rules={{
                  required: 'product id is required',
                  pattern: {
                    value: new RegExp('^[0-9]+$'),
                    message: "not a valid formate"
                  }
                }}
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                      <label className="labelbold mb-1">Product Id</label>
                    </div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <TextField
                        id="productID"
                        placeholder="5279173125000"
                        {...field}
                        variant="outlined"
                        error={Boolean(errors.productID)}
                        style={{ width: "100%" }}
                      />
                    </div>

                  </>
                )}
              />
            </div>
            <div className="row" style={{ marginTop: "10px" }}>
              <Controller
                control={control}
                name="productSelectcode"
                rules={{
                  required: "productSelectcode is required",
                }}
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 "></div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <TextField
                        id="productSelectcode-select"
                        variant="outlined"
                        select
                        style={{ width: "100%" }}
                        label="-Select-"
                        {...field}
                        error={Boolean(errors.profession)}

                      >
                        <MenuItem value="">-Select-</MenuItem>
                        <MenuItem value="EAN">EAN</MenuItem>
                        <MenuItem value="GCID">GCID</MenuItem>
                        <MenuItem value="GTIN">GTIN</MenuItem>
                        <MenuItem value="UPC">UPC</MenuItem>
                        <MenuItem value="ASIN">ASIN</MenuItem>
                      </TextField>
                    </div>

                  </>
                )}
              />
            </div>

            <div className="row">
              <Controller
                control={control}
                name="productIdNot"
                rules={{
                  required: "please check this box"
                }}
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 "></div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <div className="d-flex align-items-center">

                        <Checkbox
                          {...field}
                          color="primary"
                        />
                        <InputLabel htmlFor="productIdNot">
                          i do not have a Product Id
                        </InputLabel>
                      </div>
                      {Boolean(errors.termsandcondition) && (
                        <div className="error-message">
                          {errors.termsandcondition.message}
                        </div>
                      )}
                    </div>
                  </>
                )}
              />
            </div>
          </div>
        )
      }
      {
        (otherHumidifiersIdentitySt || singleRoomHumidifiersIdentitySt || wholeHouseHumidifiersIdentitySt) && (
          <>
            <div className="row">
              <Controller
                control={control}
                rules={{
                  required: "Product Type is required",
                }}
                name='productType'
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                      <label htmlFor="itemname" className="labelbold">
                        Product Type
                      </label>
                    </div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <h6>{productTypestate}</h6>
                      <TextField
                        id="productType"
                        type='text'
                        placeholder="Product Type"
                        variant="outlined"
                        style={{ width: "100%", display: "none" }}
                        InputProps={{
                          readOnly: true,
                        }}
                        {...field}
                        error={Boolean(errors.productType)}
                      />
                    </div>
                    {/* <button type="button" onClick={() => handleGetValue({ ...field })}>ss</button> */}
                  </>
                )}
              />
            </div>
            <div className="row" style={{ marginTop: "10px" }}>
              <Controller
                control={control}
                name='itemName'
                rules={{
                  required: "Item Name is required",
                }}
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                      <label htmlFor="itemname" className="labelbold">
                        *Item Name (aka Title)
                      </label>
                    </div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <TextField
                        id="itemName"
                        placeholder="Item Name"
                        variant="outlined"
                        style={{ width: "100%" }}
                        {...field}
                        error={Boolean(errors.itemName)}
                      />
                    </div>
                  </>
                )}
              />
            </div>
            <div className="row" style={{ marginTop: "10px" }}>
              <Controller
                control={control}
                name="productVariation"
                rules={{
                  required: "production variation is required",

                }}
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                      <label className="labelbold  mb-1">Variations</label>
                    </div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <div className="d-flex align-items-center">
                        <InputLabel className="me-2">Does the product have variations?</InputLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          id="productVariation"
                          name="row-radio-buttons-group"
                          {...field}
                          error={Boolean(errors.productVariation)}
                        >
                          <FormControlLabel value="Yes" control={<Radio />} label="Yes" checked={showSearchproduct === 'Yes'} onChange={handleChange} />
                          <FormControlLabel value="No" control={<Radio />} label="No" checked={showSearchproduct === 'No'} onChange={handleChange} />

                        </RadioGroup>
                      </div>
                    </div>
                  </>
                )}
              />
            </div>
            <div className="row">
              {
                showSearchproduct === 'Yes' ? <>

                  <div className="col-4 col-sm-3 col-lg-2 text-end"></div>
                  <div className="col-8 col-sm-7 col-lg-4">
                    <div>
                      <label>Which of these attributes are different across the product variants?</label>
                    </div>
                    <div>
                      <Controller
                        control={control}
                        name="colorVariationIdentity"
                        rules={{
                          required: "please check this box"
                        }}
                        render={({ field }) => (
                          <>


                            <div className="d-flex align-items-center">

                              <Checkbox
                                {...field}
                                color="primary"
                              />
                              <InputLabel htmlFor="colorVariationIdentity">
                                Color
                              </InputLabel>
                            </div>
                            {Boolean(errors.colorVariationIdentity) && (
                              <div className="error-message">
                                {errors.colorVariationIdentity.message}
                              </div>
                            )}

                          </>
                        )}
                      />
                    </div>
                  </div>

                </> : ""
              }

            </div>
            <div className="row">
              <Controller
                control={control}
                name='productBrandName'
                rules={{
                  required: "Brand Name is required",

                }}
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                      <label htmlFor="productBrandName" className="labelbold">
                        * Brand Name
                      </label>
                    </div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <TextField
                        id="productBrandName"
                        placeholder="Brand Name"
                        variant="outlined"
                        style={{ width: "100%" }}
                        {...field}
                        error={Boolean(errors.productBrandName)}
                      />
                    </div>
                  </>
                )}
              />
            </div>
              <div className="row" style={{ marginTop: "10px" }}>
              <Controller
                control={control}
                name="productID"
                rules={{
                  required: 'product id is required',
                  pattern: {
                    value: new RegExp('^[0-9]+$'),
                    message: "not a valid formate"
                  }
                }}
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                      <label className="labelbold mb-1">Product Id</label>
                    </div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <TextField
                        id="productID"
                        placeholder="5279173125000"
                        {...field}
                        variant="outlined"
                        error={Boolean(errors.productID)}
                        style={{ width: "100%" }}
                      />
                    </div>

                  </>
                )}
              />
            </div>
            <div className="row" style={{ marginTop: "10px" }}>
              <Controller
                control={control}
                name="productSelectcode"
                rules={{
                  required: "productSelectcode is required",
                }}
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 "></div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <TextField
                        id="productSelectcode-select"
                        variant="outlined"
                        select
                        style={{ width: "100%" }}
                        label="-Select-"
                        {...field}
                        error={Boolean(errors.profession)}

                      >
                        <MenuItem value="">-Select-</MenuItem>
                        <MenuItem value="EAN">EAN</MenuItem>
                        <MenuItem value="GCID">GCID</MenuItem>
                        <MenuItem value="GTIN">GTIN</MenuItem>
                        <MenuItem value="UPC">UPC</MenuItem>
                        <MenuItem value="ASIN">ASIN</MenuItem>
                      </TextField>
                    </div>

                  </>
                )}
              />
            </div>
          </>
        )
      }
    </div>

  )
}

export default ProductIdentity