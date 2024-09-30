import { usePurchase } from "../../context/PurchaseContext.jsx";
import "./homeNavBar.scss";
import { Link } from "react-router-dom";
const HomeNavBar = () => {

  const { fbq } = usePurchase();

  const openMenuModal = () => {
    console.log("helooo");
    const mobileMenu = document.getElementById("mobileMenu_modal");
    mobileMenu.style.display = "block";
    setTimeout(() => {
      mobileMenu.style.opacity = 1;
    }, 10);
  };

  function closeModalMenu() {
    const mobileMenu = document.getElementById("mobileMenu_modal");
    mobileMenu.style.opacity = 0;
    setTimeout(() => {
      mobileMenu.style.display = "none";
    }, 500);
  }

  window.onclick = function (e) {
    const mobileMenu = document.getElementById("mobileMenu_modal");
    if (e.target === mobileMenu) {
      mobileMenu.style.opacity = 0;
      setTimeout(() => {
        mobileMenu.style.display = "none";
      }, 500);
    }
  };

  const trackPixel = () => {
    fbq.track('howItWorksClicked')
    console.log('How it works'); 
  }
  return (
    <div className="homeNavBar_container">
      <div className="left" onClick={openMenuModal}>
        <svg
          width="42"
          height="42"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.94977 11.9498H39.9498"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.94977 23.9498H39.9498"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.94977 35.9498H39.9498"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div id="mobileMenu_modal">
        <div className="mobileMenu_content">
          <button id="closeModalBtn" onClick={closeModalMenu}>
            <img src="/assets/icons/closeModal.webp" alt="" />
          </button>
          <ul className="links_menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/como-funciona" onClick={trackPixel}>
                Cómo funciona <small>(La ciencia detrás)</small>
              </a>
            </li>
            <li>
              <a href="/#productPromo">
                Comprar
              </a>
            </li>
            {/* <li>
              <a href="#instagramSection">Galeria</a>
            </li>
            <li>
              <a href="#meansOfContact">Contactame</a>
            </li> */}
          </ul>
        </div>
      </div>
      <nav id="navBarDesktop">
        <ul className="navBarDesktop_links_menu">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <a href={"/como-funciona"} onClick={trackPixel}>
              Cómo funciona JawFit-Pro / <small> La ciencia detrás</small>
            </a>
          </li>
          {/* <li><a href="#featuredFilms">Actuaciones</a></li> */}
          {/* <li><a href="#instagramSection">Galeria</a></li>
            <li><a href="#meansOfContact">Contactame</a></li> */}
        </ul>
      </nav>
    </div>
  );
};
export default HomeNavBar;
