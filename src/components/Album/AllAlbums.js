import React, { Component } from 'react';
import { Component } from 'react';

import AlbumStore from '../../stores/AlbumStore'
import AddAlbum from './AddAlbum'

export default class AllAlbums extends Component {
  render() {

    return (
      <div>
      <AddAlbum />
      <table>
        <thead>
          <tr>
            <td className="col-xs-3">
            <h1>Name</h1>
            </td>
          </tr>
        </thead>
      </table>
      </div>
    )
  }
}
