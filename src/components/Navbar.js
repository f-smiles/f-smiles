import React, { useState, useEffect } from "react";
import MobileNav from "./navbar/MobileNav";
import DesktopNav from "./navbar/DesktopNav";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = localStorage.getItem("isMobile");
    if (checkIsMobile) {
      setIsMobile(JSON.parse(checkIsMobile));
    } else {
      setIsMobile(window.innerWidth < 768);
    }
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("isMobile", JSON.stringify(isMobile));
  }, [isMobile]);

  return <>{isMobile ? <MobileNav /> : <DesktopNav />}</>;
};

export default Navbar;
