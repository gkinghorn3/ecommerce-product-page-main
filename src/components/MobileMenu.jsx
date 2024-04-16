import { useContext } from 'react';

import NavLinks from './NavLinks';
import { MobileMenuContext } from "../store/mobileMenuContext";

export default function MobileMenu() {

    const { isOpen } = useContext(MobileMenuContext);


    console.log(isOpen);
    console.log('rendered')
    return (
        <div className={`mobile-menu ${isOpen === true ? "open" : ""}`}>
            <NavLinks />
        </div>
    )
}