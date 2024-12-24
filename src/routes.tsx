import { BrowserRouter, Route, Routes } from "react-router";

import Home from "./pages/home";
import About from "./pages/about";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
