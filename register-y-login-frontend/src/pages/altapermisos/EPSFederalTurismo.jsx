import React from "react";
import "../../css/dashboard.css";

import Dashboard from "../../components/Dashboard";

function EPSFederalTurismo() {
  return (
    <div className="d-flex">
      <Dashboard />
      <div className="content p-4">
        <h1 className="fs-3">
          EXPEDICION DE PERMISO PARA EL SERVICIO DE AUTOTRANSPORTE FEDERAL DE
          TURISMO
        </h1>
        <form>
          <div className="d-flex justify-content-evenly">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" for="flexRadioDefault1">
                TURISTICO DE LUJO
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label className="form-check-label" for="flexRadioDefault2">
                TURISTICO
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault3"
              />
              <label className="form-check-label" for="flexRadioDefault3">
                DE EXCURSION
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault4"
              />
              <label className="form-check-label" for="flexRadioDefault4">
                OTRO
              </label>
            </div>
          </div>
          <div className="d-flex justify-content-evenly">
            <div>
              <label htmlFor="numFolio">No. Folio SIAF:</label>
              <input
                name="numFolio"
                id="numFolio"
                type="text"
                placeholder="No. Folio SIAF"
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="fechaRecepcion">Fecha de Recepcion:</label>
              <input
                name="fechaRecepcion"
                id="fechaRecepcion"
                type="date"
                placeholder="Fecha de Recepcion"
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="permisionario">Permisionario:</label>
              <input
                name="permisionario"
                id="permisionario"
                type="text"
                placeholder="Permisionario"
                autoComplete="off"
              />
            </div>
          </div>
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">DOCUMENTOS NECESARIOS / REQUERIDOS</th>
                  <th scope="col">Presentación en Ventanilla</th>
                  <th scope="col">Contenido en expediente</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>
                    Pre-registro en caso de trámite presencial o Solicitud con
                    e-firma para el trámite en linea
                  </td>
                  <td>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Original
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        Copia
                      </label>
                    </div>
                  </td>
                  <td>
                    <div class="mb-3">
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="2"
                      ></textarea>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th scope="row">2</th>
                  <td>
                    Documento que ampara la Inscripción en el Registro Federal
                    de Contribuyentes (RFC) de la persona solicitante
                  </td>
                  <td>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Original
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        Copia
                      </label>
                    </div>
                  </td>
                  <td>
                    <div class="mb-3">
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="2"
                      ></textarea>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th scope="row">3</th>
                  <td>
                    Acta de nacimiento, cartilla militar, certificado de
                    nacionalidad, carta de naturalización o pasaporte
                    (cualquiera de estos)
                  </td>
                  <td>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Original
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        Copia
                      </label>
                    </div>
                  </td>
                  <td>
                    <div class="mb-3">
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="2"
                      ></textarea>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th scope="row">4</th>
                  <td>
                    Comprobante de domicilio fiscal. Contrato de
                    arrendamiento(en su caso), Recibo de teléfono, agua, luz, tv
                    por cable o satelital, afore, IMSS, infonavit (No mayor a 3
                    meses)
                  </td>
                  <td>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Original
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        Copia
                      </label>
                    </div>
                  </td>
                  <td>
                    <div class="mb-3">
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="2"
                      ></textarea>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th scope="row">5</th>
                  <td>
                    Identificación Oficial vigente (Credencial para votar IFE o
                    INE, Cédula Profesional,Pasaporte Mexicano, Cartilla de
                    identidad del servicio Militar Nacional) (cualquiera de
                    estos)
                  </td>
                  <td>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Original
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        Copia
                      </label>
                    </div>
                  </td>
                  <td>
                    <div class="mb-3">
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="2"
                      ></textarea>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">5a</th>
                  <td>
                    Chofer guia: En esta modalidad presentar credencial de
                    turistas vigente
                  </td>
                  <td>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Original
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        Copia
                      </label>
                    </div>
                  </td>
                  <td>
                    <div class="mb-3">
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="2"
                      ></textarea>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th scope="row">6</th>
                  <td>
                    Acta Constitutiva debidamente registrada. (En el Objeto
                    Social debe constar como actividad principal la prestación
                    del servicio de Autotransporte Federal)
                  </td>
                  <td>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Original
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        Copia
                      </label>
                    </div>
                  </td>
                  <td>
                    <div class="mb-3">
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="2"
                      ></textarea>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th scope="row">7</th>
                  <td>
                    Comprobante de domicilio fiscal. Contrato de
                    arrendamiento(en su caso), Recibo de teléfono, agua, luz, tv
                    por cable o satelital, afore, IMSS, infonavit (No mayor a 3
                    meses)
                  </td>
                  <td>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Original
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        Copia
                      </label>
                    </div>
                  </td>
                  <td>
                    <div class="mb-3">
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="2"
                      ></textarea>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th scope="row">8</th>
                  <td>Poder o Carta poder, otorgado ante Fedatario Público</td>
                  <td>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Original
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        Copia
                      </label>
                    </div>
                  </td>
                  <td>
                    <div class="mb-3">
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="2"
                      ></textarea>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th scope="row">9</th>
                  <td>
                    Identificación Oficial vigente (Credencial para votar IFE o
                    INE, Cédula Profesional pasaporte Mexicano, Cartilla de
                    identidad del servicio Militar Nacional) (cualquiera de
                    estos)
                  </td>
                  <td>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Original
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        Copia
                      </label>
                    </div>
                  </td>
                  <td>
                    <div class="mb-3">
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="2"
                      ></textarea>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th scope="row">10</th>
                  <td>
                    Comprobante de domicilio fiscal. Contrato de
                    arrendamiento(en su caso), Recibo de teléfono, agua, luz, tv
                    por cable o satelital, afore, IMSS, infonavit (No mayor a 3
                    meses)
                  </td>
                  <td>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Original
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        Copia
                      </label>
                    </div>
                  </td>
                  <td>
                    <div class="mb-3">
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="2"
                      ></textarea>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th scope="row">11</th>
                  <td>
                    Documento que ampara la Inscripción en el Registro Federal
                    de Contribuyentes (RFC) de la persona solicitante
                  </td>
                  <td>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Original
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        Copia
                      </label>
                    </div>
                  </td>
                  <td>
                    <div class="mb-3">
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="2"
                      ></textarea>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th scope="row">12</th>
                  <td>
                    Acreditar la propiedad o legal posesión del vehiculo
                    (factura, copia de la factura y carta-factura vigente,
                    contrato de arrendamiento financiero vigente.) cualquiera
                  </td>
                  <td>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Original
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        Copia
                      </label>
                    </div>
                  </td>
                  <td>
                    <div class="mb-3">
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="2"
                      ></textarea>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th scope="row">13</th>
                  <td>
                    En caso de unidades de procedencia extranjera, acreditar su
                    legal importación, estancia o tenencia en el país.
                    (Fletamento, solo DAF fronterizos)
                  </td>
                  <td>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Original
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        Copia
                      </label>
                    </div>
                  </td>
                  <td>
                    <div class="mb-3">
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="2"
                      ></textarea>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th scope="row">14</th>
                  <td>
                    Poliza del seguro de responsabilidad civil por daños a
                    terceros, por 19000 D.S.M.G.V. CDMx o su equivalente en
                    U.M.A.
                  </td>
                  <td>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Original
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        Copia
                      </label>
                    </div>
                  </td>
                  <td>
                    <div class="mb-3">
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="2"
                      ></textarea>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th scope="row">15</th>
                  <td>
                    Poliza anual de seguro de viajero por 3160 D.S.M.G.V en CDMx
                    o su equivalente en UMAs
                  </td>
                  <td>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Original
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        Copia
                      </label>
                    </div>
                  </td>
                  <td>
                    <div class="mb-3">
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="2"
                      ></textarea>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th scope="row">16</th>
                  <td>
                    Facturas (CFD o CFDi) del pago de la Póliza del seguro anual
                    de responsabilidad civil por daños a terceros y del seguro
                    anual de viajero
                  </td>
                  <td>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Original
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        Copia
                      </label>
                    </div>
                  </td>
                  <td>
                    <div class="mb-3">
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="2"
                      ></textarea>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th scope="row">17</th>
                  <td>
                    Certificado de baja emision de Contaminantes vigente del
                    último período o constancia de excencion
                  </td>
                  <td>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Original
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        Copia
                      </label>
                    </div>
                  </td>
                  <td>
                    <div class="mb-3">
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="2"
                      ></textarea>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th scope="row">18</th>
                  <td>
                    Dictámen de condiciones fisico-mecánicas (solo vehiculos con
                    antigüedad mayor a dos años y antecedente de haber prestado
                    SPF) "o" constancia de excención(of.circular)
                  </td>
                  <td>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Original
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        Copia
                      </label>
                    </div>
                  </td>
                  <td>
                    <div class="mb-3">
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="2"
                      ></textarea>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EPSFederalTurismo;
