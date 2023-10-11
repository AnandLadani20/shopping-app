import React from 'react';
import { useState, useEffect } from 'react'
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
import { useSelector } from 'react-redux';
import index from 'toastify';
import ProductVariation from './ProductVariation';
import { useDispatch } from 'react-redux';
import { setProductStepperData } from '../../../../ReduxToolKit/Features/ProductStepperData';
// 19	Ecommerce	Product	save product	curl --location 'http://localhost:8094/product/saveProduct' \ --header 'Content-Type: application/json' \ --data '[ { "productDTO": { "productId": null, "productName": "Mobile12555", "description": "abcm abcbc", "productIdType": "GTIN", "categoryId": { "browsePath": "5122348031/5122349031/4951860031/1380045031/1380050031", "categoryId": "1380050031" }, "brandName": "Nokiaaa", "hsnCode": "1a2ds0nbm", "gstPercentage": 5, "storeId": "123456", "keyword": [ "mobilephone", "smartphone" ], "bulletPoints": "phone", "offerDTO": { "listingPrice": "15000", "countryOfOrigin": "India", "hsnCode": "1a2ds0nbm", "mrp": "18000" }, "imagesUrl": [ "http://abc.com/example" ], "productPreparationType": "HOMEMADE", "createdAt": null, "updatedAt": null }, "variationList": [ { "sellerSKU": "123456", "productId": "product12345", "productIdType": "GTIN", "itemCondition": "NEW", "price": 1365, "quantity": 125, "fields": { "color": "red", "material": "polythene" } } ], "vitalInfoValueDTO": { "productId": 1, "vitalInfoFieldId": "647dc4fdf1149d58a879f77e", "vitalInfoFieldValue": "123", "vitalInfoFieldUnit": null } } ]'	


