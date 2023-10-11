import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Controller, useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  row: {
    marginTop: theme.spacing(1),
  },
  label: {
    fontWeight: 'bold',
  },
}));

const BookingDate = () => {
    const classes = useStyles();
    const { control, formState: { errors } } = useFormContext()
    return (
        <div className={classes.row}>
            <Controller
                control={control}
                name='bookingDate'
                rules={{
                    required: "this field is required",
                }}
                render={({ field }) => (
                    <>
                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                            <label className={classes.label}>Item Booking Date</label>
                        </div>
                        <div className="col-8 col-sm-7 col-lg-6">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    {...field}
                                    value={dayjs(field.value)}
                                    error={Boolean(errors.bookingDate)}
                                    id="bookingDate"
                                    onChange={(date) => field.onChange(date.format('DD/MM/YYYY'))}
                                    renderInput={(params) => <TextField {...params} />}
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
