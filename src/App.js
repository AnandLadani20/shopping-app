import './App.css';
import HomePage from './Components/Home/HomePage';
import NewHomePage from './Components/NewHome/NewHomePage';
import SellingPage from './Components/SellingPage/SellingPage';
import SellingSignup from './Components/SellingSignupPage/SellingSignup';
import Verified from './Components/SellingSignupPage/Verified';
// import './CSS/index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'
import AccountRecovery from './Components/SellingPage/SellingLoginPage/AccountRecovery';
import SellerDashboardPage from './Components/SellerDashboard/SellerDashboardPage';
import AddProduct from './Components/SellerDashboard/AddProduct';
import AddMultipleProduct from './Components/SellerDashboard/AddMultipleProduct';
import LearnListProducts from './Components/SellerDashboard/LearnListProducts';
import ProductStepper from './Components/SellerDashboard/ProductSellDetails/ProductStepper';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/sellingpage' element={<SellingPage/>}/>
          <Route path='/sellingsignup' element={<SellingSignup/>}/>
          <Route path='/Verified' element={<Verified/>}/>
          <Route path='/newhomepage' element={<NewHomePage/>}/>
          <Route path='/AccountRecovery' element={<AccountRecovery/>}/>
          <Route path='/SellerDashboard' element={<SellerDashboardPage/>}/>
          <Route path='/sellerDashboard/addProduct' element={<AddProduct/>}/>
          <Route path='/sellerDashboard/add-multiple-product' element={<AddMultipleProduct/>}/>
          <Route path='/sellerDashboard/learn-list-products' element={<LearnListProducts/>}/>
          <Route path='/sellerdashboard/addproduct/ProductStepper' element={<ProductStepper/>}/>
          
        </Routes>
      </BrowserRouter>
   
    </>
  );
}

export default App;
