import React from "react";
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import ProtectedRoute from "./utils/ProtectedRoute";
import Login from "./components/auth/login/login";
import ShapesPage from "./components/shapes/shapes";
import LoginState from "./store/login/loginState";

function App() {
  return (
    <div className="App">
      <LoginState>
        <Router>
          <Layout>
            <Switch>
              <ProtectedRoute path="/" component={ShapesPage} exact />
              <Route path="/login" exact>
                <Login />
              </Route>
            </Switch>
          </Layout>
        </Router>
      </LoginState>
    </div>
  );
}

export default App;
