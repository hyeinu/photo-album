import React, { Component } from 'react';

import AlbumStore from '../../stores/AlbumStore'
import UserActions from '../../actions/UserActions'
import AddAlbum from './AddAlbum'

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
    console.log('this.state:', this.state)
    return (
      <div>
      <AddAlbum />
      </div>
    )
  }
}
