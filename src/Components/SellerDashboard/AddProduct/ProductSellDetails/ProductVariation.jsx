import React, { useEffect, useState } from 'react';
// import { Controller, useFormContext } from 'react-hook-form';
import InputLabel from '@mui/material/InputLabel';
import {
  TextField,
  Button
} from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Controller, useFormContext } from 'react-hook-form'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';


const ProductVariation = () => {
  const [styleVarForm, setStyleVarForm] = useState(false)
  const [sizeVarForm, setSizeVarForm] = useState(false)
  const [colorVarForm, setColorVarForm] = useState(false)
  const [numberOfItemsVarForm, setNumberOfItemsVarForm] = useState(false)
  const [sizeValue, setSizeValue] = useState([])
  const [colorValue, setColorValue] = useState([])
  const [sizeNameTitle, setSizeNameTitle] = useState("")
  const [colorNameTitle, setColorNameTitle] = useState("")
  const [dataValue, setDataValue] = useState([]);
  const { control, formState: { errors } } = useFormContext()

  const [checkboxState, setCheckboxState] = useState({
    StyleVariation: true,
    SizeVariation: true,
    ColorVariation: true,
    NumberofItemsVariation: true,
  });

  const [showSearchproduct, setShowSearchproduct] = useState(
    localStorage.getItem('showSearchproduct') || 'No'
  );

  useEffect(() => {
    // Retrieve the saved value from local storage when the component mounts
    const savedProductVariation = localStorage.getItem('showSearchproduct');
    if (savedProductVariation) {
      setShowSearchproduct(savedProductVariation);
    }
  }, []);

  const handleProductVariationChange = (event) => {

    const selectedValue = event.target.value;
    setShowSearchproduct(selectedValue);
    localStorage.setItem('showSearchproduct', selectedValue);

 

  };

  console.log("render"," ProductVariation Page")






  const handleCheckboxChange = (name, checked, field) => {
    // Update the local state to manage enabled/disabled checkboxes
    const updatedState = { ...checkboxState };
    if (name === "StyleVariation" && checked) {
      updatedState.SizeVariation = true;
      updatedState.ColorVariation = false;
      updatedState.NumberofItemsVariation = false;
      field.ColorVariation = false
      field.NumberofItemsVariation = false
      setStyleVarForm(true)

    } else if (name === "ColorVariation" && checked) {
      updatedState.StyleVariation = false;
      //   updatedState.SizeVariation = false;
      updatedState.NumberofItemsVariation = false;
      field.ColorVariation = false
      field.NumberofItemsVariation = false
      setColorVarForm(true)
    }
    else if (name === "SizeVariation" && checked) {

      updatedState.NumberofItemsVariation = false;
      field.NumberofItemsVariation = false
      setSizeVarForm(true)
    }
    else if (name === "NumberofItemsVariation" && checked) {
      updatedState.StyleVariation = false;
      updatedState.SizeVariation = false;
      updatedState.ColorVariation = false;
      field.ColorVariation = false
      field.StyleVariation = false
      field.SizeVariation = false
      setNumberOfItemsVarForm(true)
    }
    else {
      // Handle unchecking by restoring the initial state for all checkboxes
      updatedState.StyleVariation = true;
      updatedState.SizeVariation = true;
      updatedState.ColorVariation = true;
      updatedState.NumberofItemsVariation = true;
      setStyleVarForm(false)
      setColorVarForm(false)
      setSizeVarForm(false)
      setNumberOfItemsVarForm(false)
    }
    setCheckboxState(updatedState);
  };
  const handleStyleVariationForm = (field) => {

    console.log()
  }


  const handleSizeVariationForm = (field) => {

    setSizeValue([
      ...sizeValue,
      field.value])


    // console.log(sizeValue)
    setSizeNameTitle("Size")
  }
  const handleColorVariationForm = (field) => {
    setColorNameTitle("Color")
    setColorValue([
      ...colorValue,
      field.value])
    // setDataValue([...dataValue, { sizeName: dataValue.sizeName, colorName: field.value }])
    // console.log(field.value)
  }
  const handleNumberOfItemsVariationForm = (field) => {

    console.log(field.value)
  }
  // const handleChange = (index, field, value) => {
  //   const newData = [...dataValue];
  //   newData[index][field] = value;
  //   setDataValue(newData);
  // };


  useEffect(() => {
    // Calculate all possible combinations when dataValue changes
    const allCombinations = [];

    if (colorValue.length === 0) {
      for (const sizeItem of sizeValue) {
        allCombinations.push({ sizeItem });
      }
    }
    else if (sizeValue.length === 0) {
      for (const colorItem of colorValue) {
        allCombinations.push({ colorItem });
      }
    }
    for (const sizeItem of sizeValue) {
      for (const colorItem of colorValue) {
        allCombinations.push({ sizeItem, colorItem });
      }
    }

    // Update the state with all combinations
    setDataValue(allCombinations);
    // setVariationData(allCombinations)
  }, [sizeValue, colorValue]);
  return (
    <>
      <div className="row align-items-center" style={{ marginTop: "10px" }}>
        <Controller
          control={control}
          name="productVariation"
          rules={{
            required: "production variation is required",

          }}
          render={({ field }) => (
            <>
              <div className="col-4 col-sm-3 col-lg-2 text-end">
                <label className="labelbold  mb-1">Variations:</label>
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
                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" checked={showSearchproduct === 'Yes'} onChange={handleProductVariationChange} />
                    <FormControlLabel value="No" control={<Radio />} label="No" checked={showSearchproduct === 'No'} onChange={handleProductVariationChange} />

                  </RadioGroup>
                </div>
              </div>
            </>
          )}
        />
      </div>
      {
        showSearchproduct === 'Yes' ? (<>
          <div>
            <p>
              To list variations (for example, the same product in a different size or color),
              begin by selecting a variation type below. The variation type cannot be edited
              after the parent SKU is created. If you have questions about creating variations,
              please view how to create product variations.
            </p>

            <h6>Choose Variation type:</h6>

            {["Style", "Size", "Color", "NumberofItems"].map((variation) => (
              <Controller
                key={variation}
                name={`${variation}Variation`}
                defaultValue=""
                control={control}
                render={({ field }) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        {...field}
                        color="primary"
                        checked={field.value}
                        onChange={(e) => {
                          field.onChange(e);
                          handleCheckboxChange(`${variation}Variation`, e.target.checked, { ...field });
                        }}
                        disabled={!checkboxState[`${variation}Variation`]}
                      />
                    }
                    label={variation}
                  />
                )}
              />
            ))}
          </div>
        </>) : ""
      }

      <div>
        {
          (styleVarForm || sizeVarForm || colorVarForm || numberOfItemsVarForm) && (
            <>
              <h6>List all of your variants for the variation types below.</h6>
              <p>For the fields below, list the variations that exist for your products. For example, if you are selling Pirate Shirts in the sizes Small, Medium and Large, and in the colours White and Black, list all those terms. This is necessary even if you do not carry every combination or are temporarily out of stock on some. You can delete any invalid variations on the Manage Your Inventory (MYI) page. See an example and Learn more.</p>
            </>)
        }
        {
          styleVarForm ? (
            <>
              <div className='row align-items-center'>
                <Controller
                  name="styleVarForm"
                  defaultValue=""
                  control={control}
                  render={({ field }) => (
                    <>
                      <div className="col-4 col-sm-3 col-lg-3 text-end">
                        <label className="labelbold me-2">Style:</label>
                      </div>
                      <div className="col-8 col-sm-4 col-lg-4">
                        <TextField
                          placeholder=""
                          id="styleVarForm"
                          variant="outlined"
                          {...field}
                          style={{ width: "100%" }}
                          error={Boolean(errors.styleVarForm)}
                        />
                      </div>
                      <div className='col-2 col-sm-2 col-lg-2 '>
                        <Button variant='contained' onClick={() => handleStyleVariationForm({ ...field })}>Add</Button>
                      </div>
                    </>
                  )}
                />
              </div>
            </>) : ""
        }
        {
          sizeVarForm ? (
            <>
              <div className='row align-items-center'>
                <Controller
                  name="sizeVarForm"
                  defaultValue=""
                  control={control}
                  render={({ field }) => (
                    <>
                      <div className="col-4 col-sm-3 col-lg-3 text-end">
                        <label className="labelbold me-2">Size:</label>
                      </div>
                      <div className="col-8 col-sm-4 col-lg-4">
                        <TextField
                          id="sizeVarForm-select"
                          variant="outlined"
                          select
                          style={{ width: "100%" }}
                          placeholder="select"
                          {...field}
                          error={Boolean(errors.sizeVarForm)}
                        >
                          <MenuItem value="">-Select-</MenuItem>
                          <MenuItem value="Extra Large">Extra Large</MenuItem>
                          <MenuItem value="Large">Large</MenuItem>
                          <MenuItem value="Medium">Medium</MenuItem>
                          <MenuItem value="Small">Small</MenuItem>
                          <MenuItem value="X-Large">X-Large</MenuItem>
                          <MenuItem value="X-Small">X-Small</MenuItem>
                          <MenuItem value="XX-Large">XX-Large</MenuItem>
                          <MenuItem value="XX-Small">XX-Small</MenuItem>
                          <MenuItem value="XX-Large">XX-Large</MenuItem>
                          <MenuItem value="XX-Small">XX-Small</MenuItem>
                          <MenuItem value="XXX-Large">XXX-Large</MenuItem>
                          <MenuItem value="XXX-Small">XXX-Small</MenuItem>
                          <MenuItem value="XXXX-Large">XXXX-Large</MenuItem>
                          <MenuItem value="XXXX-Small">XXXX-Small</MenuItem>
                          <MenuItem value="XXXXX-Large">XXXXX-Large</MenuItem>
                          <MenuItem value="XXXXX-Small">XXXXX-Small</MenuItem>
                        </TextField>
                      </div>
                      <div className='col-2 col-sm-2 col-lg-2 '>
                        <Button variant='contained' onClick={() => handleSizeVariationForm({ ...field })}>Add</Button>
                      </div>
                    </>
                  )}
                />
              </div>
            </>) : ""
        }
        {
          colorVarForm ? (
            <>
              <div className='row align-items-center'>
                <Controller
                  name="colorVarForm"
                  defaultValue=""
                  control={control}
                  render={({ field }) => (
                    <>
                      <div className="col-4 col-sm-3 col-lg-3 text-end">
                        <label className="labelbold me-2">Color:</label>
                      </div>
                      <div className="col-8 col-sm-4 col-lg-4">
                        <TextField
                          placeholder=""
                          id="colorVarForm"
                          variant="outlined"
                          {...field}
                          style={{ width: "100%" }}
                          error={Boolean(errors.colorVarForm)}
                        />
                      </div>
                      <div className='col-2 col-sm-2 col-lg-2 '>
                        <Button variant='contained' onClick={() => handleColorVariationForm({ ...field })}>Add</Button>
                      </div>
                    </>
                  )}
                />
              </div>
            </>) : ""
        }
        {
          numberOfItemsVarForm ? (
            <>
              <div className='row align-items-center'>
                <Controller
                  name="numberOfItemsVarForm"
                  defaultValue=""
                  control={control}
                  render={({ field }) => (
                    <>
                      <div className="col-4 col-sm-3 col-lg-3 text-end">
                        <label className="labelbold me-2">Number Of Items:</label>
                      </div>
                      <div className="col-8 col-sm-4 col-lg-4">
                        <TextField
                          placeholder=""
                          id="numberOfItemsVarForm"
                          variant="outlined"
                          {...field}
                          style={{ width: "100%" }}
                          error={Boolean(errors.numberOfItemsVarForm)}
                        />
                      </div>
                      <div className='col-2 col-sm-2 col-lg-2 '>
                        <Button variant='contained' onClick={() => handleNumberOfItemsVariationForm({ ...field })}>Add</Button>
                      </div>
                    </>
                  )}
                />
              </div>
            </>) : ""
        }

      </div>
    
      <div>
        {
          (dataValue.length > 0) ? (<>
            <p>Your variation child ASINs have been created. To complete your listings, find the variation child listings in your inventory and select ‘Edit’ to add an image for each and every variation of child. Please note that each variation child listing requires an image to be active on the Dhiyodha website.</p>
          </>) : ""
        }


        {
          (dataValue.length > 0) ? (<>
            <table>
              <thead>
                <tr>
                  <th>Check</th>
                  <th>{sizeNameTitle}</th>
                  <th>{colorNameTitle}</th>
                  <th>Seller SKU</th>
                  <th>Product Id</th>
                  <th>Product Id Type</th>
                  <th>Item Condition</th>
                  <th>Your Price</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {dataValue.map((item, index) => (
                  <tr key={index}>
                    <td>Checkbox</td>
                    <td

                    // onInput={(e) => handleChange(index, 'sizeName', e.target.textContent)}
                    >
                      {item.sizeItem}
                    </td>
                    <td

                    // onInput={(e) => handleChange(index, 'colorName', e.target.textContent)}
                    >
                      {item.colorItem}
                    </td>
                    <td>
                      <div className='row' style={{ marginTop: "10px" }}>
                        <Controller
                          control={control}
                          defaultValue=""
                          name={`productsellerSKU${index}`}
                          rules={{
                            required: "productsellerSKU is required",

                          }}
                          render={({ field }) => (
                            <>

                              <div className="col-8 col-sm-7 col-lg-12">
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
                    </td>
                    <td>   <div className="row" style={{ marginTop: "10px" }}>
                      <Controller
                        control={control}
                        defaultValue=""
                        name={`productID${index}`}
                        rules={{
                          required: 'product id is required',
                          pattern: {
                            value: new RegExp('^[0-9]+$'),
                            message: "not a valid formate"
                          }
                        }}
                        render={({ field }) => (
                          <>

                            <div className="col-8 col-sm-7 col-lg-12">
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
                    </div></td>
                    <td>    <div className="row" style={{ marginTop: "10px" }}>
                      <Controller
                        control={control}
                        defaultValue=""
                        name={`productSelectcode${index}`}
                        rules={{
                          required: "productSelectcode is required",
                        }}
                        render={({ field }) => (
                          <>

                            <div className="col-8 col-sm-7 col-lg-12">
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
                    </div></td>
                    <td>
                      <div className='row' style={{ marginTop: "10px" }}>
                        <Controller
                          control={control}
                          defaultValue=""
                          name={`productSellCondition${index}`}
                          rules={{
                            required: "productSellCondition is required"
                          }}
                          render={({ field }) => (
                            <>

                              <div className="col-8 col-sm-7 col-lg-12">
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
                      </div></td>
                    <td>
                      <div className='row' style={{ marginTop: "10px" }}>
                        <Controller
                          control={control}
                          defaultValue=""
                          name={`productSellPrice${index}`}
                          rules={{
                            required: "productSellPrice is required",
                            pattern: {
                              value: new RegExp('^[0-9]+$'),
                              message: "not a valid formate"
                            }
                          }}
                          render={({ field }) => (
                            <>

                              <div className="col-8 col-sm-7 col-lg-12">
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
                      </div></td>
                    <td>
                      <div className='row' style={{ marginTop: "10px" }}>
                        <Controller
                          control={control}
                          defaultValue=""
                          name={`productSellQuantity${index}`}
                          rules={{
                            required: "productSellQuantity is required",
                            pattern: {
                              value: new RegExp('^[0-9]+$'),
                              message: "not a valid formate"
                            }
                          }}
                          render={({ field }) => (
                            <>

                              <div className="col-8 col-sm-7 col-lg-12">
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
                      </div></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>) : ""

        }
      </div>
      {/* <div>
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
                          <FormControlLabel value="Yes" control={<Radio />} label="Yes" checked={showSearchproduct === 'Yes'} onChange={handleProductVariationChange} />
                          <FormControlLabel value="No" control={<Radio />} label="No" checked={showSearchproduct === 'No'} onChange={handleProductVariationChange} />

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
                    <div className="d-flex flex-wrap">
                      <Controller
                        control={control}
                        name="colorVariation"

                        render={({ field }) => (
                          <>
                            <div className="d-flex align-items-center">
                              <Checkbox
                                {...field}
                                color="primary"
                              />
                              <InputLabel htmlFor="colorVariation">
                                Color
                              </InputLabel>
                            </div>
                          </>
                        )}
                      />
                      <Controller
                        control={control}
                        name="materialTypeVariation"
                        render={({ field }) => (
                          <>
                            <div className="d-flex align-items-center">
                              <Checkbox
                                {...field}
                                color="primary"
                              />
                              <InputLabel htmlFor="materialTypeVariation">
                                Material Type
                              </InputLabel>
                            </div>
                          </>
                        )}
                      />
                      <Controller
                        control={control}
                        name="itemWeightVariation"
                        render={({ field }) => (
                          <>
                            <div className="d-flex align-items-center">
                              <Checkbox
                                {...field}
                                color="primary"
                              />
                              <InputLabel htmlFor="itemWeightVariation">
                                Item Weight
                              </InputLabel>
                            </div>
                          </>
                        )}
                      />
                      <Controller
                        control={control}
                        name="numberOfItemsVariation"
                        render={({ field }) => (
                          <>
                            <div className="d-flex align-items-center">
                              <Checkbox
                                {...field}
                                color="primary"
                              />
                              <InputLabel htmlFor="numberOfItemsVariation">
                                Number of Items
                              </InputLabel>
                            </div>
                          </>
                        )}
                      />
                      <Controller
                        control={control}
                        name="wattageVariation"
                        render={({ field }) => (
                          <>
                            <div className="d-flex align-items-center">
                              <Checkbox
                                {...field}
                                color="primary"
                              />
                              <InputLabel htmlFor="wattageVariation">
                                Wattage
                              </InputLabel>
                            </div>
                          </>
                        )}
                      />

                      <Controller
                        control={control}
                        name="voltageVariation"
                        render={({ field }) => (
                          <>
                            <div className="d-flex align-items-center">
                              <Checkbox
                                {...field}
                                color="primary"
                              />
                              <InputLabel htmlFor="voltageVariation">
                                Voltage
                              </InputLabel>
                            </div>
                          </>
                        )}
                      />
                      <Controller
                        control={control}
                        name="modelNumberVariation"
                        render={({ field }) => (
                          <>
                            <div className="d-flex align-items-center">
                              <Checkbox
                                {...field}
                                color="primary"
                              />
                              <InputLabel htmlFor="modelNumberVariation">
                                Model Number
                              </InputLabel>
                            </div>
                          </>
                        )}
                      />
                      <Controller
                        control={control}
                        name="shapeVariation"
                        render={({ field }) => (
                          <>
                            <div className="d-flex align-items-center">
                              <Checkbox
                                {...field}
                                color="primary"
                              />
                              <InputLabel htmlFor="shapeVariation">
                                Shape
                              </InputLabel>
                            </div>
                          </>
                        )}
                      />
                      <Controller
                        control={control}
                        name="capacityVariation"
                        render={({ field }) => (
                          <>
                            <div className="d-flex align-items-center">
                              <Checkbox
                                {...field}
                                color="primary"
                              />
                              <InputLabel htmlFor="capacityVariation">
                                Capacity
                              </InputLabel>
                            </div>
                          </>
                        )}
                      />
                      <Controller
                        control={control}
                        name="manufacturePartNumberVariation"
                        render={({ field }) => (
                          <>
                            <div className="d-flex align-items-center">
                              <Checkbox
                                {...field}
                                color="primary"
                              />
                              <InputLabel htmlFor="manufacturePartNumberVariation">
                                Manufacturer Part Number
                              </InputLabel>
                            </div>
                          </>
                        )}
                      />
                    </div>

                  </div>

                </> : ""
              }

            </div>
      </div> */}
    </>

  );
};

export default ProductVariation;



