import "./purchaseGift.scss"
const PurchaseGift = () => {
  return (
    <div id="purchaseGiftContainer">
      <div className="purchaseGift_title">
        <h2>
          🎁<span>Obtén Más</span> <span>Con Tu Compra </span>🎁
        </h2>
      </div>
      <div className="purchaseGift_body">
        <div className="description">
          <p>
            Con la compra de tu Jaw-Fit Pro, no solo te llevarás el mejor
            ejercitador de mandíbula del mercado, sino que también recibirás de
            regalo una rutina en PDF de entrenamiento exclusiva diseñada para maximizar
            tus resultados. 📈💪
          </p>
          {/* <p>
            Además, incluimos recursos adicionales que te ayudarán a potenciar
            aún más la definición y fortaleza de tu mandíbula. Todo lo que
            necesitas para alcanzar una apariencia cincelada y atractiva, ¡lo
            tienes aquí! 🌟
          </p> */}
          <div className=""></div>
        </div>
        <div className="purchaseGift_imgContainer">
          <img src="/assets/product/Rutine-small.webp" alt="Gift" width={"400"} />
        </div>
      </div>
    </div>
  );
}
export default PurchaseGift