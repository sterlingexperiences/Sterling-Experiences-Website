import Header from "../../components/about-components/Header";
import MeetTheFounder from "../../components/about-components/MeetTheFounder";
import OurApproach from "../../components/about-components/OurApproach";
import Layout from "../../layout/Layout";

const About = () => {
  return (
    <>
      <Layout>
        <div className="bg-[#F6F1E5]">
          <Header />
          <OurApproach />
          <MeetTheFounder />
        </div>
      </Layout>
    </>
  );
};

export default About;
