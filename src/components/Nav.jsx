import logo from "../assets/logo.svg";
import avatar from '../assets/image-avatar.png';
import cart from '../assets/icon-cart.svg';

export default function Nav() {
  return (
    <nav className="py-6 px-12 flex justify-between">
      <div id="nav-left" className="flex gap-10">
        <div id="logo-container">
          <img className="" src={logo} alt="logo image" />
        </div>
        <div id="nav-link-container" className="">
          <ul className="flex gap-4">
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
      </div>
      <div id="nav-right" className="flex gap-8">
        <button className="">
            <img src={cart} alt="" />
        </button>
        <img className="w-8" src={avatar} alt="logo image" />
      </div>
    </nav>
  );
}
