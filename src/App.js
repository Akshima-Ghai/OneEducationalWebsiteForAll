import React from 'react'
import { Route, Switch } from 'react-router';
import './App.css';
import {Sectionspg} from './pages/PageSrc'
import Layout from './components/Layout/Layout'
import { Home, Login, Signup, About,Frontpg} from './pages/PageSrc'

function App() {
  return (
      <Switch>
      <Route path="/" exact component={Frontpg} />
      <Route path="/section" exact component={Sectionspg}/>
      <Layout>
        <Route path="/about" exact component={About} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Login} />
        <Route path="/home" exact component={Home} />
        </Layout>
      </Switch>

  );
}

export default App;