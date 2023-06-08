import React, { useState } from "react";
import Link from "next/link";
import { links } from "./Mylinks";
import { signOut, useSession } from "next-auth/react";
import { Icon } from "@iconify/react";

const NavLinks = () => {
  const { data: session } = useSession();
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  
  return (
    <>
      {links.map((link) => (
        <div>
          <div className="px-3 text-left md:cursor-pointer group">
            <Link href = {link.linko}
              className="py-2 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                {link.submenu === true && (
                  <Icon
                    icon={`${
                      heading === link.name
                        ? "ion:chevron-up-outline"
                        : "ion:chevron-down-outline"
                    }`}
                  />
                )}
              </span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <Icon icon="ion:chevron-down-outline" />
              </span>
            </Link>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"
                    ></div>
                  </div>
                  <div className="bg-white p-5 grid grid-cols-3 gap-10">
                    {link.sublinks.map((mysublinks) => (
                      <div>
                        <h1 className="text-lg font-semibold">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          <li className="text-sm text-gray-600 my-2.5">
                            <Link
                              href={slink.link}
                              className="hover:text-primary"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <Link href = {slinks.linka}
                    
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center"
                  >
                    {slinks.Head}
                  </Link>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14">
                        <Link href={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <Link className="ml-3 mt-3" href="/signIn">
        Admin
      </Link>
      <div className="ml-3 mt-3">
        {" "}
        {session?.user && <button onClick={() => signOut({callbackUrl: "/"})}>Sign out</button>}
      </div>
      <div className="mt-3">
        {session?.user && (
          <Link className="ml-3 " href="/addProject">
            Add Project
          </Link>
        )}
      </div>
    </>
  );
};

export default NavLinks;
