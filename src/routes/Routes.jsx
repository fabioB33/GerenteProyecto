import React from "react";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "../auth/ProtectedRoute.jsx";

//views
//import Home from '../views/Home';
import MisReservas from "../views/MisReservas";
import Perfil from "../views/Perfil";
import Reservar from "../views/reservar/Reservar";
import NotFound from "../views/NotFound";
import Mesas from "../views/reservar/Mesas.jsx";
import ExternalApi from "../views/ExternalApi.jsx";
import Autotest from "../views/Autotest.jsx";
import Inicio from "../views/VistasGerente/InicioGerente.jsx";
import Empleados from "../views/VistasGerente/GestionarEmpleados.jsx";
import Local from "../views/VistasGerente/GestionarLocal.jsx";
// import crearEmpleado from "../views/VistasGerente/CrearEmpleados.jsx";

const Routes = () => {
  return (
    <Switch>
      {/* <Route
          exact
          path="/external"
          component={ExternalApi}
        /> */}
      {/* <Route
          exact
          path="/autotest"
          component={Autotest}
        /> */}
      <ProtectedRoute exact path="/gestion-empleados" component={Empleados} />
      {/* <ProtectedRoute exact path="/crear-empleados" component={crearEmpleado} /> */}
      <ProtectedRoute exact path="/perfil" component={Perfil} />
      <ProtectedRoute exact path="/" component={Inicio} />
      <ProtectedRoute exact path="/gestion-local" component={Local} />

      <Route exact path="/" component={Inicio} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
