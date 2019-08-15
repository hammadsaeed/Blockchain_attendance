import React from 'react';
import "./Signout.css";
import { auth } from '../../firebase';

const SignOutButton = () =>
    <form class="form-inline">
    <button class="btn btn-outline-success my-2 my-sm-0" type="button" onClick={auth.doSignOut}>Sign Out</button>
  </form>


export default SignOutButton;
