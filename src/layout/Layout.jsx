// import React from "react";
// import Navba from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";
import Navbar from "../navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
