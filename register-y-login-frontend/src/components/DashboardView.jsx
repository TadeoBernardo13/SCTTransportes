import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import axios from "axios";

import "../css/dashboard.css";

function DashboardView() {
  const [data, setData] = useState([]);
  axios
    .get("http://localhost:4000/altavehiculosadicionales")
    .then((res) => setData(res.data))
    .catch((err) => console.log(err));

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
              </tr>
            </thead>
            <tbody>
              {data.map((d, i) => {
                return (
                  <tr>
                    <th key={i} scope="row">{d.noFolioSiaf}</th>
                    <td>{d.nombrePermisionario}</td>
                    <td>{d.nombreATA}</td>
                    <td>{d.fechaRecepcion}</td>
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

export default DashboardView;
