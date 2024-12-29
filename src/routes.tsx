import { BrowserRouter, Route, Routes } from "react-router";

import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
