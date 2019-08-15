import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {FormGroup,FormControl,ControlLabel,Navbar,Nav,NavItem,Jumbotron, Grid,Row,Col,Image,Button} from 'react-bootstrap';
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { auth ,db} from '../../firebase';
import "./Signin.css";
import * as routes from '../../constants/routes';
import {Helmet} from 'react-helmet';
import GridLayout from 'react-grid-layout';
import Checkbox_login from '../Checkbox_login'

// IDEA:  hsb.s = max != 0 ? 255 * delta / max : 0;

const SignInPage = ({ history }) =>
  <div>
    <SignInForm history={history} />
  </div>


const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});


const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
}

  onSubmit = (event) => {
    const {
      email,
      password,
      CheckBoxx,
    } = this.state;


    const {
      history,
    } = this.props;

    db.check_Teacher(email).then(function(snapshot) {
      var currentval = (snapshot.val());
      // IDEA: hsb.s = max != 0 ? 255 * delta / max : 0;
      var output =  currentval.email.length != 0 ? console.log("this is a teacher") :console.log("this is a student");
      })
      .catch(error => {
        console.log("this is a student");
      });


    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }




  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
    <div className="wrapperNav">
		 <Helmet>
                <style>{'body { background-color:  #258ea6; }'}</style>
        </Helmet>
		<div className="wrapper">
		  <div className="form-wrapper">
          <h1>Log In</h1>
      <form onSubmit={this.onSubmit}>
      <div className="email">
        <p htmlFor="firstName">Email</p>
        <input
          value={email}
          onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        </div>
        <div className="password">
        <p htmlFor="password">Password</p>
        <input
          value={password}
          onChange={event => this.setState(updateByPropertyName('password', event.target.value))}
          type="password"
          placeholder="Password"
        />
        </div>
        <div className="createAccount">
			<button disabled={isInvalid} type="submit">Login</button>
		 </div>
         { error && <p>{error.message}</p> }

       </form>

        <div className="div-ending">
        <PasswordForgetLink />
        <SignUpLink />
        </div>


      </div>
            </div>
          </div>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,

};
