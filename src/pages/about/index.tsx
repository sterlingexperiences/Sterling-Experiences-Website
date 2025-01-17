import { useEffect } from "react";
import Header from "../../components/about-components/Header";
import MeetTheFounder from "../../components/about-components/MeetTheFounder";
import OurApproach from "../../components/about-components/OurApproach";
import Contact from "../../components/home-components/Contact";
import Footer from "../../components/home-components/Footer";
import NavBar from "../../components/nav";
import Layout from "../../layout/Layout";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="bg-[#F6F1E5]">
        <NavBar />
        <Layout>
          <Header />
          <OurApproach />
          <MeetTheFounder />
          <Contact />
        </Layout>
      </div>
      <Footer />
    </>
  );
};

export default About;
