import "./banner.scss";

const Banner = ({messageOne, messageTwo}) => {
  
  return (
    <div className="banner">
      <p>{messageOne}</p>
      <p>
        <span>{messageTwo}</span>
      </p>
    </div>
  );
};

export default Banner;
