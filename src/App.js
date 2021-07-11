import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";
import Feature_student from "./pages/Feature/Feature_student";
import Feature_teacher from "./pages/Feature/Feature_teacher";
import { Home, Login, Signup, SignupStudent, SignupTeacher, About, FAQ, Section,SingleQuiz,QuizList} from "./pages/PageSrc";

function App() {
  return (
    <Switch>
      <Layout>
        <Route path="/quiz/:qid" exact component={SingleQuiz} />
        <Route path="/quiz" exact component={QuizList} />
        <Route path="/section" exact component={Section} />
        <Route path="/about" exact component={About} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signupstudent" exact component={SignupStudent} />
        <Route path="/signupteacher" exact component={SignupTeacher} />
        <Route path="/login" exact component={Login} />
        <Route path="/faq" exact component={FAQ} />
        <Route path="/" exact component={Home} />
        <Route path="/Feature_Student" exact component={Feature_student} />
        <Route path="/Feature_Teacher" exact component={Feature_teacher} />
        {/* <Footer /> */}
      </Layout>
    </Switch>
  );
}

export default App;
