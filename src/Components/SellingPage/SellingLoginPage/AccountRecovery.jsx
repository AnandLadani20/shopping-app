import React from 'react'
import VideoPlayer from '../VideoPlayer'
import productVideo from '../../../Assests/video/two-step verification.mp4'
import {
    Button,
} from "@mui/material";

const AccountRecovery = () => {
    const title = "Two Step Verification Fail"
    return (
        <div className='loginpage-account-recovery-area'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h3>Recover Your Account after Two-Step Verification Fails</h3>
                        <p>f Two-Step Verification fails and you can't access your account, you can try to recover your account. To view the below information in your preferred regional language, click the link: English, हिन्दी (Hindi), தமிழ் (Tamil), తెలుగు (Telugu), ಕನ್ನಡ (Kannada), മലയാളം (Malayalam), मराठी (Marathi), বাংলা (Bengali).</p>
                        <div className='my-5'>
                            <VideoPlayer productVideo={productVideo} title={title} />
                        </div>
                        <p>
                            Before you begin account recovery, try to sign in with the mobile number or e-mail address registered with your Amazon account or from a trusted device.</p>
                        <p>
                            If you still cannot sign in, begin account recovery by:
                        </p>
                        
                        <ul>
                            <li>Clicking here.</li>
                        </ul>
                       
                            <ul>  
                               <li>Following the on-screen instructions to upload any government-issued photo identification documents (ID) . Acceptable IDs include:</li>
                            </ul>
                     
                        <ul>
                            <li>A state-issued driver license</li>
                            <li> A state ID card</li>
                            <li>A voter registration card</li>
                        </ul>

                        <p>
                            <span className='fw-bold'> Note:</span> Make sure your name, address, and issuing authority (state or country) are visible. Hide or remove any sensitive information (like account numbers or identification numbers) from the identification document </p>
                        <p>Verification takes up to 2-3 working days. To protect your account, no changes will be made to your Two-Step Verification settings until your identity is successfully verified. We will email you to confirm once the Two-Step Verification has been disabled - post verification. You will then be able to access your account with only your password. You can also re-enable Two-Step Verification at any time.</p>
                          
                          <div className='d-flex justify-content-center my-5 '>
                                <div className='border border-2 p-3 rounded'>
                                     <p className='fw-bold'> Was this information helpful?</p>
                                     <div className='d-flex justify-content-center gap-3 mt-2'>
                                     <Button type="button" variant="outlined" size='large'>Yes</Button>
                                     <Button type="button"  variant="outlined" size='large'>No</Button>
                                     </div>
                                </div>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountRecovery