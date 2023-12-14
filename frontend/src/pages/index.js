import Portfolio from "@/components/portfolio/Portfolio";
import Events from "@/components/landing/Events";
import Featured from "@/components/landing/Featured";
import Layout from "@/layout/Layout";

const { default: Hero } = require("@/components/landing/Hero");

const Landing = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Portfolio />
        {/* <Featured />
        <Events /> */}
      </Layout>
    </>
  );
};

export default Landing;
