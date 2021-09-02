import React, { useContext, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'wouter';

import { Context } from './context/Context';
import { Logo } from './components/Logo';
import { Navbar } from './components/Navbar';
import Detail from './pages/Detail';
import Home from './pages/Home';
import NotUser from './pages/NotUser';
import Seo from './components/Seo';
import User from './pages/User';

import { GlobalStyle } from './styles/GlobalStyles';

// Cargando los favoritos en caso de entrar en la url
// al utilizar carga perezosa, es necesario utilizar el Suspense
// el import dinámico no funciona con importaciones nombradas,
// tiene que ser el export default
const Favs = lazy(() => import('./pages/Favs'));

export default function App() {
  const { isAuth } = useContext(Context);

  return (
    // fallback es lo que muestra mientras se carga el componente
    <Suspense fallback={<div />}>
      <Seo
        title="React avanzado - App de fotos"
        description="App de fotos para tu mascota"
      />

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
        <Route path="/login" component={NotUser} />

        {/* Protegiendo las rutas si el usuario no está registrado */}
        {isAuth ? (
          <>
            <Route path="/favs" component={Favs} />
            <Route path="/user" component={User} />
          </>
        ) : (
          <Redirect to="/login" />
        )}
      </Switch>

      <Navbar />
    </Suspense>
  );
}
