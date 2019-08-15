import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import { compose } from 'recompose';
import withAuthorization from '../Session/withAuthorization';
import {Grid,Row,Col,Image,Jumbotron,Button,ProgressBar} from 'react-bootstrap';
import { db } from '../../firebase';
import GridLayout from 'react-grid-layout';
import Sidebar_main from '../Sidebar/index'
import Sidebar from '../Sidebar/index_2'
import "./Home.css"
import { Card } from "../Card/Card.jsx";
import { StatsCard } from "../StatsCard/StatsCard.jsx";
import {Helmet} from 'react-helmet';
import Chart from '../Chart/index.js'
import StudentHome from '../Home_Student/index.js'
import TeacherHome from '../Home_Teacher/index.js'
import Loadingscreen from '../loading/index.js'
import ReactLoading from 'react-loading';


var bla=2;
var refreshCounter;
var numberOfModulesArray=[]
var studentName;
var userId;
// const Home = ({ bla }) =>
//   <div>
//     {   bla!=0
//         ? <HomeTeacher />
//         : <HomeStudent />
//     }
//   </div>


class HomePage extends Component {
    state ={
        loaded : false
    }
    constructor(){
        super();
        Loadingscreen.load(v=> this.setState({loaded:true}));

    }

    componentWillMount(){


         const { sessionStore } = this.props;
          var currentEmail=sessionStore.authUser.email

          studentName=sessionStore.authUser.email
          studentName=studentName.substring(0,studentName.indexOf('@'));
          studentName = studentName.charAt(0).toUpperCase() + studentName.slice(1)
          db.check_Teacher_Home_2(currentEmail.substring(0,currentEmail.indexOf('@'))).then(function(snapshot) {
              var currentval = (snapshot.val());
              var output =  currentval.email.length != 0 ? bla=1 :console.log("Please refresh the page");
              refreshCounter =0;
          })
        .catch(error => {
            bla=0
             refreshCounter =0;
            console.log("should be a student")

        });

}


  render() {
if (bla==0){
    Display = () =>
        <div>
        <StudentHome/>
        </div>
}else {
    Display = () =>
        <div>
        <TeacherHome/>
        </div>
}

    return (
<div>
        {this.state.loaded ? <Display/> :
                <Loader/>}
</div>
    //    <Display/>
    //      {   bla!=0
//              ? <TeacherHome />
    //          : <StudentHome />
    //      }



    //   <div>
    //   <Home/>
    // //  <Display/>
    //   </div>
    );
  }
}

var Display= () =>
<div>
</div>


const authCondition = (authUser) => !!authUser;

const Loader = ({ type, color }) => (
    <div>
    <Grid>
    <Row>
    <Col md={4}>` </Col> </Row>
    <Row >
    <Col xs= {6} md={4}> </Col>
    <Col xs= {6} md={8}><ReactLoading type="spin" color="#258ea6" height={'30%'} width={'50%'} /></Col>

        </Row>
        <Row>
        <Col xs={8} md={10}></Col>
        </Row>
        </Grid>
        </div>
);

export default compose(
  withAuthorization(authCondition),
  inject('sessionStore'),
  inject('userStore'),
  observer
)(HomePage);
