import "./footer.scss";

const Footer = () => {
  return (
    <footer className="section">
      <div className="terms">
        <p>
          <strong className="terms-title">Términos y Condiciones</strong>
        </p>
        <p>
          <strong>1.Uso del Ejercitador Mandibular:</strong> Los ejercitadores
          mandibulares están diseñados para mejorar el tono muscular y la
          apariencia de la mandíbula con el uso constante. Sin embargo, los
          resultados pueden variar según el usuario. No garantizamos resultados
          específicos ni una duración exacta del producto, ya que la vida útil
          puede verse afectada por la fuerza de la mordida y el uso continuo.
        </p>
        <p>
          <strong>2. Desgaste y Rotura:</strong> Los productos de silicona, como
          los ejercitadores mandibulares, están sujetos a desgaste con el
          tiempo. Esto es especialmente cierto para los niveles básicos e
          intermedios. Recomendamos el uso adecuado según las instrucciones y la
          compra de kits avanzados si el usuario ya ha entrenado previamente su
          mandíbula para maximizar la durabilidad.
        </p>
        <p>
          <strong>3.Política de Devoluciones:</strong> Debido a la naturaleza
          del producto, no aceptamos devoluciones de productos usados o dañados
          por el uso. Sin embargo, si el producto presenta un defecto de
          fábrica, se puede solicitar un reemplazo dentro de los primeros 15
          días posteriores a la compra.
        </p>
        <p>
          <strong>4.Transacciones y Envíos:</strong> Los precios incluyen
          impuestos aplicables. Los envíos se realizan dentro de los días
          hábiles especificados durante la compra. El comprador es responsable
          de proporcionar una dirección de entrega correcta y completa. No nos
          hacemos responsables por paquetes perdidos debido a direcciones
          incorrectas proporcionadas por el cliente.
        </p>
        <p>
          <strong>5.Exoneración de Responsabilidad:</strong> Una vez que el
          cliente abandona la plataforma de Facebook o Instagram y continúa su
          compra a través de nuestra página web, Facebook no tiene
          responsabilidad alguna sobre la transacción o el producto.
        </p>
        <p>
          <strong>6.Seguridad y Privacidad:</strong> Toda la información
          personal proporcionada durante la compra será tratada de acuerdo con
          nuestra política de privacidad, la cual cumple con los estándares de
          protección de datos aplicables. Tu información nunca será compartida
          con terceros sin tu consentimiento.
        </p>
        <p>
          <strong>7.Modificaciones de las Condiciones:</strong> Nos reservamos
          el derecho de modificar estos términos y condiciones en cualquier
          momento, por lo que te recomendamos revisarlos periódicamente.
        </p>
      </div>

      <div className="footer_imgContainer">
        <div className="iconsRRSSContainer">
          <p>
            Si tienes alguna duda o consulta, contáctanos a través de nuestras
            redes:
          </p>
          <div className="icons flex align-middle justify-center gap-3 mt-3">
            <a
              className="fa-brands fa-whatsapp fa-xl"
              href="https://wa.link/21loa7"
              target="_blank"
            ></a>
            <a
              className="fa-brands fa-instagram fa-xl"
              href="https://www.instagram.com/focus_fitshop/"
              target="_blank"
            ></a>
            <a
              className="fa-brands fa-facebook fa-xl"
              href="https://www.facebook.com/profile.php?id=61560686750109"
              target="_blank"
            ></a>
          </div>
        </div>
        <img src="/assets/icons/logoNombre-xs.webp" alt="" />
      </div>
      <span className="sign">Creado Por ArenasCode ©</span>
    </footer>
  );
};
export default Footer;
