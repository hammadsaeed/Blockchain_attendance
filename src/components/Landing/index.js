import React, { Component } from 'react';
import{ Link } from 'react-router-dom';
import { Jumbotron,Grid,Row,Col,Button,Image} from 'react-bootstrap'
import'./Landing.css'
import { SignUpLink } from '../SignUp';
import {Helmet} from 'react-helmet';

const LandingPage = () =>
  <div>
    <h1>Landing</h1>
    <p>The Landing Page is open to everyone, even though the user isn't signed in.</p>
  </div>


export default class About extends Component {
  	render(){
  	return (
  		<div>
        <Helmet>
                 <style>{'body { background-color:  #258ea6; }'}</style>
         </Helmet>
  		<Grid>
        <Jumbotron>
        <Row>
        <h2> Welcome to Presènce</h2>
            <Col md={6}>

            <h3> Problem </h3>
            <h5> Traditional attendance system followed by an educational institution, where the lecturer calls out the name of every
            student and marks the attendance leads to considerable lecture time being wasted. This becomes more and more severe
            especially in the current scenario where number of students in a class is very large. Managing the attendance data of such a large group is also very difﬁcult.
            Another disadvantage of present system is the chance for the student to mark fake attendance. </h5>
            </Col>
            <Image src="assets/Landing_img2.jpg" className="profile-pic"/>
            <h3> Our Proposed Solution </h3>
            <h5> The focus of this project is to program and implement a wireless attendance system to achieve a more convenient way of marking attendance.
            At the same time ensuring that all of the user’s information is safe and secure. Using a decentralized backend system should allow for a secure backend
            system however not all the information can be stored in the decentralized system as it is expensive but mission-critical pieces of data can be stored forever on the blockchain.
            The proposed system should provide a complete system with different interface for students and teachers. The website will be build using ReactJS for a pleasant
            user interface (UI) experience as well a complete UI design for mobile usage, backend will be a decentralized system to store all the key information and another
            database to store all the other information related to the website.
            </h5>
          </Row>
        </Jumbotron>
          </Grid>
  		</div>

  		)
  	}
  }
