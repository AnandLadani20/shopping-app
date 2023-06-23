import React from 'react'
import { useState } from 'react';


const Verification = () => {

    const [number,setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [faceVerify,setFaceVerify] = useState('');
    const [numberError,setNumberError] = useState('');
    const [emailError,setEmailError] = useState('');
    const [passwordError,setPasswordError] = useState('');
    const [confirmpassError,setConfirmPassError] = useState('');
    const [faceverifyError,setFaceVerifyError] = useState('');
    
  const handleSubmitClick = (e) => {
    e.preventDefault();
    
    if(number === ''){
        setNumberError(" Mobile Number is required")
    }
    
    if(email === ''){
        setEmailError("Email is required")
    }
    if(password === ''){
        setPasswordError("Password is required")
    }
    if(confirmPassword === ''){
        setConfirmPassError("Confirm password is required")
    }
    if(faceVerify === ''){
        setFaceVerifyError("Face Verification is required")
    }
  
    
  }


    return (
        <>
            <section className='Selling-verification'>
                <div className='container'>
                    <div className='row d-flex justify-content-center align-items-center'>
                        <div className='col-6'>
                            <form action='#' className="row" onSubmit={(e)=>handleSubmitClick(e)}>
                                <div className='col-md-8'>
                                    <label htmlFor="validationCustom01" className="form-label">Mobile Number</label>
                                    <input type='number' placeholder='  * Mobile Number' className="form-control" value={number} onChange={(e)=>setNumber(e.target.value)} name='mobile-number' />
                                    <div className='error-set'>{numberError}</div>
                                </div>
                                <div className='col-md-4'>
                                    <button className="btn btn-primary mt-4">Send OTP</button>
                                </div>
                                <div className='col-md-8'>
                                    <label htmlFor="validationCustom01" className="form-label">Email Address</label>
                                    <input type='email' placeholder='  * Email' className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}  name='email-address' />
                                    <div className='error-set'>{emailError}</div>
                                </div>
                                <div className='col-md-4'>
                                    <button className="btn btn-primary mt-4 mb-0">Verify Email</button>
                                </div>
                                <div className='col-md-8'>
                                    <label htmlFor="validationCustom01" className="form-label">Password</label>
                                    <input type='password' placeholder='  *Create Password' className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}  name='password' />
                                    <div className='error-set'>{passwordError}</div>
                                </div>
                                <div className='col-md-8'>
                                    <label htmlFor="validationCustom01" className="form-label">Confirm Password</label>
                                    <input type='password' placeholder='  *Confirm Password' className="form-control" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}  name='confirm-password' />
                                    <div className='error-set'>{confirmpassError}</div>
                                </div>
                                <div className='col-md-8'>
                                    <label htmlFor="validationCustom01" className="form-label">Face Verification</label>
                                    <input type='file' placeholder='  *Face Verification' accept="image/*" className="form-control" value={faceVerify} onChange={(e)=>setFaceVerify(e.target.value)}  name='face-verification' />
                                    <div className='error-set'>{faceverifyError}</div>
                                </div>
                                <div className='col-12'>
                                    <div className="form-check">
                                        <input type='checkbox' name='term&condition' className="form-check-input" />
                                        <label className="form-check-label">Terms & Condition & Privacy Policy</label>
                                    </div>
                                </div>
                                <div className=''>
                                    <button type="submit"  className='btn btn-primary mt-4'>Continue</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Verification