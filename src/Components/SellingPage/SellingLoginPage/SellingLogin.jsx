import React ,{useState}from 'react'
import LoginForm from './LoginForm'
import {
    useForm,
    FormProvider,
} from "react-hook-form";

import './login.css'

import LoginOtpVerify from './LoginOtpVerify';
import VerifiedLogin from './VerifiedLogin';
import TwoStepVerify from './TwoStepVerify';




const SellingLogin = ({setOpenLogin}) => {
    const [activeStep, setActiveStep] = useState(0);
    const [showVerify, setShowVerify] = useState("show")
    

    const methods = useForm({
        defaultValues: {
            phoneNumber:"",
            password:"",
            loginOtp:""
        },
    });

    
    const handleNext = () =>{
        setActiveStep(activeStep + 1)
    }
    const handleCloseLogin = ()=>{
        setOpenLogin(false)
    }
 
    function getStepContent(step) {
        switch (step) {
            case 0:
                return  <LoginForm />;

            case 1:
                return <LoginOtpVerify setShowVerify={setShowVerify}/>;

            case 2:
                return <VerifiedLogin/>;
   
            default:
                return "unknown step";
        }
    }
    return (
        <div className='sellingPage-login-form'>
            <div className='sellingpage-login-header'>
                <div className='text-center border-bottom-random'>
                    <p className='sellingpage-login-headerText'>Login</p>
                    <p className='close-loginpage-icon' onClick={handleCloseLogin}>close</p>
                    {/* <AiOutlineClose /> */}
                </div>
            </div>
            <div className='sellingpage-login-form-element'>
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(handleNext)} style={{ position: "relative" }}>
                       { showVerify === "show"  && (getStepContent(activeStep))}
                       
                       {
                        showVerify === "showTwoStepVerificaton" && (<TwoStepVerify setShowVerify={setShowVerify}/>)
                       }
                        
                           

                    </form>
                </FormProvider>
            </div>
     

        </div>
    )
}

export default SellingLogin