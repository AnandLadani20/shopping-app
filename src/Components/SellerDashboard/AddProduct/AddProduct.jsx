

import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
// import { AiOutlineStar } from 'react-icons/ai';
// import { AiFillStar } from 'react-icons/ai';
// import { RiArrowDropRightLine } from 'react-icons/ri';
// import { useState } from 'react';
import CategoryHierarchy from './CategoryHierarchy';

const AddProduct = () => {
    return (
        <div>
            <section className='seller-dashboard-add-product-category-area'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-12'>
                            <div className='add-product-category-container'>
                                <div className='add-product-category-title-area'>
                                    <h4>Select a product category</h4>
                                    <div>Choosing the best product type ensures that you see the most appropriate data fields for your product. Browse the product types directly or use search.
                                        <Link to={"/SellerDashboard"}>
                                            See if your product already exists on Amazon.
                                        </Link>
                                    </div>
                                </div>

                                <div className='add-product-category-search-area'>
                                    <div className='d-flex justify-content-between'>
                                        <h6>Search</h6>
                                        <div><Link to="#" >What is a Product Type?</Link></div>
                                    </div>
                                    <form>
                                        <div className="form-group">
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control add-product-category-searchInput" style={{ padding: "12px", borderRadius: "0", border: "1px solid gray" }} placeholder="Search for a category" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                <div className="input-group-append">
                                                    <button className="btn btn-outline-secondary" style={{ borderRadius: "0", padding: "12px 14px", border: "1px solid gray" }} type="button"><AiOutlineSearch className='searchIcon-addproduct' /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className='add-product-category-list-browse'>
                                    <div className='d-flex justify-content-between'>
                                        <h6>Select Product category</h6>
                                        <div><Link to="#">What is a Product Type?</Link></div>
                                    </div>
                                    <CategoryHierarchy/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AddProduct