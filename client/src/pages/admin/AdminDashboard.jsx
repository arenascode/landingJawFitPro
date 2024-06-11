import "./admin.scss";
import { useState, useEffect } from "react";
import { makeRequest } from "../../axios.js";

const AdminDashboard = () => {
  const Clientes = () => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
      const fetchClients = async () => {
        await makeRequest.get("/purchase/getClients").then((res) => {
          setClientes(res.data);
        });
      };

      fetchClients();
    }, []);

    const optionsDateToShow = {
      day: "numeric",
      month: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    };

    return (
      <div className="overflow-x-auto chartClients rounded-lg">
        <table className="table table-xs table-pin-rows table-pin-cols bg-white rounded-md">
          <thead>
            <tr className="font-bold text-black">
              <td>Nombre</td>
              <td>Email</td>
              <td>Telefono</td>
              <td>Cedula</td>
              <td>Ciudad</td>
              <td>Departamento</td>
              <td>Direccion</td>
              <td>Valor Compra</td>
              <td>Fecha Compra</td>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.nombre}</td>
                <td>{cliente.email}</td>
                <td>{cliente.telefono}</td>
                <td>{cliente.cedula}</td>
                <td>{cliente.ciudad}</td>
                <td>{cliente.departamento}</td>
                <td>{cliente.direccion}</td>
                <td>{cliente.valor_compra}</td>
                <td>
                  {new Date(cliente.fecha_compra).toLocaleString(
                    "es-419",
                    optionsDateToShow
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      // <div>
      //   <table>
      //     <thead>
      //       <tr>
      //         <th>Nombre</th>
      //         <th>Email</th>
      //         <th>Ciudad</th>
      //         <th>Teléfono</th>
      //         <th>Dirección</th>
      //         <th>Departamento</th>
      //         <th>Color Morral</th>
      //         <th>Valor Compra</th>
      //         <th>Fecha Compra</th>
      //       </tr>
      //     </thead>
      //     <tbody>
      //       {clientes.map((cliente) => (
      //         <tr key={cliente.id}>
      //           <td>{cliente.nombre}</td>
      //           <td>{cliente.email}</td>
      //           <td>{cliente.ciudad}</td>
      //           <td>{cliente.telefono}</td>
      //           <td>{cliente.direccion}</td>
      //           <td>{cliente.departamento}</td>
      //           <td>{cliente.colorMorral}</td>
      //           <td>{cliente.valorCompra}</td>
      //           <td>{cliente.fechaCompra}</td>
      //         </tr>
      //       ))}
      //     </tbody>
      //   </table>
      // </div>
    );
  };

  return (
    <div id="dashboard_Content">
      <h1>Clientes JawFit-Pro</h1>
      <div className="clientsChartContainer">
        <Clientes />
      </div>
    </div>
  );
};
export default AdminDashboard;
