import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Dashboard from "../../components/Dashboard";

import "../../css/dashboard.css";
import styles from "../../components/styles.module.scss";

function ATAPrivadoCargaGeneral() {
  const navigate = useNavigate();
  const [mensaje, setMensaje] = useState();

  const [inputs, setInputs] = useState({
    noFolioSiaf: "",
    fechaRecepcion: "",
    nombrePermisionario: "",
    nombreATA:
      "ALTA DE VEHICULOS ADICIONALES AL PERMISO PARA EL SERVICIO DE TRANSPORTE PRIVADO DE DE CARGA GENERAL",
    estado_P: "EN PROCESO",
  });
  const {
    noFolioSiaf,
    fechaRecepcion,
    nombrePermisionario,
    nombreATA,
    estado_P,
  } = inputs;

  const HandleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (noFolioSiaf !== "" && nombrePermisionario !== "" && nombreATA !== "") {
      const ATA = {
        fechaRecepcion,
        noFolioSiaf,
        nombrePermisionario,
        nombreATA,
        estado_P,
      };

      await axios
        .post("http://localhost:4000/altavehiculosadicionales", ATA)
        .then((res) => {
          const { data } = res;
          setMensaje(data.mensaje);
          setInputs({
            fechaRecepcion: "",
            noFolioSiaf: "",
            nombrePermisionario: "",
            nombreATA: "",
            estado_P: "",
          });
          setTimeout(() => {
            setMensaje("");
          }, 1500);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert("Favor de llenar todos lo campos");
    }
  };
  return (
    <>
      <div className="d-flex">
        <Dashboard />
        <div className="content p-4">
          <h1 className="fs-3">
            ALTA DE VEHICULOS ADICIONALES AL PERMISO PARA EL SERVICIO DE
            TRANSPORTE PRIVADO DE DE CARGA GENERAL
          </h1>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="d-flex justify-content-evenly">
              <div>
                <label htmlFor="numFolio">* No. Folio SIAF:</label>
                <input
                  onChange={(e) => HandleChange(e)}
                  name="noFolioSiaf"
                  id="noFolioSiaf"
                  value={noFolioSiaf}
                  type="text"
                  placeholder="No. Folio SIAF"
                  autoComplete="off"
                />
              </div>
              <div>
                <label htmlFor="nombrePermisionario">* Permisionario:</label>
                <input
                  onChange={(e) => HandleChange(e)}
                  name="nombrePermisionario"
                  id="nombrePermisionario"
                  value={nombrePermisionario}
                  type="text"
                  placeholder="Permisionario"
                  autoComplete="off"
                />
              </div>
              <button type="submit" className="btn btn-info">
                Registrar
              </button>
            </div>
          </form>

          <hr />
          <button
            onClick={() =>
              navigate(`/altavehiculoadicionalprivadocargageneral_p`)
            }
            className="btn btn-secondary mt-4"
          >
            Registrar en pendientes
          </button>
          {mensaje && <div className={styles.toast}>{mensaje}</div>}
        </div>
      </div>
    </>
  );
}

export default ATAPrivadoCargaGeneral;
