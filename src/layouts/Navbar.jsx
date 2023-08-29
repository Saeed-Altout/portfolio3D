import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { component } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { useStateContext } from "../contexts/ContextProvider";

const Navbar = () => {
  const { handleScroll, active, setActive, toggle, setToggle, scrolled } =
    useStateContext();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${component.navbar} ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className={`${component.navbarWrapper} relative`}>
        {/* Start Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="object-contain w-9 h-9" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Saeed &nbsp;
            <span className="hidden sm:block"> | SA</span>
          </p>
        </Link>
        {/* End Logo */}

        {/* Start Desktop */}
        <ul className={component.ulDesktop}>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-base font-medium cursor-pointer`}
              onClick={() => {
                setActive((prev) => (prev = nav.title));
              }}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        {/* End Desktop */}

        {/* Start Toggle */}
        <button type="button" className="block w-fit md:hidden">
          <img
            src={toggle ? close : menu}
            alt={toggle ? "Close" : "Menu"}
            className="object-contain w-6 h-6"
            onClick={() => setToggle(!toggle)}
          />
        </button>
        {/* End Toggle */}

        {/* Start Mobile */}
        {toggle && (
          <ul className={`${component.ulMobile} gradient-nav`}>
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-base font-medium cursor-pointer`}
                onClick={() => {
                  setActive((prev) => (prev = link.title));
                  setToggle((prev) => !prev);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        )}
        {/* End Mobile */}
      </div>
    </nav>
  );
};

export default Navbar;
