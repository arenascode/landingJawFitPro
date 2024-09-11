import "./productPromo.scss";
import BasicKit from "/assets/product/productIntroV2-small.webp";
import advancedKit from "/assets/product/kitAdvanced-sm.webp";
import promoKit from "/assets/product/kitPromo-sm.webp";
import whiteStrength from "/assets/product/whiteStrength-sm.webp"
import greyStrength from "/assets/product/greyStrength-sm.webp"
import blackStrength from "/assets/product/blackStrength-sm.webp"
import { usePurchase } from "../../../context/PurchaseContext.jsx";

const ProductPromo = () => {

  const { setKitSelected, setOpenForm } = usePurchase()
  
  const extractRelativePath = (url) => {

    try {
      const urlObject = new URL(url)
      return urlObject.pathname
    } catch (error) {
      console.error('Invalid URL:', error)
      return url
    }
  } 
  const handleKitSelected = (e) => {
    
    const {kit, price} = e.target.dataset
    const kitHtmlElement = e.target.parentNode

    const imgProductElement = kitHtmlElement.querySelector('img')
    const imgSrc = imgProductElement ? extractRelativePath(imgProductElement.src) : null
    
      
    const productDescElement = kitHtmlElement.querySelector('.promo-text')
    const productDesc = productDescElement ? productDescElement.innerText : ''
    
    const priceBeforeElement = kitHtmlElement.querySelector('del')
    const priceBefore = priceBeforeElement.innerText
    
    

    setKitSelected({
      kit: kit,
      price: price,
      priceBefore: priceBefore,
      urlImg: imgSrc,
      productDesc: productDesc
    })

    setOpenForm(true)
  }

  return (
    <div className="promo-section">
      <h2 className="promo-title">
        ¡Nuestras promociones exclusivas para una mandíbula más fuerte!
      </h2>
      <p className="promo-description">
        Asegura tu progreso y mantén una mandíbula definida con nuestras ofertas
        especiales.
      </p>

      <div className="cards-container">
        {/* Card: Kit Normal */}
        <div className="promo-card">
          <img src={BasicKit} alt="Kit Normal" className="promo-image" />
          <h3 className="card-title">Kit de 3 Niveles (Primera vez)</h3>
          <ul className="promo-features">
            <li>
              <img src={whiteStrength} alt="basic" width="48" /> Básico (Blanco)
            </li>
            <li>
              <img src={greyStrength} alt="intermediate" width="48" />{" "}
              Intermedio (Gris)
            </li>
            <li>
              <img src={blackStrength} alt="advanced" width="48" /> Avanzado
              (Negro)
            </li>
          </ul>
          <p className="promo-text">
            Empieza desde cero y sigue hasta dominar el nivel más avanzado.
            Perfecto para quienes recién comienzan.
          </p>
          <span className="price">
            <del>$79.900</del> <strong>$64.900</strong>
          </span>
          <button
            className="cta-button"
            onClick={handleKitSelected}
            data-kit="Kit Primera Vez"
            data-price="64900"
          >
            Empieza tu transformación ahora
          </button>
        </div>
        {/* Card: Kit Solo Avanzado */}
        <div className="promo-card">
          <img src={advancedKit} alt="Kit advanced" className="promo-image" />
          <h3 className="card-title">Kit Avanzado</h3>
          <ul className="promo-features">
            <li>
              <img src={blackStrength} alt="advanced" width="50" />
              Ejercitadores de máxima resistencia ⚡
            </li>
            <li>
              <img src={blackStrength} alt="advanced" width="56" /> Mantén tus
              resultados y sigue progresando 📈
            </li>
            <li>
              <img src={blackStrength} alt="advanced" width="50" />
              ¡Diseñados para los más exigentes! 💥
            </li>
          </ul>
          <p className="promo-text">
            Perfecto para aquellos que ya entrenan su mandíbula
            y quieren llevar su fuerza y definición al siguiente nivel.
          </p>
          <span className="price">
            <del>$89.900</del> <strong>$74.900</strong>
          </span>
          <button
            className="cta-button"
            onClick={handleKitSelected}
            data-kit="Kit Avanzado"
            data-price="74900"
          >
            {" "}
            ¡Comprar Kit Avanzado!
          </button>
        </div>
        {/* Card: Kit Normal + Avanzado */}
        <div className="promo-card highlight-card">
          <span className="card-bestPrice">MEJOR PRECIO</span>
          <img
            src={promoKit}
            alt="Kit Normal + Avanzado"
            className="promo-image"
          />
          <h3 className="card-title">Kit Primera vez + Kit Avanzado 🖤</h3>
          <ul className="promo-features">
            <li>
              <img src={whiteStrength} alt="basic" width="48" /> Básico (Blanco)
            </li>
            <li>
              <img src={greyStrength} alt="intermediate" width="48" />{" "}
              Intermedio (Gris)
            </li>
            <li>
              <img src={blackStrength} alt="advanced" width="48" /> Avanzado
              (Negro)
            </li>
            <li>
              <img src={blackStrength} alt="advanced" width="48" />3 Pares
              Avanzado Extra
            </li>
          </ul>
          <p className="promo-text">
            ¡Ahorro máximo garantizado! 🤑
            <br />
            Lleva el Kit Básico + Kit Avanzado a un mejor precio y sigue
            ejercitando tu mandíbula sin pausas 💪.
          </p>
          <span className="price">
            <del>$139.900</del> <strong>$119.900</strong>
          </span>
          <span className="discount-text"> ¡Ahorra $20.000!</span>
          <button
            className="cta-button btn bg-success"
            onClick={handleKitSelected}
            data-kit="Primera Vez + Avanzado"
            data-price="129900"
          >
            Comprar el Combo
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductPromo