import { useContext } from "react";

import logo from "../assets/logo.svg";
import avatar from "../assets/image-avatar.png";
import cart from "../assets/icon-cart.svg";
import burger from "../assets/icon-menu.svg";

import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { MobileMenuContext } from "../store/mobileMenuContext";

export default function Nav() {

  const { isOpen, setIsOpen } = useContext(MobileMenuContext);


  return (
    <>
      <MobileMenu />
      <nav className="py-6 px-12 flex justify-between">
        <div id="nav-left" className="flex gap-4 md:gap-10">
          <div className="flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              <img src={burger} alt="" className="md:hidden"  />
            </button>
          </div>
          <div id="logo-container" className="flex items-center">
            <img id="logoImg" className="" src={logo} alt="logo image" />
          </div>
          <NavLinks />
        </div>
        <div id="nav-right" className="flex gap-8">
          <button className="">
            <img src={cart} alt="" />
          </button>
          <img className="w-8" src={avatar} alt="logo image" />
        </div>
      </nav>
    </>
  );
}
