import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";
import Feature_student from "./pages/Feature/Feature_student";
import Feature_teacher from "./pages/Feature/Feature_teacher";
import { Home, Login, Signup, About, FAQ, Section} from "./pages/PageSrc";

function App() {
  return (
    <Switch>
      <Layout>
        <Route path="/section" exact component={Section} />
        <Route path="/about" exact component={About} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Login} />
        <Route path="/faq" exact component={FAQ} />
        <Route path="/" exact component={Home} />
        <Route path="/Feature_Student" exact component={Feature_student} />
        <Route path="/Feature_Teacher" exact component={Feature_teacher} />
        <Footer />
      </Layout>
    </Switch>
  );
}

export default App;
