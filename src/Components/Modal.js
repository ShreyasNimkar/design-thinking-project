import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
const Modal = ({
  modalData,
  setModalDataFunc,
  id,
  visible,
  onCloseFunc,
  memberData,
}) => {
  const notify = (el) =>
    toast.success(`Your Bid of ${el} has been placed !`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const [bid, setbid] = useState([]);
  modalData = {};
  const submitHandler = () => {
    console.log(bid);
    notify(bid);
  };
  const handleOnClose = (el) => {
    if (el.target.id === "modalcontainer") onCloseFunc();
  };
  if (!visible) return null;
  return (
    <>
      <div
        onClick={handleOnClose}
        id="modalcontainer"
        className="fixed cursor-default inset-0 bg-black bg-opacity-[0.2] backdrop-blur-sm flex items-center justify-center"
      >
        <div className=" w-[90%] h-[95vh] sm:h-[75vh] py-4 sm:py-16 bg-[#313131] flex justify-around items-center">
          <div className="w-[84%] h-full flex flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-[70%] h-[60%] sm:h-full">
              <p className="py-1 text-2xl">Current Bids</p>
              <p className="sm: border-2 border-white w-full text-left text-mahogany italic">
                <span className="text-md text-dimGray not-italic text-left">
                  Anindya&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span className="text-md text-dimGray not-italic text-left">
                  3.00 USD
                </span>
              </p>
              <p className="sm: border-2 border-white w-full text-left text-mahogany italic">
                <span className="text-md text-dimGray not-italic text-left">
                  Anindya&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span className="text-md text-dimGray not-italic text-left">
                  3.00 USD
                </span>
              </p>
              <p className="sm: border-2 border-white w-full text-left text-mahogany italic">
                <span className="text-md text-dimGray not-italic text-left">
                  Anindya&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span className="text-md text-dimGray not-italic text-left">
                  3.00 USD
                </span>
              </p>
              <p className="sm: border-2 border-white w-full text-left text-mahogany italic">
                <span className="text-md text-dimGray not-italic text-left">
                  Anindya&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span className="text-md text-dimGray not-italic text-left">
                  3.00 USD
                </span>
              </p>
              <p className="sm: border-2 border-white w-full text-left text-mahogany italic">
                <span className="text-md text-dimGray not-italic text-left">
                  Anindya&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span className="text-md text-dimGray not-italic text-left">
                  3.00 USD
                </span>
              </p>
              <p className="sm: border-2 border-white w-full text-left text-mahogany italic">
                <span className="text-md text-dimGray not-italic text-left">
                  Anindya&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span className="text-md text-dimGray not-italic text-left">
                  3.00 USD
                </span>
              </p>
              <p className="sm: border-2 border-white w-full text-left text-mahogany italic">
                <span className="text-md text-dimGray not-italic text-left">
                  Anindya&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span className="text-md text-dimGray not-italic text-left">
                  3.00 USD
                </span>
              </p>
              <p className="sm: border-2 border-white w-full text-left text-mahogany italic">
                <span className="text-md text-dimGray not-italic text-left">
                  Anindya&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span className="text-md text-dimGray not-italic text-left">
                  3.00 USD
                </span>
              </p>
              <p className="sm: border-2 border-white w-full text-left text-mahogany italic">
                <span className="text-md text-dimGray not-italic text-left">
                  Anindya&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span className="text-md text-dimGray not-italic text-left">
                  3.00 USD
                </span>
              </p>
              <p className="sm: border-2 border-white w-full text-left text-mahogany italic">
                <span className="text-md text-dimGray not-italic text-left">
                  Anindya&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span className="text-md text-dimGray not-italic text-left">
                  3.00 USD
                </span>
              </p>
              <p className="sm: border-2 border-white w-full text-left text-mahogany italic">
                <span className="text-md text-dimGray not-italic text-left">
                  Anindya&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span className="text-md text-dimGray not-italic text-left">
                  3.00 USD
                </span>
              </p>
              <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Price
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    onChange={(el) => {
                      setbid(el.target.value);
                    }}
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="0.00"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <label htmlFor="currency" className="sr-only">
                      Currency
                    </label>
                    <select
                      id="currency"
                      name="currency"
                      className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    >
                      <option>USD</option>
                      <option>CAD</option>
                      <option>EUR</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-[30%] h-[40%] sm:h-full overflow-hidden flex justify-around items-center ">
              <p
                onClick={() => {
                  submitHandler();
                }}
                className="border-2 border-white p-4 rounded-md cursor-pointer"
              >
                Place Bid
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
