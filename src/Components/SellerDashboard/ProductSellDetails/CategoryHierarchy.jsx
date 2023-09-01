import React, { useEffect } from 'react';
import { useState } from 'react';

const CategoryHierarchy = () => {
  // State variables to manage active categories and subcategories
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState(null);
  const [activeThirdSubCategory, setActiveThirdSubCategory] = useState(null);

  // State variables to store fetched category data
  const [listItem, setListItem] = useState([]);
  const [sublistItem, setSubListItem] = useState([]);
  const [subofsublistItem, setSubOfSubListItem] = useState([]);
  const [thirdsublistItem, setThirdsublistItem] = useState([]);

  // Fetch main categories from the first API on component mount
  useEffect(() => {
    fetch("https://floppy-ways-relax.loca.lt/ecommerce/category/getMainCategories")
      .then((res) => res.json())
      .then((data) => {
        setListItem(data);
        console.log(data);
      })
      .catch(error => console.error('Error fetching items:', error));
  }, []);

  // Handle clicking on a main category
  const handleSubCategory = (item) => {
    fetch(`https://floppy-ways-relax.loca.lt/ecommerce/category/getChildCategories?browsePath=${item.browsePath}/${item.categoryId}`)
      .then((response) => response.json())
      .then((items) => {
        setSubListItem(items); // Store fetched subcategories
        console.log(items);
      });
    setActiveCategory(item.categoryId === activeCategory ? null : item.categoryId);
  };

  // Handle clicking on a subcategory
  const handleSubOfSubcategory = (items) => {
    fetch(`https://floppy-ways-relax.loca.lt/ecommerce/category/getChildCategories?browsePath=${items.browsePath}/${items.categoryId}`)
      .then((response) => response.json())
      .then((subitems) => {
        setSubOfSubListItem(subitems); // Store fetched sub-subcategories
        console.log(subitems);
      });
    setActiveSubCategory(items.categoryId === activeSubCategory ? null : items.categoryId);
  };

  // Handle clicking on a sub-subcategory
  const handleThirdSubcategory = (thirdsubitems) => {
    fetch(`https://floppy-ways-relax.loca.lt/ecommerce/category/getChildCategories?browsePath=${thirdsubitems.browsePath}/${thirdsubitems.categoryId}`)
      .then((response) => response.json())
      .then((thirditems) => {
        setThirdsublistItem(thirditems); // Store fetched sub-sub-subcategories
        console.log(thirditems);
      });
    setActiveThirdSubCategory(thirdsubitems.categoryId === activeThirdSubCategory ? null : thirdsubitems.categoryId);
  };

  return (
    <div>
      <div className='add-product-category-list-items-parent-box'>
        <div className='add-product-category-list-items-box'>
          {/* Loop through main categories */}
          {listItem.map((item) => (
            <div className='add-product-category-list-items' key={item.categoryId}>
              {/* Render main category */}
              <div
                style={{ width: "100%" }}
                className={`d-flex justify-content-between align-items-center px-3 product-list-item-name ${activeCategory === item.categoryId ? 'active' : ''}`}
                onClick={() => handleSubCategory(item)}
              >
                <p>{item.label}</p>
              </div>
              {/* Check if the main category is active */}
              {activeCategory === item.categoryId && (
                // Render subcategories of active main category
                <div className='add-product-category-list-items-box2' key={item.categoryId}>
                  {sublistItem.map((items) => (
                    // Render subcategory item
                    <div style={{ width: "100%" }} className='px-3 product-list-item-name' key={items.categoryId}
                      onClick={() => handleSubOfSubcategory(items)}
                    >
                      <p>{items.label}</p>
                    </div>
                    // ... More logic for sub-subcategories and sub-sub-subcategories ...
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryHierarchy;
