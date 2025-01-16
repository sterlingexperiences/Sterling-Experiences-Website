import { useEffect } from "react";
import Omwg7 from "../../components/blog/Omwg7";
import Contact from "../../components/home-components/Contact";
import Footer from "../../components/home-components/Footer";
import NavBar from "../../components/nav";
import Layout from "../../layout/Layout";

const Omwg7Page = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="bg-[#F6F1E5]">
        <NavBar />
        <Layout>
          <Omwg7 />
          <Contact />
        </Layout>
        <Footer />
      </div>
    </>
  );
};

export default Omwg7Page;
