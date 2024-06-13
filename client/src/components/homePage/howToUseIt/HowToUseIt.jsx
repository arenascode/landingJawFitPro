import "./howToUse.scss";

const HowToUseIt = () => {
  return (
    <div className="howToUseIt_container m-1 mt-3">
      <h1 className="howToUseIt_title text-xl text-center">
        Cómo Usar Los JawFit-Pro
      </h1>
      <div className="howToUseIt_steps">
        <div className="step">
          <div className="imgContainer">
            <img src="/assets/howToUseIt/1-boil.webp" alt="" />
          </div>
          <p>
            Pon El JawFit en Agua hirviendo por 20 segundos. (Esto lo ablandará
            y te será más facil comenzar a usarlos)
          </p>
        </div>
        <div className="step">
          <div className="imgContainer">
            <img src="/assets/howToUseIt/2-accommodate.webp" alt="" />
          </div>
          <p>
            Coloca un Jawfit a cada lado como lo muestra la imagen, muerde
            cómodamente con los molares y mantélo así durante todo el ejercicio.
          </p>
        </div>
        <div className="step">
          <div className="imgContainer">
            <img src="/assets/howToUseIt/3-bit.webp" alt="" />
          </div>
          <p>
            Mastica constantemente y nota como se ejercitan los musculos de tu
            mandibula.
          </p>
        </div>
        <div className="step">
          <div className="imgContainer">
            <img src="/assets/howToUseIt/4-wash.webp" alt="" />
          </div>
          <p>
            Una vez utilizados, lávalos y guárdalos en su caja correspondiente.
          </p>
        </div>
      </div>
    </div>
  );
};
export default HowToUseIt;
