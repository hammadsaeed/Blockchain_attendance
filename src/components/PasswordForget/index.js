import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import {Helmet} from 'react-helmet';
import "./PasswordForget.css"

const PasswordForgetPage = () =>
  <div>

    <PasswordForgetForm />
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    auth.doPasswordReset(email)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      error,
    } = this.state;

    const isInvalid = email === '';

    return (
    <div className="wrapperNav_forget">
    		<Helmet>
                    <style>{'body { background-color:  #258ea6; }'}</style>
            </Helmet>
    		<div className="wrapper_forget">
    		  <div className="form-wrapper_forget">
      <form onSubmit={this.onSubmit}>
      <h1>PasswordForget</h1>
      <div className="email">
        <label htmlFor="firstName">Email</label>
        <input
          value={this.state.email}
          onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        </div>
        <div className="createAccount">
			<button disabled={isInvalid} type="submit">Reset My Password</button>
		 </div>

        { error && <p>{error.message}</p> }
      </form>
      </div>
      </div>
      </div>
    );
  }
}

const PasswordForgetLink = () =>
    <p><Link to={routes.PASSWORD_FORGET}>Forgot Password?</Link></p>

export default PasswordForgetPage;

export {
  PasswordForgetForm,
  PasswordForgetLink,
};
