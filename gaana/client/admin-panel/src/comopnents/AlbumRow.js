import { url } from '../common/constants'
import { useHistory } from 'react-router-dom'

const AlbumRow = ({ album }) => {
  
  const history = useHistory()

  return (
    <tr>
      <td>{album.id}</td>

      <td>
        <img
          src={url + '/' + album.thumbnail}
          alt=""
          className="thumbnail-sm"
        />
      </td>

      <td>{album.title}</td>

      <td>
        {album.artistFirstName} {album.artistLastName}
      </td>

      <td>{album.duration}</td>

      <td>
        <button
          onClick={() => {
            // /add-songs-to-album -> path of the component
            // {album: album}      -> data needed to be passed to the component
            history.push('/add-songs-to-album', { album: album })
          }}
          className="btn btn-success btn-sm">
          Add Track
        </button>
          </td>

    </tr>
  )
}

export default AlbumRow
