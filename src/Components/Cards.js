import React from "react";

const Cards = ({ data }) => {
  console.log(data);
  return (
    <a
      href={`/product/${data.id}`}
      class="flex justify-center w-[30%] h-[80vh] py-4 cursor-pointer"
    >
      <div class="block max-w-sm rounded-lg  shadow-lg bg-[#313131] border-2 border-white">
        <div
          href="#!"
          data-te-ripple-init
          data-te-ripple-color="light"
          className="flex  justify-around items-center h-2/3 w-[100%]"
        >
          <img src={`${data.image}.png`} alt="" className="h-auto  w-[60%]" />
        </div>
        <div class="p-2 h-1/2">
          <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {data.name}
          </h5>
          <p class="mb-4 text-xs text-neutral-600 dark:text-neutral-200">
            {data.description}
          </p>
        </div>
      </div>
    </a>
  );
};

export default Cards;
