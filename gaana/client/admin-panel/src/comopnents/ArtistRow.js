import { url } from '../common/constants'

const ArtistRow = ({ artist }) => {
  
  return (
    <tr>
      <td>{artist.id}</td>
      <td>
        <img
          src={url + '/' + artist.thumbnail}
          alt=""
          className="thumbnail-sm"
        />
      </td>
      
      <td>
        {artist.firstName} {artist.lastName}
      </td>
      <td></td>
    </tr>
  )
}

export default ArtistRow
