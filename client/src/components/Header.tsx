import { Link } from "react-router-dom";
import logo from "./../assets/image/logo.webp";
import { BsFacebook, BsYoutube, BsLinkedin, BsCart2 } from "react-icons/bs";
import { AiFillInstagram, AiOutlineMenu } from "react-icons/ai";
import { BiDownArrow, BiSearch } from "react-icons/bi";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import {LoginModal} from "./Index";
import { useState } from "react";
import useProductStore from "../store/productStore";
import { CartProductTypes } from "../store/store.types";
import CategoryDrawer from "./CategoryDrawer";
const Header = () => {
  const {cart} = useProductStore()
  const [view, setView] = useState(false)
  const [drawerView, setDrawerView] = useState(false)
  const handleView = () => {
    setView(!view);
  };
  const handleDrawerView = () => {
    setDrawerView(!drawerView);
  };
  const total = cart.reduce((acc: number, cur: CartProductTypes) => acc + cur.price * cur.buyQuantity, 0)
  return (
    <div className="sticky top-0 pt-2 bg-white border-b-2 shadow">
      <div className="w-11/12 mx-auto">
        <div className="flex items-center">
          <div className="w-3/12">
            <img src={logo} alt="" className="h-16" />
          </div>
          <div className="w-9/12 flex justify-between items-center">
            <div className="space-x-4">
              <Link
                to="/"
                className="uppercase font-semibold px-2 hover:text-green-600"
              >
                Home
              </Link>
              <Link
                to="/products"
                className="uppercase font-semibold px-2 border-l hover:text-green-600"
              >
                Products
              </Link>
              <Link
                to="/blogs"
                className="uppercase font-semibold px-2 border-l hover:text-green-600"
              >
                Blog
              </Link>
              <Link
                to="/outlets"
                className="uppercase font-semibold px-2 border-l hover:text-green-600"
              >
                Outlets
              </Link>
              <Link
                to="/investment"
                className="uppercase font-semibold px-2 border-l hover:text-green-600"
              >
                Halal Invesment
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <a href="" target="_blank">
                <BsFacebook size={30} className="p-1 bg-blue-500 text-white" />
              </a>
              <a href="" target="_blank">
                <AiFillInstagram
                  size={30}
                  className="p-1 bg-red-900 text-white"
                />
              </a>
              <a href="" target="_blank">
                <BsYoutube size={30} className="p-1 bg-red-500 text-white" />
              </a>
              <a href="" target="_blank">
                <BsLinkedin size={30} className="p-1 bg-blue-600 text-white" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center mb-[2px] space-x-2">
          <div className="w-3/12">
            <div
              onClick={handleDrawerView}
              className="w-full p-2 flex items-center justify-between bg-green-600 text-white cursor-pointer"
            >
              <div className="relative flex items-center space-x-2">
                <AiOutlineMenu size={22} />
                <span className="uppercase">Browse Categories</span>
              </div>
              <BiDownArrow className={`${drawerView && 'rotate-180'}`} />
              {drawerView &&
                  <CategoryDrawer {...{
                    view : drawerView,
                    handleView : handleDrawerView
                  }}/>
              }
            </div>
          </div>
          <div className="w-9/12 flex items-center space-x-4">
            <Link
              to="/offers"
              className="w-28 px-4 py-2 flex items-center uppercase bg-gray-200 hover:bg-yellow-600 hover:text-white"
            >
              <HiOutlineSpeakerphone size={20} />
              <span>Offer</span>
            </Link>
            <div className="w-full flex items-center p-2 border-2 border-green-600 rounded">
              <input
                placeholder="Search for products"
                className="w-full px-2 focus:outline-none placeholder:text-green-600"
              />
              <BiSearch size={20} className="cursor-pointer" />
            </div>
            <div className="w-96 flex items-center space-x-4">
              <button onClick={handleView} className="upprescase">
                Login/Register
              </button>
              <Link to="/cart" className="flex items-center space-x-4">
                <div className="relative">
                  <BsCart2 size={25} />
                  <span className="flex justify-center items-center w-6 h-6 absolute -right-3 -top-3 bg-green-600 text-xs text-white text-center rounded-full">
                    {cart.length}
                  </span>
                </div>
                <span className="text-sm font-medium"> ৳ {total}</span>
              </Link>
              {view &&
                <LoginModal {...{
                  view,
                  handleView
                }} />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
