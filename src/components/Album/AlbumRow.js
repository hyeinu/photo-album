import React, { Component } from 'react';

import UserActions from '../../actions/UserActions'


export default class AlbumRow extends Component {
  constructor(){
    super()
  }

  render() {
    let { name, images, _id } = this.props.album
    let img_src
    if(!images.length){
      img_src = (
        <Link to={`/album/${_id}`}>
        <img src="http://simpleicon.com/wp-content/uploads/camera.png" className="img-responsive img-rounded"/>
        </Link>
      )
    } else {
      img_src = (
        <Link to={`/album/${_id}`}>
        <img src={images[0].pic_url} className="img-responsive img-rounded"/>
        </Link>
      )
    }
  return (
    <div className="col-xs-4">
      <h1>{name}</h1>
      {img_src}
      <div className="row">
        <div className="col-md-6">
          <button className="btn btn-warning form-control">Edit</button>
        </div>
        <div className="col-md-6">
        <button className="btn btn-danger form-control">Delete</button>
        </div>
      </div>
    </div>
    )
  }
}
