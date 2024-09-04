import { useEffect, useRef } from "react";
import { HeroSection } from "../../components/heroSection/HeroSection.jsx";
import "./howItWorks.scss";
import heroHowItWorksBackground from "/assets/howToUseIt/jawline2.webp";
import jawMuscle1 from "/assets/videos/jawMuscleBit.mp4";
import jawMuscle2 from "/assets/videos/jawMuscleBit2.mp4";
import chewingVideo from "/assets/videos/chewingVideoLanding.mp4";
import PriceContainer from "../../components/homePage/priceContainer/PriceContainer.jsx";
import CallToAction from "../../components/homePage/callToAction/CallToAction.jsx"
import Footer from "../../components/homePage/footer/Footer.jsx";
import { usePurchase } from "../../context/PurchaseContext.jsx";
import PurchaseForm from "../../components/homePage/purchaseForm/PurchaseForm.jsx";
import ThanksPage from "../../components/thanksPage/ThanksPage.jsx";

const HowItWorks = () => {
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const video3Ref = useRef(null);

  const windowHeight = window.innerHeight;

  const { openForm, setOpenForm, openThanksPage, setThanksPage, handleOpenForm } = usePurchase()
  
  useEffect(() => {
    const handleScroll = () => {
      if (video1Ref) {
        handleVideoPlayBack(video1Ref);
      }
      if (video2Ref) {
        handleVideoPlayBack(video2Ref);
      }
      if (video3Ref) {
        handleVideoPlayBack(video3Ref);
      }
    };

    const handleVideoPlayBack = (videoRef) => {
      const video = videoRef.current;
      if (!video) return;

      const videoRect = video.getBoundingClientRect();
      if (videoRect.top >= 0 && videoRect.bottom <= windowHeight) {
        video
          .play()
          .catch((err) => console.error("Error playing video1: ", err));
      } else {
        video.pause();
        video.currentTime = 0;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);


  return (
    <main id="howItWorks">
      <HeroSection
        backgroundHero={heroHowItWorksBackground}
        ctaMessage={"Descubre Como Funciona"}
        subHeadline={
          "Conoce el secreto detrás de una mandíbula definida y poderosa"
        }
      />
      <section id="howItWorks-science">
        <div className="science-title">
          <span>CÓMO FUNCIONA JAWFIT-PRO</span>
          <h1>LA CIENCIA DETRÁS</h1>
          <hr />
        </div>
        <div className="science-body">
          <div className="paragraph para1">
           <p>
            <b>
              JAWFIT-PRO trabaja fortaleciendo y desarrollando los músculos
              maseteros, responsables de darle fuerza a la mordida.
            </b>{" "}
            Al masticar las piezas de alta resistencia de JAWFIT-PRO, estimulas
            directamente estos músculos, lo que resulta en un crecimiento
            muscular (hipertrofia). Con un uso consistente cada semana,
            empezarás a notar un impacto visual en la apariencia de tu
            mandíbula.
          </p>
          <div className="videoContainer bgEffect">
            <video
              ref={video1Ref}
              src={jawMuscle1}
              id="videoJaw1"
              muted
              loop
              playsInline
            ></video>
          </div> 
          </div>
          <div className="paragraph para2">
<p>
            <b>
              El cambio más evidente ocurre en las esquinas de la mandíbula
              inferior.
            </b>{" "}
            Estas áreas comienzan a sobresalir hacia los lados, creando un
            contraste más pronunciado entre el cuello y la mandíbula. Este
            contraste es lo que genera la sombra conocida como &quot;línea de la
            mandíbula.&quot; Al aumentar este contraste mediante el
            fortalecimiento de los músculos maseteros, tu línea de la mandíbula
            se vuelve más visible y definida.
          </p>
          <div className="videoContainer bgEffect">
            <video
              ref={video2Ref}
              src={jawMuscle2}
              id="videoJaw2"
              muted
              loop
              playsInline
            ></video>
          </div>
          </div>
          <div className="paragraph para3">
 <p>
            <b>
              Además del contraste, también verás una mejora en la forma general
              de tu rostro.
            </b>{" "}
            A medida que los músculos de la mandíbula crecen, la mandíbula
            inferior se percibe más ancha en proporción al rostro, lo que aporta
            un aspecto más atractivo y cuadrado a tus rasgos faciales.
          </p>
          <div className="imgContainer bgEffect">
            <img src="/assets/howToUseIt/jawline2-sm.jpg" alt="" />
          </div>
          </div>
        </div>
        <div className="dumbelsJaw">
          <div className="dumbelsJaw-title">
            <span>ENTRENAMIENTO MUSCULAR</span>
            <h1>MANCUERNAS PARA LA MANDIBULA</h1>
            <hr />
          </div>
          <div className="dumbelsJaw-body">
            <p>
              <b>
                Piensa en JawFit-Pro como la mancuerna para tus músculos
                mandibulares.
              </b>{" "}
              Al igual que cuando entrenas cualquier otro músculo del cuerpo, el
              ejercicio constante de la mandíbula con JawFit-Pro estimula su
              crecimiento y definición. A medida que tus músculos mandibulares
              se fortalecen y aumentan en tamaño, comienzan a resaltar, dándole
              a tu rostro una forma más esculpida y atractiva.
            </p>
            <div className="videoContainer bgEffect">
              <video
                ref={video3Ref}
                src={chewingVideo}
                id="videoJaw3"
                muted
                loop
                playsInline
              ></video>
            </div>
            <p>
              Aunque pueda parecer novedoso aplicar esta lógica a la cara, el
              principio es el mismo que el de cualquier entrenamiento muscular:
              <b>
                cuanto más trabajas tus músculos, más visibles se vuelven sus
                resultados.
              </b>{" "}
              Es hora de empezar a pensar en la mandíbula como cualquier otro
              grupo muscular que puede beneficiarse del ejercicio.
            </p>
          </div>
        </div>
        <div className="whatToExpect">
          <div className="whatToExpect-title">
            <span>ESCULPE TU MANDIBULA </span>
            <h1>QUÉ RESULTADOS OBENTRÁS</h1>
            <hr />
          </div>
          <div className="whatToExpect-body">
            <p>
              Con JawFit-Pro, fortalecerás los músculos maseteros de tu
              mandíbula, lo que hará que la zona cerca de las orejas se vuelva
              más pronunciada y definida. Este crecimiento muscular no solo
              realza la línea mandibular, sino que también puede esculpir tus
              mejillas, otorgando un aspecto más atractivo y poderoso a tu
              rostro.
            </p>
            <p>
              Como en cualquier entrenamiento, los resultados varían según la
              persona. La clave está en la consistencia (4-5 veces por semana),
              un bajo porcentaje de grasa corporal para ver cambios más rápidos,
              y una nutrición adecuada para apoyar el crecimiento muscular. En
              general, los usuarios reportan mejoras en 2 semanas, un cambio
              notable en un mes y resultados significativos tras 10 semanas de
              uso constante.
            </p>
          </div>
        </div>
      </section>
      <PriceContainer />
      <div className="callToActionContainer">
        <CallToAction
          message={
            "Transforma Tu Mandibula"
          } handleOpenForm={handleOpenForm}
        />
      </div>
      {openForm && (
        <PurchaseForm setOpenForm={setOpenForm} setThanksPage={setThanksPage} />
      )}
      {openThanksPage && <ThanksPage setThanksPage={setThanksPage} />}
      <Footer />
    </main>
  );
};
export default HowItWorks;
