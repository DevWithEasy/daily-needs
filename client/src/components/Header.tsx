import { Link } from "react-router-dom";
import logo from "./../assets/image/logo.webp";
import { BsFacebook, BsYoutube, BsLinkedin, BsCart2 } from "react-icons/bs";
import { AiFillInstagram, AiOutlineMenu } from "react-icons/ai";
import { BiDownArrow, BiSearch } from "react-icons/bi";
import { HiOutlineSpeakerphone } from "react-icons/hi";
const Header = () => {
  return (
    <div className="pt-2 border-b-2 shadow">
      <div className="w-11/12 mx-auto">
        <div className="flex items-center">
          <div className="w-3/12">
            <img src={logo} alt="" className="h-16" />
          </div>
          <div className="w-9/12 flex justify-between items-center">
            <div className="space-x-4">
              <Link
                to="/home"
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
            <div className="w-full p-2 flex items-center justify-between uppercase group bg-green-600 text-white cursor-pointer">
              <div className="flex items-center space-x-2">
                <AiOutlineMenu size={22} />
                <span>Browse Categories</span>
              </div>
              <BiDownArrow className="group-hover:rotate-180 group-hover:transition-all group-hover:dutation-500" />
            </div>
          </div>
          <div className="w-9/12 flex items-center space-x-4">
            <Link
              to=""
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
              <button className="upprescase">Login/Register</button>
              <Link to="/cart" className="flex items-center space-x-4">
                <div className="relative">
                  <BsCart2 size={25} />
                  <span className="flex justify-center items-center w-6 h-6 absolute -right-3 -top-3 bg-green-600 text-xs text-white text-center rounded-full">
                    5
                  </span>
                </div>
                <span className="text-sm font-medium"> ৳ 120</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
