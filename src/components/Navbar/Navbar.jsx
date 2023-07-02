import  { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Spin as Hamburger } from "hamburger-react";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import PDF from "../PDF/PDF";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <>
      <div className="mt-2 flex justify-center items-center  p-2 lg:mx-20 sticky z-20 top-0">
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>

        <div className="navbar">
          <a className="btn btn-ghost normal-case lg:text-4xl md:text-3xl text-4xl  font-bold">
            Tasin Ahammed
          </a>
        </div>
        <div className="md:flex justify-center items-center gap-5 mr-10 hidden ">
          <motion.li
            className="list-none text-lg font-semibold"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.4 }}
          >
            <a className=" font-semibold cursor-pointer" to="/">
              Home
            </a>
          </motion.li>
          <motion.li
            className="list-none text-lg font-semibold"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.5 }}
          >
            <a className=" font-semibold cursor-pointer" to="/service">
            Service
            </a>
          </motion.li>
          <motion.li
            className="list-none text-lg font-semibold"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <a className=" font-semibold cursor-pointer" to="/projects">
              Projects
            </a>
          </motion.li>
          <motion.li
            className="list-none text-lg font-semibold"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            <a className=" font-semibold cursor-pointer" to="/contact">
              contact
            </a>
          </motion.li>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className=""
          >
            <PDF></PDF>
          </motion.button>
        </div>
        <label className="swap swap-rotate">
          <input
            onClick={handleTheme}
            checked={theme === "light" ? false : true}
            type="checkbox"
          />

          <svg
            className="swap-on fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          <svg
            className="swap-off fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        {/* Small Icon */}
      </div>
      <div
        className={`bg-[#122240] ${
          theme === "light" ? "text-white" : ""
        } md:hidden w-[80vw] h-[70vh] py-6 flex flex-col text-center gap-8 absolute duration-700 z-20 ${
          isOpen === true ? "left-0" : "-left-96"
        }`}
      >
        <a className=" font-semibold mt-10" to="/">
          Home
        </a>
        <a className=" font-semibold" to="/service">
        Service
        </a>
        <a className=" font-semibold" to="/projects">
          Projects
        </a>
        <a className=" font-semibold" to="/contact">
          contact
        </a>
        <button className="btn btn-active btn-primary w-1/2 mx-auto">
          Resume
        </button>
        <div className="flex gap-5 mx-auto">
          <a className="text-3xl" href="">
            <FaFacebook />
          </a>
          <a className="text-3xl" href="">
            <FaTwitter />
          </a>
          <a className="text-3xl" href="">
            <FaInstagram />
          </a>
          <a className="text-3xl" href="">
            <FaGithub />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
