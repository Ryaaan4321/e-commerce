import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pay from './pages/Pay.jsx';
import Success from "./pages/Success.jsx";
const App = () => {
  const  user = true;
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products/:cat' element={<ProductList/>}/>
      <Route path='/product-list/' element={<ProductList/>}/>
      <Route path='/product/:id' element={<Product/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/pay' element={<Pay/>}/>
      <Route path='/success' element={<Success/>}/>



    </Routes>
    </BrowserRouter>

  )
};

export default App;



{/* <BrowserRouter>
<Header />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path='/sign-in' element={<SignIn />} />
  <Route path='/sign-up' element={<SignUp />} />

  <Route element={<PrivateRoute />}>
    <Route path='/profile' element={<Profile />} />
  </Route>


</Routes>
</BrowserRouter> */}