import { Routes, Route } from "react-router-dom";
import { CartPage } from "../pages";

export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="cart" element={<CartPage />} />
    </Routes>
    </>
  )
}
