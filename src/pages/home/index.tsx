import Contact from "../../components/home-components/Contact";
import Footer from "../../components/home-components/Footer";
import FromFunfairs from "../../components/home-components/FromFunfairs";
import Hero from "../../components/home-components/Hero";
import OurExpertise from "../../components/home-components/OurExpertise";
import Portfolio from "../../components/home-components/Portfolio";
import Testimonials from "../../components/home-components/Testimonials";
import NavBar from "../../components/nav";
import Layout from "../../layout/Layout";

const Home = () => {
  return (
    <>
      <div className="bg-[#F6F1E5]">
        <Layout>
          <NavBar />
          <Hero />
        </Layout>
        {/* <Testimonials /> */}
        <Layout>
          <FromFunfairs />
          <OurExpertise />
          <Portfolio />
          <Contact />
        </Layout>
      </div>
      <Footer />
    </>
  );
};

export default Home;
