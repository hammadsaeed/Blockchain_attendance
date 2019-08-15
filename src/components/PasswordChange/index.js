import React, { Component } from 'react';

import { auth } from '../../firebase';
import {Helmet} from 'react-helmet';
import "./PasswordChange.css"
const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    auth.doPasswordUpdate(passwordOne)
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
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '';

    return (
    <div className="wrapperNav_account">
    		 <Helmet>
                    <style>{'body { background-color:  #258ea6; }'}</style>
            </Helmet>
    		<div className="wrapper_account">
    		  <div className="form-wrapper_account">
      <form onSubmit={this.onSubmit}>
      <h1> Change Password </h1>
      <div className="password">
        <input
          value={passwordOne}
          onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
          type="password"
          placeholder="New Password"
        />
        </div>

        <div className="password">
        <input
          value={passwordTwo}
          onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirm New Password"
        />
        </div>
         <div className="createAccount">
        <button disabled={isInvalid} type="submit">
         Change Password
        </button>
        </div>
        { error && <p>{error.message}</p> }
      </form>
      </div>
      </div>
      </div>
    );
  }
}

export default PasswordChangeForm;
