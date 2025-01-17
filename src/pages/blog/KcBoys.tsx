import KcBoys from "../../components/blog/KcBoys";
import Contact from "../../components/home-components/Contact";
import Footer from "../../components/home-components/Footer";
import NavBar from "../../components/nav";
import Layout from "../../layout/Layout";

const KcBoysPage = () => {
  return (
    <>
      <div className="bg-[#F6F1E5]">
        <NavBar />
        <Layout>
          <KcBoys />
          <Contact />
        </Layout>
        <Footer />
      </div>
    </>
  );
};

export default KcBoysPage;
