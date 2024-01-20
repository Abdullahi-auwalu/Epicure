import { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsFillCartFill, BsPerson } from "react-icons/bs";
import { TbTruckReturn } from "react-icons/tb";
import { FaGoogleWallet } from "react-icons/fa";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoMdHelp } from "react-icons/io";

const TopNav = () => {
  const [sideNav, setSideNav] = useState(false);

  return (
    <div className="max-w-[1520px] flex justify-between p-4  mx-auto items-center ">
      <div className="flex items-center">
        <div onClick={() => setSideNav(!sideNav)} className="cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>
        <h1
          className="text-2xl sm:text-3xl lg:text-4xl p-4
          text-orange-700 font-bold "
        >
          Epi<span className="text-black font-medium">cure</span>
        </h1>

        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-orange-700 text-white rounded-full p-2 text-bold">
            Free
          </p>
          <p className="p-2 text-bold">Delivery</p>
        </div>
      </div>
      <div className="bg-gray-200 rounded-full flex item-center  h-[30px] px-2  w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} top={3} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="search meals"
        />
      </div>
      <button className="bg-orange-700 border-none text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill />
        Cart
      </button>
      {sideNav ? (
        <div
          className="bg-black/60 fixed w-full h-screen left-0 top-0 z-10"
          onClick={() => setSideNav(!sideNav)}
        ></div>
      ) : (
        ""
      )}

      <div
        className={
          sideNav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 "
            : "fixed top-0 left-[-999px] w-[300px] h-screen bg-white z-10  duration-300 "
        }
      >
        <AiOutlineClose
          onClick={() => setSideNav(!sideNav)}
          size={25}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-orange-700 font-bold  text-2xl p-4">
          Epi<span className="text-black font-medium">cure</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-900">
            <li className="text-xl py-4 flex">
              <BsPerson
                size={25}
                className="mr-4 text-white bg-black rounded-full"
              />
              My Account
            </li>
            <li className="text-xl py-4 flex">
              <TbTruckReturn
                size={25}
                className="mr-4 text-white bg-black rounded-full"
              />
              Delivery
            </li>
            <li className="text-xl py-4 flex">
              <MdOutlineFavoriteBorder
                size={25}
                className="mr-4 text-white bg-black rounded-full"
              />
              My Favourite
            </li>
            <li className="text-xl py-4 flex">
              <FaGoogleWallet
                size={25}
                className="mr-4 text-white bg-black rounded-full"
              />
              My Wallet
            </li>
            <li className="text-xl py-4 flex">
              <IoMdHelp
                size={25}
                className="mr-4 text-white bg-black rounded-full"
              />
              Help
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TopNav;
