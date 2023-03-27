import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
const Product = () => {
    const product = {}
  return (<>
<Navbar/>
   <div className='h-[90vh] w-full'>
            <div className="h-full ">
        <div className="h-full flex items-center justify-around">
          
          <div className=" w-10/12 h-[80%] border-1 border-white">
            <div className="flex w-full h-full justify-around items-center">
              <div className="w-1/3 p-2 h-full flex flex-col items-center justify-around">
                <img
                  className="p-2"
                  //   src={`${envHandler("BACKEND_URL")}/${product.images[0]}`}
                  alt=""
                  />
              </div>
              <div className="w-2/3 flex flex-col justify-center h-full">
                <div className="flex flex-col  pl-3 h-4/5 justify-center">
                  <div className="text-6xl">{product.title}</div>
                  <div className=" mt-4">Category: {product.category}</div>
                  <div className=" mt-2">
                    Description: {product.description}
                  </div>
                  <div className=" mt-2">Product Age: {product.age}</div>
                  <div className=" mt-2">Product MRP: {product.mrp}</div>
                  <div className=" mt-2 ">
                    Product Owner:
                    {/* <Link
                      className="text-3xl text-green-500 hover:text-green-300"
                      to={`/user/${product.listedBy.id}`}
                      >
                      {product.listedBy.username}
                    </Link> */}
                  </div>
                </div>
                <div className="h-1/5 w-full flex justify-around items-center">
                  <a
                    href="/trade"
                    className="relative text-center w-1/3 p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md w-1/5"
                    >
                    <span className="w-full  h-full bg-gradient-to-br from-[#DC2ADE] via-[#4D089A] to-[#323EDD] group-hover:from-[#323EDD] group-hover:via-[#4D089A] group-hover:to-[#DC2ADE] absolute"></span>
                    <span className="relative w-full px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                      <span className="relative text-white">Trade Now</span>
                    </span>
                  </a>
                  {/* <a
                    href="#_"
                    className="relative text-center p-0.5 w-1/3 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md w-1/5"
                    >
                    <span className="w-full  h-full bg-gradient-to-br from-[#DC2ADE] via-[#4D089A] to-[#323EDD] group-hover:from-[#323EDD] group-hover:via-[#4D089A] group-hover:to-[#DC2ADE] absolute"></span>
                    <span className="relative w-full px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                    <span className="relative text-white">Login</span>
                    </span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

                </div>
                  </>
  )
}

export default Product
