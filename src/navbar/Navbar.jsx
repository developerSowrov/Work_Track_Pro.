// import React from "react";

import { Link } from "react-router-dom";
import pic from "../assets/DALL·E 2025-02-17 02.22.43 - A sleek and modern logo for 'WorkTrackPro'. The design should use blue and gray tones, symbolizing professionalism and efficiency. Include an abstract.webp";
const Navbar = () => {
  return (
    <div className=" bg-base-100 shadow-sm">
      <div className=" navbar max-w-[1180px]  mx-auto">
        <div className="-mr-2">
          <img className="w-10 h-10  rounded-full" src={pic} alt="" />
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">WorkTracPro.</a>
        </div>
        <div className="flex justify-center items-center gap-4">
          <div className="">
            <Link>Dashboard</Link>
          </div>
          <div className="">
            <Link to={"/contact"}>Contact US</Link>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
