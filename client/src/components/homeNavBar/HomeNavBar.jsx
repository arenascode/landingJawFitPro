import "./homeNavBar.scss";
import { Link } from "react-router-dom";
const HomeNavBar = () => {
  return (
    <div className="homeNavBar_container">
      <div className="left">
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
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.94977 23.9498H39.9498"
            stroke="white"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.94977 35.9498H39.9498"
            stroke="white"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      {/* <div className="center"><Link to={'/'}>JawFit-Pro</Link></div> */}

      {/* <div className="right">
        <svg
          enable-background="new 0 0 32 32"
          id="Editable-line"
          version="1.1"
          width="40"
          height="40"
          viewBox="0 0 32 32"
        >
          <path
            d="  M27,29H5V17H3.235c-1.138,0-1.669-1.419-0.812-2.168L14.131,3.745c1.048-0.993,2.689-0.993,3.737,0l11.707,11.087  C30.433,15.58,29.902,17,28.763,17H27V29z"
            fill="none"
            id="XMLID_1_"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
          />
          <path
            d="  M20,29h-8v-6c0-2.209,1.791-4,4-4h0c2.209,0,4,1.791,4,4V29z"
            fill="none"
            id="XMLID_2_"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
          />
        </svg> 
      </div> */}
    </div>
  );
};
export default HomeNavBar;
