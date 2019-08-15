import * as React from 'react';
import { Component } from 'react';
import {handleFiles} from './csv_index.js';
import ReactDataSheet from 'react-datasheet';
import "react-datasheet/lib/react-datasheet.css";
import {Grid,Row,Col,Image,Jumbotron,Button} from 'react-bootstrap';
import {Helmet} from 'react-helmet';
import Select from 'react-select'
import _ from 'lodash'
import "./react-datasheet.css"


export default class Import extends Component {
    constructor(props) {
       super(props);
       this.state = {value: ''};
       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
     }

     handleChange(event) {
       handleFiles(event.target.files)
       this.setState({value: event.target.value});
     }
     
     handleSubmit(event) {
       alert('A name was submitted: ' + this.state.value);
    //   console.log(this.state.value);
       event.preventDefault();
     }
  render () {
    return (
        <div className="wrapperNav">
 <meta http-equiv="content-type" content="text/html; charset=utf-8" />
              <Helmet>
                    <style>{'body { background-color:  #258ea6; }'}</style>
                </Helmet>
              <div className="wrapper">
                <div className="form-wrapper">
                <h2> Add Student to the class</h2>

                      <legend>
                      </legend>

                          <label for="csvFileInput"> <strong>CSV File:</strong>
                          </label>
                          <input type="file" value={this.state.value} onChange={this.handleChange} />



      </div>
      </div>
      </div>
    )

  }
}
