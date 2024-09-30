import "./valueProposition.scss";

const ValueProposition = () => {


  return (
    <>
      <div className="valueProposition_container">
        <div className="valueProposition_textContainer">
          <div className="valueProposition_title">
            <span>TRANSFORMA TU ROSTRO, IMPULSA TU CONFIANZA</span>
            <h2 className="valueProposition_textContainer_title">
              ¿POR QUÉ DEBERÍAS ELEGIR JAWFIT-PRO?
            </h2>
            <hr />
          </div>
          <div className="textContainer_body">
            <p>
              Desafortunadamente, los hábitos alimenticios de la sociedad
              moderna han cambiado de tal manera que casi exclusivamente comemos
              alimentos blandos. Es por eso que nuestras mandíbulas se han debilitado y ya no son
              tan pronunciadas como solían ser.
            </p>
            <div className="imgContainer bgEffect">
              <img
                src="/assets/valueProposition/human-face-evolution-small.webp"
                alt="Human-face-evolution" className=""
              />
            </div>
            <p>
              Para abordar este problema, hemos desarrollado JawFit-Pro: una
              solución diseñada para recuperar la mandíbula definida y atractiva
              que caracterizaba a nuestros antepasados, quienes solían
              fortalecer sus mandíbulas al morder alimentos más resistentes.
            </p>
            <div className="imgContainer overflow-x-hidden bgEffect2">
              <img
                src="/assets/valueProposition/beforeAndAfter3-small.webp"
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
        <div className="productBenefits_title tracking-wider">
          <span>DESCUBRE TU TRANSFORMACIÓN</span>
          <h2>
            LOS PODERES DETRÁS DE JAWFIT-PRO
          </h2>
          <hr />
        </div>
        <div className="productBenefits_card">
          <div className="imgContainer">
            <img src="/assets/valueProposition/menAndWomen-small.webp" alt="" />
          </div>
          <div className="productBenefits_items">
            <div className="benefit">
              <div className="imgBenefit">
                <img src="/assets/icons/correcto.webp" alt="" />
              </div>
              <p>
                Activa directamente los musculos maseteros para mejorar la
                apariencia de la mandíbula.
              </p>
            </div>
            <div className="benefit">
              <div className="imgBenefit">
                <img src="/assets/icons/correcto.webp" alt="" />
              </div>
              <p>Adelgaza y Tonifica tu Rostro</p>
            </div>
            <div className="benefit">
              <div className="imgBenefit">
                <img src="/assets/icons/correcto.webp" alt="" />
              </div>
              <p>
                Beneficia la forma general del rostro, amplificando atractivos
                rasgos cuadrados.
              </p>
            </div>
            <div className="benefit">
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
