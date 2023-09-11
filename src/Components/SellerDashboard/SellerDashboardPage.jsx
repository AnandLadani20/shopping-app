import React, { useState } from 'react';
import headerLogo from '../../Assests/logo/Dhiyodha white.png'
import './index.css';
import { AiFillWechat } from 'react-icons/ai'
import { BsFillQuestionCircleFill } from 'react-icons/bs'
import { BsBellFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import ModalNewProductList from './AddProduct/ModalNewProductList';

const SellerDashboardPage = () => {

  // const [showSearchproduct, setShowSearchproduct] = useState(false)

  // const handleChange = (e) => {
  //   const target = e.target;
  //   if (target.checked) {
  //     setShowSearchproduct(target.value);
  //   }
  // }

  const [showSearchproduct, setShowSearchproduct] = useState('singleProduct');
  const [singleProductInputValue, setSingleProductInputValue] = useState('');
  const [multipleProductInputValue, setMultipleProductInputValue] = useState('');

  const handleChange = (event) => {
    setShowSearchproduct(event.target.value);
  };

  const handleSearch = () => {
    // Get the input value based on the selected search type
    const inputValue =
      showSearchproduct === 'singleProduct'
        ? singleProductInputValue
        : multipleProductInputValue;

    // Perform the search action based on inputValue
    // Replace this with your actual search logic
    console.log('Searching for:', inputValue);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <section className='seller-dashboard-area-page'>
        <div className='seller-dashboard-header'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-8'>
                <div className='seller-dashbord-header-leftside'>
                  <div className='seller-dashboard-header-logo'>
                    <img src={headerLogo} alt='dashboard-logo' height={60} />
                  </div>
                  <div className='seller-dashboard-header-menu'>
                    <ul>
                      <li>Welcome</li>
                      <li>Listings</li>
                      <li>Inventory</li>
                      <li>Orders</li>
                      <li>Payments</li>
                      <li>Growth</li>
                      <li>Reports</li>
                      <li>Advertising</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-4 '>
                <div className='seller-dashbord-header-rightside'>
                  <div className='seller-dashbord-header-account-content'>
                    <div className='seller-dashbord-chatbot d-flex align-items-center gap-1'>
                      <AiFillWechat className='chat-icon' /><p>CHAT</p>
                    </div>
                    <div className='seller-dashboard-questions'>
                      <BsFillQuestionCircleFill className='question-icon' />
                    </div>
                    <div className='seller-dashboard-bell'>
                      <BsBellFill className='bell-icon' />
                    </div>
                    <div className='seller-dashboard-user-account d-flex align-items-center gap-2'>
                      <div><FaUser className='guest-icon' /></div>
                      <div>
                        <p>Guest</p>
                        <p>User@123.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='seller-dashbord-hero-content p-2'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-3 '>
                <div className='border border-danger border-2 hero-seller-dashboard-left-area'></div>
              </div>
              <div className='col-6'>
                <div className='row'>
                  <div className='col-12 border border-warning border-2 hero-seller-dashboard-centerup-area'>
                    <div className='seller-dashboard-mainsearch-product'>
                      <h6>Initiate product addition</h6>
                      <h1>List Product From Dhiyodha Catalog</h1>

                      <div className='seller-dashboard-search-product-bar'>

                        <form>
                          <div className='form-group d-flex gap-2'>
                            <input
                              type='text'
                              className='form-control'
                              placeholder='Product name, UPC, EAN, ISBN, or ASIN'
                              value={singleProductInputValue}
                              onChange={(e) => setSingleProductInputValue(e.target.value)}
                              style={{ width: "80%", padding: "10px", borderRadius: "0", border: "1px solid #1b40af" }}
                            />
                            <div>
                              <button
                                type='button'
                                className='seller-dashboard-searchbtn'
                                onClick={handleSearch}
                              >
                                <AiOutlineSearch className='searchIcon-addproduct-seller-deshboard' />Search
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>

                      {/* <div className='seller-dashboard-search-product-bar'>
                        <form>
                          <div className="form-group">
                            <div className='row'>
                              <div className='col-8'>
                                <div className='d-flex justify-content-between'>
                                  <div>
                                    <input type='radio' name='searchProduct' id='singleProduct' value='singleProduct' checked={showSearchproduct === 'singleProduct'} onChange={handleChange} />
                                    <label htmlFor='singleProduct' className='searchradiolabel'>Search for a product</label>
                                  </div>
                                  <div>
                                    <input type='radio' name='searchProduct' id='multipleProduct' value='multipleProduct' checked={showSearchproduct === 'multipleProduct'} onChange={handleChange} />
                                    <label htmlFor='multipleProduct' className='searchradiolabel'>Search Multiples products</label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='mt-3 mb-3 d-flex justify-content-between align-items-start'>
                              {
                                showSearchproduct === "singleProduct" ? (<input type='text' className='form-control' style={{ width: "80%", padding: "12px", borderRadius: "0", border: "1px solid grey" }} placeholder='Product name,UPC, EAN, ISBN, or ASIN' />) :
                                  (<textarea rows="5" className="form-control" style={{ width: "80%", padding: "12px", borderRadius: "0", border: "1px solid grey" }} placeholder='You can search for multiple UPC, EAN,ISBN or ASIN ID'></textarea>)
                              }
                              <button type="button" style={{ padding: "10px 20px", borderRadius: "0" }} className=" d-flex align-items-center seller-dashboard-searchbtn"> <AiOutlineSearch className='searchIcon-product-sellerdashbord' />Search</button>
                            </div>
                          </div>
                        </form>
                      </div> */}
                      <div className='seller-dashboard-product-options my-4'>
                        <div className='row '>
                          <div className='col'>
                            <div className='seller-dashboard-add-product'>
                              <button className='seller-dashboard-listbtn mt-2' onClick={handleOpen}>New Product Listing </button>
                              <ModalNewProductList handleClose={handleClose} open={open} />
                            </div>
                          </div>
                          <div className='col'>
                            <div className='seller-dashboard-add-multiple-products'>
                              <button className='seller-dashboard-listbtn mt-2'>Multiple Product Listing</button>
                            </div>
                          </div>
                          <div className='col'>
                            <div className='seller-dashboard-list-product'>
                              <button className='seller-dashboard-listbtn mt-2'>Home Made Listing</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-12  border border-primary border-2 hero-seller-dashboard-centerdown-area'></div>
                </div>
              </div>
              <div className='col-3  '>
                <div className='border border-danger border-2 hero-seller-dashboard-right-area'></div>
              </div>
            </div>
          </div>
        </div>

      </section>

    </>
  )
}

export default SellerDashboardPage