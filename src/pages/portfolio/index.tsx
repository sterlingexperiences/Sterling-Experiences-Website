import Contact from "../../components/home-components/Contact";
import Footer from "../../components/home-components/Footer";
import NavBar from "../../components/nav";
import PastEvents from "../../components/portfolio-components/PastEvents";
import Layout from "../../layout/Layout";

const Portfolio = () => {
  return (
    <>
      <Layout>
        <div className="bg-[#F6F1E5]">
          <NavBar />
          <PastEvents />
          <Contact />
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default Portfolio;
