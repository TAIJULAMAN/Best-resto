"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Input } from "../ui/input";
import {
  ChevronDown,
  Search,
  ShoppingCart,
  TableOfContents,
  User,
} from "lucide-react";
import Container from "../ui/container";
import { Button } from "@/components/ui/button";
import image from "../../assets/image/logo.png";

const categoriesData = ["Dessert", "Noodles", "Rice"];

const Navbar = () => {
  // State to toggle the dropdown menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <Container>
        <nav className="flex items-center justify-between pt-8 pb-5">
          {/* Logo */}
          <div className="mr-8">
            <Link href={"/"}>
              <Image
                src={image}
                alt="logo"
                width={200}
                height={100}
                className="h-12 w-auto md:h-16 lg:h-auto"
              />
            </Link>
          </div>
          {/* Navigation Links and Search */}
          <div className="flex flex-1 items-center justify-center gap-5 mr-12">
            {/* Search Bar */}
            <div className="relative hidden w-2/3 items-center lg:flex xl:w-1/2 max-w-md">
              <Input
                type="text"
                placeholder={"Search...."}
                className="w-full min-w-[250px] rounded-full pl-10"
              />
              <Search
                className="absolute left-4 border-none font-light"
                size={20}
              />
              <Button
                type="submit"
                className="absolute right-0 rounded-l-none rounded-r-full bg-[#FF7D29]"
              >
                Search
              </Button>
            </div>

            {/* Navigation Links */}
            <nav>
              <ul className="hidden items-center gap-5 text-light-black xl:flex">
                {/* Dropdown Menu */}
                <li className="relative">
                  <button
                    className="flex items-center text-black cursor-pointer btn-shine"
                    onClick={toggleMenu}
                  >
                    All Categories
                    <ChevronDown className="ml-2" size={20} />
                  </button>
                  {isMenuOpen && (
                    <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md">
                      <ul>
                        <li>
                          <Link
                            href={`/menu-items`}
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            All Categories
                          </Link>
                        </li>
                        {categoriesData.map((category, idx) => (
                          <li key={idx}>
                            <Link
                              href={`/menu-items`}
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              {category}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>

                {/* Other Links */}
                <li className="duration-100">
                  <Link href="/coupon" className="truncate btn-shine">
                    Coupon
                  </Link>
                </li>
                <li className="duration-100">
                  <Link href="/support" className="truncate btn-shine">
                    Support
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* Icons */}
          <div className="hidden items-center gap-2 xl:flex">
            <Link href={"/cart"} className="relative">
              <ShoppingCart />
            </Link>
            <Link href={"/user/profile"}>
              <User />
            </Link>
          </div>
          {/* Small Device Menu */}
          <div className="xl:hidden flex items-center justify-center gap-4">
            <div className="flex items-center justify-start gap-4">
              <Link href={"/cart"} className="relative">
                <ShoppingCart />
              </Link>
              <Link href={"/user/profile"}>
                <User />
              </Link>
            </div>
            <div>
              <button
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="flex items-center"
              >
                <TableOfContents size={24} />
              </button>
            </div>
            {isMobileMenuOpen && (
              <div className="absolute top-16 left-0 w-full bg-white shadow-md z-50">
                <div className="p-4">
                  {/* Search Bar */}
                  <div className="relative items-center mt-10">
                    <Input
                      type="text"
                      placeholder="Search"
                      className="w-full rounded-full"
                    />
                    <Button
                      type="submit"
                      className="absolute right-0 top-0 rounded-l-none rounded-r-full bg-[#FF7D29]"
                    >
                      Search
                    </Button>
                  </div>

                  {/* Navigation Links */}
                  <nav>
                    <ul className="flex flex-col items-start gap-y-2 py-10">
                      {/* Dropdown Menu */}
                      <li className="w-full">
                        <button
                          className="flex items-center justify-between w-full py-2 rounded btn-shine"
                          onClick={toggleMenu}
                        >
                          All Categories
                          <ChevronDown size={20} />
                        </button>
                        {isMenuOpen && (
                          <div className="my-5 w-full bg-white shadow-lg rounded-md">
                            <ul>
                              <li>
                                <Link
                                  href={`/menu-items`}
                                  className="block px-4 py-2 hover:bg-gray-100"
                                >
                                  All Categories
                                </Link>
                              </li>
                              {categoriesData.map((category, idx) => (
                                <li key={idx}>
                                  <Link
                                    href={`/menu-items`}
                                    className="block px-4 py-2 hover:bg-gray-100"
                                  >
                                    {category}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </li>

                      <li>
                        <Link href="/coupon">Coupon</Link>
                      </li>
                      <li>
                        <Link href="/support">Support</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </nav>
      </Container>
      <hr />
    </>
  );
};

export default Navbar;
