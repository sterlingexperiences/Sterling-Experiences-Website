import Header from "../../components/about-components/Header";
import MeetTheFounder from "../../components/about-components/MeetTheFounder";
import OurApproach from "../../components/about-components/OurApproach";
import Contact from "../../components/home-components/Contact";
import Footer from "../../components/home-components/Footer";
import Layout from "../../layout/Layout";

const About = () => {
  return (
    <>
      <Layout>
        <div className="bg-[#F6F1E5]">
          <Header />
          <OurApproach />
          <MeetTheFounder />
          <Contact />
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default About;
