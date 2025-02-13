import { Link } from "react-router";
import { styles } from "../styles";
import { useState } from "react";

import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState();
  const [onToggle, setOnToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0); // scroll to the top of the window
          }}
        >
          <img src={logo} className="w-9 h-9 object-contain" alt="logo" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Gaurav &nbsp;{" "}
            <span className="lg:block hidden">| Web Developer</span>
          </p>
        </Link>

        {/* PC View */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary" 
              } font-medium text-[18px] cursor-pointer hover:text-white nvbar`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}> {link.title} </a>
            </li>
          ))}
        </ul>

        {/* Mobile View */}
        <div className="sm:hidden flex flex-1 justify-end items-center relative">
          <img
            src={menu}
            alt="menu"
            className={`h-[28px] w-[28px] cursor-pointer z-20 ${onToggle ? 'hidden' : 'block'}`}
            onClick={() => setOnToggle(!onToggle)}
          />

          <div
            className={`${
              onToggle ? "translate-x-0" : "translate-x-full"
            } fixed top-0 right-0 h-screen w-[70%] bg-black-gradient shadow-lg z-10 p-6 flex flex-col gap-6 items-start transition-transform duration-300`}
          >
            <img
              src={close}
              alt="close"
              className="h-[24px] w-[24px] cursor-pointer self-end"
              onClick={() => setOnToggle(false)}
            />

            <ul className="list-none flex flex-col gap-6 mt-6">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-medium font-poppins text-[18px] cursor-pointer hover:text-white transition-colors`}
                  onClick={() => {
                    setActive(link.title);
                    setOnToggle(false);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* backdrop */}
          {onToggle && (
            <div
              className="fixed inset-0 bg-primary bg-opacity-70 z-5"
              onClick={() => setOnToggle(false)}
            ></div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
