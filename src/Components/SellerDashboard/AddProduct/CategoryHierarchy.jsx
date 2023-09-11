
import React, { useEffect } from 'react'
import { Button } from "@mui/material";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GrFormNext } from 'react-icons/gr'
import { useDispatch } from 'react-redux';
import { firstProduct, secondProduct } from '../../../Redux/actions/AddProductAction';


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

    fetch("https://chubby-jokes-float.loca.lt/ecommerce/category/getMainCategories")
      .then((res) => res.json())
      .then((data) => {
        setListItem(data)
        console.log("first", data)

      })
      .catch(error => console.error('Error fetching items:', error))

  }, [])



  const handleSubCategory = async (item) => {
    try {
      const response = await fetch(`https://chubby-jokes-float.loca.lt/ecommerce/category/getChildCategories?browsePath=${item.browsePath}/${item.categoryId}`);
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
      const response = await fetch(`https://chubby-jokes-float.loca.lt/ecommerce/category/getChildCategories?browsePath=${subItem.browsePath}/${subItem.categoryId}`);
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
      const response = await fetch(`https://chubby-jokes-float.loca.lt/ecommerce/category/getChildCategories?browsePath=${thirdsubItem.browsePath}/${thirdsubItem.categoryId}`);

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



    if (cateItem.categoryId === "51396505031") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(firstProduct())
    }
    if (cateItem.categoryId === "51396031") {
      navigate("/sellerdashboard/addproduct/ProductStepper")
      dispatch(secondProduct())
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