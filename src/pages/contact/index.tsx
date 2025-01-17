import { useEffect } from "react";
import Info from "../../components/contact-component/Info";
import Contact from "../../components/home-components/Contact";
import Footer from "../../components/home-components/Footer";
import NavBar from "../../components/nav";
import Layout from "../../layout/Layout";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="bg-[#F6F1E5]">
        <NavBar />
        <Layout>
          <Contact />
          <Info />
        </Layout>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
