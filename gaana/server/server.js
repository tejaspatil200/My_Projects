const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors('*'))
app.use(bodyParser.json())

// routers
const routerUser = require('./routes/user')
const routerAlbum = require('./routes/album')
const routerArtist = require('./routes/artist')
const routerSong = require('./routes/song')

// add the routers
app.use('/user', routerUser)
app.use('/album', routerAlbum)
app.use('/artist', routerArtist)
app.use('/song', routerSong)

// static routing
// any file in uploads directory does not require any route
// express will simply return any file from uploads directory
app.use(express.static('uploads'))

app.listen(4000, '0.0.0.0', () => {
  console.log('server started on port 4000')
})
