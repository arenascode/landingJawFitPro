import PropTypes from "prop-types";
import "./thanksPage.scss";

const ThanksPage = ({ setThanksPage }) => {
  return (
    <div id="modalThanks">
      <div className="thanksContainer">
        <div className="closeBtn">
          <button onClick={() => setThanksPage(false)}>X</button>
        </div>
        <div className="imgContainer">
          <img src="assets/icons/logoNombre.webp" alt="" />
        </div>
        <h4>Gracias Por Tu Compra de JawFit-Pro!</h4>
        <div className="textContainer">
          <p>
            En menos de 24 horas, uno de nuestros asesores se comunicará contigo
            para confirmar los detalles de tu pedido.
          </p>
        </div>
        <div className="socialMedia">
          <div className="socialMedia_title">
            <h5>¿Tienes alguna pregunta sobre tu pedido? </h5>
            <span className="emoji">👇</span>
          </div>
          <div className="socialMedia_items">
            <div className="socialMedia_item ig">
              <a
                href="https://www.instagram.com/focus_fitshop/"
                target="_blank"
                className="icon"
              >
                <img src="assets/icons/ig.webp" alt="" />
              </a>
              <span>Instagram</span>
            </div>
            <div className="socialMedia_item">
              <a
                href="https://wa.link/h7b918"
                target="_blank"
                className="icon wtsp"
              >
                <img src="assets/icons/wtp.webp" alt="" />
              </a>
              <span>Whatsapp</span>
            </div>

            <div className="socialMedia_item fb">
              <a
                href="https://www.facebook.com/profile.php?id=61560686750109"
                target="_blanl"
                className="icon"
              >
                <img src="assets/icons/facebook.webp" alt="" />
              </a>
              <span>Facebook</span>
            </div>
            {/* <div className="socialMedia_item ecommerce">
            <a
              href="https://jawfitpro.com"
              className="icon store"
              target="_blank"
            >
              <img src="assets/icons/logoNombre.webp" alt="" />
            </a>
            <span>Tienda</span>
          </div> */}
          </div>
        </div>
        <div className="thanksForChoiceUsContainer">
          <p>¡Gracias por elegirnos!</p>
          <span>🤜 🤛</span>
        </div>
      </div>
    </div>
  );
};

ThanksPage.propTypes = {
  setThanksPage: PropTypes.func.isRequired,
};
export default ThanksPage;
