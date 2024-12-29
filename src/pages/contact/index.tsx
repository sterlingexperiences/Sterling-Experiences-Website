import Info from "../../components/contact-component/Info";
import Contact from "../../components/home-components/Contact";
import Footer from "../../components/home-components/Footer";
import NavBar from "../../components/nav";
import Layout from "../../layout/Layout";

const ContactUs = () => {
  return (
    <>
      <Layout>
        <div className="bg-[#F6F1E5]">
          <NavBar />
          <Contact />
          <Info />
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default ContactUs;
