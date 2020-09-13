import React from 'react';
import LandingPage from './layout/LandingPage'
import HomePage from './layout/HomePage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ArticleDetail from './components/ArticleDetail'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/homepage' component={HomePage} />
          <Route exact path='/article' component={ArticleDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
