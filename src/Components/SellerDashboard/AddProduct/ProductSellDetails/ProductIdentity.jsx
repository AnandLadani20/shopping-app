import {
  TextField,
  Button,
} from "@mui/material";
import React, { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import InputLabel from '@mui/material/InputLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import { useSelector } from 'react-redux';

const ProductIdentity = () => {
  const myState = useSelector((state)=>state.showOneForm)

  const { control, formState: { errors } } = useFormContext()
  const [showSearchproduct, setShowSearchproduct] = useState('singleProduct');
  const handleChange = (event) => {
    setShowSearchproduct(event.target.value);
  };
  return (
    <div>
     {
      myState && (

     <div>
        <div className="row">
          <Controller
            control={control}
            name='itemName'
            rules={{
              required: "First Name is required",
              minLength: {
                value: 2,
                message: "First Name is min. 2 characters"
              }
            }}
            render={({ field }) => (
              <>

                <div className="col-4 col-sm-3 col-lg-2 ">
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
                <div className="col-4 col-sm-3 col-lg-2 ">
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
                <div className="col-4 col-sm-3 col-lg-2 ">
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

        <div className="row" style={{ marginTop: "10px" }}>
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
    </div>
  )
}

export default ProductIdentity