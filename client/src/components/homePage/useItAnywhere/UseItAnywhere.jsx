import "./useItAnywhere.scss";

const UseItAnywhere = () => {
  return (
    <div className="useItAnywhere_container">
      <h1 className="useItAnywhere_title">
        <span>En Cualquier Lugar</span> <span>y En Cualquier Momento</span> 
      </h1>
      <div className="useItAnywhere_imgContainer sm:w-full overflow-hidden sm:mt-4">
        <img src="/assets/howToUseIt/useAnywhere.webp" alt="useAnywhere"/>
      </div>
    </div>
  );
}
export default UseItAnywhere