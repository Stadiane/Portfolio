import React, { useState } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import cv from "../assets/CV_Stadiane METINO NGOUFO.pdf";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex items-center py-5 fixed top-0 z-20 bg-primary px-6">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Stadiane METINO NGOUFO
            <span className="sm:block hidden">
              {" "}
              Développeuse WEB & Mobile Junior
            </span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <button className="bg-slate-600 px-3 py-2 rounded hidden sm:block">
          <a href={cv} download="CV_Stadiane METINO NGOUFO">
            Télécharger mon CV
          </a>
        </button>

        {/* Menu hamburger pour petits écrans */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-6 h-6 object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          {/* Menu déroulant */}
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-black absolute top-16 right-5 min-w-[200px] z-10 rounded-xl shadow-lg`}
          >
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="text-white font-medium cursor-pointer text-[16px]"
                  onClick={() => {
                    setToggle(false);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <li>
                <button className="bg-slate-600 px-3 py-2 rounded w-full">
                  <a href={cv} download="CV_Stadiane_METINO_NGOUFO">
                    Télécharger mon CV
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
