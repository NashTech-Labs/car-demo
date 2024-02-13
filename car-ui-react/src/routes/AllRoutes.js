import { Routes, Route } from "react-router-dom";
import { CartPage } from "../pages";
import {ProductsList} from "../pages/Products/ProductsList";

export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/products" element={<ProductsList />} />
        <Route path="/cart" element={<CartPage />} />
    </Routes>
    </>
  )
}
