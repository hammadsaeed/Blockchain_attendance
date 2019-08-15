import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import { compose } from 'recompose';
import withAuthorization from '../Session/withAuthorization';
import {Grid,Row,Col,Image,Jumbotron,ProgressBar} from 'react-bootstrap';
import { db } from '../../firebase';
import GridLayout from 'react-grid-layout';
import Sidebar_main from '../Sidebar/index'
import Sidebar from '../Sidebar/index_2'
import Chart from '../Chart/index.js'
import { Card } from "../Card/Card.jsx";

var bla;
var refreshCounter;
var numberOfModulesArray=[]
var studentName;
var userId;
var layout = [
        {i: 'a', x: 3, y: 0, w: 9, h: 24, static: true}
    ];

class TeacherHome extends Component {
    constructor(){
        super();
        this.state = {
        numberOfModulesArray: []
    }
    }
    componentWillMount(){

         const { sessionStore } = this.props;
          var currentEmail=sessionStore.authUser.email
          var currentval2
          studentName=sessionStore.authUser.email
          studentName=studentName.substring(0,studentName.indexOf('@'));
          studentName = "Welcome, "+studentName.charAt(0).toUpperCase() + studentName.slice(1)
          db.getStudentId(currentEmail).then(function(snapshot2) {
                  currentval2 = (snapshot2.val());
                  userId = "Teacher ID : " + currentval2.username;
              db.getModules(currentval2.username)
              .then(function(snapshot3) {
                      var currentval3 = (snapshot3.val());
                      console.log(currentval3)
                            numberOfModulesArray= Object.keys(currentval3)
              })
              .catch(error => {
              console.log("no data found")
              numberOfModulesArray=['You arent registered with any classes'];
          });
      })
      .catch(error => {
      console.log("This is a teachers")
      });

}

  render() {
      if (numberOfModulesArray != 0){
      let numberOfModules = this.state.numberOfModulesArray
  }
  else {
      numberOfModulesArray =['You arent registered with any classes']
      let numberOfModules = this.state.numberOfModulesArray
  }
      console.log(numberOfModulesArray)
      console.log(bla)
      console.log(this.state.itemss)
      console.log(userId)

    return (
        <div>
        <Sidebar/>
        <Grid>
        <Row>
          <Col md={8}>
          <Jumbotron>
            <Card
              statsIcon="fa fa-history"
              id="chartHours"
              title={studentName}
              category="24 Hours performance"
              stats="Updated 3 minutes ago"
              />
             </Jumbotron>

          </Col>
          <Col md={4}>
          <Jumbotron>
            <div className="createAccount">
                <button  type="submit">
                <Link color="black" to={routes.Qrgenerator}>Create a Qr code</Link>
                </button>

    			<button  type="submit">
                <Link color="black" to={routes.IMPORT}>Import Your Class</Link>
                </button>
    		 </div>
             </Jumbotron>
          </Col>
          </Row>
          </Grid>
        </div>
    );
  }
}
const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  inject('sessionStore'),
  inject('userStore'),
  observer
)(TeacherHome);
