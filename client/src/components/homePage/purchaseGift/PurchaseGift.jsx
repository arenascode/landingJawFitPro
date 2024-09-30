import "./purchaseGift.scss"
import giftImage from "/assets/product/Rutine-small.webp"; 

const PurchaseGift = () => {
    return (
      <div id="purchaseGiftContainer">
        <div className="purchaseGift_title">
          <span>NO TE QUEDES CON LAS GANAS</span>
          <h2>MÁS BENEFICIOS CON TU COMPRA HOY MISMO <span>🎁</span></h2>
          <hr />
        </div>
        <div className="purchaseGift_body">
          <div className="description">
            <p>
              Con la compra de tu Jaw-Fit Pro, no solo te llevarás el mejor
              ejercitador de mandíbula del mercado, sino que también recibirás
              de regalo una rutina en PDF de entrenamiento exclusiva diseñada
              para maximizar tus resultados. 📈💪
            </p>
            <br />
            <p>Esta guía incluye:</p>
            <ul className="gift-list">
              <li>✅ Ejercicios para fortalecer y definir tu mandíbula 💪</li>
              <li>✅ Recursos útiles para potenciar tus resultados 📈</li>
              <li>
                ✅ Consejos adicionales para obtener los mejores resultados 🌟
              </li>
            </ul>
            <div className="purchaseGift_imgContainer" data-aos="fade-up">
              <img src={giftImage} alt="Gift" width={"400"} />
            </div>
          </div>
        </div>
      </div>
    );
    }
    export default PurchaseGift