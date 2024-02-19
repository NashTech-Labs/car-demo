import { Routes, Route } from "react-router-dom";
import { CartPage, Login, Register } from "../pages";
import { ProductsList}  from "../pages/Products/ProductsList";
import { HomePage } from "../pages/Home/HomePage";

export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
    </Routes>
    </>
  )
}
