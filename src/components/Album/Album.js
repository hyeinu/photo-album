import React, { Component } from 'react';
import { Link } from 'react-router';

import UserActions from '../../actions/UserActions'
import AlbumStore from '../../stores/AlbumStore'


export default class AlbumRow extends Component {
  constructor(){
    super()
    this.state = {
      album: null
    }
    this._onChange = this._onChange.bind(this)
  }
  componentDidMount(){
    AlbumStore.startListening(this._onChange)
    UserActions.getAlbum(this.props.params.id)
  }
  componentWillUnmount(){
    AlbumStore.stopListening(this._onChange)
  }
  _onChange(){
  this.setState({album: AlbumStore.getAlbum()})
  }
  render() {
    let albumView
    let { album } = this.state
    console.log('album:', album)
    if(!album){
      albumView = <h1>Loading...</h1>
    } else {
      if(!album.images){
        albumView = (
          <button className="btn btn-primary">Add Image</button>
        )
      } else{
        albumView = album.images.map(image =>{
          return (
            <div className="col-xs-4" key={image._id}>
            <Link to={`/image/${image._id}`}>
            <img src={image.pic_url} alt="" className="img-responsive img-rounded"/>
            </Link>
            </div>
          )
        })
      }
    }
  return (
    <div>
      {albumView}
    </div>
    )
  }
}
