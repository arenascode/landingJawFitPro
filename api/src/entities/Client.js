export default class Client {
  constructor(
    {nombre,
    email,
    telefono,
    cedula,
    ciudad,
    departamento,
    direccion,
    kit,
    numero_orden,
    valor_compra,
    producto,
    datos_adicionales}
  ) {
    (this.nombre = nombre),
      (this.email = email),
      (this.telefono = telefono),
      (this.cedula = cedula),
      (this.ciudad = ciudad),
      (this.departamento = departamento);
    this.direccion = direccion;
    this.kit = kit;
    this.numero_orden = numero_orden;
    this.valor_compra = valor_compra;
    this.producto = producto;
    this.datos_adicionales = datos_adicionales;
    this.fecha_compra = new Date();
  }

  // purchaseDate() {
  //   const options = {
  //     day: "numeric",
  //     month: "numeric",
  //     year: "numeric",
  //     hour: "numeric",
  //     minute: "numeric",
  //   };
  //   const newDate = new Date("es-419", options);
  //   // const formattedDate = date.toLocaleString("es-419", options);
  //   return newDate;
  // }
}
// con ≤,///././st client = new Client(
//   "miguel",
//   "arenas",
//   "1234567",
//   "bogota",
//   "cundinamarca",
//   "calle 124 siempre vida",
//   "al frente del cc"
// );
// console.log(client);
// const client = new Client()
// export default client
