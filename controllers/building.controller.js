const Building = require('../models/building.model');

//Simple version, without validation or sanitation
exports.building_index = function (req, res) {
    Building.find(function (err, building) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(building);
        }
    });
};

exports.building_create = function (req, res) {
    let building = new Building(
        {
            name: req.body.name,
            description: req.body.description,
            location: req.body.location,
            type: req.body.type,
            price: req.body.price,
            currency: req.body.currency
        }
    );

    building.save(function (err) {
        if (err) {
            return console.log(err);
        }
        res.send('building Created successfully')
    })
};

exports.building_details = function (req, res) {
    Building.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.building_edit = function (req, res) {
    Building.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.json(product);
    })
};

exports.building_update = function (req, res) {
    Building.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, product) {
        if (err) return next(err);
        res.send('Building udpated.');
    });
};

exports.building_delete = function (req, res) {
    Building.findByIdAndRemove({ _id: req.params.id }, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};