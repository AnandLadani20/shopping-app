import React, { forwardRef } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Controller, useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';

const CustomTextField = forwardRef((props, ref) => (
    <TextField
        {...props}
        ref={ref}
        sx={{
            '& .MuiOutlinedInput-root': {
                '& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': {
                    borderRight:"1px solid rgb(192, 192, 192)",
                },
                '&:hover .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': {
                    borderRight:"1px solid #223f93",
                },
                '&.Mui-focused .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': {
                    borderRight:"1px solid #223f93",
                },
                '&:hover fieldset': {
                    borderColor: '#223f93',
                },
                '&.Mui-focused fieldset': {
                    borderColor: '#223f93',
                },
            },
            '& .MuiSvgIcon-root': {
                color: '#223f93',
            },
            padding: '0px',
        }}
    />
));

const BookingDate = () => {
    const { control, formState: { errors } } = useFormContext()
    return (
        <div className='row' style={{ marginTop: "10px" }}>
            <Controller
                control={control}
                name='bookingDate'
                rules={{
                    required: "this field is required",
                }}
                render={({ field }) => (
                    <>
                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                            <label className="labelbold me-2">Item Booking Date</label>
                        </div>
                        <div className="col-8 col-sm-7 col-lg-6">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    {...field}
                                    value={dayjs(field.value)}
                                    error={Boolean(errors.bookingDate)}
                                    id="bookingDate"
                                    onChange={(date) => field.onChange(date ? date.format('DD/MM/YYYY') : '')}
                                    components={{
                                        TextField: CustomTextField
                                    }}
                                />
                            </LocalizationProvider>
                        </div>
                    </>
                )}
            />
        </div>
    )
}

export default BookingDate

