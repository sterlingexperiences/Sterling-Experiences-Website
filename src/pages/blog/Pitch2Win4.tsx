import { useEffect } from "react";
import Pitch2Win4 from "../../components/blog/Pitch2Win4";
import Contact from "../../components/home-components/Contact";
import Footer from "../../components/home-components/Footer";
import NavBar from "../../components/nav";
import Layout from "../../layout/Layout";

const Pitch2Win4Page = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="bg-[#F6F1E5]">
        <NavBar />
        <Layout>
          <Pitch2Win4 />
          <Contact />
        </Layout>
        <Footer />
      </div>
    </>
  );
};

export default Pitch2Win4Page;
