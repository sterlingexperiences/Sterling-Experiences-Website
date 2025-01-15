import Web3Meetup from "../../components/blog/Web3Meetup";
import Contact from "../../components/home-components/Contact";
import Footer from "../../components/home-components/Footer";
import NavBar from "../../components/nav";
import Layout from "../../layout/Layout";

const Web3MeetupPage = () => {
  return (
    <>
      <div className="bg-[#F6F1E5]">
        <NavBar />
        <Layout>
          <Web3Meetup />
          <Contact />
        </Layout>
        <Footer />
      </div>
    </>
  );
};

export default Web3MeetupPage;
