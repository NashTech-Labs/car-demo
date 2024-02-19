import React, {useEffect, useState}  from 'react';
import {useCart} from "../../context";


export const ProductCard = ({ product }) => {
    const { brand, model, year, color, mileage, price, quantity, tax, poster, in_stock } = product;
    const { cartList, addToCart, removeFromCart } = useCart();
    const [inCart, setInCart] = useState(false);

    useEffect(() => {
        if (product) {
            const productInCart = cartList.find(item => item.id === product.id);
            if (productInCart) {
                setInCart(true);
            } else {
                setInCart(false);
            }
        }
    }, [cartList, product]);

    if (!product) {
        return null;
    }

    return (
      <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="/" className="relative">
          {/* <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">Best Seller</span>  */}
          <img className="rounded-t-lg w-full h-64" src={poster} alt="" />
        </a>
        <div className="p-5">
          <a href="/">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{brand} {model}</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{color}</p>
  
          <p className="mb-3 font-normal text-black dark:text-gray-400">
            <span>Year: </span><span>{year}</span>
          </p>
          <p className="mb-3 font-normal text-black dark:text-gray-400">
            <span>Mileage: </span><span>{mileage}</span>
          </p>
          <p className="mb-3 font-normal text-black dark:text-gray-400">
            <span>Quantity: </span><span>{quantity}</span>
          </p>
          <p className="mb-3 font-normal text-black dark:text-gray-400">
            <span>Tax: </span><span>{tax}</span>
          </p>
          
          <div className="flex items-center my-2">
            <i className="text-lg bi bi-star-fill text-yellow-500 mr-1">{in_stock}</i>
          </div>
  
          <p className="flex justify-between items-center">
            <span className="text-2xl dark:text-gray-200">
              <span>INR </span><span>{price}</span>
            </span>
              { !inCart && <button onClick={() => addToCart(product)} className={"inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"}>Add To Cart <i className="ml-1 bi bi-plus-lg"></i></button>}
              { inCart && <button onClick={() => removeFromCart(product)} className={"inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800"}>Remove Item <i className="ml-1 bi bi-trash3"></i></button> }
          </p>
        </div>
      </div>
    );
  };