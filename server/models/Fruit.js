const mongoose = require('mongoose');
const unitsProvider = require('../providers/unitsProvider');

const FruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    unit: {
        type: String,
        required: true,
        validate: {
            validator: function(value) {
                const currencyUnits = unitsProvider.getAllUnits();
                return value in currencyUnits;
            },
            message: 'The currency unit is not valid!'
        }
    },
    quantity: {
        type: Number,
        required: true
    },
    fruit_image: {
        type: String,
        required: true
    }
});

const Fruit = mongoose.model('Fruit', FruitSchema);

module.exports = Fruit;