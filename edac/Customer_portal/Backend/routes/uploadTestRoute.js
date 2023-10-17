
const express = require("express");
const router = express.Router();
const db = require('../db')

const multer = require('multer')
const upload = multer({ dest: 'uploads/' })



router.post('/mobile', upload.single('thumbnail'), (request, response) => {
    
    const { mobile_name,ram,brand,battery,primary_camera,screen_resolution,
       price,countinstock,description } = request.body
  
    // get the uploaded file name
    const filename = request.file.filename
  
    const query = `insert into mobile ( mobile_name,ram,brand,battery,
      primary_camera,screen_resolution, price,countinstock,description, thumbnail) 
      values ('${mobile_name}', '${ram}','${brand}','${battery}','${primary_camera}',
      '${screen_resolution}','${price}','${countinstock}','${description}', '${filename}')`
    
    db.query(query, (error, docs) => {
      response.send("mobile uploaded successfully")
    })

  })



  router.post('/laptop', upload.single('thumbnail'), (request, response) => {
    
    const { laptop_name,ram,brand,operating_system,processor,screen_size,
      price,countinstock,description } = request.body
  
    // get the uploaded file name
    const filename = request.file.filename
  
    const query = `insert into laptop (laptop_name,ram,brand,operating_system,
      processor,screen_size,price,countinstock,description,
       thumbnail) values ('${laptop_name}', '${ram}','${brand}','${operating_system}','${processor}',
       '${screen_size}','${price}','${countinstock}','${description}', '${filename}')`



    db.query(query, (error, docs) => {
      response.send("laptop uploaded successfully")
    })

  })




  
  router.post('/earphone', upload.single('thumbnail'), (request, response) => {
    
    const {earphone_name,brand,connectivity,
      price,countinstock,description } = request.body
  
    // get the uploaded file name
    const filename = request.file.filename
  
    const query = `insert into earphone (earphone_name,brand,connectivity,price,countinstock,description ,
       thumbnail) values ('${earphone_name}','${brand}','${connectivity}',
       '${price}','${countinstock}','${description}', '${filename}')`



    db.query(query, (error, docs) => {
      response.send("earphone uploaded successfully")
    })

  })



  
  router.post('/tv', upload.single('thumbnail'), (request, response) => {
    
    const {tv_name,brand,screen_size,operating_system,resolution,screen_type,
      price,countinstock,description } = request.body
  
    // get the uploaded file name
    const filename = request.file.filename
  
    const query = `insert into tv(tv_name,brand,screen_size,operating_system,
      resolution,screen_type,price,countinstock,description ,
       thumbnail) values ('${tv_name}', '${brand}', '${screen_size}','${operating_system}','${resolution}',
       '${screen_type}','${price}','${countinstock}','${description}', '${filename}')`



    db.query(query, (error, docs) => {
      response.send("tv uploaded successfully")
    })

  })

  module.exports=router