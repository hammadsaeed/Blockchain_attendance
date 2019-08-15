import React, { Component } from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';
import "./Signup.css"
import { auth, db } from '../../firebase';
import * as routes from '../../constants/routes';
import {Helmet} from 'react-helmet';

var valueofcheckbox=0;

const SignUpPage = ({ history }) =>
  <div>
    <SignUpForm history={history} />
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const items = [
  'One',
];

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpForm extends Component {

  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE,
    };
  }
  componentWillMount = () => {
      this.selectedCheckboxes = new Set();
    }
    toggleCheckbox = label => {
      if (this.selectedCheckboxes.has(label)) {
          valueofcheckbox=0;
        this.selectedCheckboxes.delete(label);
      } else {
        this.selectedCheckboxes.add(label);
      }
    }
  onSubmit = (event) => {
    const {
      username,
      email,
      passwordOne,
      componentWillMount,
    } = this.state;
    const {
      history,
    } = this.props;

    for (const checkbox of this.selectedCheckboxes) {
      valueofcheckbox =1;
      console.log(valueofcheckbox, 'is selected.');
  }
  if(valueofcheckbox==0){
          auth.doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
              db.doCreateUser(authUser.user.uid, username, email)
                .then(() => {
                  this.setState(() => ({ ...INITIAL_STATE }));
                  history.push(routes.HOME);
                })
                .catch(error => {
                  this.setState(updateByPropertyName('error', error));
                });
            })
            .catch(error => {
              this.setState(updateByPropertyName('error', error));
            });
            db.doCreateUser_2(username, email);
    }else {
        auth.doCreateUserWithEmailAndPassword(email, passwordOne)
          .then(authUser => {
            // Create a user in your own accessible Firebase Database too
            db.doCreateUser_Teacher(authUser.user.uid, username, email)
              .then(() => {
                this.setState(() => ({ ...INITIAL_STATE }));
                history.push(routes.HOME);
                db.addATeacher(email.substring(0,email.indexOf('@')))

              })
              .catch(error => {
                this.setState(updateByPropertyName('error', error));
              });

          })
          .catch(error => {
            this.setState(updateByPropertyName('error', error));
          });
    }

    event.preventDefault();
}

  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }


 createCheckbox = label => (
   <input
           type="checkbox"
           label={label}
           handleCheckboxChange={this.toggleCheckbox}
           key={label}
       />
 )
 createCheckboxes = () => (
  items.map(this.createCheckbox)
)

  render() {

    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      username === '' ||
      email === '';

    return (
    <div className="wrapperNav">
    		<Helmet>
                <style>{'body { background-color:  #258ea6; }'}</style>
            </Helmet>
    		<div className="wrapper">
    		  <div className="form-wrapper">
              <h1>Create Account</h1>
      <form onSubmit={this.onSubmit}>
      <div className="firstName">
         <label htmlFor="firstName">ID</label>
        <input
          placeholder="First Name"
          value={username}
          onChange={event => this.setState(updateByPropertyName('username', event.target.value))}
          type="text"
          placeholder="University ID"
        />
        </div>
         <div className="email">
                 <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        </div>
        <div className="password">
                  <label htmlFor="password">Password</label>
        <input
          value={passwordOne}
          onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
          type="password"
          placeholder="Password"
        />
        </div>
        <div className="password">
        <label htmlFor="password">Password</label>
        <input
          value={passwordTwo}
          onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirm Password"
        />
        </div>
        <input type="checkbox" label="one" onChange={this.toggleCheckbox} key="one"/> Create a Teachers account <br />
        <div className="createAccount">
            <button disabled={isInvalid} type="submit">Create Account</button>
            <Link to={routes.SIGN_IN}> <small>Already Have an Account?</small></Link>
        </div>
        { error && <p>{error.message}</p> }
      </form>
      </div>
      </div>
      </div>
    );
  }
}

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link color="black" to={routes.SIGN_UP}>Sign Up</Link>
  </p>

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};
