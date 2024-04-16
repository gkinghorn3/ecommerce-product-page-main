import "./App.css";

import Nav from "./components/Nav";
import ProductMainContainer from "./components/ProductMainContainer";

import MobileMenuProvider from "./store/mobileMenuContext";

function App() {
  return (
    <MobileMenuProvider>
      <Nav />
      <ProductMainContainer />
    </MobileMenuProvider>
  );
}

export default App;
