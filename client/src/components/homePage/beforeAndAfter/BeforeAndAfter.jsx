import "./beforeAndAfter.scss";
import beforeAndAfterImg from "/assets/beforeAndAfter/beforeAndAfterSm.webp";
const BeforeAndAfter = () => {
  return (
    <div className="beforeAndAfter_container">
      <div className="beforeAndAfter_title_container">
        <span>RESULTADOS REALES</span>
        <h2 className="beforeAndAfter_title">
          EL AVANCE DE QUIENES CONFIARON EN JAWFIT-PRO
        </h2>
        <hr />
      </div>

      <div className="beforeAndAfter_imgContainer sm:w-full overflow-hidden sm:mt-4">
        <picture>
          <source srcSet={beforeAndAfterImg} media="(max-width: 480px)" />
          <source srcSet={beforeAndAfterImg} media="(max-width: 961px)" />

          <img src={beforeAndAfterImg} alt="useAnywhere" />
        </picture>
      </div>
    </div>
  );
};
export default BeforeAndAfter;
