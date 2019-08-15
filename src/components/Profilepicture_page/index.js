import * as React from 'react';
import { Component } from 'react';
import ReactDataSheet from 'react-datasheet';
import "react-datasheet/lib/react-datasheet.css";
import {Grid,Row,Col,Image,Jumbotron,Button} from 'react-bootstrap';
import {Helmet} from 'react-helmet';
import Select from 'react-select'
import _ from 'lodash'
import Profilepicture from "../Profilepicture/index.js"


export default class Profilepage extends Component {

     render(){


       return(
           <div className="wrapperNav">
       		 <Helmet>
                       <style>{'body { background-color:  #258ea6; }'}</style>
               </Helmet>
       		<div className="wrapper">
       		  <div className="form-wrapper">
             <form >
             <Profilepicture/>
              </form>
              </div>
             </div>
             </div>
    )

  }
}
