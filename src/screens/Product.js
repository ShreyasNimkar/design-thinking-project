import React from "react";
import Navbar from "../Components/Navbar";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Modal from "../Components/Modal";
const Product = () => {
  const [thisProduct, setThisProduct] = useState([]);
  const [modalVisible, setModalVisible] = useState(null);
  const [modalData, setModalData] = useState([]);
  const handleModalOnClose = () => {
    setModalVisible(null);
  };
  const { id } = useParams();
  const product = {
    1: {
      id: 1,
      name: "Backpack",
      image: "bag",
      age: 12,
      mrp: 49.99,
      category: "Travel Accessories",
      owner: "Shreyas Nimkar",
      description:
        "The perfect backpack for hostellers, with ample storage space, multiple compartments, and comfortable straps for long-term wear.",
    },
    2: {
      id: 2,
      name: "Water Bottle",
      image: "waterbottle",
      age: 6,
      mrp: 14.99,
      category: "Drinkware",
      owner: "Shreyas Nimkar",
      description:
        "Stay hydrated all day long with this high-quality water bottle, which keeps drinks cold for up to 24 hours or hot for up to 12 hours.",
    },
    3: {
      id: 3,
      name: "Portable Charger",
      image: "portablecharger",
      age: 8,
      mrp: 29.99,
      category: "Electronics",
      owner: "Shreyas Nimkar",
      description:
        "Never run out of battery on your phone or other devices with this portable charger, which can recharge your device multiple times on a single charge.",
    },
    4: {
      id: 4,
      name: "Earplugs",
      image: "earplugs",
      age: 3,
      mrp: 9.99,
      category: "Sleep Accessories",
      owner: "Shreyas Nimkar",
      description:
        "Block out noise from other roommates or guests with these comfortable and effective earplugs, which are perfect for getting a good night's sleep.",
    },
    5: {
      id: 5,
      name: "Sleeping Bag",
      image: "sleepingbag",
      age: 18,
      mrp: 89.99,
      category: "Camping Gear",
      owner: "Shreyas Nimkar",
      description:
        "Stay warm and comfortable on your next camping trip or hostel stay with this high-quality sleeping bag, which is designed to keep you cozy in temperatures as low as 20°F.",
    },
    6: {
      id: 6,
      name: "Headlamp",
      image: "headlamp",
      age: 4,
      mrp: 24.99,
      category: "Outdoor Gear",
      owner: "Shreyas Nimkar",
      description:
        "Navigate dark hallways or outdoor spaces with ease using this durable and reliable headlamp, which features multiple lighting modes and a comfortable fit.",
    },
    7: {
      id: 7,
      name: "Towel",
      image: "towel",
      age: 9,
      mrp: 19.99,
      category: "Bath & Shower",
      owner: "Shreyas Nimkar",
      description:
        "Stay clean and dry with this high-performance towel, which dries quickly and can be easily packed into a small space for travel.",
    },
    8: {
      id: 8,
      name: "Laundry Bag",
      image: "laundrybag",
      age: 2,
      mrp: 12.99,
      category: "Storage & Organization",
      owner: "Shreyas Nimkar",
      description:
        "Keep your dirty clothes separate and organized with this lightweight and breathable laundry bag, which features a pop-up design for easy storage and transport.",
    },
  };
  useEffect(() => {
    console.log(product[id]);
    setThisProduct(product[id]);
  }, []);
  return (
    <>
      <Navbar />
      <div className="h-[90vh] w-full bg-black text-white">
        <div className="h-full  ">
          <div className="h-full flex items-center justify-around ">
            <div className=" w-10/12 h-[80%] ">
              <div className="flex w-full h-full  justify-around items-center border-2 border-white bg-[#313131] rounded">
                <div className="w-1/3 p-2 h-full flex flex-col items-center justify-around border-r-2">
                  <img
                    className="p-2"
                    src={`/${product[id].image}.png`}
                    alt="asd"
                  />
                </div>
                <div className="w-2/3 flex flex-col p-2 justify-center h-full">
                  <div className="flex flex-col  pl-3 h-4/5 justify-center">
                    <div className="text-6xl">{thisProduct.name}</div>
                    <div className=" mt-4">
                      Category: {thisProduct.category}
                    </div>
                    <div className=" mt-2">
                      Description: {thisProduct.description}
                    </div>
                    <div className=" mt-2">Product Age: {thisProduct.age}</div>
                    <div className=" mt-2">
                      Product MRP: {thisProduct.mrp} Rs
                    </div>
                    <div className=" mt-2 ">
                      Product Owner:{thisProduct.owner}
                      {/* <Link
                      className="text-3xl text-green-500 hover:text-green-300"
                      to={`/user/${product.listedBy.id}`}
                      >
                      {product.listedBy.username}
                    </Link> */}
                    </div>
                  </div>
                  <div className="h-1/5 w-full flex justify-around items-center">
                    <div className="relative text-center  p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md w-2/5">
                      <span className="w-full   h-full bg-gradient-to-br from-[#DC2ADE] via-[#4D089A] to-[#323EDD] group-hover:from-[#323EDD] group-hover:via-[#4D089A] group-hover:to-[#DC2ADE] absolute"></span>
                      <span className="relative  cursor-pointer w-full px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                        <span
                          onClick={() => {
                            setModalVisible();
                          }}
                          className="relative cursor-pointer text-white"
                        >
                          Bid Now
                        </span>
                        {modalVisible !== null && (
                          <Modal
                            onCloseFunc={handleModalOnClose}
                            visible={true}
                            id={modalVisible}
                            modalData={modalData}
                            setModalDataFunc={(el) => {
                              setModalData(el);
                            }}
                            // memberData={memberData}
                          />
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
