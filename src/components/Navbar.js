import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { BsSearch } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineShoppingCart,AiOutlineBars } from "react-icons/ai";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {

  return (
    <>
    
      <div className="container bg-red-600 pt-4 ">
        <nav className="flex justify-between max-w-7xl m-auto p-4 md:p-2">
          <div className="text-3xl md:text-2xl lg:text-4xl mb-2 ">
            <strong className="">Store Name</strong>
          </div>
          <div className="hidden md:block">
          <Menu as="div" className="relative inline-block text-left ">
            <div className="">
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-white-300 ">
                <AiOutlineBars
                className="w-5 h-5 text-white-500"/>
                <strong className="">Departments</strong>
                <ChevronDownIcon
                  className="h-5 w-5 text-white-500"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Pharmacy
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Mobile & Tablets
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Mens Fashion
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block w-full px-4 py-2 text-left text-sm"
                      )}
                    >
                      Womens Fashion
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block w-full px-4 py-2 text-left text-sm"
                      )}
                    >
                      Home & Lifestyle
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block w-full px-4 py-2 text-left text-sm"
                      )}
                    >
                      Electronic Accessories
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block w-full px-4 py-2 text-left text-sm"
                      )}
                    >
                      Health & Beauty
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Menu>
          </div>
          <div className="relative w-1/2 md:w-96 md:ml-4 sm:mr-10 sm: grid-col-12">
            <input
              className="border p-2 pl-1 w-full rounded-full text-sm focus:outline-none md:pl-6 "
              type="text"
              placeholder="Search here"
            />
            <BsSearch className="absolute top-0 right-2 mt-2 ml-80  sm:top-0 right-1 mt-3 mr-0" />
          </div> 

          <div className="flex md:flex-row space-x-4 text-white space-x-2 flex-col ">
            <div className="cursor-pointer hover:scale-y-110 ml-3 md:ml-0">
              <MdAccountCircle className="w-10 h-10 sm:w-8 h-8"/> <span className="text-lg sm:text-md">Account</span>
 
            </div>
            <div className="cursor-pointer hover:scale-y-110">
              <AiFillHeart className="w-10 h-10 sm:w-8 h-8"/> <span className="text-lg sm:text-md"> Wishlist </span>
            </div>
            <div className="cursor-pointer hover:scale-y-110">
              <AiOutlineShoppingCart className="w-10 h-10 sm:w-8 h-8"/> <span className="text-lg sm:text-md">Carts</span> 
            </div>
          </div>
          <div className="md:hidden ml-4 md:ml-0">  
            <Menu as="div" className="relative inline-block text-left ">
            <div className="">
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-white-300 ">
                <AiOutlineBars
                className="w-5 h-5 text-white-500"/>
              </Menu.Button>
            </div>
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Pharmacy
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Mobile & Tablets
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Mens Fashion
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block w-full px-4 py-2 text-left text-sm"
                      )}
                    >
                      Womens Fashion
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block w-full px-4 py-2 text-left text-sm"
                      )}
                    >
                      Home & Lifestyle
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block w-full px-4 py-2 text-left text-sm"
                      )}
                    >
                      Electronic Accessories
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block w-full px-4 py-2 text-left text-sm"
                      )}
                    >
                      Health & Beauty
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
            </Menu>
          </div>
        </nav>
      </div>

    </>
  );
}

export default Navbar;
