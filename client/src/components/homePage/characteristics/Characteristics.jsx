import "./characteristics.scss";

const Characteristics = () => {
  return (
    <div className="characteristics_container">
      <div className="characteristic">
        <div className="characteristicImg">
          <img src="/assets/characteristics/sinBpa-xs.webp" alt="" />
        </div>
        <span>Silicona de Grado Alimenticio Libre de BPA</span>
      </div>
      <div className="characteristic bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
        <div className="characteristicImg">
          <img src="/assets/characteristics/strenghtsLevels-xs.webp" alt="" />
        </div>
        <span>3 Niveles de Fuerza</span>
      </div>
      <div className="characteristic">
        <div className="characteristicImg">
          <img src="/assets/characteristics/durable-xs.webp" alt="" />
        </div>
        <span>Más Resistentes Que Otros Modelos</span>
      </div>
      <div className="characteristic">
        <div className="characteristicImg">
          <img src="/assets/characteristics/agua-xs.webp" alt="limpiar" />
        </div>
        <span>Faciles de Limpiar</span>
      </div>
    </div>
  );
}
export default Characteristics