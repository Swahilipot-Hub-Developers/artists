import React from "react";
import Navbar from "../components/profile/Navbar";
import ArtistProfile from "../components/profile/ArtistProfile";
import Portfolio from "../components/profile/Portfolio";
import ContactForm from "../components/profile/ContactForm";
import Hero from "@/components/profile/HeroSection";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ArtistProfile />
      <Portfolio />
      <ContactForm />
    </div>
  );
};

export default Profile;
