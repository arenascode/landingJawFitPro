import { createContext, useContext, useState } from "react";
import ReactPixel from "react-facebook-pixel";
import propTypes from "prop-types";

export const PurchaseContext = createContext({
  openForm: false,
  setOpenForm: () => {},
  openThanksPage: false,
  setThanksPage: () => {},
  handleOpenForm: () => {},
});

export const usePurchase = () => {
  return useContext(PurchaseContext);
};

export const PurchaseContextProvider = ({ children }) => {
  const [openForm, setOpenForm] = useState(false);
  const [openThanksPage, setThanksPage] = useState(false);

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
