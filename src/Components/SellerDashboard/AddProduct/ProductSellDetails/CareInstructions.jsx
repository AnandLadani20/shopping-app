
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
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



const CareInstructions = ({ careInstructionOptions }) => {
    const { control, setValue ,getValues} = useFormContext()
    const [fields, setFields] = useState([{ id: 'productCareInstruction', isFocused: false }]);

    const addField = () => {
        setFields([...fields, { id: `productCareInstruction${fields.length}`, isFocused: false }]);
    };

    const removeField = () => {
        if (fields.length > 1) {
            setFields(fields.slice(0, -1));
            getValues('productCareInstruction').pop();
        }
    };

    return (


        <div className="row" style={{ marginTop: "10px" }}>
            <div className="col-4 col-sm-3 col-lg-3 text-end">
                <label className="labelbold me-2">Product Care Instructions </label>
            </div>
            <div className="col-8 col-sm-7 col-lg-6">
                <div style={{ width: "100%" }}>
                    {fields.map((fieldData, index) => (
                        <Controller
                            key={fieldData.id}
                            name={`productCareInstruction[${index}]`}
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <div
                                    className='includedComponentBox'
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
                                        placeholder="care instruction"
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
                                    }} index={index} options={careInstructionOptions} /> : ""}

                                </div>
                            )}
                        />
                    ))}

                    <Button type="button" onClick={addField}>
                        Add More
                    </Button>
                    <Button type="button" onClick={removeField}>
                        Remove Last
                    </Button>
                </div>
            </div>
        </div>

    );
};

export default CareInstructions;
