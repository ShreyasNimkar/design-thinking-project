import logo from "./logo.svg";
import "./App.css";
import Login from "./screens/Login";
import Navbar from "./Components/Navbar";
import Profile from "./screens/Profile";
import Product from "./screens/Product";
import ProductGrid from "./screens/ProductGrid";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./screens/Signup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Signup />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<ProductGrid />} />
          {/* <Route path="/trade" element={<Trade />} /> */}
          {/* <Route path="/offers" element={<Offers />} /> */}
          {/* <Route path="/history" element={<History />} /> */}
          <Route path="/product/:id" element={<Product />} />
          <Route path="/user/:id" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
