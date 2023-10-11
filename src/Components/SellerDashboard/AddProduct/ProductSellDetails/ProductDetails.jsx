import {
    TextField
} from "@mui/material";
import React, { useState, useEffect } from 'react'
import MenuItem from '@mui/material/MenuItem';
import { useSelector } from 'react-redux';
import { Controller, useFormContext } from 'react-hook-form';
import IncludedComponents from "./IncludedComponents";
import CareInstructions from './CareInstructions';
import OccasionDescription from "./OccasionDescription";
import MaterialFabricRegulations from "./MaterialFabricRegulations";
import TargetAudience from "./TargetAudience";
import BookingDate from "./ProductDetails/BookingDate";


const ProductDetails = () => {
    const { control, formState: { errors } } = useFormContext()

    const [includedComponentOptions, setIncludedComponentOptions] = useState([])
    const [careInstructionOptions, setCareInstructionOptions] = useState([])
    const [occasionDescriptionOptions, setOccasionDescriptionOptions] = useState([])

    const addOptions = (newOptions) => {
        setIncludedComponentOptions((previousOptions) => [...previousOptions, ...newOptions]);
    };


    const [formComponents1, setFormComponent1] = useState(false)
    const [formComponents2, setFormComponent2] = useState(false)
    const [formComponents3, setFormComponent3] = useState(false)
    const [formComponents4, setFormComponent4] = useState(false)
    const [formComponents5, setFormComponent5] = useState(false)
    const [formComponents6, setFormComponent6] = useState(false)
    const [formComponents7, setFormComponent7] = useState(false)
    const [formComponents8, setFormComponent8] = useState(false)
    const [formComponents9, setFormComponent9] = useState(false)
    const [formComponents10, setFormComponent10] = useState(false)
    const [formComponents11, setFormComponent11] = useState(false)
    const [formComponents12, setFormComponent12] = useState(false)
    const [formComponents13, setFormComponent13] = useState(false)
    const [formComponents14, setFormComponent14] = useState(false)
    const [formComponents15, setFormComponent15] = useState(false)
    const [formComponents16, setFormComponent16] = useState(false)
    const [formComponents17, setFormComponent17] = useState(false)
    const [formComponents18, setFormComponent18] = useState(false)
    const [formComponents19, setFormComponent19] = useState(false)
    const [formComponents20, setFormComponent20] = useState(false)
    const [formComponents21, setFormComponent21] = useState(false)
    const [formComponents22, setFormComponent22] = useState(false)
    const [formComponents23, setFormComponent23] = useState(false)
    const [formComponents24, setFormComponent24] = useState(false)




    const [manuFacturePartNoField, setManuFacturePartNoField] = useState(false)
    const [modelNumberField, setModelNumberField] = useState(false)
    const [styleField, setStyleField] = useState(false)
    const [genderField, setGenderField] = useState(false)
    const [unitCountField, setUnitCountField] = useState(false)
    const [unitCountTypeField, setUnitCountTypeField] = useState(false)
    const [modelNameField, setModelNameField] = useState(false)
    const [colorField, setColorField] = useState(false)
    const [colorMapField, setColorMapField] = useState(false)
    const [materialTypeField, setMaterialTypeField] = useState(false)
    const [materialOrFabricRegulationField, setMaterialOrFabricRegulationField] = useState(false)
    const [productLifecycleSupplyTypeField, setProductLifecycleSupplyTypeField] = useState(false)
    const [packageWeightField, setPackageWeightField] = useState(false)
    const [thicknessField, setThicknessField] = useState(false)
    const [outSideDiameterField, setOutSideDiameterField] = useState(false)
    const [manufactureField, setManufactureField] = useState(false)
    const [numberOfBoxesField, setNumberOfBoxesField] = useState(false)
    const [boxContentsField, setBoxContentsField] = useState(false)
    const [containsLiquidContentField, setContainsLiquidContentField] = useState(false)
    const [numberOfItemsField, setNumberOfItemsField] = useState(false)
    const [productSizeField, setProductSizeField] = useState(false)
    const [includedComponentsField, setIncludedComponentsField] = useState(false)
    const [numberofPiecesField, setNumberofPiecesField] = useState(false)
    const [isAssemblyRequiredField, setIsAssemblyRequiredField] = useState(false)
    const [productCareInstructionsField, setProductCareInstructionsField] = useState(false)
    const [itemDimensionsDxWxHField, setItemDimensionsDxWxHField] = useState(false)
    const [itemDimensionsLxWxHField, setItemDimensionsLxWxHField] = useState(false)
    const [itemDimensionsLxWField, setItemDimensionsLxWField] = useState(false)
    const [measurementAccuracyField, setMeasurementAccuracyField] = useState(false)
    const [productsizeMapField, setProductsizeMapField] = useState(false)
    const [assemblyInstructionsField, setAssemblyInstructionsField] = useState(false)
    const [productIsFragileField, setProductIsFragileField] = useState(false)
    const [productExpirationTypeField, setProductExpirationTypeField] = useState(false)
    const [isProductExpirableField, setIsProductExpirableField] = useState(false)
    const [productFulfilmentCenterShelfLifeField, setproductFulfilmentCenterShelfLifeField] = useState(false)
    const [warrantyDescField, setWarrantyDescField] = useState(false)
    const [cableLengthDecimalValueField, setCableLengthDecimalValueField] = useState(false)
    const [connectorGenderField, setConnectorGenderField] = useState(false)
    const [analogRgbInputField, setAnalogRgbInputField] = useState(false)
    const [itemLengthEndtoEndField, setItemLengthEndtoEndField] = useState(false)
    const [itemShapeField, setItemShapeField] = useState(false)
    const [searchTearmsField, setSearchTearmsField] = useState(false)
    const [powerandPlugDescriptionField, setPowerandPlugDescriptionField] = useState(false)

    //  Material Type Item
    const [materialTypeItem, setMaterialTypeItem] = useState(
        ["Nylon", "Aluminum", "Solid Gold", "Cedar", "Stone", "Porcelain", "Porcelain Bone China", "Pewter", 'Stainless Steel', 'Teracotta',
            'Neoprene', 'Copper', 'Polycarbonate', 'Recycled', 'Bronze', 'Clay', 'Elmwood', 'Polyester', "Hard-Anodized Aluminum", 'Leaded Crystal',
            'Silicone', 'Cherrywood', 'Marble', 'Nonstick', 'Silver', 'Pine', 'Oak', 'Non-Leaded Crystal', 'Bamboo', 'Fabric', 'Acrylic', 'Crystal',
            'Silver-Plated', 'Synthetic', 'Birch', '18/8 Steel', 'Beechwood', 'Stoneware', 'Brass', 'Multi-ply', 'Glass', 'Leather', 'Iron', 'Plastic', 'Cotton',
            'Paraffin', 'Polyresin', 'Wax', 'Bone China', 'Platinume', 'Chrome', 'Mahogany', 'Olive Wood', '18/10 Steel', 'Rubber', 'Teak', 'Maple',
            'Acrylic Coated Cotton', 'Rosewood', 'Cork', 'Melamine', 'Gilded Gold', 'HardWood', 'Steel', 'Carbon', 'Zinc', 'Earthenware', 'Chromium Steel',
            'Walnut', 'Cast Iron', 'Rattan & Wicker', 'Tin', 'Ceramic', 'Paper', 'Tritan', 'Nickel', 'Polycast', 'Other']
    )



    // Fashion
    const [closureTypeField, setClosureTypeField] = useState(false)
    const [fabricTypeField, setFabricTypeField] = useState(false)
    const [targetGenderField, setTargetGenderField] = useState(false)
    const [ageRangeDescriptionField, setAgeRangeDescriptionField] = useState(false)
    const [productStyleTxtField, setProductStyleTxtField] = useState(false)
    const [outerMaterialTypeField, setOuterMaterialTypeField] = useState(false)
    const [headwearSizeSystemField, setHeadwearSizeSystemField] = useState(false)
    const [headwearSizeClassField, setHeadwearSizeClassField] = useState(false)
    const [headwearSizeValueField, setHeadwearSizeValueField] = useState(false)
    const [headwearSizeToRangeField, setHeadwearSizeToRangeField] = useState(false)
    const [occasionDescriptionField, setOccasionDescriptionField] = useState(false)
    const [holeCountField, setHoleCountField] = useState(false)
    const [patternField, setPatternField] = useState(false)
    const [materialCompositionField, setMaterialCompositionField] = useState(false)
    const [targetAudienceField, setTargetAudienceField] = useState(false)
    const [safetyWarningField, setSafetyWarningField] = useState(false)
    const [itemPPUCountField, setItemPPUCountField] = useState(false)
    const [itemPPUCountUnitofMeasureField, setItemPPUCountUnitofMeasureField] = useState(false)
    const [hairTypeField, setHairTypeField] = useState(false)
    const [lifestyleField, setLifestyleField] = useState(false)

    // formComponents1 =>  Model Number,Warranty Description,Included Components,Is the item OEM authorized?,Number of Boxes,Item Dimensions D x W x H,Manufacturer
    // formComponents2 =>  Model,Number of Items,Unit Count,Unit Count Type,Product Care Instructions,Contains Liquid Contents?,Is Assembly Required,Number of Pieces,Included Components,Size,Color,Color Map,Material Type,Number of Boxes,Manufacturer,Item Dimensions D x W x H
    // formComponents3 =>  model,Number of Items,Item Dimensions D x W x H,Included Components,Size,Material Type
    // formComponents4 =>  model,Number of Items,Product Care Instructions,Contains Liquid Contents?,Is Assembly Required,Number of Pieces,Included Components,Size,Material Type,Number of Boxes,Color
    // formComponents5 =>  Target Audience,Manufacturer Part Number,Number of Items,Safety Warning,PPU Count,PPU Count Unit of Measure,Contains Liquid Contents?,Is the Item Heat Sensitive?,Item Form,Lifestyle,Skin Type,Scent,Melting Temperature (degrees Celsius)
    // formComponents6 =>  Artist,Artwork Medium,Date,Framed,Sale Type
    // formComponents7 =>  Manufacturer Part Number,Number of Items,Contains Liquid Contents?,Box Contents,Number of Boxes,Manufacturer
    // formComponents8 =>  Search Terms,Manufacturer Part Number, Is Product Expirable, Number of Items,Contains Liquid Contents?, Included Components,Number of Boxes,Manufacturer,model
    // formComponents9 =>  Model,Number of Items,Unit Count,Unit Count Type,Included Components,Color,Manufacturer
    // formComponents10 =>  Model Number,Number of Items,Product Care Instructions,Contains Liquid Contents?,Is Assembly Required,Model Name,Number of Pieces,Included Components,Size,Color Map,Material Type
    // formComponents11 =>  Model Number,Number of Items,Product Care Instructions,Contains Liquid Contents?,Is Assembly Required,Model Name,Number of Pieces,Included Components,Size,Color Map,Material Type, Number of Boxes
    // formComponents12 =>  Model,Number of Items,Unit Count,Unit Count Type,Product Care Instructions,Contains Liquid Contents?,Model Name,Number of Pieces,Included Components,Size,Size Map,Color,Material Type,Manufacturer
    // formComponents13 =>  Model Number(Style Number),Item Dimensions D x W x H,Unit Count,Unit Count Type,Model Name,Included Components
    // formComponents14 =>  Model Number(Style Number),Item Dimensions D x W x H,Included Components
    // formComponents15 =>  Manufacturer Part Number,Unit Count,Unit Count Type,Color
    // formComponents16 =>  Product Care Instructions,Number of Pieces,Included Components,Size,Material Type,Unit Count,Unit Count Type
    // formComponents17 =>  Product Care Instructions,Number of Pieces,Included Components,Size,Material Type
    // formComponents18 =>  Model (Number),Number of Items,Item Dimensions D x W x H,Unit Count,Unit Count Type,Product Care Instructions, Contains Liquid Contents?, Is Assembly Required, Number of Pieces, Included Components, Size, Color, Material Type,Product Expiration Type,Fulfillment Center Shelf Life
    // formComponents19 =>  Model(Number),Number of Items,Item Dimensions W x H,Unit Count,Unit Count Type,Product Care Instructions, Contains Liquid Contents?, Model Name,Capacity, Number of Pieces, Included Components, Is Fragile,Number Of Sets, Size, Color,Colour Map, Material Type,
    // formComponents20 =>  Model (Number),Number of Items,Product Care Instructions,Contains Liquid Contents?,Is Assembly Required,Model Name,,Number of Pieces,Included Components,Size,Material Type,Number of Boxes,Item Dimensions D x W x H
    // formComponents21 =>  Model,Number of Items,Unit Count,Unit Count Type,Product Care Instructions,Contains Liquid Contents?,Is Assembly Required,Number of Pieces,Included Components,Size,Material Type,Number of Boxes,Item Dimensions L x W x H,Color
    // formComponents22 =>  Manufacturer, Model Number,Number of Items,Product Care Instructions,Contains Liquid Contents?,Is Assembly Required,Model Name,Number of Pieces,Included Components,Size,Color,Material Type,Number of Boxes
    // formComponents23 =>  Manufacturer, Is Product Expirable,Number of Items,Warranty Description,Number of Boxes
    // formComponents24 =>  Model (Number),Number of Items,Item Dimensions D x W x H,Unit Count,Unit Count Type,Product Care Instructions, Contains Liquid Contents?, Is Assembly Required, Number of Pieces, Included Components, Size, Color, Material Type, Manufacturer
    // formComponents25 =>  Manufacturer Part Number, Model Number,Style,Gender,Unit Count,Unit Count Type,Model Name, Color,Colour Map,Material Type,Material/Fabric Regulations, Product Lifecycle Supply Type

    const handleFormFieldLayout1 = () => {
        setManuFacturePartNoField(true)
        setModelNumberField(true)
        setStyleField(true)
        setGenderField(true)
        setUnitCountField(true)
        setUnitCountTypeField(true)
        setModelNameField(true)
        setColorField(true)
        setMaterialTypeField(true)
        setMaterialOrFabricRegulationField(true)
        setProductLifecycleSupplyTypeField(true)
    }
    const handleFormFieldLayout2 = () => {
        setManuFacturePartNoField(true)
        setNumberOfItemsField(true)
        setContainsLiquidContentField(true)
        setBoxContentsField(true)
        setNumberOfBoxesField(true)
        setManufactureField(true)
        setModelNumberField(true)
        setOutSideDiameterField(true)
        setThicknessField(true)
        setPackageWeightField(true)
    }
    const handleFormFieldLayout3 = () => {

        setModelNumberField(true)
        setNumberOfItemsField(true)
        setItemDimensionsDxWxHField(true)
        setUnitCountField(true)
        setUnitCountTypeField(true)
        setProductCareInstructionsField(true)
        setContainsLiquidContentField(true)
        setIsAssemblyRequiredField(true)
        setNumberofPiecesField(true)
        setIncludedComponentsField(true)
        setProductSizeField(true)
        setColorField(true)
        setMaterialTypeField(true)
        setManufactureField(true)


    }
    const handleFormFieldLayout4 = () => {
        setManuFacturePartNoField(true)
        setModelNumberField(true)
        setNumberOfItemsField(true)
        setProductSizeField(true)
        setColorField(true)
        setMaterialTypeField(true)
        setNumberOfBoxesField(true)
        setMaterialOrFabricRegulationField(true)
        setManufactureField(true)
        setUnitCountField(true)
        setUnitCountTypeField(true)
    }
    const handleFormFieldLayout5 = () => {
        setModelNumberField(true)
        setNumberOfItemsField(true)
        setProductCareInstructionsField(true)
        setContainsLiquidContentField(true)
        setIsAssemblyRequiredField(true)
        setNumberofPiecesField(true)
        setIncludedComponentsField(true)
        setProductSizeField(true)
        setMaterialTypeField(true)
        setNumberOfBoxesField(true)
        setColorField(true)
    }
    const handleFormFieldLayout6 = () => {
        setModelNumberField(true)
        setNumberOfItemsField(true)
        setIncludedComponentsField(true)
        setProductSizeField(true)
        setMaterialTypeField(true)
        setItemDimensionsDxWxHField(true)
    }
    const handleFormFieldLayout7 = () => {
        setIncludedComponentsField(true)
        setProductSizeField(true)
        setMaterialTypeField(true)
        setItemDimensionsDxWxHField(true)
    }
    const handleFormFieldLayout8 = () => {

        setModelNumberField(true)
        setNumberOfItemsField(true)
        setItemDimensionsDxWxHField(true)
        setUnitCountField(true)
        setUnitCountTypeField(true)
        setProductCareInstructionsField(true)
        setContainsLiquidContentField(true)
        setIsAssemblyRequiredField(true)
        setNumberofPiecesField(true)
        setIncludedComponentsField(true)
        setProductSizeField(true)
        setColorField(true)
        setColorMapField(true)
        setMaterialTypeField(true)
        setNumberOfBoxesField(true)
    }
    const handleFormFieldLayout9 = () => {
        setManufactureField(true)
        setManuFacturePartNoField(true)
        setNumberOfItemsField(true)
        setItemDimensionsLxWxHField(true)
        setUnitCountField(true)
        setUnitCountTypeField(true)
        setContainsLiquidContentField(true)
        setBoxContentsField(true)
        setMeasurementAccuracyField(true)
        setNumberOfBoxesField(true)

    }
    const handleFormFieldLayout10 = () => {
        setModelNumberField(true)
        setNumberOfItemsField(true)
        setProductCareInstructionsField(true)
        setContainsLiquidContentField(true)
        setIsAssemblyRequiredField(true)
        setNumberofPiecesField(true)
        setIncludedComponentsField(true)
        setProductSizeField(true)
        setMaterialTypeField(true)
    }
    const handleFormFieldLayout11 = () => {
        setProductCareInstructionsField(true)
        setNumberofPiecesField(true)
        setIncludedComponentsField(true)
        setProductSizeField(true)
        setMaterialTypeField(true)
    }
    const handleFormFieldLayout12 = () => {
        setModelNumberField(true)
        setNumberOfItemsField(true)
        setProductCareInstructionsField(true)
        setContainsLiquidContentField(true)
        setIsAssemblyRequiredField(true)
        setModelNameField(true)
        setNumberofPiecesField(true)
        setIncludedComponentsField(true)
        setProductSizeField(true)
        setColorField(true)
        setColorMapField(true)
        setMaterialTypeField(true)
        setNumberOfBoxesField(true)

    }
    const handleFormFieldLayout13 = () => {
        setProductCareInstructionsField(true)
        setNumberofPiecesField(true)
        setIncludedComponentsField(true)
        setProductSizeField(true)
        setMaterialTypeField(true)
        setItemDimensionsLxWxHField(true)
    }
    const handleFormFieldLayout14 = () => {
        setModelNumberField(true)
        setNumberOfItemsField(true)
        setItemDimensionsLxWxHField(true)
        setUnitCountField(true)
        setUnitCountTypeField(true)
        setProductCareInstructionsField(true)
        setContainsLiquidContentField(true)
        setModelNameField(true)
        setNumberofPiecesField(true)
        setIncludedComponentsField(true)
        setProductSizeField(true)
        setColorField(true)
        setColorMapField(true)
        setMaterialTypeField(true)
    }
    const handleFormFieldLayout15 = () => {
        setModelNumberField(true)
        setNumberOfItemsField(true)
        setProductCareInstructionsField(true)
        setContainsLiquidContentField(true)
        setIsAssemblyRequiredField(true)
        setNumberofPiecesField(true)
        setIncludedComponentsField(true)
        setProductSizeField(true)
        setColorField(true)
        setMaterialTypeField(true)
        setNumberOfBoxesField(true)
        setItemDimensionsDxWxHField(true)
    }
    const handleFormFieldLayout16 = () => {
        setModelNumberField(true)
        setNumberOfItemsField(true)
        setProductCareInstructionsField(true)
        setContainsLiquidContentField(true)
        setIsAssemblyRequiredField(true)
        setNumberofPiecesField(true)
        setIncludedComponentsField(true)
        setProductSizeField(true)
        setColorField(true)
        setMaterialTypeField(true)
        setNumberOfBoxesField(true)
    }
    const handleFormFieldLayout17 = () => {
        setManufactureField(true)
        setManuFacturePartNoField(true)
        setModelNumberField(true)
        setItemDimensionsDxWxHField(true)
    }
    const handleFormFieldLayout18 = () => {

        setModelNumberField(true)
        setNumberOfItemsField(true)
        setItemDimensionsDxWxHField(true)
        setUnitCountField(true)
        setUnitCountTypeField(true)
        setProductCareInstructionsField(true)
        setContainsLiquidContentField(true)
        setIsAssemblyRequiredField(true)
        setNumberofPiecesField(true)
        setIncludedComponentsField(true)
        setProductSizeField(true)
        setProductsizeMapField(true)
        setColorField(true)
        setMaterialTypeField(true)

    }
    const handleFormFieldLayout19 = () => {
        setModelNumberField(true)
        setNumberOfItemsField(true)
        setUnitCountField(true)
        setUnitCountTypeField(true)
        setProductCareInstructionsField(true)
        setContainsLiquidContentField(true)
        setIsAssemblyRequiredField(true)
        setNumberofPiecesField(true)
        setIncludedComponentsField(true)
        setProductSizeField(true)
        setMaterialTypeField(true)
        setNumberOfBoxesField(true)
        setItemDimensionsLxWxHField(true)
        setColorField(true)
    }
    const handleFormFieldLayout20 = () => {
        setModelNumberField(true)
        setNumberOfItemsField(true)
        setUnitCountField(true)
        setUnitCountTypeField(true)
        setProductCareInstructionsField(true)
        setContainsLiquidContentField(true)
        setModelNameField(true)
        setNumberofPiecesField(true)
        setIncludedComponentsField(true)
        setProductSizeField(true)
        setProductsizeMapField(true)
        setColorField(true)
        setMaterialTypeField(true)
        setManufactureField(true)

    }
    const handleFormFieldLayout21 = () => {
        setProductCareInstructionsField(true)
        setNumberofPiecesField(true)
        setIncludedComponentsField(true)
        setProductSizeField(true)
        setMaterialTypeField(true)
        setUnitCountField(true)
        setUnitCountTypeField(true)
    }
    const handleFormFieldLayout22 = () => {
        setModelNumberField(true)
        setNumberOfItemsField(true)
        setProductCareInstructionsField(true)
        setContainsLiquidContentField(true)
        setIsAssemblyRequiredField(true)
        setModelNameField(true)
        setNumberofPiecesField(true)
        setIncludedComponentsField(true)
        setProductSizeField(true)
        setColorMapField(true)
        setMaterialTypeField(true)
    }
    const handleFormFieldLayout23 = () => {
        setModelNumberField(true)
        setNumberOfItemsField(true)
        setUnitCountField(true)
        setUnitCountTypeField(true)
        setProductCareInstructionsField(true)
        setContainsLiquidContentField(true)
        setIsAssemblyRequiredField(true)
        setModelNameField(true)
        setNumberofPiecesField(true)
        setIncludedComponentsField(true)
        setProductSizeField(true)
        setColorField(true)
        setColorMapField(true)
        setMaterialTypeField(true)
        setNumberOfBoxesField(true)

    }
    const handleFormFieldLayout24 = () => {
        setManuFacturePartNoField(true)
        setModelNumberField(true)
        setBoxContentsField(true)
        setColorField(true)
        setColorMapField(true)
        setNumberOfBoxesField(true)
        setItemDimensionsDxWxHField(true)
    }
    const handleFormFieldLayout25 = () => {
        setModelNumberField(true)
        setModelNameField(true)
        setIncludedComponentsField(true)
        setNumberOfBoxesField(true)
    }
    const handleFormFieldLayout26 = () => {
        setModelNumberField(true)
        setNumberOfItemsField(true)
        setItemDimensionsDxWxHField(true)
        setUnitCountField(true)
        setUnitCountTypeField(true)
        setIsAssemblyRequiredField(true)
        setNumberofPiecesField(true)
        setIncludedComponentsField(true)
        setProductIsFragileField(true)
        setAssemblyInstructionsField(true)
        setProductSizeField(true)
        setColorField(true)
        setColorMapField(true)
        setMaterialTypeField(true)
        setNumberOfBoxesField(true)
        setManufactureField(true)
    }
    const handleFormFieldLayout27 = () => {
        setModelNumberField(true)
        setIncludedComponentsField(true)
        setItemDimensionsLxWxHField(true)
    }
    const handleFormFieldLayout28 = () => {
        setModelNumberField(true)
        setUnitCountField(true)
        setUnitCountTypeField(true)
        setModelNameField(true)
        setIncludedComponentsField(true)
        setMaterialTypeField(true)
        setNumberOfBoxesField(true)

    }
    const handleFormFieldLayout29 = () => {
        setModelNumberField(true)
        setNumberOfItemsField(true)
        setUnitCountField(true)
        setUnitCountTypeField(true)
        setProductCareInstructionsField(true)
        setContainsLiquidContentField(true)
        setIsAssemblyRequiredField(true)
        setNumberofPiecesField(true)
        setIncludedComponentsField(true)
        setProductSizeField(true)
        setColorField(true)
        setMaterialTypeField(true)
        setManufactureField(true)

    }
    const handleFormFieldLayout30 = () => {
        setManuFacturePartNoField(true)
        setProductSizeField(true)
        setMaterialTypeField(true)
        setIsProductExpirableField(true)
        setProductExpirationTypeField(true)
        setproductFulfilmentCenterShelfLifeField(true)
        setManufactureField(true)
        setUnitCountField(true)
        setUnitCountTypeField(true)
    }
    const handleFormFieldLayout31 = () => {
        setManuFacturePartNoField(true)
        setUnitCountField(true)
        setUnitCountTypeField(true)
        setContainsLiquidContentField(true)
        setIsAssemblyRequiredField(true)
        setModelNameField(true)
        setWarrantyDescField(true)
        setIncludedComponentsField(true)
        setManufactureField(true)

    }
    const handleFormFieldLayout32 = () => {
        setManuFacturePartNoField(true)
        setNumberOfItemsField(true)
        setContainsLiquidContentField(true)
        setBoxContentsField(true)
        setNumberOfBoxesField(true)
        setManufactureField(true)
    }
    const handleFormFieldLayout33 = () => {
        setManufactureField(true)
        setUnitCountField(true)
        setUnitCountTypeField(true)
    }
    const handleFormFieldLayout34 = () => {
        setManuFacturePartNoField(true)
        setModelNumberField(true)
        setNumberOfItemsField(true)
        setIncludedComponentsField(true)
        setNumberOfBoxesField(true)
        setColorField(true)
        setUnitCountField(true)
        setUnitCountTypeField(true)
    }
    const handleFormFieldLayout35 = () => {
        setManuFacturePartNoField(true)
        setModelNumberField(true)
        setNumberOfItemsField(true)
        setItemDimensionsLxWxHField(true)
        setUnitCountField(true)
        setUnitCountTypeField(true)
        setProductSizeField(true)
        setColorField(true)
        setMaterialTypeField(true)
        setMaterialOrFabricRegulationField(true)
    }
    const handleFormFieldLayout36 = () => {
        setManufactureField(true)
        setManuFacturePartNoField(true)
        setIsProductExpirableField(true)
        setNumberOfItemsField(true)
        setItemDimensionsLxWxHField(true)
        setUnitCountField(true)
        setUnitCountTypeField(true)
        setContainsLiquidContentField(true)
        setIncludedComponentsField(true)
        setNumberOfBoxesField(true)
        setProductExpirationTypeField(true)
        setproductFulfilmentCenterShelfLifeField(true)
    }
    const handleFormFieldLayout37 = () => {
        setModelNumberField(true)
        setNumberOfItemsField(true)
        setItemDimensionsDxWxHField(true)
        setUnitCountField(true)
        setUnitCountTypeField(true)
        setProductCareInstructionsField(true)
        setContainsLiquidContentField(true)
        setModelNameField(true)
        setNumberofPiecesField(true)
        setIncludedComponentsField(true)
        setProductSizeField(true)
        setColorField(true)
        setMaterialTypeField(true)
        setManufactureField(true)
        setProductExpirationTypeField(true)
        setproductFulfilmentCenterShelfLifeField(true)
    }
    const handleFormFieldLayout38 = () => {
        setNumberOfItemsField(true)
        setUnitCountField(true)
        setUnitCountTypeField(true)
        setWarrantyDescField(true)
        setAnalogRgbInputField(true)
        setConnectorGenderField(true)
        setCableLengthDecimalValueField(true)
        setNumberOfBoxesField(true)
        setManufactureField(true)
    }

    const handleFormFieldLayout39 = () => {
        setManufactureField(true)
        setIsProductExpirableField(true)
        setNumberOfItemsField(true)
        setWarrantyDescField(true)
        setNumberOfBoxesField(true)
    }
    const handleFormFieldLayout40 = () => {
        setManuFacturePartNoField(true)
        setModelNumberField(true)
        setNumberOfItemsField(true)
        setIncludedComponentsField(true)
        setProductSizeField(true)
        setMaterialTypeField(true)
        setNumberOfBoxesField(true)
        setItemDimensionsLxWxHField(true)
    }
    const handleFormFieldLayout41 = () => {
        setManufactureField(true)
        setManuFacturePartNoField(true)
        setNumberOfItemsField(true)
        setUnitCountField(true)
        setUnitCountTypeField(true)
        setContainsLiquidContentField(true)
        setBoxContentsField(true)
        setMeasurementAccuracyField(true)
        setNumberOfBoxesField(true)
        setItemLengthEndtoEndField(true)
    }
    const handleFormFieldLayout42 = () => {
        setManuFacturePartNoField(true)
        setProductSizeField(true)
        setMaterialTypeField(true)
        setItemDimensionsDxWxHField(true)
        setManufactureField(true)
        setUnitCountField(true)
        setUnitCountTypeField(true)
    }
    const handleFormFieldLayout43 = () => {
        setManuFacturePartNoField(true)
        setNumberOfItemsField(true)
        setUnitCountField(true)
        setUnitCountTypeField(true)
        setBoxContentsField(true)
        setManufactureField(true)
        setModelNumberField(true)
        setModelNameField(true)
        setOutSideDiameterField(true)
        setThicknessField(true)
        setItemShapeField(true)
        setMaterialTypeField(true)
    }

    const handleFormFieldLayout44 = () => {
        setModelNumberField(true)
        setItemDimensionsLxWField(true)
        setUnitCountField(true)
        setUnitCountTypeField(true)
        setIncludedComponentsField(true)
        setColorField(true)
        setColorMapField(true)

    }
    const handleFormFieldLayout45 = () => {
        setSearchTearmsField(true)
        setManuFacturePartNoField(true)
        setIsProductExpirableField(true)
        setNumberOfItemsField(true)
        setContainsLiquidContentField(true)
        setIncludedComponentsField(true)
        setNumberOfBoxesField(true)
        setManufactureField(true)
        setItemDimensionsDxWxHField(true)
        setModelNumberField(true)

    }
    const handleFormFieldLayout46 = () => {
        setManuFacturePartNoField(true)
        setNumberOfItemsField(true)
        setUnitCountField(true)
        setUnitCountTypeField(true)
        setBoxContentsField(true)
        setManufactureField(true)
    }
    const handleFormFieldLayout47 = () => {
        setManufactureField(true)
        setPowerandPlugDescriptionField(true)
    }

    const handleFormFieldLayout48 = () => {
        setClosureTypeField(true)
        setManuFacturePartNoField(true)
        setModelNumberField(true)
        setProductStyleTxtField(true)
        setGenderField(true)
        setNumberOfItemsField(true)
        setFabricTypeField(true)
        setProductCareInstructionsField(true)
        setModelNameField(true)
        setTargetGenderField(true)
        setAgeRangeDescriptionField(true)
        setProductSizeField(true)
        setColorField(true)
        setColorMapField(true)
        setMaterialTypeField(true)
        setMaterialOrFabricRegulationField(true)
        setProductLifecycleSupplyTypeField(true)
    }

    const handleFormFieldLayout49 = () => {
        setManuFacturePartNoField(true)
        setOuterMaterialTypeField(true)
        setGenderField(true)
        setProductSizeField(true)
        setProductsizeMapField(true)
        setColorField(true)
        setColorMapField(true)
        setTargetGenderField(true)
        setAgeRangeDescriptionField(true)
        setHeadwearSizeSystemField(true)
        setHeadwearSizeClassField(true)
        setHeadwearSizeValueField(true)
        setHeadwearSizeToRangeField(true)
        setFabricTypeField(true)
    }
    const handleFormFieldLayout50 = () => {
        setClosureTypeField(true)
        setManuFacturePartNoField(true)
        setGenderField(true)
        setProductCareInstructionsField(true)
        setWarrantyDescField(true)
        setOccasionDescriptionField(true)
        setAgeRangeDescriptionField(true)
        setHoleCountField(true)
        setPatternField(true)
        setProductSizeField(true)
        setProductsizeMapField(true)
        setColorField(true)
        setColorMapField(true)
        setMaterialTypeField(true)
        setMaterialOrFabricRegulationField(true)
        setProductLifecycleSupplyTypeField(true)
    }
    const handleFormFieldLayout51 = () => {
        setManuFacturePartNoField(true)
        setGenderField(true)
        setProductSizeField(true)
        setProductsizeMapField(true)
        setColorField(true)
        setColorMapField(true)
        setOuterMaterialTypeField(true)
        setMaterialCompositionField(true)
        setStyleField(true)
    }
    const handleFormFieldLayout52 = () => {
        setTargetAudienceField(true)
        setManuFacturePartNoField(true)
        setNumberOfItemsField(true)
        setSafetyWarningField(true)
        setItemPPUCountField(true)
        setItemPPUCountUnitofMeasureField(true)
        setContainsLiquidContentField(true)
        setHairTypeField(true)
        setLifestyleField(true)
        setColorField(true)
        setColorMapField(true)
        setIsProductExpirableField(true)
    }
    //   const[ArtistName,setArtistName] = useState(false)
    //   const[ArtworkMedium,setArtworkMedium] = useState(false)
    //   const[ProductDate,setProductDate] = useState(false)
    //   const[ProductFramed,setProductFramed] = useState(false)
    //   const[ProductSaleType,setProductSaleType] = useState(false)

    const Category = useSelector((state) => state.addProductForm.selectedCategoryId);
    let SetselectedCategoryId = Category ? Category.categoryId : ""

    if (SetselectedCategoryId !== '') {
        localStorage.setItem('selectedCategoryId', SetselectedCategoryId);
    }
    let selectedCategoryId = localStorage.getItem('selectedCategoryId')


    //    const handleFineArt = ()=>{
    //     setArtistName(true)
    //     setArtworkMedium(true)
    //     setProductDate(true)
    //     setProductFramed(true)
    //     setProductSaleType(true)
    //    }
    //    const handleDrawingSketch = ()=>{
    //     setArtistName(true)
    //     setArtworkMedium(true)
    //     setProductSaleType(true)
    //    }
    useEffect(() => {

        if (selectedCategoryId === "8641217031") {
            // DesertCoolers
            setFormComponent1(true)

        }
        else if (selectedCategoryId === "23034524031") {
            // miniCoolers
            setFormComponent1(true)
        }
        else if (selectedCategoryId === "5130993031") {
            // otherAirCoolers
            setFormComponent1(true)
        }
        else if (selectedCategoryId === "8641218031") {
            // portableCoolers
            setFormComponent1(true)
        }
        else if (selectedCategoryId === "8641219031") {
            // towerCoolers
            setFormComponent1(true)
        }
        else if (selectedCategoryId === "23034523031") {
            // windowCoolers
            setFormComponent1(true)
        }

        // Air Purifiers category list item
        if (selectedCategoryId === "9290351031") {
            // airIonizers
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "10279697031") {
            // carAirPurifier
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "9290352031") {
            // charcoalAirPuri
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "9290353031") {
            // electroAirPuri
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "9290354031") {
            // hepaAirPuri
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "5403404031") {
            // otherAirPuri
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "9290355031") {
            // portableAirPuri
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "9290356031") {
            // ulpaAirPuri
            setFormComponent2(true)
        }

        //Dehumidifiers category list item
        if (selectedCategoryId === "5403405031") {
            // otherDehumidifiers
            setFormComponent2(true)
        }

        //Deodorisers category list item
        if (selectedCategoryId === "51396498031") {
            // otherDeodorisers
            setFormComponent2(true)
        }

        //Fans category list item
        if (selectedCategoryId === "51396515031") {
            // blowerFans
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "51396510031") {
            // boxFans
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "4369221031") {
            // ceilingFans
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "51396517031") {
            // clipFans
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "51396508031") {
            // drumFans
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "8641216031") {
            // exhaustFans
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "51396512031") {
            // floorFans
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "2083427031") {
            // otherFans
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "4369223031") {
            // pedestalFans
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "51396514031") {
            // personalFans
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "4369222031") {
            // tableFans
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "4369224031") {
            // towerFans
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "51396519031") {
            // vortexActionFans
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "51396521031") {
            // wallMountedFans
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "51396507031") {
            // windowFans
            setFormComponent2(true)
        }


        //Humidifier category list item
        if (selectedCategoryId === "5403407031") {
            // otherHumidifiers
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "51396529031") {
            // singleRoomHumidifiers
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "51396531031") {
            // wholeHouseHumidifiers
            setFormComponent3(true)
        }

        //Other(Heating & Cooling) category list item
        if (selectedCategoryId === "2083423031") {
            //Other(Heating & Cooling)
            setFormComponent4(true)
        }

        // Parts & Accessories category list item
        if (selectedCategoryId === "5403409031") {
            // airPuriPartNAccess
            setFormComponent4(true)
        }
        else if (selectedCategoryId === "5403413031") {
            // dehumidPartNAccess
            setFormComponent4(true)
        }
        else if (selectedCategoryId === "23034522031") {
            // evaCoolerPartNAccess
            setFormComponent4(true)
        }
        else if (selectedCategoryId === "5403417031") {
            // fanPartNAccess
            setFormComponent4(true)
        }
        else if (selectedCategoryId === "5403422031") {
            // heaterPartNAccess
            setFormComponent4(true)
        }
        else if (selectedCategoryId === "5403423031") {
            // humidiPartNAccess
            setFormComponent4(true)
        }
        else if (selectedCategoryId === "5403408031") {
            // otherPartNAccess
            setFormComponent4(true)
        }


        //Room Heater category list item
        if (selectedCategoryId === "8641221031") {
            // electricHeaters
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "8641222031") {
            // fanHeaters
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "8641223031") {
            // halogenHeaters
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "8641220031") {
            // heatConvertors
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "51396527031") {
            // keroseneSpaceHeaters
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "51396523031") {
            // naturalgasSpaceHeaters
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "2083424031") {
            // otherRoomHeaters
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "51396525031") {
            // propaneSpaceHeaters
            setFormComponent2(true)
        }

        //Water Heaters & Geysers category list item
        if (selectedCategoryId === "4375455031") {
            // immersionRods
            setFormComponent8(true)
        }
        else if (selectedCategoryId === "4375456031") {
            // instantWaterHeaters
            setFormComponent9(true)
        }
        else if (selectedCategoryId === "4375457031") {
            // storageWaterHeaters
            setFormComponent9(true)
        }

        // Kitchen & Home Appliances
        // Coffee, Tea & Espresso
        // Coffee Grinders
        // Electric Grinder
        if (selectedCategoryId === "51397085031") {
            // "Burr Grinders"
            setFormComponent10(true)
        }
        else if (selectedCategoryId === "51397081031") {
            // "Cone Grinders"
            setFormComponent10(true)
        }
        else if (selectedCategoryId === "51397083031") {
            // Electric Grinders
            setFormComponent10(true)
        }
        else if (selectedCategoryId === "1379975031") {
            // "Other (Electric Grinders)"
            setFormComponent10(true)
        }

        // Manual Grinder
        if (selectedCategoryId === "1379976031") {
            // "Manual Grinder"
            setFormComponent11(true)
        }

        // "Other (Coffee Grinders)"
        if (selectedCategoryId === "1379974031") {
            // "Other (Coffee Grinders)"
            setFormComponent12(true)
        }

        // "Coffee Capsule Holders"
        if (selectedCategoryId === "27961558031") {
            //"Capsule Baskets"
            setFormComponent13(true)
        }
        else if (selectedCategoryId === "27961560031") {
            //"Capsule Drawers"
            setFormComponent14(true)
        }
        else if (selectedCategoryId === "27961559031") {
            //"Capsule Stands"
            setFormComponent15(true)
        }
        else if (selectedCategoryId === "27345416031") {
            //"Other (Coffee Capsule Holders)"
            setFormComponent12(true)
        }

        // "Coffee Filters"
        if (selectedCategoryId === "27345418031") {
            //"Disposable Coffee Filters"
            setFormComponent16(true)
        }
        else if (selectedCategoryId === "1379962031") {
            //"Other (Coffee Filters)"
            setFormComponent16(true)
        }
        else if (selectedCategoryId === "27345419031") {
            //"Permanent Filters"
            setFormComponent16(true)
        }
        else if (selectedCategoryId === "27345417031") {
            //"Reusable Filters"
            setFormComponent16(true)
        }

        // "Drip Trays"
        if (selectedCategoryId === "1379963031") {
            //""Other (Drip Trays)"
            setFormComponent12(true)
        }

        // "Measuring Spoons"
        if (selectedCategoryId === "1379964031") {
            // "Measuring Spoons"
            setFormComponent17(true)
        }

        // "Other (Coffee Maker Accessories)"
        if (selectedCategoryId === "1379961031") {
            // "Other (Coffee Maker Accessories)"
            setFormComponent12(true)
        }

        // "Pod Holders"
        if (selectedCategoryId === "1379966031") {
            // "Pod Holders"
            setFormComponent12(true)
        }
        else if (selectedCategoryId === "1379972031") {
            // "Tea Filters"
            setFormComponent16(true)
        }
        else if (selectedCategoryId === "1379973031") {
            // "Water Tanks"
            setFormComponent12(true)
        }


        // Coffee Makers
        if (selectedCategoryId === "51396613031") {
            // Coffee Makers
            setFormComponent18(true)
        }
        else if (selectedCategoryId === "1379977031") {
            // Coffee Percolators
            setFormComponent18(true)
        }
        else if (selectedCategoryId === "1379980031") {
            // Coffee Presses
            setFormComponent18(true)
        }
        else if (selectedCategoryId === "1379982031") {
            // Drip Coffee Machines
            setFormComponent18(true)
        }
        else if (selectedCategoryId === "51396615031") {
            // Iced Tea Pitchers
            setFormComponent19(true)
        }
        else if (selectedCategoryId === "1379960031") {
            // Other (Coffee, Tea & Espresso)
            setFormComponent12(true)
        }
        else if (selectedCategoryId === "1379985031") {
            // Stovetop Espresso Pots
            setFormComponent18(true)
        }
        else if (selectedCategoryId === "1379986031") {
            // Super-Automatic Coffee Machines
            setFormComponent18(true)
        }
        else if (selectedCategoryId === "1379988031") {
            // Tea Presses
            setFormComponent12(true)

        }
        else if (selectedCategoryId === "51396617031") {
            // Turkish Coffeepots
            setFormComponent18(true)
        }


        // Espresso Machines
        if (selectedCategoryId === "51396864031") {
            // Manual Espresso Machines
            setFormComponent18(true)
        }
        else if (selectedCategoryId === "1379983031") {
            // Other (Espresso Machines)
            setFormComponent18(true)
        }
        else if (selectedCategoryId === "51396866031") {
            //Semi-Automatic Espresso Machines
            setFormComponent18(true)
        }
        else if (selectedCategoryId === "51396862031") {
            // Steam Espresso Machines
            setFormComponent18(true)
        }
        else if (selectedCategoryId === "51396867031") {
            // Super-Automatic Espresso Machines
            setFormComponent18(true)
        }


        // Kettles & Tea Machines
        if (selectedCategoryId === "51396869031") {
            // Coffee Drip Kettles
            setFormComponent20(true)
        }
        else if (selectedCategoryId === "22938888031") {
            // Electric Kettles
            setFormComponent21(true)
        }
        else if (selectedCategoryId === "1379987031") {
            // Hot Tea Machines
            setFormComponent12(true)
        }
        else if (selectedCategoryId === "22938887031") {
            // Hot Water Dispensers
            setFormComponent21(true)
        }
        else if (selectedCategoryId === "22938886031") {
            // Iced Tea Machines
            setFormComponent12(true)
        }
        else if (selectedCategoryId === "22938883031") {
            // Other (Kettles & Tea Machines)
            setFormComponent12(true)
        }
        else if (selectedCategoryId === "22938885031") {
            // Stovetop Tea Kettles
            setFormComponent20(true)
        }


        // Milk Frothers
        if (selectedCategoryId === "51396874031") {
            // Automatic Milk Frothers
            setFormComponent22(true)
        }
        else if (selectedCategoryId === "51396872031") {
            // Handheld Milk Frothers
            setFormComponent22(true)
        }
        else if (selectedCategoryId === "51396875031") {
            // Manual Milk Frothers
            setFormComponent22(true)
        }
        else if (selectedCategoryId === "1379965031") {
            // Other (Milk Frothers)
            setFormComponent22(true)
        }

        // Inverters & Sets
        if (selectedCategoryId === "32075770031") {
            // Batteries
            setFormComponent23(true)
        }
        else if (selectedCategoryId === "32075768031") {
            // Inverter & Battery Sets
            setFormComponent12(true)
        }
        else if (selectedCategoryId === "11870706031") {
            // Inverters
            setFormComponent23(true)
        }
        else if (selectedCategoryId === "32075766031") {
            // Other (Inverters & Sets)
            setFormComponent12(true)
        }
        else if (selectedCategoryId === "32075769031") {
            // Trolleys
            setFormComponent12(true)
        }


        // Other (Kitchen & Home Appliances)
        if (selectedCategoryId === "4951860031") {
            // Other (Kitchen & Home Appliances)
            setFormComponent12(true)
        }

        // Sewing Machines & Accessories
        if (selectedCategoryId === "10543793031") {
            // Attachments
            setFormComponent24(true)
        }
        else if (selectedCategoryId === "10543794031") {
            // Carrying Cases
            handleFormFieldLayout1()
        }
        else if (selectedCategoryId === "51396611031") {
            // Oil
            handleFormFieldLayout2();
        }
        else if (selectedCategoryId === "10543792031") {
            // Other (Sewing Machines & Accessories)
            handleFormFieldLayout3();
            addOptions(["Cups, Mugs & Saucers", "Lid", "Saucer", "Batteries included", "Dough Hook", "Mixers", "Fan Blade included", "Includes 1 leaf", "Stainless Steel Bowl", "Light kit inlcuded", "Bulb included", "Flat Beater", "Pouring Shield", "Tables", "Wire Whip", "Glass Bowl", "Shade included", "Includes 2 leaves", "Includes 3 leaves", "Includes 4 leaves", "Cups"]);

        }
        else if (selectedCategoryId === "10543795031") {
            // Parts
            handleFormFieldLayout3();
        }
        else if (selectedCategoryId === "10543796031") {
            // Presser Feet
            handleFormFieldLayout4();
        }
        else if (selectedCategoryId === "2083428031") {
            // Sewing & Embroidery Machines
            handleFormFieldLayout3();
        }


        // Small Kitchen Appliances
        if (selectedCategoryId === "1380046031") {
            // "Beer Tenders"
            handleFormFieldLayout5();
        }
        else if (selectedCategoryId === "1380047031") {
            //"Bread Makers"
            handleFormFieldLayout6();
        }
        else if (selectedCategoryId === "1380049031") {
            // "Chocolate Funtains"
            handleFormFieldLayout5();
        }
        else if (selectedCategoryId === "1380048031") {
            //"Cotton Candy Makers"
            handleFormFieldLayout5();
        }
        else if (selectedCategoryId === "1380052031") {
            //"Crepe Makers"
            handleFormFieldLayout6();
        }
        else if (selectedCategoryId === "26953502031") {
            //"Deep Fat Fryers"
            handleFormFieldLayout7();
        }
        else if (selectedCategoryId === "26953501031") {
            //Air Fryers
            handleFormFieldLayout8();
        }
        else if (selectedCategoryId === "51396890031") {
            //"Digital Scales"
            handleFormFieldLayout9();
        }
        else if (selectedCategoryId === "51396888031") {
            //"Mechanical Scales"
            handleFormFieldLayout9();
        }
        else if (selectedCategoryId === "1380054031") {
            //"Other (Digital Kitchen Scales)"
            handleFormFieldLayout9();
        }
        else if (selectedCategoryId === "1380055031") {
            //"Egg Boilers"
            handleFormFieldLayout10();
        }
        else if (selectedCategoryId === "1380056031") {
            //"Electric Can Openers"
            handleFormFieldLayout11();
        }
        else if (selectedCategoryId === "1380058031") {
            //"Electric Cheese Graters"
            handleFormFieldLayout12();
        }
        else if (selectedCategoryId === "1380051031") {
            //"Electric Grills"
            handleFormFieldLayout6();
        }
        else if (selectedCategoryId === "1380059031") {
            //"Electric Knife Sharpeners"
            handleFormFieldLayout13();
        }
        else if (selectedCategoryId === "1380060031") {
            //"Electric Skillets"
            handleFormFieldLayout6();
        }
        else if (selectedCategoryId === "1380061031") {
            //"Electric Slicers"
            handleFormFieldLayout14();
        }
        else if (selectedCategoryId === "1380062031") {
            //"Electric Steamers"
            handleFormFieldLayout10();
        }
        else if (selectedCategoryId === "1380063031") {
            //"Electric Woks"
            handleFormFieldLayout5();
        }
        else if (selectedCategoryId === "51396886031") {
            //"Full Size Food Processors"
            handleFormFieldLayout3();
        }
        else if (selectedCategoryId === "1380064031") {
            //"Other (Food Processors)"
            handleFormFieldLayout3();
        }
        else if (selectedCategoryId === "1380065031") {
            //"Hand Blenders"
            handleFormFieldLayout8();
        }
        else if (selectedCategoryId === "1380066031") {
            //"Hand Mixers"
            handleFormFieldLayout15()
        }
        else if (selectedCategoryId === "1380067031") {
            //"Hot Dog Machines"
            handleFormFieldLayout5()

        }
        else if (selectedCategoryId === "1380069031") {
            //"Ice Cream Makers"
            handleFormFieldLayout16()
        }
        else if (selectedCategoryId === "1380068031") {
            //"Induction Cooktop"
            handleFormFieldLayout17()
        }
        else if (selectedCategoryId === "2088589031") {
            //"Juicer Mixer Grinders"
            handleFormFieldLayout18()
        }
        else if (selectedCategoryId === "11366947031") {
            // Centrifugal Juicers
            handleFormFieldLayout18()
        }
        else if (selectedCategoryId === "11366946031") {
            // Electric Citrus Juicers
            handleFormFieldLayout18()
        }
        else if (selectedCategoryId === "1380070031") {
            // Other (Juicers)
            handleFormFieldLayout18()
        }
        else if (selectedCategoryId === "1380070031") {
            // Dual Auger Masticating Juicers
            handleFormFieldLayout18()
        }
        else if (selectedCategoryId === "14155257031") {
            //Other (Cold Press Juicers)
            handleFormFieldLayout18()
        }
        else if (selectedCategoryId === "14155258031") {
            // Single Auger Masticating Juicers
            handleFormFieldLayout18()
        }
        else if (selectedCategoryId === "22938888031") {
            //"Electric Kettles"
            handleFormFieldLayout19()
        }
        else if (selectedCategoryId === "1379987031") {
            //Hot Tea Machines
            handleFormFieldLayout20()
        }
        else if (selectedCategoryId === "22938887031") {
            //Hot Water Boilers & Dispensers
            handleFormFieldLayout19()
        }
        else if (selectedCategoryId === "22938886031") {
            //Iced Tea Machines
            handleFormFieldLayout20()
        }
        else if (selectedCategoryId === "1379984031") {
            //Kettle & Toaster Sets
            handleFormFieldLayout19()
        }
        else if (selectedCategoryId === "22938884031") {
            //Other (Kettles & Hot Water Dispensers)
            handleFormFieldLayout19()
        }
        else if (selectedCategoryId === "51396881031") {
            //Electric Spice Grinders
            handleFormFieldLayout21()
        }
        else if (selectedCategoryId === "51396879031") {
            //Grain Mills
            handleFormFieldLayout22()
        }
        else if (selectedCategoryId === "1380012031") {
            //Herb & Spice Mills
            handleFormFieldLayout21()
        }
        else if (selectedCategoryId === "27320744031") {
            //Other (Mills & Grinders)
            handleFormFieldLayout5()
        }
        else if (selectedCategoryId === "27320745031") {
            //Wet Grinders
            handleFormFieldLayout23()
        }
        else if (selectedCategoryId === "1380050031") {
            //"Mini Food Processors & Choppers"
            handleFormFieldLayout3()
        }
        else if (selectedCategoryId === "4375446031") {
            //"Mixer Grinders"
            handleFormFieldLayout15()
        }
        else if (selectedCategoryId === "1380045031") {
            //"Other (Small Kitchen Appliances)"
            handleFormFieldLayout5()
        }
        else if (selectedCategoryId === "1380073031") {
            //"Oven Toaster Grills"
            handleFormFieldLayout8()
        }
        else if (selectedCategoryId === "1380074031") {
            //"Pasta Machines"
            handleFormFieldLayout11()
        }
        else if (selectedCategoryId === "1380081031") {
            //"Pop-up Toasters"
            handleFormFieldLayout6()
        }
        else if (selectedCategoryId === "1380075031") {
            //"Popcorn Makers"
            handleFormFieldLayout5()
        }
        else if (selectedCategoryId === "1380077031") {
            //"Rice & Pasta Cookers"
            handleFormFieldLayout24()
        }
        else if (selectedCategoryId === "11366949031") {
            //Other (Roti Makers)
            handleFormFieldLayout5()

        }
        else if (selectedCategoryId === "51396883031") {
            //Quesadilla Makers
            handleFormFieldLayout6()
        }
        else if (selectedCategoryId === "1380078031") {
            //Sandwich Makers
            handleFormFieldLayout6()
        }
        else if (selectedCategoryId === "1380079031") {
            //"Slow Cookers"
            handleFormFieldLayout6()
        }
        else if (selectedCategoryId === "10543776031") {
            //Bread Machine Accessories
            handleFormFieldLayout5()
        }
        else if (selectedCategoryId === "10543777031") {
            //Bread Machine Replacement Parts
            handleFormFieldLayout5()
        }
        else if (selectedCategoryId === "10543778031") {
            //Countertop Blender Accessories
            handleFormFieldLayout5()
        }
        else if (selectedCategoryId === "10543779031") {
            //Countertop Blender Replacement Parts
            handleFormFieldLayout5()
        }
        else if (selectedCategoryId === "10543780031") {
            //Food Processor Accessories
            handleFormFieldLayout5()
        }
        else if (selectedCategoryId === "10543781031") {
            //Food Processor Replacement Parts
            handleFormFieldLayout5()
        }
        else if (selectedCategoryId === "10543782031") {
            //Hand Blender Accessories
            handleFormFieldLayout5()
        }
        else if (selectedCategoryId === "10543783031") {
            //Hand Blender Replacement Parts
            handleFormFieldLayout5()
        }
        else if (selectedCategoryId === "10543784031") {
            //Hand Mixer Accessories
            handleFormFieldLayout5()
        }
        else if (selectedCategoryId === "10543785031") {
            //Hand Mixer Replacement Parts
            handleFormFieldLayout5()
        }
        else if (selectedCategoryId === "10543787031") {
            //Microwave Oven Replacement Parts
            handleFormFieldLayout5()
        }
        else if (selectedCategoryId === "10543775031") {
            //Other (Small Appliance Parts & Accessories)
            handleFormFieldLayout5()
        }
        else if (selectedCategoryId === "10543788031") {
            //Soda Maker Accessories
            handleFormFieldLayout5()
        }
        else if (selectedCategoryId === "10543789031") {
            //Stand Mixer Accessories
            handleFormFieldLayout5()
        }
        else if (selectedCategoryId === "10543790031") {
            //Stand Mixer Replacement Parts
            handleFormFieldLayout5()
        }
        else if (selectedCategoryId === "10543791031") {
            //Vacuum Sealer Accessories
            handleFormFieldLayout5()
        }
        else if (selectedCategoryId === "11366948031") {
            //"Soup Kettles & Makers"
            handleFormFieldLayout5()
        }
        else if (selectedCategoryId === "1380080031") {
            //"Stand Mixers"
            handleFormFieldLayout15()
        }
        else if (selectedCategoryId === "1380076031") {
            //"Tandoors & Grills"
            handleFormFieldLayout6()
        }
        else if (selectedCategoryId === "1380082031") {
            //"Vacuum Sealers"

        }
        else if (selectedCategoryId === "1380083031") {
            //"Waffle Makers & Irons"
            handleFormFieldLayout6()
        }
        else if (selectedCategoryId === "1380084031") {
            //"Yogurt Makers"
            handleFormFieldLayout5()
        }


        // Vacuum, Cleaning & Ironing
        // Irons, Steamers & Accessories
        //1. Ironing Accessories
        if (selectedCategoryId === "1380568031") {
            // Felt Pads
            handleFormFieldLayout25()
        }
        else if (selectedCategoryId === "1380569031") {
            // Iron Holders
            handleFormFieldLayout25()
        }
        else if (selectedCategoryId === "1380571031") {
            // Ironing Board Covers
            handleFormFieldLayout25()
        }
        else if (selectedCategoryId === "51396836031") {
            // Ironing Chairs
            handleFormFieldLayout26()
        }
        else if (selectedCategoryId === "1380550031") {
            // Laundry Baskets
            handleFormFieldLayout27()
        }
        else if (selectedCategoryId === "1380567031") {
            //Other (Ironing Accessories
            handleFormFieldLayout25()
        }
        else if (selectedCategoryId === "1380570031") {
            // Spray Bottles
            handleFormFieldLayout28()
        }

        //2. Irons
        if (selectedCategoryId === "1380577031") {
            // Dry Irons
            handleFormFieldLayout29()
        }
        else if (selectedCategoryId === "1380574031") {
            // Other (Irons)
            handleFormFieldLayout29()
        }
        else if (selectedCategoryId === "1380579031") {
            // Steam Generator Iron
            handleFormFieldLayout29()
        }
        else if (selectedCategoryId === "1380578031") {
            // Steam Irons
            handleFormFieldLayout29()
        }
        else if (selectedCategoryId === "1380576031") {
            // Travel Irons
            handleFormFieldLayout29()
        }
        // Vacuum, Cleaning & Ironing
        // Irons, Steamers & Accessories
        if (selectedCategoryId === "1380580031") {
            // Lint Shavers
            handleFormFieldLayout30()
        }
        else if (selectedCategoryId === "1380566031") {
            //Other (Irons, Steamers & Accessories)
            handleFormFieldLayout20()
        }
        else if (selectedCategoryId === "1380581031") {
            // Steam Generator Accessories
            handleFormFieldLayout20()
        }
        else if (selectedCategoryId === "1380584031") {
            // Steam Presses
            handleFormFieldLayout20()
        }
        else if (selectedCategoryId === "1380583031") {
            // Travel Steam Generators
            handleFormFieldLayout10()
        }
        else if (selectedCategoryId === "51396877031") {
            // Vertical Steamers
            handleFormFieldLayout10()
        }

        // Vacuum, Cleaning & Ironing
        if (selectedCategoryId === "1380565031") {
            //"Other (Vacuum, Cleaning & Ironing)"
            handleFormFieldLayout20()
        }
        else if (selectedCategoryId === "2083413031") {
            //"Pressure Washers, Steam & Window Cleaners"
            handleFormFieldLayout31()
        }

        // Vacuum, Cleaning & Ironing
        // Vacuums & Floor Care
        if (selectedCategoryId === "1380588031") {
            // Carpet Sweepers
            handleFormFieldLayout20()
        }
        else if (selectedCategoryId === "1380589031") {
            // Floor Polishers
            handleFormFieldLayout20()
        }
        else if (selectedCategoryId === "1380585031") {
            // Other (Vacuums & Floor Care)
            handleFormFieldLayout20()
        }
        else if (selectedCategoryId === "5274532031") {
            // Steam Cleaners
            handleFormFieldLayout10()
        }

        // Vacuum, Cleaning & Ironing
        // Vacuums & Floor Care
        // Vacuum Accessories
        if (selectedCategoryId === "1380595031") {
            // Vacuum Belts
            handleFormFieldLayout32()
        }

        else if (selectedCategoryId === "1380603031") {
            // Vacuum Hoses
            handleFormFieldLayout33()
        }
        else if (selectedCategoryId === "1380604031") {
            // Vacuum Lamp Bulbs
            handleFormFieldLayout34()
        }

        else if (selectedCategoryId === "51397088031") {
            // Vacuum Tubes
            handleFormFieldLayout33()
        }

        // Vacuum, Cleaning & Ironing
        // Vacuums & Floor Care
        // Vacuum
        if (selectedCategoryId === "1380608031") {
            // Canister Vacuums
            handleFormFieldLayout35()
        }
        else if (selectedCategoryId === "5274529031") {
            // Central Vacuum Systems
            handleFormFieldLayout35()
        }
        else if (selectedCategoryId === "51397086031") {
            // Futon & Mattress Vacuums
            handleFormFieldLayout35()
        }
        else if (selectedCategoryId === "1380609031") {
            // Handheld Vacuums
            handleFormFieldLayout35()
        }
        else if (selectedCategoryId === "1380607031") {
            // Other (Vacuums)
            handleFormFieldLayout35()
        }
        else if (selectedCategoryId === "1380610031") {
            // Robotic Vacuums
            handleFormFieldLayout35()
        }
        else if (selectedCategoryId === "1380611031") {
            //Stick Vacuums & Electric Brooms
            handleFormFieldLayout35()
        }
        else if (selectedCategoryId === "1380612031") {
            //Upright Vacuums
            handleFormFieldLayout35()
        }
        else if (selectedCategoryId === "5274530031") {
            //Wet-Dry Vacuums
            handleFormFieldLayout35()
        }

        // Water Purifiers & Accessories
        if (selectedCategoryId === "1380261031") {
            // "Water Cartridges"
            handleFormFieldLayout37()
        }
        else if (selectedCategoryId === "1380262031") {
            //"Water Filters & Purifiers"
            handleFormFieldLayout36()
        }
        else if (selectedCategoryId === "1380260031") {
            //"Water Purifier Accessories"
            handleFormFieldLayout36()
        }

        // Appliances
        // Large Appliances

        if (selectedCategoryId === "1380263031") {
            // Other (Large Appliances)
            handleFormFieldLayout20()
        }
        else if (selectedCategoryId === "5142306031") {
            // Range Cooktops
            handleFormFieldLayout17()
        }

        // Appliances
        // Large Appliances
        // Parts & Accessories
        if (selectedCategoryId === "51396590031") {
            //Gas Hoses
            handleFormFieldLayout33()
        }
        else if (selectedCategoryId === "1380274031") {
            //Other (Parts & Accessories)
            handleFormFieldLayout20()
        }
        else if (selectedCategoryId === "51396592031") {
            //Power Cords
            handleFormFieldLayout38()
        }
        else if (selectedCategoryId === "1380337031") {
            //Refrigerator Parts & Accessories
        }

        // Appliances
        // Large Appliances
        // Parts & Accessories
        // Appliance Slipcovers

        if (selectedCategoryId === "14387571031") {
            //AC Covers
            handleFormFieldLayout28()
        }
        else if (selectedCategoryId === "14387572031") {
            //Air Cooler Covers
            handleFormFieldLayout28()
        }
        else if (selectedCategoryId === "14387568031") {
            //Other (Appliance Slipcovers)
            handleFormFieldLayout20()
        }
        else if (selectedCategoryId === "14387569031") {
            //Washing Machine Covers
            handleFormFieldLayout28()
        }

        // Appliances
        // Large Appliances
        // Parts & Accessories
        // Inverter Accessories
        if (selectedCategoryId === "32075770031") {
            //Batteries
            handleFormFieldLayout39()
        }
        else if (selectedCategoryId === "32075767031") {
            //Other (Inverter Accessories)
            handleFormFieldLayout20()
        }
        else if (selectedCategoryId === "32075769031") {
            //Trolleys
            handleFormFieldLayout20()
        }

        // Appliances
        // Large Appliances
        // Parts & Accessories
        // Microwave Parts & Accessories
        if (selectedCategoryId === "1380312031") {
            //Filters
            handleFormFieldLayout20()
        }
        else if (selectedCategoryId === "1380311031") {
            //Other (Microwave Parts & Accessories)
            handleFormFieldLayout20()
        }
        else if (selectedCategoryId === "1380313031") {
            //Trim Kits
            handleFormFieldLayout20()
        }
        else if (selectedCategoryId === "1380314031") {
            //Turntables
            handleFormFieldLayout20()
        }

        // Appliances
        // Large Appliances
        // Parts & Accessories
        // Oven Parts & Accessories
        if (selectedCategoryId === "1380315031") {
            //Other (Oven Parts & Accessories)
            handleFormFieldLayout20()
        }
        else if (selectedCategoryId === "51239718031") {
            //Oven Lighting
            handleFormFieldLayout40()
        }

        // Appliances
        // Large Appliances
        // Parts & Accessories
        // Range Hood Parts & Accessories
        if (selectedCategoryId === "1380317031") {
            //Blowers
            handleFormFieldLayout20()
        }

        else if (selectedCategoryId === "1380316031") {
            //Other (Range Hood Parts & Accessories)
            handleFormFieldLayout20()
        }
        else if (selectedCategoryId === "51239714031") {
            //Range Hood Lighting
            handleFormFieldLayout40()
        }
        else if (selectedCategoryId === "1380320031") {
            //Screens
            handleFormFieldLayout20()
        }

        // Appliances
        // Large Appliances
        // Parts & Accessories
        // Range Parts & Accessories
        if (selectedCategoryId === "1380322031") {
            //Backguards
            handleFormFieldLayout20()
        }
        else if (selectedCategoryId === "1380323031") {
            //Built-in Thermometers
            handleFormFieldLayout41()
        }
        else if (selectedCategoryId === "1380324031") {
            //Built-in Timers
            handleFormFieldLayout42()
        }
        else if (selectedCategoryId === "1380325031") {
            //Cooktop Burner Rings
            handleFormFieldLayout20()
        }
        else if (selectedCategoryId === "1380326031") {
            //Cooktop Burner
            handleFormFieldLayout20()
        }
        else if (selectedCategoryId === "1380327031") {
            //Drip Pans
            handleFormFieldLayout20()
        }
        else if (selectedCategoryId === "1380328031") {
            //Exhaust Fans
            handleFormFieldLayout43()
        }
        else if (selectedCategoryId === "1380321031") {
            //Other (Range Parts & Accessories)
            handleFormFieldLayout20()
        }
        else if (selectedCategoryId === "1380330031") {
            //Oven Heating Elements
            handleFormFieldLayout20()
        }
        else if (selectedCategoryId === "1380333031") {
            //Paneling
            handleFormFieldLayout20()
        }
        else if (selectedCategoryId === "1380334031") {
            //Plug Receptacles
            handleFormFieldLayout20()
        }
        else if (selectedCategoryId === "51396845031") {
            //Range Power Cords
            handleFormFieldLayout38()
        }
        else if (selectedCategoryId === "1380336031") {
            //Trim Kits
            handleFormFieldLayout20()
        }

        // Appliances
        // Large Appliances
        // Parts & Accessories
        // Refrigerator Parts & Accessories
        if (selectedCategoryId === "1380341031") {
            //Handles
            handleFormFieldLayout44()
        }
        else if (selectedCategoryId === "51396840031") {
            //Hoses
            handleFormFieldLayout33()
        }
        else if (selectedCategoryId === "1380342031") {
            //Ice Makers
            handleFormFieldLayout45()
        }
        else if (selectedCategoryId === "1380343031") {
            //Motors
            handleFormFieldLayout46()
        }
        else if (selectedCategoryId === "51396843031") {
            //Power Cords
            handleFormFieldLayout38()
        }
        else if (selectedCategoryId === "51396838031") {
            //Refrigerator Lighting
            handleFormFieldLayout40()
        }
        else if (selectedCategoryId === "51396841031") {
            //Refrigerator Thermometers
            handleFormFieldLayout41()
        }
        else if (selectedCategoryId === "1380348031") {
            //Water Filters
            handleFormFieldLayout37()
        }

        // Appliances
        // Large Appliances
        // Parts & Accessories
        // Washer Parts & Accessories
        if (selectedCategoryId === "1380353031") {
            //Clamps
            handleFormFieldLayout47()
        }
        else if (selectedCategoryId === "1380354031") {
            //Detergent Trays
            handleFormFieldLayout20()
        }
        else if (selectedCategoryId === "1380355031") {
            //Doors
            handleFormFieldLayout20()
        }
        else if (selectedCategoryId === "1380356031") {
            //Drain Pumps
            handleFormFieldLayout47()
        }
        else if (selectedCategoryId === "1380357031") {
            //Floor Trays
            handleFormFieldLayout20()
        }
        else if (selectedCategoryId === "1380358031") {
            //Hoses
            handleFormFieldLayout33()
        }
        else if (selectedCategoryId === "1380359031") {
            //Lint Filters
            handleFormFieldLayout20()
        }
        else if (selectedCategoryId === "1380360031") {
            //Motors
            handleFormFieldLayout46()
        }
        else if (selectedCategoryId === "1380352031") {
            //Other (Washer Parts & Accessories)
            handleFormFieldLayout20()
        }

        // Appliances
        // Large Appliances
        // Washing Machines & Dryers
        if (selectedCategoryId === "1380369031") {
            //Other (Washing Machines & Dryers)
            handleFormFieldLayout20()
        }
        else if (selectedCategoryId === "1380372031") {
            //Stacked Washers & Dryers
            handleFormFieldLayout20()
        }


        // Fashion
        // Girl
        // Clothing
        // Accessories
        if (selectedCategoryId === "5866002031") {
            //Arm Warmers & Muffs
            handleFormFieldLayout48()
            setCareInstructionOptions(["Machine Wash", "Hand Wash", "Dry Clean Only"])
            setMaterialTypeItem(["Faux Fur", "Faux Leather", "Fur", "Polyester", "Polyethylene", "Nitrile", "Nylon", "Spandex", "Vinyl", "Leather", "Plastic", "Cotton", "Cotton Blend", "Aramid Fibre", "Silk",
                "Polyurethane", "Neoprene", "Rayon", "Carbon Fibre", "Wool", "Acrylic", "Lace", "Linen", "Linen Blend", "Modal", "Modal Blend", "Net", "Nylon Blend", "Polyester Blend",
                "Rayon Blend", "Satin", "Satin blend", "Silk Blend", "Viscose Blend", "Wool blend", "Acrylic blend", "Genuine Leather", "Synthetic Leather",
                "Canvas", "Faux Leather", "Silicone", "Leather", "Metal", "Suede", "Rhinestone", "Acrylonitrile Butadiene Styrene", "Rubber", "Polycarbonate", "Polyvinyl Chloride"])
        }
        else if (selectedCategoryId === "1967939031") {
            //Balaclavas
            handleFormFieldLayout49()

        }
        else if (selectedCategoryId === "5866003031") {
            //Belts
            handleFormFieldLayout50()
            setMaterialTypeItem(["Faux Fur", "Faux Leather", "Fur", "Polyester", "Polyethylene", "Nitrile", "Nylon", "Spandex", "Vinyl", "Leather", "Plastic", "Cotton", "Cotton Blend", "Aramid Fibre", "Silk",
                "Polyurethane", "Neoprene", "Rayon", "Carbon Fibre", "Wool", "Acrylic", "Lace", "Linen", "Linen Blend", "Modal", "Modal Blend", "Net", "Nylon Blend", "Polyester Blend",
                "Rayon Blend", "Satin", "Satin blend", "Silk Blend", "Viscose Blend", "Wool blend", "Acrylic blend", "Genuine Leather", "Synthetic Leather",
                "Canvas", "Faux Leather", "Silicone", "Leather", "Metal", "Suede", "Rhinestone", "Acrylonitrile Butadiene Styrene", "Rubber", "Polycarbonate", "Polyvinyl Chloride"])
            setOccasionDescriptionOptions(["Formal", "Casual"])
            setCareInstructionOptions(["Non Washable", "Machine Wash", "Hand Wash", "Dry Clean Only", "Wet Cloth Wipe", "Dry Cloth Clean", "Hand Wash Only", "Wet Wipe Clean"])
        }
        else if (selectedCategoryId === "3659006031") {
            //Cold Weather Sets
            handleFormFieldLayout51()
        }
        else if (selectedCategoryId === "1967950031") {
            //Fashion Headbands
            handleFormFieldLayout52()

        }
        else if (selectedCategoryId === "16085631031") {
            //Handkerchiefs
            handleFormFieldLayout48()
            setCareInstructionOptions(["Machine Wash", "Hand Wash", "Dry Clean Only"])
            setMaterialTypeItem(["Faux Fur", "Faux Leather", "Fur", "Polyester", "Polyethylene", "Nitrile", "Nylon", "Spandex", "Vinyl", "Leather", "Plastic", "Cotton", "Cotton Blend", "Aramid Fibre", "Silk",
                "Polyurethane", "Neoprene", "Rayon", "Carbon Fibre", "Wool", "Acrylic", "Lace", "Linen", "Linen Blend", "Modal", "Modal Blend", "Net", "Nylon Blend", "Polyester Blend",
                "Rayon Blend", "Satin", "Satin blend", "Silk Blend", "Viscose Blend", "Wool blend", "Acrylic blend", "Genuine Leather", "Synthetic Leather",
                "Canvas", "Faux Leather", "Silicone", "Leather", "Metal", "Suede", "Rhinestone", "Acrylonitrile Butadiene Styrene", "Rubber", "Polycarbonate", "Polyvinyl Chloride"])

        }
        else if (selectedCategoryId === "1967951031") {
            //Kidney Warmers
            handleFormFieldLayout48()
            setCareInstructionOptions(["Machine Wash", "Hand Wash", "Dry Clean Only"])
            setMaterialTypeItem(["Faux Fur", "Faux Leather", "Fur", "Polyester", "Polyethylene", "Nitrile", "Nylon", "Spandex", "Vinyl", "Leather", "Plastic", "Cotton", "Cotton Blend", "Aramid Fibre", "Silk",
                "Polyurethane", "Neoprene", "Rayon", "Carbon Fibre", "Wool", "Acrylic", "Lace", "Linen", "Linen Blend", "Modal", "Modal Blend", "Net", "Nylon Blend", "Polyester Blend",
                "Rayon Blend", "Satin", "Satin blend", "Silk Blend", "Viscose Blend", "Wool blend", "Acrylic blend", "Genuine Leather", "Synthetic Leather",
                "Canvas", "Faux Leather", "Silicone", "Leather", "Metal", "Suede", "Rhinestone", "Acrylonitrile Butadiene Styrene", "Rubber", "Polycarbonate", "Polyvinyl Chloride"])
        }
        else if (selectedCategoryId === "1967952031") {
            //Neckerchiefs

        }
        else if (selectedCategoryId === "1967937031") {
            //Other (Accessories)

        }
        else if (selectedCategoryId === "3414249031") {
            //Sport Headbands

        }
        else if (selectedCategoryId === "1967940031") {
            //Suspenders

        }
        // Fashion
        // Girl
        // Clothing
        // Accessories
        // Hats & Caps
        if (selectedCategoryId === "26111016031") {
            //Baseball Caps

        }
        else if (selectedCategoryId === "1967949031") {
            //Other (Hats & Caps)

        }
        else if (selectedCategoryId === "26111017031") {
            //Skullies & Beanies

        }
        else if (selectedCategoryId === "26111015031") {
            //Visors

        }
        // Fashion
        // Girl
        // Clothing
        // Accessories
        // Socks
        if (selectedCategoryId === "1967969031") {
            //Athletic Socks

        }
        else if (selectedCategoryId === "1968000031") {
            //Knee-High Socks

        }
        else if (selectedCategoryId === "1968001031") {
            //Liners & Ankle Socks

        }
        else if (selectedCategoryId === "1967999031") {
            //Other (Socks)

        }

        // Fashion > Girls > Clothing > Dresses & Jumpsuits
        if (selectedCategoryId === "1967972031") {
            //Dresses

        }
        else if (selectedCategoryId === "1967983031") {
            //Overalls

        }
        // Fashion > Girls > Clothing > Ethnic Wear
        if (selectedCategoryId === "3731694031") {
            //Bottom Wear

        }
        else if (selectedCategoryId === "3731695031") {
            //Dupattas

        }
        else if (selectedCategoryId === "3723384031") {
            //Half Sarees

        }
        else if (selectedCategoryId === "3723385031") {
            //Kurtas & Kurtis

        }
        else if (selectedCategoryId === "3723386031") {
            //Lehenga Cholis

        }
        else if (selectedCategoryId === "3659020031") {
            //Other (Ethnic Wear)

        }
        else if (selectedCategoryId === "3723388031") {
            //Salwar Suit Sets

        }
        else if (selectedCategoryId === "3723389031") {
            //Sarees

        }
        // Fashion > Girls > Clothing > Innerwear
        if (selectedCategoryId === "1968016031") {
            //Other (Innerwear)

        }
        else if (selectedCategoryId === "1968017031") {
            //Panties

        }
        else if (selectedCategoryId === "2170168031") {
            //Sets

        }
        else if (selectedCategoryId === "1968018031") {
            //Slips

        }
        else if (selectedCategoryId === "1968023031") {
            //Vests & Camisoles

        }
        // Fashion > Girls > Clothing > Innerwear > Beginners Bras
        if (selectedCategoryId === "5836981031") {
            //Other (Beginners Bras)

        }
        else if (selectedCategoryId === "1967960031") {
            //Sports Bras

        }
        // Fashion > Girls > Clothing > Innerwear > Thermals
        if (selectedCategoryId === "1968019031") {
            //Other (Thermals)

        }
        else if (selectedCategoryId === "1968020031") {
            //Thermal Bottoms

        }
        else if (selectedCategoryId === "26111018031") {
            //Thermal One-Piece Suits

        }
        else if (selectedCategoryId === "1968021031") {
            //Thermal Sets

        }
        else if (selectedCategoryId === "1968022031") {
            //Thermal Tops

        }
        // Fashion > Girls > Clothing > Rainwear 
        if (selectedCategoryId === "1967993031") {
            //Other (Rainwear)

        }
        else if (selectedCategoryId === "1967994031") {
            //Rain Trousers

        }
        else if (selectedCategoryId === "1967995031") {
            //Raincoats

        }
        else if (selectedCategoryId === "1967996031") {
            //Snow Trousers & Bibs

        }
        else if (selectedCategoryId === "1967997031") {
            //Snowsuits

        }
        // Fashion > Girls > Clothing > School Uniforms 
        if (selectedCategoryId === "1968344031") {
            //Accessories

        }
        else if (selectedCategoryId === "16085632031") {
            //Hoodies & Sweatshirts

        }
        else if (selectedCategoryId === "1968345031") {
            //Jackets & Coats

        }

        else if (selectedCategoryId === "1968350031") {
            //Pants

        }
        else if (selectedCategoryId === "10671563031") {
            //Pullovers

        }
        else if (selectedCategoryId === "1968346031") {
            //Sets

        }
        else if (selectedCategoryId === "1968349031") {
            //Shirts

        }
        else if (selectedCategoryId === "1968347031") {
            //Shorts

        }
        else if (selectedCategoryId === "1968348031") {
            //Skirts, Scooters & Skorts

        }
        else if (selectedCategoryId === "16039025031") {
            //T-Shirts

        }
        // Fashion > Girls > Clothing > Skirts & Shorts

        if (selectedCategoryId === "1967984031") {
            //Shorts

        }
        else if (selectedCategoryId === "1967985031") {
            //Skirts
        }
        // Fashion > Girls > Clothing > Sleepwear
        if (selectedCategoryId === "1967987031") {
            //Nightdresses

        }
        else if (selectedCategoryId === "1967986031") {
            //Other (Sleepwear)

        }
        else if (selectedCategoryId === "1967989031") {
            //Pyjama Sets
        }
        else if (selectedCategoryId === "1967990031") {
            //Pyjama Tops
        }
        else if (selectedCategoryId === "1967988031") {
            //Pyjamas
        }
        else if (selectedCategoryId === "1967991031") {
            //Robes
        }
        else if (selectedCategoryId === "1967992031") {
            //Sleepsuits
        }
        // Fashion > Girls > Clothing > Sportswear
        if (selectedCategoryId === "1967969031") {
            //Athletic Socks

        }
        else if (selectedCategoryId === "1967966031") {
            //Leggings

        }

        else if (selectedCategoryId === "1967964031") {
            //Shorts

        }
        else if (selectedCategoryId === "5866006031") {
            //Sports Dresses

        }
        else if (selectedCategoryId === "1967961031") {
            //Sweaters

        }
        else if (selectedCategoryId === "1967970031") {
            //Track Jackets

        }
        else if (selectedCategoryId === "1967957031") {
            //Vests

        }
        // Fashion > Girls > Clothing > Sportswear > Base Layers & Compression
        if (selectedCategoryId === "3414719031") {
            //Arm Warmers

        }
        else if (selectedCategoryId === "3414723031") {
            //Compression Socks

        }
        else if (selectedCategoryId === "3414720031") {
            //Leg Warmers

        }

        else if (selectedCategoryId === "3414721031") {
            //Pants

        }
        else if (selectedCategoryId === "3414722031") {
            //Shirts

        }
        else if (selectedCategoryId === "22202815031") {
            //Shorts

        }
        // Fashion > Girls > Clothing > Sportswear > Base Layers & Compression > Thermal Underwear

        if (selectedCategoryId === "") {
            //Other (Thermal Underwear)

        }
        else if (selectedCategoryId === "") {
            //Thermal Bottoms

        }
        else if (selectedCategoryId === "") {
            //Thermal One-Piece Suits

        }
        else if (selectedCategoryId === "") {
            //Thermal Sets

        }
        else if (selectedCategoryId === "") {
            //Thermal Tops

        }
        // Fashion > Girls > Clothing > Sportswear > Innerwear 
        if (selectedCategoryId === "3659009031") {
            //Active Undershirts

        }
        else if (selectedCategoryId === "1967959031") {
            //Briefs

        }
        else if (selectedCategoryId === "1967958031") {
            //Other (Innerwear)
        }
        else if (selectedCategoryId === "1967960031") {
            //Sports Bras

        }
        // Fashion > Girls > Clothing > Sportswear > Sets
        if (selectedCategoryId === "1967962031") {
            //Other (Sets)

        }
        else if (selectedCategoryId === "25965191031") {
            //Sweatsuits

        }
        else if (selectedCategoryId === "1967967031") {
            //Tracksuits
        }
        else if (selectedCategoryId === "3414248031") {
            //Workout Top & Bottom Sets

        }
        // Fashion > Girls > Clothing > Sportswear > Shirts & Tees
        if (selectedCategoryId === "26978645031") {
            //Button-Down Shirts

        }
        else if (selectedCategoryId === "25965193031") {
            //Long Sleeve Tops
        }
        else if (selectedCategoryId === "1967963031") {
            //Other (Shirts & Tees)
        }
        else if (selectedCategoryId === "25965194031") {
            //Polos

        }
        else if (selectedCategoryId === "25965192031") {
            //T-Shirts

        }
        else if (selectedCategoryId === "25965195031") {
            //Tank Tops

        }
        // Fashion > Girls > Clothing > Sportswear > Skirts & Skorts
        if (selectedCategoryId === "1967965031") {
            //Other (Skirts & Skorts)

        }
        else if (selectedCategoryId === "25965190031") {
            //Skirts
        }
        else if (selectedCategoryId === "25965189031") {
            //Skorts
        }
        // Fashion > Girls > Clothing > Sportswear >Sweatshirts & Hoodies
        if (selectedCategoryId === "1967973031") {
            //Hoodies

        }
        else if (selectedCategoryId === "11400134031") {
            //Other (Sweatshirts & Hoodies)

        }
        else if (selectedCategoryId === "1968004031") {
            //Sweatshirts

        }
        // Fashion > Girls > Clothing > Sportswear >Trousers
        if (selectedCategoryId === "1967968031") {
            //Other (Trousers)

        }
        else if (selectedCategoryId === "25965187031") {
            //Sweatpants

        }
        else if (selectedCategoryId === "25965188031") {
            //Track Pants

        }
        // Fashion > Girls > Clothing > Sunglasses & Spectacle Frames
        if (selectedCategoryId === "1967944031") {
            //Glasses Cases

        }
        else if (selectedCategoryId === "1967945031") {
            //Glasses Chains & Lanyards

        }
        else if (selectedCategoryId === "1967943031") {
            //Other (Sunglasses & Spectacle Frames)

        }
        else if (selectedCategoryId === "1374602031") {
            //Reading Glasses

        }
        else if (selectedCategoryId === "1967946031") {
            //Spectacle Frames

        }
        else if (selectedCategoryId === "1967947031") {
            //Sunglasses

        }
        // Fashion > Girls > Clothing > Swimwear
        if (selectedCategoryId === "1968006031") {
            //Cover-Ups

        }
        else if (selectedCategoryId === "27980970031") {
            //Monokinis

        }
        else if (selectedCategoryId === "1968007031") {
            //One-Piece Swimsuits

        }

        else if (selectedCategoryId === "27980971031") {
            //Rash Guards

        }
        else if (selectedCategoryId === "1968008031") {
            //Shorts

        }

        // Fashion > Girls > Clothing > Swimwear > Bikinis
        if (selectedCategoryId === "1968009031") {
            //Other (Bikinis)

        }
        // Fashion > Girls > Clothing > Swimwear > Bikinis > Bikinis
        if (selectedCategoryId === "") {
            //Bottoms

        }
        else if (selectedCategoryId === "") {
            //Other (Bikinis)

        }
        else if (selectedCategoryId === "") {
            //Sets

        }
        else if (selectedCategoryId === "") {
            //Tops

        }
        // Fashion > Girls > Clothing > Swimwear > Bikinis > Tankinis
        if (selectedCategoryId === "") {
            //Other (Tankinis)

        }
        else if (selectedCategoryId === "") {
            //Tankini Bottoms

        }
        else if (selectedCategoryId === "") {
            //Tankini Sets

        }
        else if (selectedCategoryId === "") {
            //Tankini Tops

        }
        // Fashion > Girls > Clothing > Swimwear > Swimwear Sets
        if (selectedCategoryId === "27980982031") {
            //Cover-Up Sets

        }
        else if (selectedCategoryId === "27980982031") {
            //Rash Guard Sets

        }
        // Fashion > Girls > Clothing > Tights & Leggings
        if (selectedCategoryId === "1968002031") {
            //Leggings

        }
        else if (selectedCategoryId === "1967998031") {
            //Other (Tights & Leggings)

        }
        else if (selectedCategoryId === "1968003031") {
            //Tights

        }
        // Fashion > Girls > Clothing > Tops, T-Shirts & Shirts
        if (selectedCategoryId === "1968010031") {
            //Other (Tops, T-Shirts & Shirts)

        }
        else if (selectedCategoryId === "1968012031") {
            //Polos

        }
        else if (selectedCategoryId === "1967971031") {
            //Shirts

        }
        else if (selectedCategoryId === "1968013031") {
            //T-Shirts

        }
        else if (selectedCategoryId === "1968014031") {
            //Tanks & Camis

        }
        else if (selectedCategoryId === "1968011031") {
            //Tops

        }
        // Fashion > Girls > Clothing > Unstitched Fabrics
        if (selectedCategoryId === "5250457031") {
            //Dresses

        }
        else if (selectedCategoryId === "5250454031") {
            //Other (Unstitched Fabrics)

        }
        else if (selectedCategoryId === "5250455031") {
            //Shirts

        }
        else if (selectedCategoryId === "5250458031") {
            //Skirts

        }
        else if (selectedCategoryId === "5250456031") {
            //Trousers

        }
        // Fashion > Girls > Clothing > Winter Wear
        if (selectedCategoryId === "1967942031") {
            //Earmuffs

        }
        else if (selectedCategoryId === "1967948031") {
            //Gloves

        }


        // Fashion > Girls > Clothing > Winter Wear >Coats, Jackets & Vests
        if (selectedCategoryId === "") {
            //Coats

        }
        else if (selectedCategoryId === "") {
            //Jackets

        }
        else if (selectedCategoryId === "") {
            //Other (Coats, Jackets & Vests)

        }
        else if (selectedCategoryId === "") {
            //Vests

        }
        // Fashion > Girls > Clothing > Winter Wear > Sweaters
        if (selectedCategoryId === "") {
            //Cardigans

        }
        else if (selectedCategoryId === "") {
            //Other (Sweaters)

        }
        else if (selectedCategoryId === "") {
            //Pullovers

        }
        // Fashion > Girls > Clothing > Winter Wear > Sweatshirts & Hoodies
        if (selectedCategoryId === "") {
            //Hoodies

        }
        else if (selectedCategoryId === "") {
            //Other (Sweatshirts & Hoodies)

        }
        else if (selectedCategoryId === "") {
            //Sweatshirts

        }


    }, [selectedCategoryId])


    const [isFocused, setIsFocused] = useState(false);
    // const checboxArray = [{
    //     name: 'includedComponent1',
    //     label: 'Remote',
    //     value:"Remote"
    //   },
    //   {
    //     name: 'includedComponent2',
    //     label: 'Cover',
    //     value:"Cover"
    //   },
    //   {
    //     name: 'includedComponent3',
    //     label: 'Instruction Manual',
    //     value:"Instruction Manual"
    //   },
    //   {
    //     name: 'includedComponent4',
    //     label: 'Wheels',
    //     value:"Wheels"
    //   },
    // ]; 

    // const [inputValue, setInputValue] = React.useState('');


    const handleSetIncludedValue = () => {

    }
    return (
        <>
            {
                formComponents1 && (
                    <>
                        {/* Model Number,Warranty Description,Included Components,Is the item OEM authorized?,Number of Boxes,Item Dimensions D x W x H,Manufacturer */}
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='modelnumber'
                                rules={{
                                    required: "Modal Number is required",
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Model Number </label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="AZL20"
                                                id="modelnumber"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.modelnumber)}
                                            />
                                        </div>

                                    </>
                                )}
                            />

                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='warrantyDesc'
                                rules={{
                                    required: "warranty description is required",
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Warranty Description </label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="1 year manufacturer warranty is non-transferable and valid for 1 year from the original date of purchase."
                                                id="warrantyDesc"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.warrantyDesc)}
                                            />
                                        </div>

                                    </>
                                )}
                            />

                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name="includedComponent"
                                rules={{
                                    required: "This field is required",
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Included Components</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="1 year manufacturer."
                                                id="includedComponent"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                onFocus={() => setIsFocused(true)}
                                                onBlur={() => setIsFocused(false)}
                                                error={Boolean(errors.includedComponent)}
                                            />
                                            {errors.inputValue && <p>{errors.inputValue.message}</p>}

                                            {isFocused && (
                                                <ul>
                                                    <li onClick={handleSetIncludedValue} value="remote">remote</li>
                                                    <li>cover</li>
                                                    <li>wheels</li>
                                                </ul>
                                            )}
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name="itemOEMauth"
                                rules={{
                                    required: "This field  is required",
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2"> Is the item OEM authorized?</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                id="itemOEMauth-select"
                                                variant="outlined"
                                                select
                                                style={{ width: "100%" }}
                                                placeholder="women"
                                                {...field}
                                                error={Boolean(errors.itemOEMauth)}

                                            >
                                                <MenuItem value="">-Select-</MenuItem>
                                                <MenuItem value="Yes">Yes</MenuItem>
                                                <MenuItem value="No">No</MenuItem>

                                            </TextField>
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='numberofBoxes'
                                rules={{
                                    required: "this field is required",
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2"> Number of Boxes </label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="5"
                                                id="numberofBoxes"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.numberofBoxes)}
                                            />
                                        </div>

                                    </>
                                )}
                            />
                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                <label className='labelbold'>Item Dimensions D x W x H</label>
                            </div>
                            <div className="col-8 col-sm-7 col-lg-6">
                                <div>
                                    <div className='row align-items-end'>
                                        <Controller
                                            control={control}
                                            name='itemDepthfrontToback'
                                            rules={{
                                                required: "this field is required",
                                                pattern: {
                                                    value: new RegExp('^[0-9]+$'),
                                                    message: "not a valid formate"
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-12 col-sm-6">
                                                        <div className='d-flex flex-column' style={{ width: "100%" }}>
                                                            <label className="labelbold me-2">Item Depth Front To Back</label>
                                                            <TextField
                                                                placeholder="30"
                                                                id="itemDepthfrontToback"
                                                                variant="outlined"
                                                                {...field}

                                                                error={Boolean(errors.itemDepthfrontToback)}
                                                            />
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        />
                                        <Controller
                                            control={control}
                                            name='itemDepthfrontTobackUnit'
                                            rules={{
                                                required: "this is required"
                                            }}
                                            render={({ field }) => (
                                                <>

                                                    <div className="col-12 col-sm-6">
                                                        <TextField
                                                            id="itemDepthfrontTobackUnit"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            {...field}
                                                            error={Boolean(errors.itemDepthfrontTobackUnit)}
                                                        >
                                                            <MenuItem value="">-Select-</MenuItem>
                                                            <MenuItem value="New">Centimeters</MenuItem>
                                                        </TextField>
                                                    </div>
                                                </>
                                            )}

                                        />

                                    </div>
                                    <div className='row align-items-end'>
                                        <Controller
                                            control={control}
                                            name='itemWidthsideToside'
                                            rules={{
                                                required: "this field is required",
                                                pattern: {
                                                    value: new RegExp('^[0-9]+$'),
                                                    message: "not a valid formate"
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-12 col-sm-6">
                                                        <div className='d-flex flex-column' style={{ width: "100%" }}>
                                                            <label className="labelbold me-2">Item Width Side to Side</label>
                                                            <TextField
                                                                placeholder="25"
                                                                id="itemWidthsideToside"
                                                                variant="outlined"
                                                                {...field}
                                                                error={Boolean(errors.itemWidthsideToside)}
                                                            />
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        />
                                        <Controller
                                            control={control}
                                            name='itemWidthsideTosideUnit'
                                            rules={{
                                                required: "this field is required"
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-12 col-sm-6">
                                                        <TextField
                                                            id="itemWidthsideTosideUnit"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            {...field}
                                                            error={Boolean(errors.itemWidthsideTosideUnit)}
                                                        >
                                                            <MenuItem value="">-Select-</MenuItem>
                                                            <MenuItem value="New">Centimeters</MenuItem>
                                                        </TextField>
                                                    </div>
                                                </>
                                            )}
                                        />
                                    </div>
                                    <div className='row align-items-end'>
                                        <Controller
                                            control={control}
                                            name='itemHeightbaseTotop'
                                            rules={{
                                                required: "this field is required",
                                                pattern: {
                                                    value: new RegExp('^[0-9]+$'),
                                                    message: "not a valid formate"
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-12 col-sm-6">
                                                        <div className='d-flex flex-column' style={{ width: "100%" }}>
                                                            <label className="labelbold me-2">Height Base to Top</label>
                                                            <TextField
                                                                placeholder="80"
                                                                id="itemHeightbaseTotop"
                                                                variant="outlined"
                                                                {...field}

                                                                error={Boolean(errors.itemHeightbaseTotop)}
                                                            />
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        />
                                        <Controller
                                            control={control}
                                            name='itemHeightbaseTotopUnit'
                                            rules={{
                                                required: "this field is required"
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-12 col-sm-6">
                                                        <TextField
                                                            id="itemHeightbaseTotopUnit"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            {...field}
                                                            error={Boolean(errors.itemHeightbaseTotopUnit)}
                                                        >
                                                            <MenuItem value="">-Select-</MenuItem>
                                                            <MenuItem value="New">Centimeters</MenuItem>

                                                        </TextField>
                                                    </div>
                                                </>
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='itemManufacturer'
                                rules={{
                                    required: "this field is required",
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Manufacturer</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="XYZ Pvt Ltd"
                                                id="itemManufacturer"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.itemManufacturer)}
                                            />
                                        </div>

                                    </>
                                )}
                            />

                        </div>
                    </>
                )
            }

            {
                (formComponents2) && (
                    <>

                        {/* Model,Number of Items,Unit Count,Unit Count Type,Product Care Instructions,Contains Liquid Contents?,Is Assembly Required,Number of Pieces,Included Components,Size,Color,Color Map,Material Type,Number of Boxes,Manufacturer,Item Dimensions D x W x H */}

                        <div className="row">
                            <Controller
                                control={control}
                                name='modelname'
                                rules={{
                                    required: "this field is required",
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">model</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="model"
                                                id="modelname"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.modelname)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='numberofitems'
                                rules={{
                                    required: "Number of Items is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "value is invalid"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Number of Items</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="1"
                                                id="numberofitems"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.numberofitems)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='unitCount'
                                rules={{
                                    required: "this field is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "value is invalid"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Unit Count</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="12"
                                                id="unitCount"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.unitCount)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name="unitCountType"
                                rules={{
                                    required: "this field is required",
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Unit Count Type</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                id="unitCountType-select"
                                                variant="outlined"
                                                select
                                                style={{ width: "100%" }}
                                                placeholder="women"
                                                {...field}
                                                error={Boolean(errors.unitCountType)}

                                            >
                                                <MenuItem value="">-Select-</MenuItem>
                                                <MenuItem value="Women">Meters</MenuItem>
                                                <MenuItem value="Unisex Children">Pouch</MenuItem>
                                                <MenuItem value="Men">Grams</MenuItem>
                                                <MenuItem value="Boys">Liters</MenuItem>
                                                <MenuItem value="Girls">Mililiters</MenuItem>
                                                <MenuItem value="Set">Set</MenuItem>
                                                <MenuItem value="Kilograms">Kilograms</MenuItem>
                                                <MenuItem value="Count">Count</MenuItem>
                                                <MenuItem value="Square Meters">Square Meters</MenuItem>
                                                <MenuItem value="Case">Case</MenuItem>
                                                <MenuItem value="Feet">Feet</MenuItem>
                                                <MenuItem value="Can">Can</MenuItem>
                                                <MenuItem value="Pounds">Pounds</MenuItem>
                                                <MenuItem value="Piece">Piece</MenuItem>
                                                <MenuItem value="Ounce">Ounce</MenuItem>
                                                <MenuItem value="Pint">Pint</MenuItem>
                                                <MenuItem value="Pack">Pack</MenuItem>
                                                <MenuItem value="Square feet">Square feet</MenuItem>
                                                <MenuItem value="Fluid Ounces">Fluid Ounces</MenuItem>
                                            </TextField>
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productCareInstruction'
                                rules={{
                                    required: "this field is required",

                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Product Care Instructions</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="Dry clean only"
                                                id="productCareInstruction"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.productCareInstruction)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name="containsliquidcontent"
                                rules={{
                                    required: "Contains liquid content is required",
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Contains Liquid Contents?</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                id="containsliquidcontent-select"
                                                variant="outlined"
                                                select
                                                style={{ width: "100%" }}
                                                placeholder="select"
                                                {...field}
                                                error={Boolean(errors.containsliquidcontent)}
                                            >
                                                <MenuItem value="">-Select-</MenuItem>
                                                <MenuItem value="Yes">Yes</MenuItem>
                                                <MenuItem value="No">No</MenuItem>
                                            </TextField>
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name="assemblyRequired"
                                rules={{
                                    required: "this field is required",
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Is Assembly Required</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                id="assemblyRequired-select"
                                                variant="outlined"
                                                select
                                                style={{ width: "100%" }}
                                                placeholder="select"
                                                {...field}
                                                error={Boolean(errors.assemblyRequired)}
                                            >
                                                <MenuItem value="">-Select-</MenuItem>
                                                <MenuItem value="Yes">Yes</MenuItem>
                                                <MenuItem value="No">No</MenuItem>
                                            </TextField>
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='numberofPieces'
                                rules={{
                                    required: "this field is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "value is invalid"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Number of Pieces</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="5"
                                                id="numberofPieces"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.numberofPieces)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                <label className="labelbold me-2">Included Components</label>
                            </div>
                            <div className="col-8 col-sm-7 col-lg-6"></div>

                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSize'
                                rules={{
                                    required: "this field is required",

                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Size</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder=""
                                                id="productSize"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.productSize)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productColor'
                                rules={{
                                    required: "this field is required",

                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Color</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder=""
                                                id="productColor"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.productColor)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name="productColorMap"
                                rules={{
                                    required: "this field is required",
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Color Map</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                id="productColorMap-select"
                                                variant="outlined"
                                                select
                                                style={{ width: "100%" }}
                                                placeholder="select"
                                                {...field}
                                                error={Boolean(errors.productColorMap)}
                                            >
                                                <MenuItem value="">-Select-</MenuItem>
                                                <MenuItem value="Bronze">Bronze</MenuItem>
                                                <MenuItem value="Brown">Brown</MenuItem>
                                                <MenuItem value="Gold">Gold</MenuItem>
                                                <MenuItem value="Blue">Blue</MenuItem>
                                                <MenuItem value="Multicolor">Multicolor</MenuItem>
                                                <MenuItem value="Black">Black</MenuItem>
                                                <MenuItem value="Orange">Orange</MenuItem>
                                                <MenuItem value="Clear">Clear</MenuItem>
                                                <MenuItem value="Red">Red</MenuItem>
                                                <MenuItem value="Silver">Silver</MenuItem>
                                                <MenuItem value="Pink">Pink</MenuItem>
                                                <MenuItem value="White">White</MenuItem>
                                                <MenuItem value="Metalic">Metalic</MenuItem>
                                                <MenuItem value="Beige">Beige</MenuItem>
                                                <MenuItem value="Purple">Purple</MenuItem>
                                                <MenuItem value="Yellow">Yellow</MenuItem>
                                                <MenuItem value="Turquoise">Turquoise</MenuItem>
                                                <MenuItem value="Green">Green</MenuItem>
                                                <MenuItem value="Grey">Grey</MenuItem>
                                                <MenuItem value="Offwhite">Offwhite</MenuItem>
                                            </TextField>
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name="materialType"
                                rules={{
                                    required: "this field is required",
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Material Type</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                id="materialType-select"
                                                variant="outlined"
                                                select
                                                style={{ width: "100%" }}
                                                placeholder="select"
                                                {...field}
                                                error={Boolean(errors.materialType)}
                                            >
                                                <MenuItem value="">-Select-</MenuItem>
                                                <MenuItem value="Nylon">Nylon</MenuItem>
                                                <MenuItem value="Aluminum">Aluminum</MenuItem>
                                                <MenuItem value="Solid Gold">Solid Gold</MenuItem>
                                                <MenuItem value="Cedar">Cedar</MenuItem>
                                                <MenuItem value="Stone">Stone</MenuItem>
                                                <MenuItem value="Porcelain">Porcelain</MenuItem>
                                                <MenuItem value="Porcelain Bone China">Porcelain Bone China</MenuItem>
                                                <MenuItem value="Pewter">Pewter</MenuItem>
                                                <MenuItem value="Stainless Steel">Stainless Steel</MenuItem>
                                                <MenuItem value="Teracotta">Teracotta</MenuItem>
                                                <MenuItem value="Neoprene">Neoprene</MenuItem>
                                                <MenuItem value="Copper">Copper</MenuItem>
                                                <MenuItem value="Polycarbonate">Polycarbonate</MenuItem>
                                                <MenuItem value="Recycled">Recycled</MenuItem>
                                                <MenuItem value="Bronze">Bronze</MenuItem>
                                                <MenuItem value="Clay">Clay</MenuItem>
                                                <MenuItem value="Elmwood">Elmwood</MenuItem>
                                                <MenuItem value="Polyester">Polyester</MenuItem>
                                                <MenuItem value="Hard-Anodized Aluminum">Hard-Anodized Aluminum</MenuItem>
                                                <MenuItem value="Leaded Crystal">Leaded Crystal</MenuItem>
                                                <MenuItem value="Silicone">Silicone</MenuItem>
                                                <MenuItem value="Cherrywood">Cherrywood</MenuItem>
                                                <MenuItem value="Marble">Marble</MenuItem>
                                                <MenuItem value="Nonstick">Nonstick</MenuItem>
                                                <MenuItem value="Silver">Silver</MenuItem>
                                                <MenuItem value="Pine">Pine</MenuItem>
                                                <MenuItem value="Oak">Oak</MenuItem>
                                                <MenuItem value="Non-Leaded Crystal">Non-Leaded Crystal</MenuItem>
                                                <MenuItem value="Bamboo">Bamboo</MenuItem>
                                                <MenuItem value="Fabric">Fabric</MenuItem>
                                                <MenuItem value="Acrylic">Acrylic</MenuItem>
                                                <MenuItem value="Crystal">Crystal</MenuItem>
                                                <MenuItem value="Silver-Plated">Silver-Plated</MenuItem>
                                                <MenuItem value="Synthetic">Synthetic</MenuItem>
                                                <MenuItem value="Birch">Birch</MenuItem>
                                                <MenuItem value="18/8 Steel">18/8 Steel</MenuItem>
                                                <MenuItem value="Beechwood">Beechwood</MenuItem>
                                                <MenuItem value="Stoneware">Stoneware</MenuItem>
                                                <MenuItem value="Brass">Brass</MenuItem>
                                                <MenuItem value="Multi-ply">Multi-ply</MenuItem>
                                                <MenuItem value="Glass">Glass</MenuItem>
                                                <MenuItem value="Leather">Leather</MenuItem>
                                                <MenuItem value="Iron">Iron</MenuItem>
                                                <MenuItem value="Plastic">Plastic</MenuItem>
                                                <MenuItem value="Cotton">Cotton</MenuItem>
                                                <MenuItem value="Paraffin">Paraffin</MenuItem>
                                                <MenuItem value="Polyresin">Polyresin</MenuItem>
                                                <MenuItem value="Wax">Wax</MenuItem>
                                                <MenuItem value="Bone China">Bone China</MenuItem>
                                                <MenuItem value="Platinume">Platinume</MenuItem>
                                                <MenuItem value="Chrome">Chrome</MenuItem>
                                                <MenuItem value="Mahogany">Mahogany</MenuItem>
                                                <MenuItem value="Olive Wood">Olive Wood</MenuItem>
                                                <MenuItem value="18/10 Steel">18/10 Steel</MenuItem>
                                                <MenuItem value="Rubber">Rubber</MenuItem>
                                                <MenuItem value="Teak">Teak</MenuItem>
                                                <MenuItem value="Maple">Maple</MenuItem>
                                                <MenuItem value="Acrylic Coated Cotton">Acrylic Coated Cotton</MenuItem>
                                                <MenuItem value="Rosewood">Rosewood</MenuItem>
                                                <MenuItem value="Cork">Cork</MenuItem>
                                                <MenuItem value="Melamine">Melamine</MenuItem>
                                                <MenuItem value="Gilded Gold">Gilded Gold</MenuItem>
                                                <MenuItem value="HardWood">HardWood</MenuItem>
                                                <MenuItem value="Steel">Steel</MenuItem>
                                                <MenuItem value="Carbon">Carbon</MenuItem>
                                                <MenuItem value="Zinc">Zinc</MenuItem>
                                                <MenuItem value="Earthenware">Earthenware</MenuItem>
                                                <MenuItem value="Chromium Steel">Chromium Steel</MenuItem>
                                                <MenuItem value="Walnut">Walnut</MenuItem>
                                                <MenuItem value="Cast Iron">Cast Iron</MenuItem>
                                                <MenuItem value="Rattan & Wicker">Rattan & Wicker</MenuItem>
                                                <MenuItem value="Tin">Tin</MenuItem>
                                                <MenuItem value="Ceramic">Ceramic</MenuItem>
                                                <MenuItem value="Paper">Paper</MenuItem>
                                                <MenuItem value="Tritan">Tritan</MenuItem>
                                                <MenuItem value="Nickel">Nickel</MenuItem>
                                                <MenuItem value="Polycast">Polycast</MenuItem>
                                                <MenuItem value="Other">Other</MenuItem>
                                            </TextField>
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='numberofBoxes'
                                rules={{
                                    required: "this field is required",
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2"> Number of Boxes </label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="5"
                                                id="numberofBoxes"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.numberofBoxes)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                <label className='labelbold'>Item Dimensions D x W x H</label>
                            </div>
                            <div className="col-8 col-sm-7 col-lg-6">

                                <div className='row align-items-end'>
                                    <Controller
                                        control={control}
                                        name='itemDepthfrontToback'
                                        rules={{
                                            required: "this field is required",
                                            pattern: {
                                                value: new RegExp('^[0-9]+$'),
                                                message: "not a valid formate"
                                            }
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-12 col-sm-6 col-lg-6">
                                                    <label className="labelbold me-2">Item Depth Front To Back</label>
                                                    <TextField
                                                        placeholder="30"
                                                        id="itemDepthfrontToback"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.itemDepthfrontToback)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                    <Controller
                                        control={control}
                                        name='itemDepthfrontTobackUnit'
                                        rules={{
                                            required: "this is required"
                                        }}
                                        render={({ field }) => (
                                            <>

                                                <div className="col-12 col-sm-6 col-lg-6">
                                                    <TextField
                                                        id="itemDepthfrontTobackUnit"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        {...field}
                                                        error={Boolean(errors.itemDepthfrontTobackUnit)}
                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="New">Centimeters</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}

                                    />

                                </div>
                                <div className='row align-items-end'>
                                    <Controller
                                        control={control}
                                        name='itemWidthsideToside'
                                        rules={{
                                            required: "this field is required",
                                            pattern: {
                                                value: new RegExp('^[0-9]+$'),
                                                message: "not a valid formate"
                                            }
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-12 col-sm-6 col-lg-6">
                                                    <label className="labelbold me-2">Item Width Side to Side</label>
                                                    <TextField
                                                        placeholder="25"
                                                        id="itemWidthsideToside"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.itemWidthsideToside)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                    <Controller
                                        control={control}
                                        name='itemWidthsideTosideUnit'
                                        rules={{
                                            required: "this field is required"
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-12 col-sm-6 col-lg-6">
                                                    <TextField
                                                        id="itemWidthsideTosideUnit"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        {...field}
                                                        error={Boolean(errors.itemWidthsideTosideUnit)}
                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="New">Centimeters</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className='row align-items-end'>
                                    <Controller
                                        control={control}
                                        name='itemHeightbaseTotop'
                                        rules={{
                                            required: "this field is required",
                                            pattern: {
                                                value: new RegExp('^[0-9]+$'),
                                                message: "not a valid formate"
                                            }
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-12 col-sm-6 col-lg-6">
                                                    <label className="labelbold me-2">Height Base to Top</label>
                                                    <TextField
                                                        placeholder="80"
                                                        id="itemHeightbaseTotop"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.itemHeightbaseTotop)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                    <Controller
                                        control={control}
                                        name='itemHeightbaseTotopUnit'
                                        rules={{
                                            required: "this field is required"
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-12 col-sm-6 col-lg-6">
                                                    <TextField
                                                        id="itemHeightbaseTotopUnit"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        {...field}
                                                        error={Boolean(errors.itemHeightbaseTotopUnit)}
                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="New">Centimeters</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                    </>)}

            {formComponents5 && (
                <>
                    {/* Target Audience,Manufacturer Part Number,Number of Items,Safety Warning,PPU Count,PPU Count Unit of Measure,Contains Liquid Contents?,Is the Item Heat Sensitive?,Item Form,Lifestyle,Skin Type,Scent,Melting Temperature (degrees Celsius) */}
                    <h5>Baby care / Bathing / Babyshop</h5>
                    <div>
                        <Controller
                            control={control}
                            name="targetAudience"
                            rules={{
                                required: "Target Audience is required",
                            }}
                            render={({ field }) => (
                                <>
                                    <div className='d-flex align-items-center mb-3'>
                                        <label className="labelbold me-2">Target Audience</label>
                                        <TextField
                                            id="targetAudience-select"
                                            variant="outlined"
                                            select
                                            style={{ width: "50%" }}
                                            placeholder="women"
                                            {...field}
                                            error={Boolean(errors.targetAudience)}

                                        >
                                            <MenuItem value="">-Select-</MenuItem>
                                            <MenuItem value="Women">Women</MenuItem>
                                            <MenuItem value="Unisex Children">Unisex Children</MenuItem>
                                            <MenuItem value="Men">Men</MenuItem>
                                            <MenuItem value="Boys">Boys</MenuItem>
                                            <MenuItem value="Girls">Girls</MenuItem>
                                            <MenuItem value="Unisex Audit">Unisex Adult</MenuItem>
                                        </TextField>
                                    </div>
                                </>
                            )}
                        />
                    </div>

                    <div>
                        <Controller
                            control={control}
                            name='manufacturepartno'
                            rules={{
                                required: "Manufacturer Part Number is required",
                            }}
                            render={({ field }) => (
                                <>
                                    <div className='d-flex align-items-center mb-3'>
                                        <label className="labelbold me-2">Manufacturer Part Number </label>
                                        <TextField
                                            placeholder="SB-122"
                                            id="manufacturepartno"
                                            variant="outlined"
                                            {...field}
                                            style={{ width: "50%" }}
                                            error={Boolean(errors.manufacturepartno)}
                                        />
                                    </div>
                                </>
                            )}
                        />

                    </div>
                    {/* <div>
                <Controller
                    control={control}
                    name="variationTheme"
                    rules={{
                        required: "Variation Theme is required",
                    }}
                    render={({ field }) => (
                        <>
                            <div className='d-flex align-items-center mb-3'>
                                <label className="labelbold me-2">Variation Theme</label>
                                <TextField
                                    id="variationTheme-select"
                                    variant="outlined"
                                    select
                                    style={{ width: "50%" }}
                                    placeholder="women"
                                    {...field}
                                    error={Boolean(errors.variationTheme)}

                                >
                                    <MenuItem value="">-Select-</MenuItem>
                                    <MenuItem value="Numberofitems">Numberofitems</MenuItem>
                                    <MenuItem value="Itemform">Itemform</MenuItem>
                                    <MenuItem value="Sizename-numberofitems">Sizename-numberofitems</MenuItem>
                                    <MenuItem value="Color">Color</MenuItem>
                                    <MenuItem value="Size-unitcount">Size-unitcount</MenuItem>
                                    <MenuItem value="Itemform-sizename">Itemform-sizename</MenuItem>
                                    <MenuItem value="ColourAndScent">Colour & Scent</MenuItem>
                                    <MenuItem value="Size-Color">Size-Color</MenuItem>
                                    <MenuItem value="Sizename-colorname-numberofitems">Sizename-colorname-numberofitems</MenuItem>
                                    <MenuItem value="Size-Scent">Size-Scent</MenuItem>
                                    <MenuItem value="SizeName">SizeName</MenuItem>
                                    <MenuItem value="colorname-numberofitems">colorname-numberofitems</MenuItem>
                                    <MenuItem value="size">size</MenuItem>
                                    <MenuItem value="Scent">Scent</MenuItem>
                                    <MenuItem value="model-sizename">model-sizename</MenuItem>
                                    <MenuItem value="model">model</MenuItem>
                                    <MenuItem value="ColorName">ColorName</MenuItem>
                                    <MenuItem value="itemweight">itemweight</MenuItem>
                                </TextField>
                            </div>
                        </>
                    )}
                />
            </div> */}
                    <div>
                        <Controller
                            control={control}
                            name='numberofitems'
                            rules={{
                                required: "Number of Items is required",
                                pattern: {
                                    value: new RegExp('^[0-9]+$'),
                                    message: "value is invalid"
                                }
                            }}
                            render={({ field }) => (
                                <>
                                    <div className='d-flex align-items-center mb-3'>
                                        <label className="labelbold me-2">Number of Items</label>
                                        <TextField
                                            placeholder="1"
                                            id="numberofitems"
                                            variant="outlined"
                                            {...field}
                                            style={{ width: "50%" }}
                                            error={Boolean(errors.numberofitems)}
                                        />
                                    </div>
                                </>
                            )}
                        />

                    </div>
                    <div>
                        <Controller
                            control={control}
                            name='safetyWarning'
                            rules={{
                                required: "safety warning is required"
                            }}
                            render={({ field }) => (
                                <>
                                    <div className='d-flex align-items-center mb-3'>
                                        <label className="labelbold me-2">Safety Warning</label>
                                        <TextField
                                            placeholder="Consult with a doctor before using this product."
                                            id="safetyWarning"
                                            variant="outlined"
                                            {...field}
                                            style={{ width: "50%" }}
                                            error={Boolean(errors.safetyWarning)}
                                        />
                                    </div>
                                </>
                            )}
                        />

                    </div>
                    <div>
                        <Controller
                            control={control}
                            name='ppuCount'
                            rules={{
                                required: "PPU Count is required",
                                pattern: {
                                    value: new RegExp('^[0-9]+$'),
                                    message: "value is invalid"
                                }
                            }}
                            render={({ field }) => (
                                <>
                                    <div className='d-flex align-items-center mb-3'>
                                        <label className="labelbold me-2">PPU Count</label>
                                        <TextField
                                            placeholder="6"
                                            id="ppuCount"
                                            variant="outlined"
                                            {...field}
                                            style={{ width: "50%" }}
                                            error={Boolean(errors.ppuCount)}
                                        />
                                    </div>
                                </>
                            )}
                        />

                    </div>
                    <div>
                        <Controller
                            control={control}
                            name="ppuCountUnit"
                            rules={{
                                required: "PPU Count Unit of Measure is required",
                            }}
                            render={({ field }) => (
                                <>
                                    <div className='d-flex align-items-center mb-3'>
                                        <label className="labelbold me-2">PPU Count Unit of Measure</label>
                                        <TextField
                                            id="ppuCountUnit-select"
                                            variant="outlined"
                                            select
                                            style={{ width: "50%" }}
                                            placeholder="women"
                                            {...field}
                                            error={Boolean(errors.ppuCountUnit)}

                                        >
                                            <MenuItem value="">-Select-</MenuItem>
                                            <MenuItem value="count">count</MenuItem>
                                            <MenuItem value="gram">gram</MenuItem>
                                            <MenuItem value="metre">metre</MenuItem>
                                            <MenuItem value="mililitre">mililitre</MenuItem>
                                            <MenuItem value="Gsquare metreirls">square metre</MenuItem>

                                        </TextField>
                                    </div>
                                </>
                            )}
                        />
                    </div>
                    <div>
                        <Controller
                            control={control}
                            name="containsliquidcontent"
                            rules={{
                                required: "Contains liquid content is required",
                            }}
                            render={({ field }) => (
                                <>
                                    <div className='d-flex align-items-center mb-3'>
                                        <label className="labelbold me-2">Contains Liquid Contents?</label>
                                        <TextField
                                            id="containsliquidcontent-select"
                                            variant="outlined"
                                            select
                                            style={{ width: "50%" }}
                                            placeholder="select"
                                            {...field}
                                            error={Boolean(errors.containsliquidcontent)}

                                        >
                                            <MenuItem value="">-Select-</MenuItem>
                                            <MenuItem value="Yes">Yes</MenuItem>
                                            <MenuItem value="No">No</MenuItem>


                                        </TextField>
                                    </div>
                                </>
                            )}
                        />
                    </div>
                    <div>
                        <Controller
                            control={control}
                            name="itemHeatSensitive"
                            rules={{
                                required: "this field is required",
                            }}
                            render={({ field }) => (
                                <>
                                    <div className='d-flex align-items-center mb-3'>
                                        <label className="labelbold me-2">Is the Item Heat Sensitive?</label>
                                        <TextField
                                            id="itemHeatSensitive-select"
                                            variant="outlined"
                                            select
                                            style={{ width: "50%" }}
                                            placeholder="select"
                                            {...field}
                                            error={Boolean(errors.itemHeatSensitive)}

                                        >
                                            <MenuItem value="">-Select-</MenuItem>
                                            <MenuItem value="Yes">Yes</MenuItem>
                                            <MenuItem value="No">No</MenuItem>


                                        </TextField>
                                    </div>
                                </>
                            )}
                        />
                    </div>
                    <div>
                        <Controller
                            control={control}
                            name="itemForm"
                            rules={{
                                required: "this field is required",
                            }}
                            render={({ field }) => (
                                <>
                                    <div className='d-flex align-items-center mb-3'>
                                        <label className="labelbold me-2">Item Form</label>
                                        <TextField
                                            id="itemForm-select"
                                            variant="outlined"
                                            select
                                            style={{ width: "50%" }}
                                            placeholder="Cream"
                                            {...field}
                                            error={Boolean(errors.itemForm)}

                                        >
                                            <MenuItem value="">-Select-</MenuItem>
                                            <MenuItem value="Bar">Bar</MenuItem>
                                            <MenuItem value="Cream">Cream</MenuItem>
                                            <MenuItem value="Gel">Gel</MenuItem>
                                            <MenuItem value="Paste">Paste</MenuItem>
                                            <MenuItem value="Lotion">Lotion</MenuItem>
                                            <MenuItem value="Mousse">Mousse</MenuItem>
                                            <MenuItem value="Oil">Oil</MenuItem>
                                            <MenuItem value="Serum">Serum</MenuItem>
                                            <MenuItem value="Flake">Flake</MenuItem>
                                            <MenuItem value="Blam">Blam</MenuItem>
                                            <MenuItem value="Powder">Powder</MenuItem>
                                            <MenuItem value="Wipe">Wipe</MenuItem>
                                            <MenuItem value="Capsule">Capsule</MenuItem>
                                            <MenuItem value="Aerosol">Aerosol</MenuItem>


                                        </TextField>
                                    </div>
                                </>
                            )}
                        />
                    </div>
                    <div>
                        <Controller
                            control={control}
                            name="lifestyle"
                            rules={{
                                required: "this field is required",
                            }}
                            render={({ field }) => (
                                <>
                                    <div className='d-flex align-items-center mb-3'>
                                        <label className="labelbold me-2">Lifestyle</label>
                                        <TextField
                                            id="lifestyle-select"
                                            variant="outlined"
                                            select
                                            style={{ width: "50%" }}
                                            placeholder="Mass Beauty,Premium Beauty"
                                            {...field}
                                            error={Boolean(errors.lifestyle)}

                                        >
                                            <MenuItem value="">-Select-</MenuItem>
                                            <MenuItem value="Premium-Beauty">Premium Beauty</MenuItem>
                                            <MenuItem value="Mass-Beauty">Mass Beauty</MenuItem>
                                        </TextField>
                                    </div>
                                </>
                            )}
                        />
                    </div>
                    <div>
                        <Controller
                            control={control}
                            name="skinType"
                            rules={{
                                required: "this field is required",
                            }}
                            render={({ field }) => (
                                <>
                                    <div className='d-flex align-items-center mb-3'>
                                        <label className="labelbold me-2">Skin Type</label>
                                        <TextField
                                            id="skinType-select"
                                            variant="outlined"
                                            select
                                            style={{ width: "50%" }}
                                            placeholder="Sensitive"
                                            {...field}
                                            error={Boolean(errors.skinType)}

                                        >
                                            <MenuItem value="">-Select-</MenuItem>
                                            <MenuItem value="All">All</MenuItem>
                                            <MenuItem value="Oily">Oily</MenuItem>
                                            <MenuItem value="Combination">Combination</MenuItem>
                                            <MenuItem value="Sensitive">Sensitive</MenuItem>
                                            <MenuItem value="Dry">Dry</MenuItem>
                                            <MenuItem value="Normal">Normal</MenuItem>
                                        </TextField>
                                    </div>
                                </>
                            )}
                        />
                    </div>
                    <div>
                        <Controller
                            control={control}
                            name="scent"
                            rules={{
                                required: "this field is required",
                            }}
                            render={({ field }) => (
                                <>
                                    <div className='d-flex align-items-center mb-3'>
                                        <label className="labelbold me-2">Scent</label>
                                        <TextField
                                            id="scent-select"
                                            variant="outlined"
                                            select
                                            style={{ width: "50%" }}
                                            placeholder="Musk"
                                            {...field}
                                            error={Boolean(errors.scent)}

                                        >
                                            <MenuItem value="">-Select-</MenuItem>
                                            <MenuItem value="Orchid">Orchid</MenuItem>
                                            <MenuItem value="Fresh">Fresh</MenuItem>
                                            <MenuItem value="Passion Fruit">Passion Fruit</MenuItem>
                                            <MenuItem value="Amber">Amber</MenuItem>
                                            <MenuItem value="Cherry">Cherry</MenuItem>
                                            <MenuItem value="Musk">Musk</MenuItem>
                                            <MenuItem value="Apricot">Apricot</MenuItem>
                                            <MenuItem value="Honeysuckel">Honeysuckel</MenuItem>
                                            <MenuItem value="Ginger">Ginger</MenuItem>
                                            <MenuItem value="Cedar">Cedar</MenuItem>
                                            <MenuItem value="Lemon">Lemon</MenuItem>
                                            <MenuItem value="Orange">Orange</MenuItem>
                                            <MenuItem value="Blueberry">Blueberry</MenuItem>
                                            <MenuItem value="Strawberry">Strawberry</MenuItem>
                                            <MenuItem value="Geranium">Geranium</MenuItem>
                                            <MenuItem value="Neem">Neem</MenuItem>
                                            <MenuItem value="Verbena">Verbena</MenuItem>
                                            <MenuItem value="Pomegranate">Pomegranate</MenuItem>
                                            <MenuItem value="Oat Blossom">Oat Blossom</MenuItem>
                                            <MenuItem value="Oriental">Oriental</MenuItem>
                                            <MenuItem value="Pear">Pear</MenuItem>
                                            <MenuItem value="Mint">Mint</MenuItem>
                                            <MenuItem value="Peppermint">Peppermint</MenuItem>
                                            <MenuItem value="Coriander">Coriander</MenuItem>
                                            <MenuItem value="Magnolia">Magnolia</MenuItem>
                                            <MenuItem value="Ylang Ylang">Ylang Ylang</MenuItem>
                                            <MenuItem value="Bergamot">Bergamot</MenuItem>
                                            <MenuItem value="Cantaloupe">Cantaloupe</MenuItem>
                                            <MenuItem value="Banana">Banana</MenuItem>
                                            <MenuItem value="Cranberry">Cranberry</MenuItem>
                                            <MenuItem value="Honey">Honey</MenuItem>
                                            <MenuItem value="Starfruit">Starfruit</MenuItem>
                                            <MenuItem value="Tobacco">Tobacco</MenuItem>
                                            <MenuItem value="Almond">Almond</MenuItem>
                                            <MenuItem value="Pine">Pine</MenuItem>
                                            <MenuItem value="Unscented">Unscented</MenuItem>
                                            <MenuItem value="Rosemary">Rosemary</MenuItem>
                                            <MenuItem value="Parsley">Parsley</MenuItem>
                                            <MenuItem value="Cucumber">Cucumber</MenuItem>
                                            <MenuItem value="Cherry Blossom">Cherry Blossom</MenuItem>
                                            <MenuItem value="Papaya">Papaya</MenuItem>
                                            <MenuItem value="Vanilla">Vanilla</MenuItem>
                                            <MenuItem value="Coconut">Coconut</MenuItem>
                                            <MenuItem value="Peach">Peach</MenuItem>
                                            <MenuItem value="Tea Tree">Tea Tree</MenuItem>
                                            <MenuItem value="Mango">Mango</MenuItem>
                                            <MenuItem value="Rose">Rose</MenuItem>
                                            <MenuItem value="Coffee">Coffee</MenuItem>
                                            <MenuItem value="Lily">Lily</MenuItem>
                                            <MenuItem value="Eucalyptus">Eucalyptus</MenuItem>
                                            <MenuItem value="Lavender">Lavender</MenuItem>
                                            <MenuItem value="Myrhh">Myrhh</MenuItem>
                                            <MenuItem value="Peony">Peony</MenuItem>
                                            <MenuItem value="Lemongrass">Lemongrass</MenuItem>
                                            <MenuItem value="Aquatic">Aquatic</MenuItem>
                                            <MenuItem value="Jasmine">Jasmine</MenuItem>
                                            <MenuItem value="Basil">Basil</MenuItem>
                                            <MenuItem value="Grapefruit">Grapefruit</MenuItem>
                                            <MenuItem value="Pineapple">Pineapple</MenuItem>
                                            <MenuItem value="Vetiver">Vetiver</MenuItem>
                                            <MenuItem value="Chamomile">Chamomile</MenuItem>
                                            <MenuItem value="Bay Rum">Bay Rum</MenuItem>
                                            <MenuItem value="Guava">Guava</MenuItem>
                                            <MenuItem value="Sandalwood">Sandalwood</MenuItem>
                                            <MenuItem value="Watermelon">Watermelon</MenuItem>
                                            <MenuItem value="Chocolate">Chocolate</MenuItem>
                                            <MenuItem value="Aloe Vera">Aloe Vera</MenuItem>
                                            <MenuItem value="Sage">Sage</MenuItem>
                                            <MenuItem value="Frankincense">Frankincense</MenuItem>
                                            <MenuItem value="Thyme">Thyme</MenuItem>
                                            <MenuItem value="Patchouli">Patchouli</MenuItem>
                                            <MenuItem value="Citrus">Citrus</MenuItem>
                                            <MenuItem value="Turmeric">Turmeric</MenuItem>
                                            <MenuItem value="Kiwi">Kiwi</MenuItem>
                                            <MenuItem value="Green Apple">Green Apple</MenuItem>
                                            <MenuItem value="Cypress">Cypress</MenuItem>
                                            <MenuItem value="Tangerine">Tangerine</MenuItem>
                                            <MenuItem value="Raspberry">Raspberry</MenuItem>
                                            <MenuItem value="Carnation">Carnation</MenuItem>
                                        </TextField>
                                    </div>
                                </>
                            )}
                        />
                    </div>
                    <div>
                        <Controller
                            control={control}
                            name='meltingTemperature'
                            rules={{
                                required: "This field is required",
                                max: {
                                    value: 1100,
                                    message: "The value in this field exceeds the maximum quantity allowed: 1100"
                                }

                            }}
                            render={({ field }) => (
                                <>
                                    <div className='d-flex align-items-center mb-3'>
                                        <label className="labelbold me-2">Melting Temperature (degrees Celsius)</label>
                                        <TextField
                                            placeholder="100,200"
                                            id="meltingTemperature"
                                            variant="outlined"
                                            {...field}
                                            style={{ width: "50%" }}
                                            error={Boolean(errors.meltingTemperature)}
                                        />
                                        {Boolean(errors.meltingTemperature) && (
                                            <div className="error-message mt-1 mt-lg-0">
                                                {errors.meltingTemperature.message}
                                            </div>
                                        )}
                                    </div>
                                </>
                            )}
                        />

                    </div>
                    <div>
                        <Controller
                            control={control}
                            name="meltingTemperatureUnit"
                            rules={{
                                required: "this field is required",
                            }}
                            render={({ field }) => (
                                <>
                                    <div className='d-flex align-items-center mb-3'>

                                        <TextField
                                            id="meltingTemperatureUnit-select"
                                            variant="outlined"
                                            select
                                            style={{ width: "50%" }}
                                            placeholder="Sensitive"
                                            {...field}
                                            error={Boolean(errors.meltingTemperatureUnit)}

                                        >
                                            <MenuItem value="">-Select-</MenuItem>
                                            <MenuItem value="degrees_fahrenheit">degrees_fahrenheit</MenuItem>
                                            <MenuItem value="Kelvin">Kelvin</MenuItem>
                                            <MenuItem value="degrees_celsius">degrees_celsius</MenuItem>

                                        </TextField>
                                    </div>
                                </>
                            )}
                        />
                    </div>
                    {/* <div>
                <Controller
                    control={control}
                    name='size'
                    rules={{
                        required: "This field is required",
                     
                    }}
                    render={({ field }) => (
                        <>
                            <div className='d-flex align-items-center mb-3'>
                                <label className="labelbold me-2">Size</label>
                                <TextField
                                    placeholder="6"
                                    id="ppuCount"
                                    variant="outlined"
                                    {...field}
                                    style={{ width: "50%" }}
                                    error={Boolean(errors.ppuCount)}
                                />
                            </div>
                        </>
                    )}
                />

            </div> */}
                </>
            )
            }

            {formComponents6 && (
                <>
                    {/* Artist,Artwork Medium,Date,Framed,Sale Type */}
                    <h5>Fine Art/
                        Drawing/
                        Chalk Drawings</h5>
                    <div className="row">
                        <Controller
                            control={control}
                            name='artistName'
                            rules={{
                                required: "artist Name is required"
                            }}
                            render={({ field }) => (
                                <>

                                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                                        <label className="labelbold me-2">Artist</label>
                                    </div>
                                    <div className="col-8 col-sm-7 col-lg-6">
                                        <TextField
                                            placeholder="Artist"
                                            id="artistName"
                                            variant="outlined"
                                            {...field}
                                            style={{ width: "100%" }}
                                            error={Boolean(errors.artistName)}
                                        />
                                    </div>

                                </>
                            )}
                        />

                    </div>
                    <div className="row" style={{ marginTop: "10px" }}>
                        <Controller
                            control={control}
                            name="artworkMedium"
                            rules={{
                                required: "artworkMedium is required",
                            }}
                            render={({ field }) => (
                                <>
                                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                                        <label className="labelbold me-2">Artwork Medium</label>
                                    </div>
                                    <div className="col-8 col-sm-7 col-lg-6">
                                        <TextField
                                            id="artworkMedium-select"
                                            variant="outlined"
                                            select
                                            style={{ width: "100%" }}
                                            placeholder="Oil"
                                            {...field}
                                            error={Boolean(errors.artworkMedium)}

                                        >
                                            <MenuItem value="">-Select-</MenuItem>
                                            <MenuItem value="Encaustic">Encaustic</MenuItem>
                                            <MenuItem value="Textile">Textile</MenuItem>
                                            <MenuItem value="Ink">Ink</MenuItem>
                                            <MenuItem value="Pastel">Pastel</MenuItem>
                                            <MenuItem value="Drypoint">Drypoint</MenuItem>
                                        </TextField>
                                    </div>

                                </>
                            )}
                        />
                    </div>
                    <div className="row" style={{ marginTop: "10px" }}>
                        <Controller
                            control={control}
                            name='productDate'
                            rules={{
                                required: "productDate is required",
                                pattern: {
                                    value: new RegExp('^[0-9]+$'),
                                    message: "not a valid formate"
                                }
                            }}
                            render={({ field }) => (
                                <>
                                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                                        <label className="labelbold me-2">Date</label>
                                    </div>
                                    <div className="col-8 col-sm-7 col-lg-6">
                                        <TextField
                                            placeholder="1998"
                                            id="productDate"
                                            variant="outlined"
                                            {...field}
                                            style={{ width: "100%" }}
                                            error={Boolean(errors.productDate)}
                                        />
                                    </div>
                                </>
                            )}
                        />

                    </div>
                    <div className="row" style={{ marginTop: "10px" }}>
                        <Controller
                            control={control}
                            name="productFramed"
                            rules={{
                                required: "productFramed is required",
                            }}
                            render={({ field }) => (
                                <>
                                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                                        <label className="labelbold me-2">Framed</label>
                                    </div>
                                    <div className="col-8 col-sm-7 col-lg-6">
                                        <TextField
                                            id="productFramed-select"
                                            variant="outlined"
                                            select
                                            style={{ width: "100%" }}
                                            placeholder="Oil"
                                            {...field}
                                            error={Boolean(errors.productFramed)}

                                        >
                                            <MenuItem value="">-Select-</MenuItem>
                                            <MenuItem value="Yes">Yes</MenuItem>
                                            <MenuItem value="No">No</MenuItem>

                                        </TextField>
                                    </div>
                                </>
                            )}
                        />
                    </div>
                    <div className="row" style={{ marginTop: "10px" }}>
                        <Controller
                            control={control}
                            name="productSaleType"
                            rules={{
                                required: "productSaleType is required",
                            }}
                            render={({ field }) => (
                                <>
                                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                                        <label className="labelbold me-2">Sale Type</label>
                                    </div>
                                    <div className="col-8 col-sm-7 col-lg-6">
                                        <TextField
                                            id="productSaleType-select"
                                            variant="outlined"
                                            select
                                            style={{ width: "100%" }}
                                            placeholder="Oil"
                                            {...field}
                                            error={Boolean(errors.productSaleType)}

                                        >

                                            <MenuItem value="Primary">Primary</MenuItem>
                                            <MenuItem value="Secondary">Secondary</MenuItem>

                                        </TextField>
                                    </div>

                                </>
                            )}
                        />
                    </div>
                </>
            )}
            {
                (formComponents3) && (
                    <div>
                        {/* model,Number of Items,Item Dimensions D x W x H,Included Components,Size,Material Type */}
                        <div>
                            <Controller
                                control={control}
                                name='modelname'
                                rules={{
                                    required: "this field is required",
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className='d-flex align-items-center my-3'>
                                            <label className="labelbold me-2">model</label>
                                            <TextField
                                                placeholder="model"
                                                id="modelname"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "50%" }}
                                                error={Boolean(errors.modelname)}
                                            />
                                        </div>
                                    </>
                                )}
                            />

                        </div>
                        <div>
                            <Controller
                                control={control}
                                name='numberofitems'
                                rules={{
                                    required: "Number of Items is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "value is invalid"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className='d-flex align-items-center mb-3'>
                                            <label className="labelbold me-2">Number of Items</label>
                                            <TextField
                                                placeholder="1"
                                                id="numberofitems"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "50%" }}
                                                error={Boolean(errors.numberofitems)}
                                            />
                                        </div>
                                    </>
                                )}
                            />

                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                <label className='labelbold'>Item Dimensions D x W x H</label>
                            </div>
                            <div className="col-8 col-sm-7 col-lg-6">
                                <div>
                                    <div className='row align-items-end'>
                                        <Controller
                                            control={control}
                                            name='itemDepthfrontToback'
                                            rules={{
                                                required: "this field is required",
                                                pattern: {
                                                    value: new RegExp('^[0-9]+$'),
                                                    message: "not a valid formate"
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-12 col-sm-6">
                                                        <div className='d-flex flex-column' style={{ width: "100%" }}>
                                                            <label className="labelbold me-2">Item Depth Front To Back</label>
                                                            <TextField
                                                                placeholder="30"
                                                                id="itemDepthfrontToback"
                                                                variant="outlined"
                                                                {...field}

                                                                error={Boolean(errors.itemDepthfrontToback)}
                                                            />
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        />
                                        <Controller
                                            control={control}
                                            name='itemDepthfrontTobackUnit'
                                            rules={{
                                                required: "this is required"
                                            }}
                                            render={({ field }) => (
                                                <>

                                                    <div className="col-12 col-sm-6">
                                                        <TextField
                                                            id="itemDepthfrontTobackUnit"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            {...field}
                                                            error={Boolean(errors.itemDepthfrontTobackUnit)}
                                                        >
                                                            <MenuItem value="">-Select-</MenuItem>
                                                            <MenuItem value="New">Centimeters</MenuItem>
                                                        </TextField>
                                                    </div>
                                                </>
                                            )}

                                        />

                                    </div>
                                    <div className='row align-items-end'>
                                        <Controller
                                            control={control}
                                            name='itemWidthsideToside'
                                            rules={{
                                                required: "this field is required",
                                                pattern: {
                                                    value: new RegExp('^[0-9]+$'),
                                                    message: "not a valid formate"
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-12 col-sm-6">
                                                        <div className='d-flex flex-column' style={{ width: "100%" }}>
                                                            <label className="labelbold me-2">Item Width Side to Side</label>
                                                            <TextField
                                                                placeholder="25"
                                                                id="itemWidthsideToside"
                                                                variant="outlined"
                                                                {...field}
                                                                error={Boolean(errors.itemWidthsideToside)}
                                                            />
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        />
                                        <Controller
                                            control={control}
                                            name='itemWidthsideTosideUnit'
                                            rules={{
                                                required: "this field is required"
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-12 col-sm-6">
                                                        <TextField
                                                            id="itemWidthsideTosideUnit"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            {...field}
                                                            error={Boolean(errors.itemWidthsideTosideUnit)}
                                                        >
                                                            <MenuItem value="">-Select-</MenuItem>
                                                            <MenuItem value="New">Centimeters</MenuItem>
                                                        </TextField>
                                                    </div>
                                                </>
                                            )}
                                        />
                                    </div>
                                    <div className='row align-items-end'>
                                        <Controller
                                            control={control}
                                            name='itemHeightbaseTotop'
                                            rules={{
                                                required: "this field is required",
                                                pattern: {
                                                    value: new RegExp('^[0-9]+$'),
                                                    message: "not a valid formate"
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-12 col-sm-6">
                                                        <div className='d-flex flex-column' style={{ width: "100%" }}>
                                                            <label className="labelbold me-2">Height Base to Top</label>
                                                            <TextField
                                                                placeholder="80"
                                                                id="itemHeightbaseTotop"
                                                                variant="outlined"
                                                                {...field}

                                                                error={Boolean(errors.itemHeightbaseTotop)}
                                                            />
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        />
                                        <Controller
                                            control={control}
                                            name='itemHeightbaseTotopUnit'
                                            rules={{
                                                required: "this field is required"
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-12 col-sm-6">
                                                        <TextField
                                                            id="itemHeightbaseTotopUnit"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            {...field}
                                                            error={Boolean(errors.itemHeightbaseTotopUnit)}
                                                        >
                                                            <MenuItem value="">-Select-</MenuItem>
                                                            <MenuItem value="New">Centimeters</MenuItem>

                                                        </TextField>
                                                    </div>
                                                </>
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>

                            <Controller
                                control={control}
                                name="includedComponent"
                                rules={{
                                    required: "This field is required",
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Included Components</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="1 year manufacturer."
                                                id="includedComponent"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                onFocus={() => setIsFocused(true)}
                                                onBlur={() => setIsFocused(false)}
                                                error={Boolean(errors.includedComponent)}
                                            />
                                            {errors.inputValue && <p>{errors.inputValue.message}</p>}

                                            {isFocused && (
                                                <ul>
                                                    <li onClick={handleSetIncludedValue} value="remote">remote</li>
                                                    <li>cover</li>
                                                    <li>wheels</li>
                                                </ul>
                                            )}
                                        </div>


                                    </>
                                )}
                            />


                        </div>
                        <div>
                            <Controller
                                control={control}
                                name='productSize'
                                rules={{
                                    required: "this field is required",

                                }}
                                render={({ field }) => (
                                    <>
                                        <div className='d-flex align-items-center mb-3'>
                                            <label className="labelbold me-2">Size</label>
                                            <TextField
                                                placeholder=""
                                                id="productSize"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "50%" }}
                                                error={Boolean(errors.productSize)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div>
                            <Controller
                                control={control}
                                name="materialType"
                                rules={{
                                    required: "this field is required",
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className='d-flex align-items-center mb-3'>
                                            <label className="labelbold me-2">Material Type</label>
                                            <TextField
                                                id="materialType-select"
                                                variant="outlined"
                                                select
                                                style={{ width: "50%" }}
                                                placeholder="select"
                                                {...field}
                                                error={Boolean(errors.materialType)}
                                            >
                                                <MenuItem value="">-Select-</MenuItem>
                                                <MenuItem value="Nylon">Nylon</MenuItem>
                                                <MenuItem value="Aluminum">Aluminum</MenuItem>
                                                <MenuItem value="Solid Gold">Solid Gold</MenuItem>
                                                <MenuItem value="Cedar">Cedar</MenuItem>
                                                <MenuItem value="Stone">Stone</MenuItem>
                                                <MenuItem value="Porcelain">Porcelain</MenuItem>
                                                <MenuItem value="Porcelain Bone China">Porcelain Bone China</MenuItem>
                                                <MenuItem value="Pewter">Pewter</MenuItem>
                                                <MenuItem value="Stainless Steel">Stainless Steel</MenuItem>
                                                <MenuItem value="Teracotta">Teracotta</MenuItem>
                                                <MenuItem value="Neoprene">Neoprene</MenuItem>
                                                <MenuItem value="Copper">Copper</MenuItem>
                                                <MenuItem value="Polycarbonate">Polycarbonate</MenuItem>
                                                <MenuItem value="Recycled">Recycled</MenuItem>
                                                <MenuItem value="Bronze">Bronze</MenuItem>
                                                <MenuItem value="Clay">Clay</MenuItem>
                                                <MenuItem value="Elmwood">Elmwood</MenuItem>
                                                <MenuItem value="Polyester">Polyester</MenuItem>
                                                <MenuItem value="Hard-Anodized Aluminum">Hard-Anodized Aluminum</MenuItem>
                                                <MenuItem value="Leaded Crystal">Leaded Crystal</MenuItem>
                                                <MenuItem value="Silicone">Silicone</MenuItem>
                                                <MenuItem value="Cherrywood">Cherrywood</MenuItem>
                                                <MenuItem value="Marble">Marble</MenuItem>
                                                <MenuItem value="Nonstick">Nonstick</MenuItem>
                                                <MenuItem value="Silver">Silver</MenuItem>
                                                <MenuItem value="Pine">Pine</MenuItem>
                                                <MenuItem value="Oak">Oak</MenuItem>
                                                <MenuItem value="Non-Leaded Crystal">Non-Leaded Crystal</MenuItem>
                                                <MenuItem value="Bamboo">Bamboo</MenuItem>
                                                <MenuItem value="Fabric">Fabric</MenuItem>
                                                <MenuItem value="Acrylic">Acrylic</MenuItem>
                                                <MenuItem value="Crystal">Crystal</MenuItem>
                                                <MenuItem value="Silver-Plated">Silver-Plated</MenuItem>
                                                <MenuItem value="Synthetic">Synthetic</MenuItem>
                                                <MenuItem value="Birch">Birch</MenuItem>
                                                <MenuItem value="18/8 Steel">18/8 Steel</MenuItem>
                                                <MenuItem value="Beechwood">Beechwood</MenuItem>
                                                <MenuItem value="Stoneware">Stoneware</MenuItem>
                                                <MenuItem value="Brass">Brass</MenuItem>
                                                <MenuItem value="Multi-ply">Multi-ply</MenuItem>
                                                <MenuItem value="Glass">Glass</MenuItem>
                                                <MenuItem value="Leather">Leather</MenuItem>
                                                <MenuItem value="Iron">Iron</MenuItem>
                                                <MenuItem value="Plastic">Plastic</MenuItem>
                                                <MenuItem value="Cotton">Cotton</MenuItem>
                                                <MenuItem value="Paraffin">Paraffin</MenuItem>
                                                <MenuItem value="Polyresin">Polyresin</MenuItem>
                                                <MenuItem value="Wax">Wax</MenuItem>
                                                <MenuItem value="Bone China">Bone China</MenuItem>
                                                <MenuItem value="Platinume">Platinume</MenuItem>
                                                <MenuItem value="Chrome">Chrome</MenuItem>
                                                <MenuItem value="Mahogany">Mahogany</MenuItem>
                                                <MenuItem value="Olive Wood">Olive Wood</MenuItem>
                                                <MenuItem value="18/10 Steel">18/10 Steel</MenuItem>
                                                <MenuItem value="Rubber">Rubber</MenuItem>
                                                <MenuItem value="Teak">Teak</MenuItem>
                                                <MenuItem value="Maple">Maple</MenuItem>
                                                <MenuItem value="Acrylic Coated Cotton">Acrylic Coated Cotton</MenuItem>
                                                <MenuItem value="Rosewood">Rosewood</MenuItem>
                                                <MenuItem value="Cork">Cork</MenuItem>
                                                <MenuItem value="Melamine">Melamine</MenuItem>
                                                <MenuItem value="Gilded Gold">Gilded Gold</MenuItem>
                                                <MenuItem value="HardWood">HardWood</MenuItem>
                                                <MenuItem value="Steel">Steel</MenuItem>
                                                <MenuItem value="Carbon">Carbon</MenuItem>
                                                <MenuItem value="Zinc">Zinc</MenuItem>
                                                <MenuItem value="Earthenware">Earthenware</MenuItem>
                                                <MenuItem value="Chromium Steel">Chromium Steel</MenuItem>
                                                <MenuItem value="Walnut">Walnut</MenuItem>
                                                <MenuItem value="Cast Iron">Cast Iron</MenuItem>
                                                <MenuItem value="Rattan & Wicker">Rattan & Wicker</MenuItem>
                                                <MenuItem value="Tin">Tin</MenuItem>
                                                <MenuItem value="Ceramic">Ceramic</MenuItem>
                                                <MenuItem value="Paper">Paper</MenuItem>
                                                <MenuItem value="Tritan">Tritan</MenuItem>
                                                <MenuItem value="Nickel">Nickel</MenuItem>
                                                <MenuItem value="Polycast">Polycast</MenuItem>
                                                <MenuItem value="Other">Other</MenuItem>
                                            </TextField>
                                        </div>
                                    </>
                                )}
                            />
                        </div>


                    </div>
                )
            }

            <div className="row" style={{ marginTop: "10px" }}>


                {
                    (formComponents4) && (
                        <>
                            {/* model,Number of Items,Product Care Instructions,Contains Liquid Contents?,Is Assembly Required,Number of Pieces,Included Components,Size,Material Type,Number of Boxes,Color */}
                            <div className="row">
                                <Controller
                                    control={control}
                                    name='modelname'
                                    rules={{
                                        required: "this field is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">model</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="model"
                                                    id="modelname"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.modelname)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='numberofitems'
                                    rules={{
                                        required: "Number of Items is required",
                                        pattern: {
                                            value: new RegExp('^[0-9]+$'),
                                            message: "value is invalid"
                                        }
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Number of Items</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="1"
                                                    id="numberofitems"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.numberofitems)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='productCareInstruction'
                                    rules={{
                                        required: "this field is required",

                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Product Care Instructions</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="Dry clean only"
                                                    id="productCareInstruction"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.productCareInstruction)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name="containsliquidcontent"
                                    rules={{
                                        required: "Contains liquid content is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Contains Liquid Contents?</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    id="containsliquidcontent-select"
                                                    variant="outlined"
                                                    select
                                                    style={{ width: "100%" }}
                                                    placeholder="select"
                                                    {...field}
                                                    error={Boolean(errors.containsliquidcontent)}
                                                >
                                                    <MenuItem value="">-Select-</MenuItem>
                                                    <MenuItem value="Yes">Yes</MenuItem>
                                                    <MenuItem value="No">No</MenuItem>
                                                </TextField>
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name="assemblyRequired"
                                    rules={{
                                        required: "this field is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Is Assembly Required</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    id="assemblyRequired-select"
                                                    variant="outlined"
                                                    select
                                                    style={{ width: "100%" }}
                                                    placeholder="select"
                                                    {...field}
                                                    error={Boolean(errors.assemblyRequired)}
                                                >
                                                    <MenuItem value="">-Select-</MenuItem>
                                                    <MenuItem value="Yes">Yes</MenuItem>
                                                    <MenuItem value="No">No</MenuItem>
                                                </TextField>
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='numberofPieces'
                                    rules={{
                                        required: "this field is required",
                                        pattern: {
                                            value: new RegExp('^[0-9]+$'),
                                            message: "value is invalid"
                                        }
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Number of Pieces</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="5"
                                                    id="numberofPieces"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.numberofPieces)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                            <div className="row" style={{ marginTop: "10px" }}>

                                <Controller
                                    control={control}
                                    name="includedComponent"
                                    rules={{
                                        required: "This field is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Included Components</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="1 year manufacturer."
                                                    id="includedComponent"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    onFocus={() => setIsFocused(true)}
                                                    onBlur={() => setIsFocused(false)}
                                                    error={Boolean(errors.includedComponent)}
                                                />
                                                {errors.inputValue && <p>{errors.inputValue.message}</p>}

                                                {isFocused && (
                                                    <ul>
                                                        <li onClick={handleSetIncludedValue} value="remote">remote</li>
                                                        <li>cover</li>
                                                        <li>wheels</li>
                                                    </ul>
                                                )}
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='productSize'
                                    rules={{
                                        required: "this field is required",

                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Size</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder=""
                                                    id="productSize"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.productSize)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name="materialType"
                                    rules={{
                                        required: "this field is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Material Type</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    id="materialType-select"
                                                    variant="outlined"
                                                    select
                                                    style={{ width: "100%" }}
                                                    placeholder="select"
                                                    {...field}
                                                    error={Boolean(errors.materialType)}
                                                >
                                                    <MenuItem value="">-Select-</MenuItem>
                                                    <MenuItem value="Nylon">Nylon</MenuItem>
                                                    <MenuItem value="Aluminum">Aluminum</MenuItem>
                                                    <MenuItem value="Solid Gold">Solid Gold</MenuItem>
                                                    <MenuItem value="Cedar">Cedar</MenuItem>
                                                    <MenuItem value="Stone">Stone</MenuItem>
                                                    <MenuItem value="Porcelain">Porcelain</MenuItem>
                                                    <MenuItem value="Porcelain Bone China">Porcelain Bone China</MenuItem>
                                                    <MenuItem value="Pewter">Pewter</MenuItem>
                                                    <MenuItem value="Stainless Steel">Stainless Steel</MenuItem>
                                                    <MenuItem value="Teracotta">Teracotta</MenuItem>
                                                    <MenuItem value="Neoprene">Neoprene</MenuItem>
                                                    <MenuItem value="Copper">Copper</MenuItem>
                                                    <MenuItem value="Polycarbonate">Polycarbonate</MenuItem>
                                                    <MenuItem value="Recycled">Recycled</MenuItem>
                                                    <MenuItem value="Bronze">Bronze</MenuItem>
                                                    <MenuItem value="Clay">Clay</MenuItem>
                                                    <MenuItem value="Elmwood">Elmwood</MenuItem>
                                                    <MenuItem value="Polyester">Polyester</MenuItem>
                                                    <MenuItem value="Hard-Anodized Aluminum">Hard-Anodized Aluminum</MenuItem>
                                                    <MenuItem value="Leaded Crystal">Leaded Crystal</MenuItem>
                                                    <MenuItem value="Silicone">Silicone</MenuItem>
                                                    <MenuItem value="Cherrywood">Cherrywood</MenuItem>
                                                    <MenuItem value="Marble">Marble</MenuItem>
                                                    <MenuItem value="Nonstick">Nonstick</MenuItem>
                                                    <MenuItem value="Silver">Silver</MenuItem>
                                                    <MenuItem value="Pine">Pine</MenuItem>
                                                    <MenuItem value="Oak">Oak</MenuItem>
                                                    <MenuItem value="Non-Leaded Crystal">Non-Leaded Crystal</MenuItem>
                                                    <MenuItem value="Bamboo">Bamboo</MenuItem>
                                                    <MenuItem value="Fabric">Fabric</MenuItem>
                                                    <MenuItem value="Acrylic">Acrylic</MenuItem>
                                                    <MenuItem value="Crystal">Crystal</MenuItem>
                                                    <MenuItem value="Silver-Plated">Silver-Plated</MenuItem>
                                                    <MenuItem value="Synthetic">Synthetic</MenuItem>
                                                    <MenuItem value="Birch">Birch</MenuItem>
                                                    <MenuItem value="18/8 Steel">18/8 Steel</MenuItem>
                                                    <MenuItem value="Beechwood">Beechwood</MenuItem>
                                                    <MenuItem value="Stoneware">Stoneware</MenuItem>
                                                    <MenuItem value="Brass">Brass</MenuItem>
                                                    <MenuItem value="Multi-ply">Multi-ply</MenuItem>
                                                    <MenuItem value="Glass">Glass</MenuItem>
                                                    <MenuItem value="Leather">Leather</MenuItem>
                                                    <MenuItem value="Iron">Iron</MenuItem>
                                                    <MenuItem value="Plastic">Plastic</MenuItem>
                                                    <MenuItem value="Cotton">Cotton</MenuItem>
                                                    <MenuItem value="Paraffin">Paraffin</MenuItem>
                                                    <MenuItem value="Polyresin">Polyresin</MenuItem>
                                                    <MenuItem value="Wax">Wax</MenuItem>
                                                    <MenuItem value="Bone China">Bone China</MenuItem>
                                                    <MenuItem value="Platinume">Platinume</MenuItem>
                                                    <MenuItem value="Chrome">Chrome</MenuItem>
                                                    <MenuItem value="Mahogany">Mahogany</MenuItem>
                                                    <MenuItem value="Olive Wood">Olive Wood</MenuItem>
                                                    <MenuItem value="18/10 Steel">18/10 Steel</MenuItem>
                                                    <MenuItem value="Rubber">Rubber</MenuItem>
                                                    <MenuItem value="Teak">Teak</MenuItem>
                                                    <MenuItem value="Maple">Maple</MenuItem>
                                                    <MenuItem value="Acrylic Coated Cotton">Acrylic Coated Cotton</MenuItem>
                                                    <MenuItem value="Rosewood">Rosewood</MenuItem>
                                                    <MenuItem value="Cork">Cork</MenuItem>
                                                    <MenuItem value="Melamine">Melamine</MenuItem>
                                                    <MenuItem value="Gilded Gold">Gilded Gold</MenuItem>
                                                    <MenuItem value="HardWood">HardWood</MenuItem>
                                                    <MenuItem value="Steel">Steel</MenuItem>
                                                    <MenuItem value="Carbon">Carbon</MenuItem>
                                                    <MenuItem value="Zinc">Zinc</MenuItem>
                                                    <MenuItem value="Earthenware">Earthenware</MenuItem>
                                                    <MenuItem value="Chromium Steel">Chromium Steel</MenuItem>
                                                    <MenuItem value="Walnut">Walnut</MenuItem>
                                                    <MenuItem value="Cast Iron">Cast Iron</MenuItem>
                                                    <MenuItem value="Rattan & Wicker">Rattan & Wicker</MenuItem>
                                                    <MenuItem value="Tin">Tin</MenuItem>
                                                    <MenuItem value="Ceramic">Ceramic</MenuItem>
                                                    <MenuItem value="Paper">Paper</MenuItem>
                                                    <MenuItem value="Tritan">Tritan</MenuItem>
                                                    <MenuItem value="Nickel">Nickel</MenuItem>
                                                    <MenuItem value="Polycast">Polycast</MenuItem>
                                                    <MenuItem value="Other">Other</MenuItem>
                                                </TextField>
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='numberofBoxes'
                                    rules={{
                                        required: "this field is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2"> Number of Boxes </label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="5"
                                                    id="numberofBoxes"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.numberofBoxes)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='productColor'
                                    rules={{
                                        required: "this field is required",

                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Color</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder=""
                                                    id="productColor"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.productColor)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>
                    )
                }
                {
                    formComponents7 && (
                        <>
                            {/* Manufacturer Part Number,Number of Items,Contains Liquid Contents?,Box Contents,Number of Boxes,Manufacturer */}
                            <div>
                                <Controller
                                    control={control}
                                    name='manufacturepartno'
                                    rules={{
                                        required: "Manufacturer Part Number is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className='d-flex align-items-center mb-3'>
                                                <label className="labelbold me-2">Manufacturer Part Number </label>
                                                <TextField
                                                    placeholder="SB-122"
                                                    id="manufacturepartno"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "50%" }}
                                                    error={Boolean(errors.manufacturepartno)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />

                            </div>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='numberofitems'
                                    rules={{
                                        required: "Number of Items is required",
                                        pattern: {
                                            value: new RegExp('^[0-9]+$'),
                                            message: "value is invalid"
                                        }
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Number of Items</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="1"
                                                    id="numberofitems"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.numberofitems)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name="containsliquidcontent"
                                    rules={{
                                        required: "Contains liquid content is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Contains Liquid Contents?</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    id="containsliquidcontent-select"
                                                    variant="outlined"
                                                    select
                                                    style={{ width: "100%" }}
                                                    placeholder="select"
                                                    {...field}
                                                    error={Boolean(errors.containsliquidcontent)}
                                                >
                                                    <MenuItem value="">-Select-</MenuItem>
                                                    <MenuItem value="Yes">Yes</MenuItem>
                                                    <MenuItem value="No">No</MenuItem>
                                                </TextField>
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='boxContents'
                                    rules={{
                                        required: "Box Contents is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Box Contents</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="speaker,power cable,user manual,warranty certificate"
                                                    id="boxContents"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.boxContents)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='numberofBoxes'
                                    rules={{
                                        required: "this field is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2"> Number of Boxes </label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="5"
                                                    id="numberofBoxes"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.numberofBoxes)}
                                                />
                                            </div>

                                        </>
                                    )}
                                />
                            </div>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='itemManufacturer'
                                    rules={{
                                        required: "this field is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Manufacturer</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="XYZ Pvt Ltd"
                                                    id="itemManufacturer"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.itemManufacturer)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>
                    )
                }
                {
                    formComponents8 && (
                        <>
                            {/* Search Terms,Manufacturer Part Number, Is Product Expirable, Number of Items,Contains Liquid Contents?, Included Components,Number of Boxes,Manufacturer,model */}
                            <div>
                                <div>
                                    <Controller
                                        control={control}
                                        name='searchTerms'
                                        rules={{
                                            required: "Search Terms is required"
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className='d-flex align-items-center mb-3'>
                                                    <label className="labelbold me-2">Search Tearms</label>
                                                    <TextField
                                                        placeholder="Electric"
                                                        id="searchTerms"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "50%" }}
                                                        error={Boolean(errors.searchTerms)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />

                                </div>
                                <div>
                                    <Controller
                                        control={control}
                                        name='manufacturepartno'
                                        rules={{
                                            required: "Manufacturer Part Number is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className='d-flex align-items-center mb-3'>
                                                    <label className="labelbold me-2">Manufacturer Part Number </label>
                                                    <TextField
                                                        placeholder="SB-122"
                                                        id="manufacturepartno"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "50%" }}
                                                        error={Boolean(errors.manufacturepartno)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className='row' style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='productExpirable'
                                        rules={{
                                            required: "productExpirable is required"
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className='labelbold me-2'>Is Product Expirable</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        id="productExpirable"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        {...field}
                                                        error={Boolean(errors.productExpirable)}
                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="Yes">Yes</MenuItem>
                                                        <MenuItem value="No">No</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='numberofitems'
                                        rules={{
                                            required: "Number of Items is required",
                                            pattern: {
                                                value: new RegExp('^[0-9]+$'),
                                                message: "value is invalid"
                                            }
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Number of Items</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="1"
                                                        id="numberofitems"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.numberofitems)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="containsliquidcontent"
                                        rules={{
                                            required: "Contains liquid content is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Contains Liquid Contents?</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        id="containsliquidcontent-select"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        placeholder="select"
                                                        {...field}
                                                        error={Boolean(errors.containsliquidcontent)}
                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="Yes">Yes</MenuItem>
                                                        <MenuItem value="No">No</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="includedComponent"
                                        rules={{
                                            required: "This field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Included Components</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="1 year manufacturer."
                                                        id="includedComponent"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        onFocus={() => setIsFocused(true)}
                                                        onBlur={() => setIsFocused(false)}
                                                        error={Boolean(errors.includedComponent)}
                                                    />
                                                    {errors.inputValue && <p>{errors.inputValue.message}</p>}

                                                    {isFocused && (
                                                        <ul>
                                                            <li onClick={handleSetIncludedValue} value="remote">remote</li>
                                                            <li>cover</li>
                                                            <li>wheels</li>
                                                        </ul>
                                                    )}
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='numberofBoxes'
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2"> Number of Boxes </label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="5"
                                                        id="numberofBoxes"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.numberofBoxes)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='itemManufacturer'
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Manufacturer</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="XYZ Pvt Ltd"
                                                        id="itemManufacturer"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.itemManufacturer)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row">
                                    <Controller
                                        control={control}
                                        name='modelname'
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">model</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="model"
                                                        id="modelname"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.modelname)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                            </div>

                        </>
                    )
                }
                {
                    formComponents9 && (
                        <>
                            {/* Model,Number of Items,Unit Count,Unit Count Type,Included Components,Color,Manufacturer */}
                            <div>
                                <div className="row">
                                    <Controller
                                        control={control}
                                        name='modelname'
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">model</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="model"
                                                        id="modelname"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.modelname)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='numberofitems'
                                    rules={{
                                        required: "Number of Items is required",
                                        pattern: {
                                            value: new RegExp('^[0-9]+$'),
                                            message: "value is invalid"
                                        }
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Number of Items</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="1"
                                                    id="numberofitems"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.numberofitems)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='unitCount'
                                    rules={{
                                        required: "this field is required",
                                        pattern: {
                                            value: new RegExp('^[0-9]+$'),
                                            message: "value is invalid"
                                        }
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Unit Count</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="12"
                                                    id="unitCount"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.unitCount)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name="unitCountType"
                                    rules={{
                                        required: "this field is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Unit Count Type</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    id="unitCountType-select"
                                                    variant="outlined"
                                                    select
                                                    style={{ width: "100%" }}
                                                    placeholder="women"
                                                    {...field}
                                                    error={Boolean(errors.unitCountType)}

                                                >
                                                    <MenuItem value="">-Select-</MenuItem>
                                                    <MenuItem value="Women">Meters</MenuItem>
                                                    <MenuItem value="Unisex Children">Pouch</MenuItem>
                                                    <MenuItem value="Men">Grams</MenuItem>
                                                    <MenuItem value="Boys">Liters</MenuItem>
                                                    <MenuItem value="Girls">Mililiters</MenuItem>
                                                    <MenuItem value="Set">Set</MenuItem>
                                                    <MenuItem value="Kilograms">Kilograms</MenuItem>
                                                    <MenuItem value="Count">Count</MenuItem>
                                                    <MenuItem value="Square Meters">Square Meters</MenuItem>
                                                    <MenuItem value="Case">Case</MenuItem>
                                                    <MenuItem value="Feet">Feet</MenuItem>
                                                    <MenuItem value="Can">Can</MenuItem>
                                                    <MenuItem value="Pounds">Pounds</MenuItem>
                                                    <MenuItem value="Piece">Piece</MenuItem>
                                                    <MenuItem value="Ounce">Ounce</MenuItem>
                                                    <MenuItem value="Pint">Pint</MenuItem>
                                                    <MenuItem value="Pack">Pack</MenuItem>
                                                    <MenuItem value="Square feet">Square feet</MenuItem>
                                                    <MenuItem value="Fluid Ounces">Fluid Ounces</MenuItem>
                                                </TextField>
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name="includedComponent"
                                    rules={{
                                        required: "This field is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Included Components</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="1 year manufacturer."
                                                    id="includedComponent"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    onFocus={() => setIsFocused(true)}
                                                    onBlur={() => setIsFocused(false)}
                                                    error={Boolean(errors.includedComponent)}
                                                />
                                                {errors.inputValue && <p>{errors.inputValue.message}</p>}

                                                {isFocused && (
                                                    <ul>
                                                        <li onClick={handleSetIncludedValue} value="remote">remote</li>
                                                        <li>cover</li>
                                                        <li>wheels</li>
                                                    </ul>
                                                )}
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='productColor'
                                    rules={{
                                        required: "this field is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Color</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder=""
                                                    id="productColor"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.productColor)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='itemManufacturer'
                                    rules={{
                                        required: "this field is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Manufacturer</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="XYZ Pvt Ltd"
                                                    id="itemManufacturer"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.itemManufacturer)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>
                    )
                }
                {
                    formComponents10 && (
                        <>
                            {/* Model Number,Number of Items,Product Care Instructions,Contains Liquid Contents?,Is Assembly Required,Model Name,Number of Pieces,Included Components,Size,Color Map,Material Type */}
                            <div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='modelnumber'
                                        rules={{
                                            required: "Modal Number is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Model Number </label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="AZL20"
                                                        id="modelnumber"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.modelnumber)}
                                                    />
                                                </div>

                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='numberofitems'
                                        rules={{
                                            required: "Number of Items is required",
                                            pattern: {
                                                value: new RegExp('^[0-9]+$'),
                                                message: "value is invalid"
                                            }
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Number of Items</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="1"
                                                        id="numberofitems"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.numberofitems)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='productCareInstruction'
                                        rules={{
                                            required: "this field is required",

                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Product Care Instructions</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="Dry clean only"
                                                        id="productCareInstruction"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.productCareInstruction)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="containsliquidcontent"
                                        rules={{
                                            required: "Contains liquid content is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Contains Liquid Contents?</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        id="containsliquidcontent-select"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        placeholder="select"
                                                        {...field}
                                                        error={Boolean(errors.containsliquidcontent)}
                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="Yes">Yes</MenuItem>
                                                        <MenuItem value="No">No</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="assemblyRequired"
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Is Assembly Required</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        id="assemblyRequired-select"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        placeholder="select"
                                                        {...field}
                                                        error={Boolean(errors.assemblyRequired)}
                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="Yes">Yes</MenuItem>
                                                        <MenuItem value="No">No</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row">
                                    <Controller
                                        control={control}
                                        name='modelname'
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Model Name</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="model"
                                                        id="modelname"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.modelname)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='numberofPieces'
                                        rules={{
                                            required: "this field is required",
                                            pattern: {
                                                value: new RegExp('^[0-9]+$'),
                                                message: "value is invalid"
                                            }
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Number of Pieces</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="5"
                                                        id="numberofPieces"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.numberofPieces)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="includedComponent"
                                        rules={{
                                            required: "This field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Included Components</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="1 year manufacturer."
                                                        id="includedComponent"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        onFocus={() => setIsFocused(true)}
                                                        onBlur={() => setIsFocused(false)}
                                                        error={Boolean(errors.includedComponent)}
                                                    />
                                                    {errors.inputValue && <p>{errors.inputValue.message}</p>}

                                                    {isFocused && (
                                                        <ul>
                                                            <li onClick={handleSetIncludedValue} value="remote">remote</li>
                                                            <li>cover</li>
                                                            <li>wheels</li>
                                                        </ul>
                                                    )}
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='productSize'
                                        rules={{
                                            required: "this field is required",

                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Size</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder=""
                                                        id="productSize"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.productSize)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="productColorMap"
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Colour Map</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        id="productColorMap-select"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        placeholder="select"
                                                        {...field}
                                                        error={Boolean(errors.productColorMap)}
                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="Bronze">Bronze</MenuItem>
                                                        <MenuItem value="Brown">Brown</MenuItem>
                                                        <MenuItem value="Gold">Gold</MenuItem>
                                                        <MenuItem value="Blue">Blue</MenuItem>
                                                        <MenuItem value="Multicolor">Multicolor</MenuItem>
                                                        <MenuItem value="Black">Black</MenuItem>
                                                        <MenuItem value="Orange">Orange</MenuItem>
                                                        <MenuItem value="Clear">Clear</MenuItem>
                                                        <MenuItem value="Red">Red</MenuItem>
                                                        <MenuItem value="Silver">Silver</MenuItem>
                                                        <MenuItem value="Pink">Pink</MenuItem>
                                                        <MenuItem value="White">White</MenuItem>
                                                        <MenuItem value="Metalic">Metalic</MenuItem>
                                                        <MenuItem value="Beige">Beige</MenuItem>
                                                        <MenuItem value="Purple">Purple</MenuItem>
                                                        <MenuItem value="Yellow">Yellow</MenuItem>
                                                        <MenuItem value="Turquoise">Turquoise</MenuItem>
                                                        <MenuItem value="Green">Green</MenuItem>
                                                        <MenuItem value="Grey">Grey</MenuItem>
                                                        <MenuItem value="Offwhite">Offwhite</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="materialType"
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Material Type</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        id="materialType-select"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        placeholder="select"
                                                        {...field}
                                                        error={Boolean(errors.materialType)}
                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="Nylon">Nylon</MenuItem>
                                                        <MenuItem value="Aluminum">Aluminum</MenuItem>
                                                        <MenuItem value="Solid Gold">Solid Gold</MenuItem>
                                                        <MenuItem value="Cedar">Cedar</MenuItem>
                                                        <MenuItem value="Stone">Stone</MenuItem>
                                                        <MenuItem value="Porcelain">Porcelain</MenuItem>
                                                        <MenuItem value="Porcelain Bone China">Porcelain Bone China</MenuItem>
                                                        <MenuItem value="Pewter">Pewter</MenuItem>
                                                        <MenuItem value="Stainless Steel">Stainless Steel</MenuItem>
                                                        <MenuItem value="Teracotta">Teracotta</MenuItem>
                                                        <MenuItem value="Neoprene">Neoprene</MenuItem>
                                                        <MenuItem value="Copper">Copper</MenuItem>
                                                        <MenuItem value="Polycarbonate">Polycarbonate</MenuItem>
                                                        <MenuItem value="Recycled">Recycled</MenuItem>
                                                        <MenuItem value="Bronze">Bronze</MenuItem>
                                                        <MenuItem value="Clay">Clay</MenuItem>
                                                        <MenuItem value="Elmwood">Elmwood</MenuItem>
                                                        <MenuItem value="Polyester">Polyester</MenuItem>
                                                        <MenuItem value="Hard-Anodized Aluminum">Hard-Anodized Aluminum</MenuItem>
                                                        <MenuItem value="Leaded Crystal">Leaded Crystal</MenuItem>
                                                        <MenuItem value="Silicone">Silicone</MenuItem>
                                                        <MenuItem value="Cherrywood">Cherrywood</MenuItem>
                                                        <MenuItem value="Marble">Marble</MenuItem>
                                                        <MenuItem value="Nonstick">Nonstick</MenuItem>
                                                        <MenuItem value="Silver">Silver</MenuItem>
                                                        <MenuItem value="Pine">Pine</MenuItem>
                                                        <MenuItem value="Oak">Oak</MenuItem>
                                                        <MenuItem value="Non-Leaded Crystal">Non-Leaded Crystal</MenuItem>
                                                        <MenuItem value="Bamboo">Bamboo</MenuItem>
                                                        <MenuItem value="Fabric">Fabric</MenuItem>
                                                        <MenuItem value="Acrylic">Acrylic</MenuItem>
                                                        <MenuItem value="Crystal">Crystal</MenuItem>
                                                        <MenuItem value="Silver-Plated">Silver-Plated</MenuItem>
                                                        <MenuItem value="Synthetic">Synthetic</MenuItem>
                                                        <MenuItem value="Birch">Birch</MenuItem>
                                                        <MenuItem value="18/8 Steel">18/8 Steel</MenuItem>
                                                        <MenuItem value="Beechwood">Beechwood</MenuItem>
                                                        <MenuItem value="Stoneware">Stoneware</MenuItem>
                                                        <MenuItem value="Brass">Brass</MenuItem>
                                                        <MenuItem value="Multi-ply">Multi-ply</MenuItem>
                                                        <MenuItem value="Glass">Glass</MenuItem>
                                                        <MenuItem value="Leather">Leather</MenuItem>
                                                        <MenuItem value="Iron">Iron</MenuItem>
                                                        <MenuItem value="Plastic">Plastic</MenuItem>
                                                        <MenuItem value="Cotton">Cotton</MenuItem>
                                                        <MenuItem value="Paraffin">Paraffin</MenuItem>
                                                        <MenuItem value="Polyresin">Polyresin</MenuItem>
                                                        <MenuItem value="Wax">Wax</MenuItem>
                                                        <MenuItem value="Bone China">Bone China</MenuItem>
                                                        <MenuItem value="Platinume">Platinume</MenuItem>
                                                        <MenuItem value="Chrome">Chrome</MenuItem>
                                                        <MenuItem value="Mahogany">Mahogany</MenuItem>
                                                        <MenuItem value="Olive Wood">Olive Wood</MenuItem>
                                                        <MenuItem value="18/10 Steel">18/10 Steel</MenuItem>
                                                        <MenuItem value="Rubber">Rubber</MenuItem>
                                                        <MenuItem value="Teak">Teak</MenuItem>
                                                        <MenuItem value="Maple">Maple</MenuItem>
                                                        <MenuItem value="Acrylic Coated Cotton">Acrylic Coated Cotton</MenuItem>
                                                        <MenuItem value="Rosewood">Rosewood</MenuItem>
                                                        <MenuItem value="Cork">Cork</MenuItem>
                                                        <MenuItem value="Melamine">Melamine</MenuItem>
                                                        <MenuItem value="Gilded Gold">Gilded Gold</MenuItem>
                                                        <MenuItem value="HardWood">HardWood</MenuItem>
                                                        <MenuItem value="Steel">Steel</MenuItem>
                                                        <MenuItem value="Carbon">Carbon</MenuItem>
                                                        <MenuItem value="Zinc">Zinc</MenuItem>
                                                        <MenuItem value="Earthenware">Earthenware</MenuItem>
                                                        <MenuItem value="Chromium Steel">Chromium Steel</MenuItem>
                                                        <MenuItem value="Walnut">Walnut</MenuItem>
                                                        <MenuItem value="Cast Iron">Cast Iron</MenuItem>
                                                        <MenuItem value="Rattan & Wicker">Rattan & Wicker</MenuItem>
                                                        <MenuItem value="Tin">Tin</MenuItem>
                                                        <MenuItem value="Ceramic">Ceramic</MenuItem>
                                                        <MenuItem value="Paper">Paper</MenuItem>
                                                        <MenuItem value="Tritan">Tritan</MenuItem>
                                                        <MenuItem value="Nickel">Nickel</MenuItem>
                                                        <MenuItem value="Polycast">Polycast</MenuItem>
                                                        <MenuItem value="Other">Other</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                            </div>
                        </>
                    )
                }
                {
                    formComponents11 && (
                        <>
                            {/* Model Number,Number of Items,Product Care Instructions,Contains Liquid Contents?,Is Assembly Required,Model Name,Number of Pieces,Included Components,Size,Color Map,Material Type,Number of Boxes */}
                            <div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='modelnumber'
                                        rules={{
                                            required: "Modal Number is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Model Number </label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="AZL20"
                                                        id="modelnumber"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.modelnumber)}
                                                    />
                                                </div>

                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='numberofitems'
                                        rules={{
                                            required: "Number of Items is required",
                                            pattern: {
                                                value: new RegExp('^[0-9]+$'),
                                                message: "value is invalid"
                                            }
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Number of Items</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="1"
                                                        id="numberofitems"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.numberofitems)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='productCareInstruction'
                                        rules={{
                                            required: "this field is required",

                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Product Care Instructions</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="Dry clean only"
                                                        id="productCareInstruction"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.productCareInstruction)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="containsliquidcontent"
                                        rules={{
                                            required: "Contains liquid content is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Contains Liquid Contents?</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        id="containsliquidcontent-select"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        placeholder="select"
                                                        {...field}
                                                        error={Boolean(errors.containsliquidcontent)}
                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="Yes">Yes</MenuItem>
                                                        <MenuItem value="No">No</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="assemblyRequired"
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Is Assembly Required</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        id="assemblyRequired-select"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        placeholder="select"
                                                        {...field}
                                                        error={Boolean(errors.assemblyRequired)}
                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="Yes">Yes</MenuItem>
                                                        <MenuItem value="No">No</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row">
                                    <Controller
                                        control={control}
                                        name='modelname'
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Model Name</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="model"
                                                        id="modelname"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.modelname)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='numberofPieces'
                                        rules={{
                                            required: "this field is required",
                                            pattern: {
                                                value: new RegExp('^[0-9]+$'),
                                                message: "value is invalid"
                                            }
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Number of Pieces</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="5"
                                                        id="numberofPieces"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.numberofPieces)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="includedComponent"
                                        rules={{
                                            required: "This field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Included Components</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="1 year manufacturer."
                                                        id="includedComponent"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        onFocus={() => setIsFocused(true)}
                                                        onBlur={() => setIsFocused(false)}
                                                        error={Boolean(errors.includedComponent)}
                                                    />
                                                    {errors.inputValue && <p>{errors.inputValue.message}</p>}

                                                    {isFocused && (
                                                        <ul>
                                                            <li onClick={handleSetIncludedValue} value="remote">remote</li>
                                                            <li>cover</li>
                                                            <li>wheels</li>
                                                        </ul>
                                                    )}
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='productSize'
                                        rules={{
                                            required: "this field is required",

                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Size</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder=""
                                                        id="productSize"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.productSize)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="productColorMap"
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Colour Map</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        id="productColorMap-select"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        placeholder="select"
                                                        {...field}
                                                        error={Boolean(errors.productColorMap)}
                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="Bronze">Bronze</MenuItem>
                                                        <MenuItem value="Brown">Brown</MenuItem>
                                                        <MenuItem value="Gold">Gold</MenuItem>
                                                        <MenuItem value="Blue">Blue</MenuItem>
                                                        <MenuItem value="Multicolor">Multicolor</MenuItem>
                                                        <MenuItem value="Black">Black</MenuItem>
                                                        <MenuItem value="Orange">Orange</MenuItem>
                                                        <MenuItem value="Clear">Clear</MenuItem>
                                                        <MenuItem value="Red">Red</MenuItem>
                                                        <MenuItem value="Silver">Silver</MenuItem>
                                                        <MenuItem value="Pink">Pink</MenuItem>
                                                        <MenuItem value="White">White</MenuItem>
                                                        <MenuItem value="Metalic">Metalic</MenuItem>
                                                        <MenuItem value="Beige">Beige</MenuItem>
                                                        <MenuItem value="Purple">Purple</MenuItem>
                                                        <MenuItem value="Yellow">Yellow</MenuItem>
                                                        <MenuItem value="Turquoise">Turquoise</MenuItem>
                                                        <MenuItem value="Green">Green</MenuItem>
                                                        <MenuItem value="Grey">Grey</MenuItem>
                                                        <MenuItem value="Offwhite">Offwhite</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="materialType"
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Material Type</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        id="materialType-select"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        placeholder="select"
                                                        {...field}
                                                        error={Boolean(errors.materialType)}
                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="Nylon">Nylon</MenuItem>
                                                        <MenuItem value="Aluminum">Aluminum</MenuItem>
                                                        <MenuItem value="Solid Gold">Solid Gold</MenuItem>
                                                        <MenuItem value="Cedar">Cedar</MenuItem>
                                                        <MenuItem value="Stone">Stone</MenuItem>
                                                        <MenuItem value="Porcelain">Porcelain</MenuItem>
                                                        <MenuItem value="Porcelain Bone China">Porcelain Bone China</MenuItem>
                                                        <MenuItem value="Pewter">Pewter</MenuItem>
                                                        <MenuItem value="Stainless Steel">Stainless Steel</MenuItem>
                                                        <MenuItem value="Teracotta">Teracotta</MenuItem>
                                                        <MenuItem value="Neoprene">Neoprene</MenuItem>
                                                        <MenuItem value="Copper">Copper</MenuItem>
                                                        <MenuItem value="Polycarbonate">Polycarbonate</MenuItem>
                                                        <MenuItem value="Recycled">Recycled</MenuItem>
                                                        <MenuItem value="Bronze">Bronze</MenuItem>
                                                        <MenuItem value="Clay">Clay</MenuItem>
                                                        <MenuItem value="Elmwood">Elmwood</MenuItem>
                                                        <MenuItem value="Polyester">Polyester</MenuItem>
                                                        <MenuItem value="Hard-Anodized Aluminum">Hard-Anodized Aluminum</MenuItem>
                                                        <MenuItem value="Leaded Crystal">Leaded Crystal</MenuItem>
                                                        <MenuItem value="Silicone">Silicone</MenuItem>
                                                        <MenuItem value="Cherrywood">Cherrywood</MenuItem>
                                                        <MenuItem value="Marble">Marble</MenuItem>
                                                        <MenuItem value="Nonstick">Nonstick</MenuItem>
                                                        <MenuItem value="Silver">Silver</MenuItem>
                                                        <MenuItem value="Pine">Pine</MenuItem>
                                                        <MenuItem value="Oak">Oak</MenuItem>
                                                        <MenuItem value="Non-Leaded Crystal">Non-Leaded Crystal</MenuItem>
                                                        <MenuItem value="Bamboo">Bamboo</MenuItem>
                                                        <MenuItem value="Fabric">Fabric</MenuItem>
                                                        <MenuItem value="Acrylic">Acrylic</MenuItem>
                                                        <MenuItem value="Crystal">Crystal</MenuItem>
                                                        <MenuItem value="Silver-Plated">Silver-Plated</MenuItem>
                                                        <MenuItem value="Synthetic">Synthetic</MenuItem>
                                                        <MenuItem value="Birch">Birch</MenuItem>
                                                        <MenuItem value="18/8 Steel">18/8 Steel</MenuItem>
                                                        <MenuItem value="Beechwood">Beechwood</MenuItem>
                                                        <MenuItem value="Stoneware">Stoneware</MenuItem>
                                                        <MenuItem value="Brass">Brass</MenuItem>
                                                        <MenuItem value="Multi-ply">Multi-ply</MenuItem>
                                                        <MenuItem value="Glass">Glass</MenuItem>
                                                        <MenuItem value="Leather">Leather</MenuItem>
                                                        <MenuItem value="Iron">Iron</MenuItem>
                                                        <MenuItem value="Plastic">Plastic</MenuItem>
                                                        <MenuItem value="Cotton">Cotton</MenuItem>
                                                        <MenuItem value="Paraffin">Paraffin</MenuItem>
                                                        <MenuItem value="Polyresin">Polyresin</MenuItem>
                                                        <MenuItem value="Wax">Wax</MenuItem>
                                                        <MenuItem value="Bone China">Bone China</MenuItem>
                                                        <MenuItem value="Platinume">Platinume</MenuItem>
                                                        <MenuItem value="Chrome">Chrome</MenuItem>
                                                        <MenuItem value="Mahogany">Mahogany</MenuItem>
                                                        <MenuItem value="Olive Wood">Olive Wood</MenuItem>
                                                        <MenuItem value="18/10 Steel">18/10 Steel</MenuItem>
                                                        <MenuItem value="Rubber">Rubber</MenuItem>
                                                        <MenuItem value="Teak">Teak</MenuItem>
                                                        <MenuItem value="Maple">Maple</MenuItem>
                                                        <MenuItem value="Acrylic Coated Cotton">Acrylic Coated Cotton</MenuItem>
                                                        <MenuItem value="Rosewood">Rosewood</MenuItem>
                                                        <MenuItem value="Cork">Cork</MenuItem>
                                                        <MenuItem value="Melamine">Melamine</MenuItem>
                                                        <MenuItem value="Gilded Gold">Gilded Gold</MenuItem>
                                                        <MenuItem value="HardWood">HardWood</MenuItem>
                                                        <MenuItem value="Steel">Steel</MenuItem>
                                                        <MenuItem value="Carbon">Carbon</MenuItem>
                                                        <MenuItem value="Zinc">Zinc</MenuItem>
                                                        <MenuItem value="Earthenware">Earthenware</MenuItem>
                                                        <MenuItem value="Chromium Steel">Chromium Steel</MenuItem>
                                                        <MenuItem value="Walnut">Walnut</MenuItem>
                                                        <MenuItem value="Cast Iron">Cast Iron</MenuItem>
                                                        <MenuItem value="Rattan & Wicker">Rattan & Wicker</MenuItem>
                                                        <MenuItem value="Tin">Tin</MenuItem>
                                                        <MenuItem value="Ceramic">Ceramic</MenuItem>
                                                        <MenuItem value="Paper">Paper</MenuItem>
                                                        <MenuItem value="Tritan">Tritan</MenuItem>
                                                        <MenuItem value="Nickel">Nickel</MenuItem>
                                                        <MenuItem value="Polycast">Polycast</MenuItem>
                                                        <MenuItem value="Other">Other</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='numberofBoxes'
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2"> Number of Boxes </label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="5"
                                                        id="numberofBoxes"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.numberofBoxes)}
                                                    />
                                                </div>

                                            </>
                                        )}
                                    />
                                </div>
                            </div>
                        </>
                    )
                }
                {
                    formComponents12 && (
                        <>
                            {/* =>  Model,Number of Items,Unit Count,Unit Count Type,Product Care Instructions,Contains Liquid Contents?,Model Name,Number of Pieces,Included Components,Size,Size Map,Color,Material Type,Manufacturer */}
                            <div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='modelnumber'
                                        rules={{
                                            required: "Modal Number is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Model Number </label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="AZL20"
                                                        id="modelnumber"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.modelnumber)}
                                                    />
                                                </div>

                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='numberofitems'
                                        rules={{
                                            required: "Number of Items is required",
                                            pattern: {
                                                value: new RegExp('^[0-9]+$'),
                                                message: "value is invalid"
                                            }
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Number of Items</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="1"
                                                        id="numberofitems"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.numberofitems)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='unitCount'
                                        rules={{
                                            required: "this field is required",
                                            pattern: {
                                                value: new RegExp('^[0-9]+$'),
                                                message: "value is invalid"
                                            }
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Unit Count</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="12"
                                                        id="unitCount"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.unitCount)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="unitCountType"
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Unit Count Type</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        id="unitCountType-select"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        placeholder="women"
                                                        {...field}
                                                        error={Boolean(errors.unitCountType)}

                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="Women">Meters</MenuItem>
                                                        <MenuItem value="Unisex Children">Pouch</MenuItem>
                                                        <MenuItem value="Men">Grams</MenuItem>
                                                        <MenuItem value="Boys">Liters</MenuItem>
                                                        <MenuItem value="Girls">Mililiters</MenuItem>
                                                        <MenuItem value="Set">Set</MenuItem>
                                                        <MenuItem value="Kilograms">Kilograms</MenuItem>
                                                        <MenuItem value="Count">Count</MenuItem>
                                                        <MenuItem value="Square Meters">Square Meters</MenuItem>
                                                        <MenuItem value="Case">Case</MenuItem>
                                                        <MenuItem value="Feet">Feet</MenuItem>
                                                        <MenuItem value="Can">Can</MenuItem>
                                                        <MenuItem value="Pounds">Pounds</MenuItem>
                                                        <MenuItem value="Piece">Piece</MenuItem>
                                                        <MenuItem value="Ounce">Ounce</MenuItem>
                                                        <MenuItem value="Pint">Pint</MenuItem>
                                                        <MenuItem value="Pack">Pack</MenuItem>
                                                        <MenuItem value="Square feet">Square feet</MenuItem>
                                                        <MenuItem value="Fluid Ounces">Fluid Ounces</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='productCareInstruction'
                                        rules={{
                                            required: "this field is required",

                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Product Care Instructions</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="Dry clean only"
                                                        id="productCareInstruction"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.productCareInstruction)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="containsliquidcontent"
                                        rules={{
                                            required: "Contains liquid content is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Contains Liquid Contents?</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        id="containsliquidcontent-select"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        placeholder="select"
                                                        {...field}
                                                        error={Boolean(errors.containsliquidcontent)}
                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="Yes">Yes</MenuItem>
                                                        <MenuItem value="No">No</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row">
                                    <Controller
                                        control={control}
                                        name='modelname'
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Model Name</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="model"
                                                        id="modelname"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.modelname)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='numberofPieces'
                                        rules={{
                                            required: "this field is required",
                                            pattern: {
                                                value: new RegExp('^[0-9]+$'),
                                                message: "value is invalid"
                                            }
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Number of Pieces</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="5"
                                                        id="numberofPieces"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.numberofPieces)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="includedComponent"
                                        rules={{
                                            required: "This field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Included Components</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="1 year manufacturer."
                                                        id="includedComponent"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        onFocus={() => setIsFocused(true)}
                                                        onBlur={() => setIsFocused(false)}
                                                        error={Boolean(errors.includedComponent)}
                                                    />
                                                    {errors.inputValue && <p>{errors.inputValue.message}</p>}

                                                    {isFocused && (
                                                        <ul>
                                                            <li onClick={handleSetIncludedValue} value="remote">remote</li>
                                                            <li>cover</li>
                                                            <li>wheels</li>
                                                        </ul>
                                                    )}
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='productSize'
                                        rules={{
                                            required: "this field is required",

                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Size</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder=""
                                                        id="productSize"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.productSize)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="productSizeMap"
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Size Map</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        id="productSizeMap-select"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        placeholder="select"
                                                        {...field}
                                                        error={Boolean(errors.productSizeMap)}
                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="Extra Large">Extra Large</MenuItem>
                                                        <MenuItem value="Large">Large</MenuItem>
                                                        <MenuItem value="Medium">Medium</MenuItem>
                                                        <MenuItem value="Small">Small</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='productColor'
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Color</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder=""
                                                        id="productColor"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.productColor)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="materialType"
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Material Type</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        id="materialType-select"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        placeholder="select"
                                                        {...field}
                                                        error={Boolean(errors.materialType)}
                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="Nylon">Nylon</MenuItem>
                                                        <MenuItem value="Aluminum">Aluminum</MenuItem>
                                                        <MenuItem value="Solid Gold">Solid Gold</MenuItem>
                                                        <MenuItem value="Cedar">Cedar</MenuItem>
                                                        <MenuItem value="Stone">Stone</MenuItem>
                                                        <MenuItem value="Porcelain">Porcelain</MenuItem>
                                                        <MenuItem value="Porcelain Bone China">Porcelain Bone China</MenuItem>
                                                        <MenuItem value="Pewter">Pewter</MenuItem>
                                                        <MenuItem value="Stainless Steel">Stainless Steel</MenuItem>
                                                        <MenuItem value="Teracotta">Teracotta</MenuItem>
                                                        <MenuItem value="Neoprene">Neoprene</MenuItem>
                                                        <MenuItem value="Copper">Copper</MenuItem>
                                                        <MenuItem value="Polycarbonate">Polycarbonate</MenuItem>
                                                        <MenuItem value="Recycled">Recycled</MenuItem>
                                                        <MenuItem value="Bronze">Bronze</MenuItem>
                                                        <MenuItem value="Clay">Clay</MenuItem>
                                                        <MenuItem value="Elmwood">Elmwood</MenuItem>
                                                        <MenuItem value="Polyester">Polyester</MenuItem>
                                                        <MenuItem value="Hard-Anodized Aluminum">Hard-Anodized Aluminum</MenuItem>
                                                        <MenuItem value="Leaded Crystal">Leaded Crystal</MenuItem>
                                                        <MenuItem value="Silicone">Silicone</MenuItem>
                                                        <MenuItem value="Cherrywood">Cherrywood</MenuItem>
                                                        <MenuItem value="Marble">Marble</MenuItem>
                                                        <MenuItem value="Nonstick">Nonstick</MenuItem>
                                                        <MenuItem value="Silver">Silver</MenuItem>
                                                        <MenuItem value="Pine">Pine</MenuItem>
                                                        <MenuItem value="Oak">Oak</MenuItem>
                                                        <MenuItem value="Non-Leaded Crystal">Non-Leaded Crystal</MenuItem>
                                                        <MenuItem value="Bamboo">Bamboo</MenuItem>
                                                        <MenuItem value="Fabric">Fabric</MenuItem>
                                                        <MenuItem value="Acrylic">Acrylic</MenuItem>
                                                        <MenuItem value="Crystal">Crystal</MenuItem>
                                                        <MenuItem value="Silver-Plated">Silver-Plated</MenuItem>
                                                        <MenuItem value="Synthetic">Synthetic</MenuItem>
                                                        <MenuItem value="Birch">Birch</MenuItem>
                                                        <MenuItem value="18/8 Steel">18/8 Steel</MenuItem>
                                                        <MenuItem value="Beechwood">Beechwood</MenuItem>
                                                        <MenuItem value="Stoneware">Stoneware</MenuItem>
                                                        <MenuItem value="Brass">Brass</MenuItem>
                                                        <MenuItem value="Multi-ply">Multi-ply</MenuItem>
                                                        <MenuItem value="Glass">Glass</MenuItem>
                                                        <MenuItem value="Leather">Leather</MenuItem>
                                                        <MenuItem value="Iron">Iron</MenuItem>
                                                        <MenuItem value="Plastic">Plastic</MenuItem>
                                                        <MenuItem value="Cotton">Cotton</MenuItem>
                                                        <MenuItem value="Paraffin">Paraffin</MenuItem>
                                                        <MenuItem value="Polyresin">Polyresin</MenuItem>
                                                        <MenuItem value="Wax">Wax</MenuItem>
                                                        <MenuItem value="Bone China">Bone China</MenuItem>
                                                        <MenuItem value="Platinume">Platinume</MenuItem>
                                                        <MenuItem value="Chrome">Chrome</MenuItem>
                                                        <MenuItem value="Mahogany">Mahogany</MenuItem>
                                                        <MenuItem value="Olive Wood">Olive Wood</MenuItem>
                                                        <MenuItem value="18/10 Steel">18/10 Steel</MenuItem>
                                                        <MenuItem value="Rubber">Rubber</MenuItem>
                                                        <MenuItem value="Teak">Teak</MenuItem>
                                                        <MenuItem value="Maple">Maple</MenuItem>
                                                        <MenuItem value="Acrylic Coated Cotton">Acrylic Coated Cotton</MenuItem>
                                                        <MenuItem value="Rosewood">Rosewood</MenuItem>
                                                        <MenuItem value="Cork">Cork</MenuItem>
                                                        <MenuItem value="Melamine">Melamine</MenuItem>
                                                        <MenuItem value="Gilded Gold">Gilded Gold</MenuItem>
                                                        <MenuItem value="HardWood">HardWood</MenuItem>
                                                        <MenuItem value="Steel">Steel</MenuItem>
                                                        <MenuItem value="Carbon">Carbon</MenuItem>
                                                        <MenuItem value="Zinc">Zinc</MenuItem>
                                                        <MenuItem value="Earthenware">Earthenware</MenuItem>
                                                        <MenuItem value="Chromium Steel">Chromium Steel</MenuItem>
                                                        <MenuItem value="Walnut">Walnut</MenuItem>
                                                        <MenuItem value="Cast Iron">Cast Iron</MenuItem>
                                                        <MenuItem value="Rattan & Wicker">Rattan & Wicker</MenuItem>
                                                        <MenuItem value="Tin">Tin</MenuItem>
                                                        <MenuItem value="Ceramic">Ceramic</MenuItem>
                                                        <MenuItem value="Paper">Paper</MenuItem>
                                                        <MenuItem value="Tritan">Tritan</MenuItem>
                                                        <MenuItem value="Nickel">Nickel</MenuItem>
                                                        <MenuItem value="Polycast">Polycast</MenuItem>
                                                        <MenuItem value="Other">Other</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='itemManufacturer'
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Manufacturer</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="XYZ Pvt Ltd"
                                                        id="itemManufacturer"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.itemManufacturer)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                            </div>
                        </>
                    )
                }
                {
                    formComponents13 && (
                        <>
                            {/* =>  Model Number(Style Number),Item Dimensions D x W x H,Unit Count,Unit Count Type,Model Name,Included Components */}
                            <div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='modelnumber'
                                        rules={{
                                            required: "Modal Number is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Model Number </label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="AZL20"
                                                        id="modelnumber"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.modelnumber)}
                                                    />
                                                </div>

                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <div className="col-4 col-sm-3 col-lg-3 text-end">
                                        <label className='labelbold'>Item Dimensions D x W x H</label>
                                    </div>
                                    <div className="col-8 col-sm-7 col-lg-6">
                                        <div>
                                            <div className='row align-items-end'>
                                                <Controller
                                                    control={control}
                                                    name='itemDepthfrontToback'
                                                    rules={{
                                                        required: "this field is required",
                                                        pattern: {
                                                            value: new RegExp('^[0-9]+$'),
                                                            message: "not a valid formate"
                                                        }
                                                    }}
                                                    render={({ field }) => (
                                                        <>
                                                            <div className="col-12 col-sm-6">
                                                                <div className='d-flex flex-column' style={{ width: "100%" }}>
                                                                    <label className="labelbold me-2">Item Depth Front To Back</label>
                                                                    <TextField
                                                                        placeholder="30"
                                                                        id="itemDepthfrontToback"
                                                                        variant="outlined"
                                                                        {...field}

                                                                        error={Boolean(errors.itemDepthfrontToback)}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </>
                                                    )}
                                                />
                                                <Controller
                                                    control={control}
                                                    name='itemDepthfrontTobackUnit'
                                                    rules={{
                                                        required: "this is required"
                                                    }}
                                                    render={({ field }) => (
                                                        <>

                                                            <div className="col-12 col-sm-6">
                                                                <TextField
                                                                    id="itemDepthfrontTobackUnit"
                                                                    variant="outlined"
                                                                    select
                                                                    style={{ width: "100%" }}
                                                                    {...field}
                                                                    error={Boolean(errors.itemDepthfrontTobackUnit)}
                                                                >
                                                                    <MenuItem value="">-Select-</MenuItem>
                                                                    <MenuItem value="New">Centimeters</MenuItem>
                                                                </TextField>
                                                            </div>
                                                        </>
                                                    )}

                                                />

                                            </div>
                                            <div className='row align-items-end'>
                                                <Controller
                                                    control={control}
                                                    name='itemWidthsideToside'
                                                    rules={{
                                                        required: "this field is required",
                                                        pattern: {
                                                            value: new RegExp('^[0-9]+$'),
                                                            message: "not a valid formate"
                                                        }
                                                    }}
                                                    render={({ field }) => (
                                                        <>
                                                            <div className="col-12 col-sm-6">
                                                                <div className='d-flex flex-column' style={{ width: "100%" }}>
                                                                    <label className="labelbold me-2">Item Width Side to Side</label>
                                                                    <TextField
                                                                        placeholder="25"
                                                                        id="itemWidthsideToside"
                                                                        variant="outlined"
                                                                        {...field}
                                                                        error={Boolean(errors.itemWidthsideToside)}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </>
                                                    )}
                                                />
                                                <Controller
                                                    control={control}
                                                    name='itemWidthsideTosideUnit'
                                                    rules={{
                                                        required: "this field is required"
                                                    }}
                                                    render={({ field }) => (
                                                        <>
                                                            <div className="col-12 col-sm-6">
                                                                <TextField
                                                                    id="itemWidthsideTosideUnit"
                                                                    variant="outlined"
                                                                    select
                                                                    style={{ width: "100%" }}
                                                                    {...field}
                                                                    error={Boolean(errors.itemWidthsideTosideUnit)}
                                                                >
                                                                    <MenuItem value="">-Select-</MenuItem>
                                                                    <MenuItem value="New">Centimeters</MenuItem>
                                                                </TextField>
                                                            </div>
                                                        </>
                                                    )}
                                                />
                                            </div>
                                            <div className='row align-items-end'>
                                                <Controller
                                                    control={control}
                                                    name='itemHeightbaseTotop'
                                                    rules={{
                                                        required: "this field is required",
                                                        pattern: {
                                                            value: new RegExp('^[0-9]+$'),
                                                            message: "not a valid formate"
                                                        }
                                                    }}
                                                    render={({ field }) => (
                                                        <>
                                                            <div className="col-12 col-sm-6">
                                                                <div className='d-flex flex-column' style={{ width: "100%" }}>
                                                                    <label className="labelbold me-2">Height Base to Top</label>
                                                                    <TextField
                                                                        placeholder="80"
                                                                        id="itemHeightbaseTotop"
                                                                        variant="outlined"
                                                                        {...field}

                                                                        error={Boolean(errors.itemHeightbaseTotop)}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </>
                                                    )}
                                                />
                                                <Controller
                                                    control={control}
                                                    name='itemHeightbaseTotopUnit'
                                                    rules={{
                                                        required: "this field is required"
                                                    }}
                                                    render={({ field }) => (
                                                        <>
                                                            <div className="col-12 col-sm-6">
                                                                <TextField
                                                                    id="itemHeightbaseTotopUnit"
                                                                    variant="outlined"
                                                                    select
                                                                    style={{ width: "100%" }}
                                                                    {...field}
                                                                    error={Boolean(errors.itemHeightbaseTotopUnit)}
                                                                >
                                                                    <MenuItem value="">-Select-</MenuItem>
                                                                    <MenuItem value="New">Centimeters</MenuItem>

                                                                </TextField>
                                                            </div>
                                                        </>
                                                    )}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='unitCount'
                                        rules={{
                                            required: "this field is required",
                                            pattern: {
                                                value: new RegExp('^[0-9]+$'),
                                                message: "value is invalid"
                                            }
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Unit Count</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="12"
                                                        id="unitCount"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.unitCount)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="unitCountType"
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Unit Count Type</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        id="unitCountType-select"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        placeholder="women"
                                                        {...field}
                                                        error={Boolean(errors.unitCountType)}

                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="Women">Meters</MenuItem>
                                                        <MenuItem value="Unisex Children">Pouch</MenuItem>
                                                        <MenuItem value="Men">Grams</MenuItem>
                                                        <MenuItem value="Boys">Liters</MenuItem>
                                                        <MenuItem value="Girls">Mililiters</MenuItem>
                                                        <MenuItem value="Set">Set</MenuItem>
                                                        <MenuItem value="Kilograms">Kilograms</MenuItem>
                                                        <MenuItem value="Count">Count</MenuItem>
                                                        <MenuItem value="Square Meters">Square Meters</MenuItem>
                                                        <MenuItem value="Case">Case</MenuItem>
                                                        <MenuItem value="Feet">Feet</MenuItem>
                                                        <MenuItem value="Can">Can</MenuItem>
                                                        <MenuItem value="Pounds">Pounds</MenuItem>
                                                        <MenuItem value="Piece">Piece</MenuItem>
                                                        <MenuItem value="Ounce">Ounce</MenuItem>
                                                        <MenuItem value="Pint">Pint</MenuItem>
                                                        <MenuItem value="Pack">Pack</MenuItem>
                                                        <MenuItem value="Square feet">Square feet</MenuItem>
                                                        <MenuItem value="Fluid Ounces">Fluid Ounces</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row">
                                    <Controller
                                        control={control}
                                        name='modelname'
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Model Name</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="model"
                                                        id="modelname"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.modelname)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="includedComponent"
                                        rules={{
                                            required: "This field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Included Components</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="Camera Body,Battery Pack"
                                                        id="includedComponent"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.includedComponent)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                            </div>
                        </>
                    )
                }
                {
                    formComponents14 && (
                        <>
                            {/* =>  Model Number(Style Number),Item Dimensions D x W x H,Included Components */}
                            <div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='modelnumber'
                                        rules={{
                                            required: "Modal Number is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Model Number </label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="AZL20"
                                                        id="modelnumber"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.modelnumber)}
                                                    />
                                                </div>

                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <div className="col-4 col-sm-3 col-lg-3 text-end">
                                        <label className='labelbold'>Item Dimensions D x W x H</label>
                                    </div>
                                    <div className="col-8 col-sm-7 col-lg-6">
                                        <div>
                                            <div className='row align-items-end'>
                                                <Controller
                                                    control={control}
                                                    name='itemDepthfrontToback'
                                                    rules={{
                                                        required: "this field is required",
                                                        pattern: {
                                                            value: new RegExp('^[0-9]+$'),
                                                            message: "not a valid formate"
                                                        }
                                                    }}
                                                    render={({ field }) => (
                                                        <>
                                                            <div className="col-12 col-sm-6">
                                                                <div className='d-flex flex-column' style={{ width: "100%" }}>
                                                                    <label className="labelbold me-2">Item Depth Front To Back</label>
                                                                    <TextField
                                                                        placeholder="30"
                                                                        id="itemDepthfrontToback"
                                                                        variant="outlined"
                                                                        {...field}

                                                                        error={Boolean(errors.itemDepthfrontToback)}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </>
                                                    )}
                                                />
                                                <Controller
                                                    control={control}
                                                    name='itemDepthfrontTobackUnit'
                                                    rules={{
                                                        required: "this is required"
                                                    }}
                                                    render={({ field }) => (
                                                        <>

                                                            <div className="col-12 col-sm-6">
                                                                <TextField
                                                                    id="itemDepthfrontTobackUnit"
                                                                    variant="outlined"
                                                                    select
                                                                    style={{ width: "100%" }}
                                                                    {...field}
                                                                    error={Boolean(errors.itemDepthfrontTobackUnit)}
                                                                >
                                                                    <MenuItem value="">-Select-</MenuItem>
                                                                    <MenuItem value="New">Centimeters</MenuItem>
                                                                </TextField>
                                                            </div>
                                                        </>
                                                    )}

                                                />

                                            </div>
                                            <div className='row align-items-end'>
                                                <Controller
                                                    control={control}
                                                    name='itemWidthsideToside'
                                                    rules={{
                                                        required: "this field is required",
                                                        pattern: {
                                                            value: new RegExp('^[0-9]+$'),
                                                            message: "not a valid formate"
                                                        }
                                                    }}
                                                    render={({ field }) => (
                                                        <>
                                                            <div className="col-12 col-sm-6">
                                                                <div className='d-flex flex-column' style={{ width: "100%" }}>
                                                                    <label className="labelbold me-2">Item Width Side to Side</label>
                                                                    <TextField
                                                                        placeholder="25"
                                                                        id="itemWidthsideToside"
                                                                        variant="outlined"
                                                                        {...field}
                                                                        error={Boolean(errors.itemWidthsideToside)}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </>
                                                    )}
                                                />
                                                <Controller
                                                    control={control}
                                                    name='itemWidthsideTosideUnit'
                                                    rules={{
                                                        required: "this field is required"
                                                    }}
                                                    render={({ field }) => (
                                                        <>
                                                            <div className="col-12 col-sm-6">
                                                                <TextField
                                                                    id="itemWidthsideTosideUnit"
                                                                    variant="outlined"
                                                                    select
                                                                    style={{ width: "100%" }}
                                                                    {...field}
                                                                    error={Boolean(errors.itemWidthsideTosideUnit)}
                                                                >
                                                                    <MenuItem value="">-Select-</MenuItem>
                                                                    <MenuItem value="New">Centimeters</MenuItem>
                                                                </TextField>
                                                            </div>
                                                        </>
                                                    )}
                                                />
                                            </div>
                                            <div className='row align-items-end'>
                                                <Controller
                                                    control={control}
                                                    name='itemHeightbaseTotop'
                                                    rules={{
                                                        required: "this field is required",
                                                        pattern: {
                                                            value: new RegExp('^[0-9]+$'),
                                                            message: "not a valid formate"
                                                        }
                                                    }}
                                                    render={({ field }) => (
                                                        <>
                                                            <div className="col-12 col-sm-6">
                                                                <div className='d-flex flex-column' style={{ width: "100%" }}>
                                                                    <label className="labelbold me-2">Height Base to Top</label>
                                                                    <TextField
                                                                        placeholder="80"
                                                                        id="itemHeightbaseTotop"
                                                                        variant="outlined"
                                                                        {...field}

                                                                        error={Boolean(errors.itemHeightbaseTotop)}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </>
                                                    )}
                                                />
                                                <Controller
                                                    control={control}
                                                    name='itemHeightbaseTotopUnit'
                                                    rules={{
                                                        required: "this field is required"
                                                    }}
                                                    render={({ field }) => (
                                                        <>
                                                            <div className="col-12 col-sm-6">
                                                                <TextField
                                                                    id="itemHeightbaseTotopUnit"
                                                                    variant="outlined"
                                                                    select
                                                                    style={{ width: "100%" }}
                                                                    {...field}
                                                                    error={Boolean(errors.itemHeightbaseTotopUnit)}
                                                                >
                                                                    <MenuItem value="">-Select-</MenuItem>
                                                                    <MenuItem value="New">Centimeters</MenuItem>

                                                                </TextField>
                                                            </div>
                                                        </>
                                                    )}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="includedComponent"
                                        rules={{
                                            required: "This field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Included Components</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="Camera Body,Battery Pack"
                                                        id="includedComponent"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.includedComponent)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                            </div>
                        </>
                    )
                }
                {
                    formComponents15 && (
                        <>
                            {/* Manufacturer Part Number,Unit Count,Unit Count Type,Color */}
                            <div>
                                <div>
                                    <Controller
                                        control={control}
                                        name='manufacturepartno'
                                        rules={{
                                            required: "Manufacturer Part Number is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className='d-flex align-items-center mb-3'>
                                                    <label className="labelbold me-2">Manufacturer Part Number </label>
                                                    <TextField
                                                        placeholder="SB-122"
                                                        id="manufacturepartno"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "50%" }}
                                                        error={Boolean(errors.manufacturepartno)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />

                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='unitCount'
                                        rules={{
                                            required: "this field is required",
                                            pattern: {
                                                value: new RegExp('^[0-9]+$'),
                                                message: "value is invalid"
                                            }
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Unit Count</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="12"
                                                        id="unitCount"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.unitCount)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="unitCountType"
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Unit Count Type</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        id="unitCountType-select"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        placeholder="women"
                                                        {...field}
                                                        error={Boolean(errors.unitCountType)}

                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="Women">Meters</MenuItem>
                                                        <MenuItem value="Unisex Children">Pouch</MenuItem>
                                                        <MenuItem value="Men">Grams</MenuItem>
                                                        <MenuItem value="Boys">Liters</MenuItem>
                                                        <MenuItem value="Girls">Mililiters</MenuItem>
                                                        <MenuItem value="Set">Set</MenuItem>
                                                        <MenuItem value="Kilograms">Kilograms</MenuItem>
                                                        <MenuItem value="Count">Count</MenuItem>
                                                        <MenuItem value="Square Meters">Square Meters</MenuItem>
                                                        <MenuItem value="Case">Case</MenuItem>
                                                        <MenuItem value="Feet">Feet</MenuItem>
                                                        <MenuItem value="Can">Can</MenuItem>
                                                        <MenuItem value="Pounds">Pounds</MenuItem>
                                                        <MenuItem value="Piece">Piece</MenuItem>
                                                        <MenuItem value="Ounce">Ounce</MenuItem>
                                                        <MenuItem value="Pint">Pint</MenuItem>
                                                        <MenuItem value="Pack">Pack</MenuItem>
                                                        <MenuItem value="Square feet">Square feet</MenuItem>
                                                        <MenuItem value="Fluid Ounces">Fluid Ounces</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='productColor'
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Color</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder=""
                                                        id="productColor"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.productColor)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                            </div>
                        </>
                    )
                }
                {
                    formComponents16 && (
                        // =>  Product Care Instructions,Number of Pieces,Included Components,Size,Material Type,Unit Count,Unit Count Type
                        <>
                            <div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='productCareInstruction'
                                        rules={{
                                            required: "this field is required",

                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Product Care Instructions</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="Dry clean only"
                                                        id="productCareInstruction"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.productCareInstruction)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='numberofPieces'
                                        rules={{
                                            required: "this field is required",
                                            pattern: {
                                                value: new RegExp('^[0-9]+$'),
                                                message: "value is invalid"
                                            }
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Number of Pieces</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="5"
                                                        id="numberofPieces"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.numberofPieces)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="includedComponent"
                                        rules={{
                                            required: "This field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Included Components</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="Camera Body,Battery Pack"
                                                        id="includedComponent"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.includedComponent)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='productSize'
                                        rules={{
                                            required: "this field is required",

                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Size</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder=""
                                                        id="productSize"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.productSize)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="materialType"
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Material Type</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        id="materialType-select"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        placeholder="select"
                                                        {...field}
                                                        error={Boolean(errors.materialType)}
                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="Nylon">Nylon</MenuItem>
                                                        <MenuItem value="Aluminum">Aluminum</MenuItem>
                                                        <MenuItem value="Solid Gold">Solid Gold</MenuItem>
                                                        <MenuItem value="Cedar">Cedar</MenuItem>
                                                        <MenuItem value="Stone">Stone</MenuItem>
                                                        <MenuItem value="Porcelain">Porcelain</MenuItem>
                                                        <MenuItem value="Porcelain Bone China">Porcelain Bone China</MenuItem>
                                                        <MenuItem value="Pewter">Pewter</MenuItem>
                                                        <MenuItem value="Stainless Steel">Stainless Steel</MenuItem>
                                                        <MenuItem value="Teracotta">Teracotta</MenuItem>
                                                        <MenuItem value="Neoprene">Neoprene</MenuItem>
                                                        <MenuItem value="Copper">Copper</MenuItem>
                                                        <MenuItem value="Polycarbonate">Polycarbonate</MenuItem>
                                                        <MenuItem value="Recycled">Recycled</MenuItem>
                                                        <MenuItem value="Bronze">Bronze</MenuItem>
                                                        <MenuItem value="Clay">Clay</MenuItem>
                                                        <MenuItem value="Elmwood">Elmwood</MenuItem>
                                                        <MenuItem value="Polyester">Polyester</MenuItem>
                                                        <MenuItem value="Hard-Anodized Aluminum">Hard-Anodized Aluminum</MenuItem>
                                                        <MenuItem value="Leaded Crystal">Leaded Crystal</MenuItem>
                                                        <MenuItem value="Silicone">Silicone</MenuItem>
                                                        <MenuItem value="Cherrywood">Cherrywood</MenuItem>
                                                        <MenuItem value="Marble">Marble</MenuItem>
                                                        <MenuItem value="Nonstick">Nonstick</MenuItem>
                                                        <MenuItem value="Silver">Silver</MenuItem>
                                                        <MenuItem value="Pine">Pine</MenuItem>
                                                        <MenuItem value="Oak">Oak</MenuItem>
                                                        <MenuItem value="Non-Leaded Crystal">Non-Leaded Crystal</MenuItem>
                                                        <MenuItem value="Bamboo">Bamboo</MenuItem>
                                                        <MenuItem value="Fabric">Fabric</MenuItem>
                                                        <MenuItem value="Acrylic">Acrylic</MenuItem>
                                                        <MenuItem value="Crystal">Crystal</MenuItem>
                                                        <MenuItem value="Silver-Plated">Silver-Plated</MenuItem>
                                                        <MenuItem value="Synthetic">Synthetic</MenuItem>
                                                        <MenuItem value="Birch">Birch</MenuItem>
                                                        <MenuItem value="18/8 Steel">18/8 Steel</MenuItem>
                                                        <MenuItem value="Beechwood">Beechwood</MenuItem>
                                                        <MenuItem value="Stoneware">Stoneware</MenuItem>
                                                        <MenuItem value="Brass">Brass</MenuItem>
                                                        <MenuItem value="Multi-ply">Multi-ply</MenuItem>
                                                        <MenuItem value="Glass">Glass</MenuItem>
                                                        <MenuItem value="Leather">Leather</MenuItem>
                                                        <MenuItem value="Iron">Iron</MenuItem>
                                                        <MenuItem value="Plastic">Plastic</MenuItem>
                                                        <MenuItem value="Cotton">Cotton</MenuItem>
                                                        <MenuItem value="Paraffin">Paraffin</MenuItem>
                                                        <MenuItem value="Polyresin">Polyresin</MenuItem>
                                                        <MenuItem value="Wax">Wax</MenuItem>
                                                        <MenuItem value="Bone China">Bone China</MenuItem>
                                                        <MenuItem value="Platinume">Platinume</MenuItem>
                                                        <MenuItem value="Chrome">Chrome</MenuItem>
                                                        <MenuItem value="Mahogany">Mahogany</MenuItem>
                                                        <MenuItem value="Olive Wood">Olive Wood</MenuItem>
                                                        <MenuItem value="18/10 Steel">18/10 Steel</MenuItem>
                                                        <MenuItem value="Rubber">Rubber</MenuItem>
                                                        <MenuItem value="Teak">Teak</MenuItem>
                                                        <MenuItem value="Maple">Maple</MenuItem>
                                                        <MenuItem value="Acrylic Coated Cotton">Acrylic Coated Cotton</MenuItem>
                                                        <MenuItem value="Rosewood">Rosewood</MenuItem>
                                                        <MenuItem value="Cork">Cork</MenuItem>
                                                        <MenuItem value="Melamine">Melamine</MenuItem>
                                                        <MenuItem value="Gilded Gold">Gilded Gold</MenuItem>
                                                        <MenuItem value="HardWood">HardWood</MenuItem>
                                                        <MenuItem value="Steel">Steel</MenuItem>
                                                        <MenuItem value="Carbon">Carbon</MenuItem>
                                                        <MenuItem value="Zinc">Zinc</MenuItem>
                                                        <MenuItem value="Earthenware">Earthenware</MenuItem>
                                                        <MenuItem value="Chromium Steel">Chromium Steel</MenuItem>
                                                        <MenuItem value="Walnut">Walnut</MenuItem>
                                                        <MenuItem value="Cast Iron">Cast Iron</MenuItem>
                                                        <MenuItem value="Rattan & Wicker">Rattan & Wicker</MenuItem>
                                                        <MenuItem value="Tin">Tin</MenuItem>
                                                        <MenuItem value="Ceramic">Ceramic</MenuItem>
                                                        <MenuItem value="Paper">Paper</MenuItem>
                                                        <MenuItem value="Tritan">Tritan</MenuItem>
                                                        <MenuItem value="Nickel">Nickel</MenuItem>
                                                        <MenuItem value="Polycast">Polycast</MenuItem>
                                                        <MenuItem value="Other">Other</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='unitCount'
                                        rules={{
                                            required: "this field is required",
                                            pattern: {
                                                value: new RegExp('^[0-9]+$'),
                                                message: "value is invalid"
                                            }
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Unit Count</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="12"
                                                        id="unitCount"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.unitCount)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="unitCountType"
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Unit Count Type</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        id="unitCountType-select"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        placeholder="women"
                                                        {...field}
                                                        error={Boolean(errors.unitCountType)}

                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="Women">Meters</MenuItem>
                                                        <MenuItem value="Unisex Children">Pouch</MenuItem>
                                                        <MenuItem value="Men">Grams</MenuItem>
                                                        <MenuItem value="Boys">Liters</MenuItem>
                                                        <MenuItem value="Girls">Mililiters</MenuItem>
                                                        <MenuItem value="Set">Set</MenuItem>
                                                        <MenuItem value="Kilograms">Kilograms</MenuItem>
                                                        <MenuItem value="Count">Count</MenuItem>
                                                        <MenuItem value="Square Meters">Square Meters</MenuItem>
                                                        <MenuItem value="Case">Case</MenuItem>
                                                        <MenuItem value="Feet">Feet</MenuItem>
                                                        <MenuItem value="Can">Can</MenuItem>
                                                        <MenuItem value="Pounds">Pounds</MenuItem>
                                                        <MenuItem value="Piece">Piece</MenuItem>
                                                        <MenuItem value="Ounce">Ounce</MenuItem>
                                                        <MenuItem value="Pint">Pint</MenuItem>
                                                        <MenuItem value="Pack">Pack</MenuItem>
                                                        <MenuItem value="Square feet">Square feet</MenuItem>
                                                        <MenuItem value="Fluid Ounces">Fluid Ounces</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                            </div>
                        </>
                    )
                }
                {
                    formComponents17 && (
                        //     // formComponents17 =>  Product Care Instructions,Number of Pieces,Included Components,Size,Material Type
                        <>
                            <div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='productCareInstruction'
                                        rules={{
                                            required: "this field is required",

                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Product Care Instructions</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="Dry clean only"
                                                        id="productCareInstruction"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.productCareInstruction)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='numberofPieces'
                                        rules={{
                                            required: "this field is required",
                                            pattern: {
                                                value: new RegExp('^[0-9]+$'),
                                                message: "value is invalid"
                                            }
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Number of Pieces</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="5"
                                                        id="numberofPieces"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.numberofPieces)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="includedComponent"
                                        rules={{
                                            required: "This field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Included Components</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="Camera Body,Battery Pack"
                                                        id="includedComponent"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.includedComponent)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='productSize'
                                        rules={{
                                            required: "this field is required",

                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Size</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder=""
                                                        id="productSize"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.productSize)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="materialType"
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Material Type</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        id="materialType-select"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        placeholder="select"
                                                        {...field}
                                                        error={Boolean(errors.materialType)}
                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="Nylon">Nylon</MenuItem>
                                                        <MenuItem value="Aluminum">Aluminum</MenuItem>
                                                        <MenuItem value="Solid Gold">Solid Gold</MenuItem>
                                                        <MenuItem value="Cedar">Cedar</MenuItem>
                                                        <MenuItem value="Stone">Stone</MenuItem>
                                                        <MenuItem value="Porcelain">Porcelain</MenuItem>
                                                        <MenuItem value="Porcelain Bone China">Porcelain Bone China</MenuItem>
                                                        <MenuItem value="Pewter">Pewter</MenuItem>
                                                        <MenuItem value="Stainless Steel">Stainless Steel</MenuItem>
                                                        <MenuItem value="Teracotta">Teracotta</MenuItem>
                                                        <MenuItem value="Neoprene">Neoprene</MenuItem>
                                                        <MenuItem value="Copper">Copper</MenuItem>
                                                        <MenuItem value="Polycarbonate">Polycarbonate</MenuItem>
                                                        <MenuItem value="Recycled">Recycled</MenuItem>
                                                        <MenuItem value="Bronze">Bronze</MenuItem>
                                                        <MenuItem value="Clay">Clay</MenuItem>
                                                        <MenuItem value="Elmwood">Elmwood</MenuItem>
                                                        <MenuItem value="Polyester">Polyester</MenuItem>
                                                        <MenuItem value="Hard-Anodized Aluminum">Hard-Anodized Aluminum</MenuItem>
                                                        <MenuItem value="Leaded Crystal">Leaded Crystal</MenuItem>
                                                        <MenuItem value="Silicone">Silicone</MenuItem>
                                                        <MenuItem value="Cherrywood">Cherrywood</MenuItem>
                                                        <MenuItem value="Marble">Marble</MenuItem>
                                                        <MenuItem value="Nonstick">Nonstick</MenuItem>
                                                        <MenuItem value="Silver">Silver</MenuItem>
                                                        <MenuItem value="Pine">Pine</MenuItem>
                                                        <MenuItem value="Oak">Oak</MenuItem>
                                                        <MenuItem value="Non-Leaded Crystal">Non-Leaded Crystal</MenuItem>
                                                        <MenuItem value="Bamboo">Bamboo</MenuItem>
                                                        <MenuItem value="Fabric">Fabric</MenuItem>
                                                        <MenuItem value="Acrylic">Acrylic</MenuItem>
                                                        <MenuItem value="Crystal">Crystal</MenuItem>
                                                        <MenuItem value="Silver-Plated">Silver-Plated</MenuItem>
                                                        <MenuItem value="Synthetic">Synthetic</MenuItem>
                                                        <MenuItem value="Birch">Birch</MenuItem>
                                                        <MenuItem value="18/8 Steel">18/8 Steel</MenuItem>
                                                        <MenuItem value="Beechwood">Beechwood</MenuItem>
                                                        <MenuItem value="Stoneware">Stoneware</MenuItem>
                                                        <MenuItem value="Brass">Brass</MenuItem>
                                                        <MenuItem value="Multi-ply">Multi-ply</MenuItem>
                                                        <MenuItem value="Glass">Glass</MenuItem>
                                                        <MenuItem value="Leather">Leather</MenuItem>
                                                        <MenuItem value="Iron">Iron</MenuItem>
                                                        <MenuItem value="Plastic">Plastic</MenuItem>
                                                        <MenuItem value="Cotton">Cotton</MenuItem>
                                                        <MenuItem value="Paraffin">Paraffin</MenuItem>
                                                        <MenuItem value="Polyresin">Polyresin</MenuItem>
                                                        <MenuItem value="Wax">Wax</MenuItem>
                                                        <MenuItem value="Bone China">Bone China</MenuItem>
                                                        <MenuItem value="Platinume">Platinume</MenuItem>
                                                        <MenuItem value="Chrome">Chrome</MenuItem>
                                                        <MenuItem value="Mahogany">Mahogany</MenuItem>
                                                        <MenuItem value="Olive Wood">Olive Wood</MenuItem>
                                                        <MenuItem value="18/10 Steel">18/10 Steel</MenuItem>
                                                        <MenuItem value="Rubber">Rubber</MenuItem>
                                                        <MenuItem value="Teak">Teak</MenuItem>
                                                        <MenuItem value="Maple">Maple</MenuItem>
                                                        <MenuItem value="Acrylic Coated Cotton">Acrylic Coated Cotton</MenuItem>
                                                        <MenuItem value="Rosewood">Rosewood</MenuItem>
                                                        <MenuItem value="Cork">Cork</MenuItem>
                                                        <MenuItem value="Melamine">Melamine</MenuItem>
                                                        <MenuItem value="Gilded Gold">Gilded Gold</MenuItem>
                                                        <MenuItem value="HardWood">HardWood</MenuItem>
                                                        <MenuItem value="Steel">Steel</MenuItem>
                                                        <MenuItem value="Carbon">Carbon</MenuItem>
                                                        <MenuItem value="Zinc">Zinc</MenuItem>
                                                        <MenuItem value="Earthenware">Earthenware</MenuItem>
                                                        <MenuItem value="Chromium Steel">Chromium Steel</MenuItem>
                                                        <MenuItem value="Walnut">Walnut</MenuItem>
                                                        <MenuItem value="Cast Iron">Cast Iron</MenuItem>
                                                        <MenuItem value="Rattan & Wicker">Rattan & Wicker</MenuItem>
                                                        <MenuItem value="Tin">Tin</MenuItem>
                                                        <MenuItem value="Ceramic">Ceramic</MenuItem>
                                                        <MenuItem value="Paper">Paper</MenuItem>
                                                        <MenuItem value="Tritan">Tritan</MenuItem>
                                                        <MenuItem value="Nickel">Nickel</MenuItem>
                                                        <MenuItem value="Polycast">Polycast</MenuItem>
                                                        <MenuItem value="Other">Other</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>

                            </div>
                        </>
                    )
                }
                {
                    formComponents18 ? (
                        <>
                            {/* formComponents18 =>  Model(Number),Number of Items,Item Dimensions D x W x H,Unit Count,Unit Count Type,Product Care Instructions, Contains Liquid Contents?, Is Assembly Required, Number of Pieces, Included Components, Size, Color, Material Type,Product Expiration Type,Fulfillment Center Shelf Life */}
                            <div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='modelnumber'
                                        rules={{
                                            required: "Modal Number is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Model</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="AZL20"
                                                        id="modelnumber"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.modelnumber)}
                                                    />
                                                </div>

                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='numberofitems'
                                        rules={{
                                            required: "Number of Items is required",
                                            pattern: {
                                                value: new RegExp('^[0-9]+$'),
                                                message: "value is invalid"
                                            }
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Number of Items</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="1"
                                                        id="numberofitems"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.numberofitems)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <div className="col-4 col-sm-3 col-lg-3 text-end">
                                        <label className='labelbold'>Item Dimensions D x W x H</label>
                                    </div>
                                    <div className="col-8 col-sm-7 col-lg-6">
                                        <div>
                                            <div className='row align-items-end'>
                                                <Controller
                                                    control={control}
                                                    name='itemDepthfrontToback'
                                                    rules={{
                                                        required: "this field is required",
                                                        pattern: {
                                                            value: new RegExp('^[0-9]+$'),
                                                            message: "not a valid formate"
                                                        }
                                                    }}
                                                    render={({ field }) => (
                                                        <>
                                                            <div className="col-12 col-sm-6">
                                                                <div className='d-flex flex-column' style={{ width: "100%" }}>
                                                                    <label className="labelbold me-2">Item Depth Front To Back</label>
                                                                    <TextField
                                                                        placeholder="30"
                                                                        id="itemDepthfrontToback"
                                                                        variant="outlined"
                                                                        {...field}

                                                                        error={Boolean(errors.itemDepthfrontToback)}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </>
                                                    )}
                                                />
                                                <Controller
                                                    control={control}
                                                    name='itemDepthfrontTobackUnit'
                                                    rules={{
                                                        required: "this is required"
                                                    }}
                                                    render={({ field }) => (
                                                        <>

                                                            <div className="col-12 col-sm-6">
                                                                <TextField
                                                                    id="itemDepthfrontTobackUnit"
                                                                    variant="outlined"
                                                                    select
                                                                    style={{ width: "100%" }}
                                                                    {...field}
                                                                    error={Boolean(errors.itemDepthfrontTobackUnit)}
                                                                >
                                                                    <MenuItem value="">-Select-</MenuItem>
                                                                    <MenuItem value="New">Centimeters</MenuItem>
                                                                </TextField>
                                                            </div>
                                                        </>
                                                    )}

                                                />

                                            </div>
                                            <div className='row align-items-end'>
                                                <Controller
                                                    control={control}
                                                    name='itemWidthsideToside'
                                                    rules={{
                                                        required: "this field is required",
                                                        pattern: {
                                                            value: new RegExp('^[0-9]+$'),
                                                            message: "not a valid formate"
                                                        }
                                                    }}
                                                    render={({ field }) => (
                                                        <>
                                                            <div className="col-12 col-sm-6">
                                                                <div className='d-flex flex-column' style={{ width: "100%" }}>
                                                                    <label className="labelbold me-2">Item Width Side to Side</label>
                                                                    <TextField
                                                                        placeholder="25"
                                                                        id="itemWidthsideToside"
                                                                        variant="outlined"
                                                                        {...field}
                                                                        error={Boolean(errors.itemWidthsideToside)}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </>
                                                    )}
                                                />
                                                <Controller
                                                    control={control}
                                                    name='itemWidthsideTosideUnit'
                                                    rules={{
                                                        required: "this field is required"
                                                    }}
                                                    render={({ field }) => (
                                                        <>
                                                            <div className="col-12 col-sm-6">
                                                                <TextField
                                                                    id="itemWidthsideTosideUnit"
                                                                    variant="outlined"
                                                                    select
                                                                    style={{ width: "100%" }}
                                                                    {...field}
                                                                    error={Boolean(errors.itemWidthsideTosideUnit)}
                                                                >
                                                                    <MenuItem value="">-Select-</MenuItem>
                                                                    <MenuItem value="New">Centimeters</MenuItem>
                                                                </TextField>
                                                            </div>
                                                        </>
                                                    )}
                                                />
                                            </div>
                                            <div className='row align-items-end'>
                                                <Controller
                                                    control={control}
                                                    name='itemHeightbaseTotop'
                                                    rules={{
                                                        required: "this field is required",
                                                        pattern: {
                                                            value: new RegExp('^[0-9]+$'),
                                                            message: "not a valid formate"
                                                        }
                                                    }}
                                                    render={({ field }) => (
                                                        <>
                                                            <div className="col-12 col-sm-6">
                                                                <div className='d-flex flex-column' style={{ width: "100%" }}>
                                                                    <label className="labelbold me-2">Height Base to Top</label>
                                                                    <TextField
                                                                        placeholder="80"
                                                                        id="itemHeightbaseTotop"
                                                                        variant="outlined"
                                                                        {...field}

                                                                        error={Boolean(errors.itemHeightbaseTotop)}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </>
                                                    )}
                                                />
                                                <Controller
                                                    control={control}
                                                    name='itemHeightbaseTotopUnit'
                                                    rules={{
                                                        required: "this field is required"
                                                    }}
                                                    render={({ field }) => (
                                                        <>
                                                            <div className="col-12 col-sm-6">
                                                                <TextField
                                                                    id="itemHeightbaseTotopUnit"
                                                                    variant="outlined"
                                                                    select
                                                                    style={{ width: "100%" }}
                                                                    {...field}
                                                                    error={Boolean(errors.itemHeightbaseTotopUnit)}
                                                                >
                                                                    <MenuItem value="">-Select-</MenuItem>
                                                                    <MenuItem value="New">Centimeters</MenuItem>

                                                                </TextField>
                                                            </div>
                                                        </>
                                                    )}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='unitCount'
                                        rules={{
                                            required: "this field is required",
                                            pattern: {
                                                value: new RegExp('^[0-9]+$'),
                                                message: "value is invalid"
                                            }
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Unit Count</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="12"
                                                        id="unitCount"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.unitCount)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="unitCountType"
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Unit Count Type</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        id="unitCountType-select"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        placeholder="women"
                                                        {...field}
                                                        error={Boolean(errors.unitCountType)}

                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="Women">Meters</MenuItem>
                                                        <MenuItem value="Unisex Children">Pouch</MenuItem>
                                                        <MenuItem value="Men">Grams</MenuItem>
                                                        <MenuItem value="Boys">Liters</MenuItem>
                                                        <MenuItem value="Girls">Mililiters</MenuItem>
                                                        <MenuItem value="Set">Set</MenuItem>
                                                        <MenuItem value="Kilograms">Kilograms</MenuItem>
                                                        <MenuItem value="Count">Count</MenuItem>
                                                        <MenuItem value="Square Meters">Square Meters</MenuItem>
                                                        <MenuItem value="Case">Case</MenuItem>
                                                        <MenuItem value="Feet">Feet</MenuItem>
                                                        <MenuItem value="Can">Can</MenuItem>
                                                        <MenuItem value="Pounds">Pounds</MenuItem>
                                                        <MenuItem value="Piece">Piece</MenuItem>
                                                        <MenuItem value="Ounce">Ounce</MenuItem>
                                                        <MenuItem value="Pint">Pint</MenuItem>
                                                        <MenuItem value="Pack">Pack</MenuItem>
                                                        <MenuItem value="Square feet">Square feet</MenuItem>
                                                        <MenuItem value="Fluid Ounces">Fluid Ounces</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='productCareInstruction'
                                        rules={{
                                            required: "this field is required",

                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Product Care Instructions</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="Dry clean only"
                                                        id="productCareInstruction"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.productCareInstruction)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="containsliquidcontent"
                                        rules={{
                                            required: "Contains liquid content is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Contains Liquid Contents?</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        id="containsliquidcontent-select"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        placeholder="select"
                                                        {...field}
                                                        error={Boolean(errors.containsliquidcontent)}
                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="Yes">Yes</MenuItem>
                                                        <MenuItem value="No">No</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="assemblyRequired"
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Is Assembly Required</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        id="assemblyRequired-select"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        placeholder="select"
                                                        {...field}
                                                        error={Boolean(errors.assemblyRequired)}
                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="Yes">Yes</MenuItem>
                                                        <MenuItem value="No">No</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='numberofPieces'
                                        rules={{
                                            required: "this field is required",
                                            pattern: {
                                                value: new RegExp('^[0-9]+$'),
                                                message: "value is invalid"
                                            }
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Number of Pieces</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="5"
                                                        id="numberofPieces"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.numberofPieces)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="includedComponent"
                                        rules={{
                                            required: "This field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Included Components</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="Camera Body,Battery Pack"
                                                        id="includedComponent"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.includedComponent)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='productSize'
                                        rules={{
                                            required: "this field is required",

                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Size</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder=""
                                                        id="productSize"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.productSize)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='productColor'
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Color</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder=""
                                                        id="productColor"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.productColor)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                {/* Material-type-16 */}
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="materialType"
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Material Type</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        id="materialType-select"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        placeholder="select"
                                                        {...field}
                                                        error={Boolean(errors.materialType)}
                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="Tempered Glass">Tempered Glass</MenuItem>
                                                        <MenuItem value="Stoneware">Stoneware</MenuItem>
                                                        <MenuItem value="Brass">Brass</MenuItem>
                                                        <MenuItem value="Glass">Glass</MenuItem>
                                                        <MenuItem value="Silicone">Silicone</MenuItem>
                                                        <MenuItem value="Aluminum">Aluminum</MenuItem>
                                                        <MenuItem value="Borosilicate Glass">Borosilicate Glass</MenuItem>
                                                        <MenuItem value="Plastic">Plastic</MenuItem>
                                                        <MenuItem value="Metal">Metal</MenuItem>
                                                        <MenuItem value="Polypropylene">Polypropylene</MenuItem>
                                                        <MenuItem value="Porcelain">Porcelain</MenuItem>
                                                        <MenuItem value="Stainless Steel">Stainless Steel</MenuItem>
                                                        <MenuItem value="Titanium">Titanium</MenuItem>
                                                        <MenuItem value="Acrylonitrile Butadiene Styrene">Acrylonitrile Butadiene Styrene</MenuItem>
                                                        <MenuItem value="Copper">Copper</MenuItem>
                                                        <MenuItem value="Polycarbonate">Polycarbonate</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="productExpirationType"
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Product Expiration Type</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        id="productExpirationType-select"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        placeholder="Expiration Date Required"
                                                        {...field}
                                                        error={Boolean(errors.productExpirationType)}
                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="Does Not Expire">Does Not Expire</MenuItem>
                                                        <MenuItem value="Expiration Date Required">Expiration Date Required</MenuItem>
                                                        <MenuItem value="Expiration On Package">Expiration On Package</MenuItem>
                                                        <MenuItem value="Production Date Required">Production Date Required</MenuItem>
                                                        <MenuItem value="Shelf Life">Shelf Life</MenuItem>

                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <div className="col-4 col-sm-3 col-lg-3 text-end">
                                        <label className='labelbold'>Fulfillment Center Shelf Life</label>
                                    </div>
                                    <div className="col-8 col-sm-7 col-lg-6">
                                        <div>
                                            <div className='row align-items-end'>
                                                <Controller
                                                    control={control}
                                                    name='productFulfilmentCenterShelfLife'
                                                    rules={{
                                                        required: "this field is required",
                                                        pattern: {
                                                            value: new RegExp('^[0-9]+$'),
                                                            message: "not a valid formate"
                                                        }
                                                    }}
                                                    render={({ field }) => (
                                                        <>
                                                            <div className="col-12 col-sm-6">
                                                                <TextField
                                                                    placeholder="365"
                                                                    id="productFulfilmentCenterShelfLife"
                                                                    variant="outlined"
                                                                    {...field}
                                                                    style={{ width: "100%" }}

                                                                    error={Boolean(errors.productFulfilmentCenterShelfLife)}
                                                                />
                                                            </div>
                                                        </>
                                                    )}
                                                />
                                                <Controller
                                                    control={control}
                                                    name='productFulfilmentCenterShelfLifeUnit'
                                                    rules={{
                                                        required: "this is required"
                                                    }}
                                                    render={({ field }) => (
                                                        <>
                                                            <div className="col-12 col-sm-6">
                                                                <TextField
                                                                    id="productFulfilmentCenterShelfLifeUnit"
                                                                    variant="outlined"
                                                                    select
                                                                    style={{ width: "100%" }}
                                                                    {...field}
                                                                    error={Boolean(errors.productFulfilmentCenterShelfLifeUnit)}
                                                                >
                                                                    <MenuItem value="">-Select-</MenuItem>
                                                                    <MenuItem value="Hours">Hours</MenuItem>
                                                                    <MenuItem value="Second">Second</MenuItem>
                                                                    <MenuItem value="Minutes">Minutes</MenuItem>
                                                                    <MenuItem value="Days">Days</MenuItem>
                                                                </TextField>
                                                            </div>
                                                        </>
                                                    )}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>) : ""
                }
                {
                    formComponents19 ? (
                        <>
                            {/* // formComponents19 =>  Model(Number),Number of Items,Item Dimensions W x H,Unit Count,Unit Count Type,Product Care Instructions, Contains Liquid Contents?, Model Name,Capacity, Number of Pieces, Included Components, Is Fragile,Number Of Sets, Size, Color,Colour Map, Material Type, */}
                            <div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='modelnumber'
                                        rules={{
                                            required: "Modal Number is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Model</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="AZL20"
                                                        id="modelnumber"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.modelnumber)}
                                                    />
                                                </div>

                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='numberofitems'
                                        rules={{
                                            required: "Number of Items is required",
                                            pattern: {
                                                value: new RegExp('^[0-9]+$'),
                                                message: "value is invalid"
                                            }
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Number of Items</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="1"
                                                        id="numberofitems"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.numberofitems)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <div className="col-4 col-sm-3 col-lg-3 text-end">
                                        <label className='labelbold'>Item Dimensions W x H</label>
                                    </div>
                                    <div className="col-8 col-sm-7 col-lg-6">
                                        <div>
                                            <div className='row align-items-end'>
                                                <Controller
                                                    control={control}
                                                    name='itemWidthWidestPoint'
                                                    rules={{
                                                        required: "this field is required",
                                                        pattern: {
                                                            value: new RegExp('^[0-9]+$'),
                                                            message: "not a valid formate"
                                                        }
                                                    }}
                                                    render={({ field }) => (
                                                        <>
                                                            <div className="col-12 col-sm-6">
                                                                <div className='d-flex flex-column' style={{ width: "100%" }}>
                                                                    <label className="labelbold me-2">Item Width Widest Point</label>
                                                                    <TextField
                                                                        placeholder="30"
                                                                        id="itemWidthWidestPoint"
                                                                        variant="outlined"
                                                                        {...field}
                                                                        error={Boolean(errors.itemWidthWidestPoint)}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </>
                                                    )}
                                                />
                                                <Controller
                                                    control={control}
                                                    name='itemWidthWidestPointUnit'
                                                    rules={{
                                                        required: "this is required"
                                                    }}
                                                    render={({ field }) => (
                                                        <>

                                                            <div className="col-12 col-sm-6">
                                                                <TextField
                                                                    id="itemWidthWidestPointUnit"
                                                                    variant="outlined"
                                                                    select
                                                                    style={{ width: "100%" }}
                                                                    {...field}
                                                                    error={Boolean(errors.itemWidthWidestPointUnit)}
                                                                >
                                                                    <MenuItem value="">-Select-</MenuItem>
                                                                    <MenuItem value="New">Centimeters</MenuItem>
                                                                </TextField>
                                                            </div>
                                                        </>
                                                    )}

                                                />

                                            </div>
                                            <div className='row align-items-end'>
                                                <Controller
                                                    control={control}
                                                    name='itemHeightbaseTotop'
                                                    rules={{
                                                        required: "this field is required",
                                                        pattern: {
                                                            value: new RegExp('^[0-9]+$'),
                                                            message: "not a valid formate"
                                                        }
                                                    }}
                                                    render={({ field }) => (
                                                        <>
                                                            <div className="col-12 col-sm-6">
                                                                <div className='d-flex flex-column' style={{ width: "100%" }}>
                                                                    <label className="labelbold me-2">Height Base to Top</label>
                                                                    <TextField
                                                                        placeholder="80"
                                                                        id="itemHeightbaseTotop"
                                                                        variant="outlined"
                                                                        {...field}

                                                                        error={Boolean(errors.itemHeightbaseTotop)}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </>
                                                    )}
                                                />
                                                <Controller
                                                    control={control}
                                                    name='itemHeightbaseTotopUnit'
                                                    rules={{
                                                        required: "this field is required"
                                                    }}
                                                    render={({ field }) => (
                                                        <>
                                                            <div className="col-12 col-sm-6">
                                                                <TextField
                                                                    id="itemHeightbaseTotopUnit"
                                                                    variant="outlined"
                                                                    select
                                                                    style={{ width: "100%" }}
                                                                    {...field}
                                                                    error={Boolean(errors.itemHeightbaseTotopUnit)}
                                                                >
                                                                    <MenuItem value="">-Select-</MenuItem>
                                                                    <MenuItem value="New">Centimeters</MenuItem>

                                                                </TextField>
                                                            </div>
                                                        </>
                                                    )}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='unitCount'
                                        rules={{
                                            required: "this field is required",
                                            pattern: {
                                                value: new RegExp('^[0-9]+$'),
                                                message: "value is invalid"
                                            }
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Unit Count</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="12"
                                                        id="unitCount"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.unitCount)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="unitCountType"
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Unit Count Type</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        id="unitCountType-select"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        placeholder="women"
                                                        {...field}
                                                        error={Boolean(errors.unitCountType)}

                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="Women">Meters</MenuItem>
                                                        <MenuItem value="Unisex Children">Pouch</MenuItem>
                                                        <MenuItem value="Men">Grams</MenuItem>
                                                        <MenuItem value="Boys">Liters</MenuItem>
                                                        <MenuItem value="Girls">Mililiters</MenuItem>
                                                        <MenuItem value="Set">Set</MenuItem>
                                                        <MenuItem value="Kilograms">Kilograms</MenuItem>
                                                        <MenuItem value="Count">Count</MenuItem>
                                                        <MenuItem value="Square Meters">Square Meters</MenuItem>
                                                        <MenuItem value="Case">Case</MenuItem>
                                                        <MenuItem value="Feet">Feet</MenuItem>
                                                        <MenuItem value="Can">Can</MenuItem>
                                                        <MenuItem value="Pounds">Pounds</MenuItem>
                                                        <MenuItem value="Piece">Piece</MenuItem>
                                                        <MenuItem value="Ounce">Ounce</MenuItem>
                                                        <MenuItem value="Pint">Pint</MenuItem>
                                                        <MenuItem value="Pack">Pack</MenuItem>
                                                        <MenuItem value="Square feet">Square feet</MenuItem>
                                                        <MenuItem value="Fluid Ounces">Fluid Ounces</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='productCareInstruction'
                                        rules={{
                                            required: "this field is required",

                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Product Care Instructions</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="Dry clean only"
                                                        id="productCareInstruction"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.productCareInstruction)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="containsliquidcontent"
                                        rules={{
                                            required: "Contains liquid content is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Contains Liquid Contents?</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        id="containsliquidcontent-select"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        placeholder="select"
                                                        {...field}
                                                        error={Boolean(errors.containsliquidcontent)}
                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="Yes">Yes</MenuItem>
                                                        <MenuItem value="No">No</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row">
                                    <Controller
                                        control={control}
                                        name='modelname'
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Model Name</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="model"
                                                        id="modelname"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.modelname)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className='row' style={{ marginTop: "10px" }}>

                                    <div className="col-4 col-sm-3 col-lg-3 text-end">
                                        <label className="labelbold me-2">Capacity</label>
                                    </div>
                                    <div className="col-8 col-sm-7 col-lg-6">
                                        <div className='row'>
                                            <Controller
                                                control={control}
                                                name='productCapacity'
                                                rules={{
                                                    required: "productCapacity is required",
                                                    pattern: {
                                                        value: new RegExp('^[0-9]+$'),
                                                        message: "not a valid formate"
                                                    }
                                                }}
                                                render={({ field }) => (
                                                    <>

                                                        <div className='col-12 col-sm-6'>
                                                            <TextField
                                                                placeholder="2.33,20,100"
                                                                id="productCapacity"
                                                                variant="outlined"
                                                                {...field}
                                                                style={{ width: "100%" }}
                                                                error={Boolean(errors.productCapacity)}
                                                            />
                                                        </div>
                                                    </>
                                                )}
                                            />
                                            <Controller
                                                control={control}
                                                name='productCapacityUnit'
                                                rules={{
                                                    required: "productCapacityUnit is required"
                                                }}
                                                render={({ field }) => (
                                                    <>
                                                        <div className='col-12 col-sm-6'>
                                                            <TextField
                                                                id="productCapacityUnit"
                                                                variant="outlined"
                                                                select
                                                                style={{ width: "100%" }}
                                                                {...field}
                                                                error={Boolean(errors.productCapacityUnit)}
                                                            >
                                                                <MenuItem value="">-Select-</MenuItem>
                                                                <MenuItem value="Liters">Liters</MenuItem>
                                                                <MenuItem value="Quarts">Quarts</MenuItem>
                                                                <MenuItem value="Fluid Ounces">Fluid Ounces</MenuItem>
                                                                <MenuItem value="Ounces">Ounces</MenuItem>
                                                                <MenuItem value="Mililiters">Mililiters</MenuItem>
                                                                <MenuItem value="Cubic Feet">Cubic Feet</MenuItem>
                                                                <MenuItem value="Microliters">Microliters</MenuItem>
                                                                <MenuItem value="Cubic Centimeters">Cubic Centimeters</MenuItem>
                                                                <MenuItem value="Pints">Pints</MenuItem>
                                                                <MenuItem value="Gallons">Gallons</MenuItem>
                                                                <MenuItem value="Pounds">Pounds</MenuItem>
                                                                <MenuItem value="Tons">Tons</MenuItem>
                                                                <MenuItem value="Cubic Inches">Cubic Inches</MenuItem>
                                                                <MenuItem value="Kilogram">Kilogram</MenuItem>
                                                            </TextField>
                                                        </div>
                                                    </>
                                                )}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='numberofPieces'
                                        rules={{
                                            required: "this field is required",
                                            pattern: {
                                                value: new RegExp('^[0-9]+$'),
                                                message: "value is invalid"
                                            }
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Number of Pieces</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="5"
                                                        id="numberofPieces"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.numberofPieces)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="includedComponent"
                                        rules={{
                                            required: "This field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Included Components</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="Camera Body,Battery Pack"
                                                        id="includedComponent"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.includedComponent)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="productFragile"
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Is Fragile</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        id="productFragile-select"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        placeholder="select"
                                                        {...field}
                                                        error={Boolean(errors.productFragile)}
                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="Yes">Yes</MenuItem>
                                                        <MenuItem value="No">No</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='numberofSets'
                                        rules={{
                                            required: "this field is required",
                                            pattern: {
                                                value: new RegExp('^[0-9]+$'),
                                                message: "value is invalid"
                                            }
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Number Of Sets</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="5"
                                                        id="numberofSets"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.numberofSets)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='productSize'
                                        rules={{
                                            required: "this field is required",

                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Size</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder=""
                                                        id="productSize"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.productSize)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='productColor'
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Color</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder=""
                                                        id="productColor"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.productColor)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="productColorMap"
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Colour Map</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        id="productColorMap-select"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        placeholder="select"
                                                        {...field}
                                                        error={Boolean(errors.productColorMap)}
                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="Bronze">Bronze</MenuItem>
                                                        <MenuItem value="Brown">Brown</MenuItem>
                                                        <MenuItem value="Gold">Gold</MenuItem>
                                                        <MenuItem value="Blue">Blue</MenuItem>
                                                        <MenuItem value="Multicolor">Multicolor</MenuItem>
                                                        <MenuItem value="Black">Black</MenuItem>
                                                        <MenuItem value="Orange">Orange</MenuItem>
                                                        <MenuItem value="Clear">Clear</MenuItem>
                                                        <MenuItem value="Red">Red</MenuItem>
                                                        <MenuItem value="Silver">Silver</MenuItem>
                                                        <MenuItem value="Pink">Pink</MenuItem>
                                                        <MenuItem value="White">White</MenuItem>
                                                        <MenuItem value="Metalic">Metalic</MenuItem>
                                                        <MenuItem value="Beige">Beige</MenuItem>
                                                        <MenuItem value="Purple">Purple</MenuItem>
                                                        <MenuItem value="Yellow">Yellow</MenuItem>
                                                        <MenuItem value="Turquoise">Turquoise</MenuItem>
                                                        <MenuItem value="Green">Green</MenuItem>
                                                        <MenuItem value="Grey">Grey</MenuItem>
                                                        <MenuItem value="Offwhite">Offwhite</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="materialType"
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Material Type</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        id="materialType-select"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        placeholder="select"
                                                        {...field}
                                                        error={Boolean(errors.materialType)}
                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="Stoneware">Stoneware</MenuItem>
                                                        <MenuItem value="Brass">Brass</MenuItem>
                                                        <MenuItem value="Glass">Glass</MenuItem>
                                                        <MenuItem value="Silicone">Silicone</MenuItem>
                                                        <MenuItem value="Iron">Iron</MenuItem>
                                                        <MenuItem value="Aluminum">Aluminum</MenuItem>
                                                        <MenuItem value="Borosilicate Glass">Borosilicate Glass</MenuItem>
                                                        <MenuItem value="Plastic">Plastic</MenuItem>
                                                        <MenuItem value="Metal">Metal</MenuItem>
                                                        <MenuItem value="Bone China"> Bone China</MenuItem>
                                                        <MenuItem value="Pewter">Pewter</MenuItem>
                                                        <MenuItem value="Polypropylene">Polypropylene</MenuItem>
                                                        <MenuItem value="Porcelain">Porcelain</MenuItem>
                                                        <MenuItem value="Stainless Steel">Stainless Steel</MenuItem>
                                                        <MenuItem value="Resin">Resin</MenuItem>
                                                        <MenuItem value="Terracotta">Terracotta</MenuItem>
                                                        <MenuItem value="Copper">Copper</MenuItem>
                                                        <MenuItem value="Polycarbonate">Polycarbonate</MenuItem>
                                                        <MenuItem value="Wood">Wood</MenuItem>
                                                        <MenuItem value="Melamine">Melamine</MenuItem>
                                                        <MenuItem value="Polyethylene (PE)">Polyethylene (PE)</MenuItem>
                                                        <MenuItem value="Earthenware">Earthenware</MenuItem>
                                                        <MenuItem value="Silver">Silver</MenuItem>
                                                        <MenuItem value="Alloy Steel">Alloy Steel</MenuItem>
                                                        <MenuItem value="Ceramic">Ceramic</MenuItem>
                                                        <MenuItem value="Bamboo">Bamboo</MenuItem>
                                                        <MenuItem value="Acrylic">Acrylic</MenuItem>

                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>

                            </div>
                        </>
                    ) : ""
                }
                {
                    formComponents20 ? (
                        <>
                            {/* // formComponents20 =>  Model (Number),Number of Items,Product Care Instructions,Contains Liquid Contents?,Is Assembly Required,Model Name,Number of Pieces,Included Components,Size,Material Type,Number of Boxes,Item Dimensions D x W x H */}
                            <div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='modelnumber'
                                        rules={{
                                            required: "Modal Number is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Model</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="AZL20"
                                                        id="modelnumber"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.modelnumber)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='numberofitems'
                                        rules={{
                                            required: "Number of Items is required",
                                            pattern: {
                                                value: new RegExp('^[0-9]+$'),
                                                message: "value is invalid"
                                            }
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Number of Items</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="1"
                                                        id="numberofitems"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.numberofitems)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='productCareInstruction'
                                        rules={{
                                            required: "this field is required",

                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Product Care Instructions</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="Dry clean only"
                                                        id="productCareInstruction"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.productCareInstruction)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="containsliquidcontent"
                                        rules={{
                                            required: "Contains liquid content is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Contains Liquid Contents?</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        id="containsliquidcontent-select"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        placeholder="select"
                                                        {...field}
                                                        error={Boolean(errors.containsliquidcontent)}
                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="Yes">Yes</MenuItem>
                                                        <MenuItem value="No">No</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="assemblyRequired"
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Is Assembly Required</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        id="assemblyRequired-select"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        placeholder="select"
                                                        {...field}
                                                        error={Boolean(errors.assemblyRequired)}
                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="Yes">Yes</MenuItem>
                                                        <MenuItem value="No">No</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row">
                                    <Controller
                                        control={control}
                                        name='modelname'
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Model Name</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="model"
                                                        id="modelname"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.modelname)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='numberofPieces'
                                        rules={{
                                            required: "this field is required",
                                            pattern: {
                                                value: new RegExp('^[0-9]+$'),
                                                message: "value is invalid"
                                            }
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Number of Pieces</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="5"
                                                        id="numberofPieces"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.numberofPieces)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="includedComponent"
                                        rules={{
                                            required: "This field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Included Components</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="Camera Body,Battery Pack"
                                                        id="includedComponent"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.includedComponent)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='productSize'
                                        rules={{
                                            required: "this field is required",

                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Size</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder=""
                                                        id="productSize"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.productSize)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="materialType"
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Material Type</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        id="materialType-select"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        placeholder="select"
                                                        {...field}
                                                        error={Boolean(errors.materialType)}
                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="Stoneware">Stoneware</MenuItem>
                                                        <MenuItem value="Brass">Brass</MenuItem>
                                                        <MenuItem value="Glass">Glass</MenuItem>
                                                        <MenuItem value="Silicone">Silicone</MenuItem>
                                                        <MenuItem value="Iron">Iron</MenuItem>
                                                        <MenuItem value="Aluminum">Aluminum</MenuItem>
                                                        <MenuItem value="Borosilicate Glass">Borosilicate Glass</MenuItem>
                                                        <MenuItem value="Plastic">Plastic</MenuItem>
                                                        <MenuItem value="Metal">Metal</MenuItem>
                                                        <MenuItem value="Bone China"> Bone China</MenuItem>
                                                        <MenuItem value="Pewter">Pewter</MenuItem>
                                                        <MenuItem value="Polypropylene">Polypropylene</MenuItem>
                                                        <MenuItem value="Porcelain">Porcelain</MenuItem>
                                                        <MenuItem value="Stainless Steel">Stainless Steel</MenuItem>
                                                        <MenuItem value="Resin">Resin</MenuItem>
                                                        <MenuItem value="Terracotta">Terracotta</MenuItem>
                                                        <MenuItem value="Copper">Copper</MenuItem>
                                                        <MenuItem value="Polycarbonate">Polycarbonate</MenuItem>
                                                        <MenuItem value="Wood">Wood</MenuItem>
                                                        <MenuItem value="Melamine">Melamine</MenuItem>
                                                        <MenuItem value="Polyethylene (PE)">Polyethylene (PE)</MenuItem>
                                                        <MenuItem value="Earthenware">Earthenware</MenuItem>
                                                        <MenuItem value="Silver">Silver</MenuItem>
                                                        <MenuItem value="Alloy Steel">Alloy Steel</MenuItem>
                                                        <MenuItem value="Ceramic">Ceramic</MenuItem>
                                                        <MenuItem value="Bamboo">Bamboo</MenuItem>
                                                        <MenuItem value="Acrylic">Acrylic</MenuItem>

                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='numberofBoxes'
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2"> Number of Boxes </label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="5"
                                                        id="numberofBoxes"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.numberofBoxes)}
                                                    />
                                                </div>

                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <div className="col-4 col-sm-3 col-lg-3 text-end">
                                        <label className='labelbold'>Item Dimensions D x W x H</label>
                                    </div>
                                    <div className="col-8 col-sm-7 col-lg-6">
                                        <div>
                                            <div className='row align-items-end'>
                                                <Controller
                                                    control={control}
                                                    name='itemDepthfrontToback'
                                                    rules={{
                                                        required: "this field is required",
                                                        pattern: {
                                                            value: new RegExp('^[0-9]+$'),
                                                            message: "not a valid formate"
                                                        }
                                                    }}
                                                    render={({ field }) => (
                                                        <>
                                                            <div className="col-12 col-sm-6">
                                                                <div className='d-flex flex-column' style={{ width: "100%" }}>
                                                                    <label className="labelbold me-2">Item Depth Front To Back</label>
                                                                    <TextField
                                                                        placeholder="30"
                                                                        id="itemDepthfrontToback"
                                                                        variant="outlined"
                                                                        {...field}

                                                                        error={Boolean(errors.itemDepthfrontToback)}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </>
                                                    )}
                                                />
                                                <Controller
                                                    control={control}
                                                    name='itemDepthfrontTobackUnit'
                                                    rules={{
                                                        required: "this is required"
                                                    }}
                                                    render={({ field }) => (
                                                        <>

                                                            <div className="col-12 col-sm-6">
                                                                <TextField
                                                                    id="itemDepthfrontTobackUnit"
                                                                    variant="outlined"
                                                                    select
                                                                    style={{ width: "100%" }}
                                                                    {...field}
                                                                    error={Boolean(errors.itemDepthfrontTobackUnit)}
                                                                >
                                                                    <MenuItem value="">-Select-</MenuItem>
                                                                    <MenuItem value="New">Centimeters</MenuItem>
                                                                </TextField>
                                                            </div>
                                                        </>
                                                    )}

                                                />

                                            </div>
                                            <div className='row align-items-end'>
                                                <Controller
                                                    control={control}
                                                    name='itemWidthsideToside'
                                                    rules={{
                                                        required: "this field is required",
                                                        pattern: {
                                                            value: new RegExp('^[0-9]+$'),
                                                            message: "not a valid formate"
                                                        }
                                                    }}
                                                    render={({ field }) => (
                                                        <>
                                                            <div className="col-12 col-sm-6">
                                                                <div className='d-flex flex-column' style={{ width: "100%" }}>
                                                                    <label className="labelbold me-2">Item Width Side to Side</label>
                                                                    <TextField
                                                                        placeholder="25"
                                                                        id="itemWidthsideToside"
                                                                        variant="outlined"
                                                                        {...field}
                                                                        error={Boolean(errors.itemWidthsideToside)}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </>
                                                    )}
                                                />
                                                <Controller
                                                    control={control}
                                                    name='itemWidthsideTosideUnit'
                                                    rules={{
                                                        required: "this field is required"
                                                    }}
                                                    render={({ field }) => (
                                                        <>
                                                            <div className="col-12 col-sm-6">
                                                                <TextField
                                                                    id="itemWidthsideTosideUnit"
                                                                    variant="outlined"
                                                                    select
                                                                    style={{ width: "100%" }}
                                                                    {...field}
                                                                    error={Boolean(errors.itemWidthsideTosideUnit)}
                                                                >
                                                                    <MenuItem value="">-Select-</MenuItem>
                                                                    <MenuItem value="New">Centimeters</MenuItem>
                                                                </TextField>
                                                            </div>
                                                        </>
                                                    )}
                                                />
                                            </div>
                                            <div className='row align-items-end'>
                                                <Controller
                                                    control={control}
                                                    name='itemHeightbaseTotop'
                                                    rules={{
                                                        required: "this field is required",
                                                        pattern: {
                                                            value: new RegExp('^[0-9]+$'),
                                                            message: "not a valid formate"
                                                        }
                                                    }}
                                                    render={({ field }) => (
                                                        <>
                                                            <div className="col-12 col-sm-6">
                                                                <div className='d-flex flex-column' style={{ width: "100%" }}>
                                                                    <label className="labelbold me-2">Height Base to Top</label>
                                                                    <TextField
                                                                        placeholder="80"
                                                                        id="itemHeightbaseTotop"
                                                                        variant="outlined"
                                                                        {...field}

                                                                        error={Boolean(errors.itemHeightbaseTotop)}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </>
                                                    )}
                                                />
                                                <Controller
                                                    control={control}
                                                    name='itemHeightbaseTotopUnit'
                                                    rules={{
                                                        required: "this field is required"
                                                    }}
                                                    render={({ field }) => (
                                                        <>
                                                            <div className="col-12 col-sm-6">
                                                                <TextField
                                                                    id="itemHeightbaseTotopUnit"
                                                                    variant="outlined"
                                                                    select
                                                                    style={{ width: "100%" }}
                                                                    {...field}
                                                                    error={Boolean(errors.itemHeightbaseTotopUnit)}
                                                                >
                                                                    <MenuItem value="">-Select-</MenuItem>
                                                                    <MenuItem value="New">Centimeters</MenuItem>
                                                                </TextField>
                                                            </div>
                                                        </>
                                                    )}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : ""
                }
                {
                    formComponents21 ? (
                        <>
                            {/* // formComponents21 =>  Model,Number of Items,Unit Count,Unit Count Type,Product Care Instructions,Contains Liquid Contents?,Is Assembly Required,Number of Pieces,Included Components,Size,Material Type,Number of Boxes,Item Dimensions L x W x H,Color */}
                            <div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='modelnumber'
                                        rules={{
                                            required: "Modal Number is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Model</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="AZL20"
                                                        id="modelnumber"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.modelnumber)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='numberofitems'
                                        rules={{
                                            required: "Number of Items is required",
                                            pattern: {
                                                value: new RegExp('^[0-9]+$'),
                                                message: "value is invalid"
                                            }
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Number of Items</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="1"
                                                        id="numberofitems"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.numberofitems)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='unitCount'
                                        rules={{
                                            required: "this field is required",
                                            pattern: {
                                                value: new RegExp('^[0-9]+$'),
                                                message: "value is invalid"
                                            }
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Unit Count</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="12"
                                                        id="unitCount"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.unitCount)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="unitCountType"
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Unit Count Type</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        id="unitCountType-select"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        placeholder="women"
                                                        {...field}
                                                        error={Boolean(errors.unitCountType)}

                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="Women">Meters</MenuItem>
                                                        <MenuItem value="Unisex Children">Pouch</MenuItem>
                                                        <MenuItem value="Men">Grams</MenuItem>
                                                        <MenuItem value="Boys">Liters</MenuItem>
                                                        <MenuItem value="Girls">Mililiters</MenuItem>
                                                        <MenuItem value="Set">Set</MenuItem>
                                                        <MenuItem value="Kilograms">Kilograms</MenuItem>
                                                        <MenuItem value="Count">Count</MenuItem>
                                                        <MenuItem value="Square Meters">Square Meters</MenuItem>
                                                        <MenuItem value="Case">Case</MenuItem>
                                                        <MenuItem value="Feet">Feet</MenuItem>
                                                        <MenuItem value="Can">Can</MenuItem>
                                                        <MenuItem value="Pounds">Pounds</MenuItem>
                                                        <MenuItem value="Piece">Piece</MenuItem>
                                                        <MenuItem value="Ounce">Ounce</MenuItem>
                                                        <MenuItem value="Pint">Pint</MenuItem>
                                                        <MenuItem value="Pack">Pack</MenuItem>
                                                        <MenuItem value="Square feet">Square feet</MenuItem>
                                                        <MenuItem value="Fluid Ounces">Fluid Ounces</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='productCareInstruction'
                                        rules={{
                                            required: "this field is required",

                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Product Care Instructions</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="Dry clean only"
                                                        id="productCareInstruction"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.productCareInstruction)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="containsliquidcontent"
                                        rules={{
                                            required: "Contains liquid content is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Contains Liquid Contents?</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        id="containsliquidcontent-select"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        placeholder="select"
                                                        {...field}
                                                        error={Boolean(errors.containsliquidcontent)}
                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="Yes">Yes</MenuItem>
                                                        <MenuItem value="No">No</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="assemblyRequired"
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Is Assembly Required</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        id="assemblyRequired-select"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        placeholder="select"
                                                        {...field}
                                                        error={Boolean(errors.assemblyRequired)}
                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="Yes">Yes</MenuItem>
                                                        <MenuItem value="No">No</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='numberofPieces'
                                        rules={{
                                            required: "this field is required",
                                            pattern: {
                                                value: new RegExp('^[0-9]+$'),
                                                message: "value is invalid"
                                            }
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Number of Pieces</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="5"
                                                        id="numberofPieces"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.numberofPieces)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <div className="col-4 col-sm-3 col-lg-3 text-end">
                                        <label className="labelbold me-2">Included Components</label>
                                    </div>
                                    <div className="col-8 col-sm-7 col-lg-6"></div>

                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='productSize'
                                        rules={{
                                            required: "this field is required",

                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Size</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder=""
                                                        id="productSize"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.productSize)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>


                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="materialType"
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Material Type</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        id="materialType-select"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        placeholder="select"
                                                        {...field}
                                                        error={Boolean(errors.materialType)}
                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="Nylon">Nylon</MenuItem>
                                                        <MenuItem value="Aluminum">Aluminum</MenuItem>
                                                        <MenuItem value="Solid Gold">Solid Gold</MenuItem>
                                                        <MenuItem value="Cedar">Cedar</MenuItem>
                                                        <MenuItem value="Stone">Stone</MenuItem>
                                                        <MenuItem value="Porcelain">Porcelain</MenuItem>
                                                        <MenuItem value="Porcelain Bone China">Porcelain Bone China</MenuItem>
                                                        <MenuItem value="Pewter">Pewter</MenuItem>
                                                        <MenuItem value="Stainless Steel">Stainless Steel</MenuItem>
                                                        <MenuItem value="Teracotta">Teracotta</MenuItem>
                                                        <MenuItem value="Neoprene">Neoprene</MenuItem>
                                                        <MenuItem value="Copper">Copper</MenuItem>
                                                        <MenuItem value="Polycarbonate">Polycarbonate</MenuItem>
                                                        <MenuItem value="Recycled">Recycled</MenuItem>
                                                        <MenuItem value="Bronze">Bronze</MenuItem>
                                                        <MenuItem value="Clay">Clay</MenuItem>
                                                        <MenuItem value="Elmwood">Elmwood</MenuItem>
                                                        <MenuItem value="Polyester">Polyester</MenuItem>
                                                        <MenuItem value="Hard-Anodized Aluminum">Hard-Anodized Aluminum</MenuItem>
                                                        <MenuItem value="Leaded Crystal">Leaded Crystal</MenuItem>
                                                        <MenuItem value="Silicone">Silicone</MenuItem>
                                                        <MenuItem value="Cherrywood">Cherrywood</MenuItem>
                                                        <MenuItem value="Marble">Marble</MenuItem>
                                                        <MenuItem value="Nonstick">Nonstick</MenuItem>
                                                        <MenuItem value="Silver">Silver</MenuItem>
                                                        <MenuItem value="Pine">Pine</MenuItem>
                                                        <MenuItem value="Oak">Oak</MenuItem>
                                                        <MenuItem value="Non-Leaded Crystal">Non-Leaded Crystal</MenuItem>
                                                        <MenuItem value="Bamboo">Bamboo</MenuItem>
                                                        <MenuItem value="Fabric">Fabric</MenuItem>
                                                        <MenuItem value="Acrylic">Acrylic</MenuItem>
                                                        <MenuItem value="Crystal">Crystal</MenuItem>
                                                        <MenuItem value="Silver-Plated">Silver-Plated</MenuItem>
                                                        <MenuItem value="Synthetic">Synthetic</MenuItem>
                                                        <MenuItem value="Birch">Birch</MenuItem>
                                                        <MenuItem value="18/8 Steel">18/8 Steel</MenuItem>
                                                        <MenuItem value="Beechwood">Beechwood</MenuItem>
                                                        <MenuItem value="Stoneware">Stoneware</MenuItem>
                                                        <MenuItem value="Brass">Brass</MenuItem>
                                                        <MenuItem value="Multi-ply">Multi-ply</MenuItem>
                                                        <MenuItem value="Glass">Glass</MenuItem>
                                                        <MenuItem value="Leather">Leather</MenuItem>
                                                        <MenuItem value="Iron">Iron</MenuItem>
                                                        <MenuItem value="Plastic">Plastic</MenuItem>
                                                        <MenuItem value="Cotton">Cotton</MenuItem>
                                                        <MenuItem value="Paraffin">Paraffin</MenuItem>
                                                        <MenuItem value="Polyresin">Polyresin</MenuItem>
                                                        <MenuItem value="Wax">Wax</MenuItem>
                                                        <MenuItem value="Bone China">Bone China</MenuItem>
                                                        <MenuItem value="Platinume">Platinume</MenuItem>
                                                        <MenuItem value="Chrome">Chrome</MenuItem>
                                                        <MenuItem value="Mahogany">Mahogany</MenuItem>
                                                        <MenuItem value="Olive Wood">Olive Wood</MenuItem>
                                                        <MenuItem value="18/10 Steel">18/10 Steel</MenuItem>
                                                        <MenuItem value="Rubber">Rubber</MenuItem>
                                                        <MenuItem value="Teak">Teak</MenuItem>
                                                        <MenuItem value="Maple">Maple</MenuItem>
                                                        <MenuItem value="Acrylic Coated Cotton">Acrylic Coated Cotton</MenuItem>
                                                        <MenuItem value="Rosewood">Rosewood</MenuItem>
                                                        <MenuItem value="Cork">Cork</MenuItem>
                                                        <MenuItem value="Melamine">Melamine</MenuItem>
                                                        <MenuItem value="Gilded Gold">Gilded Gold</MenuItem>
                                                        <MenuItem value="HardWood">HardWood</MenuItem>
                                                        <MenuItem value="Steel">Steel</MenuItem>
                                                        <MenuItem value="Carbon">Carbon</MenuItem>
                                                        <MenuItem value="Zinc">Zinc</MenuItem>
                                                        <MenuItem value="Earthenware">Earthenware</MenuItem>
                                                        <MenuItem value="Chromium Steel">Chromium Steel</MenuItem>
                                                        <MenuItem value="Walnut">Walnut</MenuItem>
                                                        <MenuItem value="Cast Iron">Cast Iron</MenuItem>
                                                        <MenuItem value="Rattan & Wicker">Rattan & Wicker</MenuItem>
                                                        <MenuItem value="Tin">Tin</MenuItem>
                                                        <MenuItem value="Ceramic">Ceramic</MenuItem>
                                                        <MenuItem value="Paper">Paper</MenuItem>
                                                        <MenuItem value="Tritan">Tritan</MenuItem>
                                                        <MenuItem value="Nickel">Nickel</MenuItem>
                                                        <MenuItem value="Polycast">Polycast</MenuItem>
                                                        <MenuItem value="Other">Other</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='numberofBoxes'
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2"> Number of Boxes </label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="5"
                                                        id="numberofBoxes"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.numberofBoxes)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <div className="col-4 col-sm-3 col-lg-3 text-end">
                                        <label className='labelbold'>Item Dimensions L x W x H</label>
                                    </div>
                                    <div className="col-8 col-sm-7 col-lg-6">

                                        <div className='row align-items-end'>
                                            <Controller
                                                control={control}
                                                name='itemLengthLongerHorizontalEdge'
                                                rules={{
                                                    required: "this field is required",
                                                    pattern: {
                                                        value: new RegExp('^[0-9]+$'),
                                                        message: "not a valid formate"
                                                    }
                                                }}
                                                render={({ field }) => (
                                                    <>
                                                        <div className="col-12 col-sm-6 col-lg-6">
                                                            <label className="labelbold me-2">Length longer horizontal edge</label>
                                                            <TextField
                                                                placeholder="30"
                                                                id="itemLengthLongerHorizontalEdge"
                                                                variant="outlined"
                                                                {...field}
                                                                style={{ width: "100%" }}
                                                                error={Boolean(errors.itemLengthLongerHorizontalEdge)}
                                                            />
                                                        </div>
                                                    </>
                                                )}
                                            />
                                            <Controller
                                                control={control}
                                                name='itemLengthLongerHorizontalEdgeUnit'
                                                rules={{
                                                    required: "this is required"
                                                }}
                                                render={({ field }) => (
                                                    <>

                                                        <div className="col-12 col-sm-6 col-lg-6">
                                                            <TextField
                                                                id="itemLengthLongerHorizontalEdgeUnit"
                                                                variant="outlined"
                                                                select
                                                                style={{ width: "100%" }}
                                                                {...field}
                                                                error={Boolean(errors.itemLengthLongerHorizontalEdgeUnit)}
                                                            >
                                                                <MenuItem value="">-Select-</MenuItem>
                                                                <MenuItem value="New">Centimeters</MenuItem>
                                                            </TextField>
                                                        </div>
                                                    </>
                                                )}

                                            />

                                        </div>
                                        <div className='row align-items-end'>
                                            <Controller
                                                control={control}
                                                name='itemWidthShorterHorizontalEdge'
                                                rules={{
                                                    required: "this field is required",
                                                    pattern: {
                                                        value: new RegExp('^[0-9]+$'),
                                                        message: "not a valid formate"
                                                    }
                                                }}
                                                render={({ field }) => (
                                                    <>
                                                        <div className="col-12 col-sm-6 col-lg-6">
                                                            <label className="labelbold me-2">Width shorter horizontal edge</label>
                                                            <TextField
                                                                placeholder="25"
                                                                id="itemWidthShorterHorizontalEdge"
                                                                variant="outlined"
                                                                {...field}
                                                                style={{ width: "100%" }}
                                                                error={Boolean(errors.itemWidthShorterHorizontalEdge)}
                                                            />
                                                        </div>
                                                    </>
                                                )}
                                            />
                                            <Controller
                                                control={control}
                                                name='itemWidthShorterHorizontalEdgeUnit'
                                                rules={{
                                                    required: "this field is required"
                                                }}
                                                render={({ field }) => (
                                                    <>
                                                        <div className="col-12 col-sm-6 col-lg-6">
                                                            <TextField
                                                                id="itemWidthShorterHorizontalEdgeUnit"
                                                                variant="outlined"
                                                                select
                                                                style={{ width: "100%" }}
                                                                {...field}
                                                                error={Boolean(errors.itemWidthShorterHorizontalEdgeUnit)}
                                                            >
                                                                <MenuItem value="">-Select-</MenuItem>
                                                                <MenuItem value="New">Centimeters</MenuItem>
                                                            </TextField>
                                                        </div>
                                                    </>
                                                )}
                                            />
                                        </div>
                                        <div className='row align-items-end'>
                                            <Controller
                                                control={control}
                                                name='itemHeightbaseTotop'
                                                rules={{
                                                    required: "this field is required",
                                                    pattern: {
                                                        value: new RegExp('^[0-9]+$'),
                                                        message: "not a valid formate"
                                                    }
                                                }}
                                                render={({ field }) => (
                                                    <>
                                                        <div className="col-12 col-sm-6 col-lg-6">
                                                            <label className="labelbold me-2">Height Base to Top</label>
                                                            <TextField
                                                                placeholder="80"
                                                                id="itemHeightbaseTotop"
                                                                variant="outlined"
                                                                {...field}
                                                                style={{ width: "100%" }}
                                                                error={Boolean(errors.itemHeightbaseTotop)}
                                                            />
                                                        </div>
                                                    </>
                                                )}
                                            />
                                            <Controller
                                                control={control}
                                                name='itemHeightbaseTotopUnit'
                                                rules={{
                                                    required: "this field is required"
                                                }}
                                                render={({ field }) => (
                                                    <>
                                                        <div className="col-12 col-sm-6 col-lg-6">
                                                            <TextField
                                                                id="itemHeightbaseTotopUnit"
                                                                variant="outlined"
                                                                select
                                                                style={{ width: "100%" }}
                                                                {...field}
                                                                error={Boolean(errors.itemHeightbaseTotopUnit)}
                                                            >
                                                                <MenuItem value="">-Select-</MenuItem>
                                                                <MenuItem value="New">Centimeters</MenuItem>
                                                            </TextField>
                                                        </div>
                                                    </>
                                                )}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='productColor'
                                        rules={{
                                            required: "this field is required",

                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Color</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder=""
                                                        id="productColor"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.productColor)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                            </div>
                        </>
                    ) : ""

                }
                {
                    formComponents22 ?
                        (
                            <>
                                {/* // formComponents22 =>  Manufacturer, Model Number,Number of Items,Product Care Instructions,Contains Liquid Contents?,Is Assembly Required,Model Name,Number of Pieces,Included Components,Size,Color,Material Type,Number of Boxes */}
                                <div>
                                    <div className="row" style={{ marginTop: "10px" }}>
                                        <Controller
                                            control={control}
                                            name='itemManufacturer'
                                            rules={{
                                                required: "this field is required",
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                        <label className="labelbold me-2">Manufacturer</label>
                                                    </div>
                                                    <div className="col-8 col-sm-7 col-lg-6">
                                                        <TextField
                                                            placeholder="XYZ Pvt Ltd"
                                                            id="itemManufacturer"
                                                            variant="outlined"
                                                            {...field}
                                                            style={{ width: "100%" }}
                                                            error={Boolean(errors.itemManufacturer)}
                                                        />
                                                    </div>
                                                </>
                                            )}
                                        />
                                    </div>
                                    <div className="row" style={{ marginTop: "10px" }}>
                                        <Controller
                                            control={control}
                                            name='modelnumber'
                                            rules={{
                                                required: "Modal Number is required",
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                        <label className="labelbold me-2">Model Number</label>
                                                    </div>
                                                    <div className="col-8 col-sm-7 col-lg-6">
                                                        <TextField
                                                            placeholder="AZL20"
                                                            id="modelnumber"
                                                            variant="outlined"
                                                            {...field}
                                                            style={{ width: "100%" }}
                                                            error={Boolean(errors.modelnumber)}
                                                        />
                                                    </div>
                                                </>
                                            )}
                                        />
                                    </div>
                                    <div className="row" style={{ marginTop: "10px" }}>
                                        <Controller
                                            control={control}
                                            name='numberofitems'
                                            rules={{
                                                required: "Number of Items is required",
                                                pattern: {
                                                    value: new RegExp('^[0-9]+$'),
                                                    message: "value is invalid"
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                        <label className="labelbold me-2">Number of Items</label>
                                                    </div>
                                                    <div className="col-8 col-sm-7 col-lg-6">
                                                        <TextField
                                                            placeholder="1"
                                                            id="numberofitems"
                                                            variant="outlined"
                                                            {...field}
                                                            style={{ width: "100%" }}
                                                            error={Boolean(errors.numberofitems)}
                                                        />
                                                    </div>
                                                </>
                                            )}
                                        />
                                    </div>
                                    <div className="row" style={{ marginTop: "10px" }}>
                                        <Controller
                                            control={control}
                                            name='productCareInstruction'
                                            rules={{
                                                required: "this field is required",

                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                        <label className="labelbold me-2">Product Care Instructions</label>
                                                    </div>
                                                    <div className="col-8 col-sm-7 col-lg-6">
                                                        <TextField
                                                            placeholder="Dry clean only"
                                                            id="productCareInstruction"
                                                            variant="outlined"
                                                            {...field}
                                                            style={{ width: "100%" }}
                                                            error={Boolean(errors.productCareInstruction)}
                                                        />
                                                    </div>
                                                </>
                                            )}
                                        />
                                    </div>
                                    <div className="row" style={{ marginTop: "10px" }}>
                                        <Controller
                                            control={control}
                                            name="containsliquidcontent"
                                            rules={{
                                                required: "Contains liquid content is required",
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                        <label className="labelbold me-2">Contains Liquid Contents?</label>
                                                    </div>
                                                    <div className="col-8 col-sm-7 col-lg-6">
                                                        <TextField
                                                            id="containsliquidcontent-select"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            placeholder="select"
                                                            {...field}
                                                            error={Boolean(errors.containsliquidcontent)}
                                                        >
                                                            <MenuItem value="">-Select-</MenuItem>
                                                            <MenuItem value="Yes">Yes</MenuItem>
                                                            <MenuItem value="No">No</MenuItem>
                                                        </TextField>
                                                    </div>
                                                </>
                                            )}
                                        />
                                    </div>
                                    <div className="row" style={{ marginTop: "10px" }}>
                                        <Controller
                                            control={control}
                                            name="assemblyRequired"
                                            rules={{
                                                required: "this field is required",
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                        <label className="labelbold me-2">Is Assembly Required</label>
                                                    </div>
                                                    <div className="col-8 col-sm-7 col-lg-6">
                                                        <TextField
                                                            id="assemblyRequired-select"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            placeholder="select"
                                                            {...field}
                                                            error={Boolean(errors.assemblyRequired)}
                                                        >
                                                            <MenuItem value="">-Select-</MenuItem>
                                                            <MenuItem value="Yes">Yes</MenuItem>
                                                            <MenuItem value="No">No</MenuItem>
                                                        </TextField>
                                                    </div>
                                                </>
                                            )}
                                        />
                                    </div>
                                    <div className="row" style={{ marginTop: "10px" }}>
                                        <Controller
                                            control={control}
                                            name='numberofPieces'
                                            rules={{
                                                required: "this field is required",
                                                pattern: {
                                                    value: new RegExp('^[0-9]+$'),
                                                    message: "value is invalid"
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                        <label className="labelbold me-2">Number of Pieces</label>
                                                    </div>
                                                    <div className="col-8 col-sm-7 col-lg-6">
                                                        <TextField
                                                            placeholder="5"
                                                            id="numberofPieces"
                                                            variant="outlined"
                                                            {...field}
                                                            style={{ width: "100%" }}
                                                            error={Boolean(errors.numberofPieces)}
                                                        />
                                                    </div>
                                                </>
                                            )}
                                        />
                                    </div>
                                    <div className="row" style={{ marginTop: "10px" }}>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Included Components</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6"></div>

                                    </div>
                                    <div className="row" style={{ marginTop: "10px" }}>
                                        <Controller
                                            control={control}
                                            name='productSize'
                                            rules={{
                                                required: "this field is required",

                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                        <label className="labelbold me-2">Size</label>
                                                    </div>
                                                    <div className="col-8 col-sm-7 col-lg-6">
                                                        <TextField
                                                            placeholder=""
                                                            id="productSize"
                                                            variant="outlined"
                                                            {...field}
                                                            style={{ width: "100%" }}
                                                            error={Boolean(errors.productSize)}
                                                        />
                                                    </div>
                                                </>
                                            )}
                                        />
                                    </div>
                                    <div className="row" style={{ marginTop: "10px" }}>
                                        <Controller
                                            control={control}
                                            name='productColor'
                                            rules={{
                                                required: "this field is required",

                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                        <label className="labelbold me-2">Color</label>
                                                    </div>
                                                    <div className="col-8 col-sm-7 col-lg-6">
                                                        <TextField
                                                            placeholder=""
                                                            id="productColor"
                                                            variant="outlined"
                                                            {...field}
                                                            style={{ width: "100%" }}
                                                            error={Boolean(errors.productColor)}
                                                        />
                                                    </div>
                                                </>
                                            )}
                                        />
                                    </div>
                                    <div className="row" style={{ marginTop: "10px" }}>
                                        <Controller
                                            control={control}
                                            name="materialType"
                                            rules={{
                                                required: "this field is required",
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                        <label className="labelbold me-2">Material Type</label>
                                                    </div>
                                                    <div className="col-8 col-sm-7 col-lg-6">
                                                        <TextField
                                                            id="materialType-select"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            placeholder="select"
                                                            {...field}
                                                            error={Boolean(errors.materialType)}
                                                        >
                                                            <MenuItem value="">-Select-</MenuItem>
                                                            <MenuItem value="Nylon">Nylon</MenuItem>
                                                            <MenuItem value="Aluminum">Aluminum</MenuItem>
                                                            <MenuItem value="Solid Gold">Solid Gold</MenuItem>
                                                            <MenuItem value="Cedar">Cedar</MenuItem>
                                                            <MenuItem value="Stone">Stone</MenuItem>
                                                            <MenuItem value="Porcelain">Porcelain</MenuItem>
                                                            <MenuItem value="Porcelain Bone China">Porcelain Bone China</MenuItem>
                                                            <MenuItem value="Pewter">Pewter</MenuItem>
                                                            <MenuItem value="Stainless Steel">Stainless Steel</MenuItem>
                                                            <MenuItem value="Teracotta">Teracotta</MenuItem>
                                                            <MenuItem value="Neoprene">Neoprene</MenuItem>
                                                            <MenuItem value="Copper">Copper</MenuItem>
                                                            <MenuItem value="Polycarbonate">Polycarbonate</MenuItem>
                                                            <MenuItem value="Recycled">Recycled</MenuItem>
                                                            <MenuItem value="Bronze">Bronze</MenuItem>
                                                            <MenuItem value="Clay">Clay</MenuItem>
                                                            <MenuItem value="Elmwood">Elmwood</MenuItem>
                                                            <MenuItem value="Polyester">Polyester</MenuItem>
                                                            <MenuItem value="Hard-Anodized Aluminum">Hard-Anodized Aluminum</MenuItem>
                                                            <MenuItem value="Leaded Crystal">Leaded Crystal</MenuItem>
                                                            <MenuItem value="Silicone">Silicone</MenuItem>
                                                            <MenuItem value="Cherrywood">Cherrywood</MenuItem>
                                                            <MenuItem value="Marble">Marble</MenuItem>
                                                            <MenuItem value="Nonstick">Nonstick</MenuItem>
                                                            <MenuItem value="Silver">Silver</MenuItem>
                                                            <MenuItem value="Pine">Pine</MenuItem>
                                                            <MenuItem value="Oak">Oak</MenuItem>
                                                            <MenuItem value="Non-Leaded Crystal">Non-Leaded Crystal</MenuItem>
                                                            <MenuItem value="Bamboo">Bamboo</MenuItem>
                                                            <MenuItem value="Fabric">Fabric</MenuItem>
                                                            <MenuItem value="Acrylic">Acrylic</MenuItem>
                                                            <MenuItem value="Crystal">Crystal</MenuItem>
                                                            <MenuItem value="Silver-Plated">Silver-Plated</MenuItem>
                                                            <MenuItem value="Synthetic">Synthetic</MenuItem>
                                                            <MenuItem value="Birch">Birch</MenuItem>
                                                            <MenuItem value="18/8 Steel">18/8 Steel</MenuItem>
                                                            <MenuItem value="Beechwood">Beechwood</MenuItem>
                                                            <MenuItem value="Stoneware">Stoneware</MenuItem>
                                                            <MenuItem value="Brass">Brass</MenuItem>
                                                            <MenuItem value="Multi-ply">Multi-ply</MenuItem>
                                                            <MenuItem value="Glass">Glass</MenuItem>
                                                            <MenuItem value="Leather">Leather</MenuItem>
                                                            <MenuItem value="Iron">Iron</MenuItem>
                                                            <MenuItem value="Plastic">Plastic</MenuItem>
                                                            <MenuItem value="Cotton">Cotton</MenuItem>
                                                            <MenuItem value="Paraffin">Paraffin</MenuItem>
                                                            <MenuItem value="Polyresin">Polyresin</MenuItem>
                                                            <MenuItem value="Wax">Wax</MenuItem>
                                                            <MenuItem value="Bone China">Bone China</MenuItem>
                                                            <MenuItem value="Platinume">Platinume</MenuItem>
                                                            <MenuItem value="Chrome">Chrome</MenuItem>
                                                            <MenuItem value="Mahogany">Mahogany</MenuItem>
                                                            <MenuItem value="Olive Wood">Olive Wood</MenuItem>
                                                            <MenuItem value="18/10 Steel">18/10 Steel</MenuItem>
                                                            <MenuItem value="Rubber">Rubber</MenuItem>
                                                            <MenuItem value="Teak">Teak</MenuItem>
                                                            <MenuItem value="Maple">Maple</MenuItem>
                                                            <MenuItem value="Acrylic Coated Cotton">Acrylic Coated Cotton</MenuItem>
                                                            <MenuItem value="Rosewood">Rosewood</MenuItem>
                                                            <MenuItem value="Cork">Cork</MenuItem>
                                                            <MenuItem value="Melamine">Melamine</MenuItem>
                                                            <MenuItem value="Gilded Gold">Gilded Gold</MenuItem>
                                                            <MenuItem value="HardWood">HardWood</MenuItem>
                                                            <MenuItem value="Steel">Steel</MenuItem>
                                                            <MenuItem value="Carbon">Carbon</MenuItem>
                                                            <MenuItem value="Zinc">Zinc</MenuItem>
                                                            <MenuItem value="Earthenware">Earthenware</MenuItem>
                                                            <MenuItem value="Chromium Steel">Chromium Steel</MenuItem>
                                                            <MenuItem value="Walnut">Walnut</MenuItem>
                                                            <MenuItem value="Cast Iron">Cast Iron</MenuItem>
                                                            <MenuItem value="Rattan & Wicker">Rattan & Wicker</MenuItem>
                                                            <MenuItem value="Tin">Tin</MenuItem>
                                                            <MenuItem value="Ceramic">Ceramic</MenuItem>
                                                            <MenuItem value="Paper">Paper</MenuItem>
                                                            <MenuItem value="Tritan">Tritan</MenuItem>
                                                            <MenuItem value="Nickel">Nickel</MenuItem>
                                                            <MenuItem value="Polycast">Polycast</MenuItem>
                                                            <MenuItem value="Other">Other</MenuItem>
                                                        </TextField>
                                                    </div>
                                                </>
                                            )}
                                        />
                                    </div>
                                    <div className="row" style={{ marginTop: "10px" }}>
                                        <Controller
                                            control={control}
                                            name='numberofBoxes'
                                            rules={{
                                                required: "this field is required",
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                        <label className="labelbold me-2"> Number of Boxes </label>
                                                    </div>
                                                    <div className="col-8 col-sm-7 col-lg-6">
                                                        <TextField
                                                            placeholder="5"
                                                            id="numberofBoxes"
                                                            variant="outlined"
                                                            {...field}
                                                            style={{ width: "100%" }}
                                                            error={Boolean(errors.numberofBoxes)}
                                                        />
                                                    </div>
                                                </>
                                            )}
                                        />
                                    </div>
                                </div>
                            </>
                        ) : ""
                }
                {
                    formComponents23 ? (
                        <>
                            {/* // formComponents23 =>  Manufacturer, Is Product Expirable,Number of Items,Warranty Description,Number of Boxes */}
                            <div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='itemManufacturer'
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Manufacturer</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="XYZ Pvt Ltd"
                                                        id="itemManufacturer"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.itemManufacturer)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className='row' style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='productExpirable'
                                        rules={{
                                            required: "productExpirable is required"
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className='labelbold me-2'>Is Product Expirable</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        id="productExpirable"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        {...field}
                                                        error={Boolean(errors.productExpirable)}
                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="Yes">Yes</MenuItem>
                                                        <MenuItem value="No">No</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='numberofitems'
                                        rules={{
                                            required: "Number of Items is required",
                                            pattern: {
                                                value: new RegExp('^[0-9]+$'),
                                                message: "value is invalid"
                                            }
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Number of Items</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="1"
                                                        id="numberofitems"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.numberofitems)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='warrantyDesc'
                                        rules={{
                                            required: "warranty description is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Warranty Description </label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="1 year manufacturer warranty is non-transferable and valid for 1 year from the original date of purchase."
                                                        id="warrantyDesc"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.warrantyDesc)}
                                                    />
                                                </div>

                                            </>
                                        )}
                                    />

                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='numberofBoxes'
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2"> Number of Boxes </label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="5"
                                                        id="numberofBoxes"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.numberofBoxes)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                            </div>
                        </>
                    ) : ""

                }
                {/* {
                    ArtistName ? (<>
                        <div className="row">
                            <Controller
                                control={control}
                                name='artistName'
                                rules={{
                                    required: "artist Name is required"
                                }}
                                render={({ field }) => (
                                    <>

                                        <div className="col-4 col-sm-3 col-lg-2 text-end">
                                            <label className="labelbold me-2">Artist</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="Artist"
                                                id="artistName"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.artistName)}
                                            />
                                        </div>

                                    </>
                                )}
                            />

                        </div>
                    </>) : ""
                }
                {
                    ArtworkMedium ? (<>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name="artworkMedium"
                                rules={{
                                    required: "artworkMedium is required",
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-2 text-end">
                                            <label className="labelbold me-2">Artwork Medium</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                id="artworkMedium-select"
                                                variant="outlined"
                                                select
                                                style={{ width: "100%" }}
                                                placeholder="Oil"
                                                {...field}
                                                error={Boolean(errors.artworkMedium)}

                                            >
                                                <MenuItem value="">-Select-</MenuItem>
                                                <MenuItem value="Encaustic">Encaustic</MenuItem>
                                                <MenuItem value="Textile">Textile</MenuItem>
                                                <MenuItem value="Ink">Ink</MenuItem>
                                                <MenuItem value="Pastel">Pastel</MenuItem>
                                                <MenuItem value="Drypoint">Drypoint</MenuItem>
                                            </TextField>
                                        </div>

                                    </>
                                )}
                            />
                        </div>
                    </>) : ""
                }
                {
                    ProductDate ? (<>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productDate'
                                rules={{
                                    required: "productDate is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-2 text-end">
                                            <label className="labelbold me-2">Date</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="1998"
                                                id="productDate"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.productDate)}
                                            />
                                        </div>
                                    </>
                                )}
                            />

                        </div>
                    </>) : ""
                }

                {
                    ProductFramed ? (<>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name="productFramed"
                                rules={{
                                    required: "productFramed is required",
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-2 text-end">
                                            <label className="labelbold me-2">Framed</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                id="productFramed-select"
                                                variant="outlined"
                                                select
                                                style={{ width: "100%" }}
                                                placeholder="Oil"
                                                {...field}
                                                error={Boolean(errors.productFramed)}

                                            >
                                                <MenuItem value="">-Select-</MenuItem>
                                                <MenuItem value="Yes">Yes</MenuItem>
                                                <MenuItem value="No">No</MenuItem>

                                            </TextField>
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                    </>) : ""
                }
                {
                    ProductSaleType ? (<>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name="productSaleType"
                                rules={{
                                    required: "productSaleType is required",
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-2 text-end">
                                            <label className="labelbold me-2">Sale Type</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                id="productSaleType-select"
                                                variant="outlined"
                                                select
                                                style={{ width: "100%" }}
                                                placeholder="Oil"
                                                {...field}
                                                error={Boolean(errors.productSaleType)}

                                            >

                                                <MenuItem value="Primary">Primary</MenuItem>
                                                <MenuItem value="Secondary">Secondary</MenuItem>

                                            </TextField>
                                        </div>

                                    </>
                                )}
                            />
                        </div>
                    </>) : ""
                } */}

                {
                    formComponents24 ? (
                        <>
                            {/* // formComponents24 =>  Model (Number),Number of Items,Item Dimensions D x W x H,Unit Count,Unit Count Type,Product Care Instructions, Contains Liquid Contents?, Is Assembly Required, Number of Pieces, Included Components, Size, Color, Material Type, Manufacturer */}
                            <div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='modelnumber'
                                        rules={{
                                            required: "Modal Number is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Model</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="AZL20"
                                                        id="modelnumber"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.modelnumber)}
                                                    />
                                                </div>

                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='numberofitems'
                                        rules={{
                                            required: "Number of Items is required",
                                            pattern: {
                                                value: new RegExp('^[0-9]+$'),
                                                message: "value is invalid"
                                            }
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Number of Items</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="1"
                                                        id="numberofitems"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.numberofitems)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <div className="col-4 col-sm-3 col-lg-3 text-end">
                                        <label className='labelbold'>Item Dimensions D x W x H</label>
                                    </div>
                                    <div className="col-8 col-sm-7 col-lg-6">
                                        <div>
                                            <div className='row align-items-end'>
                                                <Controller
                                                    control={control}
                                                    name='itemDepthfrontToback'
                                                    rules={{
                                                        required: "this field is required",
                                                        pattern: {
                                                            value: new RegExp('^[0-9]+$'),
                                                            message: "not a valid formate"
                                                        }
                                                    }}
                                                    render={({ field }) => (
                                                        <>
                                                            <div className="col-12 col-sm-6">
                                                                <div className='d-flex flex-column' style={{ width: "100%" }}>
                                                                    <label className="labelbold me-2">Item Depth Front To Back</label>
                                                                    <TextField
                                                                        placeholder="30"
                                                                        id="itemDepthfrontToback"
                                                                        variant="outlined"
                                                                        {...field}

                                                                        error={Boolean(errors.itemDepthfrontToback)}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </>
                                                    )}
                                                />
                                                <Controller
                                                    control={control}
                                                    name='itemDepthfrontTobackUnit'
                                                    rules={{
                                                        required: "this is required"
                                                    }}
                                                    render={({ field }) => (
                                                        <>

                                                            <div className="col-12 col-sm-6">
                                                                <TextField
                                                                    id="itemDepthfrontTobackUnit"
                                                                    variant="outlined"
                                                                    select
                                                                    style={{ width: "100%" }}
                                                                    {...field}
                                                                    error={Boolean(errors.itemDepthfrontTobackUnit)}
                                                                >
                                                                    <MenuItem value="">-Select-</MenuItem>
                                                                    <MenuItem value="New">Centimeters</MenuItem>
                                                                </TextField>
                                                            </div>
                                                        </>
                                                    )}

                                                />

                                            </div>
                                            <div className='row align-items-end'>
                                                <Controller
                                                    control={control}
                                                    name='itemWidthsideToside'
                                                    rules={{
                                                        required: "this field is required",
                                                        pattern: {
                                                            value: new RegExp('^[0-9]+$'),
                                                            message: "not a valid formate"
                                                        }
                                                    }}
                                                    render={({ field }) => (
                                                        <>
                                                            <div className="col-12 col-sm-6">
                                                                <div className='d-flex flex-column' style={{ width: "100%" }}>
                                                                    <label className="labelbold me-2">Item Width Side to Side</label>
                                                                    <TextField
                                                                        placeholder="25"
                                                                        id="itemWidthsideToside"
                                                                        variant="outlined"
                                                                        {...field}
                                                                        error={Boolean(errors.itemWidthsideToside)}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </>
                                                    )}
                                                />
                                                <Controller
                                                    control={control}
                                                    name='itemWidthsideTosideUnit'
                                                    rules={{
                                                        required: "this field is required"
                                                    }}
                                                    render={({ field }) => (
                                                        <>
                                                            <div className="col-12 col-sm-6">
                                                                <TextField
                                                                    id="itemWidthsideTosideUnit"
                                                                    variant="outlined"
                                                                    select
                                                                    style={{ width: "100%" }}
                                                                    {...field}
                                                                    error={Boolean(errors.itemWidthsideTosideUnit)}
                                                                >
                                                                    <MenuItem value="">-Select-</MenuItem>
                                                                    <MenuItem value="New">Centimeters</MenuItem>
                                                                </TextField>
                                                            </div>
                                                        </>
                                                    )}
                                                />
                                            </div>
                                            <div className='row align-items-end'>
                                                <Controller
                                                    control={control}
                                                    name='itemHeightbaseTotop'
                                                    rules={{
                                                        required: "this field is required",
                                                        pattern: {
                                                            value: new RegExp('^[0-9]+$'),
                                                            message: "not a valid formate"
                                                        }
                                                    }}
                                                    render={({ field }) => (
                                                        <>
                                                            <div className="col-12 col-sm-6">
                                                                <div className='d-flex flex-column' style={{ width: "100%" }}>
                                                                    <label className="labelbold me-2">Height Base to Top</label>
                                                                    <TextField
                                                                        placeholder="80"
                                                                        id="itemHeightbaseTotop"
                                                                        variant="outlined"
                                                                        {...field}

                                                                        error={Boolean(errors.itemHeightbaseTotop)}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </>
                                                    )}
                                                />
                                                <Controller
                                                    control={control}
                                                    name='itemHeightbaseTotopUnit'
                                                    rules={{
                                                        required: "this field is required"
                                                    }}
                                                    render={({ field }) => (
                                                        <>
                                                            <div className="col-12 col-sm-6">
                                                                <TextField
                                                                    id="itemHeightbaseTotopUnit"
                                                                    variant="outlined"
                                                                    select
                                                                    style={{ width: "100%" }}
                                                                    {...field}
                                                                    error={Boolean(errors.itemHeightbaseTotopUnit)}
                                                                >
                                                                    <MenuItem value="">-Select-</MenuItem>
                                                                    <MenuItem value="New">Centimeters</MenuItem>

                                                                </TextField>
                                                            </div>
                                                        </>
                                                    )}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='unitCount'
                                        rules={{
                                            required: "this field is required",
                                            pattern: {
                                                value: new RegExp('^[0-9]+$'),
                                                message: "value is invalid"
                                            }
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Unit Count</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="12"
                                                        id="unitCount"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.unitCount)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="unitCountType"
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Unit Count Type</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        id="unitCountType-select"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        placeholder="women"
                                                        {...field}
                                                        error={Boolean(errors.unitCountType)}

                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="Women">Meters</MenuItem>
                                                        <MenuItem value="Unisex Children">Pouch</MenuItem>
                                                        <MenuItem value="Men">Grams</MenuItem>
                                                        <MenuItem value="Boys">Liters</MenuItem>
                                                        <MenuItem value="Girls">Mililiters</MenuItem>
                                                        <MenuItem value="Set">Set</MenuItem>
                                                        <MenuItem value="Kilograms">Kilograms</MenuItem>
                                                        <MenuItem value="Count">Count</MenuItem>
                                                        <MenuItem value="Square Meters">Square Meters</MenuItem>
                                                        <MenuItem value="Case">Case</MenuItem>
                                                        <MenuItem value="Feet">Feet</MenuItem>
                                                        <MenuItem value="Can">Can</MenuItem>
                                                        <MenuItem value="Pounds">Pounds</MenuItem>
                                                        <MenuItem value="Piece">Piece</MenuItem>
                                                        <MenuItem value="Ounce">Ounce</MenuItem>
                                                        <MenuItem value="Pint">Pint</MenuItem>
                                                        <MenuItem value="Pack">Pack</MenuItem>
                                                        <MenuItem value="Square feet">Square feet</MenuItem>
                                                        <MenuItem value="Fluid Ounces">Fluid Ounces</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='productCareInstruction'
                                        rules={{
                                            required: "this field is required",

                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Product Care Instructions</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="Dry clean only"
                                                        id="productCareInstruction"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.productCareInstruction)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="containsliquidcontent"
                                        rules={{
                                            required: "Contains liquid content is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Contains Liquid Contents?</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        id="containsliquidcontent-select"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        placeholder="select"
                                                        {...field}
                                                        error={Boolean(errors.containsliquidcontent)}
                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="Yes">Yes</MenuItem>
                                                        <MenuItem value="No">No</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="assemblyRequired"
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Is Assembly Required</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        id="assemblyRequired-select"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        placeholder="select"
                                                        {...field}
                                                        error={Boolean(errors.assemblyRequired)}
                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="Yes">Yes</MenuItem>
                                                        <MenuItem value="No">No</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='numberofPieces'
                                        rules={{
                                            required: "this field is required",
                                            pattern: {
                                                value: new RegExp('^[0-9]+$'),
                                                message: "value is invalid"
                                            }
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Number of Pieces</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="5"
                                                        id="numberofPieces"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.numberofPieces)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="includedComponent"
                                        rules={{
                                            required: "This field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Included Components</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="Camera Body,Battery Pack"
                                                        id="includedComponent"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.includedComponent)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='productSize'
                                        rules={{
                                            required: "this field is required",

                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Size</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder=""
                                                        id="productSize"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.productSize)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='productColor'
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Color</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder=""
                                                        id="productColor"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.productColor)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                {/* Material-type-7 */}
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name="materialType"
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Material Type</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        id="materialType-select"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        placeholder="select"
                                                        {...field}
                                                        error={Boolean(errors.materialType)}
                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="Alloy Steel">Alloy Steel</MenuItem>
                                                        <MenuItem value="Stainless Steel">Stainless Steel</MenuItem>
                                                        <MenuItem value="Cast Iron">Cast Iron</MenuItem>
                                                        <MenuItem value="Iron">Iron</MenuItem>
                                                        <MenuItem value="Plastic">Plastic</MenuItem>
                                                        <MenuItem value="Metal">Metal</MenuItem>
                                                        <MenuItem value="Aluminum">Aluminum</MenuItem>

                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <Controller
                                        control={control}
                                        name='itemManufacturer'
                                        rules={{
                                            required: "this field is required",
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                    <label className="labelbold me-2">Manufacturer</label>
                                                </div>
                                                <div className="col-8 col-sm-7 col-lg-6">
                                                    <TextField
                                                        placeholder="XYZ Pvt Ltd"
                                                        id="itemManufacturer"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.itemManufacturer)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                            </div>
                        </>
                    ) : ""
                }

                {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                {
                    manuFacturePartNoField ? (
                        <>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='manufacturepartno'
                                    rules={{
                                        required: "Manufacturer Part Number is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Manufacturer Part Number </label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="SB-122"
                                                    id="manufacturepartno"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.manufacturepartno)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />

                            </div>
                        </>) : ""
                }
                {
                    modelNumberField ? (
                        <>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='modelnumber'
                                    rules={{
                                        required: "Modal Number is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Model Number</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="AZL20"
                                                    id="modelnumber"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.modelnumber)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""
                }

                {
                    styleField ? (
                        <>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name="productStyle"
                                    rules={{
                                        required: "this field is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Style</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    id="productStyle-select"
                                                    variant="outlined"
                                                    select
                                                    style={{ width: "100%" }}
                                                    placeholder="select"
                                                    {...field}
                                                    error={Boolean(errors.productStyle)}
                                                >
                                                    <MenuItem value="">-Select-</MenuItem>
                                                    <MenuItem value="Backpacks">Backpacks</MenuItem>
                                                    <MenuItem value="Briefcases">Briefcases</MenuItem>
                                                    <MenuItem value="Diaper Bags">Diaper Bags</MenuItem>
                                                    <MenuItem value="Fashion Waist Packs">Fashion Waist Packs</MenuItem>
                                                    <MenuItem value="Gym Bags">Gym Bags</MenuItem>
                                                    <MenuItem value="Laptop Bags & Cases">Laptop Bags & Cases</MenuItem>
                                                    <MenuItem value="Luggage">Luggage</MenuItem>
                                                    <MenuItem value="Messenger Bags">Messenger Bags</MenuItem>
                                                    <MenuItem value="Travel Accessories">Travel Accessories</MenuItem>
                                                    <MenuItem value="Umbrellas">Umbrellas</MenuItem>
                                                    <MenuItem value="Rucksacks">Rucksacks</MenuItem>
                                                    <MenuItem value="Arm Warmers">Arm Warmers</MenuItem>
                                                    <MenuItem value="Balaclavas">Balaclavas </MenuItem>
                                                    <MenuItem value="Belt Buckles">Belt Buckles </MenuItem>
                                                    <MenuItem value="Belts">Belts</MenuItem>
                                                    <MenuItem value="Bow Ties">Bow Ties</MenuItem>
                                                    <MenuItem value="Cold Weather Sets ">Cold Weather Sets </MenuItem>
                                                    <MenuItem value="Cold Weather Sets ">Cold Weather Sets </MenuItem>
                                                    <MenuItem value="Cummerbunds ">Cummerbunds </MenuItem>
                                                    <MenuItem value="Earmuffs ">Earmuffs </MenuItem>
                                                    <MenuItem value="Gloves">Gloves</MenuItem>
                                                    <MenuItem value="Handkerchiefs ">Handkerchiefs </MenuItem>
                                                    <MenuItem value="Headbands ">Headbands </MenuItem>
                                                    <MenuItem value="Kidney Warmers ">Kidney Warmers </MenuItem>
                                                    <MenuItem value="Leg Warmers ">Leg Warmers </MenuItem>
                                                    <MenuItem value="Neckerchiefs ">Neckerchiefs </MenuItem>
                                                    <MenuItem value="Neckties ">Neckties </MenuItem>
                                                    <MenuItem value="Pocket Squares ">Pocket Squares </MenuItem>
                                                    <MenuItem value="Tie">Tie</MenuItem>

                                                </TextField>
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""
                }
                {
                    genderField ? (
                        <>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name="productUserGender"
                                    rules={{
                                        required: "this field is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Gender</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    id="productUserGender-select"
                                                    variant="outlined"
                                                    select
                                                    style={{ width: "100%" }}
                                                    placeholder="select"
                                                    {...field}
                                                    error={Boolean(errors.productUserGender)}
                                                >
                                                    <MenuItem value="">-Select-</MenuItem>
                                                    <MenuItem value="Unisex Adult">Unisex Adult</MenuItem>
                                                    <MenuItem value="Unisex Child">Unisex Child</MenuItem>
                                                    <MenuItem value="Baby Boys">Baby Boys</MenuItem>
                                                    <MenuItem value="Baby Girls">Baby Girls</MenuItem>
                                                    <MenuItem value="Boys">Boys</MenuItem>
                                                    <MenuItem value="Women">Women</MenuItem>
                                                    <MenuItem value="Girls">Girls</MenuItem>
                                                    <MenuItem value="Unisex Baby">Unisex Baby</MenuItem>
                                                    <MenuItem value="Men">Men</MenuItem>
                                                </TextField>
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""
                }
                {
                    unitCountField ? (
                        <>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='unitCount'
                                    rules={{
                                        required: "this field is required",
                                        pattern: {
                                            value: new RegExp('^[0-9]+$'),
                                            message: "value is invalid"
                                        }
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Unit Count</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="12"
                                                    id="unitCount"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.unitCount)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""
                }
                {
                    unitCountTypeField ? (
                        <>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name="unitCountType"
                                    rules={{
                                        required: "this field is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Unit Count Type</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    id="unitCountType-select"
                                                    variant="outlined"
                                                    select
                                                    style={{ width: "100%" }}
                                                    placeholder="women"
                                                    {...field}
                                                    error={Boolean(errors.unitCountType)}

                                                >
                                                    <MenuItem value="">-Select-</MenuItem>
                                                    <MenuItem value="Meters">Meters</MenuItem>
                                                    <MenuItem value="Pouch">Pouch</MenuItem>
                                                    <MenuItem value="Grams">Grams</MenuItem>
                                                    <MenuItem value="Liters">Liters</MenuItem>
                                                    <MenuItem value="Mililiters">Mililiters</MenuItem>
                                                    <MenuItem value="Set">Set</MenuItem>
                                                    <MenuItem value="Kilograms">Kilograms</MenuItem>
                                                    <MenuItem value="Count">Count</MenuItem>
                                                    <MenuItem value="Square Meters">Square Meters</MenuItem>
                                                    <MenuItem value="Case">Case</MenuItem>
                                                    <MenuItem value="Feet">Feet</MenuItem>
                                                    <MenuItem value="Can">Can</MenuItem>
                                                    <MenuItem value="Pounds">Pounds</MenuItem>
                                                    <MenuItem value="Piece">Piece</MenuItem>
                                                    <MenuItem value="Ounce">Ounce</MenuItem>
                                                    <MenuItem value="Pint">Pint</MenuItem>
                                                    <MenuItem value="Pack">Pack</MenuItem>
                                                    <MenuItem value="Square feet">Square feet</MenuItem>
                                                    <MenuItem value="Fluid Ounces">Fluid Ounces</MenuItem>
                                                </TextField>
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""
                }
                {
                    modelNameField ? (
                        <>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='modelname'
                                    rules={{
                                        required: "this field is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Model Name</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="model"
                                                    id="modelname"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.modelname)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""
                }

                {
                    colorField ? (
                        <>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='productColor'
                                    rules={{
                                        required: "this field is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Color</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder=""
                                                    id="productColor"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.productColor)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""
                }

                {
                    colorMapField ? (
                        <>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name="productColorMap"
                                    rules={{
                                        required: "this field is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Colour Map</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    id="productColorMap-select"
                                                    variant="outlined"
                                                    select
                                                    style={{ width: "100%" }}
                                                    placeholder="select"
                                                    {...field}
                                                    error={Boolean(errors.productColorMap)}
                                                >
                                                    <MenuItem value="">-Select-</MenuItem>
                                                    <MenuItem value="Bronze">Bronze</MenuItem>
                                                    <MenuItem value="Brown">Brown</MenuItem>
                                                    <MenuItem value="Dark brown">Dark brown</MenuItem>
                                                    <MenuItem value="Light Brown">Light Brown</MenuItem>
                                                    <MenuItem value="Gold">Gold</MenuItem>
                                                    <MenuItem value="Blue">Blue</MenuItem>
                                                    <MenuItem value="Dark Blue">Dark Blue</MenuItem>
                                                    <MenuItem value="Light Blue">Light Blue</MenuItem>
                                                    <MenuItem value="Multicolor">Multicolor</MenuItem>
                                                    <MenuItem value="Black">Black</MenuItem>
                                                    <MenuItem value="Orange">Orange</MenuItem>
                                                    <MenuItem value="Clear">Clear</MenuItem>
                                                    <MenuItem value="Red">Red</MenuItem>
                                                    <MenuItem value="Silver">Silver</MenuItem>
                                                    <MenuItem value="Pink">Pink</MenuItem>
                                                    <MenuItem value="White">White</MenuItem>
                                                    <MenuItem value="Off-white">Off-white</MenuItem>
                                                    <MenuItem value="Metalic">Metalic</MenuItem>
                                                    <MenuItem value="Beige">Beige</MenuItem>
                                                    <MenuItem value="Purple">Purple</MenuItem>
                                                    <MenuItem value="Yellow">Yellow</MenuItem>
                                                    <MenuItem value="Turquoise">Turquoise</MenuItem>
                                                    <MenuItem value="Khaki">Khaki</MenuItem>
                                                    <MenuItem value="Maroon">Maroon</MenuItem>
                                                    <MenuItem value="Green">Green</MenuItem>
                                                    <MenuItem value="Dark Green">Dark Green</MenuItem>
                                                    <MenuItem value="Light Green">Light Green</MenuItem>
                                                    <MenuItem value="Grey">Grey</MenuItem>
                                                    <MenuItem value="Charcoal Grey">Charcoal Grey</MenuItem>
                                                    <MenuItem value="Nude">Nude</MenuItem>
                                                    <MenuItem value="Clear">Clear</MenuItem>
                                                </TextField>
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""
                }

                {
                    materialTypeField ? (
                        <>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name="materialType"
                                    rules={{
                                        required: "this field is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Material Type</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    id="materialType-select"
                                                    variant="outlined"
                                                    select
                                                    style={{ width: "100%" }}
                                                    placeholder="select"
                                                    {...field}
                                                    error={Boolean(errors.materialType)}
                                                >
                                                    <MenuItem value="">-Select-</MenuItem>
                                                    {materialTypeItem.map((materialItem, index) => {
                                                        return <MenuItem value={`${materialItem}`} key={index}>{materialItem}</MenuItem>
                                                    })
                                                    }
                                                    {







                                                    }
                                                </TextField>
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""
                }

                {
                    materialOrFabricRegulationField ? (
                        <>
                            <MaterialFabricRegulations />
                        </>) : ""
                }

                {
                    productLifecycleSupplyTypeField ? (
                        <>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name="productLifecycleSupplyType"
                                    rules={{
                                        required: "this field is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Product Lifecycle Supply Type</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    id="productLifecycleSupplyType-select"
                                                    variant="outlined"
                                                    select
                                                    style={{ width: "100%" }}
                                                    placeholder="women"
                                                    {...field}
                                                    error={Boolean(errors.productLifecycleSupplyType)}

                                                >
                                                    <MenuItem value="">-Select-</MenuItem>
                                                    <MenuItem value="Perennial">Perennial</MenuItem>
                                                    <MenuItem value="Year Round Replenishable">Year Round Replenishable</MenuItem>
                                                    <MenuItem value="Seasonal Basic ">Seasonal Basic</MenuItem>
                                                    <MenuItem value="Fashion">Fashion</MenuItem>
                                                </TextField>
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""
                }

                {
                    numberOfItemsField ? (
                        <>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='numberofitems'
                                    rules={{
                                        required: "Number of Items is required",
                                        pattern: {
                                            value: new RegExp('^[0-9]+$'),
                                            message: "value is invalid"
                                        }
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Number of Items</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="1"
                                                    id="numberofitems"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.numberofitems)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""
                }

                {
                    containsLiquidContentField ? (
                        <>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name="containsliquidcontent"
                                    rules={{
                                        required: "Contains liquid content is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Contains Liquid Contents?</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    id="containsliquidcontent-select"
                                                    variant="outlined"
                                                    select
                                                    style={{ width: "100%" }}
                                                    placeholder="select"
                                                    {...field}
                                                    error={Boolean(errors.containsliquidcontent)}
                                                >
                                                    <MenuItem value="">-Select-</MenuItem>
                                                    <MenuItem value="Yes">Yes</MenuItem>
                                                    <MenuItem value="No">No</MenuItem>
                                                </TextField>
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""
                }

                {
                    boxContentsField ? (
                        <>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='productBoxContents'
                                    rules={{
                                        required: "this field is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Box Contents</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder=""
                                                    id="productBoxContents"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.productBoxContents)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""
                }

                {
                    numberOfBoxesField ? (
                        <>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='numberofBoxes'
                                    rules={{
                                        required: "this field is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2"> Number of Boxes </label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="5"
                                                    id="numberofBoxes"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.numberofBoxes)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""
                }

                {
                    manufactureField ? (
                        <>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='itemManufacturer'
                                    rules={{
                                        required: "this field is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Manufacturer</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="XYZ Pvt Ltd"
                                                    id="itemManufacturer"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.itemManufacturer)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""
                }


                {
                    outSideDiameterField ? (
                        <>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                    <label className='labelbold'>Outside Diameter</label>
                                </div>
                                <div className="col-8 col-sm-7 col-lg-6">
                                    <div className='row align-items-end'>
                                        <Controller
                                            control={control}
                                            name='itemoutSideDiameter'
                                            rules={{
                                                required: "this field is required",
                                                pattern: {
                                                    value: new RegExp('^[0-9]+$'),
                                                    message: "not a valid formate"
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-12 col-sm-6 col-lg-6">

                                                        <TextField
                                                            placeholder="200,10,7.3"
                                                            id="itemoutSideDiameter"
                                                            variant="outlined"
                                                            {...field}
                                                            style={{ width: "100%" }}
                                                            error={Boolean(errors.itemoutSideDiameter)}
                                                        />
                                                    </div>
                                                </>
                                            )}
                                        />
                                        <Controller
                                            control={control}
                                            name='itemoutSideDiameterUnit'
                                            rules={{
                                                required: "this is required"
                                            }}
                                            render={({ field }) => (
                                                <>

                                                    <div className="col-12 col-sm-6 col-lg-6">
                                                        <TextField
                                                            id="itemoutSideDiameterUnit"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            {...field}
                                                            error={Boolean(errors.itemoutSideDiameterUnit)}
                                                        >
                                                            <MenuItem value="">-Select-</MenuItem>
                                                            <MenuItem value="Angstrom">Angstrom</MenuItem>
                                                            <MenuItem value="Mils">Mils</MenuItem>
                                                            <MenuItem value="Yards">Yards</MenuItem>
                                                            <MenuItem value="Picometer">Picometer</MenuItem>
                                                            <MenuItem value="Miles">Miles</MenuItem>
                                                            <MenuItem value="DM">DM</MenuItem>
                                                            <MenuItem value="MM">MM</MenuItem>
                                                            <MenuItem value="M">M</MenuItem>
                                                            <MenuItem value="IN">IN</MenuItem>
                                                            <MenuItem value="FT">FT</MenuItem>
                                                            <MenuItem value="CM">CM</MenuItem>
                                                            <MenuItem value="Hundredth-inches">Hundredth-inches</MenuItem>
                                                            <MenuItem value="Nanometer">Nanometer </MenuItem>
                                                            <MenuItem value="Micrometer">Micrometer </MenuItem>
                                                            <MenuItem value="Kilometer">Kilometer </MenuItem>
                                                        </TextField>
                                                    </div>
                                                </>
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>
                        </>) : ""
                }

                {
                    thicknessField ? (
                        <>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                    <label className='labelbold'>Thickness</label>
                                </div>
                                <div className="col-8 col-sm-7 col-lg-6">
                                    <div className='row align-items-end'>
                                        <Controller
                                            control={control}
                                            name='itemThickness'
                                            rules={{
                                                required: "this field is required",
                                                pattern: {
                                                    value: new RegExp('^[0-9]+$'),
                                                    message: "not a valid formate"
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-12 col-sm-6 col-lg-6">

                                                        <TextField
                                                            placeholder="200"
                                                            id="itemThickness"
                                                            variant="outlined"
                                                            {...field}
                                                            style={{ width: "100%" }}
                                                            error={Boolean(errors.itemThickness)}
                                                        />
                                                    </div>
                                                </>
                                            )}
                                        />
                                        <Controller
                                            control={control}
                                            name='itemThicknessUnit'
                                            rules={{
                                                required: "this is required"
                                            }}
                                            render={({ field }) => (
                                                <>

                                                    <div className="col-12 col-sm-6 col-lg-6">
                                                        <TextField
                                                            id="itemThicknessUnit"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            {...field}
                                                            error={Boolean(errors.itemThicknessUnit)}
                                                        >
                                                            <MenuItem value="">-Select-</MenuItem>
                                                            <MenuItem value="Angstrom">Angstrom</MenuItem>
                                                            <MenuItem value="Mils">Mils</MenuItem>
                                                            <MenuItem value="Yards">Yards</MenuItem>
                                                            <MenuItem value="Picometer">Picometer</MenuItem>
                                                            <MenuItem value="Miles">Miles</MenuItem>
                                                            <MenuItem value="DM">DM</MenuItem>
                                                            <MenuItem value="MM">MM</MenuItem>
                                                            <MenuItem value="M">M</MenuItem>
                                                            <MenuItem value="IN">IN</MenuItem>
                                                            <MenuItem value="FT">FT</MenuItem>
                                                            <MenuItem value="CM">CM</MenuItem>
                                                            <MenuItem value="Hundredth-inches">Hundredth-inches</MenuItem>
                                                            <MenuItem value="Nanometer">Nanometer </MenuItem>
                                                            <MenuItem value="Micrometer">Micrometer </MenuItem>
                                                            <MenuItem value="Kilometer">Kilometer </MenuItem>
                                                        </TextField>
                                                    </div>
                                                </>
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>
                        </>) : ""
                }

                {
                    packageWeightField ? (
                        <>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                    <label className='labelbold'>Package Weight</label>
                                </div>
                                <div className="col-8 col-sm-7 col-lg-6">
                                    <div className='row align-items-end'>
                                        <Controller
                                            control={control}
                                            name='itempackageWeight'
                                            rules={{
                                                required: "this field is required",
                                                pattern: {
                                                    value: new RegExp('^[0-9]+$'),
                                                    message: "not a valid formate"
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-12 col-sm-6 col-lg-6">

                                                        <TextField
                                                            placeholder="200"
                                                            id="itempackageWeight"
                                                            variant="outlined"
                                                            {...field}
                                                            style={{ width: "100%" }}
                                                            error={Boolean(errors.itempackageWeight)}
                                                        />
                                                    </div>
                                                </>
                                            )}
                                        />
                                        <Controller
                                            control={control}
                                            name='itempackageWeightUnit'
                                            rules={{
                                                required: "this is required"
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-12 col-sm-6 col-lg-6">
                                                        <TextField
                                                            id="itempackageWeightUnit"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            {...field}
                                                            error={Boolean(errors.itempackageWeightUnit)}
                                                        >
                                                            <MenuItem value="">-Select-</MenuItem>
                                                            <MenuItem value="New">LB</MenuItem>
                                                            <MenuItem value="New">KG</MenuItem>
                                                            <MenuItem value="New">GR</MenuItem>
                                                            <MenuItem value="New">Hundredths Pounds</MenuItem>
                                                            <MenuItem value="New">MG</MenuItem>
                                                            <MenuItem value="New">Tones</MenuItem>
                                                            <MenuItem value="New">OZ</MenuItem>
                                                        </TextField>
                                                    </div>
                                                </>
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>
                        </>) : ""
                }

                {
                    itemDimensionsDxWxHField ? (
                        <>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                    <label className='labelbold'>Item Dimensions D x W x H</label>
                                </div>
                                <div className="col-8 col-sm-7 col-lg-6">
                                    <div>
                                        <div className='row align-items-end'>
                                            <Controller
                                                control={control}
                                                name='itemDepthfrontToback'
                                                rules={{
                                                    required: "this field is required",
                                                    pattern: {
                                                        value: new RegExp('^[0-9]+$'),
                                                        message: "not a valid formate"
                                                    }
                                                }}
                                                render={({ field }) => (
                                                    <>
                                                        <div className="col-12 col-sm-6">
                                                            <div className='d-flex flex-column' style={{ width: "100%" }}>
                                                                <label className="labelbold me-2">Item Depth Front To Back</label>
                                                                <TextField
                                                                    placeholder="30"
                                                                    id="itemDepthfrontToback"
                                                                    variant="outlined"
                                                                    {...field}

                                                                    error={Boolean(errors.itemDepthfrontToback)}
                                                                />
                                                            </div>
                                                        </div>
                                                    </>
                                                )}
                                            />
                                            <Controller
                                                control={control}
                                                name='itemDepthfrontTobackUnit'
                                                rules={{
                                                    required: "this is required"
                                                }}
                                                render={({ field }) => (
                                                    <>

                                                        <div className="col-12 col-sm-6">
                                                            <TextField
                                                                id="itemDepthfrontTobackUnit"
                                                                variant="outlined"
                                                                select
                                                                style={{ width: "100%" }}
                                                                {...field}
                                                                error={Boolean(errors.itemDepthfrontTobackUnit)}
                                                            >
                                                                <MenuItem value="">-Select-</MenuItem>
                                                                <MenuItem value="New">Centimeters</MenuItem>
                                                            </TextField>
                                                        </div>
                                                    </>
                                                )}

                                            />

                                        </div>
                                        <div className='row align-items-end'>
                                            <Controller
                                                control={control}
                                                name='itemWidthsideToside'
                                                rules={{
                                                    required: "this field is required",
                                                    pattern: {
                                                        value: new RegExp('^[0-9]+$'),
                                                        message: "not a valid formate"
                                                    }
                                                }}
                                                render={({ field }) => (
                                                    <>
                                                        <div className="col-12 col-sm-6">
                                                            <div className='d-flex flex-column' style={{ width: "100%" }}>
                                                                <label className="labelbold me-2">Item Width Side to Side</label>
                                                                <TextField
                                                                    placeholder="25"
                                                                    id="itemWidthsideToside"
                                                                    variant="outlined"
                                                                    {...field}
                                                                    error={Boolean(errors.itemWidthsideToside)}
                                                                />
                                                            </div>
                                                        </div>
                                                    </>
                                                )}
                                            />
                                            <Controller
                                                control={control}
                                                name='itemWidthsideTosideUnit'
                                                rules={{
                                                    required: "this field is required"
                                                }}
                                                render={({ field }) => (
                                                    <>
                                                        <div className="col-12 col-sm-6">
                                                            <TextField
                                                                id="itemWidthsideTosideUnit"
                                                                variant="outlined"
                                                                select
                                                                style={{ width: "100%" }}
                                                                {...field}
                                                                error={Boolean(errors.itemWidthsideTosideUnit)}
                                                            >
                                                                <MenuItem value="">-Select-</MenuItem>
                                                                <MenuItem value="New">Centimeters</MenuItem>
                                                            </TextField>
                                                        </div>
                                                    </>
                                                )}
                                            />
                                        </div>
                                        <div className='row align-items-end'>
                                            <Controller
                                                control={control}
                                                name='itemHeightbaseTotop'
                                                rules={{
                                                    required: "this field is required",
                                                    pattern: {
                                                        value: new RegExp('^[0-9]+$'),
                                                        message: "not a valid formate"
                                                    }
                                                }}
                                                render={({ field }) => (
                                                    <>
                                                        <div className="col-12 col-sm-6">
                                                            <div className='d-flex flex-column' style={{ width: "100%" }}>
                                                                <label className="labelbold me-2">Height Base to Top</label>
                                                                <TextField
                                                                    placeholder="80"
                                                                    id="itemHeightbaseTotop"
                                                                    variant="outlined"
                                                                    {...field}

                                                                    error={Boolean(errors.itemHeightbaseTotop)}
                                                                />
                                                            </div>
                                                        </div>
                                                    </>
                                                )}
                                            />
                                            <Controller
                                                control={control}
                                                name='itemHeightbaseTotopUnit'
                                                rules={{
                                                    required: "this field is required"
                                                }}
                                                render={({ field }) => (
                                                    <>
                                                        <div className="col-12 col-sm-6">
                                                            <TextField
                                                                id="itemHeightbaseTotopUnit"
                                                                variant="outlined"
                                                                select
                                                                style={{ width: "100%" }}
                                                                {...field}
                                                                error={Boolean(errors.itemHeightbaseTotopUnit)}
                                                            >
                                                                <MenuItem value="">-Select-</MenuItem>
                                                                <MenuItem value="New">Centimeters</MenuItem>

                                                            </TextField>
                                                        </div>
                                                    </>
                                                )}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>) : ""
                }

                {
                    productCareInstructionsField ? (
                        <>
                            {/* <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='productCareInstruction'
                                    rules={{
                                        required: "this field is required",

                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2"></label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="Dry clean only"
                                                    id="productCareInstruction"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.productCareInstruction)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div> */}

                            <CareInstructions careInstructionOptions={careInstructionOptions} />
                        </>) : ""


                }

                {
                    isAssemblyRequiredField ? (
                        <>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name="assemblyRequired"
                                    rules={{
                                        required: "this field is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Is Assembly Required</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    id="assemblyRequired-select"
                                                    variant="outlined"
                                                    select
                                                    style={{ width: "100%" }}
                                                    placeholder="select"
                                                    {...field}
                                                    error={Boolean(errors.assemblyRequired)}
                                                >
                                                    <MenuItem value="">-Select-</MenuItem>
                                                    <MenuItem value="Yes">Yes</MenuItem>
                                                    <MenuItem value="No">No</MenuItem>
                                                </TextField>
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""
                }
                {
                    numberofPiecesField ? (
                        <>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='numberofPieces'
                                    rules={{
                                        required: "this field is required",
                                        pattern: {
                                            value: new RegExp('^[0-9]+$'),
                                            message: "value is invalid"
                                        }
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Number of Pieces</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="5"
                                                    id="numberofPieces"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.numberofPieces)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""
                }

                {
                    includedComponentsField ? (
                        <>
                            <IncludedComponents includedComponentOptions={includedComponentOptions} />
                        </>) : ""
                }

                {
                    productSizeField ? (
                        <>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='productSize'
                                    rules={{
                                        required: "this field is required",

                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Size</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder=""
                                                    id="productSize"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.productSize)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""
                }

                {
                    itemDimensionsLxWxHField ? (
                        <>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                    <label className='labelbold'>Item Dimensions L x W x H</label>
                                </div>
                                <div className="col-8 col-sm-7 col-lg-6">

                                    <div className='row align-items-end'>
                                        <Controller
                                            control={control}
                                            name='itemLengthLongerHorizontalEdge'
                                            rules={{
                                                required: "this field is required",
                                                pattern: {
                                                    value: new RegExp('^[0-9]+$'),
                                                    message: "not a valid formate"
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-12 col-sm-6 col-lg-6">
                                                        <label className="labelbold me-2">Length longer horizontal edge</label>
                                                        <TextField
                                                            placeholder="30"
                                                            id="itemLengthLongerHorizontalEdge"
                                                            variant="outlined"
                                                            {...field}
                                                            style={{ width: "100%" }}
                                                            error={Boolean(errors.itemLengthLongerHorizontalEdge)}
                                                        />
                                                    </div>
                                                </>
                                            )}
                                        />
                                        <Controller
                                            control={control}
                                            name='itemLengthLongerHorizontalEdgeUnit'
                                            rules={{
                                                required: "this is required"
                                            }}
                                            render={({ field }) => (
                                                <>

                                                    <div className="col-12 col-sm-6 col-lg-6">
                                                        <TextField
                                                            id="itemLengthLongerHorizontalEdgeUnit"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            {...field}
                                                            error={Boolean(errors.itemLengthLongerHorizontalEdgeUnit)}
                                                        >
                                                            <MenuItem value="">-Select-</MenuItem>
                                                            <MenuItem value="New">Centimeters</MenuItem>
                                                        </TextField>
                                                    </div>
                                                </>
                                            )}

                                        />

                                    </div>
                                    <div className='row align-items-end'>
                                        <Controller
                                            control={control}
                                            name='itemWidthShorterHorizontalEdge'
                                            rules={{
                                                required: "this field is required",
                                                pattern: {
                                                    value: new RegExp('^[0-9]+$'),
                                                    message: "not a valid formate"
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-12 col-sm-6 col-lg-6">
                                                        <label className="labelbold me-2">Width shorter horizontal edge</label>
                                                        <TextField
                                                            placeholder="25"
                                                            id="itemWidthShorterHorizontalEdge"
                                                            variant="outlined"
                                                            {...field}
                                                            style={{ width: "100%" }}
                                                            error={Boolean(errors.itemWidthShorterHorizontalEdge)}
                                                        />
                                                    </div>
                                                </>
                                            )}
                                        />
                                        <Controller
                                            control={control}
                                            name='itemWidthShorterHorizontalEdgeUnit'
                                            rules={{
                                                required: "this field is required"
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-12 col-sm-6 col-lg-6">
                                                        <TextField
                                                            id="itemWidthShorterHorizontalEdgeUnit"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            {...field}
                                                            error={Boolean(errors.itemWidthShorterHorizontalEdgeUnit)}
                                                        >
                                                            <MenuItem value="">-Select-</MenuItem>
                                                            <MenuItem value="New">Centimeters</MenuItem>
                                                        </TextField>
                                                    </div>
                                                </>
                                            )}
                                        />
                                    </div>
                                    <div className='row align-items-end'>
                                        <Controller
                                            control={control}
                                            name='itemHeightbaseTotop'
                                            rules={{
                                                required: "this field is required",
                                                pattern: {
                                                    value: new RegExp('^[0-9]+$'),
                                                    message: "not a valid formate"
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-12 col-sm-6 col-lg-6">
                                                        <label className="labelbold me-2">Height Base to Top</label>
                                                        <TextField
                                                            placeholder="80"
                                                            id="itemHeightbaseTotop"
                                                            variant="outlined"
                                                            {...field}
                                                            style={{ width: "100%" }}
                                                            error={Boolean(errors.itemHeightbaseTotop)}
                                                        />
                                                    </div>
                                                </>
                                            )}
                                        />
                                        <Controller
                                            control={control}
                                            name='itemHeightbaseTotopUnit'
                                            rules={{
                                                required: "this field is required"
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-12 col-sm-6 col-lg-6">
                                                        <TextField
                                                            id="itemHeightbaseTotopUnit"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            {...field}
                                                            error={Boolean(errors.itemHeightbaseTotopUnit)}
                                                        >
                                                            <MenuItem value="">-Select-</MenuItem>
                                                            <MenuItem value="New">Centimeters</MenuItem>
                                                        </TextField>
                                                    </div>
                                                </>
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>
                        </>) : ""
                }

                {
                    itemDimensionsLxWField ? (
                        <>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                    <label className='labelbold'>Item Dimensions L x W x H</label>
                                </div>
                                <div className="col-8 col-sm-7 col-lg-6">

                                    <div className='row align-items-end'>
                                        <Controller
                                            control={control}
                                            name='itemLengthLongerHorizontalEdge'
                                            rules={{
                                                required: "this field is required",
                                                pattern: {
                                                    value: new RegExp('^[0-9]+$'),
                                                    message: "not a valid formate"
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-12 col-sm-6 col-lg-6">
                                                        <label className="labelbold me-2">Length longer horizontal edge</label>
                                                        <TextField
                                                            placeholder="30"
                                                            id="itemLengthLongerHorizontalEdge"
                                                            variant="outlined"
                                                            {...field}
                                                            style={{ width: "100%" }}
                                                            error={Boolean(errors.itemLengthLongerHorizontalEdge)}
                                                        />
                                                    </div>
                                                </>
                                            )}
                                        />
                                        <Controller
                                            control={control}
                                            name='itemLengthLongerHorizontalEdgeUnit'
                                            rules={{
                                                required: "this is required"
                                            }}
                                            render={({ field }) => (
                                                <>

                                                    <div className="col-12 col-sm-6 col-lg-6">
                                                        <TextField
                                                            id="itemLengthLongerHorizontalEdgeUnit"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            {...field}
                                                            error={Boolean(errors.itemLengthLongerHorizontalEdgeUnit)}
                                                        >
                                                            <MenuItem value="">-Select-</MenuItem>
                                                            <MenuItem value="New">Centimeters</MenuItem>
                                                        </TextField>
                                                    </div>
                                                </>
                                            )}

                                        />

                                    </div>
                                    <div className='row align-items-end'>
                                        <Controller
                                            control={control}
                                            name='itemWidthShorterHorizontalEdge'
                                            rules={{
                                                required: "this field is required",
                                                pattern: {
                                                    value: new RegExp('^[0-9]+$'),
                                                    message: "not a valid formate"
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-12 col-sm-6 col-lg-6">
                                                        <label className="labelbold me-2">Width shorter horizontal edge</label>
                                                        <TextField
                                                            placeholder="25"
                                                            id="itemWidthShorterHorizontalEdge"
                                                            variant="outlined"
                                                            {...field}
                                                            style={{ width: "100%" }}
                                                            error={Boolean(errors.itemWidthShorterHorizontalEdge)}
                                                        />
                                                    </div>
                                                </>
                                            )}
                                        />
                                        <Controller
                                            control={control}
                                            name='itemWidthShorterHorizontalEdgeUnit'
                                            rules={{
                                                required: "this field is required"
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-12 col-sm-6 col-lg-6">
                                                        <TextField
                                                            id="itemWidthShorterHorizontalEdgeUnit"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            {...field}
                                                            error={Boolean(errors.itemWidthShorterHorizontalEdgeUnit)}
                                                        >
                                                            <MenuItem value="">-Select-</MenuItem>
                                                            <MenuItem value="New">Centimeters</MenuItem>
                                                        </TextField>
                                                    </div>
                                                </>
                                            )}
                                        />
                                    </div>
                                    <div className='row align-items-end'>
                                        <Controller
                                            control={control}
                                            name='itemHeightbaseTotop'
                                            rules={{
                                                required: "this field is required",
                                                pattern: {
                                                    value: new RegExp('^[0-9]+$'),
                                                    message: "not a valid formate"
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-12 col-sm-6 col-lg-6">
                                                        <label className="labelbold me-2">Height Base to Top</label>
                                                        <TextField
                                                            placeholder="80"
                                                            id="itemHeightbaseTotop"
                                                            variant="outlined"
                                                            {...field}
                                                            style={{ width: "100%" }}
                                                            error={Boolean(errors.itemHeightbaseTotop)}
                                                        />
                                                    </div>
                                                </>
                                            )}
                                        />
                                        <Controller
                                            control={control}
                                            name='itemHeightbaseTotopUnit'
                                            rules={{
                                                required: "this field is required"
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-12 col-sm-6 col-lg-6">
                                                        <TextField
                                                            id="itemHeightbaseTotopUnit"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            {...field}
                                                            error={Boolean(errors.itemHeightbaseTotopUnit)}
                                                        >
                                                            <MenuItem value="">-Select-</MenuItem>
                                                            <MenuItem value="New">Centimeters</MenuItem>
                                                        </TextField>
                                                    </div>
                                                </>
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>
                        </>) : ""
                }

                {
                    measurementAccuracyField ? (
                        <>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='measurementAccuracy'
                                    rules={{
                                        required: "this field is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Measurement Accuracy</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="2,4 mm"
                                                    id="measurementAccuracy"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.measurementAccuracy)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""
                }

                {
                    productsizeMapField ? (
                        <>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name="productSizeMap"
                                    rules={{
                                        required: "this field is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Size Map</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    id="productSizeMap-select"
                                                    variant="outlined"
                                                    select
                                                    style={{ width: "100%" }}
                                                    placeholder="select"
                                                    {...field}
                                                    error={Boolean(errors.productSizeMap)}
                                                >
                                                    <MenuItem value="">-Select-</MenuItem>
                                                    <MenuItem value="Free Size/Adjustable">Free Size/Adjustable</MenuItem>
                                                    <MenuItem value="Extra Large">Extra Large</MenuItem>
                                                    <MenuItem value="Large">Large</MenuItem>
                                                    <MenuItem value="Medium">Medium</MenuItem>
                                                    <MenuItem value="Small">Small</MenuItem>
                                                    <MenuItem value="X-Large">X-Large</MenuItem>
                                                    <MenuItem value="X-Small">X-Small</MenuItem>
                                                    <MenuItem value="XX-Large">XX-Large</MenuItem>
                                                    <MenuItem value="XX-Small">XX-Small</MenuItem>
                                                    <MenuItem value="XX-Large">XX-Large</MenuItem>
                                                    <MenuItem value="XX-Small">XX-Small</MenuItem>
                                                    <MenuItem value="XXX-Large">XXX-Large</MenuItem>
                                                    <MenuItem value="XXX-Small">XXX-Small</MenuItem>
                                                    <MenuItem value="XXXX-Large">XXXX-Large</MenuItem>
                                                    <MenuItem value="XXXX-Small">XXXX-Small</MenuItem>
                                                    <MenuItem value="XXXXX-Large">XXXXX-Large</MenuItem>
                                                    <MenuItem value="XXXXX-Small">XXXXX-Small</MenuItem>
                                                    <MenuItem value="20 inches">20 inches</MenuItem>
                                                    <MenuItem value="22 inches">22 inches</MenuItem>
                                                    <MenuItem value="24 inches">24 inches</MenuItem>
                                                    <MenuItem value="26 inches">26 inches</MenuItem>
                                                    <MenuItem value="28 inches">28 inches</MenuItem>
                                                    <MenuItem value="30 inches">30 inches</MenuItem>
                                                    <MenuItem value="32 inches">32 inches</MenuItem>
                                                    <MenuItem value="34 inches">34 inches</MenuItem>
                                                    <MenuItem value="36 inches">36 inches</MenuItem>
                                                    <MenuItem value="38 inches">38 inches</MenuItem>
                                                    <MenuItem value="40 inches">40 inches</MenuItem>
                                                    <MenuItem value="42 inches">42 inches</MenuItem>
                                                    <MenuItem value="44 inches">44 inches</MenuItem>
                                                    <MenuItem value="46 inches">46 inches</MenuItem>
                                                    <MenuItem value="48 inches">48 inches</MenuItem>
                                                    <MenuItem value="50 inches">50 inches</MenuItem>
                                                    <MenuItem value="52 inches">52 inches</MenuItem>
                                                    <MenuItem value="54 inches">54 inches</MenuItem>
                                                </TextField>
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""
                }
                {
                    productIsFragileField ? (
                        <>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name="productFragile"
                                    rules={{
                                        required: "this field is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Is Fragile</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    id="productFragile-select"
                                                    variant="outlined"
                                                    select
                                                    style={{ width: "100%" }}
                                                    placeholder="select"
                                                    {...field}
                                                    error={Boolean(errors.productFragile)}
                                                >
                                                    <MenuItem value="">-Select-</MenuItem>
                                                    <MenuItem value="Yes">Yes</MenuItem>
                                                    <MenuItem value="No">No</MenuItem>
                                                </TextField>
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""
                }
                {
                    assemblyInstructionsField ? (
                        <>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name="productAssemblyInstructions"
                                    rules={{
                                        required: "this field is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Assembly Instructions</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="Insert piece A into the upper pre-drilled holes on piece B., Push the axles (marked parts E and F) through holes 1 and 2."
                                                    id="productAssemblyInstructions"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.productAssemblyInstructions)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""
                }

                {
                    productExpirationTypeField ? (
                        <>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name="productExpirationType"
                                    rules={{
                                        required: "this field is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Product Expiration Type</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    id="productExpirationType-select"
                                                    variant="outlined"
                                                    select
                                                    style={{ width: "100%" }}
                                                    placeholder="Expiration Date Required"
                                                    {...field}
                                                    error={Boolean(errors.productExpirationType)}
                                                >
                                                    <MenuItem value="">-Select-</MenuItem>
                                                    <MenuItem value="Does Not Expire">Does Not Expire</MenuItem>
                                                    <MenuItem value="Expiration Date Required">Expiration Date Required</MenuItem>
                                                    <MenuItem value="Expiration On Package">Expiration On Package</MenuItem>
                                                    <MenuItem value="Production Date Required">Production Date Required</MenuItem>
                                                    <MenuItem value="Shelf Life">Shelf Life</MenuItem>

                                                </TextField>
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""
                }

                {
                    isProductExpirableField ? (
                        <>
                            <div className='row' style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='productExpirable'
                                    rules={{
                                        required: "productExpirable is required"
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className='labelbold me-2'>Is Product Expirable</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    id="productExpirable"
                                                    variant="outlined"
                                                    select
                                                    style={{ width: "100%" }}
                                                    {...field}
                                                    error={Boolean(errors.productExpirable)}
                                                >
                                                    <MenuItem value="">-Select-</MenuItem>
                                                    <MenuItem value="Yes">Yes</MenuItem>
                                                    <MenuItem value="No">No</MenuItem>
                                                </TextField>
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""
                }
                {
                    productFulfilmentCenterShelfLifeField ? (
                        <>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                    <label className='labelbold'>Fulfillment Center Shelf Life</label>
                                </div>
                                <div className="col-8 col-sm-7 col-lg-6">
                                    <div>
                                        <div className='row align-items-end'>
                                            <Controller
                                                control={control}
                                                name='productFulfilmentCenterShelfLife'
                                                rules={{
                                                    required: "this field is required",
                                                    pattern: {
                                                        value: new RegExp('^[0-9]+$'),
                                                        message: "not a valid formate"
                                                    }
                                                }}
                                                render={({ field }) => (
                                                    <>
                                                        <div className="col-12 col-sm-6">
                                                            <TextField
                                                                placeholder="365"
                                                                id="productFulfilmentCenterShelfLife"
                                                                variant="outlined"
                                                                {...field}
                                                                style={{ width: "100%" }}

                                                                error={Boolean(errors.productFulfilmentCenterShelfLife)}
                                                            />
                                                        </div>
                                                    </>
                                                )}
                                            />
                                            <Controller
                                                control={control}
                                                name='productFulfilmentCenterShelfLifeUnit'
                                                rules={{
                                                    required: "this is required"
                                                }}
                                                render={({ field }) => (
                                                    <>
                                                        <div className="col-12 col-sm-6">
                                                            <TextField
                                                                id="productFulfilmentCenterShelfLifeUnit"
                                                                variant="outlined"
                                                                select
                                                                style={{ width: "100%" }}
                                                                {...field}
                                                                error={Boolean(errors.productFulfilmentCenterShelfLifeUnit)}
                                                            >
                                                                <MenuItem value="">-Select-</MenuItem>
                                                                <MenuItem value="Hours">Hours</MenuItem>
                                                                <MenuItem value="Second">Second</MenuItem>
                                                                <MenuItem value="Minutes">Minutes</MenuItem>
                                                                <MenuItem value="Days">Days</MenuItem>
                                                            </TextField>
                                                        </div>
                                                    </>
                                                )}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>) : ""
                }
                {
                    warrantyDescField ? (
                        <>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='warrantyDesc'
                                    rules={{
                                        required: "warranty description is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Warranty Description </label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="1 year manufacturer warranty is non-transferable and valid for 1 year from the original date of purchase."
                                                    id="warrantyDesc"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.warrantyDesc)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""
                }
                {
                    analogRgbInputField ? (<>
                        {/* similar include component */}
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name="analogRgbInput"
                                rules={{
                                    required: "This field is required",
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Analog Rgb Input</label>
                                        </div>
                                        {/* <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="Camera Body,Battery Pack"
                                                    id="analogRgbInput"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.analogRgbInput)}
                                                />
                                            </div> */}
                                    </>
                                )}
                            />
                        </div>
                    </>) : ""
                }
                {
                    connectorGenderField ? (<>
                        {/* similar include component */}
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name="connectorGender"
                                rules={{
                                    required: "This field is required",
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Connector Gender</label>
                                        </div>
                                        {/* <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="Camera Body,Battery Pack"
                                                    id="connectorGender"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.connectorGender)}
                                                />
                                            </div> */}
                                    </>
                                )}
                            />
                        </div>
                    </>) : ""
                }
                {
                    cableLengthDecimalValueField ? (<>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                <label className='labelbold'>Cable Length Decimal Value</label>
                            </div>
                            <div className="col-8 col-sm-7 col-lg-6">
                                <div>
                                    <div className='row align-items-end'>
                                        <Controller
                                            control={control}
                                            name='cableLengthDecimalValue'
                                            rules={{
                                                required: "this field is required",
                                                pattern: {
                                                    value: new RegExp('^[0-9]+$'),
                                                    message: "not a valid formate"
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-12 col-sm-6">
                                                        <TextField
                                                            placeholder="3"
                                                            id="cableLengthDecimalValue"
                                                            variant="outlined"
                                                            {...field}
                                                            style={{ width: "100%" }}

                                                            error={Boolean(errors.cableLengthDecimalValue)}
                                                        />
                                                    </div>
                                                </>
                                            )}
                                        />
                                        <Controller
                                            control={control}
                                            name='cableLengthDecimalValueUnit'
                                            rules={{
                                                required: "this is required"
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-12 col-sm-6">
                                                        <TextField
                                                            id="cableLengthDecimalValueUnit"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            {...field}
                                                            error={Boolean(errors.cableLengthDecimalValueUnit)}
                                                        >
                                                            <MenuItem value="">-Select-</MenuItem>
                                                            <MenuItem value="Angstrom">Angstrom</MenuItem>
                                                            <MenuItem value="Mils">Mils</MenuItem>
                                                            <MenuItem value="Yards">Yards</MenuItem>
                                                            <MenuItem value="Picometer">Picometer</MenuItem>
                                                            <MenuItem value="Miles">Miles</MenuItem>
                                                            <MenuItem value="DM">DM</MenuItem>
                                                            <MenuItem value="MM">MM</MenuItem>
                                                            <MenuItem value="M">M</MenuItem>
                                                            <MenuItem value="IN">IN</MenuItem>
                                                            <MenuItem value="FT">FT</MenuItem>
                                                            <MenuItem value="CM">CM</MenuItem>
                                                            <MenuItem value="Hundredth-inches">Hundredth-inches</MenuItem>
                                                            <MenuItem value="Nanometer">Nanometer </MenuItem>
                                                            <MenuItem value="Micrometer">Micrometer </MenuItem>
                                                            <MenuItem value="Kilometer">Kilometer </MenuItem>
                                                        </TextField>
                                                    </div>
                                                </>
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>) : ""
                }
                {
                    itemLengthEndtoEndField ? (
                        <>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <div className="col-4 col-sm-3 col-lg-3 text-end">
                                    <label className='labelbold'>Item Length End to End</label>
                                </div>
                                <div className="col-8 col-sm-7 col-lg-6">

                                    <div className='row align-items-end'>
                                        <Controller
                                            control={control}
                                            name='itemLengthEndtoEnd'
                                            rules={{
                                                required: "this field is required",
                                                pattern: {
                                                    value: new RegExp('^[0-9]+$'),
                                                    message: "not a valid formate"
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className="col-12 col-sm-6 col-lg-6">

                                                        <TextField
                                                            placeholder="30"
                                                            id="itemLengthEndtoEnd"
                                                            variant="outlined"
                                                            {...field}
                                                            style={{ width: "100%" }}
                                                            error={Boolean(errors.itemLengthEndtoEnd)}
                                                        />
                                                    </div>
                                                </>
                                            )}
                                        />
                                        <Controller
                                            control={control}
                                            name='itemLengthEndtoEndUnit'
                                            rules={{
                                                required: "this is required"
                                            }}
                                            render={({ field }) => (
                                                <>

                                                    <div className="col-12 col-sm-6 col-lg-6">
                                                        <TextField
                                                            id="itemLengthEndtoEndUnit"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            {...field}
                                                            error={Boolean(errors.itemLengthEndtoEndUnit)}
                                                        >
                                                            <MenuItem value="">-Select-</MenuItem>
                                                            <MenuItem value="New">Centimeters</MenuItem>
                                                        </TextField>
                                                    </div>
                                                </>
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>
                        </>) : ""
                }

                {
                    itemShapeField ? (
                        <>
                            <div className='row' style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='itemShape'
                                    rules={{
                                        required: "itemShape is required"
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className='labelbold me-2'>Item Shape</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    id="itemShape"
                                                    variant="outlined"
                                                    select
                                                    style={{ width: "100%" }}
                                                    {...field}
                                                    error={Boolean(errors.itemShape)}
                                                >
                                                    <MenuItem value="">-Select-</MenuItem>
                                                    <MenuItem value="oval">oval</MenuItem>
                                                    <MenuItem value="rectangle">rectangle</MenuItem>
                                                    <MenuItem value="round">round</MenuItem>
                                                    <MenuItem value="square">square</MenuItem>
                                                    <MenuItem value="tonneau">tonneau</MenuItem>
                                                </TextField>
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""
                }

                {
                    searchTearmsField ? (
                        <>
                            <div className='row' style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='searchTerms'
                                    rules={{
                                        required: "Search Terms is required"
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Search Tearms</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="Electric"
                                                    id="searchTerms"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "50%" }}
                                                    error={Boolean(errors.searchTerms)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""
                }


                {
                    powerandPlugDescriptionField ? (
                        <>
                            <div className='row' style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='powerandPlugDescription'
                                    rules={{
                                        required: "itemShape is required"
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className='labelbold me-2'>Power and Plug Description</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    id="powerandPlugDescription"
                                                    variant="outlined"
                                                    select
                                                    style={{ width: "100%" }}
                                                    {...field}
                                                    error={Boolean(errors.powerandPlugDescription)}
                                                >
                                                    <MenuItem value="">-Select-</MenuItem>
                                                    <MenuItem value="Gas Powered">Gas Powered</MenuItem>
                                                    <MenuItem value="Hydraulic Powered">Hydraulic Powered</MenuItem>
                                                    <MenuItem value="AC">AC</MenuItem>
                                                    <MenuItem value="Fuel Powered">Fuel Powered</MenuItem>
                                                    <MenuItem value="Hand Powered">Hand Powered</MenuItem>
                                                    <MenuItem value="Air Powered">Air Powered</MenuItem>
                                                    <MenuItem value="Crank">Crank</MenuItem>
                                                    <MenuItem value="Solar Powered">Solar Powered</MenuItem>
                                                    <MenuItem value="AC/DC">AC/DC</MenuItem>
                                                    <MenuItem value="Battery Powered">Battery Powered</MenuItem>
                                                    <MenuItem value="DC">DC</MenuItem>

                                                </TextField>
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""
                }

                {
                    closureTypeField ? (
                        <>
                            <div className='row' style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='itemClosureType'
                                    rules={{
                                        required: "this field is required"
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className='labelbold me-2'>Closure Type</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    id="itemClosureType"
                                                    variant="outlined"
                                                    select
                                                    style={{ width: "100%" }}
                                                    {...field}
                                                    error={Boolean(errors.itemClosureType)}
                                                >
                                                    <MenuItem value="">-Select-</MenuItem>
                                                    <MenuItem value="Fold">Fold</MenuItem>
                                                    <MenuItem value="Magnet">Magnet</MenuItem>
                                                    <MenuItem value="Pull On">Pull On</MenuItem>
                                                    <MenuItem value="Double Ring">Double Ring</MenuItem>
                                                    <MenuItem value="Belted">Belted</MenuItem>
                                                    <MenuItem value="Buckle">Buckle</MenuItem>
                                                    <MenuItem value="Zipper">Zipper</MenuItem>
                                                    <MenuItem value="Adjustable">Adjustable</MenuItem>
                                                    <MenuItem value="No Closure">No Closure</MenuItem>
                                                    <MenuItem value="Snap">Snap</MenuItem>
                                                    <MenuItem value="J Clip">J Clip</MenuItem>
                                                    <MenuItem value="Lace-Up">Lace-Up</MenuItem>
                                                    <MenuItem value="Hook and Eye">Hook and Eye</MenuItem>
                                                    <MenuItem value="Tie">Tie</MenuItem>
                                                    <MenuItem value="Elastic">Elastic</MenuItem>
                                                    <MenuItem value="Flap">Flap</MenuItem>
                                                    <MenuItem value="Button">Button</MenuItem>
                                                    <MenuItem value="Hook and Bar">Hook and Bar</MenuItem>
                                                    <MenuItem value="Toggle">Toggle</MenuItem>
                                                    <MenuItem value="Drawstring Waist">Drawstring Waist</MenuItem>
                                                    <MenuItem value="Button Fly">Button Fly</MenuItem>
                                                    <MenuItem value="Hook and Loop">Hook and Loop</MenuItem>
                                                </TextField>
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""
                }

                {
                    fabricTypeField ? (
                        <>
                            <div className='row' style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='itemFabricType'
                                    rules={{
                                        required: "this field is required"
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Fabric Type</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="80% Cotton,10% Nylon,10% Wool"
                                                    id="itemFabricType"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.itemFabricType)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""
                }
                {
                    targetGenderField ? (
                        <>
                            <div className='row' style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='targetGender'
                                    rules={{
                                        required: "this field is required"
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className='labelbold me-2'>Target Gender</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    id="targetGender"
                                                    variant="outlined"
                                                    select
                                                    style={{ width: "100%" }}
                                                    {...field}
                                                    error={Boolean(errors.targetGender)}
                                                >
                                                    <MenuItem value="">-Select-</MenuItem>
                                                    <MenuItem value="Male">Male</MenuItem>
                                                    <MenuItem value="Female">Female</MenuItem>
                                                    <MenuItem value="Unisex">Unisex</MenuItem>
                                                </TextField>
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""
                }

                {
                    ageRangeDescriptionField ? (
                        <>
                            <div className='row' style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='ageRangeDescription'
                                    rules={{
                                        required: "this field is required"
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className='labelbold me-2'>Age Range Description</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    id="ageRangeDescription"
                                                    variant="outlined"
                                                    select
                                                    style={{ width: "100%" }}
                                                    {...field}
                                                    error={Boolean(errors.ageRangeDescription)}
                                                >
                                                    <MenuItem value="">-Select-</MenuItem>
                                                    <MenuItem value="Big Kid">Big Kid</MenuItem>
                                                    <MenuItem value="Little Kid">Little Kid</MenuItem>
                                                    <MenuItem value="Kid">Kid</MenuItem>
                                                    <MenuItem value="Adult">Adult</MenuItem>
                                                    <MenuItem value="Baby">Baby</MenuItem>
                                                    <MenuItem value="Infant">Infant</MenuItem>
                                                    <MenuItem value="Toddler">Toddler</MenuItem>
                                                </TextField>
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""
                }
                {
                    productStyleTxtField ? (
                        <>
                            <div className='row' style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='productStyle'
                                    rules={{
                                        required: "this field is required"
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Style</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="Maya Bay Short Sleeve Classic Fit Shirt"
                                                    id="productStyle"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.productStyle)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""
                }

                {
                    outerMaterialTypeField ? (
                        <>
                            <div className='row' style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='outerMaterialType'
                                    rules={{
                                        required: "this field is required"
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className='labelbold me-2'>Outer Material Type</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    id="outerMaterialType"
                                                    variant="outlined"
                                                    select
                                                    style={{ width: "100%" }}
                                                    {...field}
                                                    error={Boolean(errors.outerMaterialType)}
                                                >
                                                    <MenuItem value="">-Select-</MenuItem>
                                                    <MenuItem value="Alpaca">Alpaca</MenuItem>
                                                    <MenuItem value="Angora">Angora</MenuItem>
                                                    <MenuItem value="Blended">Blended</MenuItem>
                                                    <MenuItem value="Brasso">Brasso</MenuItem>
                                                    <MenuItem value="Brasso & Net">Brasso & Net</MenuItem>
                                                    <MenuItem value="Brocade & Georgette">Brocade & Georgette</MenuItem>
                                                    <MenuItem value="Cashmere">Cashmere</MenuItem>
                                                    <MenuItem value="Chiffon">Chiffon</MenuItem>
                                                    <MenuItem value="Corduroy">Corduroy</MenuItem>
                                                    <MenuItem value="Cotton">Cotton</MenuItem>
                                                    <MenuItem value="Cotton & Crush">Cotton & Crush</MenuItem>
                                                    <MenuItem value="Cotton Silk">Cotton Silk</MenuItem>
                                                    <MenuItem value="Crepe">Crepe</MenuItem>
                                                    <MenuItem value="Crepe Chiffon">Crepe Chiffon</MenuItem>
                                                    <MenuItem value="Crepe Georgette">Crepe Georgette</MenuItem>
                                                    <MenuItem value="Crepe Net">Crepe Net</MenuItem>
                                                    <MenuItem value="Crepe Silk">Crepe Silk</MenuItem>
                                                    <MenuItem value="Crush">Crush</MenuItem>
                                                    <MenuItem value="Denim">Denim</MenuItem>
                                                    <MenuItem value="Down">Down</MenuItem>
                                                    <MenuItem value="Faux Crepe">Faux Crepe</MenuItem>
                                                    <MenuItem value="Faux Fur">Faux Fur</MenuItem>
                                                    <MenuItem value="Faux Leather">Faux Leather</MenuItem>
                                                    <MenuItem value="Felt">Felt</MenuItem>
                                                    <MenuItem value="Fleece">Fleece</MenuItem>
                                                    <MenuItem value="Fur">Fur</MenuItem>
                                                    <MenuItem value="Hemp">Hemp</MenuItem>
                                                    <MenuItem value="Jute">Jute</MenuItem>
                                                    <MenuItem value="Khadi">Khadi</MenuItem>
                                                    <MenuItem value="Kora Silk">Kora Silk</MenuItem>
                                                    <MenuItem value="Leather">Leather</MenuItem>
                                                    <MenuItem value="Linen">Linen</MenuItem>
                                                    <MenuItem value="Merino">Merino</MenuItem>
                                                    <MenuItem value="Mohair">Mohair</MenuItem>
                                                    <MenuItem value="Net">Net</MenuItem>
                                                    <MenuItem value="Organza">Organza</MenuItem>
                                                    <MenuItem value="Pashmina">Pashmina</MenuItem>
                                                    <MenuItem value="Patent Leather">Patent Leather</MenuItem>
                                                    <MenuItem value="Patent Leather">Patent Leather</MenuItem>
                                                    <MenuItem value="Poly Cotton">Poly Cotton</MenuItem>
                                                    <MenuItem value="Polyester">Polyester</MenuItem>
                                                    <MenuItem value="PVC">PVC</MenuItem>
                                                    <MenuItem value="Raw Silk">Raw Silk</MenuItem>
                                                    <MenuItem value="Rubber">Rubber</MenuItem>
                                                    <MenuItem value="Satin">Satin</MenuItem>
                                                    <MenuItem value="Sequined">Sequined</MenuItem>
                                                    <MenuItem value="Silk">Silk</MenuItem>
                                                    <MenuItem value="Silk & Georgette">Silk & Georgette</MenuItem>
                                                    <MenuItem value="Silk Cotton">Silk Cotton</MenuItem>
                                                    <MenuItem value="Smooth Leather">Smooth Leather</MenuItem>
                                                    <MenuItem value="Suede">Suede</MenuItem>
                                                    <MenuItem value="Synthetic">Synthetic</MenuItem>
                                                    <MenuItem value="Tassar Silk">Tassar Silk</MenuItem>
                                                    <MenuItem value="Tissue">Tissue</MenuItem>
                                                    <MenuItem value="Velvet">Velvet</MenuItem>
                                                    <MenuItem value="Velvet & Net">Velvet & Net</MenuItem>
                                                    <MenuItem value="Viscose">Viscose</MenuItem>
                                                    <MenuItem value="Wool">Wool</MenuItem>
                                                    <MenuItem value="Other">Other</MenuItem>
                                                    <MenuItem value="Georgette">Georgette</MenuItem>
                                                    <MenuItem value="Faux Georgette">Faux Georgette</MenuItem>
                                                </TextField>
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ''
                }
                {
                    headwearSizeSystemField ? (
                        <>
                            <div className='row' style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='headwearSizeSystem'
                                    rules={{
                                        required: "this field is required"
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className='labelbold me-2'>Headwear Size System</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    id="headwearSizeSystem"
                                                    variant="outlined"
                                                    select
                                                    style={{ width: "100%" }}
                                                    {...field}
                                                    error={Boolean(errors.headwearSizeSystem)}
                                                >
                                                    <MenuItem value="">-Select-</MenuItem>
                                                    <MenuItem value="IN">IN</MenuItem>
                                                </TextField>
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""
                }
                {
                    headwearSizeClassField ? (
                        <>
                            <div className='row' style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='headwearSizeClass'
                                    rules={{
                                        required: "this field is required"
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className='labelbold me-2'>Headwear Size Class</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    id="headwearSizeClass"
                                                    variant="outlined"
                                                    select
                                                    style={{ width: "100%" }}
                                                    {...field}
                                                    error={Boolean(errors.headwearSizeClass)}
                                                >
                                                    <MenuItem value="">-Select-</MenuItem>
                                                    <MenuItem value="Alpha">Alpha</MenuItem>
                                                    <MenuItem value="Alpha">Age</MenuItem>
                                                </TextField>
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""
                }
                {
                    headwearSizeValueField ? (
                        <>
                            <div className='row' style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='headwearSizeValue'
                                    rules={{
                                        required: "this field is required"
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className='labelbold me-2'>Headwear Size Value</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    id="headwearSizeValue"
                                                    variant="outlined"
                                                    select
                                                    style={{ width: "100%" }}
                                                    {...field}
                                                    error={Boolean(errors.headwearSizeValue)}
                                                >
                                                    <MenuItem value="">-Select-</MenuItem>
                                                    <MenuItem value="Free Size">Free Size</MenuItem>
                                                    <MenuItem value="XS">XS</MenuItem>
                                                    <MenuItem value="S">S</MenuItem>
                                                    <MenuItem value="M">M</MenuItem>
                                                    <MenuItem value="L">L</MenuItem>
                                                    <MenuItem value="XL">XL</MenuItem>
                                                    <MenuItem value="0 Months">0 Months</MenuItem>
                                                    <MenuItem value="3 Months">3 Months</MenuItem>
                                                    <MenuItem value="6 Months">6 Months</MenuItem>
                                                    <MenuItem value="9 Months">9 Months</MenuItem>
                                                    <MenuItem value="12 Months">12 Months</MenuItem>
                                                    <MenuItem value="18 Months">18 Months</MenuItem>
                                                    <MenuItem value="24 Months">24 Months</MenuItem>
                                                    <MenuItem value="2 Years">2 Years</MenuItem>
                                                    <MenuItem value="3 Years">3 Years</MenuItem>
                                                    <MenuItem value="4 Years">4 Years</MenuItem>
                                                    <MenuItem value="5 Years">5 Years</MenuItem>
                                                    <MenuItem value="6 Years">6 Years</MenuItem>
                                                    <MenuItem value="7 Years">7 Years</MenuItem>
                                                    <MenuItem value="8 Years">8 Years</MenuItem>
                                                    <MenuItem value="9 Years">9 Years</MenuItem>
                                                    <MenuItem value="10 Years">10 Years</MenuItem>
                                                    <MenuItem value="11 Years">11 Years</MenuItem>
                                                    <MenuItem value="12 Years">12 Years</MenuItem>
                                                    <MenuItem value="13 Years">13 Years</MenuItem>
                                                    <MenuItem value="14 Years">14 Years</MenuItem>
                                                    <MenuItem value="15 Years">15 Years</MenuItem>
                                                    <MenuItem value="16 Years">16 Years</MenuItem>
                                                    <MenuItem value="17 Years">17 Years</MenuItem>
                                                    <MenuItem value="18 Years">18 Years</MenuItem>
                                                </TextField>
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""
                }
                {
                    headwearSizeToRangeField ? (
                        <>
                            <div className='row' style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='headwearSizeToRange'
                                    rules={{
                                        required: "this field is required"
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className='labelbold me-2'>Headwear Size To Range</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    id="headwearSizeToRange"
                                                    variant="outlined"
                                                    select
                                                    style={{ width: "100%" }}
                                                    {...field}
                                                    error={Boolean(errors.headwearSizeToRange)}
                                                >
                                                    <MenuItem value="">-Select-</MenuItem>
                                                    <MenuItem value="Free Size">Free Size</MenuItem>
                                                    <MenuItem value="XS">XS</MenuItem>
                                                    <MenuItem value="S">S</MenuItem>
                                                    <MenuItem value="M">M</MenuItem>
                                                    <MenuItem value="L">L</MenuItem>
                                                    <MenuItem value="XL">XL</MenuItem>
                                                    <MenuItem value="0 Months">0 Months</MenuItem>
                                                    <MenuItem value="3 Months">3 Months</MenuItem>
                                                    <MenuItem value="6 Months">6 Months</MenuItem>
                                                    <MenuItem value="9 Months">9 Months</MenuItem>
                                                    <MenuItem value="12 Months">12 Months</MenuItem>
                                                    <MenuItem value="18 Months">18 Months</MenuItem>
                                                    <MenuItem value="24 Months">24 Months</MenuItem>
                                                    <MenuItem value="2 Years">2 Years</MenuItem>
                                                    <MenuItem value="3 Years">3 Years</MenuItem>
                                                    <MenuItem value="4 Years">4 Years</MenuItem>
                                                    <MenuItem value="5 Years">5 Years</MenuItem>
                                                    <MenuItem value="6 Years">6 Years</MenuItem>
                                                    <MenuItem value="7 Years">7 Years</MenuItem>
                                                    <MenuItem value="8 Years">8 Years</MenuItem>
                                                    <MenuItem value="9 Years">9 Years</MenuItem>
                                                    <MenuItem value="10 Years">10 Years</MenuItem>
                                                    <MenuItem value="11 Years">11 Years</MenuItem>
                                                    <MenuItem value="12 Years">12 Years</MenuItem>
                                                    <MenuItem value="13 Years">13 Years</MenuItem>
                                                    <MenuItem value="14 Years">14 Years</MenuItem>
                                                    <MenuItem value="15 Years">15 Years</MenuItem>
                                                    <MenuItem value="16 Years">16 Years</MenuItem>
                                                    <MenuItem value="17 Years">17 Years</MenuItem>
                                                    <MenuItem value="18 Years">18 Years</MenuItem>
                                                </TextField>
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""
                }
                {
                    occasionDescriptionField ? (
                        <>
                            <OccasionDescription occasionDescriptionOptions={occasionDescriptionOptions} />
                        </>) : ""
                }
                {
                    holeCountField ? (
                        <>
                            <div className='row' style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='holeCount'
                                    rules={{
                                        required: "this field is required",
                                        pattern: {
                                            value: new RegExp('^[0-9]+$'),
                                            message: "not a valid formate"
                                        }
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Hole Count</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="2"
                                                    id="holeCount"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.holeCount)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""
                }
                {
                    patternField ? (
                        <>
                            <div className='row' style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='itemPattern'
                                    rules={{
                                        required: "this field is required"
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className='labelbold me-2'>Pattern</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    id="itemPattern"
                                                    variant="outlined"
                                                    select
                                                    style={{ width: "100%" }}
                                                    {...field}
                                                    error={Boolean(errors.itemPattern)}
                                                >
                                                    <MenuItem value="">-Select-</MenuItem>
                                                    <MenuItem value="Braided">Braided</MenuItem>
                                                    <MenuItem value="Checked">Checked</MenuItem>
                                                    <MenuItem value="Embellished">Embellished</MenuItem>
                                                    <MenuItem value="Printed">Printed</MenuItem>
                                                    <MenuItem value="Solid">Solid</MenuItem>
                                                    <MenuItem value="Striped">Striped</MenuItem>
                                                    <MenuItem value="Textured">Textured</MenuItem>
                                                    <MenuItem value="Woven Design">Woven Design</MenuItem>
                                                </TextField>
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""
                }
                {
                    materialCompositionField ? (
                        <>
                            <div className='row' style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='materialComposition'
                                    rules={{
                                        required: "this field is required"
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Material Composition</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="90% cotton, 10% polyester"
                                                    id="materialComposition"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.materialComposition)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""
                }
                {
                    targetAudienceField ? (
                        <>
                            <TargetAudience />
                        </>) : ""
                }
                {
                    safetyWarningField ? (
                        <>
                            <div className='row' style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='safetyWarning'
                                    rules={{
                                        required: "safety warning is required"
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Safety Warning</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="Consult with a doctor before using this product."
                                                    id="safetyWarning"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.safetyWarning)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />

                            </div>
                        </>) : ""

                }
                {
                    itemPPUCountField ? (
                        <>
                            <div className='row' style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='ppuCount'
                                    rules={{
                                        required: "PPU Count is required",
                                        pattern: {
                                            value: new RegExp('^[0-9]+$'),
                                            message: "value is invalid"
                                        }
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">PPU Count</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="6"
                                                    id="ppuCount"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.ppuCount)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""
                }

                {
                    itemPPUCountUnitofMeasureField ? (
                        <>
                            <div className='row' style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name="ppuCountUnit"
                                    rules={{
                                        required: "PPU Count Unit of Measure is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">PPU Count Unit of Measure</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    id="ppuCountUnit-select"
                                                    variant="outlined"
                                                    select
                                                    style={{ width: "100%" }}
                                                    placeholder="women"
                                                    {...field}
                                                    error={Boolean(errors.ppuCountUnit)}
                                                >
                                                    <MenuItem value="">-Select-</MenuItem>
                                                    <MenuItem value="count">count</MenuItem>
                                                    <MenuItem value="gram">gram</MenuItem>
                                                    <MenuItem value="metre">metre</MenuItem>
                                                    <MenuItem value="mililitre">mililitre</MenuItem>
                                                    <MenuItem value="Gsquare metreirls">square metre</MenuItem>
                                                </TextField>
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""
                }
                {
                    hairTypeField ? (
                        <>
                            <div className='row' style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name="hairType"
                                    rules={{
                                        required: "this field is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Hair Type</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    id="hairType-select"
                                                    variant="outlined"
                                                    select
                                                    style={{ width: "100%" }}
                                                    placeholder="Oily"
                                                    {...field}
                                                    error={Boolean(errors.hairType)}
                                                >
                                                    <MenuItem value="">-Select-</MenuItem>
                                                    <MenuItem value="Oily">Oily</MenuItem>
                                                    <MenuItem value="Wavy">Wavy</MenuItem>
                                                    <MenuItem value="Curly">Curly</MenuItem>
                                                    <MenuItem value="Dry">Dry</MenuItem>
                                                    <MenuItem value="Coiled">Coiled</MenuItem>
                                                    <MenuItem value="Normal">Normal</MenuItem>
                                                    <MenuItem value="Thick">Thick</MenuItem>
                                                    <MenuItem value="Damaged">Damaged</MenuItem>
                                                    <MenuItem value="Dandruff">Dandruff</MenuItem>
                                                    <MenuItem value="Long Hair">Long Hair</MenuItem>
                                                    <MenuItem value="Coarse">Coarse</MenuItem>
                                                    <MenuItem value="Fragile">Fragile</MenuItem>
                                                    <MenuItem value="Thinning">Thinning</MenuItem>
                                                    <MenuItem value="Frizzy">Frizzy</MenuItem>
                                                    <MenuItem value="Relaxed">Relaxed</MenuItem>
                                                    <MenuItem value="Aging">Aging</MenuItem>
                                                    <MenuItem value="Flat">Flat</MenuItem>
                                                    <MenuItem value="Chemically Treated">Chemically Treated</MenuItem>
                                                    <MenuItem value="Very Dry">Very Dry</MenuItem>
                                                    <MenuItem value="Fine">Fine</MenuItem>
                                                    <MenuItem value="Multicultural">Multicultural</MenuItem>
                                                    <MenuItem value="Split Ends">Split Ends</MenuItem>
                                                    <MenuItem value="Straight">Straight</MenuItem>
                                                </TextField>
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""
                }
                {
                    lifestyleField ? (
                        <>
                            <div className='row' style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name="lifestyle"
                                    rules={{
                                        required: "this field is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">Lifestyle</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    id="lifestyle-select"
                                                    variant="outlined"
                                                    select
                                                    style={{ width: "100%" }}
                                                    placeholder="Mass Beauty,Premium Beauty"
                                                    {...field}
                                                    error={Boolean(errors.lifestyle)}

                                                >
                                                    <MenuItem value="">-Select-</MenuItem>
                                                    <MenuItem value="Premium-Beauty">Premium Beauty</MenuItem>
                                                    <MenuItem value="Mass-Beauty">Mass Beauty</MenuItem>
                                                </TextField>
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                        </>) : ""

                }
            </div>
           <BookingDate/>
        </>
    )
}

export default ProductDetails