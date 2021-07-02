import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import Footer from "./components/Footer/Footer";

import Layout from "./components/Layout/Layout";
import { Home, Login, Signup, About } from "./pages/PageSrc";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </Switch>
      <Footer/>
    </Layout>
  );
}

export default App;
