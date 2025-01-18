import Contact from "../../components/home-components/Contact";
import Footer from "../../components/home-components/Footer";
import NavBar from "../../components/nav";
import Header from "../../components/services-components/Header";
import WhatWeDo from "../../components/services-components/WhatWeDo";
import Layout from "../../layout/Layout";

const Services = () => {
  return (
    <>
      <div className="bg-[#F6F1E5]">
        <NavBar />
        <Layout>
          <Header />
        </Layout>
        <WhatWeDo />
        <Layout>
          <Contact />
        </Layout>
        <Footer />
      </div>
    </>
  );
};

export default Services;
