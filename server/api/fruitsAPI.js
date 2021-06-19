const router = require('express').Router();
const { uploadFruitImage } = require('../services/fruitService');
const fruitsProvider = require('../providers/fruitsProvider');
const unitsProvider = require('../providers/unitsProvider');
const { fruitSchema } = require('../validators/fruitValidators');

router.get('/units', function(req, res) {
    const validUnits = unitsProvider.getAllUnitsWithNameAndCodeOnly();  
    res.send(validUnits);
});

router.get('/', async function(req, res) {
    const fruits = await fruitsProvider.getAllFruits();
    res.send(fruits);
});

router.get('/:id', async function(req, res) {
    const fruit = await fruitsProvider.getFruitById(req.body.id);
    res.send(fruit);
});

router.post('/', uploadFruitImage.single('fruit_image'), async function(req, res) {
    const fruit = { 
        ...req.body, 
        fruit_image: req.file.filename
    };
    const result = fruitSchema.validate(fruit);
    if(result.error) {
        res.status(400).send(result.error.details[0].message);

        return;
    }

    try {
        const newFruit = fruitsProvider.addFruit(fruit);
        res.status(201).send(newFruit);
    } catch(error) {
        res.status(400).send(error);
    }
});

router.put('/', async function(req, res) {
    const fruit = await fruitsProvider.updateFruitById(req.body.id);
    res.send(fruit);
});

module.exports = router;