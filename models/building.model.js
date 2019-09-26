const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let BuildingSchema = new Schema({
    name: { type: String, required: true, max: 100 },
    description: { type: String, required: false, max: 500 },
    location: { type: String, required: true, max: 500 },
    type: { type: String, required: true, max: 500 },
    price: { type: Number, required: false },
    currency: { type: String, required: false, max: 10 },
    image: { data: Buffer, contentType: String }
});


// Export the model
module.exports = mongoose.model('Building', BuildingSchema);