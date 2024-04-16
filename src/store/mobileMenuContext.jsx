import { createContext, useState } from "react";

export const MobileMenuContext = createContext();

const MobileMenuProvider = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <MobileMenuContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </MobileMenuContext.Provider>
    );
}


export default MobileMenuProvider;