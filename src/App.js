import React from "react";
// import Signup from "./views/Signup"
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./views/Login";
import PrivateRoute from "./views/PrivateRoute";
import ForgotPassword from "./views/ForgotPassword";
import UpdateProfile from "./views/UpdateProfile";
import Report from "./views/Report";

import Admin from "./layouts/Admin";
import InputWarehouse from "./containers/PageWarehouse/InputWarehouse";
import AdminWarehouse from "./layouts/AdminWarehouse";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <PrivateRoute path="/admin" component={Admin} />
          <PrivateRoute path="/report" component={Report} />
          <PrivateRoute
            path="/admin/WarehouseInput"
            component={InputWarehouse}
          />
          <PrivateRoute path="/adminWarehouser" component={AdminWarehouse} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
