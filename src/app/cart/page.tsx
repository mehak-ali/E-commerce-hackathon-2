import React from 'react';
import Image from 'next/image';
import G1 from '../../../public/assests/G1.png'
import { CiHeart } from "react-icons/ci";
import { GoTrash } from "react-icons/go";



export default function cart() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-5xl w-full bg-white  p-6">
        {/* Bag Section */}
        <div className="grid grid-cols-3 gap-6">
          {/* Bag Items */}
          <div className="col-span-2">
            <h2 className="text-lg font-bold mb-4">Bag</h2>
            {/* Item 1 */}
            <div className="flex items-center justify-between border-b pb-4 mb-4">
              <Image
                src={G1}
                alt="Nike Dri-FIT ADV TechKnit Ultra"
                className="w-24 h-24 rounded-md border"
              />
              <div className="ml-4 flex-1">
                <h3 className="font-medium text-gray-800">
                  Nike Dri-FIT ADV TechKnit Ultra
                </h3>
              <div className=''>  <p className="text-sm text-gray-600">Men's Short-Sleeve Running Top</p>
                <p className="text-sm text-gray-500">Ashen Slate/Cobalt Bliss</p>
              <span className='flex justify-normal'>  <p className="text-sm text-gray-500 m-5">Size: L</p>
                <p className='text-sm text-gray-500 m-5'>Quntity: 1</p> </span></div>
              <span className='flex gap-5'>  <CiHeart size={20}/> <GoTrash/></span>
              </div>
              <div className="text-right">
                <p className="font-medium">₹ 3,895.00</p>
                <button className="text-sm text-red-500 hover:underline mt-2">Remove</button>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center justify-between border-b pb-4 mb-4 pl-16">
              
              <div className="ml-10 flex-1">
                <h3 className="font-medium text-gray-800 ">Nike Air Max 97 SE</h3>
                <p className="text-sm text-gray-600">Men's Shoes</p>
            <p className="text-sm text-gray-500">Flat Pewter/Light Bone/Black/White</p>
<span className='flex'><p className="text-sm text-gray-500 m-5">Size: 8</p>
<p className='text-sm text-gray-500 m-5'>Quantity: 1</p></span>
<span className='flex gap-5'><CiHeart size={20}/> <GoTrash/></span>
              </div>
              <div className="text-right">
                <p className="font-medium">₹ 16,995.00</p>
                <button className="text-sm text-red-500 hover:underline mt-2">Remove</button>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="bg-white rounded-lg p-6 border border-gray-100">
            <h2 className="text-lg font-bold mb-4">Summary</h2>
            <div className="flex justify-between mb-2">
              <p className="text-gray-600">Subtotal</p>
              <p className="font-medium">₹ 20,890.00</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="text-gray-600">Estimated Delivery & Handling</p>
              <p className="font-medium">Free</p>
            </div>
            <div className="flex justify-between text-lg font-bold border-t pt-4">
              <p>Total</p>
              <p>₹ 20,890.00</p>
            </div>
            <button className="w-full bg-black text-white font-medium py-3 rounded-full mt-4">
              Member Checkout
            </button>
          </div>
        </div>

        {/* Free Delivery Section */}
        <div className="mt-6 text-sm text-gray-500">
          Free Delivery applies to orders of ₹ 14,000.00 or more.{' '}
          <a href="#" className="text-blue-500 hover:underline">
            View details
          </a>
        </div>
      </div>
    </div>
  );
}

