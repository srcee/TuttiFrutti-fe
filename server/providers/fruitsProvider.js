const Fruit = require('../models/Fruit');


/**
 * 
 * @return {Promise} - A promise for all results from Fruit collection in DB.
 */
async function getAllFruits() {
    return new Promise((resolve, reject) => {
        Fruit.find({}, (error, fruits) => {
            if (error) {
                reject(error);

                return;
            }

            resolve(fruits);
        });
    });
};

/**
 * Searches for a document in Fruts collection by name
 * 
 * @param {String} name 
 * @return {Promise} - A promise for one result from Fruit collection in DB.
 */
function getFruitByName(fruitName) {
    return new Promise((resolve, reject) => {
        Fruit.find({ 
            name: fruitName 
        }, (error, fruit) => {
            if (error) {
                reject(error);

                return;
            }

            resolve(fruit);
        });
    });
};

/**
 * Searches for a document in Fruts collection by id
 * 
 * @param {String} id
 * @return {Promise} - A promise for one result from Fruit collection in DB.
 */
function getFruitById(id) {
    return new Promise((resolve, reject) => {
        Fruit.find({ 
            _id: id 
        }, (error, fruit) => {
            if (error) {
                reject(error);

                return;
            }

            resolve(fruit);
        });
    });
};


/**
 * Save for a document in Fruts collection by id
 * 
 * @param {Object} fruit - An object that describes new fruit
 * @return {Promise} - A promise for the id of the saved document
 */
async function addFruit(fruit) {
    return new Promise((resolve, reject) => {
        const newFruit = new Fruit(fruit);
        Fruit.create(newFruit, (error, fruit) => {
            console.log(error, fruit);
            if (error) {
                reject(error);

                return;
            }

            resolve(fruit);
        })
    });
};

/**
 * Save for a document in Fruts collection by id
 * 
 * @param {String} id
 * @param {Object} updates - An object containing the fields that must be updated
 * @return {Promise} - A promise for the id of the saved document
 */
function updateFruitById(id, updates) {
    return new Promise((resolve, reject) => {
        Fruit.findOneAndUpdate({ 
            _id: id 
        }, 
        updates, 
        (error, fruit) => {
            if (error) {
                reject(error);

                return;
            }

            resolve(fruit);
        })
    });
};


module.exports = {
    getAllFruits,
    getFruitByName,
    getFruitById,
    addFruit,
    updateFruitById
}