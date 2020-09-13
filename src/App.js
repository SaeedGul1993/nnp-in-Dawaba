import React, { lazy, Suspense } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

const LandingComponents = lazy(() => import('./LandingComponents/LandiingPage/landingpage'));
const SignInComponent = lazy(()=>import('./AuthenticationComponent/signIn'));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div className="main-loading-page">
          <CircularProgress />
        </div>}>
          <Switch>
            <Route path="/" exact component={LandingComponents} />
            <Route path="/signin" component={SignInComponent} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
