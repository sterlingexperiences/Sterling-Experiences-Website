import { useEffect } from "react";
import Contact from "../../components/home-components/Contact";
import Footer from "../../components/home-components/Footer";
import NavBar from "../../components/nav";
import Header from "../../components/services-components/Header";
import WhatWeDo from "../../components/services-components/WhatWeDo";
import Layout from "../../layout/Layout";

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="bg-[#F6F1E5]">
        <NavBar />
        <Layout>
          <Header />
        </Layout>
      </div>
      <WhatWeDo />
      <Layout>
        <div className="bg-[#F6F1E5]">
          <Contact />
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default Services;
