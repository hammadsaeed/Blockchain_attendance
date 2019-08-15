import * as React from 'react';
import { Component } from 'react';
import ReactDataSheet from 'react-datasheet';
import { db } from '../../firebase';
//import "react-datasheet/lib/react-datasheet.css";
import { Card } from "../Card/Card.jsx";
import {Grid,Row,Col,Image,Jumbotron,Button} from 'react-bootstrap';
import {Helmet} from 'react-helmet';
import Select from 'react-select'
import _ from 'lodash'
//var QRCode = require('qrcode.react');
import QRCode from 'qrcode.react';
//import QrReader from 'react-qr-scanner'


export default class Qrgenerator extends Component {
    constructor(props){
       super(props)
       this.state = {
         delay: 100,
         result: 'No result',
       }
       this.handleScan = this.handleScan.bind(this)
     }

componentWillMount(){
    var min;
//    min: new Date()
    min = Date()
    console.log(min)
    var modulename ="Powernetworks"
    db.updatingQrcode(min,modulename)

}


     handleScan(data){
       this.setState({
         result: data,
       })
     }
     handleError(err){
       console.error(err)
     }
     render(){
       const previewStyle = {
         height: 240,
         width: 320,
       }

       return(
           <div className="wrapperNav">
           <div className="wrapper">
             <div className="form-wrapper">
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
                 <Helmet>
                       <style>{'body { background-color:  #258ea6; }'}</style>
                   </Helmet>

                 <QRCode value="http://facebook.github.io/react/"   size="430"  level= 'L' includeMargin= 'false'/>

                 </div>
         </div>
         </div>

    )

  }
}
