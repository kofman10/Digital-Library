import React, { useState } from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";
import { Icon } from '@iconify/react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <h1>EDUTECH PROJECT</h1>
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
        md:hidden bg-white z-40 fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
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
