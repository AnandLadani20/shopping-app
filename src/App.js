import './App.css';
import HomePage from './Components/Home/HomePage';
import Navbar from './Components/Home/Navbar';
import SellingPage from './Components/SellingPage/SellingPage';
import './CSS/index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  return (
    <>
      {/* <HomePage /> */}
      {/* <SellingPage/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/sellingpage' element={<SellingPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
