import { useState } from "react";
import "./purchaseForm.scss";
import PropTypes from "prop-types";
import { makeRequest } from "../../../axios.js";
// import ReactPixel from "react-facebook-pixel";

const PurchaseForm = ({ setOpenForm, setThanksPage }) => {
  const [subtotal, setSubtotal] = useState("69.999");
  const [errMail, setErrMail] = useState(false);
  const [errID, setErrID] = useState(false);
  const [someErr, setSomeErr] = useState();
  const [idValue, setIdValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    e.target.style.borderBottom = "solid gray";
    e.target.style.borderColor = "gray";
    const errorMsg = e.target.parentNode.querySelector(".emptyField");
    if (errorMsg) {
      errorMsg.innerText = "";
    }
    setErrMail(false);
  };

  const handleNumber = (e) => {
    const numberOnlyRegex = /^[0-9]*$/;

    const { id, value } = e.target
    
    if (numberOnlyRegex.test(value)) {
      if (id === 'cedula') {
        setIdValue(value)
      } else if (id === 'telefono') {
        setPhoneValue(value)
      }
    }
    
  };
  // const fbq = ReactPixel;

  const handleForm = async (e) => {
    e.preventDefault();
    const form = document.querySelector(".formToSend");
    const inputs = form.querySelectorAll("input");

    const inputsRequired = Array.from(inputs).filter(
      (input) => input.id !== "datosAdicionales"
    );

    const formToSend = new FormData(form);
    inputs.forEach((input) => {
      const errorChild = input.parentNode.querySelector(".emptyField");
      if (errorChild) {
        input.parentNode.removeChild(errorChild);
      }
    });

    inputsRequired.forEach((input) => {
      if (input.value == "") {
        input.style.border = "1px solid #ff5252";

        const errorMessage = document.createElement("span");
        errorMessage.classList.add("emptyField");
        errorMessage.textContent = "llena este campo";
        errorMessage.style.color = "#ff5252";
        errorMessage.style.fontSize = "12px";
        errorMessage.style.display = "block";
        errorMessage.style.marginTop = "2px";
        input.parentNode.appendChild(errorMessage);
        return;
      }
    });
    try {
      //* Validate eMail
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (inputs[1].value != "" && !pattern.test(inputs[1].value)) {
        setErrMail(true);
        return;
      }
      // //* Validate ID
      const IDPattern = /^\d{6,10}$/;
      if (inputs[3].value != "" && !IDPattern.test(inputs[3].value)) {
        setErrID(true);
        return;
      }
      const purchaseData = {};
      purchaseData.valorCompra = subtotal;
      console.log({ purchaseData });
      for (const [key, value] of formToSend.entries()) {
        purchaseData[key] = value;
        if (value == "" && key !== "datosAdicionales") {
          return;
        }
      }

      await makeRequest.post("/purchase/newPurchase", purchaseData);
      // fbq.track("Purchase", { currency: "COL", value: 169900 });
      setOpenForm(false);
      setThanksPage(true);
      setSomeErr("");
    } catch (error) {
      console.log(error);
      setSomeErr(error.message);
    }
  };

  const closeForm = () => {
    console.log(`registrando cierre del form`);
    setOpenForm(false);
    // fbq.trackCustom("FormClosed");
  };
  return (
    <div id="modalForm">
      <div className="purchaseForm">
        <div className="closeBtn">
          <button onClick={closeForm}>X</button>
        </div>
        <div className="purchaseForm_title">
          <p>
            ¡Obtén envío <b>GRATIS</b> y <b>Paga al Recibir! </b>
          </p>
          <span className="gifts">
            Además lleva con tu compra:
            <br /> <b>Rutina de Entrenamiento Gratis (PDF)</b>
          </span>
          <br />
          <div className="form_productAndGift">
            {/* <h4>Selecciona el color</h4> */}
            <div className="productAndGift_img imgProductContainer">
              <img src="/assets/product/productIntro1.webp" alt="" />
            </div>
            <span>+</span>
            <div className="productAndGift_img imgGiftContainer">
              <img src="/assets/product/Rutine.webp" alt="" />
            </div>
          </div>
          <p className="completeFormText">
            Completa el formulario a continuación para que te llevemos tu
            JawFit-Pro directamente a la puerta de tu casa.
          </p>
        </div>
        <div className="formContainer">
          <div className="purchaseDetail">
            <div className="purchaseItem purchaseDetail_subtotal">
              <span>Subtotal</span> <span>$ {subtotal}</span>
            </div>
            <div className="purchaseItem purchaseDetail_envio">
              <span>Envío</span>
              <span>GRATIS</span>
            </div>
            <hr />
            <div className="purchaseItem purchaseDetail_total">
              <span>Total</span>
              <span>$ {subtotal}</span>
            </div>
          </div>
          <div className="alertAdvice">
            <span>🚨 Atención 🚨</span>
            <p>
              Asegúrate de proporcionar la información correcta para el envío de
              tu pedido. Es crucial incluir un número de teléfono con WhatsApp.
            </p>
          </div>

          <form action="" className="formToSend" onSubmit={handleForm}>
            <label htmlFor="name">
              Nombre
              <input
                type="text"
                id="name"
                placeholder="Tu Nombre Completo"
                name="Nombre"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="email">
              E-mail
              <input
                type="text"
                id="email"
                placeholder="ejemplo@gmail.com"
                name="Email"
                onChange={handleChange}
              />
              {errMail ? (
                <div className="invalidEmail">Email Invalido</div>
              ) : (
                ""
              )}
            </label>
            <label htmlFor="telefono">
              Telefono - <span className="clarification">Whatsapp</span>
              <input
                type="tel"
                id="telefono"
                placeholder="320 123 4567"
                name="Telefono"
                onChange={handleChange}
                onInput={handleNumber}
                value={phoneValue}
              />
            </label>
            <label htmlFor="cedula">
              Cedula -{" "}
              <span className="clarification">Para La transportadora</span>
              <input
                type="tel"
                id="cedula"
                placeholder="Solo numeros y sin puntos"
                name="Cedula"
                onChange={handleChange}
                onInput={handleNumber}
                value={idValue}
              />
              {errID ? (
                <div className="invalidID">Formato de Cedula Invalido</div>
              ) : (
                ""
              )}
            </label>
            <div className="ciudadDepartamento">
              <label htmlFor="ciudad">
                Ciudad
                <input
                  type="text"
                  id="ciudad"
                  placeholder="Ciudad"
                  name="Ciudad"
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="departamento">
                Departamento
                <input
                  type="text"
                  id="departamento"
                  placeholder="Departamento"
                  name="Departamento"
                  onChange={handleChange}
                />
              </label>
            </div>
            <label htmlFor="direccion">
              Dirección
              <input
                type="text"
                id="direccion"
                placeholder="calle xxx, barrio xxx, cerca a ..."
                name="Direccion"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="datosAdicionales">
              Datos Adicionales
              <input
                type="text"
                id="datosAdicionales"
                placeholder="Cualquier aclaración que consideres importante"
                name="datosAdicionales"
                onChange={handleChange}
              />
            </label>
            {someErr && <span className="errorSending">{someErr}</span>}
            <button className="btn text-white">
              ¡Pedir y Pagar En Casa!{" "}
              <svg
                fill="none"
                stroke="#ffffff"
                height="27"
                viewBox="0 0 30 27"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
                style={{ fontWeight: 600 }}
                strokeWidth={2}
              >
                <path d="M1.39999 1.70001H6.60001" stroke="#ffffff" />
                <path d="M6.60001 1.70001L11 18.9" />
                <path d="M11.8 18.9H28.3" stroke="##ffffff" />
                <path
                  d="M13.8 25.7C15.4569 25.7 16.8 24.3569 16.8 22.7C16.8 21.0432 15.4569 19.7 13.8 19.7C12.1431 19.7 10.8 21.0432 10.8 22.7C10.8 24.3569 12.1431 25.7 13.8 25.7Z"
                  stroke="#ffffff"
                />
                <path
                  d="M25.3 25.7C26.9568 25.7 28.3 24.3569 28.3 22.7C28.3 21.0432 26.9568 19.7 25.3 19.7C23.6431 19.7 22.3 21.0432 22.3 22.7C22.3 24.3569 23.6431 25.7 25.3 25.7Z"
                  stroke="#ffffff"
                />
                <path
                  d="M25.7 14.6H11.3C10.7 14.6 10.1 14.2 10 13.6L8.1 6.90001C7.9 6.00001 8.49999 5.20001 9.39999 5.20001H27.5C28.4 5.20001 29.1 6.10001 28.8 6.90001L26.9 13.6C26.9 14.2 26.4 14.6 25.7 14.6Z"
                  stroke="#ffffff"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

PurchaseForm.propTypes = {
  setOpenForm: PropTypes.func.isRequired,
  setThanksPage: PropTypes.func.isRequired,
};
export default PurchaseForm;
