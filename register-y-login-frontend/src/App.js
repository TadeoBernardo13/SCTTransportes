import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Register from "./components/Register";
import Admin from "./components/Admin";

import DashboardView from "./components/DashboardView";
import PendientesView from "./components/PendientesView";

import ATAFederalCargaEResiduos from "./pages/altavehiculos/ATAFederalCargaEMRP";
import ATAFederalCargaGeneral from "./pages/altavehiculos/ATAFederalCargaGeneral";
import ATAFederalPasaje from "./pages/altavehiculos/ATAFederalPasaje";
import AltaTransporteFederalTurismo from "./pages/altavehiculos/ATAFederalTurismo";
import ATAPrivadoCargaERRDP from "./pages/altavehiculos/ATAPrivadoCargaEMRRDP";
import ATAPrivadoCargaGeneral from "./pages/altavehiculos/ATAPrivadoCargaGeneral";
import AltaTransportePrivadoPersonas from "./pages/altavehiculos/ATAPrivadoPersonas";

import EPSFederalPasaje from "./pages/altapermisos/EPSFederalPasaje";
import EPSFederalTurismo from "./pages/altapermisos/EPSFederalTurismo";

import ATAFederalCargaEResiduosP from "./pages/altavehiculos/ATAFederalCargaEMRP_P";
import ATAFederalCargaGeneralP from "./pages/altavehiculos/ATAFederalCargaGeneral_P";
import ATAFederalPasajeP from "./pages/altavehiculos/ATAFederalPasaje_P";
import ATAFederalTurismoP from "./pages/altavehiculos/ATAFederalTurismo_P";
import ATAPrivadoCargaEMRRDPp from "./pages/altavehiculos/ATAPrivadoCargaEMRRDP_P";
import ATAPrivadoCargaGeneralP from "./pages/altavehiculos/ATAPrivadoCargaGeneral_P";
import ATAPrivadoPersonasP from "./pages/altavehiculos/ATAPrivadoPersonas_P";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/admin" element={<Admin />} />

        <Route
          path="/altavehiculoadicionalcargaespecializadaresiduospeligrosos"
          element={<ATAFederalCargaEResiduos />}
        />
        <Route
          path="/altavehiculoadicionalcargageneral"
          element={<ATAFederalCargaGeneral />}
        />
        <Route
          path="/altavehiculoadicionalfederalpasaje"
          element={<ATAFederalPasaje />}
        />
        <Route
          path="/altavehiculoadicionalfederalturismo"
          element={<AltaTransporteFederalTurismo />}
        />
        <Route
          path="/altavehiculoadicionalprivadocargaespecilizadaresiduosremanentesdesechospeligrosos"
          element={<ATAPrivadoCargaERRDP />}
        />
        <Route
          path="/altavehiculoadicionalprivadocargageneral"
          element={<ATAPrivadoCargaGeneral />}
        />
        <Route
          path="/altavehiculoadicionalprivadopersonas"
          element={<AltaTransportePrivadoPersonas />}
        />

        <Route
          path="/expedicionpermisofederalpasaje"
          element={<EPSFederalPasaje />}
        />
        <Route
          path="/expedicionpermisofederalturismo"
          element={<EPSFederalTurismo />}
        />
        <Route path="/dashboard" element={<DashboardView />} />
        <Route path="/pendientes" element={<PendientesView />} />

        <Route
          path="/altavehiculoadicionalcargaespecializadaresiduospeligrosos_p"
          element={<ATAFederalCargaEResiduosP />}
        />
        <Route
          path="/altavehiculoadicionalcargageneral_p"
          element={<ATAFederalCargaGeneralP />}
        />
        <Route
          path="/altavehiculoadicionalfederalpasaje_p"
          element={<ATAFederalPasajeP />}
        />
        <Route
          path="/altavehiculoadicionalfederalturismo_p"
          element={<ATAFederalTurismoP />}
        />
        <Route
          path="/altavehiculoadicionalprivadocargaespecilizadaresiduosremanentesdesechospeligrosos_p"
          element={<ATAPrivadoCargaEMRRDPp />}
        />
        <Route
          path="/altavehiculoadicionalprivadocargageneral_p"
          element={<ATAPrivadoCargaGeneralP />}
        />
        <Route
          path="/altavehiculoadicionalprivadopersonas_p"
          element={<ATAPrivadoPersonasP />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
