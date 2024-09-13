import HomeNavBar from "../homeNavBar/HomeNavBar.jsx";
import PropTypes from "prop-types";
import "./heroSection.scss";
import { Link } from "react-router-dom"
import heroBackground from "/assets/valueProposition/heroSection.webp";

export const HeroSection = ({ handleOpenHeroBtn }) => {

  // const location = useLocation()

  // const HeroLayoutStyle =
  //   location.pathname === "/"
  //     ? "relative z-10 flex flex-col justify-center items-center h-full text-center mt-4"
  //     : location.pathname === "/como-funciona"
  //     ? "relative z-10 flex flex-col justify-center items-center h-full text-center mt-10 gap-1.5 lg:gap-5"
  //       : "relative z-10 flex flex-col justify-center items-center h-full text-center mt-4";
  
  // const heroBtnLayout =
  //   location.pathname === "/"
  //     ? " text-white hover:bg-customBlue py-3 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cta-btn"
  //     : location.pathname === "/como-funciona"
  //     ? " text-white hover:bg-customBlue py-2.5 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cta-btn mt-16"
  //     : " text-white hover:bg-customBlue py-3 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cta-btn";

  // const linkRedirection =
  //   location.pathname === "/como-funciona"
  //     ? "#howItWorks-science"
  //     : "#productRedirect";

  return (
    <div className="hero-container">
      <HomeNavBar />
      <div className="hero-bgImg">
        <img
          src={heroBackground}
          alt="Background Image"
          className="object-cover object-center lg:object-contain w-full h-full lg:w-max lg:object-center lg:align-middle masked-image"
        />
        <div className="hero-bgOpacity"></div>
      </div>
      <div className="hero-textContainer">
        <span className=" hero-title">Ejercitador de Mandibula</span>
        <h1 className="hero-subtitle">
          <Link to={"/"} className="linkName">
            JawFit-Pro
          </Link>
        </h1>
        <p className="hero-subheadline">
          Esculpe y define tu mandíbula para transformar tu atractivo.
        </p>
        <a
          href="/#productRedirect"
          className="cta-btn"
          onClick={handleOpenHeroBtn}
        >
          Conocelo
        </a>
      </div>
    </div>
  );
};

HeroSection.propTypes = {
  handleOpenHeroBtn: PropTypes.func.isRequired,
  backgroundHero: PropTypes.func.isRequired,
  ctaMessage: PropTypes.func.isRequired,
  subHeadline: PropTypes.func.isRequired
};