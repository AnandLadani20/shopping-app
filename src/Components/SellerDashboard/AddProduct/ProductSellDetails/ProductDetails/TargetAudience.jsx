import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TextField, Button, MenuItem } from '@mui/material';

const TargetAudience = () => {

    const { control, formState: { errors }, getValues } = useFormContext()

    const [fields, setFields] = useState(['']);

    const append = () => {
        if (fields.length < 5) {
            setFields([...fields, '']);
        }
    };

    const remove = () => {
        if (fields.length > 1) {
            const newFields = [...fields];
            newFields.pop();
            setFields(newFields);
            getValues('targetAudience').pop();
        }
    };



    return (
        <div className="row" style={{ marginTop: "10px" }}>
            <div className="col-4 col-sm-3 col-lg-3 text-end">
                <label className="labelbold me-2">Target Audience</label>
            </div>
            <div className="col-8 col-sm-7 col-lg-6">
                {fields.map((field, index) => (
                    <div className="input-container" key={index}>
                        <Controller
                            name={`targetAudience[${index}]`}
                            control={control}
                            defaultValue={field}
                            rules={{
                                required: "this field is required",
                            }}
                            render={({ field }) => (

                                <TextField
                                    id="targetAudience-select"
                                    variant="outlined"
                                    select
                                    style={{ width: "100%", marginTop: "2px" }}
                                    placeholder="select"
                                    {...field}
                                    error={Boolean(field.value.length() > 0 ? true : false)}
                                >
                                    <MenuItem value="">-Select-</MenuItem>
                                    <MenuItem value="Women">Women</MenuItem>
                                    <MenuItem value="Unisex Children">Unisex Children</MenuItem>
                                    <MenuItem value="Men">Men</MenuItem>
                                    <MenuItem value="Boys">Boys</MenuItem>
                                    <MenuItem value="Girls">Girls</MenuItem>
                                    <MenuItem value="Unisex Audit">Unisex Adult</MenuItem>
                                </TextField>
                            )}
                        />

                    </div>
                ))
                }

                <Button id="addMore" onClick={append}>
                    Add More
                </Button>
                <Button onClick={remove}>
                    Remove last
                </Button>
            </div>
        </div >

    );
};

export default TargetAudience;
