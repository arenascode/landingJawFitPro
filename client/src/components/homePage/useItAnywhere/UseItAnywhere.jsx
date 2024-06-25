import "./useItAnywhere.scss";

const UseItAnywhere = () => {
  return (
    <div className="useItAnywhere_container">
      <h1 className="useItAnywhere_title">
        <span>En Cualquier Lugar</span> <span>y En Cualquier Momento</span>
      </h1>
      <div className="useItAnywhere_imgContainer sm:w-full overflow-hidden sm:mt-4">
        <picture>
          <source
            srcSet="/assets/howToUseIt/useAnywhere-mobile.webp"
            media="(max-width: 480px)"
          />
          <source
            srcSet="/assets/howToUseIt/useAnywhere-tablet.webp"
            media="(max-width: 961px)"
          />
          
          <img src="/assets/howToUseIt/useAnywhere.webp" alt="useAnywhere" />
        </picture>
      </div>
    </div>
  );
}
export default UseItAnywhere