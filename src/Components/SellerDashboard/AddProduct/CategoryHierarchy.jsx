
// import React, { useEffect } from 'react'
// import { Button } from "@mui/material";
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { GrFormNext } from 'react-icons/gr'
// import { useDispatch } from 'react-redux';

// // import { setAddProductCategories,setDesertCategories,setSelectedCategory } from '../../../ReduxToolKit/Features/AddProductFormSlice';
// import { setSelectedCategory } from '../../../ReduxToolKit/Features/AddProductFormSlice';
// import { setCategoriesTitlePath } from '../../../ReduxToolKit/Features/CategoriesTitle'
// import { setSubCategoriesTitlePath } from '../../../ReduxToolKit/Features/SubCategoriesTitle'
// import { setSubofSubCategoriesTitlePath } from '../../../ReduxToolKit/Features/SubofSubCategoriesTitle'
// import { setThirdSubCategoriesTitlePath } from '../../../ReduxToolKit/Features/ThirdSubCategoriesTitle'


// const CategoryHierarchy = () => {

//   const dispatch = useDispatch()

//   const [activeCategory, setActiveCategory] = useState(false);
//   const [categoryTitle, setCategoryTitle] = useState("Please select...");
//   const [subCategoryTitle, setSubCategoryTitle] = useState("");
//   const [thirdCategoryTitle, setThirdCategoryTitle] = useState("");
//   const [activeItems, setactiveItems] = useState(null);
//   const [activeSubCategory, setActiveSubCategory] = useState(false);
//   const [activeThirdSubCategory, setActiveThirdSubCategory] = useState(false);
//   const [activebtn, setActivebtn] = useState(false)

//   const [listItem, setListItem] = useState([])
//   const [sublistItem, setSubListItem] = useState([])
//   const [subofsublistItem, setSubOfSubListItem] = useState([])
//   const [thirdsublistItem, setThirdsublistItem] = useState([])
//   const [hidesubCategory, sethidesubCategory] = useState(false)
//   const [hideCategory, sethideCategory] = useState(false)

//   const [activeFourthSubCategory, setActiveFourthSubCategory] = useState(false);
//   const [fouthsublistItem, setFouthsublistItem] = useState([])
//   const [activeFifthSubCategory, setActiveFifthSubCategory] = useState(false);
//   const [fifthsublistItem, setFifthsublistItem] = useState([])
//   const [hidesubofsubCategory, sethidesubofsubCategory] = useState(false)

//   useEffect(() => {

//     fetch("https://crazy-cows-ask.loca.lt/ecommerce/category/getMainCategories")
//       .then((res) => res.json())
//       .then((data) => {
//         setListItem(data)
//         console.log("first", data)

//       })
//       .catch(error => console.error('Error fetching items:', error))

//   }, [])



//   const handleSubCategory = async (item) => {
//     dispatch(setCategoriesTitlePath(item.label))
//     try {
//       const response = await fetch(`https://vast-peaches-yell.loca.lt/ecommerce/category/getChildCategories?browsePath=${item.browsePath}/${item.categoryId}`);
//       const items = await response.json();
//       setSubListItem(items);
//       setSubOfSubListItem([]); // Clear subofsublistItem
//       setThirdsublistItem([]); // Clear thirdsublistItem
//       setFouthsublistItem([])  // Clear fourthsublistItem
//       setFifthsublistItem([]);
//       setactiveItems(item.categoryId)
//       setActiveCategory(true);
//       setActiveSubCategory(true);
//       setActiveThirdSubCategory(true);
//       sethidesubCategory(false)
//       sethideCategory(false)
//       console.log("second", items)
//     } catch (error) {
//       console.error('Error fetching subcategories:', error);
//     }
//     setCategoryTitle(item.label)
//   }
//   const nextIcon = <GrFormNext className="navigate-next-icon" />;

