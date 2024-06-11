import Video from "../Video/Video.jsx";
import "../../../scss/_base.scss";
import "./vsl.scss";
const Vsl = ({ setShowProduct }) => {
  return (
    <div
      id="vslSection"
      className="min-h-[100vh]"
    >
      <div className="vslText p-1">
        <h1 className="text-center m-2 font-Montserrat sm:text-xl md:text-2xl lg:text-2xl lg:mt-4 tracking-wider font-bold">
          Desbloquea el Secreto de la Atracción
        </h1>
        <p className="text-center tracking-widest mt-7 sm:text-md text-pretty px-2">
          {" "}
          Consigue la definición facial que siempre has deseado y transforma tu
          atractivo.
        </p>
      </div>
      <Video />
      <div className="logoContainer self-center mb-1">
      <img src="/assets/icons/logoBlanco.webp" alt="" width={50} />
      </div>
      <button
        className="ctaVsl btn btn-md m-1 hover:bg-[rgb(43,43,43)] hover:text-white"
        onClick={() => setShowProduct(true)}
      >
        {" "}
        <a href={"#product"} className="text-lg tracking-wide">
          Conoce El JawFit-Pro
        </a>
      </button>
    </div>
  );
};
export default Vsl;
