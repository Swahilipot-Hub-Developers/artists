import React from "react";
import Navbar from "../components/profile/Navbar";
import ArtistProfile from "../components/profile/ArtistProfile";
import Portfolio from "../components/profile/Portfolio";
import ContactForm from "../components/profile/ContactForm";
import Hero from "@/components/profile/HeroSection";
import Footer from "@/components/profile/Footer";
import Skills from "@/components/profile/Skills";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <br/>
      <Hero />
      <ArtistProfile />
      <Portfolio />
      <Skills />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Profile;
