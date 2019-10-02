const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const building_controller = require('../../controllers/building.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/index', building_controller.building_index);
router.get('/location', building_controller.building_geolocation);
router.post('/create', building_controller.building_create);
router.get('/:id', building_controller.building_details);
router.get('/edit/:id', building_controller.building_edit);
router.put('/update/:id', building_controller.building_update);
router.delete('/delete/:id', building_controller.building_delete);

module.exports = router;