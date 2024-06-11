import "./trustSignals.scss";

export const TrustSignals = () => {
  

  return (
    <div id="securePurchase" className="section">
      <div className="securePurchase">
        <div className="securePurchase_title">
          <h2><span>COMPRA</span> <span>ASEGURADA</span> </h2>
          <img src="/assets/icons/verified.webp" alt="" />
        </div>
      </div>
      <div className="iconsContainer">
        <div className="icon icon1">
          <div className="imgContainer">
            <img src="/assets/trustSignals/guarante.webp" alt="" />
          </div>
          <div className="textContainer">
            <span>Garantía de devolución</span>
            <p>
              ¡Tu satisfacción es nuestra prioridad! Si por alguna razón no
              quedas completamente satisfecho con tus JawFit-Pro, ¡te
              reembolsamos tu dinero sin objeciones!
            </p>
          </div>
        </div>
        <div className="icon icon2">
          <div className="imgContainer">
            <img src="/assets/trustSignals/safeDelivery.webp" alt="" />
          </div>
          <div className="textContainer">
            <span>Entrega Segura</span>
            <p>
              Nuestra promesa es asegurar una entrega segura y puntual. Te
              contactaremos antes de enviar tus JawFit-Pro para confirmar que todo
              esté en orden y recibas tu pedido a tiempo.
            </p>
          </div>
        </div>
        <div className="icon icon3">
          <div className="imgContainer">
            <img src="/assets/trustSignals/freeDelivery.webp" alt="" />
          </div>
          <div className="textContainer">
            <span>Atención al Cliente</span>
            <p>
              Estamos comprometidos en brindarte una atención excepcional en
              cada etapa de tu experiencia de compra. Nos aseguraremos de estar
              disponibles para cualquier consulta o necesidad que puedas tener.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}