const express = require('express');
const router = express.Router();
const Image = require('../models/image')
const Album = require('../models/album')

router.route('/')
  .get((req, res) =>{
    Image.find({}, (err, images) =>{
      res.status(err ? 400: 200).send(err || images);
    })
  })
  // .post((req, res) =>{
  //   Image.create(req.body, (err, image) =>{
  //     res.status(err ? 400: 200).send(err || image);
  //   })
  // })

router.delete('/:id', (req, res) =>{
  Image.findByIdAndRemove(req.params.id, err =>{
    if(err) return res.status(400).send(err)
    Image.find({}, (err, images) =>{
      res.status(err ? 400: 200).send(err || images);
    })
  })
})

router.post('/:albumId/addPic', (req, res) => {
  Image.create(req.body, (err, image) =>{
    if(err) return res.status(400).send(err)
    Album.findById(req.params.albumId, (err, album) =>{
      if(err || !album){
        return res.status(400).send(err || 'Album not Found');
      }
      album.images.push(image._id)
      album.save()
      res.send();
    });
  });
})

module.exports = router;
