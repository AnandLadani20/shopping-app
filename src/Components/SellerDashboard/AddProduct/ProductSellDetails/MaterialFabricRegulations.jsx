import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TextField, Button, MenuItem } from '@mui/material';

const MaterialFabricRegulations = () => {

    const { control, formState: { errors }, getValues } = useFormContext()

    const [fields, setFields] = useState(['']);

    const append = () => {
        if (fields.length < 3) {
            setFields([...fields, '']);
        }
    };

    const remove = () => {
        if (fields.length > 1) {
            const newFields = [...fields];
            newFields.pop();
            setFields(newFields);
            getValues('materialOrFabricRegulation').pop();
        }
    };



    return (
        <div className="row" style={{ marginTop: "10px" }}>
            <div className="col-4 col-sm-3 col-lg-3 text-end">
                <label className="labelbold me-2"> Material/Fabric Regulations</label>
            </div>
            <div className="col-8 col-sm-7 col-lg-6">
                {fields.map((field, index) => (
                    <div className="input-container" key={index}>
                        <Controller
                            name={`materialOrFabricRegulation[${index}]`}
                            control={control}
                            defaultValue={field}
                            rules={{
                                required: "this field is required",
                            }}
                            render={({ field }) => (

                                <TextField
                                    id="materialOrFabricRegulation-select"
                                    variant="outlined"
                                    select
                                    style={{ width: "100%", marginTop: "2px" }}
                                    placeholder="select"
                                    {...field}
                                    error={Boolean(field.value.length() > 0 ? true : false)}
                                >
                                    <MenuItem value="">-Select-</MenuItem>
                                    <MenuItem value="Wool">Wool</MenuItem>
                                    <MenuItem value="Fur">Fur</MenuItem>
                                    <MenuItem value="Not Applicable">Not Applicable</MenuItem>
                                    <MenuItem value="Bamboo">Bamboo</MenuItem>
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

export default MaterialFabricRegulations;
