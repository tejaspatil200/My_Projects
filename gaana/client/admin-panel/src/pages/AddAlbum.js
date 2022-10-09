import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { url } from '../common/constants'

const AddAlbum = () => {
  const [title, setTitle] = useState('')
  const [duration, setDuration] = useState('')
  const [artist, setArtist] = useState(-1)
  const [artists, setArtists] = useState([])
  const [thumbnail, setThumbnail] = useState(undefined)
  const history = useHistory()

  useEffect(() => {
    getArtists()
  }, [])

  const getArtists = () => {
    axios.get(url + '/artist').then((response) => {
      const result = response.data
      if (result.status === 'success') {
        if (result.data.length > 0) {
          // select the first artist from the list
          // select the default artist
          setArtist(result.data[0].id)

          setArtists(result.data)
        }
      } else {
        alert('error while loading list of artists')
      }
    })
  }

  const addAlbumToDB = () => {
    if (title.length === 0) {
      alert('enter title')
    } else if (duration.length === 0) {
      alert('enter duration')
    } else if (artist === -1) {
      alert('select an artist')
    } else if (!thumbnail) {
      alert('select thumbnail')
    } else {
      const data = new FormData()
      data.append('title', title)
      data.append('duration', duration)
      data.append('artistId', artist)
      data.append('thumbnail', thumbnail)

      // send the album info to the API
      axios.post(url + '/album', data).then((response) => {
        const result = response.data
        if (result.status === 'success') {
          alert('successfully added new Album')
          history.push('/albums')
        } else {
          console.log(result.error)
          alert('error while loading list of albums, please try again..')
        }
      })
    }
  }

  return (
    <div>
      <h1 className="page-title">Add Album</h1>

      <div className="mb-3">
        <label htmlFor="">Title</label>
        <input
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="">Duration</label>
        <input
          onChange={(e) => {
            setDuration(e.target.value)
          }}
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="">Artist</label>
        <select
          onChange={(e) => {
            setArtist(e.target.value)
          }}
          className="form-control">
          {artists.map((artist) => {
            return (
              <option value={artist.id}>
                {artist.firstName} {artist.lastName}
              </option>
            )
          })}
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="">Thumbail</label>
        <input
          onChange={(e) => {
            setThumbnail(e.target.files[0])
          }}
          accept="image/*"
          type="file"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <button onClick={addAlbumToDB} className="btn btn-success">
          Add
        </button>

        <Link to="/albums">
          <a className="btn btn-warning">Back</a>
        </Link>
      </div>
    </div>
  )
}

export default AddAlbum
