import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from '../Navigation';
import Sidebar from '../Sidebar'
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import Import from '../Import_Students'
import AccountPage from '../Account';
import Qrscanner from '../Qrscanner';
import Qrgenerator from '../Qrgenerator';
import withAuthentication from '../Session/withAuthentication';
import * as routes from '../../constants/routes';
import  Profilepage from '../Profilepicture_page'
import './index.css';

const App = () =>
  <Router>
    <div className="app">
      <Navigation />
      <Route exact path={routes.LANDING} component={() => <LandingPage />} />
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
      <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
      <Route exact path={routes.HOME} component={() => <HomePage />} />
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
     < Route exact path={routes.IMPORT} component={() => <Import />} />
     < Route exact path={routes.Qrscanner} component={() => <Qrscanner />} />
     < Route exact path={routes.Qrgenerator} component={() => <Qrgenerator />} />
     < Route exact path={routes.Profilepage} component={() => <Profilepage />} />
    </div>
  </Router>

export default withAuthentication(App);
