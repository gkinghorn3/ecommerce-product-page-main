import { useContext } from "react";

import { MobileMenuContext } from "../store/mobileMenuContext";

export default function NavLinks() {

  const { isOpen } = useContext(MobileMenuContext);

  return (
    <div id="nav-link-container" className='hidden md:flex items-center text-grayishBlue'>
      <ul className='flex gap-4'>
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
