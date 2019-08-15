import * as React from 'react';
import { Component } from 'react';
import ReactDataSheet from 'react-datasheet';
import "react-datasheet/lib/react-datasheet.css";
import {Grid,Row,Col,Image,Jumbotron,Button} from 'react-bootstrap';
import {Helmet} from 'react-helmet';
import Select from 'react-select'
import _ from 'lodash'
import QrReader from 'react-qr-scanner'


export default class Qrscanner extends Component {
    constructor(props){
       super(props)
       this.state = {
         delay: 100,
         result: 'No result',
       }

       this.handleScan = this.handleScan.bind(this)
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
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
                 <Helmet>
                       <style>{'body { background-color:  #258ea6; }'}</style>
                   </Helmet>
                 <div className="wrapper">
           <QrReader
             delay={this.state.delay}
             style={previewStyle}
             onError={this.handleError}
             onScan={this.handleScan}
             />
           <p>{this.state.result}</p>
         </div>
         </div>

    )

  }
}
