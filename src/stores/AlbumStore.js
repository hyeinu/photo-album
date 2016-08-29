import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _albums = [];

class AlbumStore extends EventEmitter{
  constructor(){
    super();

    AppDispatcher.register(action =>{
      switch(action.type){
        case 'RECIEVE_ALL_ALBUMS':
        break;
        case 'RECIEVE_ONE_ALBUM':
        break;
        case 'RECIEVE_IMAGE':
        break;
      }
    })
  }
  startListening(cb){
    this.on('Change', cb)
  }
  stopListening(cb){
    this.removeListener('Change', cb)
  }
  getAlbums(){
    return _albums
  }
}

export default new AlbumStore()
