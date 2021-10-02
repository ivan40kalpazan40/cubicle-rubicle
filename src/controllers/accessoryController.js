const express = require('express');
const cubeService = require('../services/cubeService');
const router = express.Router();

const createAccessoryPage = (req, res) => {
  console.log('GET REQUEST FROM ACCESSORY');
  res.render('createAccessory');
};

const createAccessory = (req, res) => {
  const { name, description, imageUrl } = req.body;
  cubeService
    .newAccessory(name, description, imageUrl)
    .then((data) => {
      console.log(data);
      res.redirect('/');
    })
    .catch((err) => {
      console.error(err);
      res.render('404', { error: err.name, msg: err._message });
    });
};

const renderAttach = (req, res) => {
  const id = req.params.id;
  cubeService
    .getOne(id)
    .then((cube) => {
      cubeService
        .availableForCube(cube._id)
        .then((accessories) => {
          res.render('attachAccessory', { cube, accessories });
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

router.get('/create', createAccessoryPage);
router.get('/attach/:id', renderAttach);
router.post('/create', createAccessory);

module.exports = router;
