
import React, { useEffect } from 'react'
import { Button } from "@mui/material";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GrFormNext } from 'react-icons/gr'
import { useDispatch } from 'react-redux';
import {
  desertProduct, miniCoolersProduct, otherAirCoolersProduct, portableCoolersProduct, towerCoolersProduct, windowCoolersProduct,
  airIonizersProduct, carAirPurifierProduct, charcoalAirPurifierProduct, electroAirPurifierProduct, hepaAirPurifierProduct, otherAirPurifierProduct,
  portableAirPurifierProduct, ulpaAirPurifierProduct, otherDehumidifiersProduct, otherDeodorisersProduct, blowerFansProduct, boxFansProduct,
  ceilingFansProduct, clipFansProduct, drumFansProduct, exhaustFansProduct, floorFansProduct, otherFansProduct, pedestalFansProduct, personalFansProduct,
  tableFansProduct, towerFansProduct, vortexActionFansProduct, wallMountedFansProduct, windowFansProduct, otherHumidifierProduct, singleRoomHumidifierProduct,
  wholeHouseHumidifierProduct, otherHeatNCoolingProduct, airPuriPartNAccessProduct, dehumidPartNAccessProduct, evapCoolerPartNAccessProduct,
  fanPartNAccessProduct, heaterPartNAccessProduct, humidiPartNAccessProduct, replaceBelthumidiProduct, otherPartNAccessProduct,electricHeatersProduct,
  fanHeatersProduct,halogenHeatersProduct,heatConvertorsProduct,keroseneSpaceHeatersProduct,naturalgasSpaceHeatersProduct,otherRoomHeatersProduct,
  propaneSpaceHeatersProduct,immersionRodsProduct,storageWaterHeatersProduct,instantWaterHeatersProduct
} from '../../../Redux/actions/AddProductAction';


