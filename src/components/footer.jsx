"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import Button from "./ui/Button";
// import Footer_img from "/public";

export default function footer() {
  return (
    <footer className="">
      <section className="flower_background h-[60vh] lg:min-h-screen relative">
        <div className="container-sm px-8">
          <div className="flex items-start justify-start pt-2 lg:pt-64">
            <div className="bg-forest-green-700 flex-2 w-[343px] h-[329px] lg:w-[615px] lg:h-[256px] p-10 rounded-lg">
              <p className="text-white text-[20px] font-bold mb-7">
                Subscribe to our newsletter
              </p>
              <p className="text-white text-[14px] lg:text-[20px] font-extralight hero-title mb-5">
                Be the first to know about exclusive offers, eco-tips, and new{" "}
                <br />
                arrivals!
              </p>
              <div className="w-[250px] lg:w-[350px] h-[40px] bg-white relative flex items-center rounded-md shadow-sm border">
                <IoMailOutline className="absolute left-2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Your email"
                  className="flex-grow pl-8 pr-4 py-2 bg-transparent border-none outline-none text-gray-800"
                />
                <button className="text-white bg-green-800 hover:bg-green-600 -mx-1 px-4 py-2 rounded-md transition-all">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="bg-red-500 flex-1"></div>
          </div>
        </div>
      </section>
      <div className="bg-forest-green-700">
        <div className=" px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.7fr,3.3fr] gap-10 text-white container mx-auto px-4 py-4">
            {/* <div className="flex text-white container mx-auto px-4 py-4"> */}
            <div className="w-[143px] h-[65px]">
              <Image
                width={400}
                height={400}
                src="/images/Footer_img.png"
                alt="logo of FYSI"
                className="w-full"
              />
              <h3 className="text-white mt-2">Shop Smart.Live Green</h3>
            </div>
            {/* <div className="grid grid-cols-1   lg:grid-cols-6 pt-8 gap-4"> */}
            <div className="flex flex-wrap gap-10 pt-8 justify-between">
              <div className="flex flex-col gap-1">
                <IoIosMenu size={24} className="cursor-pointer" />
                <div>
                  <Link
                    href="/contact"
                    className="cursor-pointer text-[12px] font-normal"
                  >
                    Contact
                  </Link>
                </div>
                <div>
                  <Link
                    href="/contact"
                    className="cursor-pointer text-[12px] font-normal"
                  >
                    Instagram
                  </Link>
                </div>
                <div>
                  <Link
                    href="/contact"
                    className="cursor-pointer text-[12px] font-normal"
                  >
                    X
                  </Link>
                </div>
                <div>
                  <Link
                    href="/contact"
                    className="cursor-pointer text-[12px] font-normal"
                  >
                    Facebook
                  </Link>
                </div>
                <div>
                  <Link
                    href="/contact"
                    className="cursor-pointer text-[12px] font-normal"
                  >
                    Returns &Refunds
                  </Link>
                </div>
                <div>
                  <Link
                    href="/contact"
                    className="cursor-pointer text-[12px]  font-normal"
                  >
                    Report a Product/Problem
                  </Link>
                </div>
              </div>
              <div className="flex gap-1 flex-col">
                <h1 className="font-medium text-[16px]">Catalogue</h1>
                <div>
                  <Link href="/contact" className="cursor-pointer text-[12px]">
                    Clothing
                  </Link>
                </div>
                <div>
                  <Link href="/contact" className="cursor-pointer text-[12px]">
                    Kitchen Items
                  </Link>
                </div>
                <div>
                  <Link href="/contact" className="cursor-pointer text-[12px]">
                    Personal Care
                  </Link>
                </div>
                <div>
                  <Link href="/contact" className="cursor-pointer text-[12px]">
                    Office Supplies
                  </Link>
                </div>
                <div>
                  <Link href="/contact" className="cursor-pointer text-[12px]">
                    Household Items
                  </Link>
                </div>
                <div>
                  <Link href="/contact" className="cursor-pointer text-[12px]">
                    Beauty & Cosmetics
                  </Link>
                </div>
                <div>
                  <Link href="/contact" className="cursor-pointer text-[12px]">
                    Outdoor & Travel
                  </Link>
                </div>
              </div>
              <div className="flex gap-1 flex-col">
                <h1 className="font-medium text-[16px]">Account</h1>
                <div>
                  <Link href="/contact" className="cursor-pointer text-[12px]">
                    Sign in
                  </Link>
                </div>
                <div>
                  <Link href="/contact" className="cursor-pointer text-[12px]">
                    Order history
                  </Link>
                </div>
                <div>
                  <Link href="/contact" className="cursor-pointer text-[12px]">
                    Profile
                  </Link>
                </div>
                <div>
                  <Link href="/contact" className="cursor-pointer text-[12px]">
                    WishList
                  </Link>
                </div>
                <div>
                  <Link href="/contact" className="cursor-pointer text-[12px]">
                    Payment
                  </Link>
                </div>
              </div>
              {/* <div>
              <h1 className="font-medium text-[16px]">About</h1>
            </div> */}
              <div>
                <h1 className="font-medium text-[16px]">Support</h1>
                <div>
                  <Link href="/faq" className="cursor-pointer text-[12px]">
                    FAQS
                  </Link>
                </div>
                <div>
                  <Link href="/contact" className="cursor-pointer text-[12px]">
                    Help Center
                  </Link>
                </div>
              </div>
              <div>
                <h1 className="font-medium text-[16px] mb-2">Sell on Fysi</h1>
                <div className="flex space-x-4">
                  <Link href="/facebook" className="block">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                      <FaFacebookF className="text-black w-5 h-5" />
                    </div>
                  </Link>
                  <Link href="/instagram" className="block">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                      <ImInstagram className="text-black w-5 h-5" />
                    </div>
                  </Link>
                  <Link href="/twitter" className="block">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                      <FaTwitter className="text-black w-5 h-5" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <hr className="text-red-400" />

          <div className="flex items-center justify-between flex-col lg:flex-row  w-full space-y-2 lg:space-y-0 lg:space-x-4 lg:w-auto ">
            <div className="flex items-center justify-center gap-2 lg:gap-4 py-2 flex-col lg:flex-row">
              <div className="text-white">
                <Link href="/" className="cursor-pointer text-[12px]">
                  Terms and Conditions
                </Link>
              </div>
              <div className="text-white">
                <Link href="/" className="cursor-pointer text-[12px]">
                  Privacy Policy
                </Link>
              </div>
              <div className="text-white">
                <Link href="/" className="cursor-pointer text-[12px]">
                  {" "}
                  Legal Notice
                </Link>
              </div>
            </div>
            <div className="text-white text-[12px]">
              @2023 Fysi.All right reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
