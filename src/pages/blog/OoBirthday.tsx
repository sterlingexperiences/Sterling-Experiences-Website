import { useEffect } from "react";
import OoBirthday from "../../components/blog/OoBirthday";
import Contact from "../../components/home-components/Contact";
import Footer from "../../components/home-components/Footer";
import NavBar from "../../components/nav";
import Layout from "../../layout/Layout";

const OoBirthdayPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="bg-[#F6F1E5]">
        <NavBar />
        <Layout>
          <OoBirthday />
          <Contact />
        </Layout>
        <Footer />
      </div>
    </>
  );
};

export default OoBirthdayPage;
