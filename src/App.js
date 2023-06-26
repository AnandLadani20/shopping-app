import './App.css';
import HomePage from './Components/Home/HomePage';
import SellingPage from './Components/SellingPage/SellingPage';
import SellingSignup from './Components/SellingSignupPage/SellingSignup';
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
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
