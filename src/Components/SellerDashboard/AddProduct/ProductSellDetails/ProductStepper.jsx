import React from 'react';
import { useState } from 'react'
import {
    Typography,
    Button,
    Stepper,
    Step,
    StepLabel,
} from "@mui/material";

import {
    useForm,
    FormProvider,
} from "react-hook-form";
import './index.css'
import { MdHome } from 'react-icons/md';
import { GrFormNext } from 'react-icons/gr'
import ProductIdentity from './ProductIdentity';
import ProductDetails from './ProductDetails';
import ProductOffer from './ProductOffer';
import ProductDiscription from './ProductDiscription';



function getSteps() {
    return [
        "Product Identity",
        "Product details",
        "Offer",
        "Discription",
    ];
}

const ProductStepper = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [productfilepath,setProductFilePath] = useState("")
    const steps = getSteps();
    const isStepFailed = () => {
        return Boolean(Object.keys(methods.formState.errors).length)
    }
    function getStepContent(step) {
        switch (step) {
            case 0:
                return  <ProductIdentity />;
            case 1:
                return <ProductDetails/>;
            case 2:
                return <ProductOffer/>;
            case 3:
                return <ProductDiscription setProductFilePath={setProductFilePath}/>  ;
            default:
                return "unknown step";
        }
    }
    const methods = useForm({
        defaultValues: {
            itemName: "",
            productVariation:"",
            productID:"",
            productSelectcode:"",
            productIdNot:"",
            productImages:"",
            productDesc:"",
            bulletPoint:"",
            artistName:"",
            artworkMedium:"",
            productDate:"",
            productFramed:"",
            productSaleType:"",
            productSellCountry:"",
            productSellPrice:"",
            productSellQuantity:"",
            productSellCondition:"",
            productHSNcode:"",
            productSellMaxRetailPrice:"",
            productSellLength:"",
            productSellLengthUnit:"",
            productSellWidth:"",
            productSellWidthUnit:"",
            productSellHeight:"",
            productSellHeightUnit:"",



           
        },
    });
    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };
    const handleNextDetails = (datas) => {
        setActiveStep(activeStep + 1);
        
         datas.productImages = productfilepath;
        console.log( datas.productImages)
        console.log(datas)
    }
    return (
        <>
            <section className='product-sell-detail-dashboard-area'>
                <header>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='product-sell-detail-header-logo'>
                                <h3>Dhiyodha Seller Central</h3>
                            </div>
                        </div>
                    </div>
                </header>
                <div className='product-sell-detail-dashboard-Heroarea'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='product-category-path-wrap'>
                                    <h4>Category</h4>
                                    <h4>|</h4>
                                    <div><MdHome className='home-icon' /></div>
                                    <div></div>
                                    <div>
                                        <ul className='d-flex'>
                                            <li>Collectibles & Fine Art</li>
                                            <li><GrFormNext className="navigate-next-icon" /></li>
                                            <li>Fine Art</li>
                                            <li><GrFormNext className="navigate-next-icon" /></li>
                                            <li>Drawing</li>
                                            <li><GrFormNext className="navigate-next-icon" /></li>
                                            <li>Chalk Drawings</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="product-sell-detail-dashboard-titlearea">
                                    <div className='row justify-content-center'>
                                        <div className="col-6">
                                    <Stepper  activeStep={activeStep}>
                                        {steps.map((step, index) => {
                                            const labelProps = {};
                                            const stepProps = {};

                                            if (isStepFailed() && activeStep === index) {
                                                labelProps.error = true;
                                            }

                                            return (
                                                <Step {...stepProps} key={index}>
                                                    <StepLabel {...labelProps}>{step}</StepLabel>
                                                </Step>
                                            );
                                        })}
                                    </Stepper></div>
                                    </div>
                                    {/* <div className="d-flex justify-content-center">
                                        <h5 className="p-2">Product Identity</h5>
                                        <h5 className="p-2">Product details</h5>
                                        <h5 className="p-2">Offer</h5>
                                    </div> */}

                                </div>
                                <div className='product-sell-detail-dashboard-formarea'>
                                    <FormProvider {...methods}>
                                        <form onSubmit={methods.handleSubmit(handleNextDetails)} style={{ position: "relative" }}>
                                            {getStepContent(activeStep)}
                                            <div className="mt-3">
                                                <Button
                                                    style={{ marginTop: "10px" }}
                                                    disabled={activeStep === 0}
                                                    onClick={handleBack}
                                                >
                                                    back
                                                </Button>

                                                <Button
                                                    style={{ marginTop: "10px", marginLeft: "10px" }}
                                                    variant="contained"
                                                    color="primary"
                                                    // onClick={handleNext}
                                                    type="submit"
                                                >
                                                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                                                </Button>
                                            </div>
                                        </form>
                                    </FormProvider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductStepper