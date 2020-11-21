import React from 'react';
import LandingPage from './layout/LandingPage'
import HomePage from './layout/HomePage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ArticleDetail from './components/ArticleDetail'
// fcfb165ebb74b13b955eabeedec2b3df911fc038

// encoded -
// ZmNmYjE2NWViYjc0YjEzYjk1NWVhYmVlZGVjMmIzZGY5MTFmYzAzOA==

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
