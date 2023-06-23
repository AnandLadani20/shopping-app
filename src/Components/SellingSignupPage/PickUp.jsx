import React from 'react'
import { useFormik } from 'formik';
import { signUpSchema } from './Schemas'

const initialValues = {
    select_profession: '',
    select_categories: '',
    pin_code: '',
    address: ''
}
const PickUp = () => {
    const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values,action) => {
            console.log("validation", values)
            action.resetForm();

        }
    })
    console.log("errors", errors)
    return (
        <>
            <section className='pick-up'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <form action='#' className="row" onSubmit={handleSubmit}>
                                <div className='col-md-8'>
                                    <label htmlFor="select_profession" className="form-label">Select Profession</label>
                                    <input
                                        type='file'
                                        placeholder='  *Select Profession'
                                        accept="video/*"
                                        className="form-control"
                                        name='select_profession'
                                        autoComplete="off"
                                        value={values.select_profession}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {
                                        errors.select_profession && touched.select_profession ? (<p className='error-set'>{errors.select_profession}  </p>) : null
                                    }
                                </div>
                                <div className='col-md-4'>
                                    <button className="btn btn-primary mt-4">Take a Video Tour</button>
                                </div>
                                <div className='col-md-8'>
                                    <label htmlFor="select_categories" className="form-label">Select Categories</label>
                                    <input type='file'
                                        placeholder='  *Select Categories'
                                        accept="video/*"
                                        className="form-control"
                                        name='select_categories'
                                        autoComplete="off"
                                        value={values.select_categories}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {
                                        errors.select_categories && touched.select_categories ? (<p className='error-set'>{errors.select_categories}  </p>) : null
                                    }
                                </div>
                                <div className='col-md-4'>
                                    <button className="btn btn-primary mt-4">Take a Video Tour</button>
                                </div>
                                <div className='col-md-8'>
                                    <label htmlFor="pin_code" className="form-label">Pin Code</label>
                                    <input type='number'
                                        placeholder='  * Enter a Pin Code'
                                        className="form-control"
                                        autoComplete="off"
                                        name='pin_code'
                                        value={values.pin_code}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {    
                                        errors.pin_code && touched.pin_code ? (<p className='error-set'>{errors.pin_code}  </p>) : null
                                    }
                                </div>
                                <div className='col-md-8'>
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input type='text'
                                        placeholder='  * Address'
                                        autoComplete="off"
                                        className="form-control"
                                        name='address'
                                        value={values.address}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {    
                                        errors.address && touched.address ? (<p className='error-set'>{errors.address}  </p>) : null
                                    }
                                </div>
                                <div className=''>
                                    <button type="submit" className='btn btn-primary mt-4'>Continue</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PickUp