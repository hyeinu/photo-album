import ServerActions from './actions/ServerActions'
import axios from 'axios'

const API = {
  getAlbums(){
    axios.get('/api/albums')
      .then(res => res.data)
      .then(ServerActions.getAll)
      .catch(console.error)
  },
  getAlbum(id){
    axios.get(`/api/albums/${id}`)
      .then(res => res.data)
      .then(ServerActions.getAll)
      .catch(console.error)
  },
  getImage(id){
    axios.get(`api/image/${id}`)
    .then(res => res.data)
    .then(ServerActions.getImage)
    .catch(console.error)
  }
}
