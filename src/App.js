import React from 'react';
import { Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import HomePage from './pages/Home-page';
import BlogPage from './pages/Blog-page';
import AboutPage from './pages/About-page';
import ContactPage from './pages/Contact-page';
import Single from './pages/Single';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/blog" exact component={BlogPage} />
        <Route path="/blog/:id" exact component={Single} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/contact" exact component={ContactPage} />
      </Switch>
    </div>
  );
}

export default App;
