//import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
// import Product from './components/Product';
import Header from './components/Header';
import Profile from './components/Profile';

import { Shop } from './components/Shop';
import { Cart } from './components/Cart';
import { ShopContextProvider } from "./context/shop_context";
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
      <ShopContextProvider>
      <BrowserRouter>
      <Header ></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>        
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>      
      </BrowserRouter>
      <Footer></Footer>
      </ShopContextProvider>
    </div>
  );
}

export default App;
