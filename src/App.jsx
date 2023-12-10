import { BrowserRouter , Routes , Route  } from "react-router-dom";
import Home from "./pages/Home";
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>



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