import "./App.css";

import Nav from "./components/Nav";
import MobileMenuProvider from "./store/mobileMenuContext";

function App() {
  return (
    <MobileMenuProvider>
      <Nav />
    </MobileMenuProvider>
  );
}

export default App;
