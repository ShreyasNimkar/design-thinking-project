import React from "react";
import Cards from "../Components/Cards";
import Navbar from "../Components/Navbar";
const Profile = () => {
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
  return (
    <>
      <div className="h-screen overflow-hidden">
        <img
          className="absolute h-full opacity-90 -z-30 -ml-40 mr-96"
          src="./assets/blob1.png"
          alt="blob"
        />
        {/* <img
          className="absolute h-full opacity-90 -z-30 bottom-0 right-0"
          src="./assets/mossyfern.png"
          alt="blob"
        /> */}
        <div className="h-full flex items-center justify-around">
          {/* <div className="xs:hidden md:block lg:block w-1/12 flex-col h-95/100  ">
            <Navbar />
          </div> */}
          <div className="relative w-10/12 h-95/100 rounded-tr-3xl bg-[rgba(0,0,0,0.75)] border-1 border-white">
            <div className="border-b-1 border-white h-1/4 w-full flex justify-between items-center">
              <div className=" xs:w-3/4 xs:h-3/4 sm:w-1/2 sm:h-full md:h-full md:w-full h-full flex justify-around items-center">
                <div className="flex justify-evenly items-center">
                  <img
                    className=" w-1/6 h-1/6 rounded-full border-1 border-white"
                    // src={`${envHandler("BACKEND_URL")}/users/profilePics/${
                    //   user.profilePic
                    // }`}
                    src={
                      "https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png"
                    }
                    alt="A"
                  />
                  <div className="w-3/5 h-1/2">
                    Name : <br />
                    <span className="text-4xl">user.name</span>
                  </div>
                </div>
                <div className="w-2/5">
                  Username : <br />
                  <span className="text-4xl">@user.username</span>
                </div>
              </div>
            </div>
            <div className=" h-3/4 full flex gap-3 flex-col overflow-y-hidden">
              <div className="h-1/2 w-full flex gap-2 flex-col flex-wrap items-start overflow-x-scroll justify-around">
                {Object.entries(product).map(([id, data]) => (
                  <Cards key={id} data={data} />
                ))}
              </div>
              <div className="absolute p-5 bottom-70 left-0 text-3xl">
                Solos
              </div>
              <div className="absolute p-5 bottom-70 right-0">
                {/* <AddProduct reload={setReload} /> */}
              </div>
              <div className="h-1/2 w-full flex gap-2 flex-col flex-wrap items-start overflow-x-scroll justify-around">
                {Object.entries(product).map(([id, data]) => (
                  <Cards key={id} data={data} />
                ))}
              </div>
            </div>
            <div className="absolute p-5 bottom-0 right-0">
              {/* <AddStack reload={setReload} /> */}
            </div>
            <div className="absolute p-5 bottom-0 left-0 text-3xl">Stacks</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