//   const handleSubOfSubcategory = async (subItem) => {
//     dispatch(setSubCategoriesTitlePath(subItem.label))
//     try {
//       const response = await fetch(`https://vast-peaches-yell.loca.lt/ecommerce/category/getChildCategories?browsePath=${subItem.browsePath}/${subItem.categoryId}`);
//       const subitems = await response.json();
//       setSubOfSubListItem(subitems);

//       setThirdsublistItem([]); // Clear thirdsublistItem
//       setFouthsublistItem([])  // Clear fourthsublistItem
//       setFifthsublistItem([]);
//       setActiveSubCategory(true);
//       setActiveThirdSubCategory(false);
//       sethideCategory(true)
//       console.log("third", subitems)
//     } catch (error) {
//       console.error('Error fetching sub-subcategories:', error);
//     }

//     setSubCategoryTitle(
//       <>
//         {nextIcon} {subItem.label}
//       </>
//     );
//   }

//   const handleThirdSubcategory = async (thirdsubItem) => {
//     dispatch(setSubofSubCategoriesTitlePath(thirdsubItem.label))
//     try {
//       const response = await fetch(`https://vast-peaches-yell.loca.lt/ecommerce/category/getChildCategories?browsePath=${thirdsubItem.browsePath}/${thirdsubItem.categoryId}`);

//       if (response.ok) {
//         const thirditems = await response.json();
//         setThirdsublistItem(thirditems);
//         setFouthsublistItem([])  // Clear fourthsublistItems
//         setFifthsublistItem([]);
//         sethidesubCategory(true)
//         setActiveThirdSubCategory(true);
//         console.log("fourth", thirditems)
//       } else {
//         setActivebtn(true)
//       }

//     } catch (error) {
//       console.error('Error fetching third-level subcategories:', error);
//     }
//     setThirdCategoryTitle(
//       <>
//         {nextIcon} {thirdsubItem.label}
//       </>
//     )
//   }
//   const handleFourthSubcategory = async (fouthsubItem) => {

//     try {
//       const response = await fetch(`https://vast-peaches-yell.loca.lt/ecommerce/category/getChildCategories?browsePath=${fouthsubItem.browsePath}/${fouthsubItem.categoryId}`);

//       if (response.ok) {
//         const fourthitems = await response.json();
//         setFouthsublistItem(fourthitems);
//         setActiveThirdSubCategory(false)
//         setFifthsublistItem([]);
//         setActiveFourthSubCategory(true);
//         console.log("fifth", fourthitems)
//       } else {
//         setActivebtn(true)
//       }

//     } catch (error) {
//       console.error('Error fetching third-level subcategories:', error);
//     }
//   }

//   const handleFifthSubcategory = async (fifthsubItem) => {

//     try {
//       const response = await fetch(`https://vast-peaches-yell.loca.lt/ecommerce/category/getChildCategories?browsePath=${fifthsubItem.browsePath}/${fifthsubItem.categoryId}`);

//       if (response.ok) {
//         const fifthitems = await response.json();
//         setFifthsublistItem(fifthitems);
//         setActiveFourthSubCategory(false)
//         setActiveFifthSubCategory(true);
//         console.log("six", fifthitems)
//       } else {
//         setActivebtn(true)
//       }

//     } catch (error) {
//       console.error('Error fetching third-level subcategories:', error);
//     }
//   }








//   const navigate = useNavigate()

//   const handleCategoryform = (cateItem) => {
//     dispatch(setThirdSubCategoriesTitlePath(cateItem.label))
//     console.log("handleform", cateItem)

//     dispatch(setSelectedCategory(cateItem));
//     navigate("/sellerdashboard/addproduct/ProductStepper")

//   }

//   return (

//     <div className='add-product-category-list'>
//       <div className='add-product-category-list-item-title'>
//         <p>{categoryTitle}</p>
//         <p  onClick={() => handleSubOfSubcategory()}>{subCategoryTitle}</p>
//         <p>{thirdCategoryTitle}</p>
//       </div>
//       <div>
//         <div className='add-product-category-list-items-parent-box'>
//           <div className='add-product-category-list-items-box'>
//             {listItem.map((item) => (
//               <div className='add-product-category-list-items' key={item.categoryId}>
//                 <div
//                   style={{ width: "100%" }}
//                   className={`d-flex justify-content-between align-items-center px-3 product-list-item-name ${activeItems === item.categoryId ? 'active' : ''}`}
//                   onClick={() => handleSubCategory(item)}
//                 >
//                   <p>{item.label}</p>
//                 </div>

