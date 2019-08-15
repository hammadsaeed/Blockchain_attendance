import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { compose } from 'recompose';
import {Navbar,Nav,NavItem,Image} from 'react-bootstrap';
import './Navbar.css'
import SignOutButton from '../SignOut';
import Sidebar from "../Sidebar"
import * as routes from '../../constants/routes';

const Navigation = ({ sessionStore }) =>
  <div>
    { sessionStore.authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </div>

const NavigationAuth = () =>
<Navbar default collapseOnSelect>
                <Navbar.Header>
                   <Navbar.Brand>
                        <Link to="/home"> <Image src="assets/LOGO_2.png" className="profile-pic"/> </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                    <NavItem eventKey={2} componentClass={Link} href="/" to={routes.HOME}>
                    Home
                   </NavItem>
                   <NavItem eventKey={3} componentClass={Link} href="/" to={routes.ACCOUNT}>
                   Account
                  </NavItem>
                  <NavItem eventKey={1} componentClass={Link} href="/" to={routes.LANDING}>
                  About
                  </NavItem>
                  <NavItem>
                  <SignOutButton />
                  </NavItem>

                    </Nav>
                </Navbar.Collapse>
                </Navbar>

const NavigationNonAuth = () =>
  <Navbar default collapseOnSelect>
        		  <Navbar.Header>
        			 <Navbar.Brand>
        				  <Link to="/signin"> <Image src="assets/LOGO_2.png" className="profile-pic"/> </Link>
        			  </Navbar.Brand>
        			  <Navbar.Toggle/>
        		  </Navbar.Header>
        		  <Navbar.Collapse>
        			  <Nav pullRight>

                      <NavItem eventKey={2} componentClass={Link} href="/" to={routes.SIGN_IN}>
                      Sign In
                     </NavItem>
                     <NavItem eventKey={3} componentClass={Link} href="/" to={routes.SIGN_UP}>
                     Sign Up
                    </NavItem>
                    <NavItem eventKey={1} componentClass={Link} href="/" to={routes.LANDING}>
                    About
                    </NavItem>
        			  </Nav>
        		  </Navbar.Collapse>
                  </Navbar>

export default compose(
  inject('sessionStore'),
  observer
)(Navigation);
