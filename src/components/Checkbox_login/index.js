import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';

const Checkbox_login = () =>
      <div>
       <input type="checkbox" />
       <label class="form-check-label" for="exampleCheck1">Login in as Lecturer</label>
     </div>


export default Checkbox_login;
