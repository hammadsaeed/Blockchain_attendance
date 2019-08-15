import * as React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom'
import Avatar from 'react-avatar-edit'
import {Grid,Row,Col,Image,Jumbotron,Button} from 'react-bootstrap';
import Popup from 'react-popup';

export default class Profilepicture extends Component {

  constructor(props) {
    super(props)
    var src = "assets/useravatar_default.svg"
    this.state = {
      preview: null,
      src
    }
    this.onCrop = this.onCrop.bind(this)
    this.onClose = this.onClose.bind(this)
    this.onBeforeFileLoad = this.onBeforeFileLoad.bind(this)
  }

  onClose() {
    this.setState({preview: null})
  }

  onCrop(preview) {
    this.setState({preview})
  }

  onBeforeFileLoad(elem) {
    if(elem.target.files[0].size > 71680){
      alert("File is too big!");
      elem.target.value = "";
      //<img src={this.state.preview} alt="Preview" />
    };
  }

  render () {
    return (
      <div>

      <Col md={11}>
      <Avatar
        width={200}
        height={200}
        onCrop={this.onCrop}
        onClose={this.onClose}
        onBeforeFileLoad={this.onBeforeFileLoad}
        src={this.state.src}
      />
         </Col>
         <Row>
         <Col md={1}>
         <img width={200}
         height={200} src={this.state.src} alt="Preview" />
         </Col>
         </Row>
         <div className="createAccount">
 			<button  type="Upload">Login</button>
 		 </div>


      </div>
    )
  }
}
