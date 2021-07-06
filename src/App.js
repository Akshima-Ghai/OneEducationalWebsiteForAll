import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";
import { Home, Login, Signup, About, FAQ, Section,Frontpg} from "./pages/PageSrc";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Frontpg} />
      <Layout>
        <Route path="/section" exact component={Section} />
        <Route path="/about" exact component={About} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Login} />
        <Route path="/faq" exact component={FAQ} />
        <Route path="/home" exact component={Home} />
       
        <Footer />
      </Layout>
    </Switch>
  );
}

export default App;
