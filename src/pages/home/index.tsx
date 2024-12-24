import Hero from "../../components/home-components/Hero";
import Layout from "../../layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="bg-red-500">
        <Hero />
      </div>
    </Layout>
  );
};

export default Home;
