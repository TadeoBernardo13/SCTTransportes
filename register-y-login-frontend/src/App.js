import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Register from "./components/Register";
import Admin from "./components/Admin";

import DashboardView from "./components/DashboardView";

import ATAFederalCargaEResiduos from "./pages/altavehiculos/ATAFederalCargaEMRP";
import ATAFederalCargaGeneral from "./pages/altavehiculos/ATAFederalCargaGeneral";
import ATAFederalPasaje from "./pages/altavehiculos/ATAFederalPasaje";
import AltaTransporteFederalTurismo from "./pages/altavehiculos/ATAFederalTurismo";
import ATAPrivadoCargaERRDP from "./pages/altavehiculos/ATAPrivadoCargaEMRRDP";
import ATAPrivadoCargaGeneral from "./pages/altavehiculos/ATAPrivadoCargaGeneral";
import AltaTransportePrivadoPersonas from "./pages/altavehiculos/ATAPrivadoPersonas";

import EPSFederalPasaje from "./pages/altapermisos/EPSFederalPasaje";
import EPSFederalTurismo from "./pages/altapermisos/EPSFederalTurismo";

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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
