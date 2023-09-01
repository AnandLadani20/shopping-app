import React from 'react'
import {Button} from "@mui/material";
import { useNavigate } from 'react-router-dom';
const Verified = () => {
        
    const navigate = useNavigate();
    const handleDashbordPage = ()=>{
        navigate('/SellerDashboard');
    }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 h-100'>
                        <div className='d-flex justify-content-center align-items-center flex-column' style={{height:"60vh"}}>
                        <h2>Congratulation Your Profile is Verified...!!!</h2>

                        <h3>Welcome To </h3>
                        <h3>Dhiyodha  Dashbord</h3>

                        <Button variant='contained' className='mt-4' onClick={handleDashbordPage}>Start Listing</Button>

                        <div className='verified-selling-page-congrats'><h1>Congratulations! &nbsp;</h1></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Verified