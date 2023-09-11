
import React, { useEffect } from 'react'

import { useState } from 'react';

const CategoryHierarchy = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState(null);
  const [activeThirdSubCategory, setActiveThirdSubCategory] = useState(null);
  const [activeFourthSubCategory, setActiveFourthSubCategory] = useState(null);
  const [listItem, setListItem] = useState([])
  const [sublistItem, setSubListItem] = useState([])
  const [subofsublistItem, setSubOfSubListItem] = useState([])
  const [thirdsublistItem, setThirdsublistItem] = useState([])
  const [fourthsublistItem, setFourthsublistItem] = useState([])

  useEffect(() => {

    fetch("https://ninety-doodles-create.loca.lt/ecommerce/category/getMainCategories")
      .then((res) => res.json())
      .then((data) => {
        setListItem(data)
        console.log(data)

      })
      .catch(error => console.error('Error fetching items:', error))

  }, [])

  useEffect(() => {


  }, [])



  const handleSubCategory = (item) => {
    fetch(`https://ninety-doodles-create.loca.lt/ecommerce/category/getChildCategories?browsePath=${item.browsePath}/${item.categoryId}`)
      .then((response) => response.json())
      .then((items) => {
        setSubListItem(items)
        console.log(items)
      })
    setActiveCategory(item.categoryId === activeCategory ? null : item.categoryId);

  }
  const handleSubOfSubcategory = (items) => {
    fetch(`https://ninety-doodles-create.loca.lt/ecommerce/category/getChildCategories?browsePath=${items.browsePath}/${items.categoryId}`)
      .then((response) => response.json())
      .then((subitems) => {
        setSubOfSubListItem(subitems)
        console.log(subitems)
      })
    setActiveSubCategory(items.categoryId === activeSubCategory ? null : items.categoryId)
  }
  const handleThirdSubcategory = (thirdsubitems) => {
    fetch(`https://ninety-doodles-create.loca.lt/ecommerce/category/getChildCategories?browsePath=${thirdsubitems.browsePath}/${thirdsubitems.categoryId}`)
      .then((response) => response.json())
      .then((thirditems) => {
        setThirdsublistItem(thirditems)
        console.log(thirditems)
      })
    setActiveThirdSubCategory(thirdsubitems.categoryId === activeThirdSubCategory ? null : thirdsubitems.categoryId)
  }
  const handleFourthSubcategory = (fourthsubItems) => {
    fetch(`https://ninety-doodles-create.loca.lt/ecommerce/category/getChildCategories?browsePath=${fourthsubItems.browsePath}/${fourthsubItems.categoryId}`)
      .then((response) => response.json())
      .then((fourthitems) => {
        setFourthsublistItem(fourthitems)
        console.log(fourthitems)
      })
    setActiveFourthSubCategory(fourthsubItems.categoryId === activeFourthSubCategory ? null : fourthsubItems.categoryId)
  }

  return (
    <div>
      <div className='add-product-category-list-items-parent-box'>
        <div className='add-product-category-list-items-box'>
          {listItem.map((item) => (
            <div className='add-product-category-list-items' key={item.categoryId}>
              <div
                style={{ width: "100%" }}
                className={`d-flex justify-content-between align-items-center px-3 product-list-item-name ${activeCategory === item.categoryId ? 'active' : ''}`}
                onClick={() => handleSubCategory(item)}
              >
                <p>{item.label}</p>
              </div>
              {activeCategory === item.categoryId && (
                <div className='add-product-category-list-items-box2' key={item.categoryId}>
                  {sublistItem.map((items) => (
                    <>
                      <div style={{ width: "100%" }} className='px-3 product-list-item-name' key={items.categoryId}
                        onClick={() => handleSubOfSubcategory(items)}
                      >
                        <p>{items.label}</p>
                      </div>
                      {activeSubCategory === items.categoryId && (<div className='add-product-category-list-items-box3' key={item.categoryId}>
                        {subofsublistItem.map((subofsubItems) => (
                          <>
                            <div style={{ width: "100%" }} className='px-3 product-list-item-name' key={subofsubItems.categoryId}
                              onClick={() => handleThirdSubcategory(subofsubItems)}
                            >
                              <p>{subofsubItems.label}</p>
                            </div>
                            {activeThirdSubCategory === subofsubItems.categoryId && (<div className='add-product-category-list-items-box4' key={item.categoryId}

                            >
                              {thirdsublistItem.map((thirdsubItems) => (
                                <>
                                  <div style={{ width: "100%" }} className='px-3 product-list-item-name' key={thirdsubItems.categoryId}
                                    onClick={() => handleFourthSubcategory(thirdsubItems)}
                                  >
                                    <p>{thirdsubItems.label}</p>
                                  </div>
                                  {activeFourthSubCategory === thirdsubItems.categoryId && (<div className='add-product-category-list-items-box4' key={item.categoryId}>
                                    {fourthsublistItem.map((fourthsubItems) => (
                                      <>
                                        <div style={{ width: "100%" }} className='px-3 product-list-item-name' key={fourthsubItems.categoryId}
                                        // onClick={() => handleFourthSubcategory(thirdsubItems)}
                                        >
                                          <p>{fourthsubItems.label}</p>
                                        </div>
                                      </>
                                    ))}
                                  </div>)}
                                </>
                              ))}
                            </div>)}

                          </>
                        ))}
                      </div>)}
                    </>
                  ))}
                </div>
              )}

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoryHierarchy







import React, { useEffect } from 'react'
import { Button } from "@mui/material";
import { useState } from 'react';

const CategoryHierarchy = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState(null);
  const [activeThirdSubCategory, setActiveThirdSubCategory] = useState(null);

  const [listItem, setListItem] = useState([])
  const [sublistItem, setSubListItem] = useState([])
  const [subofsublistItem, setSubOfSubListItem] = useState([])
  const [thirdsublistItem, setThirdsublistItem] = useState([])
  const [hidesubCategory, sethidesubCategory] = useState(false)
  const [hideCategory, sethideCategory] = useState(false)


  useEffect(() => {

    fetch("https://few-kiwis-ask.loca.lt/ecommerce/category/getMainCategories")
      .then((res) => res.json())
      .then((data) => {
        setListItem(data)
        console.log(data)

      })
      .catch(error => console.error('Error fetching items:', error))

  }, [])



  const handleSubCategory = async (item) => {
    try {
      const response = await fetch(`https://few-kiwis-ask.loca.lt/ecommerce/category/getChildCategories?browsePath=${item.browsePath}/${item.categoryId}`);
      const items = await response.json();
      setSubListItem(items);
      setSubOfSubListItem([]); // Clear subofsublistItem
      setThirdsublistItem([]); // Clear thirdsublistItem
      setActiveCategory(item.categoryId);
      setActiveSubCategory(null);
      setActiveThirdSubCategory(null);
      sethidesubCategory(false)
      sethideCategory(false)
    } catch (error) {
      console.error('Error fetching subcategories:', error);
    }
  }

  const handleSubOfSubcategory = async (subItem) => {
    try {
      const response = await fetch(`https://few-kiwis-ask.loca.lt/ecommerce/category/getChildCategories?browsePath=${subItem.browsePath}/${subItem.categoryId}`);
      const subitems = await response.json();
      setSubOfSubListItem(subitems);
     
      setThirdsublistItem([]); // Clear thirdsublistItem
      setActiveSubCategory(subItem.categoryId);
      setActiveThirdSubCategory(null);
      sethideCategory(true)
    } catch (error) {
      console.error('Error fetching sub-subcategories:', error);
    }
  }

  const handleThirdSubcategory = async (thirdsubItem) => {
    try {
      const response = await fetch(`https://few-kiwis-ask.loca.lt/ecommerce/category/getChildCategories?browsePath=${thirdsubItem.browsePath}/${thirdsubItem.categoryId}`);
      const thirditems = await response.json();
      setThirdsublistItem(thirditems);
      sethidesubCategory(true)
      setActiveThirdSubCategory(thirdsubItem.categoryId);

    } catch (error) {
      console.error('Error fetching third-level subcategories:', error);
    }
  }


  return (
    <div>
      <div className='add-product-category-list-items-parent-box'>
        <div className='add-product-category-list-items-box'>
          {listItem.map((item) => (
            <div className='add-product-category-list-items' key={item.categoryId}>
              <div
                style={{ width: "100%" }}
                className={`d-flex justify-content-between align-items-center px-3 product-list-item-name ${activeCategory === item.categoryId ? 'active' : ''}`}
                onClick={() => handleSubCategory(item)}
              >
                <p>{item.label}</p>
              </div>
              {activeCategory === item.categoryId && (
                <div className='add-product-category-list-items-box2' key={item.categoryId}>
                  {sublistItem.map((items) => (
                    <>
                      <div style={{ width: "100%" }} className={hideCategory ? "px-3 product-list-item-name d-none" : "px-3 product-list-item-name"} key={items.categoryId}
                        onClick={() => handleSubOfSubcategory(items)}
                      >
                        <p>{items.label}</p>
                      </div>
                      {activeSubCategory === items.categoryId && (<div className='add-product-category-list-items-box3' key={item.categoryId}>
                        {subofsublistItem.map((subofsubItems) => (
                          <>
                            <div style={{ width: "100%" }} className={hidesubCategory ? "px-3 product-list-item-name d-none" : "px-3 product-list-item-name"} key={subofsubItems.categoryId}
                              onClick={() => handleThirdSubcategory(subofsubItems)}
                            >
                              <p>{subofsubItems.label}</p>
                            </div>
                            {activeThirdSubCategory === subofsubItems.categoryId && (<div className='add-product-category-list-items-box4' key={item.categoryId}>
                              {thirdsublistItem.map((thirdsubItems) => (
                                <>
                                  <div style={{ width: "100%" }} className='px-3 product-list-item-name' key={thirdsubItems.categoryId}>
                                    <p>{thirdsubItems.label}</p>
                                    <Button type="button" variant="contained" size='small'>Select</Button>
                                  </div>
                                </>
                              ))}
                            </div>)}
                          </>
                        ))}
                      </div>)}
                    </>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoryHierarchy