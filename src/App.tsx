import { Redirect, Route, Switch } from "react-router-dom";

import { PrivateRoute, PublicRoute } from "./components/CustomRoute";
import Header from "./components/Header";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Switch>
        <PrivateRoute exact path="/">
          <Home />
        </PrivateRoute>
        <PublicRoute exact path="/login">
          <Login />
        </PublicRoute>
        <PublicRoute path="/register">
          <Register />
        </PublicRoute>

        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
