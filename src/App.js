import React from 'react'
import { Route, Switch } from 'react-router';
import './App.css';
import {Sectionspg} from './pages/PageSrc'
import Layout from './components/Layout/Layout'
import { Home, Login, Signup, About,FAQ, Section} from './pages/PageSrc'

function App() {
  return (
      <Switch>
      <Layout>
        <Route path="/section" exact component={Section}/>
        <Route path="/about" exact component={About} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Login} />
        <Route path="/faq" exact component={FAQ} />
        <Route path="/" exact component={Home} />
        </Layout>
      </Switch>

  );
}

export default App;