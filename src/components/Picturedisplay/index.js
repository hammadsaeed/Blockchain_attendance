import * as React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom'
import Avatar from 'react-avatar-edit'
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';

export default class Picturedisplay extends Component {

  constructor(props) {
    super(props)
    const src = "assets/useravatar_default.svg"
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
     <Link to={routes.Profilepage}>
      <img src={this.state.src} alt="Preview" />
      </Link>

      </div>
    )
  }
}
