import "./beforeAndAfter.scss";
import beforeAndAfterImg from "/assets/beforeAndAfter/beforeAndAfterSm.webp";
const BeforeAndAfter = () => {
  return (
    <div className="beforeAndAfter_container">
      <h1 className="beforeAndAfter_title">
        <span>Clientes Que Nos Han</span> <span>Compartido Su Progreso</span>
      </h1>
      <div className="beforeAndAfter_imgContainer sm:w-full overflow-hidden sm:mt-4">
        <picture>
          <source srcSet={beforeAndAfterImg} media="(max-width: 480px)" />
          <source srcSet={beforeAndAfterImg} media="(max-width: 961px)" />

          <img src={beforeAndAfterImg} alt="useAnywhere" />
        </picture>
      </div>
    </div>
  );
}
export default BeforeAndAfter;
