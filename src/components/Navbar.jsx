import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    //     <div className="navbar bg-sky-200">
    //       <a className="btn btn-ghost text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-300  to-blue-200 tracking-wide">
    //     Peace School
    //   </a>
    //     </div>

   <div className="bg-pink-400">
     <div className="navbar max-w-7xl mx-auto   ">
      <Link
        className="text-xl md:text-2xl font-bold text-white tracking-wide hover:text-sky-400 transition-colors duration-300"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Peace School
      </Link>
    </div>
   </div>
  );
};

export default Navbar;
