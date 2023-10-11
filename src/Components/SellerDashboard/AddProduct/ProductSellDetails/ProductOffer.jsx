import React, { useState, useEffect } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import {
    TextField,
    Button,
} from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Pattern } from '@mui/icons-material';
import { useSelector } from 'react-redux';

const ProductOffer = () => {
    const [formComponents1, setFormComponent1] = useState(false)
    const [formComponents2, setFormComponent2] = useState(false)
    const [formComponents3, setFormComponent3] = useState(false)
    const [formComponents4, setFormComponent4] = useState(false)
    const [formComponents5, setFormComponent5] = useState(false)
    const [formComponents6, setFormComponent6] = useState(false)
    const [formComponents7, setFormComponent7] = useState(false)
    const [formComponents8, setFormComponent8] = useState(false)

    const { control, formState: { errors } } = useFormContext()
    const [showShipSuggest, setshowShipSuggest] = useState('');
    const handleChange = (event) => {
        setshowShipSuggest(event.target.value);
    }


    //formComponents1 => HSN code, Maximum Retail Price,Seller SKU,Your Price,List Price,Quantity,Item Condition,Country/Region Of Origin,Fulfillment Channel,Shipping Weight
    //formComponents2 => Seller SKU,Your Price,Quantity,Item Condition,Country/Region Of Origin,HSN code,Maximum Retail Price,Fulfillment Channel
    //formComponents3 => Seller SKU,Your price,List Price,Quantity,Condition Type,Country/Region Of Origin,HSN Code,Maximum Retail Price,Fulfillment Channel
    //formComponents4 => Country/Region Of Origin,Your Price,Quantity,Condition,HSN code,Maximum Retail Price,Item Dimensions
    //formComponents5 => Seller SKU,Your Price,List Price,Quantity,Item Condition,Country/Region Of Origin, Maximum Retail Price,Fulfillment Channel,Item Dimensions
    //formComponents6 => Seller SKU,Your Price,List Price,Quantity,Item Condition,Country/Region Of Origin,HSN Code, Maximum Retail Price,Fulfillment Channel,Item Dimensions
    //formComponents7 => List Price,Country/Region Of Origin,HSN Code,Maximum Retail Price,Fulfillment Channel
    //formComponents8 =>  Seller SKU,Your Price,Quantity,Item Condition,Country/Region Of Origin,HSN Code, Maximum Retail Price,Fulfillment Channel,Item Dimensions

    const Category = useSelector((state) => state.addProductForm.selectedCategoryId);
    let SetselectedCategoryId = Category ? Category.categoryId : ""

    if (SetselectedCategoryId !== '') {
        localStorage.setItem('selectedCategoryId', SetselectedCategoryId);
    }
    let selectedCategoryId = localStorage.getItem('selectedCategoryId')


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
            setFormComponent1(true)
        }
        else if (selectedCategoryId === "10279697031") {
            // carAirPurifier
            setFormComponent1(true)
        }
        else if (selectedCategoryId === "9290352031") {
            // charcoalAirPuri
            setFormComponent1(true)
        }
        else if (selectedCategoryId === "9290353031") {
            // electroAirPuri
            setFormComponent1(true)
        }
        else if (selectedCategoryId === "9290354031") {
            // hepaAirPuri
            setFormComponent1(true)
        }
        else if (selectedCategoryId === "5403404031") {
            // otherAirPuri
            setFormComponent1(true)
        }
        else if (selectedCategoryId === "9290355031") {
            // portableAirPuri
            setFormComponent1(true)
        }
        else if (selectedCategoryId === "9290356031") {
            // ulpaAirPuri
            setFormComponent1(true)
        }

        //Dehumidifiers category list item
        if (selectedCategoryId === "5403405031") {
            // otherDehumidifiers
            setFormComponent2(true)
        }

        //Deodorisers category list item
        if (selectedCategoryId === "51396498031") {
            // otherDeodorisers
            setFormComponent1(true)
        }

        //Fans category list item
        if (selectedCategoryId === "51396515031") {
            // blowerFans
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "51396510031") {
            // boxFans
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "4369221031") {
            // ceilingFans
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "51396517031") {
            // clipFans
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "51396508031") {
            // drumFans
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "8641216031") {
            // exhaustFans
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "51396512031") {
            // floorFans
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "2083427031") {
            // otherFans
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "4369223031") {
            // pedestalFans
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "51396514031") {
            // personalFans
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "4369222031") {
            // tableFans
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "4369224031") {
            // towerFans
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "51396519031") {
            // vortexActionFans
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "51396521031") {
            // wallMountedFans
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "51396507031") {
            // windowFans
            setFormComponent3(true)
        }


        //Humidifier category list item
        if (selectedCategoryId === "5403407031") {
            // otherHumidifiers
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "51396529031") {
            // singleRoomHumidifiers
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "51396531031") {
            // wholeHouseHumidifiers
            setFormComponent2(true)
        }

        //Other(Heating & Cooling) category list item
        if (selectedCategoryId === "2083423031") {
            //Other(Heating & Cooling)
            setFormComponent3(true)
        }

        // Parts & Accessories category list item
        if (selectedCategoryId === "5403409031") {
            // airPuriPartNAccess
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "5403413031") {
            // dehumidPartNAccess
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "23034522031") {
            // evaCoolerPartNAccess
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "5403417031") {
            // fanPartNAccess
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "5403422031") {
            // heaterPartNAccess
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "5403423031") {
            // humidiPartNAccess
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "5403408031") {
            // otherPartNAccess
            setFormComponent3(true)
        }


        //Room Heater category list item
        if (selectedCategoryId === "8641221031") {
            // electricHeaters
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "8641222031") {
            // fanHeaters
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "8641223031") {
            // halogenHeaters
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "8641220031") {
            // heatConvertors
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "51396527031") {
            // keroseneSpaceHeaters
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "51396523031") {
            // naturalgasSpaceHeaters
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "2083424031") {
            // otherRoomHeaters
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "51396525031") {
            // propaneSpaceHeaters
            setFormComponent3(true)
        }

        //Water Heaters & Geysers category list item
        if (selectedCategoryId === "4375455031") {
            // immersionRods
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "4375456031") {
            // instantWaterHeaters
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "4375457031") {
            // storageWaterHeaters
            setFormComponent3(true)
        }

        // Kitchen & Home Appliances
        // Coffee, Tea & Espresso
        // Coffee Grinders
        // Electric Grinder
        if (selectedCategoryId === "51397085031") {
            // "Burr Grinders"
            setFormComponent6(true)
        }
        else if (selectedCategoryId === "51397081031") {
            // "Cone Grinders"
            setFormComponent6(true)
        }
        else if (selectedCategoryId === "51397083031") {
            // Electric Grinders
            setFormComponent6(true)
        }
        else if (selectedCategoryId === "1379975031") {
            // "Other (Electric Grinders)"
            setFormComponent6(true)
        }

        // Manual Grinder
        if (selectedCategoryId === "1379976031") {
            // "Manual Grinder"
            setFormComponent6(true)
        }

        // "Other (Coffee Grinders)"
        if (selectedCategoryId === "1379974031") {
            // "Other (Coffee Grinders)"
            formComponents3(true)
        }

        // "Coffee Capsule Holders"
        if (selectedCategoryId === "27961558031") {
            //"Capsule Baskets"
            setFormComponent7(true)
        }
        else if (selectedCategoryId === "27961560031") {
            //"Capsule Drawers"
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "27961559031") {
            //"Capsule Stands"
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "27345416031") {
            //"Other (Coffee Capsule Holders)"
            setFormComponent2(true)
        }

        // "Coffee Filters"
        if (selectedCategoryId === "27345418031") {
            //"Disposable Coffee Filters"
            setFormComponent6(true)
        }
        else if (selectedCategoryId === "1379962031") {
            //"Other (Coffee Filters)"
            setFormComponent6(true)
        }
        else if (selectedCategoryId === "27345419031") {
            //"Permanent Filters"
            setFormComponent6(true)
        }
        else if (selectedCategoryId === "27345417031") {
            //"Reusable Filters"
            setFormComponent6(true)
        }

        // "Drip Trays"
        if (selectedCategoryId === "1379963031") {
            //""Other (Drip Trays)"
            setFormComponent3(true)
        }

        // "Measuring Spoons"
        if (selectedCategoryId === "1379964031") {
            // "Measuring Spoons"
            setFormComponent6(true)
        }

        // "Other (Coffee Maker Accessories)"
        if (selectedCategoryId === "1379961031") {
            // "Other (Coffee Maker Accessories)"
            formComponents3(true)
        }

        // "Pod Holders"
        if (selectedCategoryId === "1379966031") {
            // "Pod Holders"
            formComponents3(true)
        }
        else if (selectedCategoryId === "1379972031") {
            // "Tea Filters"
            setFormComponent6(true)
        }
        else if (selectedCategoryId === "1379973031") {
            // "Water Tanks"
            formComponents3(true)
        }


        // Coffee Makers
        if (selectedCategoryId === "51396613031") {
            // Coffee Makers
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1379977031") {
            // Coffee Percolators
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1379980031") {
            // Coffee Presses
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1379982031") {
            // Drip Coffee Machines
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "51396615031") {
            // Iced Tea Pitchers
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1379960031") {
            // Other (Coffee, Tea & Espresso)
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1379985031") {
            // Stovetop Espresso Pots
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1379986031") {
            // Super-Automatic Coffee Machines
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1379988031") {
            // Tea Presses
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "51396617031") {
            // Turkish Coffeepots
            setFormComponent3(true)
        }

        // Espresso Machines
        if (selectedCategoryId === "51396864031") {
            // Manual Espresso Machines
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1379983031") {
            // Other (Espresso Machines)
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "51396866031") {
            //Semi-Automatic Espresso Machines
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "51396862031") {
            // Steam Espresso Machines
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "51396867031") {
            // Super-Automatic Espresso Machines
            setFormComponent3(true)
        }


        // Kettles & Tea Machines
        if (selectedCategoryId === "51396869031") {
            // Coffee Drip Kettles
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "22938888031") {
            // Electric Kettles
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1379987031") {
            // Hot Tea Machines
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "22938887031") {
            // Hot Water Dispensers
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "22938886031") {
            // Iced Tea Machines
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "22938883031") {
            // Other (Kettles & Tea Machines)
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "22938885031") {
            // Stovetop Tea Kettles
            setFormComponent3(true)
        }


        // Milk Frothers
        if (selectedCategoryId === "51396874031") {
            // Automatic Milk Frothers
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "51396872031") {
            // Handheld Milk Frothers
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "51396875031") {
            // Manual Milk Frothers
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1379965031") {
            // Other (Milk Frothers)
            setFormComponent3(true)
        }

        // Inverters & Sets
        if (selectedCategoryId === "32075770031") {
            // Batteries
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "32075768031") {
            // Inverter & Battery Sets
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "11870706031") {
            // Inverters
            setFormComponent6(true)
        }
        else if (selectedCategoryId === "32075766031") {
            // Other (Inverters & Sets)
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "32075769031") {
            // Trolleys
            setFormComponent3(true)
        }


        // Other (Kitchen & Home Appliances)
        if (selectedCategoryId === "4951860031") {
            // Other (Kitchen & Home Appliances)
            setFormComponent3(true)
        }

        // Sewing Machines & Accessories
        if (selectedCategoryId === "10543793031") {
            // Attachments
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "10543794031") {
            // Carrying Cases
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "51396611031") {
            // Oil
            setFormComponent6(true)
        }
        else if (selectedCategoryId === "10543792031") {
            // Other (Sewing Machines & Accessories)
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "10543795031") {
            // Parts
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "10543796031") {
            // Presser Feet
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "2083428031") {
            // Sewing & Embroidery Machines
        }


        // Small Kitchen Appliances
        if (selectedCategoryId === "1380046031") {
            // "Beer Tenders"
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380047031") {
            //"Bread Makers"
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "1380049031") {
            // "Chocolate Funtains"
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380048031") {
            //"Cotton Candy Makers"
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380052031") {
            //"Crepe Makers"
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "26953502031") {
            //"Deep Fat Fryers"
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "26953501031") {
            //Air Fryers
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "51396890031") {
            //"Digital Scales"
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "51396888031") {
            //"Mechanical Scales"
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380054031") {
            //"Other (Digital Kitchen Scales)"
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380055031") {
            //"Egg Boilers"
            setFormComponent6(true)
        }
        else if (selectedCategoryId === "1380056031") {
            //"Electric Can Openers"
            setFormComponent6(true)
        }
        else if (selectedCategoryId === "1380058031") {
            //"Electric Cheese Graters"
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380051031") {
            //"Electric Grills"
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "1380059031") {
            //"Electric Knife Sharpeners"
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "1380060031") {
            //"Electric Skillets"
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "1380061031") {
            //"Electric Slicers"
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380062031") {
            //"Electric Steamers"
            setFormComponent6(true)
        }
        else if (selectedCategoryId === "1380063031") {
            //"Electric Woks"
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "51396886031") {
            //"Full Size Food Processors"
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380064031") {
            //"Other (Food Processors)"
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380065031") {
            //"Hand Blenders"
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380066031") {
            //"Hand Mixers"
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380067031") {
            //"Hot Dog Machines"
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380069031") {
            //"Ice Cream Makers"
            setFormComponent6(true)
        }
        else if (selectedCategoryId === "1380068031") {
            //"Induction Cooktop"
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "2088589031") {
            //"Juicer Mixer Grinders"
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "11366947031") {
            // Centrifugal Juicers
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "11366946031") {
            // Electric Citrus Juicers
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380070031") {
            // Other (Juicers)
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380070031") {
            // Dual Auger Masticating Juicers
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "14155257031") {
            //Other (Cold Press Juicers)
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "14155258031") {
            // Single Auger Masticating Juicers
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "22938888031") {
            //"Electric Kettles"
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1379987031") {
            //Hot Tea Machines
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "22938887031") {
            //Hot Water Boilers & Dispensers
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "22938886031") {
            //Iced Tea Machines
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1379984031") {
            //Kettle & Toaster Sets
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "22938884031") {
            //Other (Kettles & Hot Water Dispensers)
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "51396881031") {
            //Electric Spice Grinders
            setFormComponent8(true)
        }
        else if (selectedCategoryId === "51396879031") {
            //Grain Mills
            setFormComponent6(true)
        }
        else if (selectedCategoryId === "1380012031") {
            //Herb & Spice Mills
            setFormComponent8(true)
        }
        else if (selectedCategoryId === "27320744031") {
            //Other (Mills & Grinders)
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "27320745031") {
            //Wet Grinders
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380050031") {
            //"Mini Food Processors & Choppers"
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "4375446031") {
            //"Mixer Grinders"
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380045031") {
            //"Other (Small Kitchen Appliances)"
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380073031") {
            //"Oven Toaster Grills"
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380074031") {
            //"Pasta Machines"
            setFormComponent8(true)
        }
        else if (selectedCategoryId === "1380081031") {
            //"Pop-up Toasters"
            setFormComponent8(true)
        }
        else if (selectedCategoryId === "1380075031") {
            //"Popcorn Makers"
            setFormComponent8(true)
        }
        else if (selectedCategoryId === "1380077031") {
            //"Rice & Pasta Cookers"
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "11366949031") {
            //Other (Roti Makers)
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "51396883031") {
            //Quesadilla Makers
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "1380078031") {
            //Sandwich Makers
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "1380079031") {
            //"Slow Cookers"
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "10543776031") {
            //Bread Machine Accessories
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "10543777031") {
            //Bread Machine Replacement Parts
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "10543778031") {
            //Countertop Blender Accessories
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "10543779031") {
            //Countertop Blender Replacement Parts
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "10543780031") {
            //Food Processor Accessories
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "10543781031") {
            //Food Processor Replacement Parts
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "10543782031") {
            //Hand Blender Accessories
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "10543783031") {
            //Hand Blender Replacement Parts
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "10543784031") {
            //Hand Mixer Accessories
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "10543785031") {
            //Hand Mixer Replacement Parts
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "10543787031") {
            //Microwave Oven Replacement Parts
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "10543775031") {
            //Other (Small Appliance Parts & Accessories)
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "10543788031") {
            //Soda Maker Accessories
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "10543789031") {
            //Stand Mixer Accessories
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "10543790031") {
            //Stand Mixer Replacement Parts
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "10543791031") {
            //Vacuum Sealer Accessories
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "11366948031") {
            //"Soup Kettles & Makers"
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380080031") {
            //"Stand Mixers"
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380076031") {
            //"Tandoors & Grills"
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "1380082031") {
            //"Vacuum Sealers"
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "1380083031") {
            //"Waffle Makers & Irons"
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "1380084031") {
            //"Yogurt Makers"
            setFormComponent3(true)
        }


        // Vacuum, Cleaning & Ironing
        // Irons, Steamers & Accessories
        //1. Ironing Accessories
        if (selectedCategoryId === "1380568031") {
            // Felt Pads
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380569031") {
            // Iron Holders
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380571031") {
            // Ironing Board Covers
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "51396836031") {
            // Ironing Chairs
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380550031") {
            // Laundry Baskets
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "1380567031") {
            //Other (Ironing Accessories
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380570031") {
            // Spray Bottles
            setFormComponent3(true)
        }

        //2. Irons
        if (selectedCategoryId === "1380577031") {
            // Dry Irons
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380574031") {
            // Other (Irons)
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380579031") {
            // Steam Generator Iron
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380578031") {
            // Steam Irons
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380576031") {
            // Travel Irons
            setFormComponent3(true)
        }
        // Vacuum, Cleaning & Ironing
        // Irons, Steamers & Accessories
        if (selectedCategoryId === "1380580031") {
            // Lint Shavers
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "1380566031") {
            //Other (Irons, Steamers & Accessories)
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380581031") {
            // Steam Generator Accessories
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380584031") {
            // Steam Presses
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380583031") {
            // Travel Steam Generators
            setFormComponent6(true)
        }
        else if (selectedCategoryId === "51396877031") {
            // Vertical Steamers
            setFormComponent6(true)
        }

        // Vacuum, Cleaning & Ironing
        if (selectedCategoryId === "1380565031") {
            //"Other (Vacuum, Cleaning & Ironing)"
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "2083413031") {
            //"Pressure Washers, Steam & Window Cleaners"
            setFormComponent3(true)
        }

        // Vacuum, Cleaning & Ironing
        // Vacuums & Floor Care
        if (selectedCategoryId === "1380588031") {
            // Carpet Sweepers
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380589031") {
            // Floor Polishers
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380585031") {
            // Other (Vacuums & Floor Care)
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "5274532031") {
            // Steam Cleaners
            setFormComponent8(true)

        }

        // Vacuum, Cleaning & Ironing
        // Vacuums & Floor Care
        // Vacuum Accessories
        if (selectedCategoryId === "1380595031") {
            // Vacuum Belts
            setFormComponent6(true)
        }

        else if (selectedCategoryId === "1380603031") {
            // Vacuum Hoses
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "1380604031") {
            // Vacuum Lamp Bulbs
            setFormComponent3(true)
        }

        else if (selectedCategoryId === "51397088031") {
            // Vacuum Tubes
            setFormComponent2(true)
        }

        // Vacuum, Cleaning & Ironing
        // Vacuums & Floor Care
        // Vacuum
        if (selectedCategoryId === "1380608031") {
            // Canister Vacuums
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "5274529031") {
            // Central Vacuum Systems
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "51397086031") {
            // Futon & Mattress Vacuums
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380609031") {
            // Handheld Vacuums
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380607031") {
            // Other (Vacuums)
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380610031") {
            // Robotic Vacuums
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380611031") {
            //Stick Vacuums & Electric Brooms
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380612031") {
            //Upright Vacuums
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "5274530031") {
            //Wet-Dry Vacuums
            setFormComponent3(true)
        }

        // Water Purifiers & Accessories
        if (selectedCategoryId === "1380261031") {
            // "Water Cartridges"
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380262031") {
            //"Water Filters & Purifiers"
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380260031") {
            //"Water Purifier Accessories"
            setFormComponent3(true)
        }

        // Appliances
        // Large Appliances

        if (selectedCategoryId === "1380263031") {
            // Other (Large Appliances)
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "5142306031") {
            // Range Cooktops
            setFormComponent2(true)
        }

        // Appliances
        // Large Appliances
        // Parts & Accessories
        if (selectedCategoryId === "51396590031") {
            //Gas Hoses
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "1380274031") {
            //Other (Parts & Accessories)
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "51396592031") {
            //Power Cords
            setFormComponent3(true)
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
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "14387572031") {
            //Air Cooler Covers
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "14387568031") {
            //Other (Appliance Slipcovers)
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "14387569031") {
            //Washing Machine Covers
            setFormComponent3(true)
        }

        // Appliances
        // Large Appliances
        // Parts & Accessories
        // Inverter Accessories
        if (selectedCategoryId === "32075770031") {
            //Batteries
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "32075767031") {
            //Other (Inverter Accessories)
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "32075769031") {
            //Trolleys
            setFormComponent3(true)
        }

        // Appliances
        // Large Appliances
        // Parts & Accessories
        // Microwave Parts & Accessories
        if (selectedCategoryId === "1380312031") {
            //Filters
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380311031") {
            //Other (Microwave Parts & Accessories)
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380313031") {
            //Trim Kits
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380314031") {
            //Turntables
            setFormComponent3(true)
        }

        // Appliances
        // Large Appliances
        // Parts & Accessories
        // Oven Parts & Accessories
        if (selectedCategoryId === "1380315031") {
            //Other (Oven Parts & Accessories)
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "51239718031") {
            //Oven Lighting
            setFormComponent3(true)
        }

        // Appliances
        // Large Appliances
        // Parts & Accessories
        // Range Hood Parts & Accessories
        if (selectedCategoryId === "1380317031") {
            //Blowers
            setFormComponent3(true)
        }

        else if (selectedCategoryId === "1380316031") {
            //Other (Range Hood Parts & Accessories)
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "51239714031") {
            //Range Hood Lighting
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380320031") {
            //Screens
            setFormComponent3(true)
        }

        // Appliances
        // Large Appliances
        // Parts & Accessories
        // Range Parts & Accessories
        if (selectedCategoryId === "1380322031") {
            //Backguards
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380323031") {
            //Built-in Thermometers
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380324031") {
            //Built-in Timers
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "1380325031") {
            //Cooktop Burner Rings
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380326031") {
            //Cooktop Burner
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380327031") {
            //Drip Pans
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380328031") {
            //Exhaust Fans
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380321031") {
            //Other (Range Parts & Accessories)
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380330031") {
            //Oven Heating Elements
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380333031") {
            //Paneling
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380334031") {
            //Plug Receptacles
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "51396845031") {
            //Range Power Cords
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380336031") {
            //Trim Kits
            setFormComponent3(true)
        }

        // Appliances
        // Large Appliances
        // Parts & Accessories
        // Refrigerator Parts & Accessories
        if (selectedCategoryId === "1380341031") {
            //Handles
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "51396840031") {
            //Hoses
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "1380342031") {
            //Ice Makers
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380343031") {
            //Motors
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "51396843031") {
            //Power Cords
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "51396838031") {
            //Refrigerator Lighting
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "51396841031") {
            //Refrigerator Thermometers
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380348031") {
            //Water Filters
            setFormComponent3(true)
        }

        // Appliances
        // Large Appliances
        // Parts & Accessories
        // Washer Parts & Accessories
        if (selectedCategoryId === "1380353031") {
            //Clamps
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "1380354031") {
            //Detergent Trays
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380355031") {
            //Doors
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380356031") {
            //Drain Pumps
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "1380357031") {
            //Floor Trays
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380358031") {
            //Hoses
            setFormComponent2(true)
        }
        else if (selectedCategoryId === "1380359031") {
            //Lint Filters
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380360031") {
            //Motors
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380352031") {
            //Other (Washer Parts & Accessories)
            setFormComponent3(true)
        }

        // Appliances
        // Large Appliances
        // Washing Machines & Dryers
        if (selectedCategoryId === "1380369031") {
            //Other (Washing Machines & Dryers)
            setFormComponent3(true)
        }
        else if (selectedCategoryId === "1380372031") {
            //Stacked Washers & Dryers
            setFormComponent3(true)
        }
    }, [selectedCategoryId])
    return (
        <>
            {
                formComponents4 && (
                    <>
                        {/* Country/Region Of Origin,Your Price,Quantity,Condition,HSN code,Maximum Retail Price,Item Dimensions, */}
                        <div className='row'>
                            <Controller
                                control={control}
                                name='productSellCountry'
                                rules={{
                                    required: "country name is required"
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className='labelbold me-2'>Country/Region Of Origin</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                id="productSellCountry"
                                                variant="outlined"
                                                select
                                                style={{ width: "100%" }}
                                                {...field}
                                                error={Boolean(errors.productSellCountry)}
                                            >
                                                <MenuItem value="India">India</MenuItem>
                                                <MenuItem value="China">China</MenuItem>

                                            </TextField>
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellPrice'
                                rules={{
                                    required: "productSellPrice is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Your Price</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                disabled
                                                id="productSellPrice"
                                                variant="outlined"
                                                value="INR"
                                                style={{ width: "10%" }}
                                            />
                                            <TextField
                                                placeholder="Ex:50.00"
                                                id="productSellPrice"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "90%" }}
                                                error={Boolean(errors.productSellPrice)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellQuantity'
                                rules={{
                                    required: "productSellQuantity is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Quantity</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="200"
                                                id="productSellPrice"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.productSellQuantity)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellCondition'
                                rules={{
                                    required: "productSellCondition is required"
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className='labelbold me-2'>Condition</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                id="productSellCountry"
                                                variant="outlined"
                                                select
                                                style={{ width: "100%" }}
                                                {...field}
                                                error={Boolean(errors.productSellCondition)}
                                            >
                                                <MenuItem value="">-Select-</MenuItem>
                                                <MenuItem value="New">New</MenuItem>

                                            </TextField>
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productHSNcode'
                                rules={{
                                    required: "productHSNcode is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">HSN code</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="610510,61051048"
                                                id="productHSNcode"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.productHSNcode)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellMaxRetailPrice'
                                rules={{
                                    required: "productSellMaxRetailPrice is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2"> Maximum Retail Price</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                disabled
                                                id="productSellMaxRetailPrice"
                                                variant="outlined"
                                                value="INR"
                                                style={{ width: "10%" }}

                                            />
                                            <TextField
                                                placeholder="Ex:50.00"
                                                id="productSellMaxRetailPrice"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "90%" }}
                                                error={Boolean(errors.productSellMaxRetailPrice)}
                                            />
                                        </div>

                                    </>
                                )}
                            />

                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                <label className='labelbold'>Item Dimensions</label>
                            </div>

                            <div className="col-8 col-sm-7 col-lg-6">
                                <div>
                                    <div className='row align-items-end'>
                                        <Controller
                                            control={control}
                                            name='productSellLength'
                                            rules={{
                                                required: "productSellLength is required",
                                                pattern: {
                                                    value: new RegExp('^[0-9]+$'),
                                                    message: "not a valid formate"
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className='col-12 col-sm-6'>
                                                        <label className="labelbold me-2">Item Length</label>
                                                        <TextField
                                                            placeholder="12"
                                                            id="productSellLength"
                                                            variant="outlined"
                                                            {...field}
                                                            style={{ width: "100%" }}
                                                            error={Boolean(errors.productSellLength)}
                                                        />
                                                    </div>
                                                </>
                                            )}
                                        />
                                        <Controller
                                            control={control}
                                            name='productSellLengthUnit'
                                            rules={{
                                                required: "productSellLengthUnit is required"
                                            }}
                                            render={({ field }) => (
                                                <>

                                                    <div className='col-12 col-sm-6'>
                                                        <TextField
                                                            id="productSellLengthUnit"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            {...field}
                                                            error={Boolean(errors.productSellLengthUnit)}
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
                                                            <MenuItem value="Hundredths-Inchese">Hundredths-Inchese</MenuItem>
                                                            <MenuItem value="Nanometer">Nanometer</MenuItem>
                                                            <MenuItem value="µm">µm</MenuItem>
                                                            <MenuItem value="Kilometer">Kilometer</MenuItem>


                                                        </TextField>
                                                    </div>
                                                </>
                                            )}

                                        />

                                    </div>
                                    <div className='row align-items-end'>
                                        <Controller
                                            control={control}
                                            name='productSellWidth'
                                            rules={{
                                                required: "productSellWidth is required",
                                                pattern: {
                                                    value: new RegExp('^[0-9]+$'),
                                                    message: "not a valid formate"
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className='col-12 col-sm-6'>
                                                        <label className="labelbold me-2">Item Width</label>
                                                        <TextField
                                                            placeholder="12"
                                                            id="productSellWidth"
                                                            variant="outlined"
                                                            {...field}
                                                            style={{ width: "100%" }}
                                                            error={Boolean(errors.productSellWidth)}
                                                        />
                                                    </div>
                                                </>
                                            )}
                                        />
                                        <Controller
                                            control={control}
                                            name='productSellWidthUnit'
                                            rules={{
                                                required: "productSellWidthUnit is required"
                                            }}
                                            render={({ field }) => (
                                                <>

                                                    <div className='col-12 col-sm-6'>
                                                        <TextField
                                                            id="productSellWidthUnit"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            {...field}
                                                            error={Boolean(errors.productSellWidthUnit)}
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
                                                            <MenuItem value="Hundredths-Inchese">Hundredths-Inchese</MenuItem>
                                                            <MenuItem value="Nanometer">Nanometer</MenuItem>
                                                            <MenuItem value="µm">µm</MenuItem>
                                                            <MenuItem value="Kilometer">Kilometer</MenuItem>


                                                        </TextField>
                                                    </div>
                                                </>
                                            )}

                                        />
                                    </div>
                                    <div className='row align-items-end'>
                                        <Controller
                                            control={control}
                                            name='productSellHeight'
                                            rules={{
                                                required: "productSellHeight is required",
                                                pattern: {
                                                    value: new RegExp('^[0-9]+$'),
                                                    message: "not a valid formate"
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className='col-12 col-sm-6'>
                                                        <label className="labelbold me-2">Item Height</label>
                                                        <TextField
                                                            placeholder="12"
                                                            id="productSellHeight"
                                                            variant="outlined"
                                                            {...field}
                                                            style={{ width: "100%" }}
                                                            error={Boolean(errors.productSellHeight)}
                                                        />
                                                    </div>
                                                </>
                                            )}
                                        />
                                        <Controller
                                            control={control}
                                            name='productSellHeightUnit'
                                            rules={{
                                                required: "productSellHeightUnit is required"
                                            }}
                                            render={({ field }) => (
                                                <>

                                                    <div className='col-12 col-sm-6'>
                                                        <TextField
                                                            id="productSellHeightUnit"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            {...field}
                                                            error={Boolean(errors.productSellHeightUnit)}
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
                                                            <MenuItem value="Hundredths-Inchese">Hundredths-Inchese</MenuItem>
                                                            <MenuItem value="Nanometer">Nanometer</MenuItem>
                                                            <MenuItem value="µm">µm</MenuItem>
                                                            <MenuItem value="Kilometer">Kilometer</MenuItem>
                                                        </TextField>
                                                    </div>
                                                </>
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
            {
                (formComponents1) && (
                    <>
                        {/* HSN code, Maximum Retail Price,Seller SKU,Your Price,List Price,Quantity,Item Condition,Country/Region Of Origin,Fulfillment Channel,Shipping Weight */}
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productHSNcode'
                                rules={{
                                    required: "productHSNcode is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">HSN code</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="610510,61051048"
                                                id="productHSNcode"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.productHSNcode)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellMaxRetailPrice'
                                rules={{
                                    required: "productSellMaxRetailPrice is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2"> Maximum Retail Price</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                disabled
                                                id="productSellMaxRetailPrice"
                                                variant="outlined"
                                                value="INR"
                                                style={{ width: "10%" }}

                                            />
                                            <TextField
                                                placeholder="Ex:50.00"
                                                id="productSellMaxRetailPrice"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "90%" }}
                                                error={Boolean(errors.productSellMaxRetailPrice)}
                                            />
                                        </div>

                                    </>
                                )}
                            />

                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productsellerSKU'
                                rules={{
                                    required: "productsellerSKU is required",

                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Seller SKU</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="101MyCollectible1"
                                                id="productsellerSKU"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.productsellerSKU)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellPrice'
                                rules={{
                                    required: "productSellPrice is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Your Price</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                disabled
                                                id="productSellPrice"
                                                variant="outlined"
                                                value="INR"
                                                style={{ width: "10%" }}
                                            />
                                            <TextField
                                                placeholder="Ex:50.00"
                                                id="productSellPrice"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "90%" }}
                                                error={Boolean(errors.productSellPrice)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productListPrice'
                                rules={{
                                    required: "productListPrice is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">List Price</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                disabled
                                                id="productListPrice"
                                                variant="outlined"
                                                value="INR"
                                                style={{ width: "10%" }}
                                            />
                                            <TextField
                                                placeholder="Ex:50.00"
                                                id="productListPrice"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "90%" }}
                                                error={Boolean(errors.productListPrice)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellQuantity'
                                rules={{
                                    required: "productSellQuantity is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Quantity</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="200"
                                                id="productSellPrice"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.productSellQuantity)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellCondition'
                                rules={{
                                    required: "productSellCondition is required"
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className='labelbold me-2'>Item Condition</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                id="productSellCountry"
                                                variant="outlined"
                                                select
                                                style={{ width: "100%" }}
                                                {...field}
                                                error={Boolean(errors.productSellCondition)}
                                            >
                                                <MenuItem value="">-Select-</MenuItem>
                                                <MenuItem value="New">New</MenuItem>

                                            </TextField>
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row'>
                            <Controller
                                control={control}
                                name='productSellCountry'
                                rules={{
                                    required: "country name is required"
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className='labelbold me-2'>Country/Region Of Origin</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                id="productSellCountry"
                                                variant="outlined"
                                                select
                                                style={{ width: "100%" }}
                                                {...field}
                                                error={Boolean(errors.productSellCountry)}
                                            >
                                                <MenuItem value="India">India</MenuItem>
                                                <MenuItem value="China">China</MenuItem>

                                            </TextField>
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name="productFulfillmentChannel"
                                rules={{
                                    required: "this field is required",

                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold  mb-1">Fulfillment Channel</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">


                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                id="productFulfillmentChannel"
                                                name="row-radio-buttons-group"
                                                {...field}
                                                error={Boolean(errors.productFulfillmentChannel)}
                                                style={{ width: "100%" }}
                                            >
                                                <FormControlLabel
                                                    value="Merchant Fulfilled"
                                                    control={<Radio />}
                                                    label="I will ship this item myself (Self Ship) or I will pack this item and
                                                           Amazon will pick up & ship (Easy Ship) (Merchant Fulfilled)"
                                                    checked={showShipSuggest === 'Merchant Fulfilled'}
                                                    onChange={handleChange}
                                                    style={{ padding: "5px" }}
                                                />
                                                <FormControlLabel
                                                    value="Fulfilled by Amazon"
                                                    control={<Radio />}
                                                    label="Amazon will ship and provide customer service
                                                            (Fulfilled by Amazon)"
                                                    checked={showShipSuggest === 'Fulfilled by Amazon'}
                                                    onChange={handleChange}
                                                    style={{ padding: "5px" }}
                                                />

                                            </RadioGroup>
                                            <div>
                                                {
                                                    showShipSuggest === 'Fulfilled by Amazon' ? <label> You have chosen to have Amazon fulfill orders for this item. Your item will be available for sale, when Amazon receives it. Fulfillment by Amazon fees will apply.</label> : ""
                                                }

                                            </div>

                                        </div>
                                    </>
                                )}
                            />
                        </div>

                        <div className='row' style={{ marginTop: "10px" }}>

                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                <label className="labelbold me-2">Shipping Weight</label>
                            </div>
                            <div className="col-8 col-sm-7 col-lg-6">
                                <div className='row'>
                                    <Controller
                                        control={control}
                                        name='productShippingWeight'
                                        rules={{
                                            required: "productShippingWeight is required",
                                            pattern: {
                                                value: new RegExp('^[0-9]+$'),
                                                message: "not a valid formate"
                                            }
                                        }}
                                        render={({ field }) => (
                                            <>

                                                <div className='col-12 col-sm-6'>
                                                    <TextField
                                                        placeholder="2.33,20.75,10000"
                                                        id="productShippingWeight"
                                                        variant="outlined"
                                                        {...field}
                                                        style={{ width: "100%" }}
                                                        error={Boolean(errors.productShippingWeight)}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    />
                                    <Controller
                                        control={control}
                                        name='productShippingWeightUnit'
                                        rules={{
                                            required: "productShippingWeightUnit is required"
                                        }}
                                        render={({ field }) => (
                                            <>
                                                <div className='col-12 col-sm-6'>
                                                    <TextField
                                                        id="productShippingWeightUnit"
                                                        variant="outlined"
                                                        select
                                                        style={{ width: "100%" }}
                                                        {...field}
                                                        error={Boolean(errors.productShippingWeightUnit)}
                                                    >
                                                        <MenuItem value="">-Select-</MenuItem>
                                                        <MenuItem value="LB">LB</MenuItem>
                                                        <MenuItem value="KG">KG</MenuItem>
                                                        <MenuItem value="GR">GR</MenuItem>
                                                        <MenuItem value="Hundredths Pounds">Hundredths Pounds</MenuItem>
                                                        <MenuItem value="MG">MG</MenuItem>
                                                        <MenuItem value="Tons">Tons</MenuItem>
                                                        <MenuItem value="OZ">OZ</MenuItem>
                                                    </TextField>
                                                </div>
                                            </>
                                        )}
                                    />
                                </div>
                            </div>
                        </div>

                    </>
                )}

            {
                (formComponents2) && (
                    <>
                        {/* Seller SKU,Your Price,Quantity,Item Condition,Country/Region Of Origin,HSN code,Maximum Retail Price,Fulfillment Channel */}
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productsellerSKU'
                                rules={{
                                    required: "productsellerSKU is required",

                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Seller SKU</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="101MyCollectible1"
                                                id="productsellerSKU"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.productsellerSKU)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellPrice'
                                rules={{
                                    required: "productSellPrice is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Your Price</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                disabled
                                                id="productSellPrice"
                                                variant="outlined"
                                                value="INR"
                                                style={{ width: "10%" }}
                                            />
                                            <TextField
                                                placeholder="Ex:50.00"
                                                id="productSellPrice"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "90%" }}
                                                error={Boolean(errors.productSellPrice)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellQuantity'
                                rules={{
                                    required: "productSellQuantity is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Quantity</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="200"
                                                id="productSellPrice"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.productSellQuantity)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellCondition'
                                rules={{
                                    required: "productSellCondition is required"
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className='labelbold me-2'>Item Condition</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                id="productSellCountry"
                                                variant="outlined"
                                                select
                                                style={{ width: "100%" }}
                                                {...field}
                                                error={Boolean(errors.productSellCondition)}
                                            >
                                                <MenuItem value="">-Select-</MenuItem>
                                                <MenuItem value="New">New</MenuItem>

                                            </TextField>
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellCountry'
                                rules={{
                                    required: "country name is required"
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className='labelbold me-2'>Country/Region Of Origin</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                id="productSellCountry"
                                                variant="outlined"
                                                select
                                                style={{ width: "100%" }}
                                                {...field}
                                                error={Boolean(errors.productSellCountry)}
                                            >
                                                <MenuItem value="India">India</MenuItem>
                                                <MenuItem value="China">China</MenuItem>

                                            </TextField>
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productHSNcode'
                                rules={{
                                    required: "productHSNcode is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">HSN code</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="610510,61051048"
                                                id="productHSNcode"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.productHSNcode)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellMaxRetailPrice'
                                rules={{
                                    required: "productSellMaxRetailPrice is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2"> Maximum Retail Price</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                disabled
                                                id="productSellMaxRetailPrice"
                                                variant="outlined"
                                                value="INR"
                                                style={{ width: "10%" }}

                                            />
                                            <TextField
                                                placeholder="Ex:50.00"
                                                id="productSellMaxRetailPrice"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "90%" }}
                                                error={Boolean(errors.productSellMaxRetailPrice)}
                                            />
                                        </div>

                                    </>
                                )}
                            />

                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name="productFulfillmentChannel"
                                rules={{
                                    required: "this field is required",

                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold  mb-1">Fulfillment Channel</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">


                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                id="productFulfillmentChannel"
                                                name="row-radio-buttons-group"
                                                {...field}
                                                error={Boolean(errors.productFulfillmentChannel)}
                                                style={{ width: "100%" }}
                                            >
                                                <FormControlLabel
                                                    value="Merchant Fulfilled"
                                                    control={<Radio />}
                                                    label="I will ship this item myself (Self Ship) or I will pack this item and
                                                           Amazon will pick up & ship (Easy Ship) (Merchant Fulfilled)"
                                                    checked={showShipSuggest === 'Merchant Fulfilled'}
                                                    onChange={handleChange}
                                                    style={{ padding: "5px" }}
                                                />
                                                <FormControlLabel
                                                    value="Fulfilled by Amazon"
                                                    control={<Radio />}
                                                    label="Amazon will ship and provide customer service
                                                            (Fulfilled by Amazon)"
                                                    checked={showShipSuggest === 'Fulfilled by Amazon'}
                                                    onChange={handleChange}
                                                    style={{ padding: "5px" }}
                                                />

                                            </RadioGroup>
                                            <div>
                                                {
                                                    showShipSuggest === 'Fulfilled by Amazon' ? <label> You have chosen to have Amazon fulfill orders for this item. Your item will be available for sale, when Amazon receives it. Fulfillment by Amazon fees will apply.</label> : ""
                                                }

                                            </div>

                                        </div>
                                    </>
                                )}
                            />
                        </div>
                    </>
                )
            }
            {
                (formComponents3) && (
                    <>
                        {/* Seller SKU,Your price,List Price,Quantity,Condition Type,Country/Region Of Origin,HSN Code,Maximum Retail Price,Fulfillment Channel */}

                        <div className='row'>
                            <Controller
                                control={control}
                                name='productsellerSKU'
                                rules={{
                                    required: "productsellerSKU is required",

                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Seller SKU</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="101MyCollectible1"
                                                id="productsellerSKU"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.productsellerSKU)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellPrice'
                                rules={{
                                    required: "productSellPrice is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Your Price</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                disabled
                                                id="productSellPrice"
                                                variant="outlined"
                                                value="INR"
                                                style={{ width: "10%" }}
                                            />
                                            <TextField
                                                placeholder="Ex:50.00"
                                                id="productSellPrice"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "90%" }}
                                                error={Boolean(errors.productSellPrice)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productListPrice'
                                rules={{
                                    required: "productListPrice is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">List Price</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                disabled
                                                id="productListPrice"
                                                variant="outlined"
                                                value="INR"
                                                style={{ width: "10%" }}
                                            />
                                            <TextField
                                                placeholder="Ex:50.00"
                                                id="productListPrice"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "90%" }}
                                                error={Boolean(errors.productListPrice)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellQuantity'
                                rules={{
                                    required: "productSellQuantity is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Quantity</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="200"
                                                id="productSellPrice"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.productSellQuantity)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellCondition'
                                rules={{
                                    required: "productSellCondition is required"
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className='labelbold me-2'>Condition</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                id="productSellCountry"
                                                variant="outlined"
                                                select
                                                style={{ width: "100%" }}
                                                {...field}
                                                error={Boolean(errors.productSellCondition)}
                                            >
                                                <MenuItem value="">-Select-</MenuItem>
                                                <MenuItem value="New">New</MenuItem>

                                            </TextField>
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellCountry'
                                rules={{
                                    required: "country name is required"
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className='labelbold me-2'>Country/Region Of Origin</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                id="productSellCountry"
                                                variant="outlined"
                                                select
                                                style={{ width: "100%" }}
                                                {...field}
                                                error={Boolean(errors.productSellCountry)}
                                            >
                                                <MenuItem value="India">India</MenuItem>
                                                <MenuItem value="China">China</MenuItem>

                                            </TextField>
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productHSNcode'
                                rules={{
                                    required: "productHSNcode is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">HSN code</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="610510,61051048"
                                                id="productHSNcode"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.productHSNcode)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellMaxRetailPrice'
                                rules={{
                                    required: "productSellMaxRetailPrice is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2"> Maximum Retail Price</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                disabled
                                                id="productSellMaxRetailPrice"
                                                variant="outlined"
                                                value="INR"
                                                style={{ width: "10%" }}

                                            />
                                            <TextField
                                                placeholder="Ex:50.00"
                                                id="productSellMaxRetailPrice"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "90%" }}
                                                error={Boolean(errors.productSellMaxRetailPrice)}
                                            />
                                        </div>

                                    </>
                                )}
                            />

                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name="productFulfillmentChannel"
                                rules={{
                                    required: "this field is required",

                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold  mb-1">Fulfillment Channel</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">


                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                id="productFulfillmentChannel"
                                                name="row-radio-buttons-group"
                                                {...field}
                                                error={Boolean(errors.productFulfillmentChannel)}
                                                style={{ width: "100%" }}
                                            >
                                                <FormControlLabel
                                                    value="Merchant Fulfilled"
                                                    control={<Radio />}
                                                    label="I will ship this item myself (Self Ship) or I will pack this item and
                                                           Amazon will pick up & ship (Easy Ship) (Merchant Fulfilled)"
                                                    checked={showShipSuggest === 'Merchant Fulfilled'}
                                                    onChange={handleChange}
                                                    style={{ padding: "5px" }}
                                                />
                                                <FormControlLabel
                                                    value="Fulfilled by Amazon"
                                                    control={<Radio />}
                                                    label="Amazon will ship and provide customer service
                                                            (Fulfilled by Amazon)"
                                                    checked={showShipSuggest === 'Fulfilled by Amazon'}
                                                    onChange={handleChange}
                                                    style={{ padding: "5px" }}
                                                />

                                            </RadioGroup>
                                            <div>
                                                {
                                                    showShipSuggest === 'Fulfilled by Amazon' ? <label> You have chosen to have Amazon fulfill orders for this item. Your item will be available for sale, when Amazon receives it. Fulfillment by Amazon fees will apply.</label> : ""
                                                }

                                            </div>

                                        </div>
                                    </>
                                )}
                            />
                        </div>
                    </>
                )
            }
            {
                formComponents5 && (
                    <>
                        {/* Seller SKU,Your Price,List Price,Quantity,Item Condition,Country/Region Of Origin,HSN Code, Maximum Retail Price,Fulfillment Channel,Item Dimensions */}
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productsellerSKU'
                                rules={{
                                    required: "productsellerSKU is required",

                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Seller SKU</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="101MyCollectible1"
                                                id="productsellerSKU"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.productsellerSKU)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellPrice'
                                rules={{
                                    required: "productSellPrice is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Your Price</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                disabled
                                                id="productSellPrice"
                                                variant="outlined"
                                                value="INR"
                                                style={{ width: "10%" }}
                                            />
                                            <TextField
                                                placeholder="Ex:50.00"
                                                id="productSellPrice"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "90%" }}
                                                error={Boolean(errors.productSellPrice)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productListPrice'
                                rules={{
                                    required: "productListPrice is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">List Price</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                disabled
                                                id="productListPrice"
                                                variant="outlined"
                                                value="INR"
                                                style={{ width: "10%" }}
                                            />
                                            <TextField
                                                placeholder="Ex:50.00"
                                                id="productListPrice"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "90%" }}
                                                error={Boolean(errors.productListPrice)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellQuantity'
                                rules={{
                                    required: "productSellQuantity is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Quantity</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="200"
                                                id="productSellPrice"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.productSellQuantity)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellCondition'
                                rules={{
                                    required: "productSellCondition is required"
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className='labelbold me-2'>Item Condition</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                id="productSellCountry"
                                                variant="outlined"
                                                select
                                                style={{ width: "100%" }}
                                                {...field}
                                                error={Boolean(errors.productSellCondition)}
                                            >
                                                <MenuItem value="">-Select-</MenuItem>
                                                <MenuItem value="New">New</MenuItem>

                                            </TextField>
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row'>
                            <Controller
                                control={control}
                                name='productSellCountry'
                                rules={{
                                    required: "country name is required"
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className='labelbold me-2'>Country/Region Of Origin</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                id="productSellCountry"
                                                variant="outlined"
                                                select
                                                style={{ width: "100%" }}
                                                {...field}
                                                error={Boolean(errors.productSellCountry)}
                                            >
                                                <MenuItem value="India">India</MenuItem>
                                                <MenuItem value="China">China</MenuItem>

                                            </TextField>
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellMaxRetailPrice'
                                rules={{
                                    required: "productSellMaxRetailPrice is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2"> Maximum Retail Price</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                disabled
                                                id="productSellMaxRetailPrice"
                                                variant="outlined"
                                                value="INR"
                                                style={{ width: "10%" }}

                                            />
                                            <TextField
                                                placeholder="Ex:50.00"
                                                id="productSellMaxRetailPrice"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "90%" }}
                                                error={Boolean(errors.productSellMaxRetailPrice)}
                                            />
                                        </div>

                                    </>
                                )}
                            />

                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name="productFulfillmentChannel"
                                rules={{
                                    required: "this field is required",

                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold  mb-1">Fulfillment Channel</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">


                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                id="productFulfillmentChannel"
                                                name="row-radio-buttons-group"
                                                {...field}
                                                error={Boolean(errors.productFulfillmentChannel)}
                                                style={{ width: "100%" }}
                                            >
                                                <FormControlLabel
                                                    value="Merchant Fulfilled"
                                                    control={<Radio />}
                                                    label="I will ship this item myself (Self Ship) or I will pack this item and
                                                           Amazon will pick up & ship (Easy Ship) (Merchant Fulfilled)"
                                                    checked={showShipSuggest === 'Merchant Fulfilled'}
                                                    onChange={handleChange}
                                                    style={{ padding: "5px" }}
                                                />
                                                <FormControlLabel
                                                    value="Fulfilled by Amazon"
                                                    control={<Radio />}
                                                    label="Amazon will ship and provide customer service
                                                            (Fulfilled by Amazon)"
                                                    checked={showShipSuggest === 'Fulfilled by Amazon'}
                                                    onChange={handleChange}
                                                    style={{ padding: "5px" }}
                                                />

                                            </RadioGroup>
                                            <div>
                                                {
                                                    showShipSuggest === 'Fulfilled by Amazon' ? <label> You have chosen to have Amazon fulfill orders for this item. Your item will be available for sale, when Amazon receives it. Fulfillment by Amazon fees will apply.</label> : ""
                                                }

                                            </div>

                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                <label className='labelbold'>Item Dimensions</label>
                            </div>

                            <div className="col-8 col-sm-7 col-lg-6">
                                <div>
                                    <div className='row align-items-end'>
                                        <Controller
                                            control={control}
                                            name='productSellLength'
                                            rules={{
                                                required: "productSellLength is required",
                                                pattern: {
                                                    value: new RegExp('^[0-9]+$'),
                                                    message: "not a valid formate"
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className='col-12 col-sm-6'>
                                                        <label className="labelbold me-2">Item Length</label>
                                                        <TextField
                                                            placeholder="12"
                                                            id="productSellLength"
                                                            variant="outlined"
                                                            {...field}
                                                            style={{ width: "100%" }}
                                                            error={Boolean(errors.productSellLength)}
                                                        />
                                                    </div>
                                                </>
                                            )}
                                        />
                                        <Controller
                                            control={control}
                                            name='productSellLengthUnit'
                                            rules={{
                                                required: "productSellLengthUnit is required"
                                            }}
                                            render={({ field }) => (
                                                <>

                                                    <div className='col-12 col-sm-6'>
                                                        <TextField
                                                            id="productSellLengthUnit"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            {...field}
                                                            error={Boolean(errors.productSellLengthUnit)}
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
                                                            <MenuItem value="Hundredths-Inchese">Hundredths-Inchese</MenuItem>
                                                            <MenuItem value="Nanometer">Nanometer</MenuItem>
                                                            <MenuItem value="µm">µm</MenuItem>
                                                            <MenuItem value="Kilometer">Kilometer</MenuItem>


                                                        </TextField>
                                                    </div>
                                                </>
                                            )}

                                        />

                                    </div>
                                    <div className='row align-items-end'>
                                        <Controller
                                            control={control}
                                            name='productSellWidth'
                                            rules={{
                                                required: "productSellWidth is required",
                                                pattern: {
                                                    value: new RegExp('^[0-9]+$'),
                                                    message: "not a valid formate"
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className='col-12 col-sm-6'>
                                                        <label className="labelbold me-2">Item Width</label>
                                                        <TextField
                                                            placeholder="12"
                                                            id="productSellWidth"
                                                            variant="outlined"
                                                            {...field}
                                                            style={{ width: "100%" }}
                                                            error={Boolean(errors.productSellWidth)}
                                                        />
                                                    </div>
                                                </>
                                            )}
                                        />
                                        <Controller
                                            control={control}
                                            name='productSellWidthUnit'
                                            rules={{
                                                required: "productSellWidthUnit is required"
                                            }}
                                            render={({ field }) => (
                                                <>

                                                    <div className='col-12 col-sm-6'>
                                                        <TextField
                                                            id="productSellWidthUnit"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            {...field}
                                                            error={Boolean(errors.productSellWidthUnit)}
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
                                                            <MenuItem value="Hundredths-Inchese">Hundredths-Inchese</MenuItem>
                                                            <MenuItem value="Nanometer">Nanometer</MenuItem>
                                                            <MenuItem value="µm">µm</MenuItem>
                                                            <MenuItem value="Kilometer">Kilometer</MenuItem>


                                                        </TextField>
                                                    </div>
                                                </>
                                            )}

                                        />
                                    </div>
                                    <div className='row align-items-end'>
                                        <Controller
                                            control={control}
                                            name='productSellHeight'
                                            rules={{
                                                required: "productSellHeight is required",
                                                pattern: {
                                                    value: new RegExp('^[0-9]+$'),
                                                    message: "not a valid formate"
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className='col-12 col-sm-6'>
                                                        <label className="labelbold me-2">Item Height</label>
                                                        <TextField
                                                            placeholder="12"
                                                            id="productSellHeight"
                                                            variant="outlined"
                                                            {...field}
                                                            style={{ width: "100%" }}
                                                            error={Boolean(errors.productSellHeight)}
                                                        />
                                                    </div>
                                                </>
                                            )}
                                        />
                                        <Controller
                                            control={control}
                                            name='productSellHeightUnit'
                                            rules={{
                                                required: "productSellHeightUnit is required"
                                            }}
                                            render={({ field }) => (
                                                <>

                                                    <div className='col-12 col-sm-6'>
                                                        <TextField
                                                            id="productSellHeightUnit"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            {...field}
                                                            error={Boolean(errors.productSellHeightUnit)}
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
                                                            <MenuItem value="Hundredths-Inchese">Hundredths-Inchese</MenuItem>
                                                            <MenuItem value="Nanometer">Nanometer</MenuItem>
                                                            <MenuItem value="µm">µm</MenuItem>
                                                            <MenuItem value="Kilometer">Kilometer</MenuItem>
                                                        </TextField>
                                                    </div>
                                                </>
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
            {
                formComponents6 && (
                    <>
                        {/* Seller SKU,Your Price,List Price,Quantity,Item Condition,Country/Region Of Origin, Maximum Retail Price,Fulfillment Channel,Item Dimensions */}
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productsellerSKU'
                                rules={{
                                    required: "productsellerSKU is required",

                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Seller SKU</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="101MyCollectible1"
                                                id="productsellerSKU"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.productsellerSKU)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellPrice'
                                rules={{
                                    required: "productSellPrice is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Your Price</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                disabled
                                                id="productSellPrice"
                                                variant="outlined"
                                                value="INR"
                                                style={{ width: "10%" }}
                                            />
                                            <TextField
                                                placeholder="Ex:50.00"
                                                id="productSellPrice"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "90%" }}
                                                error={Boolean(errors.productSellPrice)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productListPrice'
                                rules={{
                                    required: "productListPrice is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">List Price</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                disabled
                                                id="productListPrice"
                                                variant="outlined"
                                                value="INR"
                                                style={{ width: "10%" }}
                                            />
                                            <TextField
                                                placeholder="Ex:50.00"
                                                id="productListPrice"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "90%" }}
                                                error={Boolean(errors.productListPrice)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellQuantity'
                                rules={{
                                    required: "productSellQuantity is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Quantity</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="200"
                                                id="productSellPrice"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.productSellQuantity)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellCondition'
                                rules={{
                                    required: "productSellCondition is required"
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className='labelbold me-2'>Item Condition</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                id="productSellCountry"
                                                variant="outlined"
                                                select
                                                style={{ width: "100%" }}
                                                {...field}
                                                error={Boolean(errors.productSellCondition)}
                                            >
                                                <MenuItem value="">-Select-</MenuItem>
                                                <MenuItem value="New">New</MenuItem>

                                            </TextField>
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row'>
                            <Controller
                                control={control}
                                name='productSellCountry'
                                rules={{
                                    required: "country name is required"
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className='labelbold me-2'>Country/Region Of Origin</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                id="productSellCountry"
                                                variant="outlined"
                                                select
                                                style={{ width: "100%" }}
                                                {...field}
                                                error={Boolean(errors.productSellCountry)}
                                            >
                                                <MenuItem value="India">India</MenuItem>
                                                <MenuItem value="China">China</MenuItem>

                                            </TextField>
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productHSNcode'
                                rules={{
                                    required: "productHSNcode is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">HSN code</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="610510,61051048"
                                                id="productHSNcode"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.productHSNcode)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellMaxRetailPrice'
                                rules={{
                                    required: "productSellMaxRetailPrice is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2"> Maximum Retail Price</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                disabled
                                                id="productSellMaxRetailPrice"
                                                variant="outlined"
                                                value="INR"
                                                style={{ width: "10%" }}

                                            />
                                            <TextField
                                                placeholder="Ex:50.00"
                                                id="productSellMaxRetailPrice"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "90%" }}
                                                error={Boolean(errors.productSellMaxRetailPrice)}
                                            />
                                        </div>

                                    </>
                                )}
                            />

                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name="productFulfillmentChannel"
                                rules={{
                                    required: "this field is required",

                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold  mb-1">Fulfillment Channel</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">


                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                id="productFulfillmentChannel"
                                                name="row-radio-buttons-group"
                                                {...field}
                                                error={Boolean(errors.productFulfillmentChannel)}
                                                style={{ width: "100%" }}
                                            >
                                                <FormControlLabel
                                                    value="Merchant Fulfilled"
                                                    control={<Radio />}
                                                    label="I will ship this item myself (Self Ship) or I will pack this item and
                                                           Amazon will pick up & ship (Easy Ship) (Merchant Fulfilled)"
                                                    checked={showShipSuggest === 'Merchant Fulfilled'}
                                                    onChange={handleChange}
                                                    style={{ padding: "5px" }}
                                                />
                                                <FormControlLabel
                                                    value="Fulfilled by Amazon"
                                                    control={<Radio />}
                                                    label="Amazon will ship and provide customer service
                                                            (Fulfilled by Amazon)"
                                                    checked={showShipSuggest === 'Fulfilled by Amazon'}
                                                    onChange={handleChange}
                                                    style={{ padding: "5px" }}
                                                />

                                            </RadioGroup>
                                            <div>
                                                {
                                                    showShipSuggest === 'Fulfilled by Amazon' ? <label> You have chosen to have Amazon fulfill orders for this item. Your item will be available for sale, when Amazon receives it. Fulfillment by Amazon fees will apply.</label> : ""
                                                }

                                            </div>

                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                <label className='labelbold'>Item Dimensions</label>
                            </div>

                            <div className="col-8 col-sm-7 col-lg-6">
                                <div>
                                    <div className='row align-items-end'>
                                        <Controller
                                            control={control}
                                            name='productSellLength'
                                            rules={{
                                                required: "productSellLength is required",
                                                pattern: {
                                                    value: new RegExp('^[0-9]+$'),
                                                    message: "not a valid formate"
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className='col-12 col-sm-6'>
                                                        <label className="labelbold me-2">Item Length</label>
                                                        <TextField
                                                            placeholder="12"
                                                            id="productSellLength"
                                                            variant="outlined"
                                                            {...field}
                                                            style={{ width: "100%" }}
                                                            error={Boolean(errors.productSellLength)}
                                                        />
                                                    </div>
                                                </>
                                            )}
                                        />
                                        <Controller
                                            control={control}
                                            name='productSellLengthUnit'
                                            rules={{
                                                required: "productSellLengthUnit is required"
                                            }}
                                            render={({ field }) => (
                                                <>

                                                    <div className='col-12 col-sm-6'>
                                                        <TextField
                                                            id="productSellLengthUnit"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            {...field}
                                                            error={Boolean(errors.productSellLengthUnit)}
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
                                                            <MenuItem value="Hundredths-Inchese">Hundredths-Inchese</MenuItem>
                                                            <MenuItem value="Nanometer">Nanometer</MenuItem>
                                                            <MenuItem value="µm">µm</MenuItem>
                                                            <MenuItem value="Kilometer">Kilometer</MenuItem>


                                                        </TextField>
                                                    </div>
                                                </>
                                            )}

                                        />

                                    </div>
                                    <div className='row align-items-end'>
                                        <Controller
                                            control={control}
                                            name='productSellWidth'
                                            rules={{
                                                required: "productSellWidth is required",
                                                pattern: {
                                                    value: new RegExp('^[0-9]+$'),
                                                    message: "not a valid formate"
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className='col-12 col-sm-6'>
                                                        <label className="labelbold me-2">Item Width</label>
                                                        <TextField
                                                            placeholder="12"
                                                            id="productSellWidth"
                                                            variant="outlined"
                                                            {...field}
                                                            style={{ width: "100%" }}
                                                            error={Boolean(errors.productSellWidth)}
                                                        />
                                                    </div>
                                                </>
                                            )}
                                        />
                                        <Controller
                                            control={control}
                                            name='productSellWidthUnit'
                                            rules={{
                                                required: "productSellWidthUnit is required"
                                            }}
                                            render={({ field }) => (
                                                <>

                                                    <div className='col-12 col-sm-6'>
                                                        <TextField
                                                            id="productSellWidthUnit"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            {...field}
                                                            error={Boolean(errors.productSellWidthUnit)}
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
                                                            <MenuItem value="Hundredths-Inchese">Hundredths-Inchese</MenuItem>
                                                            <MenuItem value="Nanometer">Nanometer</MenuItem>
                                                            <MenuItem value="µm">µm</MenuItem>
                                                            <MenuItem value="Kilometer">Kilometer</MenuItem>


                                                        </TextField>
                                                    </div>
                                                </>
                                            )}

                                        />
                                    </div>
                                    <div className='row align-items-end'>
                                        <Controller
                                            control={control}
                                            name='productSellHeight'
                                            rules={{
                                                required: "productSellHeight is required",
                                                pattern: {
                                                    value: new RegExp('^[0-9]+$'),
                                                    message: "not a valid formate"
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className='col-12 col-sm-6'>
                                                        <label className="labelbold me-2">Item Height</label>
                                                        <TextField
                                                            placeholder="12"
                                                            id="productSellHeight"
                                                            variant="outlined"
                                                            {...field}
                                                            style={{ width: "100%" }}
                                                            error={Boolean(errors.productSellHeight)}
                                                        />
                                                    </div>
                                                </>
                                            )}
                                        />
                                        <Controller
                                            control={control}
                                            name='productSellHeightUnit'
                                            rules={{
                                                required: "productSellHeightUnit is required"
                                            }}
                                            render={({ field }) => (
                                                <>

                                                    <div className='col-12 col-sm-6'>
                                                        <TextField
                                                            id="productSellHeightUnit"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            {...field}
                                                            error={Boolean(errors.productSellHeightUnit)}
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
                                                            <MenuItem value="Hundredths-Inchese">Hundredths-Inchese</MenuItem>
                                                            <MenuItem value="Nanometer">Nanometer</MenuItem>
                                                            <MenuItem value="µm">µm</MenuItem>
                                                            <MenuItem value="Kilometer">Kilometer</MenuItem>
                                                        </TextField>
                                                    </div>
                                                </>
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
            {
                formComponents7 && (
                    <>
                        {/* List Price,Country/Region Of Origin,HSN Code,Maximum Retail Price,Fulfillment Channel */}
                        <div>
                            <div className='row' style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='productListPrice'
                                    rules={{
                                        required: "productListPrice is required",
                                        pattern: {
                                            value: new RegExp('^[0-9]+$'),
                                            message: "not a valid formate"
                                        }
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">List Price</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    disabled
                                                    id="productListPrice"
                                                    variant="outlined"
                                                    value="INR"
                                                    style={{ width: "10%" }}
                                                />
                                                <TextField
                                                    placeholder="Ex:50.00"
                                                    id="productListPrice"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "90%" }}
                                                    error={Boolean(errors.productListPrice)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                            <div className='row'>
                                <Controller
                                    control={control}
                                    name='productSellCountry'
                                    rules={{
                                        required: "country name is required"
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className='labelbold me-2'>Country/Region Of Origin</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    id="productSellCountry"
                                                    variant="outlined"
                                                    select
                                                    style={{ width: "100%" }}
                                                    {...field}
                                                    error={Boolean(errors.productSellCountry)}
                                                >
                                                    <MenuItem value="India">India</MenuItem>
                                                    <MenuItem value="China">China</MenuItem>
                                                </TextField>
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                            <div className='row' style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='productHSNcode'
                                    rules={{
                                        required: "productHSNcode is required",
                                        pattern: {
                                            value: new RegExp('^[0-9]+$'),
                                            message: "not a valid formate"
                                        }
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2">HSN code</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    placeholder="610510,61051048"
                                                    id="productHSNcode"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "100%" }}
                                                    error={Boolean(errors.productHSNcode)}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                            <div className='row' style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name='productSellMaxRetailPrice'
                                    rules={{
                                        required: "productSellMaxRetailPrice is required",
                                        pattern: {
                                            value: new RegExp('^[0-9]+$'),
                                            message: "not a valid formate"
                                        }
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold me-2"> Maximum Retail Price</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">
                                                <TextField
                                                    disabled
                                                    id="productSellMaxRetailPrice"
                                                    variant="outlined"
                                                    value="INR"
                                                    style={{ width: "10%" }}

                                                />
                                                <TextField
                                                    placeholder="Ex:50.00"
                                                    id="productSellMaxRetailPrice"
                                                    variant="outlined"
                                                    {...field}
                                                    style={{ width: "90%" }}
                                                    error={Boolean(errors.productSellMaxRetailPrice)}
                                                />
                                            </div>

                                        </>
                                    )}
                                />

                            </div>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <Controller
                                    control={control}
                                    name="productFulfillmentChannel"
                                    rules={{
                                        required: "this field is required",

                                    }}
                                    render={({ field }) => (
                                        <>
                                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                                <label className="labelbold  mb-1">Fulfillment Channel</label>
                                            </div>
                                            <div className="col-8 col-sm-7 col-lg-6">


                                                <RadioGroup
                                                    row
                                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                                    id="productFulfillmentChannel"
                                                    name="row-radio-buttons-group"
                                                    {...field}
                                                    error={Boolean(errors.productFulfillmentChannel)}
                                                    style={{ width: "100%" }}
                                                >
                                                    <FormControlLabel
                                                        value="Merchant Fulfilled"
                                                        control={<Radio />}
                                                        label="I will ship this item myself (Self Ship) or I will pack this item and
                                                           Amazon will pick up & ship (Easy Ship) (Merchant Fulfilled)"
                                                        checked={showShipSuggest === 'Merchant Fulfilled'}
                                                        onChange={handleChange}
                                                        style={{ padding: "5px" }}
                                                    />
                                                    <FormControlLabel
                                                        value="Fulfilled by Amazon"
                                                        control={<Radio />}
                                                        label="Amazon will ship and provide customer service
                                                            (Fulfilled by Amazon)"
                                                        checked={showShipSuggest === 'Fulfilled by Amazon'}
                                                        onChange={handleChange}
                                                        style={{ padding: "5px" }}
                                                    />

                                                </RadioGroup>
                                                <div>
                                                    {
                                                        showShipSuggest === 'Fulfilled by Amazon' ? <label> You have chosen to have Amazon fulfill orders for this item. Your item will be available for sale, when Amazon receives it. Fulfillment by Amazon fees will apply.</label> : ""
                                                    }

                                                </div>

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
                formComponents8 && (
                    <>
                        {/* Seller SKU,Your Price,Quantity,Item Condition,Country/Region Of Origin, Maximum Retail Price,Fulfillment Channel,Item Dimensions */}
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productsellerSKU'
                                rules={{
                                    required: "productsellerSKU is required",

                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Seller SKU</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="101MyCollectible1"
                                                id="productsellerSKU"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.productsellerSKU)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellPrice'
                                rules={{
                                    required: "productSellPrice is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Your Price</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                disabled
                                                id="productSellPrice"
                                                variant="outlined"
                                                value="INR"
                                                style={{ width: "10%" }}
                                            />
                                            <TextField
                                                placeholder="Ex:50.00"
                                                id="productSellPrice"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "90%" }}
                                                error={Boolean(errors.productSellPrice)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>

                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellQuantity'
                                rules={{
                                    required: "productSellQuantity is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">Quantity</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="200"
                                                id="productSellPrice"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.productSellQuantity)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellCondition'
                                rules={{
                                    required: "productSellCondition is required"
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className='labelbold me-2'>Item Condition</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                id="productSellCountry"
                                                variant="outlined"
                                                select
                                                style={{ width: "100%" }}
                                                {...field}
                                                error={Boolean(errors.productSellCondition)}
                                            >
                                                <MenuItem value="">-Select-</MenuItem>
                                                <MenuItem value="New">New</MenuItem>

                                            </TextField>
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row'>
                            <Controller
                                control={control}
                                name='productSellCountry'
                                rules={{
                                    required: "country name is required"
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className='labelbold me-2'>Country/Region Of Origin</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                id="productSellCountry"
                                                variant="outlined"
                                                select
                                                style={{ width: "100%" }}
                                                {...field}
                                                error={Boolean(errors.productSellCountry)}
                                            >
                                                <MenuItem value="India">India</MenuItem>
                                                <MenuItem value="China">China</MenuItem>

                                            </TextField>
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productHSNcode'
                                rules={{
                                    required: "productHSNcode is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2">HSN code</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                placeholder="610510,61051048"
                                                id="productHSNcode"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "100%" }}
                                                error={Boolean(errors.productHSNcode)}
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='productSellMaxRetailPrice'
                                rules={{
                                    required: "productSellMaxRetailPrice is required",
                                    pattern: {
                                        value: new RegExp('^[0-9]+$'),
                                        message: "not a valid formate"
                                    }
                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold me-2"> Maximum Retail Price</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">
                                            <TextField
                                                disabled
                                                id="productSellMaxRetailPrice"
                                                variant="outlined"
                                                value="INR"
                                                style={{ width: "10%" }}

                                            />
                                            <TextField
                                                placeholder="Ex:50.00"
                                                id="productSellMaxRetailPrice"
                                                variant="outlined"
                                                {...field}
                                                style={{ width: "90%" }}
                                                error={Boolean(errors.productSellMaxRetailPrice)}
                                            />
                                        </div>

                                    </>
                                )}
                            />

                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name="productFulfillmentChannel"
                                rules={{
                                    required: "this field is required",

                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-3 col-lg-3 text-end">
                                            <label className="labelbold  mb-1">Fulfillment Channel</label>
                                        </div>
                                        <div className="col-8 col-sm-7 col-lg-6">


                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                id="productFulfillmentChannel"
                                                name="row-radio-buttons-group"
                                                {...field}
                                                error={Boolean(errors.productFulfillmentChannel)}
                                                style={{ width: "100%" }}
                                            >
                                                <FormControlLabel
                                                    value="Merchant Fulfilled"
                                                    control={<Radio />}
                                                    label="I will ship this item myself (Self Ship) or I will pack this item and
                                                           Amazon will pick up & ship (Easy Ship) (Merchant Fulfilled)"
                                                    checked={showShipSuggest === 'Merchant Fulfilled'}
                                                    onChange={handleChange}
                                                    style={{ padding: "5px" }}
                                                />
                                                <FormControlLabel
                                                    value="Fulfilled by Amazon"
                                                    control={<Radio />}
                                                    label="Amazon will ship and provide customer service
                                                            (Fulfilled by Amazon)"
                                                    checked={showShipSuggest === 'Fulfilled by Amazon'}
                                                    onChange={handleChange}
                                                    style={{ padding: "5px" }}
                                                />

                                            </RadioGroup>
                                            <div>
                                                {
                                                    showShipSuggest === 'Fulfilled by Amazon' ? <label> You have chosen to have Amazon fulfill orders for this item. Your item will be available for sale, when Amazon receives it. Fulfillment by Amazon fees will apply.</label> : ""
                                                }

                                            </div>

                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <div className="col-4 col-sm-3 col-lg-3 text-end">
                                <label className='labelbold'>Item Dimensions</label>
                            </div>

                            <div className="col-8 col-sm-7 col-lg-6">
                                <div>
                                    <div className='row align-items-end'>
                                        <Controller
                                            control={control}
                                            name='productSellLength'
                                            rules={{
                                                required: "productSellLength is required",
                                                pattern: {
                                                    value: new RegExp('^[0-9]+$'),
                                                    message: "not a valid formate"
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className='col-12 col-sm-6'>
                                                        <label className="labelbold me-2">Item Length</label>
                                                        <TextField
                                                            placeholder="12"
                                                            id="productSellLength"
                                                            variant="outlined"
                                                            {...field}
                                                            style={{ width: "100%" }}
                                                            error={Boolean(errors.productSellLength)}
                                                        />
                                                    </div>
                                                </>
                                            )}
                                        />
                                        <Controller
                                            control={control}
                                            name='productSellLengthUnit'
                                            rules={{
                                                required: "productSellLengthUnit is required"
                                            }}
                                            render={({ field }) => (
                                                <>

                                                    <div className='col-12 col-sm-6'>
                                                        <TextField
                                                            id="productSellLengthUnit"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            {...field}
                                                            error={Boolean(errors.productSellLengthUnit)}
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
                                                            <MenuItem value="Hundredths-Inchese">Hundredths-Inchese</MenuItem>
                                                            <MenuItem value="Nanometer">Nanometer</MenuItem>
                                                            <MenuItem value="µm">µm</MenuItem>
                                                            <MenuItem value="Kilometer">Kilometer</MenuItem>


                                                        </TextField>
                                                    </div>
                                                </>
                                            )}

                                        />

                                    </div>
                                    <div className='row align-items-end'>
                                        <Controller
                                            control={control}
                                            name='productSellWidth'
                                            rules={{
                                                required: "productSellWidth is required",
                                                pattern: {
                                                    value: new RegExp('^[0-9]+$'),
                                                    message: "not a valid formate"
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className='col-12 col-sm-6'>
                                                        <label className="labelbold me-2">Item Width</label>
                                                        <TextField
                                                            placeholder="12"
                                                            id="productSellWidth"
                                                            variant="outlined"
                                                            {...field}
                                                            style={{ width: "100%" }}
                                                            error={Boolean(errors.productSellWidth)}
                                                        />
                                                    </div>
                                                </>
                                            )}
                                        />
                                        <Controller
                                            control={control}
                                            name='productSellWidthUnit'
                                            rules={{
                                                required: "productSellWidthUnit is required"
                                            }}
                                            render={({ field }) => (
                                                <>

                                                    <div className='col-12 col-sm-6'>
                                                        <TextField
                                                            id="productSellWidthUnit"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            {...field}
                                                            error={Boolean(errors.productSellWidthUnit)}
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
                                                            <MenuItem value="Hundredths-Inchese">Hundredths-Inchese</MenuItem>
                                                            <MenuItem value="Nanometer">Nanometer</MenuItem>
                                                            <MenuItem value="µm">µm</MenuItem>
                                                            <MenuItem value="Kilometer">Kilometer</MenuItem>


                                                        </TextField>
                                                    </div>
                                                </>
                                            )}

                                        />
                                    </div>
                                    <div className='row align-items-end'>
                                        <Controller
                                            control={control}
                                            name='productSellHeight'
                                            rules={{
                                                required: "productSellHeight is required",
                                                pattern: {
                                                    value: new RegExp('^[0-9]+$'),
                                                    message: "not a valid formate"
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <div className='col-12 col-sm-6'>
                                                        <label className="labelbold me-2">Item Height</label>
                                                        <TextField
                                                            placeholder="12"
                                                            id="productSellHeight"
                                                            variant="outlined"
                                                            {...field}
                                                            style={{ width: "100%" }}
                                                            error={Boolean(errors.productSellHeight)}
                                                        />
                                                    </div>
                                                </>
                                            )}
                                        />
                                        <Controller
                                            control={control}
                                            name='productSellHeightUnit'
                                            rules={{
                                                required: "productSellHeightUnit is required"
                                            }}
                                            render={({ field }) => (
                                                <>

                                                    <div className='col-12 col-sm-6'>
                                                        <TextField
                                                            id="productSellHeightUnit"
                                                            variant="outlined"
                                                            select
                                                            style={{ width: "100%" }}
                                                            {...field}
                                                            error={Boolean(errors.productSellHeightUnit)}
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
                                                            <MenuItem value="Hundredths-Inchese">Hundredths-Inchese</MenuItem>
                                                            <MenuItem value="Nanometer">Nanometer</MenuItem>
                                                            <MenuItem value="µm">µm</MenuItem>
                                                            <MenuItem value="Kilometer">Kilometer</MenuItem>
                                                        </TextField>
                                                    </div>
                                                </>
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }

        </>
    )
}

export default ProductOffer