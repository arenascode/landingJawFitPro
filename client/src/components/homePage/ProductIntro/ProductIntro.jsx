import { useEffect } from "react";
import "./productIntro.scss";
import Aos from "aos";
import Banner from "../../banner/Banner.jsx";
//*Imgs //
import strenghtLevelsImg from "/assets/product/strenghtLevelsV2-small.webp";
import productIntro1 from "/assets/product/productIntroV2-small.webp";
import productIntro1Mini from "/assets/product/productIntroV2-xs.webp";
import menJawline from "/assets/product/menJawlineV2-small.webp";
import menJawlineMini from "/assets/product/menJawlineV2-xs.webp";
import beforeAndAfter1 from "/assets/product/beforeAfter1-Small.webp";
import beforeAndAfter1Mini from "/assets/product/beforeAfter1-xs.webp";
import beforeAndAfter2Img from "/assets/product/beforeAfter2-Small.webp";
import beforeAndAfter2Mini from "/assets/product/beforeAfter2-xs.webp";
import strenghtLevelsImgMini from "/assets/product/strenghtLevelsV2-xs.webp";
import PropTypes from "prop-types";

const ProductIntro = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      delay: 500,
    });
  }, []);

  const changeSlide = (slideId) => {
    const targetSlide = document.getElementById(slideId);
    if (targetSlide) {
      targetSlide.scrollIntoView({ block: "nearest", inline: "center" });
    }
    const miniImgs = document.querySelectorAll(".miniImg");
    miniImgs.forEach((img) => (img.style.borderColor = "#697172"));
    miniImgs.forEach((img) => {
      if (img.dataset.img == slideId) {
        img.style.borderColor = "#00b8fc";
      }
    });
  };

  const handleMiniImgs = (e) => {
    const slideNumber = e.target.parentNode.dataset.img;
    changeSlide(slideNumber);
    const miniImgs = document.querySelectorAll(".miniImg");
    miniImgs.forEach((img) => (img.style.borderColor = "#697172"));
    e.currentTarget.style.borderColor = "#00b8fc";
  };

  return (
    <div>
      <div className="h-full w-full" id="product">
        <Banner messageOne={`Envío Gratis, Paga Al Recibir`} />
        <div className="imgAndTextContainer" id="productSlider">
          <div className="imgContainer">
            <div
              id="carouselImgs"
              className="w-full carousel rounded-box h-[inherit]"
            >
              <div id="slide1" className="carousel-item relative w-full h-full">
                <img
                  src={productIntro1}
                  className="w-full"
                  alt="allModels"
                  loading=""
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-0.5 right-5 top-1/2 w-[98%]">
                  <button
                    className="btn btn-circle btn-md text-lg text-black dark:bg-white dark:border-none dark:text-customBlue"
                    onClick={() => changeSlide("slide5")}
                  >
                    ❮
                  </button>
                  <button
                    className="btn btn-circle btn-md text-lg  text-black dark:bg-white dark:border-none dark:text-customBlue"
                    onClick={() => changeSlide("slide2")}
                  >
                    ❯
                  </button>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <img
                  src={menJawline}
                  className="w-full slide2"
                  alt="Packaging1"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-0.5 right-5 top-1/2 w-[98%]">
                  <button
                    className="btn btn-circle btn-md text-lg text-black dark:bg-white dark:border-none dark:text-customBlue"
                    onClick={() => changeSlide("slide1")}
                  >
                    ❮
                  </button>
                  <button
                    className="btn btn-circle btn-md text-lg text-black dark:bg-white dark:border-none dark:text-customBlue"
                    onClick={() => changeSlide("slide3")}
                  >
                    ❯
                  </button>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full ">
                <img
                  src={beforeAndAfter1}
                  className="w-full"
                  alt="Tailwind CSS Carousel component"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-0.5 right-5 top-1/2 w-[98%]">
                  <button
                    className="btn btn-circle btn-md text-lg text-black dark:bg-white dark:border-none dark:text-customBlue"
                    onClick={() => changeSlide("slide2")}
                  >
                    ❮
                  </button>
                  <button
                    className="btn btn-circle btn-md text-lg text-black dark:bg-white dark:border-none dark:text-customBlue"
                    onClick={() => changeSlide("slide4")}
                  >
                    ❯
                  </button>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full">
                <img
                  src={beforeAndAfter2Img}
                  className="w-full"
                  alt=""
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-0.5 right-5 top-1/2 w-[98%]">
                  <button
                    className="btn btn-circle btn-md text-lg text-black dark:bg-white dark:border-none dark:text-customBlue"
                    onClick={() => changeSlide("slide3")}
                  >
                    ❮
                  </button>
                  <button
                    className="btn btn-circle btn-md text-lg text-black dark:bg-white dark:border-none dark:text-customBlue"
                    onClick={() => changeSlide("slide5")}
                  >
                    ❯
                  </button>
                </div>
              </div>
              <div id="slide5" className="carousel-item relative w-full">
                <img
                  src={strenghtLevelsImg}
                  className="w-full"
                  alt="strenght levels"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-0.5 right-5 top-1/2 w-[98%]">
                  <button
                    className="btn btn-circle btn-md text-lg text-black dark:bg-white dark:border-none dark:text-customBlue"
                    onClick={() => changeSlide("slide4")}
                  >
                    ❮
                  </button>
                  <button
                    className="btn btn-circle btn-md text-lg text-black dark:bg-white dark:border-none dark:text-customBlue"
                    onClick={() => changeSlide("slide1")}
                  >
                    ❯
                  </button>
                </div>
              </div>
            </div>
            <div className="miniImgsContainer">
              <div
                className="miniImg slide1 border-2"
                data-img="slide1"
                onClick={handleMiniImgs}
              >
                <img src={productIntro1Mini} alt="" />
              </div>
              <div
                className="miniImg slide2 border-2"
                data-img="slide2"
                onClick={handleMiniImgs}
              >
                <img src={menJawlineMini} alt="" />
              </div>
              <div
                className="miniImg slide3 border-2"
                data-img="slide3"
                onClick={handleMiniImgs}
              >
                <img src={beforeAndAfter1Mini} alt="" />
              </div>
              <div
                className="miniImg slide4 border-2"
                data-img="slide4"
                onClick={handleMiniImgs}
              >
                <img src={beforeAndAfter2Mini} alt="" />
              </div>
              <div
                className="miniImg slide5 border-2"
                data-img="slide5"
                onClick={handleMiniImgs}
              >
                <img src={strenghtLevelsImgMini} alt="" />
              </div>
            </div>
          </div>
          <div className="textContainer">
            <div className="reviewsContainer">
              <div className="starItem">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 426.667 426.667"
                  width={"20px"}
                >
                  <polygon
                    style={{ fill: "#FAC917" }}
                    points="213.333,10.441 279.249,144.017 426.667,165.436 320,269.41 345.173,416.226 213.333,346.91 
	81.485,416.226 106.667,269.41 0,165.436 147.409,144.017 "
                  />
                </svg>
              </div>
              <div className="starItem">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 426.667 426.667"
                  width={"20px"}
                >
                  <polygon
                    style={{ fill: "#FAC917" }}
                    points="213.333,10.441 279.249,144.017 426.667,165.436 320,269.41 345.173,416.226 213.333,346.91 
	81.485,416.226 106.667,269.41 0,165.436 147.409,144.017 "
                  />
                </svg>
              </div>
              <div className="starItem">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 426.667 426.667"
                  width={"20px"}
                >
                  <polygon
                    style={{ fill: "#FAC917" }}
                    points="213.333,10.441 279.249,144.017 426.667,165.436 320,269.41 345.173,416.226 213.333,346.91 
	81.485,416.226 106.667,269.41 0,165.436 147.409,144.017 "
                  />
                </svg>
              </div>
              <div className="starItem">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 426.667 426.667"
                  width={"20px"}
                >
                  <polygon
                    style={{ fill: "#FAC917" }}
                    points="213.333,10.441 279.249,144.017 426.667,165.436 320,269.41 345.173,416.226 213.333,346.91 
	81.485,416.226 106.667,269.41 0,165.436 147.409,144.017 "
                  />
                </svg>
              </div>
              <div className="starItem">
                {/* <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 426.667 426.667"
                  width={"20px"}
                >
                  <polygon
                    style={{ fill: "#FAC917" }}
                    points="213.333,10.441 279.249,144.017 426.667,165.436 320,269.41 345.173,416.226 213.333,346.91 
	81.485,416.226 106.667,269.41 0,165.436 147.409,144.017 "
                  />
                </svg> */}
                <img
                  src="/assets/icons/starHalf.png"
                  alt=""
                  width={22}
                  height={22}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <a href="#clientReviews" className="rating">
                4.5/5 • 10 Reviews
              </a>
            </div>
            <div className="textContainer_title w-full flex justify-start">
              <h1 className="text-3xl font-semibold">JawFit-Pro</h1>
            </div>
            <div className="priceProductContainer">
              <div className="before">$99.999 COP</div>
              <div className="after">$64.900 COP</div>
            </div>
            <div className="text_body">
              {/* <p>
                JawFit-Pro te ayuda a fortalecer y esculpir los músculos
                faciales, <span>Mejorando tu apariencia y confianza</span>.
                Transforma tu perfil facial y{" "}
                <span>Deslumbra con una mandíbula firme y atractiva.</span>
              </p> */}
              <ul>
                <li>✅ Fortalece y esculpe los músculos faciales.</li>
                <li>
                  ✅ Define y tonifica tu mandíbula para un perfil más
                  atractivo.
                </li>
                <li>
                  ✅ Resalta los rasgos cuadrados que mejoran la estética
                  facial.
                </li>
                <li>
                  ✅ Despierta tu confianza con un rostro firme y cincelado.
                </li>
              </ul>
            </div>
            <div className="ctaContainer">
              {/* openForm */}
              <button className="bg-success">
                <a href="#productPromo">
                  <span>
                    ¡Redefine Tu Imagen!
                    <svg
                      fill="none"
                      stroke="#ffffff"
                      height="27"
                      viewBox="0 0 30 27"
                      width="23"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ fontWeight: 500 }}
                      strokeWidth={2}
                    >
                      <path d="M1.39999 1.70001H6.60001" stroke="#ffffff" />
                      <path d="M6.60001 1.70001L11 18.9" />
                      <path d="M11.8 18.9H28.3" stroke="##ffffff" />
                      <path
                        d="M13.8 25.7C15.4569 25.7 16.8 24.3569 16.8 22.7C16.8 21.0432 15.4569 19.7 13.8 19.7C12.1431 19.7 10.8 21.0432 10.8 22.7C10.8 24.3569 12.1431 25.7 13.8 25.7Z"
                        stroke="#ffffff"
                      />
                      <path
                        d="M25.3 25.7C26.9568 25.7 28.3 24.3569 28.3 22.7C28.3 21.0432 26.9568 19.7 25.3 19.7C23.6431 19.7 22.3 21.0432 22.3 22.7C22.3 24.3569 23.6431 25.7 25.3 25.7Z"
                        stroke="#ffffff"
                      />
                      <path
                        d="M25.7 14.6H11.3C10.7 14.6 10.1 14.2 10 13.6L8.1 6.90001C7.9 6.00001 8.49999 5.20001 9.39999 5.20001H27.5C28.4 5.20001 29.1 6.10001 28.8 6.90001L26.9 13.6C26.9 14.2 26.4 14.6 25.7 14.6Z"
                        stroke="#ffffff"
                      />
                    </svg>
                  </span>
                  <span>Rutina de Entrenamiento GRATIS</span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductIntro.propTypes = {
  setOpenForm: PropTypes.func.isRequired,
};
export default ProductIntro;

