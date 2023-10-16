import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

const OptionsList = ({ setValue, fieldId, setIsFocused, index, options }) => (
    <div className="options-list">
        {options.map(option => (
            <div key={option} className="childOption" onClick={(event) => {
                event.stopPropagation();
                setValue(fieldId, option);
                setIsFocused(index, false);
            }}>
                {option}
            </div>
        ))}
    </div>
);

const ProductStyle = ({ styleOptions }) => {
    const { control, setValue } = useFormContext()
    const [fields, setFields] = useState([{ id: 'productStyle', isFocused: false }]);

    return (
        <div className="row" style={{ marginTop: "10px" }}>
            <div className="col-4 col-sm-3 col-lg-3 text-end">
                <label className="labelbold me-2">Style</label>
            </div>
            <div className="col-8 col-sm-7 col-lg-6">
                <div style={{ width: "100%" }}>
                    {fields.map((fieldData, index) => (
                        <Controller
                            key={fieldData.id}
                            name='productStyle'
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <div
                                    className='productStyle'
                                    onBlur={() => {
                                        // Use a timeout to delay hiding the options list
                                        setTimeout(() => {
                                            const newFields = [...fields];
                                            newFields[index].isFocused = false;
                                            setFields(newFields);
                                        }, 200); // You can adjust this delay as needed
                                    }}
                                >
                                    <TextField
                                        {...field}
                                        type="text"
                                        placeholder=""
                                        variant="outlined"
                                        style={{ width: "100%", marginTop: "2px" }}
                                        onFocus={() => {
                                            const newFields = [...fields];
                                            newFields[index].isFocused = true;
                                            setFields(newFields);
                                        }}

                                    />
                                    {fieldData.isFocused ? <OptionsList setValue={setValue} fieldId={field.name} setIsFocused={(index, value) => {
                                        const newFields = [...fields];
                                        newFields[index].isFocused = value;
                                        setFields(newFields);
                                    }} index={index} options={styleOptions} /> : ""}

                                </div>
                            )}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductStyle;
