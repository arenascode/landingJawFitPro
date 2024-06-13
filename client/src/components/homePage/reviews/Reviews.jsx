import { useEffect } from "react";
import "./reviews.scss";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";


const Reviews = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <div className="reviewContainer">
            <div className="left">
              <div className="reviewImg">
                <img src="/assets/reviews/review3.webp" alt="" />
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
                  Me sorprendió lo rápido que se cansó mi mandíbula solo usando
                  el peso más ligero después de unos minutos. Estoy emocionado
                  de seguir usando estos regularmente para fortalecer una parte
                  de mi cuerpo que no recibe mucho ejercicio más allá de comer.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="embla__slide">
          <div className="reviewContainer">
            <div className="left">
              <div className="reviewImg">
                <img src="/assets/reviews/review2.webp" alt="" />
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
                  Aunque todavía hay un largo camino por recorrer, ya he notado
                  algunos resultados positivos con los que estoy bastante
                  contenta. Estos son más resistentes que otros modelos que he
                  visto y me encantó el packaging con su contenedor individual
                  para cada nivel.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="embla__slide">
          <div className="reviewContainer">
            <div className="left">
              <div className="reviewImg">
                <img src="/assets/reviews/review4.webp" alt="" />
              </div>
            </div>
            <div className="right">
              <div className="up">
                <div className="nameReviewer">
                  Mariana <span>Ibagué, Col</span>
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
                  ¡Espero que funcione! Pero parece ser la mejor forma de hacer
                  este ejercicio en particular. También vienen en su propio
                  estuche de viaje.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="embla__slide">
          <div className="reviewContainer">
            <div className="left">
              <div className="reviewImg">
                <img src="/assets/reviews/review1.webp" alt="" />
              </div>
            </div>
            <div className="right">
              <div className="up">
                <div className="nameReviewer">
                  Camilo C.<span>Barranquilla, Col</span>
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
                  Al principio cuesta acomodarlos un poco y te succionan los
                  cachetes al masticar pero luego te vas acostumbrando y ya no
                  te chupa más los cachetes y se quedan fijos entre los dientes.
                  Supongo que es como cuando estrenas zapatos
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="embla__slide">
          <div className="reviewContainer">
            <div className="left">
              <div className="reviewImg">
                <img src="/assets/reviews/review3.webp" alt="" />
              </div>
            </div>
            <div className="right">
              <div className="up">
                <div className="nameReviewer">Patrick</div>
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
                  I love this Product. It`s been two weeks after I purchased it
                  and I have been noticed some differents in my jawline
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default Reviews;
