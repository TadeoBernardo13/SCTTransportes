import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import axios from "axios";

import "../css/dashboard.css";

function PendientesView() {
  const [data, setData] = useState([]);
  axios
    .get("http://localhost:4000/pendientes/pendientes")
    .then((res) => setData(res.data))
    .catch((err) => console.log(err));

  const deletePost = (id, e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:4000/pendientes/pendientes/${id}`)
      .then((res) => console.log("Deleted!", res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="d-flex">
        <Dashboard />
        <div className="content">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">No. Folio SIAF</th>
                <th scope="col">Nombre del permisionario</th>
                <th scope="col">Nombre del documento</th>
                <th scope="col">Fecha de recepcion</th>
                <th scope="col">Justificacion</th>
                <th scope="col">Estado</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, i) => {
                return (
                  <tr>
                    <th key={i} scope="row">
                      {d.noFolioSiaf_P}
                    </th>
                    <td>{d.nombrePermisionario_P}</td>
                    <td>{d.nombreATA_P}</td>
                    <td>{d.fechaRecepcion_P}</td>
                    <td>{d.justificacion_P}</td>
                    <td>{d.estado}</td>
                    <td>
                      <button onClick={(e) => deletePost(d._id, e)} className="btn btn-danger">
                        Borrar
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default PendientesView;
