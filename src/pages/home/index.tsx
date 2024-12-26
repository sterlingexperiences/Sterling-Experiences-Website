import FromFunfairs from "../../components/home-components/FromFunfairs";
import Hero from "../../components/home-components/Hero";
import OurExpertise from "../../components/home-components/OurExpertise";
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
      </div>
    </Layout>
  );
};

export default Home;
