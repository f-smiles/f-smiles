import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileNav from "./navbar/MobileNav";
import DesktopNav from "./navbar/DesktopNav";

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleOpenMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <>
    <MobileNav className="lg:hidden md:block" />
    <DesktopNav className="md:hidden sm:hidden lg:block" />
    </>
  );
};

export default Navbar;
