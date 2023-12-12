import { BrowserRouter , Routes , Route  } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product-list' element={<ProductList/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cart' element={<Cart/>}/>



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