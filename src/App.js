import './App.css';
// import ClassProps from './classcomponent';

import {BrowserRouter,Routes,Route} from "react-router-dom"
// import Useeffect from './hooks/useeffect';
// import Search from './search';
import Navbarnav from './e-cart/navbar';
import Signup from './e-cart/signup';
import Signin from './e-cart/signin';
import Home from './e-cart/home';
import Cart from './e-cart/cart';
import Cartnav from './e-cart/cart_navbar';

function App() {

   return(
    <BrowserRouter>
      <Routes>
           <Route path="/navbar" element={<Navbarnav/>}/>
           <Route path="/signup" element={<Signup/>}/>
           <Route path="" element={<Signin/>}/>
           <Route path="/home" element={<Home/>}/>
           <Route path="/cart" element={<Cart/>}/>
           <Route path="/cartnav" element={<Cartnav/>}/>

      </Routes>
   </BrowserRouter>
   )
}

export default App;

