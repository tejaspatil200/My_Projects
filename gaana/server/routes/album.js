const express = require('express')
const router = express.Router()
const db = require('../db')
const utils = require('../utils')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

router.get('/', (request, response) => {
  const query = `select album.*, artist.firstName as artistFirstName, artist.lastName as artistLastName, artist.thumbnail as artistThumbnail from album, artist where album.artistId = artist.id`
  db.query(query, (error, artists) => {
    response.send(utils.createResult(error, artists))
  })
})

router.get('/songs/:id', (request, response) => {
  const { id } = request.params
  // const query = `select album.*, artist.firstName as artistFirstName, artist.lastName as artistLastName from album, artist where album.artistId = artist.id and album.id = ${id}`
  const query = `select 
    song.id, 
    song.title,
    song.duration,
    song.songFile,
    artist.firstName as artistFirstName, 
    artist.lastName as artistLastName,
    artist.thumbnail as artistThumbnail,
    album.thumbnail as thumbnail
    from album, artist, song
    where song.albumId = album.id 
          and album.artistId = artist.id
          and song.albumId = ${id}`
  db.query(query, (error, artists) => {
    response.send(utils.createResult(error, artists))
  })
})

router.post('/', upload.single('thumbnail'), (request, response) => {
  const { title, artistId, duration } = request.body

  // get the uploaded file name
  const filename = request.file.filename

  const query = `insert into album (title, artistId, thumbnail, duration) values ('${title}', '${artistId}', '${filename}', '${duration}')`
  db.query(query, (error, artists) => {
    response.send(utils.createResult(error, artists))
  })
})

module.exports = router
