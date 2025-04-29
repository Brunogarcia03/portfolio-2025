import { BrowserRouter, Route, Routes } from "react-router-dom";

import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Transition from "./components/Transition";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <Transition>
              <Work />
            </Transition>
          }
        />
        <Route
          path="/sobre-mi"
          element={
            <Transition>
              <About />
            </Transition>
          }
        />
        <Route
          path="/contacto"
          element={
            <Transition>
              <Contact />
            </Transition>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
