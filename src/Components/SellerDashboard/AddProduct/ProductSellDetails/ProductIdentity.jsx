import {
  TextField
} from "@mui/material";
import React, { useState, useEffect } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import InputLabel from '@mui/material/InputLabel';

import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import { useSelector } from 'react-redux';





const ProductIdentity = () => {

  const { control, formState: { errors }, setValue } = useFormContext()
  const [showSearchproduct, setShowSearchproduct] = useState(
    localStorage.getItem('showSearchproduct') || 'No'
  );
  const [brandValue, setBrandValue] = useState(false)
  const [productIDNotValue, setproductIDNotValue] = useState(false)
  useEffect(() => {
    // Retrieve the saved value from local storage when the component mounts
    const savedProductVariation = localStorage.getItem('showSearchproduct');
    if (savedProductVariation) {
      setShowSearchproduct(savedProductVariation);
    }
  }, []);

  console.log("render"," ProductIdentity Page")
  const [productTypestate, setProductTypestate] = useState(''); // Initialize with an empty string
  const [formComponents1, setFormComponent1] = useState(false)
  const [formComponents2, setFormComponent2] = useState(false)
  const [formComponents3, setFormComponent3] = useState(false)
  const [formComponents4, setFormComponent4] = useState(false)
  const [formComponents5, setFormComponent5] = useState(false)
  const [formComponents6, setFormComponent6] = useState(false)

  // formComponents1  => Product Type,Product Name,Variations,Brand Name,Product Id
  // formComponents2  => Product Type,Item Name (aka Title),Variations-9,Brand Name,Product Id
  // formComponents3  => Product Type,Item Name (aka Title),Variations-5,Brand Name,Product Id
  // formComponents4  => Product Type,Item Name (aka Title),Variations-4,Brand Name,Product Id
  // formComponents5  => Product Type,Item Name (aka Title),Variations-11,Brand Name,Product Id
  // formComponents6  => Product Type,Item Name (aka Title),Variations-7,Brand Name,Product Id

  const Category = useSelector((state) => state.addProductForm.selectedCategoryId);


  let SetselectedCategoryId = Category ? Category.categoryId : ""
  let SetselectedProductType = Category ? Category.productType : ""
  if (SetselectedCategoryId !== '') {
    localStorage.setItem('selectedCategoryId', SetselectedCategoryId);
  }
  if (SetselectedProductType !== '') {
    localStorage.setItem('selectedProductType', SetselectedProductType);
  }


  let selectedCategoryId = localStorage.getItem('selectedCategoryId')
  let selectedProductType = localStorage.getItem('selectedProductType')


  // const watchFirstName = watch("colorVariation");
  // const watchSelect = watch("materialTypeVariation");

  // useEffect(() => {
  //   // Log the form data when it changes
  //   console.log({ colorVariation: watchFirstName, materialTypeVariation: watchSelect });
  // }, [watchFirstName, watchSelect]);

  useEffect(() => {
    setValue('productType', selectedProductType);
    setProductTypestate(selectedProductType);

    if (selectedCategoryId === "chalkdrawingIdentityState") {
      setValue('productType', selectedProductType);
      setProductTypestate(selectedProductType)
      setFormComponent4(true)
    }
    setFormComponent1(true)
    // setFormComponent1(true)
    // Air Cooler category list item
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

      setFormComponent1(true)
    }
    else if (selectedCategoryId === "51396510031") {
      // boxFans

      setFormComponent1(true)
    }
    else if (selectedCategoryId === "4369221031") {
      // ceilingFans

      setFormComponent1(true)
    }
    else if (selectedCategoryId === "51396517031") {
      // clipFans

      setFormComponent1(true)
    }
    else if (selectedCategoryId === "51396508031") {
      // drumFans
      setFormComponent1(true)
    }
    else if (selectedCategoryId === "8641216031") {
      // exhaustFans
      setFormComponent1(true)
    }
    else if (selectedCategoryId === "51396512031") {
      // floorFans
      setFormComponent1(true)
    }
    else if (selectedCategoryId === "2083427031") {
      // otherFans
      setFormComponent1(true)
    }
    else if (selectedCategoryId === "4369223031") {
      // pedestalFans
      setFormComponent1(true)
    }
    else if (selectedCategoryId === "51396514031") {
      // personalFans
      setFormComponent1(true)
    }
    else if (selectedCategoryId === "4369222031") {
      // tableFans
      setFormComponent1(true)
    }
    else if (selectedCategoryId === "4369224031") {
      // towerFans
      setFormComponent1(true)
    }
    else if (selectedCategoryId === "51396519031") {
      // vortexActionFans
      setFormComponent1(true)
    }
    else if (selectedCategoryId === "51396521031") {
      // wallMountedFans
      setFormComponent1(true)
    }
    else if (selectedCategoryId === "51396507031") {
      // windowFans
      setFormComponent1(true)
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
      setFormComponent2(true)
    }

    // Parts & Accessories category list item
    if (selectedCategoryId === "5403409031") {
      // airPuriPartNAccess
      setFormComponent2(true)
    }
    else if (selectedCategoryId === "5403413031") {
      // dehumidPartNAccess
      setFormComponent2(true)
    }
    else if (selectedCategoryId === "23034522031") {
      // evaCoolerPartNAccess
      setFormComponent2(true)
    }
    else if (selectedCategoryId === "5403417031") {
      // fanPartNAccess
      setFormComponent2(true)
    }
    else if (selectedCategoryId === "5403422031") {
      // heaterPartNAccess
      setFormComponent2(true)
    }
    else if (selectedCategoryId === "5403423031") {
      // humidiPartNAccess
      setFormComponent2(true)
    }
    else if (selectedCategoryId === "5403408031") {
      // otherPartNAccess
      setFormComponent2(true)
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
      setFormComponent5(true)
    }
    else if (selectedCategoryId === "4375456031") {
      // instantWaterHeaters
      setFormComponent5(true)
    }
    else if (selectedCategoryId === "4375457031") {
      // storageWaterHeaters
      setFormComponent5(true)
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
      setFormComponent6(true)
    }


    // "Coffee Capsule Holders"
    if (selectedCategoryId === "27961558031") {
      //"Capsule Baskets"
      setFormComponent2(true)
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
      setFormComponent3(true)
    }
    else if (selectedCategoryId === "1379962031") {
      //"Other (Coffee Filters)"
      setFormComponent3(true)
    }
    else if (selectedCategoryId === "27345419031") {
      //"Permanent Filters"
      setFormComponent3(true)
    }
    else if (selectedCategoryId === "27345417031") {
      //"Reusable Filters"
      setFormComponent3(true)
    }

    // "Drip Trays"
    if (selectedCategoryId === "1379963031") {
      //""Other (Drip Trays)"
      formComponents6(true)
    }

    // "Measuring Spoons"
    if (selectedCategoryId === "1379964031") {
      // "Measuring Spoons"
      setFormComponent3(true)
    }

    // "Other (Coffee Maker Accessories)"
    if (selectedCategoryId === "1379961031") {
      // "Other (Coffee Maker Accessories)"
      formComponents6(true)
    }

    // "Pod Holders"
    if (selectedCategoryId === "1379966031") {
      // "Pod Holders"
      setFormComponent6(true)
    }
    else if (selectedCategoryId === "1379972031") {
      // "Tea Filters"
      setFormComponent3(true)
    }
    else if (selectedCategoryId === "1379973031") {
      // "Water Tanks"
      setFormComponent6(true)
    }

    // Coffee Makers
    if (selectedCategoryId === "51396613031") {
      // Coffee Makers

    }
    else if (selectedCategoryId === "1379977031") {
      // Coffee Percolators

    }
    else if (selectedCategoryId === "1379980031") {
      // Coffee Presses

    }
    else if (selectedCategoryId === "1379982031") {
      // Drip Coffee Machines

    }
    else if (selectedCategoryId === "51396615031") {
      // Iced Tea Pitchers

    }
    else if (selectedCategoryId === "1379960031") {
      // Other (Coffee, Tea & Espresso)

    }
    else if (selectedCategoryId === "1379985031") {
      // Stovetop Espresso Pots

    }
    else if (selectedCategoryId === "1379986031") {
      // Super-Automatic Coffee Machines

    }
    else if (selectedCategoryId === "1379988031") {
      // Tea Presses

    }
    else if (selectedCategoryId === "51396617031") {
      // Turkish Coffeepots

    }

    // Espresso Machines
    if (selectedCategoryId === "51396864031") {
      // Manual Espresso Machines

    }
    else if (selectedCategoryId === "1379983031") {
      // Other (Espresso Machines)

    }
    else if (selectedCategoryId === "51396866031") {
      //Semi-Automatic Espresso Machines

    }
    else if (selectedCategoryId === "51396862031") {
      // Steam Espresso Machines

    }
    else if (selectedCategoryId === "51396867031") {
      // Super-Automatic Espresso Machines

    }

    // Kettles & Tea Machines
    if (selectedCategoryId === "51396869031") {
      // Coffee Drip Kettles

    }
    else if (selectedCategoryId === "22938888031") {
      // Electric Kettles

    }
    else if (selectedCategoryId === "1379987031") {
      // Hot Tea Machines

    }
    else if (selectedCategoryId === "22938887031") {
      // Hot Water Dispensers

    }
    else if (selectedCategoryId === "22938886031") {
      // Iced Tea Machines

    }
    else if (selectedCategoryId === "22938883031") {
      // Other (Kettles & Tea Machines)

    }
    else if (selectedCategoryId === "22938885031") {
      // Stovetop Tea Kettles

    }


    // Milk Frothers
    if (selectedCategoryId === "51396874031") {
      // Automatic Milk Frothers

    }
    else if (selectedCategoryId === "51396872031") {
      // Handheld Milk Frothers

    }
    else if (selectedCategoryId === "51396875031") {
      // Manual Milk Frothers

    }
    else if (selectedCategoryId === "1379965031") {
      // Other (Milk Frothers)

    }

    // Inverters & Sets
    if (selectedCategoryId === "32075770031") {
      // Batteries

    }
    else if (selectedCategoryId === "32075768031") {
      // Inverter & Battery Sets

    }
    else if (selectedCategoryId === "11870706031") {
      // Inverters

    }
    else if (selectedCategoryId === "32075766031") {
      // Other (Inverters & Sets)
    }
    else if (selectedCategoryId === "32075769031") {
      // Trolleys
    }

    // Other (Kitchen & Home Appliances)
    if (selectedCategoryId === "4951860031") {
      // Other (Kitchen & Home Appliances)

    }

    // Sewing Machines & Accessories
    if (selectedCategoryId === "10543793031") {
      // Attachments

    }
    else if (selectedCategoryId === "10543794031") {
      // Carrying Cases

    }
    else if (selectedCategoryId === "51396611031") {
      // Oil

    }
    else if (selectedCategoryId === "10543792031") {
      // Other (Sewing Machines & Accessories)
    }
    else if (selectedCategoryId === "10543795031") {
      // Parts
    }
    else if (selectedCategoryId === "10543796031") {
      // Presser Feet
    }
    else if (selectedCategoryId === "2083428031") {
      // Sewing & Embroidery Machines
    }

    // Small Kitchen Appliances
    if (selectedCategoryId === "1380046031") {
      // "Beer Tenders"

    }
    else if (selectedCategoryId === "1380047031") {
      //"Bread Makers"

    }
    else if (selectedCategoryId === "1380049031") {
      // "Chocolate Funtains"

    }
    else if (selectedCategoryId === "1380048031") {
      //"Cotton Candy Makers"

    }
    else if (selectedCategoryId === "1380052031") {
      //"Crepe Makers"

    }
    else if (selectedCategoryId === "26953502031") {
      //"Deep Fat Fryers"

    }
    else if (selectedCategoryId === "26953501031") {
      //Air Fryers

    }
    else if (selectedCategoryId === "51396890031") {
      //"Digital Scales"

    }
    else if (selectedCategoryId === "51396888031") {
      //"Mechanical Scales"

    }
    else if (selectedCategoryId === "1380054031") {
      //"Other (Digital Kitchen Scales)"

    }
    else if (selectedCategoryId === "1380055031") {
      //"Egg Boilers"

    }
    else if (selectedCategoryId === "1380056031") {
      //"Electric Can Openers"

    }
    else if (selectedCategoryId === "1380058031") {
      //"Electric Cheese Graters"

    }
    else if (selectedCategoryId === "1380051031") {
      //"Electric Grills"

    }
    else if (selectedCategoryId === "1380059031") {
      //"Electric Knife Sharpeners"

    }
    else if (selectedCategoryId === "1380060031") {
      //"Electric Skillets"

    }
    else if (selectedCategoryId === "1380061031") {
      //"Electric Slicers"

    }
    else if (selectedCategoryId === "1380062031") {
      //"Electric Steamers"

    }
    else if (selectedCategoryId === "1380063031") {
      //"Electric Woks"

    }
    else if (selectedCategoryId === "51396886031") {
      //"Full Size Food Processors"

    }
    else if (selectedCategoryId === "1380064031") {
      //"Other (Food Processors)"

    }
    else if (selectedCategoryId === "1380065031") {
      //"Hand Blenders"

    }
    else if (selectedCategoryId === "1380066031") {
      //"Hand Mixers"

    }
    else if (selectedCategoryId === "1380067031") {
      //"Hot Dog Machines"

    }
    else if (selectedCategoryId === "1380069031") {
      //"Ice Cream Makers"

    }
    else if (selectedCategoryId === "1380068031") {
      //"Induction Cooktop"

    }
    else if (selectedCategoryId === "2088589031") {
      //"Juicer Mixer Grinders"

    }
    else if (selectedCategoryId === "11366947031") {
      // Centrifugal Juicers

    }
    else if (selectedCategoryId === "11366946031") {
      // Electric Citrus Juicers

    }
    else if (selectedCategoryId === "1380070031") {
      // Other (Juicers)

    }
    else if (selectedCategoryId === "1380070031") {
      // Dual Auger Masticating Juicers

    }
    else if (selectedCategoryId === "14155257031") {
      //Other (Cold Press Juicers)

    }
    else if (selectedCategoryId === "14155258031") {
      // Single Auger Masticating Juicers

    }
    else if (selectedCategoryId === "22938888031") {
      //"Electric Kettles"

    }
    else if (selectedCategoryId === "1379987031") {
      //Hot Tea Machines

    }
    else if (selectedCategoryId === "22938887031") {
      //Hot Water Boilers & Dispensers

    }
    else if (selectedCategoryId === "22938886031") {
      //Iced Tea Machines

    }
    else if (selectedCategoryId === "1379984031") {
      //Kettle & Toaster Sets

    }
    else if (selectedCategoryId === "22938884031") {
      //Other (Kettles & Hot Water Dispensers)

    }
    else if (selectedCategoryId === "51396881031") {
      //Electric Spice Grinders

    }
    else if (selectedCategoryId === "51396879031") {
      //Grain Mills

    }
    else if (selectedCategoryId === "1380012031") {
      //Herb & Spice Mills

    }
    else if (selectedCategoryId === "27320744031") {
      //Other (Mills & Grinders)

    }
    else if (selectedCategoryId === "27320745031") {
      //Wet Grinders

    }
    else if (selectedCategoryId === "1380050031") {
      //"Mini Food Processors & Choppers"

    }
    else if (selectedCategoryId === "4375446031") {
      //"Mixer Grinders"

    }
    else if (selectedCategoryId === "1380045031") {
      //"Other (Small Kitchen Appliances)"

    }
    else if (selectedCategoryId === "1380073031") {
      //"Oven Toaster Grills"

    }
    else if (selectedCategoryId === "1380074031") {
      //"Pasta Machines"

    }
    else if (selectedCategoryId === "1380081031") {
      //"Pop-up Toasters"

    }
    else if (selectedCategoryId === "1380075031") {
      //"Popcorn Makers"

    }
    else if (selectedCategoryId === "1380077031") {
      //"Rice & Pasta Cookers"

    }
    else if (selectedCategoryId === "11366949031") {
      //Other (Roti Makers)

    }
    else if (selectedCategoryId === "51396883031") {
      //Quesadilla Makers

    }
    else if (selectedCategoryId === "1380078031") {
      //Sandwich Makers

    }
    else if (selectedCategoryId === "1380079031") {
      //"Slow Cookers"

    }
    else if (selectedCategoryId === "10543776031") {
      //Bread Machine Accessories

    }
    else if (selectedCategoryId === "10543777031") {
      //Bread Machine Replacement Parts

    }
    else if (selectedCategoryId === "10543778031") {
      //Countertop Blender Accessories

    }
    else if (selectedCategoryId === "10543779031") {
      //Countertop Blender Replacement Parts

    }
    else if (selectedCategoryId === "10543780031") {
      //Food Processor Accessories

    }
    else if (selectedCategoryId === "10543781031") {
      //Food Processor Replacement Parts

    }
    else if (selectedCategoryId === "10543782031") {
      //Hand Blender Accessories

    }
    else if (selectedCategoryId === "10543783031") {
      //Hand Blender Replacement Parts

    }
    else if (selectedCategoryId === "10543784031") {
      //Hand Mixer Accessories

    }
    else if (selectedCategoryId === "10543785031") {
      //Hand Mixer Replacement Parts

    }
    else if (selectedCategoryId === "10543787031") {
      //Microwave Oven Replacement Parts

    }
    else if (selectedCategoryId === "10543775031") {
      //Other (Small Appliance Parts & Accessories)

    }
    else if (selectedCategoryId === "10543788031") {
      //Soda Maker Accessories

    }
    else if (selectedCategoryId === "10543789031") {
      //Stand Mixer Accessories

    }
    else if (selectedCategoryId === "10543790031") {
      //Stand Mixer Replacement Parts

    }
    else if (selectedCategoryId === "10543791031") {
      //Vacuum Sealer Accessories

    }
    else if (selectedCategoryId === "11366948031") {
      //"Soup Kettles & Makers"

    }
    else if (selectedCategoryId === "1380080031") {
      //"Stand Mixers"

    }
    else if (selectedCategoryId === "1380076031") {
      //"Tandoors & Grills"

    }
    else if (selectedCategoryId === "1380082031") {
      //"Vacuum Sealers"

    }
    else if (selectedCategoryId === "1380083031") {
      //"Waffle Makers & Irons"

    }
    else if (selectedCategoryId === "1380084031") {
      //"Yogurt Makers"

    }


    // Vacuum, Cleaning & Ironing
    // Irons, Steamers & Accessories
    //1. Ironing Accessories
    if (selectedCategoryId === "1380568031") {
      // Felt Pads

    }
    else if (selectedCategoryId === "1380569031") {
      // Iron Holders

    }
    else if (selectedCategoryId === "1380571031") {
      // Ironing Board Covers

    }
    else if (selectedCategoryId === "51396836031") {
      // Ironing Chairs

    }
    else if (selectedCategoryId === "1380550031") {
      // Laundry Baskets

    }
    else if (selectedCategoryId === "1380567031") {
      //Other (Ironing Accessories

    }
    else if (selectedCategoryId === "1380570031") {
      // Spray Bottles

    }

    //2. Irons
    if (selectedCategoryId === "1380577031") {
      // Dry Irons

    }
    else if (selectedCategoryId === "1380574031") {
      // Other (Irons)

    }
    else if (selectedCategoryId === "1380579031") {
      // Steam Generator Iron

    }
    else if (selectedCategoryId === "1380578031") {
      // Steam Irons

    }
    else if (selectedCategoryId === "1380576031") {
      // Travel Irons

    }
    // Vacuum, Cleaning & Ironing
    // Irons, Steamers & Accessories
    if (selectedCategoryId === "1380580031") {
      // Lint Shavers
    }
    else if (selectedCategoryId === "1380566031") {
      //Other (Irons, Steamers & Accessories)
    }
    else if (selectedCategoryId === "1380581031") {
      // Steam Generator Accessories
    }
    else if (selectedCategoryId === "1380584031") {
      // Steam Presses
    }
    else if (selectedCategoryId === "1380583031") {
      // Travel Steam Generators
    }
    else if (selectedCategoryId === "51396877031") {
      // Vertical Steamers
    }

    // Vacuum, Cleaning & Ironing
    if (selectedCategoryId === "1380565031") {
      //"Other (Vacuum, Cleaning & Ironing)"

    }
    else if (selectedCategoryId === "2083413031") {
      //"Pressure Washers, Steam & Window Cleaners"

    }

    // Vacuum, Cleaning & Ironing
    // Vacuums & Floor Care
    if (selectedCategoryId === "1380588031") {
      // Carpet Sweepers
    }
    else if (selectedCategoryId === "1380589031") {
      // Floor Polishers
    }
    else if (selectedCategoryId === "1380585031") {
      // Other (Vacuums & Floor Care)
    }
    else if (selectedCategoryId === "5274532031") {
      // Steam Cleaners
    }

    // Vacuum, Cleaning & Ironing
    // Vacuums & Floor Care
    // Vacuum Accessories
    if (selectedCategoryId === "1380595031") {
      // Vacuum Belts
    }

    else if (selectedCategoryId === "1380603031") {
      // Vacuum Hoses
    }
    else if (selectedCategoryId === "1380604031") {
      // Vacuum Lamp Bulbs
    }

    else if (selectedCategoryId === "51397088031") {
      // Vacuum Tubes
    }

    // Vacuum, Cleaning & Ironing
    // Vacuums & Floor Care
    // Vacuum
    if (selectedCategoryId === "1380608031") {
      // Canister Vacuums
    }
    else if (selectedCategoryId === "5274529031") {
      // Central Vacuum Systems
    }
    else if (selectedCategoryId === "51397086031") {
      // Futon & Mattress Vacuums
    }
    else if (selectedCategoryId === "1380609031") {
      // Handheld Vacuums
    }
    else if (selectedCategoryId === "1380607031") {
      // Other (Vacuums)
    }
    else if (selectedCategoryId === "1380610031") {
      // Robotic Vacuums
    }
    else if (selectedCategoryId === "1380611031") {
      //Stick Vacuums & Electric Brooms
    }
    else if (selectedCategoryId === "1380612031") {
      //Upright Vacuums
    }
    else if (selectedCategoryId === "5274530031") {
      //Wet-Dry Vacuums
    }

    // Water Purifiers & Accessories
    if (selectedCategoryId === "1380261031") {
      // "Water Cartridges"

    }
    else if (selectedCategoryId === "1380262031") {
      //"Water Filters & Purifiers"

    }
    else if (selectedCategoryId === "1380260031") {
      //"Water Purifier Accessories"

    }

    // Appliances
    // Large Appliances

    if (selectedCategoryId === "1380263031") {
      // Other (Large Appliances)
    }
    else if (selectedCategoryId === "5142306031") {
      // Range Cooktops
    }

    // Appliances
    // Large Appliances
    // Parts & Accessories
    if (selectedCategoryId === "51396590031") {
      //Gas Hoses
    }
    else if (selectedCategoryId === "1380274031") {
      //Other (Parts & Accessories)
    }
    else if (selectedCategoryId === "51396592031") {
      //Power Cords
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
    }
    else if (selectedCategoryId === "14387572031") {
      //Air Cooler Covers
    }
    else if (selectedCategoryId === "14387568031") {
      //Other (Appliance Slipcovers)
    }
    else if (selectedCategoryId === "14387569031") {
      //Washing Machine Covers
    }

    // Appliances
    // Large Appliances
    // Parts & Accessories
    // Inverter Accessories
    if (selectedCategoryId === "32075770031") {
      //Batteries
    }
    else if (selectedCategoryId === "32075767031") {
      //Other (Inverter Accessories)
    }
    else if (selectedCategoryId === "32075769031") {
      //Trolleys
    }

    // Appliances
    // Large Appliances
    // Parts & Accessories
    // Microwave Parts & Accessories
    if (selectedCategoryId === "1380312031") {
      //Filters
    }
    else if (selectedCategoryId === "1380311031") {
      //Other (Microwave Parts & Accessories)
    }
    else if (selectedCategoryId === "1380313031") {
      //Trim Kits
    }
    else if (selectedCategoryId === "1380314031") {
      //Turntables
    }

    // Appliances
    // Large Appliances
    // Parts & Accessories
    // Oven Parts & Accessories
    if (selectedCategoryId === "1380315031") {
      //Other (Oven Parts & Accessories)
    }
    else if (selectedCategoryId === "51239718031") {
      //Oven Lighting
    }

    // Appliances
    // Large Appliances
    // Parts & Accessories
    // Range Hood Parts & Accessories
    if (selectedCategoryId === "1380317031") {
      //Blowers
    }

    else if (selectedCategoryId === "1380316031") {
      //Other (Range Hood Parts & Accessories)
    }
    else if (selectedCategoryId === "51239714031") {
      //Range Hood Lighting
    }
    else if (selectedCategoryId === "1380320031") {
      //Screens
    }

    // Appliances
    // Large Appliances
    // Parts & Accessories
    // Range Parts & Accessories
    if (selectedCategoryId === "1380322031") {
      //Backguards
    }
    else if (selectedCategoryId === "1380323031") {
      //Built-in Thermometers
    }
    else if (selectedCategoryId === "1380324031") {
      //Built-in Timers
    }
    else if (selectedCategoryId === "1380325031") {
      //Cooktop Burner Rings
    }
    else if (selectedCategoryId === "1380326031") {
      //Cooktop Burner
    }
    else if (selectedCategoryId === "1380327031") {
      //Drip Pans
    }
    else if (selectedCategoryId === "1380328031") {
      //Exhaust Fans
    }
    else if (selectedCategoryId === "1380321031") {
      //Other (Range Parts & Accessories)
    }
    else if (selectedCategoryId === "1380330031") {
      //Oven Heating Elements
    }
    else if (selectedCategoryId === "1380333031") {
      //Paneling
    }
    else if (selectedCategoryId === "1380334031") {
      //Plug Receptacles
    }
    else if (selectedCategoryId === "51396845031") {
      //Range Power Cords
    }
    else if (selectedCategoryId === "1380336031") {
      //Trim Kits
    }

    // Appliances
    // Large Appliances
    // Parts & Accessories
    // Refrigerator Parts & Accessories
    if (selectedCategoryId === "1380341031") {
      //Handles
    }
    else if (selectedCategoryId === "51396840031") {
      //Hoses
    }
    else if (selectedCategoryId === "1380342031") {
      //Ice Makers
    }
    else if (selectedCategoryId === "1380343031") {
      //Motors
    }
    else if (selectedCategoryId === "51396843031") {
      //Power Cords
    }
    else if (selectedCategoryId === "51396838031") {
      //Refrigerator Lighting
    }
    else if (selectedCategoryId === "51396841031") {
      //Refrigerator Thermometers
    }
    else if (selectedCategoryId === "1380348031") {
      //Water Filters
    }

    // Appliances
    // Large Appliances
    // Parts & Accessories
    // Washer Parts & Accessories
    if (selectedCategoryId === "1380353031") {
      //Clamps
    }
    else if (selectedCategoryId === "1380354031") {
      //Detergent Trays
    }
    else if (selectedCategoryId === "1380355031") {
      //Doors
    }
    else if (selectedCategoryId === "1380356031") {
      //Drain Pumps
    }
    else if (selectedCategoryId === "1380357031") {
      //Floor Trays
    }
    else if (selectedCategoryId === "1380358031") {
      //Hoses
    }
    else if (selectedCategoryId === "1380359031") {
      //Lint Filters
    }
    else if (selectedCategoryId === "1380360031") {
      //Motors
    }
    else if (selectedCategoryId === "1380352031") {
      //Other (Washer Parts & Accessories)
    }

    // Appliances
    // Large Appliances
    // Washing Machines & Dryers
    if (selectedCategoryId === "1380369031") {
      //Other (Washing Machines & Dryers)
    }
    else if (selectedCategoryId === "1380372031") {
      //Stacked Washers & Dryers
    }





  }, [selectedCategoryId])

  const handleBrandCheckbox = (field) => {
    // console.log(!field.value)
    setValue('productBrandName', "Generic");
    setBrandValue(!field.value)
  }
  const handleProductIDCheckbox = (field) => {
    console.log("id", !field.value)

    // setValue('productID', "No Product ID");
    // setValue('productSelectcode', "");
    setproductIDNotValue(!field.value)
  }
  const validateproductID = (value) => {
    if (!value) {
      if (!value && productIDNotValue) {
        return true;
      }
      return false
    }
    return true;
  };
  return (

    <div>



      {
        (formComponents1) && (


          <div>
            {/* Product Type,Product Name,Variations,Brand Name,Product Id */}
            <div className="row">
              <Controller
                control={control}

                name='productType'
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                      <label htmlFor="productType" className="labelbold">
                        Product Type
                      </label>
                    </div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <h6>{productTypestate}</h6>
                      <TextField
                        id="productType"
                        type='text'
                        placeholder="Product Type"
                        variant="outlined"
                        style={{ width: "100%", display: "none" }}
                        InputProps={{
                          readOnly: true,
                        }}
                        {...field}
                      />
                    </div>
                  </>
                )}
              />
            </div>
            <div className="row" style={{ marginTop: "10px" }}>
              <Controller
                control={control}
                name='productName'
                rules={{
                  required: "Product Name is required",

                }}
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                      <label htmlFor="productName" className="labelbold">
                        * Product Name
                      </label>
                    </div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <TextField
                        id="productName"
                        placeholder="product Name"
                        variant="outlined"
                        style={{ width: "100%" }}
                        {...field}
                        error={Boolean(errors.productName)}
                      />
                    </div>
                  </>
                )}
              />
            </div>


            <div className="row" style={{ marginTop: "10px" }}>
              <Controller
                control={control}
                name='productBrandName'
                rules={{
                  required: "Brand Name is required",

                }}
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                      <label htmlFor="productBrandName" className="labelbold">
                        * Brand Name
                      </label>
                    </div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <TextField
                        id="productBrandName"
                        placeholder="Brand Name"
                        variant="outlined"
                        style={{ width: "100%" }}
                        {...field}
                        error={Boolean(errors.productBrandName)}
                        disabled={brandValue}
                      />
                    </div>
                  </>
                )}
              />
            </div>
            <div className="row" >
              <Controller
                control={control}
                name="productBrandNot"

                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 text-end"></div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      {/* <div className="d-flex align-items-center">
                        <Checkbox
                          {...field}
                          color="primary"
                        />
                        <InputLabel htmlFor="productBrandNot">
                          This product does not have a brand name
                        </InputLabel>
                      </div> */}

                      <FormControlLabel
                        control={
                          <Checkbox
                            {...field}
                            color="primary"
                            checked={field.value}
                            onChange={(e) => {
                              field.onChange(e);
                              handleBrandCheckbox({ ...field });
                            }}

                          />
                        }
                        label=" This product does not have a brand name"
                      />
                    </div>

                  </>
                )}
              />
            </div>
            <div className="row" style={{ marginTop: "10px" }}>
              <Controller
                control={control}
                name="productID"
                rules={{
                  validate: validateproductID,

                }}
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                      <label className="labelbold mb-1">Product Id</label>
                    </div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <TextField
                        id="productID"
                        placeholder="5279173125000"
                        {...field}
                        variant="outlined"
                        // error={Boolean(errors.productID)}
                        error={Boolean(productIDNotValue ? productIDNotValue : errors.productID)}
                        style={{ width: "100%" }}
                        // value={productIDNotValue ? "" : field.value}
                        disabled={productIDNotValue}
                      />
                    </div>

                  </>
                )}
              />
            </div>
            <div className="row" style={{ marginTop: "10px" }}>
              <Controller
                control={control}
                name="productSelectcode"
                rules={{
                  validate: validateproductID,

                }}
                // rules={{
                //   required: "productSelectcode is required",
                // }}
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 "></div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <TextField
                        id="productSelectcode-select"
                        variant="outlined"
                        select
                        style={{ width: "100%" }}
                        // value={productIDNotValue ? "" : field.value}
                        disabled={productIDNotValue}
                        label="-Select-"
                        {...field}
                        error={Boolean(productIDNotValue ? false : errors.profession)}


                      >
                        <MenuItem value="">-Select-</MenuItem>
                        <MenuItem value="EAN">EAN</MenuItem>
                        <MenuItem value="GCID">GCID</MenuItem>
                        <MenuItem value="GTIN">GTIN</MenuItem>
                        <MenuItem value="UPC">UPC</MenuItem>
                        <MenuItem value="ASIN">ASIN</MenuItem>
                      </TextField>
                    </div>

                  </>
                )}
              />
            </div>

            <div className="row" >
              <Controller
                control={control}
                name="productIdNot"

                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 "></div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      {/* <div className="d-flex align-items-center">

                        <Checkbox
                          {...field}
                          color="primary"
                        />
                        <InputLabel htmlFor="productIdNot">
                          i do not have a Product Id
                        </InputLabel>
                      </div> */}

                      <FormControlLabel
                        control={
                          <Checkbox
                            {...field}
                            color="primary"
                            checked={field.value}
                            onChange={(e) => {
                              field.onChange(e);
                              handleProductIDCheckbox({ ...field });
                            }}

                          />
                        }
                        label="  i do not have a Product Id"
                      />
                    </div>
                  </>
                )}
              />
            </div>

          </div>
        )
      }
      {
        (formComponents2) && (
          <div>
            {/* Product Type,Item Name (aka Title),Variations,Brand Name,Product Id */}
            <div className="row">
              <Controller
                control={control}
                rules={{
                  required: "Product Type is required",
                }}
                name='productType'
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                      <label htmlFor="itemname" className="labelbold">
                        Product Type
                      </label>
                    </div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <h6>{productTypestate}</h6>
                      <TextField
                        id="productType"
                        type='text'
                        placeholder="Product Type"
                        variant="outlined"
                        style={{ width: "100%", display: "none" }}
                        InputProps={{
                          readOnly: true,
                        }}
                        {...field}
                        error={Boolean(errors.productType)}
                      />
                    </div>
                    {/* <button type="button" onClick={() => handleGetValue({ ...field })}>ss</button> */}
                  </>
                )}
              />
            </div>
            <div className="row" style={{ marginTop: "10px" }}>
              <Controller
                control={control}
                name='itemName'
                rules={{
                  required: "Item Name is required",

                }}
                render={({ field }) => (
                  <>

                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                      <label htmlFor="itemname" className="labelbold">
                        *Item Name (aka Title)
                      </label>
                    </div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <TextField
                        id="itemName"
                        placeholder="Item Name"
                        variant="outlined"
                        style={{ width: "100%" }}
                        {...field}
                        error={Boolean(errors.itemName)}
                      />
                    </div>
                  </>

                )}
              />
            </div>

            <div className="row">
              <Controller
                control={control}
                name='productBrandName'
                rules={{
                  required: "Brand Name is required",

                }}
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                      <label htmlFor="productBrandName" className="labelbold">
                        * Brand Name
                      </label>
                    </div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <TextField
                        id="productBrandName"
                        placeholder="Brand Name"
                        variant="outlined"
                        style={{ width: "100%" }}
                        {...field}
                        error={Boolean(errors.productBrandName)}
                      />
                    </div>
                  </>
                )}
              />
            </div>
            <div className="row">
              <Controller
                control={control}
                name="productBrandNot"

                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 text-end"></div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <div className="d-flex align-items-center">
                        <Checkbox
                          {...field}
                          color="primary"
                        />
                        <InputLabel htmlFor="productBrandNot">
                          This product does not have a brand name
                        </InputLabel>
                      </div>
                    </div>

                  </>
                )}
              />
            </div>
            <div className="row" style={{ marginTop: "10px" }}>
              <Controller
                control={control}
                name="productID"
                rules={{
                  required: 'product id is required',
                  pattern: {
                    value: new RegExp('^[0-9]+$'),
                    message: "not a valid formate"
                  }
                }}
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                      <label className="labelbold mb-1">Product Id</label>
                    </div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <TextField
                        id="productID"
                        placeholder="5279173125000"
                        {...field}
                        variant="outlined"
                        error={Boolean(errors.productID)}
                        style={{ width: "100%" }}
                      />
                    </div>

                  </>
                )}
              />
            </div>
            <div className="row" style={{ marginTop: "10px" }}>
              <Controller
                control={control}
                name="productSelectcode"
                rules={{
                  required: "productSelectcode is required",
                }}
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 "></div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <TextField
                        id="productSelectcode-select"
                        variant="outlined"
                        select
                        style={{ width: "100%" }}
                        label="-Select-"
                        {...field}
                        error={Boolean(errors.profession)}

                      >
                        <MenuItem value="">-Select-</MenuItem>
                        <MenuItem value="EAN">EAN</MenuItem>
                        <MenuItem value="GCID">GCID</MenuItem>
                        <MenuItem value="GTIN">GTIN</MenuItem>
                        <MenuItem value="UPC">UPC</MenuItem>
                        <MenuItem value="ASIN">ASIN</MenuItem>
                      </TextField>
                    </div>

                  </>
                )}
              />
            </div>

            <div className="row">
              <Controller
                control={control}
                name="productIdNot"

                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 "></div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <div className="d-flex align-items-center">

                        <Checkbox
                          {...field}
                          color="primary"
                        />
                        <InputLabel htmlFor="productIdNot">
                          i do not have a Product Id
                        </InputLabel>
                      </div>

                    </div>
                  </>
                )}
              />
            </div>
          </div>
        )
      }
      {
        (formComponents3) && (
          <>
            {/* Product Type,Item Name (aka Title),Variations,Brand Name,Product Id */}
            <div className="row">
              <Controller
                control={control}
                rules={{
                  required: "Product Type is required",
                }}
                name='productType'
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                      <label htmlFor="itemname" className="labelbold">
                        Product Type
                      </label>
                    </div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <h6>{productTypestate}</h6>
                      <TextField
                        id="productType"
                        type='text'
                        placeholder="Product Type"
                        variant="outlined"
                        style={{ width: "100%", display: "none" }}
                        InputProps={{
                          readOnly: true,
                        }}
                        {...field}
                        error={Boolean(errors.productType)}
                      />
                    </div>
                    {/* <button type="button" onClick={() => handleGetValue({ ...field })}>ss</button> */}
                  </>
                )}
              />
            </div>
            <div className="row" style={{ marginTop: "10px" }}>
              <Controller
                control={control}
                name='itemName'
                rules={{
                  required: "Item Name is required",
                }}
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                      <label htmlFor="itemname" className="labelbold">
                        *Item Name (aka Title)
                      </label>
                    </div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <TextField
                        id="itemName"
                        placeholder="Item Name"
                        variant="outlined"
                        style={{ width: "100%" }}
                        {...field}
                        error={Boolean(errors.itemName)}
                      />
                    </div>
                  </>
                )}
              />
            </div>

            <div className="row">
              <Controller
                control={control}
                name='productBrandName'
                rules={{
                  required: "Brand Name is required",

                }}
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                      <label htmlFor="productBrandName" className="labelbold">
                        * Brand Name
                      </label>
                    </div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <TextField
                        id="productBrandName"
                        placeholder="Brand Name"
                        variant="outlined"
                        style={{ width: "100%" }}
                        {...field}
                        error={Boolean(errors.productBrandName)}
                      />
                    </div>
                  </>
                )}
              />
            </div>
            <div className="row">
              <Controller
                control={control}
                name="productBrandNot"

                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 text-end"></div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <div className="d-flex align-items-center">
                        <Checkbox
                          {...field}
                          color="primary"
                        />
                        <InputLabel htmlFor="productBrandNot">
                          This product does not have a brand name
                        </InputLabel>
                      </div>
                    </div>

                  </>
                )}
              />
            </div>
            <div className="row" style={{ marginTop: "10px" }}>
              <Controller
                control={control}
                name="productID"
                rules={{
                  required: 'product id is required',
                  pattern: {
                    value: new RegExp('^[0-9]+$'),
                    message: "not a valid formate"
                  }
                }}
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                      <label className="labelbold mb-1">Product Id</label>
                    </div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <TextField
                        id="productID"
                        placeholder="5279173125000"
                        {...field}
                        variant="outlined"
                        error={Boolean(errors.productID)}
                        style={{ width: "100%" }}
                      />
                    </div>

                  </>
                )}
              />
            </div>
            <div className="row" style={{ marginTop: "10px" }}>
              <Controller
                control={control}
                name="productSelectcode"
                rules={{
                  required: "productSelectcode is required",
                }}
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 "></div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <TextField
                        id="productSelectcode-select"
                        variant="outlined"
                        select
                        style={{ width: "100%" }}
                        label="-Select-"
                        {...field}
                        error={Boolean(errors.profession)}

                      >
                        <MenuItem value="">-Select-</MenuItem>
                        <MenuItem value="EAN">EAN</MenuItem>
                        <MenuItem value="GCID">GCID</MenuItem>
                        <MenuItem value="GTIN">GTIN</MenuItem>
                        <MenuItem value="UPC">UPC</MenuItem>
                        <MenuItem value="ASIN">ASIN</MenuItem>
                      </TextField>
                    </div>

                  </>
                )}
              />
            </div>
          </>
        )
      }
      {
        formComponents4 && (

          <div>
            {/* Product Type,Item Name (aka Title),Variations,Brand Name,Product Id */}
            <div className="row">
              <Controller
                control={control}
                rules={{
                  required: "Item Name is required",
                }}
                name='productType'
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                      <label htmlFor="itemname" className="labelbold">
                        Product Type
                      </label>
                    </div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <h6>{productTypestate}</h6>
                      <TextField
                        id="productType"
                        type='text'
                        placeholder="Product Type"
                        variant="outlined"
                        style={{ width: "100%", display: "none" }}
                        InputProps={{
                          readOnly: true,
                        }}
                        {...field}
                        error={Boolean(errors.productType)}
                      />
                    </div>
                    {/* <button type="button" onClick={() => handleGetValue({ ...field })}>ss</button> */}
                  </>
                )}
              />
            </div>
            <div className="row" style={{ marginTop: "10px" }}>
              <Controller
                control={control}
                name='itemName'
                rules={{
                  required: "Item Name is required",

                }}
                render={({ field }) => (
                  <>

                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                      <label htmlFor="itemname" className="labelbold">
                        *Item Name (aka Title)
                      </label>
                    </div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <TextField
                        id="itemName"
                        placeholder="Item Name"
                        variant="outlined"
                        style={{ width: "100%" }}
                        {...field}
                        error={Boolean(errors.itemName)}
                      />
                    </div>
                  </>

                )}
              />
            </div>

            <div className="row">
              <Controller
                control={control}
                name='productBrandName'
                rules={{
                  required: "Brand Name is required",

                }}
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                      <label htmlFor="productBrandName" className="labelbold">
                        * Brand Name
                      </label>
                    </div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <TextField
                        id="productBrandName"
                        placeholder="Brand Name"
                        variant="outlined"
                        style={{ width: "100%" }}
                        {...field}
                        error={Boolean(errors.productBrandName)}
                      />
                    </div>
                  </>
                )}
              />
            </div>
            <div className="row">
              <Controller
                control={control}
                name="productBrandNot"

                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 text-end"></div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <div className="d-flex align-items-center">
                        <Checkbox
                          {...field}
                          color="primary"
                        />
                        <InputLabel htmlFor="productBrandNot">
                          This product does not have a brand name
                        </InputLabel>
                      </div>
                    </div>

                  </>
                )}
              />
            </div>
            <div className="row" style={{ marginTop: "10px" }}>
              <Controller
                control={control}
                name="productID"
                rules={{
                  required: 'product id is required',
                  pattern: {
                    value: new RegExp('^[0-9]+$'),
                    message: "not a valid formate"
                  }
                }}
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                      <label className="labelbold mb-1">Product Id</label>
                    </div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <TextField
                        id="productID"
                        placeholder="5279173125000"
                        {...field}
                        variant="outlined"
                        error={Boolean(errors.productID)}
                        style={{ width: "100%" }}
                      />
                    </div>

                  </>
                )}
              />
            </div>
            <div className="row" style={{ marginTop: "10px" }}>
              <Controller
                control={control}
                name="productSelectcode"
                rules={{
                  required: "productSelectcode is required",
                }}
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 "></div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <TextField
                        id="productSelectcode-select"
                        variant="outlined"
                        select
                        style={{ width: "100%" }}
                        label="-Select-"
                        {...field}
                        error={Boolean(errors.profession)}

                      >
                        <MenuItem value="">-Select-</MenuItem>
                        <MenuItem value="EAN">EAN</MenuItem>
                        <MenuItem value="GCID">GCID</MenuItem>
                        <MenuItem value="GTIN">GTIN</MenuItem>
                        <MenuItem value="UPC">UPC</MenuItem>
                        <MenuItem value="ASIN">ASIN</MenuItem>
                      </TextField>
                    </div>

                  </>
                )}
              />
            </div>

            <div className="row">
              <Controller
                control={control}
                name="productIdNot"

                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 "></div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <div className="d-flex align-items-center">

                        <Checkbox
                          {...field}
                          color="primary"
                        />
                        <InputLabel htmlFor="productIdNot">
                          i do not have a Product Id
                        </InputLabel>
                      </div>

                    </div>
                  </>
                )}
              />
            </div>
          </div>

        )
      }
      {
        (formComponents5) && (
          <div>
            {/* Product Type,Item Name (aka Title),Variations-11,Brand Name,Product Id */}
            <div className="row">
              <Controller
                control={control}
                rules={{
                  required: "Product Type is required",
                }}
                name='productType'
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                      <label htmlFor="itemname" className="labelbold">
                        Product Type
                      </label>
                    </div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <h6>{productTypestate}</h6>
                      <TextField
                        id="productType"
                        type='text'
                        placeholder="Product Type"
                        variant="outlined"
                        style={{ width: "100%", display: "none" }}
                        InputProps={{
                          readOnly: true,
                        }}
                        {...field}
                        error={Boolean(errors.productType)}
                      />
                    </div>
                    {/* <button type="button" onClick={() => handleGetValue({ ...field })}>ss</button> */}
                  </>
                )}
              />
            </div>
            <div className="row" style={{ marginTop: "10px" }}>
              <Controller
                control={control}
                name='itemName'
                rules={{
                  required: "Item Name is required",

                }}
                render={({ field }) => (
                  <>

                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                      <label htmlFor="itemname" className="labelbold">
                        *Item Name (aka Title)
                      </label>
                    </div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <TextField
                        id="itemName"
                        placeholder="Item Name"
                        variant="outlined"
                        style={{ width: "100%" }}
                        {...field}
                        error={Boolean(errors.itemName)}
                      />
                    </div>
                  </>

                )}
              />
            </div>

            <div className="row">
              <Controller
                control={control}
                name='productBrandName'
                rules={{
                  required: "Brand Name is required",

                }}
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                      <label htmlFor="productBrandName" className="labelbold">
                        * Brand Name
                      </label>
                    </div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <TextField
                        id="productBrandName"
                        placeholder="Brand Name"
                        variant="outlined"
                        style={{ width: "100%" }}
                        {...field}
                        error={Boolean(errors.productBrandName)}
                      />
                    </div>
                  </>
                )}
              />
            </div>
            <div className="row">
              <Controller
                control={control}
                name="productBrandNot"

                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 text-end"></div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <div className="d-flex align-items-center">
                        <Checkbox
                          {...field}
                          color="primary"
                        />
                        <InputLabel htmlFor="productBrandNot">
                          This product does not have a brand name
                        </InputLabel>
                      </div>
                    </div>

                  </>
                )}
              />
            </div>
            <div className="row" style={{ marginTop: "10px" }}>
              <Controller
                control={control}
                name="productID"
                rules={{
                  required: 'product id is required',
                  pattern: {
                    value: new RegExp('^[0-9]+$'),
                    message: "not a valid formate"
                  }
                }}
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 text-end">
                      <label className="labelbold mb-1">Product Id</label>
                    </div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <TextField
                        id="productID"
                        placeholder="5279173125000"
                        {...field}
                        variant="outlined"
                        error={Boolean(errors.productID)}
                        style={{ width: "100%" }}
                      />
                    </div>

                  </>
                )}
              />
            </div>
            <div className="row" style={{ marginTop: "10px" }}>
              <Controller
                control={control}
                name="productSelectcode"
                rules={{
                  required: "productSelectcode is required",
                }}
                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 "></div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <TextField
                        id="productSelectcode-select"
                        variant="outlined"
                        select
                        style={{ width: "100%" }}
                        label="-Select-"
                        {...field}
                        error={Boolean(errors.profession)}

                      >
                        <MenuItem value="">-Select-</MenuItem>
                        <MenuItem value="EAN">EAN</MenuItem>
                        <MenuItem value="GCID">GCID</MenuItem>
                        <MenuItem value="GTIN">GTIN</MenuItem>
                        <MenuItem value="UPC">UPC</MenuItem>
                        <MenuItem value="ASIN">ASIN</MenuItem>
                      </TextField>
                    </div>

                  </>
                )}
              />
            </div>

            <div className="row">
              <Controller
                control={control}
                name="productIdNot"

                render={({ field }) => (
                  <>
                    <div className="col-4 col-sm-3 col-lg-2 "></div>
                    <div className="col-8 col-sm-7 col-lg-4">
                      <div className="d-flex align-items-center">

                        <Checkbox
                          {...field}
                          color="primary"
                        />
                        <InputLabel htmlFor="productIdNot">
                          i do not have a Product Id
                        </InputLabel>
                      </div>

                    </div>
                  </>
                )}
              />
            </div>
          </div>
        )
      }
      {
        formComponents6 && (
          <>
            {/* Product Type,Item Name (aka Title),Variations-7,Brand Name,Product Id */}
            <div>
              <div className="row">
                <Controller
                  control={control}
                  rules={{
                    required: "Product Type is required",
                  }}
                  name='productType'
                  render={({ field }) => (
                    <>
                      <div className="col-4 col-sm-3 col-lg-2 text-end">
                        <label htmlFor="itemname" className="labelbold">
                          Product Type
                        </label>
                      </div>
                      <div className="col-8 col-sm-7 col-lg-4">
                        <h6>{productTypestate}</h6>
                        <TextField
                          id="productType"
                          type='text'
                          placeholder="Product Type"
                          variant="outlined"
                          style={{ width: "100%", display: "none" }}
                          InputProps={{
                            readOnly: true,
                          }}
                          {...field}
                          error={Boolean(errors.productType)}
                        />
                      </div>
                      {/* <button type="button" onClick={() => handleGetValue({ ...field })}>ss</button> */}
                    </>
                  )}
                />
              </div>
              <div className="row" style={{ marginTop: "10px" }}>
                <Controller
                  control={control}
                  name='itemName'
                  rules={{
                    required: "Item Name is required",

                  }}
                  render={({ field }) => (
                    <>

                      <div className="col-4 col-sm-3 col-lg-2 text-end">
                        <label htmlFor="itemname" className="labelbold">
                          *Item Name (aka Title)
                        </label>
                      </div>
                      <div className="col-8 col-sm-7 col-lg-4">
                        <TextField
                          id="itemName"
                          placeholder="Item Name"
                          variant="outlined"
                          style={{ width: "100%" }}
                          {...field}
                          error={Boolean(errors.itemName)}
                        />
                      </div>
                    </>

                  )}
                />
              </div>

              <div className="row">
                <Controller
                  control={control}
                  name='productBrandName'
                  rules={{
                    required: "Brand Name is required",

                  }}
                  render={({ field }) => (
                    <>
                      <div className="col-4 col-sm-3 col-lg-2 text-end">
                        <label htmlFor="productBrandName" className="labelbold">
                          * Brand Name
                        </label>
                      </div>
                      <div className="col-8 col-sm-7 col-lg-4">
                        <TextField
                          id="productBrandName"
                          placeholder="Brand Name"
                          variant="outlined"
                          style={{ width: "100%" }}
                          {...field}
                          error={Boolean(errors.productBrandName)}
                        />
                      </div>
                    </>
                  )}
                />
              </div>
              <div className="row">
                <Controller
                  control={control}
                  name="productBrandNot"

                  render={({ field }) => (
                    <>
                      <div className="col-4 col-sm-3 col-lg-2 text-end"></div>
                      <div className="col-8 col-sm-7 col-lg-4">
                        <div className="d-flex align-items-center">
                          <Checkbox
                            {...field}
                            color="primary"
                          />
                          <InputLabel htmlFor="productBrandNot">
                            This product does not have a brand name
                          </InputLabel>
                        </div>
                      </div>

                    </>
                  )}
                />
              </div>
              <div className="row" style={{ marginTop: "10px" }}>
                <Controller
                  control={control}
                  name="productID"
                  rules={{
                    required: 'product id is required',
                    pattern: {
                      value: new RegExp('^[0-9]+$'),
                      message: "not a valid formate"
                    }
                  }}
                  render={({ field }) => (
                    <>
                      <div className="col-4 col-sm-3 col-lg-2 text-end">
                        <label className="labelbold mb-1">Product Id</label>
                      </div>
                      <div className="col-8 col-sm-7 col-lg-4">
                        <TextField
                          id="productID"
                          placeholder="5279173125000"
                          {...field}
                          variant="outlined"
                          error={Boolean(errors.productID)}
                          style={{ width: "100%" }}
                        />
                      </div>

                    </>
                  )}
                />
              </div>
              <div className="row" style={{ marginTop: "10px" }}>
                <Controller
                  control={control}
                  name="productSelectcode"
                  rules={{
                    required: "productSelectcode is required",
                  }}
                  render={({ field }) => (
                    <>
                      <div className="col-4 col-sm-3 col-lg-2 "></div>
                      <div className="col-8 col-sm-7 col-lg-4">
                        <TextField
                          id="productSelectcode-select"
                          variant="outlined"
                          select
                          style={{ width: "100%" }}
                          label="-Select-"
                          {...field}
                          error={Boolean(errors.profession)}

                        >
                          <MenuItem value="">-Select-</MenuItem>
                          <MenuItem value="EAN">EAN</MenuItem>
                          <MenuItem value="GCID">GCID</MenuItem>
                          <MenuItem value="GTIN">GTIN</MenuItem>
                          <MenuItem value="UPC">UPC</MenuItem>
                          <MenuItem value="ASIN">ASIN</MenuItem>
                        </TextField>
                      </div>

                    </>
                  )}
                />
              </div>

              <div className="row">
                <Controller
                  control={control}
                  name="productIdNot"

                  render={({ field }) => (
                    <>
                      <div className="col-4 col-sm-3 col-lg-2 "></div>
                      <div className="col-8 col-sm-7 col-lg-4">
                        <div className="d-flex align-items-center">

                          <Checkbox
                            {...field}
                            color="primary"
                          />
                          <InputLabel htmlFor="productIdNot">
                            i do not have a Product Id
                          </InputLabel>
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
      {/* let productVar = ["color", "material type", "item weight", "number of items", "wattage", "voltage", "model number", "shape", "capacity", "manufacture part number"] */}
      {/* {productVar.map((variation, index) => {
                    const nameWithoutSpaces = variation.replace(/ /g, '_');
                    return <div className="d-flex flex-wrap">
                        <Controller
                            control={control}
                            name={`${nameWithoutSpaces}Variation`}
                            key={index}
                            render={({ field }) => (
                                <>
                                    <div className="d-flex align-items-center">
                                        <Checkbox
                                            {...field}
                                            color="primary"
                                        />
                                        <InputLabel htmlFor={`${nameWithoutSpaces}Variation`}>
                                            {variation}
                                        </InputLabel>
                                    </div>
                                </>
                            )}
                        />
                    </div>
                })} */}
    </div>

  )
}

export default ProductIdentity

