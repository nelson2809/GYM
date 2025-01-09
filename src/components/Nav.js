"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiCloseLine } from "react-icons/ri";
import { TbMenu } from "react-icons/tb";

const Nav = ({ nav, setNav }) => {
  const pathname = usePathname();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const NavLink = ({ href, title, className = "" }) => {
    return (
      <Link
        onClick={() => setNav(false)}
        href={href}
        className={`${className} relative group`}
      >
        {title}
        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
      </Link>
    );
  };

  return (
    <>
      <nav className="flex justify-end md:w-1/2 xl:w-1/3 px-8">
        <ul className="hidden w-full md:flex justify-between gap-5 uppercase tracking-[0.2em] font-[teko] text-white text-primaryText lg:text-base">
          <li className="py-4">
            <NavLink
              href={"/"}
              title={"Home"}
              className={
                pathname === "/"
                  ? "text-accent"
                  : "text-white hover:text-accent"
              }
            />
          </li>
          <li
            className="relative py-4"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <div className="group dropdown">
              <NavLink
                href={"/about"}
                title={"About us"}
                className={
                  pathname === "/about"
                    ? "text-accent"
                    : "text-white hover:text-accent"
                }
              />
             <div className="absolute right-[-10px] top-[50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300">
                <span className="text-white group-hover:text-accent">↓</span>
              </div>
              {isDropdownOpen && (
                <div className="dropdown-container translate-y-0 opacity-100 absolute left-[50%] translate-x-[-50%] md:top-[100%] lg:top-[100%] bg-[#1b1b1b] transition-opacity duration-300 ease-in-out shadow-xl">
                  <ul className="text-center text-primaryText">
                    <li className="hover:text-accent">
                      <Link href="/about#facilities" className="block py-1">
                        What we offer
                      </Link>
                    </li>
                    <li className="border-y border-black hover:text-accent">
                      <Link
                        href="/about#team"
                        className="block py-1 px-10 whitespace-nowrap"
                      >
                        Meet the team
                      </Link>
                    </li>
                    <li className="hover:text-accent">
                      <Link href="/about#classes" className="block py-1">
                        Classes
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </li>

          <li className="py-4">
            <NavLink
              href={"/pricing"}
              title={"Pricing"}
              className={
                pathname === "/pricing"
                  ? "text-accent"
                  : "text-white hover:text-accent"
              }
            />
          </li>
          <li className="py-4">
            <NavLink
              href={"/contact"}
              title={"Contact"}
              className={
                pathname === "/contact"
                  ? "text-accent"
                  : "text-white hover:text-accent"
              }
            />
          </li>
        </ul>
        <button
          onClick={() => setNav(!nav)}
          aria-label="Open menu"
          className="z-50 md:hidden cursor-pointer"
        >
          {nav ? (
            <RiCloseLine size={25} className="text-black" />
          ) : (
            <TbMenu size={25} className="text-black" />
          )}
        </button>
      </nav>

      {nav && (
        <ul className="md:hidden flex flex-col items-center basis-full gap-5 uppercase bg-white border-b border-gray-300 text-primaryText text-sm tracking-widest pt-8 pb-4">
          <li className="border-b w-2/3 text-center pb-4">
            <NavLink
              href={"/"}
              title={"Home"}
              className={pathname === "/" ? "text-accent" : ""}
            />
          </li>
          <li className="border-b w-2/3 text-center pb-4">
            <NavLink
              href={"/about"}
              title={"About us"}
              className={pathname === "/about" ? "text-accent" : ""}
            />
          </li>
          <li className="border-b w-2/3 text-center pb-4">
            <NavLink
              href={"/pricing"}
              title={"Pricing"}
              className={pathname === "/pricing" ? "text-accent" : ""}
            />
          </li>
          <li>
            <NavLink
              href={"/contact"}
              title={"Contact"}
              className={pathname === "/contact" ? "text-accent" : ""}
            />
          </li>
        </ul>
      )}
    </>
  );
};

export default Nav;
