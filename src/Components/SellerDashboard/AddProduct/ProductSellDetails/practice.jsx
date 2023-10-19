
import React, { useEffect } from 'react'
import { Button } from "@mui/material";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GrFormNext } from 'react-icons/gr'
import { useDispatch } from 'react-redux';

// import { setAddProductCategories,setDesertCategories,setSelectedCategory } from '../../../ReduxToolKit/Features/AddProductFormSlice';
import { setSelectedCategory } from '../../../ReduxToolKit/Features/AddProductFormSlice';
import { setCategoriesTitlePath } from '../../../ReduxToolKit/Features/CategoriesTitle'
import { setSubCategoriesTitlePath } from '../../../ReduxToolKit/Features/SubCategoriesTitle'
import { setSubofSubCategoriesTitlePath } from '../../../ReduxToolKit/Features/SubofSubCategoriesTitle'
import { setThirdSubCategoriesTitlePath } from '../../../ReduxToolKit/Features/ThirdSubCategoriesTitle'


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

  const [activeFourthSubCategory, setActiveFourthSubCategory] = useState(false);
  const [fouthsublistItem, setFouthsublistItem] = useState([])
  const [activeFifthSubCategory, setActiveFifthSubCategory] = useState(false);
  const [fifthsublistItem, setFifthsublistItem] = useState([])
  const [hidesubofsubCategory, sethidesubofsubCategory] = useState(false)
  // let firstData = '';
  useEffect(() => {

    fetch("https://vast-peaches-yell.loca.lt/ecommerce/category/getMainCategories")
      .then((res) => res.json())
      .then((data) => {
        setListItem(data)
        console.log("first", data)

      })
      .catch(error => console.error('Error fetching items:', error))

  }, [])

  // const handleNewFirstCategories = async () =>{
  //   let first_api = "https://vast-peaches-yell.loca.lt/ecommerce/category/getMainCategories";

  //   let fethFirstApi = await fetch(first_api);
  //    firstData = await fethFirstApi.json();
  // }

  // useEffect(()=> {
  //   handleNewFirstCategories()
  // })


  const handleSubCategory = async (item) => {
    dispatch(setCategoriesTitlePath(item.label))
    try {
      const response = await fetch(`https://vast-peaches-yell.loca.lt/ecommerce/category/getChildCategories?browsePath=${item.browsePath}/${item.categoryId}`);
      const items = await response.json();

      if (response.ok) {
        setListItem(items);
      }
      else {
        setActivebtn(true)
      }

    } catch (error) {
      console.error('Error fetching subcategories:', error);
    }
    setCategoryTitle(item.label)
  }















  const navigate = useNavigate()

  const handleCategoryform = (cateItem) => {
    dispatch(setThirdSubCategoriesTitlePath(cateItem.label))
    console.log("handleform", cateItem)

    dispatch(setSelectedCategory(cateItem));
    navigate("/sellerdashboard/addproduct/ProductStepper")

  }

  return (

    <div className='add-product-category-list'>
      <div className='add-product-category-list-item-title'>
        <p>{categoryTitle}</p>
        <p onClick={() => handleSubOfSubcategory()}>{subCategoryTitle}</p>
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
                  {activebtn ? (<Button type="button" variant="contained" size='small' onClick={() => handleCategoryform(item)}>Select</Button>) : ""}
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryHierarchy



// import React,{ Component } from "react";

// export default function asyncComponent(importComponent){
//   class AsyncComponent extends Component {
//     constructor(props){
//       super(props);

//       this.state = {
//         component: null
//       };
//     }
//     async componentDidMount() {
//       const {default: component } = await importComponent();
  
//       this.setState({
//         component: component
//       });
//     }
//     render() {
//       const C = this.state.component;
  
//       return C ? <C {...this.props} /> : null;
//     }
//   }

//   return AsyncComponent;

// }

import React, { Suspense } from "react";
const HomePage = React.lazy(() => import("./Components/Home/HomePage"));
const NewHomePage = React.lazy(() => import("./Components/NewHome/NewHomePage"));
const SellingPage = React.lazy(() => import("./Components/SellingPage/SellingPage"));

const SellingSignup = React.lazy(() => import('./Components/SellingSignupPage/SellingSignup'))
const Verified = React.lazy(() => import('./Components/SellingSignupPage/Verified'))
const AccountRecovery = React.lazy(() => import('./Components/SellingPage/SellingLoginPage/AccountRecovery'))
const SellerDashboardPage = React.lazy(() => import('./Components/SellerDashboard/SellerDashboardPage'))
const AddProduct = React.lazy(() => import('./Components/SellerDashboard/AddProduct/AddProduct'))
const AddMultipleProduct = React.lazy(() => import('./Components/SellerDashboard/AddMultipleProduct/AddMultipleProduct'))
const LearnListProducts = React.lazy(() => import('./Components/SellerDashboard/LearnListProducts/LearnListProducts'))
const ProductStepper = React.lazy(() => import('./Components/SellerDashboard/AddProduct/ProductSellDetails/ProductStepper'))


<Route path="/" element={<Suspense fallback={<div>Loading...</div>}><HomePage /></Suspense>} />
<Route path="/sellingpage" element={<Suspense fallback={<div>Loading...</div>}><SellingPage /></Suspense>} />
<Route path="/sellingsignup" element={<Suspense fallback={<div>Loading...</div>}><SellingSignup /></Suspense>} />
<Route path="/Verified" element={<Suspense fallback={<div>Loading...</div>}><Verified /></Suspense>} />
<Route path="/newhomepage" element={<Suspense fallback={<div>Loading...</div>}><NewHomePage /></Suspense>} />
<Route path="/AccountRecovery" element={<Suspense fallback={<div>Loading...</div>}><AccountRecovery /></Suspense>} />
<Route path="/sellerDashboard" element={<Suspense fallback={<div>Loading...</div>}><SellerDashboardPage /></Suspense>} />
<Route path="/sellerDashboard/addProduct" element={<Suspense fallback={<div>Loading...</div>}><AddProduct /></Suspense>} />
<Route path="/sellerDashboard/add-multiple-product" element={<Suspense fallback={<div>Loading...</div>}><AddMultipleProduct /></Suspense>} />
<Route path="/sellerDashboard/learn-list-products" element={<Suspense fallback={<div>Loading...</div>}><LearnListProducts /></Suspense>} />
<Route path="/sellerdashboard/addproduct/ProductStepper" element={<Suspense fallback={<div>Loading...</div>}><ProductStepper /></Suspense>} />