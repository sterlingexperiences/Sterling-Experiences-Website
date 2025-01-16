import { useEffect } from "react";
import InfotechSummit from "../../components/blog/InfotechSummit";
import Contact from "../../components/home-components/Contact";
import Footer from "../../components/home-components/Footer";
import NavBar from "../../components/nav";
import Layout from "../../layout/Layout";

const InfotechSummitPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="bg-[#F6F1E5]">
        <NavBar />
        <Layout>
          <InfotechSummit />
          <Contact />
        </Layout>
        <Footer />
      </div>
    </>
  );
};

export default InfotechSummitPage;
