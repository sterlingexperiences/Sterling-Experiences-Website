import { BrowserRouter, Route, Routes } from "react-router";

import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import ContactUs from "./pages/contact";
import Portfolio from "./pages/portfolio";
import Web3MeetupPage from "./pages/blog/Web3Meetup";
import InfotechSummitPage from "./pages/blog/InfotechSummit";
import Omwg7Page from "./pages/blog/Omwg7";
import Pitch2Win4Page from "./pages/blog/Pitch2Win4";
import OoBirthdayPage from "./pages/blog/OoBirthday";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/web-3-meetup" element={<Web3MeetupPage />} />
        <Route
          path="/portfolio/infotech-summit"
          element={<InfotechSummitPage />}
        />
        <Route path="/portfolio/oya-make-we-groove-7" element={<Omwg7Page />} />
        <Route path="/portfolio/pitch-2-win-4" element={<Pitch2Win4Page />} />
        <Route path="/portfolio/oo-birthday" element={<OoBirthdayPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
