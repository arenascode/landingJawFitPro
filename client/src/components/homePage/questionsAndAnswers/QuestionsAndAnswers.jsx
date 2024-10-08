import "./questionsAndAnswers.scss";

const QuestionsAndAnswers = () => {
  return (
    <div id="commonQuestions" className="section">
      <div className="left">
        <div className="collapse collapse-plus bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            ¿Son compatibles con el uso de brackets?
          </div>
          <div className="collapse-content">
            <p>
              Es recomendable consultar con tu ortodoncista antes de usarlos
              para asegurarte de que no interfieran con tu tratamiento.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            ¿Cuál es el tiempo estimado de entrega?
          </div>
          <div className="collapse-content">
            <p>
              Recíbelo en tu domicilio o sucursal de InterRapidisimo en un plazo
              de 3 a 5 días hábiles.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            ¿Cuáles son las opciones de pago disponibles?
          </div>
          <div className="collapse-content">
            <p>
              Puedes pagar a través de transferencia bancaria, Nequi o
              contraentrega al recibir tu JawFit-Pro en la puerta de tu casa.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            ¿El producto viene con garantía?
          </div>
          <div className="collapse-content">
            <p>
              Te garantizamos el cambio en caso de cualquier defecto de
              fabricación.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            ¿Cómo puedo rastrear mi pedido una vez que ha sido enviado?
          </div>
          <div className="collapse-content">
            <p>
              Una vez que realices tu compra, nos encargaremos de ponernos en
              contacto contigo para proporcionarte el número de seguimiento de
              tu pedido.
            </p>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="firstImg">
          <picture>
            <source
              srcSet="/assets/valueProposition/mostAttractiveMuscleV2-xs.webp"
              media="(max-width: 961px)"
            />
            <source
              srcSet="/assets/valueProposition/mostAttractiveMuscleV2-small.webp"
              media="(min-width: 962px)"
            />
            <img
              src="/assets/valueProposition/mostAttractiveMuscleV2-small.webp"
              alt="AtractiveMuscleQ&A"
            />
          </picture>
        </div>
        <div className="secondImg">
          <picture>
            <source
              srcSet="/assets/product/strenghtLevelsV2-xs.webp"
              media="(max-width: 961px)"
            />
            <source
              srcSet="/assets/product/strenghtLevelsV2-small.webp"
              media="(min-width: 962px)"
            />
            <img src="/assets/product/strenghts.webp" alt="strenghtsQ&A" />
          </picture>
        </div>
        <div className="thirdImg">
          <picture>
            <source
              srcSet="/assets/product/productIntroV2-xs.webp"
              media="(max-width: 961px)"
            />
            <source
              srcSet="/assets/product/productIntroV2-small.webp"
              media="(min-width: 962px)"
            />
            <img src="/assets/product/productIntroV2-small.webp" alt="picQ&A" />
          </picture>
        </div>
      </div>
    </div>
  );
};
export default QuestionsAndAnswers;
