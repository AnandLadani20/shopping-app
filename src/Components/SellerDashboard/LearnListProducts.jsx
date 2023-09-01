import React from 'react'

const LearnListProducts = () => {
  return (
    <div>LearnListProducts</div>
  )
}

export default LearnListProducts


// import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom';
// import { AiOutlineSearch } from 'react-icons/ai';
// import { AiOutlineStar } from 'react-icons/ai';
// import { AiFillStar } from 'react-icons/ai';
// import { RiArrowDropRightLine } from 'react-icons/ri';
// import { useState } from 'react';

// const AddProduct = () => {

//     const [listItem, setListItem] = useState([])
//     const [sublistItem, setSubListItem] = useState("")

//     const [favourite, setFavourite] = useState([])
//     useEffect(() => {

//         fetch("https://metal-waves-start.loca.lt/ecommerce/category/getMainCategories")
//             .then((res) => res.json())
//             .then((data) => {
//                 setListItem(data)
//                 console.log(data)
           
//             })
//             .catch(error => console.error('Error fetching items:', error))

//     }, [])

//     useEffect(() => {


//     }, [])

//     const addToFavorites = (item) => {
//         setFavourite(prevFavorites => [...prevFavorites, item])
//     }
//     const removeFromFavorites = (item) => {
//         setFavourite(prevFavorites => prevFavorites.filter(favorite => favorite.categoryId !== item.categoryId));
//     };

//     const handleSubCategory = (item) => {
//         fetch(`https://metal-waves-start.loca.lt/ecommerce/category/getChildCategories?browsePath=${item.browsePath}/${item.categoryId}/2083423031/2083424031/8641222031&id=8641222031`)
//             .then((response) => response.json())
//             .then((items) => {
//                 setSubListItem(items.label)
//                 console.log(items)
//             })

//     }
//     return (
//         <div>
//             <section className='seller-dashboard-add-product-category-area'>
//                 <div className='container'>
//                     <div className='row justify-content-center'>
//                         <div className='col-8'>
//                             <div className='add-product-category-container'>
//                                 <div className='add-product-category-title-area'>
//                                     <h4>Select a product category</h4>
//                                     <div>Choosing the best product type ensures that you see the most appropriate data fields for your product. Browse the product types directly or use search.
//                                         <Link to={"/SellerDashboard"}>
//                                             See if your product already exists on Amazon.
//                                         </Link>
//                                     </div>
//                                 </div>
//                                 <div className='add-product-category-favourite-area'>
//                                     <h6>Favourites</h6>
//                                     <div className='add-product-category-favourite-list'>
//                                         <div className='add-product-category-favourite-list-items'>
//                                             {
//                                                 favourite.map(favorite => (
//                                                     <div className='add-product-category-list-items' key={favorite.categoryId}>
//                                                         <div className='p-2' >
//                                                             <button onClick={() => removeFromFavorites(favorite)} style={{ border: "0", backgroundColor: "transparent" }}><AiFillStar className="product-category-list-items-stared-icon" /></button>
//                                                         </div>

//                                                         <div style={{ width: "100%" }} className='d-flex justify-content-between align-items-center px-3 product-list-item-name'>
//                                                             <p>{favorite.label}</p>
//                                                             <RiArrowDropRightLine className='product-category-list-items-dropright-icon' />
//                                                         </div>
//                                                     </div>


//                                                 ))

//                                             }
//                                             {favourite == "" ? (<div className='product-list-item-name'>You haven't added any favourite categories yet.</div>) : ""}
//                                         </div>

//                                     </div>
//                                 </div>
//                                 <div className='add-product-category-search-area'>
//                                     <div className='d-flex justify-content-between'>
//                                         <h6>Search</h6>
//                                         <div><Link to="#" >What is a Product Type?</Link></div>
//                                     </div>
//                                     <form>
//                                         <div class="form-group">
//                                             <div class="input-group mb-3">
//                                                 <input type="text" className="form-control add-product-category-searchInput" style={{ padding: "12px", borderRadius: "0", border: "1px solid gray" }} placeholder="Search for a category" aria-label="Recipient's username" aria-describedby="basic-addon2" />
//                                                 <div class="input-group-append">
//                                                     <button className="btn btn-outline-secondary" style={{ borderRadius: "0", padding: "12px 14px", border: "1px solid gray" }} type="button"><AiOutlineSearch className='searchIcon-addproduct' /></button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </form>
//                                 </div>
//                                 <div className='add-product-category-list-browse'>
//                                     <div className='d-flex justify-content-between'>
//                                         <h6>Select Product category</h6>
//                                         <div><Link to="#">What is a Product Type?</Link></div>
//                                     </div>
//                                     <div className='add-product-category-list'>
//                                         <div className='add-product-category-list-item-title'>
//                                             <p>Please select... </p>
//                                         </div>
//                                         <div className='add-product-category-list-items-box'>
                                           

//                                             {
//                                                 listItem.map((item) => {
//                                                     return <div className='add-product-category-list-items' key={item.categoryId}>
//                                                         <div className='p-2' >

//                                                             {!favourite.find(favorite => favorite.categoryId === item.categoryId) ? (

//                                                                 <button onClick={() => addToFavorites(item)} style={{ border: "0", backgroundColor: "transparent" }}><AiOutlineStar className="product-category-list-items-star-icon" /></button>
//                                                             ) : (
//                                                                 <button onClick={() => removeFromFavorites(item)} style={{ border: "0", backgroundColor: "transparent" }}><AiFillStar className="product-category-list-items-stared-icon" /></button>
//                                                             )}
//                                                         </div>
//                                                         <div style={{ width: "100%" }} className='d-flex justify-content-between align-items-center px-3 product-list-item-name' onClick={() => handleSubCategory(item)}>
//                                                             <p>{item.label}</p>
//                                                             <RiArrowDropRightLine className='product-category-list-items-dropright-icon' />
//                                                         </div>
//                                                     </div>
//                                                 })
//                                             }
                                          
                           
//                                             {sublistItem}
                 
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     )
// }

// export default AddProduct