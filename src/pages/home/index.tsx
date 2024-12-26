import Contact from "../../components/home-components/Contact";
import Footer from "../../components/home-components/Footer";
import FromFunfairs from "../../components/home-components/FromFunfairs";
import Hero from "../../components/home-components/Hero";
import OurExpertise from "../../components/home-components/OurExpertise";
import Portfolio from "../../components/home-components/Portfolio";
import Testimonials from "../../components/home-components/Testimonials";
import Layout from "../../layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="bg-[#F6F1E5]">
        <Hero />
        <Testimonials />
        <FromFunfairs />
        <OurExpertise />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </Layout>
  );
};

export default Home;
