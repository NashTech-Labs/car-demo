import React from 'react';


export const ProductCard = ({product}) => {
    const {carId, brand, model, year, color, mileage, price, quantity, tax, in_stock} = product;

  return (
    <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="/" className="relative" >
            {/* <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">Best Seller</span>  */}
        </a>
        <div className="p-5">
            <a href="/">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{brand} {model}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Color : {color}</p>

            <p className="mb-3 font-normal text-black dark:text-gray-400">
                <span>Year : </span><span>{year}</span>
            </p>

            <p className="mb-3 font-normal text-black dark:text-gray-400">
                <span>Mileage : </span><span>{mileage}</span>
            </p>
            <p className="mb-3 font-normal text-black dark:text-gray-400">
                <span>Quantity : </span><span>{quantity}</span>
            </p>
            <p className="mb-3 font-normal text-black dark:text-gray-400">
                <span>Tax : </span><span>{tax}</span>
            </p>
            
            <div className="flex items-center my-2">
                <i className="text-lg bi bi-star-fill text-yellow-500 mr-1">{in_stock}</i>
                <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
            </div>

            <p className="flex justify-between items-center">
                <span className="text-2xl dark:text-gray-200">
                    <span>₹</span><span>{price}</span>
                </span>
                {/* <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"/> */}
                <button className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800'>Add To Cart +</button>
            </p>
        </div>
    </div>
  )
}