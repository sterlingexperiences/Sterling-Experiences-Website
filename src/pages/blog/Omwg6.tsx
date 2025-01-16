import { useEffect } from "react";
import Omwg6 from "../../components/blog/Omwg6";
import Contact from "../../components/home-components/Contact";
import Footer from "../../components/home-components/Footer";
import NavBar from "../../components/nav";
import Layout from "../../layout/Layout";

const Omwg6Page = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="bg-[#F6F1E5]">
        <NavBar />
        <Layout>
          <Omwg6 />
          <Contact />
        </Layout>
        <Footer />
      </div>
    </>
  );
};

export default Omwg6Page;
