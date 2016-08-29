import React, { Component } from 'react';
import { Link } from 'react-router';

import AlbumStore from '../../stores/AlbumStore'
import UserActions from '../../actions/UserActions'
import AddAlbum from './AddAlbum'
import AlbumRow from './AlbumRow'

export default class AllAlbums extends Component {
  constructor(){
    super()
    this.state = {
      albums: UserActions.getAlbums()
    }
    this._onChange = this._onChange.bind(this)
  }
  componentDidMount(){
    AlbumStore.startListening(this._onChange)
  }
  componentWillUnmount(){
    AlbumStore.stopListening(this._onChange)
  }
  _onChange(){
  this.setState({albums: AlbumStore.getAlbums()})
  }
  render() {
    let albumView
    if(!this.state.albums){
      albumView = <h1>Loading...</h1>
    } else {
      albumView = this.state.albums.map(album =>{
        return (
          <div>
            <Link to={`/album/${album._id}`}>
            <h1>{album.name}</h1>
            </Link>
            <button onClick={this._edit}>Edit</button>
            <button onClick={this._delete}>Delete</button>
          </div>
        )
      })

    }
    return (
      <div>
      <AddAlbum />
      {albumView}
      </div>
    )
  }
}
