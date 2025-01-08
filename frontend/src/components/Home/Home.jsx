import React, { useContext } from "react";
import { Context } from "../../main";
import { Navigate } from "react-router-dom";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import PopularCategories from "./PopularCategories";
import PopularCompanies from "./PopularCompanies";

const Home = () => {
  const { isAuthorized, user } = useContext(Context);

  if (!isAuthorized) {
    return <Navigate to={"/login"} />;
  }

  return (
    <>
      <section className="homePage page">
        <HeroSection />
        {user?.role === "Job Seeker" && <HowItWorks />}
        <PopularCategories />
        <PopularCompanies />
      </section>
    </>
  );
};

export default Home;
