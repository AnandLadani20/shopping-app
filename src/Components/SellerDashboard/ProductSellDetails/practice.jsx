
import React, { useEffect } from 'react'

import { useState } from 'react';

const CategoryHierarchy = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState(null);
  const [activeThirdSubCategory, setActiveThirdSubCategory] = useState(null);
  const [listItem, setListItem] = useState([])
  const [sublistItem, setSubListItem] = useState([])
  const [subofsublistItem, setSubOfSubListItem] = useState([])
  const [thirdsublistItem, setThirdsublistItem] = useState([])

  useEffect(() => {

    fetch("https://floppy-ways-relax.loca.lt/ecommerce/category/getMainCategories")
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
    fetch(`https://floppy-ways-relax.loca.lt/ecommerce/category/getChildCategories?browsePath=${item.browsePath}/${item.categoryId}`)
      .then((response) => response.json())
      .then((items) => {
        setSubListItem(items)
        console.log(items)
      })
    setActiveCategory(item.categoryId === activeCategory ? null : item.categoryId);

  }
  const handleSubOfSubcategory = (items) => {
    fetch(`https://floppy-ways-relax.loca.lt/ecommerce/category/getChildCategories?browsePath=${items.browsePath}/${items.categoryId}`)
      .then((response) => response.json())
      .then((subitems) => {
        setSubOfSubListItem(subitems)
        console.log(subitems)
      })
    setActiveSubCategory(items.categoryId === activeSubCategory ? null : items.categoryId)
  }
  const handleThirdSubcategory = (thirdsubitems) => {
    fetch(`https://floppy-ways-relax.loca.lt/ecommerce/category/getChildCategories?browsePath=${thirdsubitems.browsePath}/${thirdsubitems.categoryId}`)
      .then((response) => response.json())
      .then((thirditems) => {
        setThirdsublistItem(thirditems)
        console.log(thirditems)
      })
    setActiveThirdSubCategory(thirdsubitems.categoryId === activeThirdSubCategory ? null : thirdsubitems.categoryId)
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
                                  >
                                    <p>{thirdsubItems.label}</p>
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