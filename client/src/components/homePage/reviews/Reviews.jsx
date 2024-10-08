import "./reviews.scss";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

const Reviews = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay(),
    ClassNames(),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  // useEffect(() => {
  //   if (emblaApi) {
  //     console.log(emblaApi.slideNodes()); // Access API
  //   }
  // }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide embla__class-names">
            <div className="reviewContainer">
              <div className="left">
                <div className="reviewImg">
                  <img src="/assets/reviews/review3-xs.webp" alt="" />
                </div>
              </div>
              <div className="right">
                <div className="up">
                  <div className="nameReviewer">
                    Juan Pablo L.
                    <span>Bogotá, Col</span>
                  </div>
                  <div className="starsContainer">
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
                  </div>
                </div>
                <div className="reviewComment">
                  <p>
                    Me sorprendió lo rápido que se cansó mi mandíbula solo
                    usando el peso más ligero después de unos minutos. Estoy
                    emocionado de seguir usando estos regularmente para
                    fortalecer una parte de mi cuerpo que no recibe mucho
                    ejercicio más allá de comer.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slide embla__class-names">
            <div className="reviewContainer">
              <div className="left">
                <div className="reviewImg">
                  <img src="/assets/reviews/review2-xs.webp" alt="" />
                </div>
              </div>
              <div className="right">
                <div className="up">
                  <div className="nameReviewer">
                    Laura M.<span>Cali, Col</span>
                  </div>
                  <div className="starsContainer">
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
                        width={20}
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="reviewComment">
                  <p>
                    Aunque todavía hay un largo camino por recorrer, ya he
                    notado algunos resultados positivos con los que estoy
                    bastante contenta. Estos son más resistentes que otros
                    modelos que he visto y me encantó el packaging con su
                    contenedor individual para cada nivel.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slide embla__class-names">
            <div className="reviewContainer">
              <div className="left">
                <div className="reviewImg">
                  <img src="/assets/reviews/review4-xs.webp" alt="" />
                </div>
              </div>
              <div className="right">
                <div className="up">
                  <div className="nameReviewer">
                    Martin <span>Medellin, Col</span>
                  </div>
                  <div className="starsContainer">
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
                      <img src="/assets/icons/starBorder.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="reviewComment">
                  <p>
                    Se siente bastante como trabaja la mandibula. Espero que funcione! Pero parece ser la mejor forma de
                    hacer este ejercicio en particular. También vienen en su
                    propio estuche de viaje.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slide embla__class-names">
            <div className="reviewContainer">
              <div className="left">
                <div className="reviewImg">
                  <img src="/assets/reviews/review1-xs.webp" alt="" />
                </div>
              </div>
              <div className="right">
                <div className="up">
                  <div className="nameReviewer">
                    Leonardo C.<span>Barranquilla, Col</span>
                  </div>
                  <div className="starsContainer">
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
                      <img src="/assets/icons/starBorder.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="reviewComment">
                  <p>
                    Al principio cuesta un poco acostumbrarte al masticar pero luego le agarras el tiro y termina muy cansada la mandibula. Importante hacer el masaje que indica la rutina.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Reviews;