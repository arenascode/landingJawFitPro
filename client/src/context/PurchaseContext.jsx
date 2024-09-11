import { createContext, useContext, useState } from "react";
import ReactPixel from "react-facebook-pixel";
import propTypes from "prop-types";
import useLocalStorage from "../hooks/useLocalStorage.js";

export const PurchaseContext = createContext({
  openForm: false,
  setOpenForm: () => {},
  openThanksPage: false,
  setThanksPage: () => {},
  handleOpenForm: () => {},
  kitSelected: {
    kit: "",
    price: 0,
    priceBefore: 0,
    urlImg: "",
    productDesc: "",
  },
  setKitSelected: () => {},
  fbq: ReactPixel,
});

export const usePurchase = () => {
  return useContext(PurchaseContext);
};

export const PurchaseContextProvider = ({ children }) => {
  const [openForm, setOpenForm] = useState(false);
  const [openThanksPage, setThanksPage] = useState(false);
  const [kitSelected, setKitSelected] = useLocalStorage("cart", {
    kit: "",
    price: 0,
    priceBefore: 0,
    urlImg: "",
    productDesc: ""
  });
  const fbq = ReactPixel;

  const handleOpenForm = () => {
    fbq.track("OpenForm");
    setOpenForm(true);
    console.log("open form");
  };

  const contextValue = {
    openForm: openForm,
    setOpenForm: setOpenForm,
    openThanksPage: openThanksPage,
    setThanksPage: setThanksPage,
    handleOpenForm: handleOpenForm,
    fbq: fbq,
    kitSelected: kitSelected,
    setKitSelected: setKitSelected
  };

  return (
    <PurchaseContext.Provider value={contextValue}>
      {children}
    </PurchaseContext.Provider>
  );
};


PurchaseContextProvider.propTypes = {
  children: propTypes.node.isRequired,
};
