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

const ProductIdentity = () => {
  const { control, formState: { errors } } = useFormContext()
  const [showSearchproduct, setShowSearchproduct] = useState('singleProduct');
  const handleChange = (event) => {
    setShowSearchproduct(event.target.value);
  };
  return (
    <div>
      <div >
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
              <div className="d-flex align-items-center">
                <label htmlFor="itemname" className="labelbold me-2">
                  *Item Name (aka Title)
                </label>
                <TextField
                  id="itemName"
                  placeholder="Item Name"
                  variant="outlined"
                  style={{ width: "50%" }}
                  {...field}
                  error={Boolean(errors.itemName)}
                />
              </div>
            </>

          )}
        />
        <div>
          <Controller
            control={control}
            name="productVariation"
            rules={{
              required: "production variation is required",

            }}
            render={({ field }) => (
              <>
                <div className="d-flex align-items-center">
                  <label className="labelbold me-2 mb-1">Variations</label>
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
              </>
            )}
          />
        </div>
        <div>
          {
            showSearchproduct === 'Yes' ? <label>Which of these attributes are different across the product variants?</label> : ""
          }
          
        </div>
        <div>
          <Controller
            control={control}
            name="productID"
            rules={{
              required: 'product id is required',
              pattern:{
                value:new RegExp('^[0-9]+$'),
                message:"not a valid formate"
            }
            }}
            render={({ field }) => (
              <>
                <div className="d-flex align-items-center">
                  <label className="labelbold me-2 mb-1">Product Id</label>
                  <TextField
                    id="productID"
                    placeholder="5279173125000"
                    {...field}
                    variant="outlined"
                    error={Boolean(errors.productID)}
                    style={{ width: "50%" }}

                  />
                </div>
              </>
            )}
          />
        </div>
        <div>
          <Controller
            control={control}
            name="productSelectcode"
            rules={{
              required: "productSelectcode is required",
            }}
            render={({ field }) => (
              <>
                <TextField
                  id="productSelectcode-select"
                  variant="outlined"
                  select
                  style={{ width: "50%", marginTop: "20px" }}
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
              </>
            )}
          />
        </div>
        <div>
          <Controller
            control={control}
            name="productIdNot"
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
                  <InputLabel htmlFor="productIdNot">
                    i do not have a Product Id
                  </InputLabel>
                </div>
                {Boolean(errors.termsandcondition) && (
                  <div className="error-message">
                    {errors.termsandcondition.message}
                  </div>
                )}


              </>
            )}
          />
        </div>
      </div>
    </div>
  )
}

export default ProductIdentity