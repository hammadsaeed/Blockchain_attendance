import React from 'react';
import { inject, observer } from 'mobx-react';
import { compose } from 'recompose';
import "./Account.css"

import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import withAuthorization from '../Session/withAuthorization';

const AccountPage = ({ sessionStore }) =>
  <div>
    <h1>User: {sessionStore.authUser.email.substring(0,sessionStore.authUser.email.indexOf('@'))}</h1>

    <PasswordForgetForm />
    <PasswordChangeForm />
  </div>

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  inject('sessionStore'),
  observer
)(AccountPage);
