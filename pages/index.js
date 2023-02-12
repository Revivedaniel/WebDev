import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Customers from "../src/components/Customers";
import Home from "../src/components/Home";
import News from "../src/components/News";
import SoftwareEngineerPortfolio from "../src/components/SoftwareEngineerPortfolio";
import Layout from "../src/layouts/Layout";
import CloudEngineerPortfolio from "../src/components/CloudEngineerPortfolio";

const Index = () => {
  return (
    <Layout>
      <Home />
      <About />
      <SoftwareEngineerPortfolio />
      <CloudEngineerPortfolio />
      <Contact />
    </Layout>
  );
};

export default Index;
