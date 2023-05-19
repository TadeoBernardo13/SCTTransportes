import { NavLink } from "react-router-dom";
import "../css/dashboard.css";

function Dashboard() {
  return (
    <div className="main-container d-flex">
      <div className="sidebar" id="side_nav">
        <div className="header-box px-2 pt-3 pb-4">
          <h1 className="fs-4">
            <span className="bg-white text-dark rounded shadow px-2 me-2">
              SCT
            </span>{" "}
            <span className="text-white">Control de permisos</span>
          </h1>
          <button className="btn d-md-none d-block close-btn px-1 py-0 text-white">
            <i class="bi bi-list"></i>
          </button>
        </div>
        <ul className="list-unstyled px-2">
          <li className="p-2">
            <NavLink
              className="text-decoration-none nav__link"
              to="/altavehiculoadicionalcargaespecializadaresiduospeligrosos"
            >
              AVA. AL PERMISO PARA EL SERVICIO DE AUTOTRANSPORTE FEDERAL DE
              CARGA ESPECIALIZADA PARA EL TRANSPORTE DE MATERIALES Y RESIDUOS
              PELIGROSOS
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink
              to="/altavehiculoadicionalcargageneral"
              className="text-decoration-none nav__link"
            >
              AVA. AL PERMISO PARA EL SERVICIO DE AUTOTRANSPORTE FEDERAL DE
              CARGA GENERAL
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink
              to="/altavehiculoadicionalfederalpasaje"
              className="text-decoration-none nav__link"
            >
              AVA. AL PERMISO PARA EL SERVICIO DE AUTOTRANSPORTE FEDERAL DE
              PASAJE
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink
              to="/altavehiculoadicionalfederalturismo"
              className="text-decoration-none nav__link"
            >
              AVA. AL PERMISO PARA EL SERVICIO DE AUTOTRANSPORTE FEDERAL DE
              TURISMO
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink
              to="/altavehiculoadicionalprivadocargaespecilizadaresiduosremanentesdesechospeligrosos"
              className="text-decoration-none nav__link"
            >
              AVA. AL PERMISO PARA EL SERVICIO DE TRANSPORTE PRIVADO DE CARGA
              ESPECIALIZADA DE MATERIALES, RESIDUOS, REMANENTES Y DESECHOS
              PELIGROSOS
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink
              to="/altavehiculoadicionalprivadocargageneral"
              className="text-decoration-none nav__link"
            >
              AVA. AL PERMISO PARA EL SERVICIO DE TRANSPORTE PRIVADO DE DE CARGA
              GENERAL
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink
              to="/altavehiculoadicionalprivadopersonas"
              className="text-decoration-none nav__link"
            >
              AVA. AL PERMISO DE TRANSPORTE PRIVADO DE PERSONAS
            </NavLink>
          </li>
          {/* <li className="p-2">
            <NavLink
              to="/expedicionpermisofederalpasaje"
              className="text-decoration-none nav__link"
            >
              EPS. DE AUTOTRANSPORTE FEDERAL DE PASAJE
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink
              to="/expedicionpermisofederalturismo"
              className="text-decoration-none nav__link"
            >
              EPS DE AUTOTRANSPORTE FEDERAL DE TURISMO
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink to="#" className="text-decoration-none nav__link">
              Icon Dashboard
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink to="#" className="text-decoration-none nav__link">
              Icon Dashboard
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink to="#" className="text-decoration-none nav__link">
              Icon Dashboard
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink to="#" className="text-decoration-none nav__link">
              Icon Dashboard
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink to="#" className="text-decoration-none nav__link">
              Icon Dashboard
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink to="#" className="text-decoration-none nav__link">
              Icon Dashboard
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink to="#" className="text-decoration-none nav__link">
              Icon Dashboard
            </NavLink>
          </li> */}
          <li className="p-2">
            <NavLink to="/dashboard" className="text-decoration-none nav__link">
              Ver Reportes en proceso
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink to="/pendientes" className="text-decoration-none nav__link">
              Ver Reportes pendientes
            </NavLink>
          </li>
        </ul>
        <hr className="h-color mx-2" />
        <ul className="list-unstyled">
          <li className="">
            <NavLink to="/" className="text-decoration-none nav__link">
              Salir
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
