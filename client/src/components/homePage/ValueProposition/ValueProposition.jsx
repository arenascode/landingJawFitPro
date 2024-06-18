import "./valueProposition.scss";

const ValueProposition = () => {
  return (
    <>
      <div className="valueProposition_container">
        <div className="valueProposition_textContainer">
          <h2 className="valueProposition_textContainer_title">
            Por qué Necesitas el JawFit-Pro?
          </h2>
          <div className="textContainer_body">
            <p>
              Desafortunadamente, los hábitos alimenticios de la sociedad
              moderna han cambiado de tal manera que casi exclusivamente comemos
              alimentos blandos. Es por eso que nuestras mandíbulas ya no son
              tan pronunciadas como solían ser.
            </p>
            <div
              className="imgContainer rounded-md overflow-x-hidden"
            >
              <img
                src="/assets/valueProposition/human-face-evolution.webp"
                alt=""
              />
            </div>
            <p>
              Para abordar este problema, hemos desarrollado JawFit-Pro: una
              solución diseñada para recuperar la mandíbula definida y atractiva
              que caracterizaba a nuestros antepasados, quienes solían
              fortalecer sus mandíbulas al morder alimentos más resistentes.
            </p>
            <div
              className="imgContainer overflow-x-hidden"
            >
              <img
                src="/assets/valueProposition/beforeAndAfter3.webp"
                alt=""
                className="object-cover"
              />
            </div>
            <p>
              Con JawFit-Pro, puedes restaurar la vitalidad y la estética de tu
              mandíbula de manera natural y efectiva. Sin cirugías ni
              tratamientos costosos.
            </p>
          </div>
        </div>
      </div>
      <div className="valueProposition_productBenefits">
        <h2 className="productBenefits_title tracking-wider">
          <span>Descubre Tu Transformación:</span> <br />
          <span><b>Los Poderes Detrás de JawFit-Pro</b></span>
        </h2>
        <div className="productBenefits_card">
          <div className="imgContainer">
            <img src="/assets/valueProposition/menAndWomen.webp" alt="" />
          </div>
          <div className="productBenefits_items">
            <div className="benefit" data-aos="fade-left">
              <div className="imgBenefit">
                <img src="/assets/icons/correcto.webp" alt="" />
              </div>
              <p>
                Activa directamente los musculos maseteros para mejorar la
                apariencia de la mandíbula.
              </p>
            </div>
            <div className="benefit" data-aos="fade-right">
              <div className="imgBenefit">
                <img src="/assets/icons/correcto.webp" alt="" />
              </div>
              <p>Adelgaza y Tonifica tu Rostro</p>
            </div>
            <div className="benefit" data-aos="fade-left">
              <div className="imgBenefit">
                <img src="/assets/icons/correcto.webp" alt="" />
              </div>
              <p>
                Beneficia la forma general del rostro, amplificando atractivos
                rasgos cuadrados.
              </p>
            </div>
            <div className="benefit" data-aos="fade-right">
              <div className="Imgbenefit">
                <img src="/assets/icons/correcto.webp" alt="" />
              </div>
              <p>Logra una línea de mandíbula cincelada.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ValueProposition;
