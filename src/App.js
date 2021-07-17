import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";
import Feature_student from "./pages/Feature/Feature_student";
import Feature_teacher from "./pages/Feature/Feature_teacher";
import { Home, Login, Signup, SignupStudent, SignupTeacher, About, FAQ, Section,SingleQuiz,QuizList} from "./pages/PageSrc";
import Student from "./pages/Student/Student";
import Teacher from "./pages/Teacher/Teacher";
import Student_join from "./pages/Student_join/Student_join";
import Teacher_join from "./pages/Teacher_join/Teacher_join";
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
        <Route path="/student" exact component={Student} />
        <Route path="/teacher" exact component={Teacher} />
        <Route path="/student_join" exact component={Student_join} />
        <Route path="/teacher_join" exact component={Teacher_join} />
        
        {/* <Footer /> */}
      </Layout>
    </Switch>
  );
}

export default App;
