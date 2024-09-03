import HomeNavBar from "../homeNavBar/HomeNavBar.jsx";
import "./heroSection.scss";
import { Link, useLocation } from "react-router-dom"

export const HeroSection = ({ handleOpenHeroBtn, backgroundHero, ctaMessage, subHeadline }) => {

  const location = useLocation()

  console.log(location.pathname);

  const HeroLayoutStyle =
    location.pathname === "/"
      ? "relative z-10 flex flex-col justify-center items-center h-full text-center mt-4"
      : location.pathname === "/como-funciona"
      ? "relative z-10 flex flex-col justify-center items-center h-full text-center mt-10 gap-1.5 lg:gap-5"
        : "relative z-10 flex flex-col justify-center items-center h-full text-center mt-4";
  
  const heroBtnLayout =
    location.pathname === "/"
      ? " text-white hover:bg-customBlue py-3 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cta-btn"
      : location.pathname === "/como-funciona"
      ? " text-white hover:bg-customBlue py-2.5 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cta-btn mt-16"
      : " text-white hover:bg-customBlue py-3 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cta-btn";

  const linkRedirection =
    location.pathname === "/como-funciona"
      ? "#howItWorks-science"
      : "#productRedirect";

  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
      <HomeNavBar/>
      <div className="absolute inset-0">
        <img
          src={backgroundHero}
          alt="Background Image"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className={HeroLayoutStyle}>
        <span className="lg:text-xl">Ejercitador de Mandibula</span>
        <h1 className="text-5xl font-bold leading-tight mb-4 lg:text-6xl"><Link to={'/'} className="linkName">JawFit-Pro</Link></h1>
        <p className="text-lg text-gray-300 mb-8 lg:text-2xl">
          {subHeadline}
        </p>
        <a
          href={linkRedirection}
          className={heroBtnLayout}
          onClick={handleOpenHeroBtn}
        >
          {ctaMessage}
        </a>
      </div>
    </div>
  );
};
