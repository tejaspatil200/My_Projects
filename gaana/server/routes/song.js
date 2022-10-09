const express = require('express')
const router = express.Router()
const db = require('../db')
const utils = require('../utils')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

router.get('/search', (request, response) => {
  const { q } = request.query

  const query = `select 
    song.id, 
    song.title,
    song.duration,  
    song.songFile,
    artist.firstName as artistFirstName, 
    artist.lastName as artistLastName,
    album.title as albumTitle
    from album, artist, song
    where song.albumId = album.id 
      and album.artistId = artist.id 
      and song.title like '%${q}%'`

  db.query(query, (error, artists) => {
    response.send(utils.createResult(error, artists))
  })
})

router.get('/', (request, response) => {
  const query = `select 
    song.id, 
    song.title,
    song.duration,  
    song.songFile,
    artist.firstName as artistFirstName, 
    artist.lastName as artistLastName,
    album.title as albumTitle
    from album, artist, song
    where song.albumId = album.id and album.artistId = artist.id`
  db.query(query, (error, artists) => {
    response.send(utils.createResult(error, artists))
  })
})

router.post('/', upload.single('songFile'), (request, response) => {
  const { title, artistId, albumId, duration } = request.body

  // get the uploaded file name
  const filename = request.file.filename

  const query = `insert into song (title, artistId, albumId, songFile, duration) values ('${title}', '${artistId}', '${albumId}', '${filename}', '${duration}')`
  db.query(query, (error, songs) => {
    response.send(utils.createResult(error, songs))
  })
})

module.exports = router