const ProductStepper = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [productfilepath, setProductFilePath] = useState("")
    const [removeDiscription, setRemoveDiscription] = useState(false)
    // const [showVariationProduct, setShowVariationProduct] = useState(false)
    const [variantionData, setVariationData] = useState([])

    const categoriesTitle = useSelector((state) => state.categoriesTitle);
    const subCategoriesTitle = useSelector((state) => state.subCategoriesTitle);
    const subofSubCategoriesTitle = useSelector((state) => state.subofSubCategoriesTitle);
    const thirdSubCategoriesTitle = useSelector((state) => state.thirdSubCategoriesTitle);


    const Category = useSelector((state) => state.addProductForm.selectedCategoryId);
    let SetselectedCategoryId = Category ? Category.categoryId : ""

    if (SetselectedCategoryId !== '') {
        localStorage.setItem('selectedCategoryId', SetselectedCategoryId);
    }
    let selectedCategoryId = localStorage.getItem('selectedCategoryId')
    useEffect(() => {
        // setShowVariationProduct(true)
        if (selectedCategoryId === "5403405031") {
            // otherDehumidifiers
            setRemoveDiscription(true)
        }
        else if (selectedCategoryId === "5403407031") {
            // otherHumidifiers
            setRemoveDiscription(true)
        }
        else if (selectedCategoryId === "51396529031") {
            // singleRoomHumidifiers
            setRemoveDiscription(true)
        }
        else if (selectedCategoryId === "51396531031") {
            // wholeHouseHumidifiers
            setRemoveDiscription(true)
        }
        else if (selectedCategoryId === "27961560031") {
            //"Capsule Drawers"
            setRemoveDiscription(true)
        }
        else if (selectedCategoryId === "1380047031") {
            //"Bread Makers"
            setRemoveDiscription(true)
        }
        else if (selectedCategoryId === "1380052031") {
            //"Crepe Makers"
            setRemoveDiscription(true)
        }
        else if (selectedCategoryId === "1380051031") {
            //"Electric Grills"
            setRemoveDiscription(true)
        }
        else if (selectedCategoryId === "1380060031") {
            //"Electric Skillets"
            setRemoveDiscription(true)
        }
        else if (selectedCategoryId === "1380081031") {
            //"Pop-up Toasters"
            setRemoveDiscription(true)
        }
        else if (selectedCategoryId === "51396883031") {
            //Quesadilla Makers
            setRemoveDiscription(true)
        }
        else if (selectedCategoryId === "1380078031") {
            //Sandwich Makers
            setRemoveDiscription(true)
        }
        else if (selectedCategoryId === "1380079031") {
            //"Slow Cookers"
            setRemoveDiscription(true)
        }
        else if (selectedCategoryId === "1380082031") {
            //"Vacuum Sealers"
            setRemoveDiscription(true)
        }
        else if (selectedCategoryId === "1380083031") {
            //"Waffle Makers & Irons"
            setRemoveDiscription(true)
        }
        else if (selectedCategoryId === "1380550031") {
            // Laundry Baskets
            setRemoveDiscription(true)
        }
        else if (selectedCategoryId === "1380580031") {
            // Lint Shavers
            setRemoveDiscription(true)
        }
        else if (selectedCategoryId === "51397088031") {
            // Vacuum Tubes
            setRemoveDiscription(true)
        }
        else if (selectedCategoryId === "1380260031") {
            //"Water Purifier Accessories"
            setRemoveDiscription(true)
        }
        if (selectedCategoryId === "51396590031") {
            //Gas Hoses
            setRemoveDiscription(true)
        }
        else if (selectedCategoryId === "1380324031") {
            //Built-in Timers
            setRemoveDiscription(true)
        }
        else if (selectedCategoryId === "51396840031") {
            //Hoses
            setRemoveDiscription(true)
        }
        if (selectedCategoryId === "1380353031") {
            //Clamps
            setRemoveDiscription(true)
        }
        else if (selectedCategoryId === "1380358031") {
            //Hoses
            setRemoveDiscription(true)
        }
        else if (selectedCategoryId === "1380356031") {
            //Drain Pumps
            setRemoveDiscription(true)
        }
        else if (selectedCategoryId === "1967939031") {
            //Balaclavas
            setRemoveDiscription(true)
        }
        else if (selectedCategoryId === "5866003031") {
            //Belts
            setRemoveDiscription(true)
        }
        else if (selectedCategoryId === "3659006031") {
            //Cold Weather Sets
            setRemoveDiscription(true)
        }
    }, [selectedCategoryId])


    const baseSteps = [
        "Product Identity",
        "Product details",
        "Variation",
        "Offer",
        "Discription",
    ];

    // Modify the steps array based on conditions
    let steps = [...baseSteps];

    //   let showVariationProduct = false

    if (removeDiscription) {
        // Remove "Discription" from the array if removeDiscription is true
        steps = steps.filter((step) => step !== "Discription");
    }



    const isStepFailed = () => {
        return Boolean(Object.keys(methods.formState.errors).length)
    }
    function getStepContent(step) {
        switch (step) {
            case 0:
                return <ProductIdentity />;
            case 1:
                return <ProductDetails />;
            case 2:
                return <ProductVariation setVariationData={setVariationData} />;
            case 3:
                return <ProductOffer />;
            case 4:
                return <ProductDiscription setProductFilePath={setProductFilePath} />;
            default:
                return "unknown step";
        }
    }
    const methods = useForm({
        defaultValues: {
            productType: "",
            itemName: "",
            productName: "",
            productVariation: "",
            productBrandName: "",
            productBrandNot: false,
            productID: "",
            productSelectcode: "",
            productIdNot: false,
            productImages: "",
            productDesc: "",
            bulletPoint: "",
            artistName: "",
            artworkMedium: "",
            productDate: "",
            productFramed: "",
            productSaleType: "",
            productSellCountry: "",
            productSellPrice: "",
            productSellQuantity: "",
            productSellCondition: "",
            productHSNcode: "",
            productSellMaxRetailPrice: "",
            productSellLength: "",
            productSellLengthUnit: "",
            productSellWidth: "",
            productSellWidthUnit: "",
            productSellHeight: "",
            productSellHeightUnit: "",
            productVariation: "",
            itemDepthfrontToback: "",
            itemDepthfrontTobackUnit: "",
            itemWidthsideToside: "",
            itemWidthsideTosideUnit: "",
            itemHeightbaseTotop: "",
            itemHeightbaseTotopUnit: "",
            itemOEMauth: "",
            modelnumber: "",
            warrantyDesc: "",
            includedComponent: "",
            numberofBoxes: "",
            itemManufacturer: "",
            productLifecycleSupplyType: "",
            materialType: "",
            productColorMap: "",
            productColor: "",
            modelname: "",
            unitCountType: "",
            unitCount: "",
            productUserGender: "",
            productStyle: "",
            manufacturepartno: "",
            StyleVariation: false,
            SizeVariation: false,
            ColorVariation: false,
            NumberofItemsVariation: false,
            sizeVarForm: "",
            inputWithOptions:"",
            materialOrFabricRegulation: [''],
            bookingDate:""



        },
    });
    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };
    const dispatch = useDispatch()
    const handleNextDetails = (datas) => {
        setActiveStep(activeStep + 1);
        dispatch(setProductStepperData(datas))
        // datas.productImages = productfilepath;
        // console.log(datas.productImages)
        console.log("final data", datas)
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
                                            <li>{categoriesTitle}</li>
                                            <li><GrFormNext className="navigate-next-icon" /></li>
                                            <li>{subCategoriesTitle}</li>
                                            <li><GrFormNext className="navigate-next-icon" /></li>
                                            <li>{subofSubCategoriesTitle}</li>
                                            <li><GrFormNext className="navigate-next-icon" /></li>
                                            <li>{thirdSubCategoriesTitle}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="product-sell-detail-dashboard-titlearea">
                                    <div className='row justify-content-center'>
                                        <div className="col-6">
                                            <Stepper activeStep={activeStep}>
                                                {/* {
                                                    hideLastIndexArray ? steps.slice(0, -1).map((step, index) => {
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
                                                    }) : steps.map((step, index) => {
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
                                                    })
                                                }

                                                {
                                                    activeVariation
                                                        ? [...steps, "Variation"].map((step, index) => {
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
                                                        })
                                                        : steps.map((step, index) => {
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
                                                        })
                                                } */}
                                                {
                                                    steps.map((step, index) => {
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
                                                    })
                                                }

                                            </Stepper>
                                        </div>
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