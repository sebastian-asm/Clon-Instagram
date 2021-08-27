import React from 'react';
import { Route, Switch } from 'wouter';

import { Logo } from './components/Logo';
import { Navbar } from './components/Navbar';
import Context from './context/Context';
import Detail from './pages/Detail';
import Favs from './pages/Favs';
import Home from './pages/Home';
import NotUser from './pages/NotUser';
import User from './pages/User';

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

      {/* Protegiendo las rutas si el usuario no está registrado */}
      <Context.Consumer>
        {({ isAuth }) =>
          isAuth ? (
            <Switch>
              <Route path="/favs" component={Favs} />
              <Route path="/user" component={User} />
            </Switch>
          ) : (
            <Switch>
              <Route path="/favs" component={NotUser} />
              <Route path="/user" component={NotUser} />
            </Switch>
          )
        }
      </Context.Consumer>

      <Navbar />
    </>
  );
}
