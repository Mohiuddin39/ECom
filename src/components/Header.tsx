"use client";
import React from "react";
import Logo from "./Logo";
import { navigation } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, ShoppingBagIcon } from "lucide-react";

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="w-full h-20 bg-white bg-white/80 border-b-[1px] border-zinc-500 text-zinc-600 sticky top-0 z-50 backdrop:blur-2xl ">
      <div className="flex items-center h-full max-w-screen-xl mx-auto px-4 lg:px-0 justify-between">
        {/* Logo */}
        <Logo />
        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-5 text-sm uppercase font-semibold">
          {navigation.map((item) => (
            <Link href={item?.href} key={item?._id}>
              <li
                className={`hover:text-black cursor-pointer duration-200 relative overflow-hidden group ${
                  item.href === pathname && "text-designColor"
                }`}
              >
                {item?.title}
                <span
                  className={`absolute h-[1px] w-full bg-blue-700 left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500 ${
                    item.href === pathname && "translate-x-0 bg-designColor"
                  }`}
                />
              </li>
            </Link>
          ))}
        </ul>
        {/* icons */}
        <div className="flex items-center gap-x-5">
          <Link
            href={"/wishlist"}
            className="hover:text-black cursor-pointer duration-200 relative group"
          >
            <Heart className="w-7 h-7" />
            <span className="absolute top-0 -left-1 bg-zinc-800 w-4 h-4 flex items-center justify-center text-zinc-200  rounded-full text-sm group-hover:bg-black font-semibold group-hover:text-white">
              0
            </span>
          </Link>
          <Link
            href={"/cart"}
            className="hover:text-black cursor-pointer duration-200 relative group"
          >
            <ShoppingBagIcon className="w-7 h-7" />
            <span className="absolute top-0 -left-1 bg-zinc-800 w-4 h-4 flex items-center justify-center text-zinc-200  rounded-full text-sm group-hover:bg-black font-semibold group-hover:text-white">
              0
            </span>
          </Link>
          <button className="hover:text-black cursor-pointer duration-200 relative overflow-hidden group text-sm uppercase font-semibold">
            Login
            <span className="absolute h-[1px] w-full bg-blue-700 left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
