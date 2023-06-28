import './App.css';
import HomePage from './Components/Home/HomePage';
import SellingPage from './Components/SellingPage/SellingPage';
import SellingSignup from './Components/SellingSignupPage/SellingSignup';
import Verified from './Components/SellingSignupPage/Verified';
import './CSS/index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/sellingpage' element={<SellingPage/>}/>
          <Route path='/sellingsignup' element={<SellingSignup/>}/>
          <Route path='/Verified' element={<Verified/>}/>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