//               </div>
//             ))}
//             {activeCategory && (
//               <div className='add-product-category-list-items-box2' >
//                 {sublistItem.map((items) => (
//                   <>
//                     <div style={{ width: "100%" }} className={hideCategory ? "px-3 product-list-item-name d-none" : "px-3 product-list-item-name"} key={items.categoryId}
//                       onClick={() => handleSubOfSubcategory(items)}
//                     >
//                       <p>{items.label}</p>
//                     </div>
//                   </>
//                 ))}
//               </div>
//             )}
//             {activeSubCategory && (<div className='add-product-category-list-items-box2' >
//               {subofsublistItem.map((subofsubItems) => (
//                 <>
//                   <div style={{ width: "100%" }} className={hidesubCategory ? "px-3 product-list-item-name d-none" : "px-3 product-list-item-name"} key={subofsubItems.categoryId}
//                     onClick={() => handleThirdSubcategory(subofsubItems)}
//                   >
//                     <p>{subofsubItems.label}</p>
//                     {activebtn ? (<Button type="button" variant="contained" size='small' onClick={() => handleCategoryform(subofsubItems)}>Select</Button>) : ""}
//                   </div>
//                 </>
//               ))}
//             </div>)}
//             {activeThirdSubCategory && (<div className='add-product-category-list-items-box2' >
//               {thirdsublistItem.map((thirdsubItems) => (
//                 <>
//                   <div style={{ width: "100%" }} className='px-3 product-list-item-name' key={thirdsubItems.categoryId}
//                     onClick={() => handleFourthSubcategory(thirdsubItems)}
//                   >
//                     <p>{thirdsubItems.label}</p>
//                     {/* <Button type="button" variant="contained" size='small' onClick={() => handleCategoryform(thirdsubItems)}>Select</Button> */}
//                     {activebtn ? (<Button type="button" variant="contained" size='small' onClick={() => handleCategoryform(thirdsubItems)}>Select</Button>) : ""}
//                   </div>
//                 </>
//               ))}
//             </div>)}
//             {activeFourthSubCategory && (<div className='add-product-category-list-items-box2' >
//               {fouthsublistItem.map((fouthsubItems) => (
//                 <>
//                   <div style={{ width: "100%" }} className='px-3 product-list-item-name' key={fouthsubItems.categoryId}
//                     onClick={() => handleFifthSubcategory(fouthsubItems)}
//                   >
//                     <p>{fouthsubItems.label}</p>
//                     {activebtn ? (<Button type="button" variant="contained" size='small' onClick={() => handleCategoryform(fouthsubItems)}>Select</Button>) : ""}
//                     {/* <Button type="button" variant="contained" size='small' onClick={() => handleCategoryform(fouthsubItems)}>Select</Button> */}
//                   </div>
//                 </>
//               ))}
//             </div>)}
//             {activeFifthSubCategory && (<div className='add-product-category-list-items-box2'>
//               {fifthsublistItem.map((fifthsubItems) => (
//                 <>
//                   <div style={{ width: "100%" }} className='px-3 product-list-item-name' key={fifthsubItems.categoryId}>
//                     <p>{fifthsubItems.label}</p>
//                     <Button type="button" variant="contained" size='small' onClick={() => handleCategoryform(fifthsubItems)}>Select</Button>
//                   </div>
//                 </>
//               ))}
//             </div>)}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CategoryHierarchy


import React, { useEffect } from 'react'
import { Button } from "@mui/material";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GrFormNext } from 'react-icons/gr'
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


  const nextIcon = <GrFormNext className="navigate-next-icon" />;




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