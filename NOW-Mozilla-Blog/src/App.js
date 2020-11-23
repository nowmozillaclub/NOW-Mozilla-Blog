import React from 'react';
import LandingPage from './layout/LandingPage'
import HomePage from './layout/HomePage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ArticleDetail from './components/ArticleDetail'
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './Utils/apollo';
import GithubCallback from './Containers/GithubCallback';
import { lightTheme, darkTheme } from "./components/Theme/Theme";
import { useDarkMode } from "./components/Theme/useDarkMode";
import Blog from "./Containers/Blog";
import BlogPost from "./Containers/BlogPost";

function App() {

  const urlParams = new URLSearchParams(window.location.search);
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (urlParams.get('code')) {
    return <GithubCallback />
  }

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <ApolloProvider client={client}>
            <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route exact path='/homepage' component={HomePage} />
              <Route exact path='/article' component={ArticleDetail} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/blog/:title/:issueNumber" component={BlogPost} />
            </Switch>
          </ApolloProvider>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
