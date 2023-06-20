import React, { useState } from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";
import { Icon } from '@iconify/react';
import Image from "next/image";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white lg:p-0 p-4 border-b-2 z-40 fixed w-full font-fraunces border-b-sky-500">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 md:w-auto w-full h-full items-center flex justify-between">
          <Link href= '/'> 
          <p className="font-bold font-dancing text-indigo-900 text-2xl">EDUTECH</p>
          <p className="top-9 font-semibold text-sm text-indigo-900 left-7 tracking-widest absolute">cloud storage</p>
          </Link>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
      
            <Icon icon = {`${open ? "material-symbols:close" : "material-symbols:menu"}`} />
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link href ="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-black text-white z-40 fixed w-full top-16 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link href = "/" className="py-3 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
         
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
