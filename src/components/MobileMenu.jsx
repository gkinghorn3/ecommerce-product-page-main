import { useContext } from "react";

import NavLinks from "./NavLinks";
import { MobileMenuContext } from "../store/mobileMenuContext";

import { CircleX } from "lucide-react";

export default function MobileMenu() {
  const { isOpen, setIsOpen } = useContext(MobileMenuContext);

  return (
    <div className={`mobile-menu ${isOpen === true ? "open" : ""}`}>
      <CircleX
        color="white"
        onClick={() => setIsOpen(!open)}
        className="absolute top-4 right-4"
      />
      <ul className={`flex gap-4  ${isOpen === true ? "flex-col" : ""}`}>
        <li>
          <a href="#">Collections</a>
        </li>
        <li>
          <a href="#">Men</a>
        </li>
        <li>
          <a href="#">Women</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
}
