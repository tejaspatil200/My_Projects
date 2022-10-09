const express = require('express')
const router = express.Router()
const db = require('../db')
const utils = require('../utils')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

router.get('/', (request, response) => {
  const query = `select * from artist`
  db.query(query, (error, artists) => {
    response.send(utils.createResult(error, artists))
  })
})

router.get('/songs/:id', (request, response) => {
  const { id } = request.params

  // select all songs of an artist
  const query = `select 
    song.id, 
    song.title,
    song.duration,
    song.songFile,
    artist.firstName as artistFirstName, 
    artist.lastName as artistLastName,
    artist.thumbnail as artistThumbnail,
    album.thumbnail as thumbnail
    from artist, song, album
    where song.artistId = artist.id
          and song.albumId = album.id
          and artist.id = ${id}`
  db.query(query, (error, artists) => {
    response.send(utils.createResult(error, artists))
  })
})

router.post('/', upload.single('thumbnail'), (request, response) => {
  const { firstName, lastName } = request.body

  // get the uploaded file name
  const filename = request.file.filename

  const query = `insert into artist (firstName, lastName, thumbnail) values ('${firstName}', '${lastName}', '${filename}')`
  db.query(query, (error, artists) => {
    response.send(utils.createResult(error, artists))
  })
})

module.exports = router