const CategoryHierarchy = () => {

  const dispatch = useDispatch()

  const [activeCategory, setActiveCategory] = useState(false);
  const [categoryTitle, setCategoryTitle] = useState("Please select...");
  const [subCategoryTitle, setSubCategoryTitle] = useState("");
  const [thirdCategoryTitle, setThirdCategoryTitle] = useState("");
  const [activeItems, setactiveItems] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState(false);
  const [activeThirdSubCategory, setActiveThirdSubCategory] = useState(false);
  const [activebtn, setActivebtn] = useState(false)


  const [listItem, setListItem] = useState([])
  const [sublistItem, setSubListItem] = useState([])
  const [subofsublistItem, setSubOfSubListItem] = useState([])
  const [thirdsublistItem, setThirdsublistItem] = useState([])
  const [hidesubCategory, sethidesubCategory] = useState(false)
  const [hideCategory, sethideCategory] = useState(false)


  useEffect(() => {

    fetch("https://upset-cooks-remain.loca.lt/ecommerce/category/getMainCategories")
      .then((res) => res.json())
      .then((data) => {
        setListItem(data)
        console.log("first", data)

      })
      .catch(error => console.error('Error fetching items:', error))

  }, [])



  const handleSubCategory = async (item) => {
    try {
      const response = await fetch(`https://upset-cooks-remain.loca.lt/ecommerce/category/getChildCategories?browsePath=${item.browsePath}/${item.categoryId}`);
      const items = await response.json();
      setSubListItem(items);
      setSubOfSubListItem([]); // Clear subofsublistItem
      setThirdsublistItem([]); // Clear thirdsublistItem
      setactiveItems(item.categoryId)
      setActiveCategory(true);
      setActiveSubCategory(true);
      setActiveThirdSubCategory(true);
      sethidesubCategory(false)
      sethideCategory(false)
      console.log("second", items)
    } catch (error) {
      console.error('Error fetching subcategories:', error);
    }
    setCategoryTitle(item.label)
  }
  const nextIcon = <GrFormNext className="navigate-next-icon" />;
  const handleSubOfSubcategory = async (subItem) => {
    try {
      const response = await fetch(`https://upset-cooks-remain.loca.lt/ecommerce/category/getChildCategories?browsePath=${subItem.browsePath}/${subItem.categoryId}`);
      const subitems = await response.json();
      setSubOfSubListItem(subitems);

      setThirdsublistItem([]); // Clear thirdsublistItem
      setActiveSubCategory(true);
      setActiveThirdSubCategory(false);
      sethideCategory(true)
      console.log("third", subitems)
    } catch (error) {
      console.error('Error fetching sub-subcategories:', error);
    }

    setSubCategoryTitle(
      <>
        {nextIcon} {subItem.label}
      </>
    );
  }

  const handleThirdSubcategory = async (thirdsubItem) => {
    try {
      const response = await fetch(`https://upset-cooks-remain.loca.lt/ecommerce/category/getChildCategories?browsePath=${thirdsubItem.browsePath}/${thirdsubItem.categoryId}`);

      if (response.ok) {
        const thirditems = await response.json();
        setThirdsublistItem(thirditems);

        sethidesubCategory(true)
        setActiveThirdSubCategory(true);
        console.log("fourth", thirditems)
      } else {
        setActivebtn(true)
      }

    } catch (error) {
      console.error('Error fetching third-level subcategories:', error);
    }
    setThirdCategoryTitle(
      <>
        {nextIcon} {thirdsubItem.label}
      </>
    )
  }
  const navigate = useNavigate()
  const handleCategoryform = (cateItem) => {
    console.log("handleform", cateItem)


    // Air Cooler category list item
    if (cateItem.categoryId === "8641217031") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(desertProduct())
    }
    else if (cateItem.categoryId === "23034524031") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(miniCoolersProduct())
    }
    else if (cateItem.categoryId === "5130993031") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(otherAirCoolersProduct())
    }
    else if (cateItem.categoryId === "8641218031") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(portableCoolersProduct())
    }
    else if (cateItem.categoryId === "8641219031") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(towerCoolersProduct())
    }
    else if (cateItem.categoryId === "23034523031") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(windowCoolersProduct())
    }

    // Air Purifiers category list item
    if (cateItem.categoryId === "9290351031") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(airIonizersProduct())
    }
    if (cateItem.categoryId === "10279697031") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(carAirPurifierProduct())
    }
    if (cateItem.categoryId === "9290352031") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(charcoalAirPurifierProduct())
    }
    if (cateItem.categoryId === "9290353031") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(electroAirPurifierProduct())
    }
    if (cateItem.categoryId === "9290354031") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(hepaAirPurifierProduct())
    }
    if (cateItem.categoryId === "5403404031") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(otherAirPurifierProduct())
    }
    if (cateItem.categoryId === "9290355031") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(portableAirPurifierProduct())
    }
    if (cateItem.categoryId === "9290356031") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(ulpaAirPurifierProduct())
    }

    //Dehumidifiers category list item
    if (cateItem.categoryId === "5403405031") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(otherDehumidifiersProduct())
    }

    //Deodorisers category list item
    if (cateItem.categoryId === "51396498031") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(otherDeodorisersProduct())
    }

    //Fans category list item
    if (cateItem.categoryId === "51396515031") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(blowerFansProduct())
    }
    else if (cateItem.categoryId === "51396510031") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(boxFansProduct())
    }
    else if (cateItem.categoryId === "4369221031") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(ceilingFansProduct())
    }
    else if (cateItem.categoryId === "51396517031") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(clipFansProduct())
    }
    else if (cateItem.categoryId === "51396508031") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(drumFansProduct())
    }
    else if (cateItem.categoryId === "8641216031") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(exhaustFansProduct())
    }
    else if (cateItem.categoryId === "51396512031") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(floorFansProduct())
    }
    else if (cateItem.categoryId === "2083427031") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(otherFansProduct())
    }
    else if (cateItem.categoryId === "4369223031") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(pedestalFansProduct())
    }
    else if (cateItem.categoryId === "51396514031") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(personalFansProduct())
    }
    else if (cateItem.categoryId === "4369222031") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(tableFansProduct())
    }
    else if (cateItem.categoryId === "4369224031") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(towerFansProduct())
    }
    else if (cateItem.categoryId === "51396519031") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(vortexActionFansProduct())
    }
    else if (cateItem.categoryId === "51396521031") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(wallMountedFansProduct())
    }
    else if (cateItem.categoryId === "51396507031") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(windowFansProduct())
    }

    //Humidifier category list item
    if (cateItem.categoryId === "Other Humidifier") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(otherHumidifierProduct())
    }
    else if (cateItem.categoryId === "single room Humidifier") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(singleRoomHumidifierProduct())
    }
    else if (cateItem.categoryId === "whole house Humidifier") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(wholeHouseHumidifierProduct())
    }

    //Other(Heating & Cooling) category list item
    if (cateItem.categoryId === "Other(Heating & Cooling)") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(otherHeatNCoolingProduct())
    }

    // Parts & Accessories category list item
    if (cateItem.categoryId === "Other(Air Purifier parts & Accessories)") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(airPuriPartNAccessProduct())
    }
    else if (cateItem.categoryId === "Dehumidifier Parts & Accessories") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(dehumidPartNAccessProduct())
    }
    else if (cateItem.categoryId === "Evaporative Cooler Parts & Accessories") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(evapCoolerPartNAccessProduct())
    }
    else if (cateItem.categoryId === " Fan Parts & Accessories") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(fanPartNAccessProduct())
    }
    else if (cateItem.categoryId === "Heater Parts & Accessories") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(heaterPartNAccessProduct())
    }
    else if (cateItem.categoryId === " Other (Humidifer Parts & Accessories)") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(humidiPartNAccessProduct())
    }
    else if (cateItem.categoryId === "Replacement Belts") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(replaceBelthumidiProduct())
    }
    else if (cateItem.categoryId === "Other (Parts & Accessories)") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(otherPartNAccessProduct())
    }

    //Room Heater category list item
    if (cateItem.categoryId === "Electric Heaters") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(electricHeatersProduct())
    }
    else if (cateItem.categoryId === "Fan Heater") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(fanHeatersProduct())
    }
    else if (cateItem.categoryId === "Halogen Heater") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(halogenHeatersProduct())
    }
    else if (cateItem.categoryId === "Heat Convertors") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(heatConvertorsProduct())
    }
    else if (cateItem.categoryId === "Kerosene Space Heaters") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(keroseneSpaceHeatersProduct())
    }
    else if (cateItem.categoryId === "Natural Gas Space Heaters") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(naturalgasSpaceHeatersProduct())
    }
    else if (cateItem.categoryId === "Other (Room Heaters)") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(otherRoomHeatersProduct())
    }
    else if (cateItem.categoryId === "Propane Space Heaters") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(propaneSpaceHeatersProduct())
    }

    //Water Heaters & Geysers category list item
    if (cateItem.categoryId === "Immersion Rods") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(immersionRodsProduct())
    }
    else if (cateItem.categoryId === "Instant Water Heaters") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(instantWaterHeatersProduct())
    }
    else if (cateItem.categoryId === "Storage Water Heaters") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(storageWaterHeatersProduct())
    }
  }

  return (

    <div className='add-product-category-list'>
      <div className='add-product-category-list-item-title'>
        <p>{categoryTitle} </p>
        <p>{subCategoryTitle}</p>
        <p>{thirdCategoryTitle}</p>
      </div>
      <div>
        <div className='add-product-category-list-items-parent-box'>
          <div className='add-product-category-list-items-box'>
            {listItem.map((item) => (
              <div className='add-product-category-list-items' key={item.categoryId}>
                <div
                  style={{ width: "100%" }}
                  className={`d-flex justify-content-between align-items-center px-3 product-list-item-name ${activeItems === item.categoryId ? 'active' : ''}`}
                  onClick={() => handleSubCategory(item)}
                >
                  <p>{item.label}</p>
                </div>

              </div>
            ))}
            {activeCategory && (
              <div className='add-product-category-list-items-box2' >
                {sublistItem.map((items) => (
                  <>
                    <div style={{ width: "100%" }} className={hideCategory ? "px-3 product-list-item-name d-none" : "px-3 product-list-item-name"} key={items.categoryId}
                      onClick={() => handleSubOfSubcategory(items)}
                    >
                      <p>{items.label}</p>
                    </div>

                  </>
                ))}
              </div>
            )}
            {activeSubCategory && (<div className='add-product-category-list-items-box2' >
              {subofsublistItem.map((subofsubItems) => (
                <>
                  <div style={{ width: "100%" }} className={hidesubCategory ? "px-3 product-list-item-name d-none" : "px-3 product-list-item-name"} key={subofsubItems.categoryId}
                    onClick={() => handleThirdSubcategory(subofsubItems)}
                  >
                    <p>{subofsubItems.label}</p>
                    {activebtn ? (<Button type="button" variant="contained" size='small' onClick={() => handleCategoryform(subofsubItems)}>Select</Button>) : ""}
                  </div>

                </>
              ))}
            </div>)}
            {activeThirdSubCategory && (<div className='add-product-category-list-items-box2' >
              {thirdsublistItem.map((thirdsubItems) => (
                <>
                  <div style={{ width: "100%" }} className='px-3 product-list-item-name' key={thirdsubItems.categoryId}>
                    <p>{thirdsubItems.label}</p>
                    <Button type="button" variant="contained" size='small' onClick={() => handleCategoryform(thirdsubItems)}>Select</Button>
                  </div>
                </>
              ))}
            </div>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryHierarchy


// https://sellercentral.amazon.in/abis/listing/create/product_identity?itemType&productType=AIR_COOLER&newCategory=5122348031%2F5122349031%2F2083423031%2F5130993031%2F8641217031&displayPath=Appliances%2FHeating+%26+Cooling%2FAir+Coolers%2FDesert&recommendedBrowseNodeId=8641217031&ref_=xx_catadd_dnav_xx
// https://sellercentral.amazon.in/abis/listing/create/product_identity?itemType&productType=AIR_COOLER&newCategory=5122348031%2F5122349031%2F2083423031%2F5130993031%2F23034524031&displayPath=Appliances%2FHeating+%26+Cooling%2FAir+Coolers%2FMini&recommendedBrowseNodeId=23034524031&ref_=xx_catadd_dnav_xx
// https://sellercentral.amazon.in/abis/listing/create/product_identity?itemType&productType=LAUNDRY_DETERGENT&newCategory=1571274031%2F1571275031%2F1953111031%2F8360551031&displayPath=Baby%2FBaby+Care%2FBaby+Laundry+Detergents&recommendedBrowseNodeId=8360551031&ref_=xx_catadd_dnav_xx


