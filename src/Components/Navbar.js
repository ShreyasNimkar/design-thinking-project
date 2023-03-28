import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-around items-center w-full h-[10vh]  sticky top-0 bg-[#313131] border-b-2 border-white text-white">
        <a
          href="/product"
          className="w-[10%] h-full text-center flex justify-around items-center"
        >
          V&nbsp;&nbsp;B&nbsp;&nbsp;A&nbsp;&nbsp;Y
        </a>
        <div className="w-[45%] h-[50%] flex justify-around items-center">
          <div className="relative  flex w-[80%]  justify-around items-center ">
            <input
              type="search"
              className="relative m-0  -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon1"
            />
            <button
              className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
              type="button"
              id="button-addon1"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 "
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className=" w-[45%] h-full">
          <div className="flex justify-around items-start text-center h-full p-2 gap-2">
            {/* <button className=" w-full h-full transition duration-300 ease-in-out hover:bg-[white] hover:text-black ">
              Profile
            </button> */}

            <a
              href={"/login"}
              className="pt-[0.8rem] w-[20%] h-full transition duration-300 ease-in-out hover:bg-[white] hover:text-black"
            >
              Log Out
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
