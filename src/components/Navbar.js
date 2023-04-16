import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MobileNav from "./navbar/MobileNav";
import DesktopNav from "./navbar/DesktopNav";

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    return (
      <>
        {isMobile ? <MobileNav /> : <DesktopNav />}
      </>
    );
};

export default Navbar;
