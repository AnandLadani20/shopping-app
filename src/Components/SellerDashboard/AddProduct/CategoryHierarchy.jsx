
import React, { useEffect } from 'react'
import { Button } from "@mui/material";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { GrFormNext } from 'react-icons/gr'
import { useDispatch } from 'react-redux';

// import { setAddProductCategories,setDesertCategories,setSelectedCategory } from '../../../ReduxToolKit/Features/AddProductFormSlice';
import { setSelectedCategory } from '../../../ReduxToolKit/Features/AddProductFormSlice';
import { setCategoriesTitlePath } from '../../../ReduxToolKit/Features/CategoriesTitle'

import { setThirdSubCategoriesTitlePath } from '../../../ReduxToolKit/Features/ThirdSubCategoriesTitle'
import authService from './../../../Config/ApiUrl';

const CategoryHierarchy = () => {

  const dispatch = useDispatch()
  const [sublistItem, setSubListItem] = useState([])
  const [activeCategory, setActiveCategory] = useState(false);
  const [categoryTitle, setCategoryTitle] = useState([]);


  const [activeItems, setactiveItems] = useState(null);
  const [hideCategory, sethideCategory] = useState(false)
  const [activebtn, setActivebtn] = useState(false)
  const [listItem, setListItem] = useState([])

  // let firstData = '';
  useEffect(() => {

    fetch(`${authService.newEcommercUrl}/ecommerce/category/getMainCategories`)
      .then((res) => res.json())
      .then((data) => {
        setListItem(data)
        console.log("first", data)
      })
      .catch(error => console.error('Error fetching items:', error))
    console.log("render useEffect", " CategoryHierachy ")
  }, [])


  // const nextIcon = <GrFormNext className="navigate-next-icon" />;

  const nextIcon = <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.00001 1L5.60001 2.5L13 10L5.60001 17.5L7.00001 19L16 10L7.00001 1Z" fill="black"/>
  </svg>
  


  const handleSubCategory = async (item) => {
    dispatch(setCategoriesTitlePath(item.label))
    try {
      const response = await fetch(`${authService.newEcommercUrl}/ecommerce/category/getChildCategories?browsePath=${item.browsePath}/${item.categoryId}`);
      const items = await response.json();

      if (response.ok) {
        setSubListItem(items);
        setActiveCategory(true)
        console.log("second", items)
      }
      else {
        setActivebtn(true)
      }

    } catch (error) {
      console.error('Error fetching subcategories:', error);
    }

    setCategoryTitle((prev) => [...prev, item])
    console.log(categoryTitle)
  }

  const handleTitleCategory = async (item, index) => {
    dispatch(setCategoriesTitlePath(item.label))
    try {
      const response = await fetch(`${authService.newEcommercUrl}/ecommerce/category/getChildCategories?browsePath=${item.browsePath}/${item.categoryId}`);
      const items = await response.json();

      if (response.ok) {
        setSubListItem(items);
        setActiveCategory(true)
        console.log("title", items)
      }
      else {
        setActivebtn(true)
      }

    } catch (error) {
      console.error('Error fetching subcategories:', error);
    }

    setCategoryTitle((prev) => prev.slice(0, index + 1));

  }
  const navigate = useNavigate()

  const handleCategoryform = (cateItem) => {
    dispatch(setThirdSubCategoriesTitlePath(cateItem.label))
    console.log("handleform", cateItem)

    dispatch(setSelectedCategory(cateItem));
    navigate("/sellerdashboard/addproduct/ProductStepper")

  }

  console.log("render", " CategoryHierachy Page")
      
  return (

    <div className='add-product-category-list'>
      <div className='add-product-category-list-item-title'>
        {categoryTitle.length > 0 ? (
          categoryTitle.map((cateTitle, index) => (
            <p key={index} onClick={() => handleTitleCategory(cateTitle, index)}>


              {/* handleTitleCategory */}
              {cateTitle.label}
              {nextIcon}
            </p>
          )
          )) : (
          <p>Please select...</p>
        )}

      </div>
      <div>
        <div className='add-product-category-list-items-parent-box'>
          <div className='add-product-category-list-items-box'>
        
            {listItem.map((item,index) => (
              <div className='add-product-category-list-items' key={index}>
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
              <div className='add-product-category-list-items-box2'>
                {sublistItem.map((items,index) => (
                  <>
                    <div style={{ width: "100%" }} className={hideCategory ? "px-3 product-list-item-name d-none" : "px-3 product-list-item-name"} key={index}
                      onClick={() => handleSubCategory(items)}
                    >
                      <p>{items.label}</p>
                      {activebtn ? (<Button type="button" variant="contained" size='small' onClick={() => handleCategoryform(items)}>Select</Button>) : ""}
                    </div>
                  </>
                ))}
              </div>
            )}
            <Button type="button" variant="contained" size='small' onClick={handleCategoryform}>Select</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryHierarchy