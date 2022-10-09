import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { url } from '../common/constants'
import './AddSongToAlbum.css'

const AddSongsToAlbum = () => {
  const [title, setTitle] = useState('')
  const [duration, setDuration] = useState('')
  const [songFile, setSongFile] = useState(undefined)

  // used to go to another component
  const history = useHistory()

  // used to get the data passed by previous component
  const location = useLocation()

  // selected album in the previous page
  const album = location.state.album

  const addAlbumToDB = () => {
    if (title.length === 0) {
      alert('enter title')
    } else if (duration.length === 0) {
      alert('enter duration')
    } else if (!songFile) {
      alert('select song File')
    } else {
      const data = new FormData()
      data.append('title', title)
      data.append('duration', duration)
      data.append('artistId', album.artistId)
      data.append('songFile', songFile)
      data.append('albumId', album.id)

      // send the song info to the API
      axios.post(url + '/song', data).then((response) => {
        const result = response.data
        if (result.status === 'success') {
          alert('successfully added new track to the album')
          history.push('/albums')
        } else {
          console.log(result.error)
          alert('error while adding the song to the album')
        }
      })
    }
  }

  return (
    <div>
      <h1 className="page-title">{album.title}</h1>
      <div className="row">
        <div className="col">
          <img
            src={url + '/' + album.thumbnail}
            alt=""
            className="thumbnail-large"
          />
          <img
            src={url + '/' + album.artistThumbnail}
            alt=""
            className="thumbnail-large"
          />
        </div>
        <div className="col-10">
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
            <label htmlFor="">Track File</label>
            <input
              onChange={(e) => {
                setSongFile(e.target.files[0])
              }}
              accept="audio/*"
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
      </div>
    </div>
  )
}

export default AddSongsToAlbum
