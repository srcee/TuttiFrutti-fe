const Joi = require('joi');

const fruitSchema = Joi.object({
    name: Joi.string().required(),
    color: Joi.string().required(),
    price: Joi.number().required().min(0).precision(2),
    unit: Joi.string().required().uppercase(),
    quantity: Joi.number().required().min(0).integer(),
    fruit_image: Joi.string().required()
});

module.exports = {
    fruitSchema
}