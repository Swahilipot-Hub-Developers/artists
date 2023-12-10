import React from "react";
import Navbar from "../components/profile/Navbar";
import Portfolio from "../components/profile/Portfolio";
import ContactForm from "../components/profile/ContactForm";
import Hero from "@/components/profile/HeroSection";
import Footer from "@/components/profile/Footer";
import Skills from "@/components/profile/Skills";
import Layout from "@/ui-components/layout";

const Profile = () => {
  return (
    <div>
      <Layout>
        <Navbar />
        <br />
        <Hero />
        <Portfolio />
        <Skills />
        <ContactForm />
        <Footer />
      </Layout>
    </div>
  );
};

export default Profile;
