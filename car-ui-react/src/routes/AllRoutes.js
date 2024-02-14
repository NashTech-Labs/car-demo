import { Routes, Route } from "react-router-dom";
import { CartPage } from "../pages";
import { ProductsList}  from "../pages/Products/ProductsList";
import { HomePage } from "../pages/Home/HomePage";
import { PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
    </>
  )
}
