import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// import useLocalStorage from "../../hooks/useLocalStorage.js";
// import Vsl from "../../components/homePage/vsl/Vsl.jsx";
import ProductIntro from "../../components/homePage/ProductIntro/ProductIntro.jsx";
import "./home.scss";
import ValueProposition from "../../components/homePage/ValueProposition/ValueProposition.jsx";
import HowToUseIt from "../../components/homePage/howToUseIt/HowToUseIt.jsx";
import Banner from "../../components/banner/Banner.jsx";
import CallToAction from "../../components/homePage/callToAction/CallToAction.jsx";
import UseItAnywhere from "../../components/homePage/useItAnywhere/UseItAnywhere.jsx";
import Characteristics from "../../components/homePage/characteristics/Characteristics.jsx";
import { TrustSignals } from "../../components/homePage/trustSignals/TrustSignals.jsx";
import QuestionsAndAnswers from "../../components/homePage/questionsAndAnswers/QuestionsAndAnswers.jsx";
import Footer from "../../components/homePage/footer/Footer.jsx";
import PriceContainer from "../../components/homePage/priceContainer/PriceContainer.jsx";
import Reviews from "../../components/homePage/reviews/Reviews.jsx";
import PurchaseForm from "../../components/homePage/purchaseForm/PurchaseForm.jsx";
import ThanksPage from "../../components/thanksPage/ThanksPage.jsx";
import ReactPixel from "react-facebook-pixel";
import PurchaseGift from "../../components/homePage/purchaseGift/PurchaseGift.jsx";
import BeforeAndAfter from "../../components/homePage/beforeAndAfter/BeforeAndAfter.jsx";
import { HeroSection } from "../../components/heroSection/HeroSection.jsx";
import heroBackground from "/assets/valueProposition/heroSection.webp"
import { usePurchase } from "../../context/PurchaseContext.jsx";
import ProductPromo from "../../components/homePage/productPromo/ProductPromo.jsx";

const HomePage = () => {
  // const [showProduct, setShowProduct] = useLocalStorage("vslViewed", false);

  const {openForm, setOpenForm, setThanksPage, openThanksPage, handleOpenForm} = usePurchase()
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: true,
      // delay: 1000,
    });
  }, []);

  const handleWtspIcon = () => {
    const scrollPosition = window.scrollY;
    const wtspBtnContainer = document.querySelector(".wtspIconContainer");

    if (scrollPosition >= 1000) {
      wtspBtnContainer.classList.add("show");
    } else {
      wtspBtnContainer.classList.remove("show");
    }
  };

  window.addEventListener("scroll", handleWtspIcon);

  // FB pixel //
  const fbq = ReactPixel;

  const handleOpenHeroBtn = () => {
    fbq.track("openHero")
    console.info('Hero opened');
  }

  return (
    <main className="main w-full max-h-[100vh]">
      {/* VSL will have enabled later */}
      {/* <Vsl setShowProduct={setShowProduct} />
      {showProduct ? (
        <>
          <ProductIntro setOpenForm={setOpenForm} />
          <section id="reviews" className="reviewsContainer">
            <Reviews />
          </section>
          <section id="ValueProposition" className="section h-full">
            <ValueProposition />
          </section>
          <Banner
            messageOne={"🔥 Oferta Por Tiempo Limitado 🔥"}
            messageTwo={"+ Rutina de Entrenamiento Gratis"}
          />
          <div id="howToUseIt" className="section sm:h-full">
            <HowToUseIt />
          </div>
          <PriceContainer />
          <div className="callToAction2 mt-5">
            <CallToAction
              message={"Oferta Por Tiempo Limitado!"}
              setOpenForm={setOpenForm}
            />
          </div>
          <section id="trainAnywhere">
            <UseItAnywhere />
          </section>
          <section id="characteristics">
            <Characteristics />
          </section>
          <PriceContainer />
          <div className="callToAction3 mt-6">
            <CallToAction
              message={"¡Potencia tu atractivo ahora!"}
              setOpenForm={setOpenForm}
            />
          </div>
          {openForm && (
            <PurchaseForm
              setOpenForm={setOpenForm}
              setThanksPage={setThanksPage}
            />
          )}
          {openThanksPage && <ThanksPage setThanksPage={setThanksPage} />}
          <section id="trustSignals">
            <TrustSignals />
          </section>
          <section id="questionsAndAnswers">
            <QuestionsAndAnswers />
          </section>
          <PriceContainer />
          <CallToAction
            message={"!Llevalo y Paga en Casa!"}
            setOpenForm={setOpenForm}
          />
          <Footer />
          <div className="wtspIconContainer animated-icon">
            <a
              href="https://wa.link/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/icons/showWtsp.webp"
                alt="wtspIcon"
                width={50}
              />
            </a>
          </div>
        </>
      ) : (
        ""
      )} */}
      <HeroSection
        handleOpenHeroBtn={handleOpenHeroBtn}
        backgroundHero={heroBackground}
        ctaMessage={"Conocelo"}
        subHeadline={
          "Esculpe y define tu mandíbula para transformar tu atractivo."
        }
      />
      <div id="productRedirect"></div>
      <ProductIntro setOpenForm={setOpenForm} />
      <section id="reviews" className="reviewsContainer">
        <Reviews />
      </section>
      <section id="ValueProposition" className="section h-full">
        <ValueProposition />
      </section>
      <section id="productPromo">
        <ProductPromo/>
      </section>
      <section id="Gift" className="section h-full">
        <PurchaseGift />
      </section>
      <section id="beforeAndAfter">
        <BeforeAndAfter />
      </section>
      <Banner
        messageOne={"🔥 Aprovecha Esta Oferta 🔥"}
        messageTwo={"¡Transforma Tu Rostro Hoy Mismo!"}
      />
      <PriceContainer />
      <div className="callToAction3 mt-6">
        <CallToAction
          message={"¡Potencia tu atractivo ahora!"}
          handleOpenForm={handleOpenForm}
        />
      </div>
      <div id="howToUseIt" className="section sm:h-full">
        <HowToUseIt />
      </div>
      <PriceContainer />
      <div className="callToAction2 mt-5">
        <CallToAction
          message={"Oferta Por Tiempo Limitado!"}
          handleOpenForm={handleOpenForm}
        />
      </div>
      <section id="trainAnywhere">
        <UseItAnywhere />
      </section>
      <section id="characteristics">
        <Characteristics />
      </section>
      <PriceContainer />
      <div className="callToAction3 mt-6">
        <CallToAction
          message={"¡Potencia tu atractivo ahora!"}
          handleOpenForm={handleOpenForm}
        />
      </div>
      {openForm && (
        <PurchaseForm setOpenForm={setOpenForm} setThanksPage={setThanksPage} />
      )}
      {openThanksPage && <ThanksPage setThanksPage={setThanksPage} />}
      <section id="trustSignals">
        <TrustSignals />
      </section>
      <section id="questionsAndAnswers">
        <QuestionsAndAnswers />
      </section>
      <PriceContainer />
      <div className="callToAction3 mt-3">
        <CallToAction
          message={"!Llevalo y Paga en Casa!"}
          handleOpenForm={handleOpenForm}
        />
      </div>

      <Footer />
      <div className="wtspIconContainer animated-icon">
        <a
          href="https://wa.link/21loa7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/icons/showWtsp.webp" alt="wtspIcon" width={50} />
        </a>
      </div>
    </main>
  );
};
export default HomePage;
