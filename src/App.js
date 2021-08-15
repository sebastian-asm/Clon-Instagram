import React from 'react';
import { Route, Switch } from 'wouter';

import { Logo } from './components/Logo';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import Detail from './pages/Detail';

import { GlobalStyle } from './styles/GlobalStyles';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Logo />

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/pet/:categoryId">
          {(params) => <Home categoryId={params.categoryId} />}
        </Route>
        <Route path="/detail/:detailId">
          {(params) => <Detail detailId={params.detailId} />}
        </Route>
      </Switch>

      <Navbar />
    </>
  );
}
