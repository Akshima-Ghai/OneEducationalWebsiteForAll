import React from 'react'
import { Route, Switch } from 'react-router';
import './App.css';

import Layout from './components/Layout/Layout'
import { Home, Login, Signup } from './pages/PageSrc'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>
  );
}

export default App;
