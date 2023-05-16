import React from "react";
import { useState } from "react";
import axios from "axios";

import Dashboard from "../../components/Dashboard";

import "../../css/dashboard.css";

function AltaTransportePrivadoPersonas() {
  const [textareaEnabled, setTextareaEnabled] = useState(false);
  const [CheckBoxDisabled, setCheckBoxDisabled] = useState(true);

  const handleCheckboxChange = () => {
    setTextareaEnabled(!textareaEnabled);
    setCheckBoxDisabled(!CheckBoxDisabled);
  };

  const [inputs, setInputs] = useState({
    noFolioSiaf: "",
    fechaRecepcion: "",
    nombrePermisionario: "",
    nombreATA:
      "ALTA DE VEHICULOS ADICIONALES AL PERMISO DE TRANSPORTE PRIVADO DE PERSONAS",
  });
  const { noFolioSiaf, fechaRecepcion, nombrePermisionario, nombreATA } =
    inputs;

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
      };

      await axios
        .post("http://localhost:4000/altavehiculosadicionales", ATA)
        .then((res) => {
          setInputs({
            fechaRecepcion: "",
            noFolioSiaf: "",
            nombrePermisionario: "",
            nombreATA: "",
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  return (
    <>
      <div className="d-flex">
        <Dashboard />
        <div className="content p-4">
          <h1 className="fs-3">
            ALTA DE VEHICULOS ADICIONALES AL PERMISO DE TRANSPORTE PRIVADO DE
            PERSONAS
          </h1>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="d-flex justify-content-evenly">
              <div>
                <label htmlFor="numFolio">No. Folio SIAF:</label>
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
                <label htmlFor="fechaRecepcion">Fecha de Recepcion:</label>
                <input
                  onChange={(e) => HandleChange(e)}
                  value={fechaRecepcion}
                  name="fechaRecepcion"
                  id="fechaRecepcion"
                  type="date"
                  placeholder="Fecha de Recepcion"
                  autoComplete="off"
                />
              </div>
              <div>
                <label htmlFor="nombrePermisionario">Permisionario:</label>
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
            </div>
            <div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  disabled={!CheckBoxDisabled}
                />
                <label className="form-check-label" for="flexRadioDefault1">
                  Tiene todo
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked={textareaEnabled}
                  onChange={handleCheckboxChange}
                />
                <label className="form-check-label" for="flexRadioDefault2">
                  No cuenta con todo
                </label>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Escriba una justificacion o documentacion faltante
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  as="textarea"
                  disabled={!textareaEnabled}
                ></textarea>
              </div>
              <button type="submit">Registrar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AltaTransportePrivadoPersonas;
