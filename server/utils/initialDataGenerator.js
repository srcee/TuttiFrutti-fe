const fruitsProvider = require('../providers/fruitsProvider');

const apple = {
    name: 'Apple',
    color: 'yellow',
    price: 2.50,
    unit: 'BGN',
    quantity: 42,
    fruit_image: 'apple.jpg',
};

const orange = {
    name: 'Orange',
    color: 'orange',
    price: 1.80,
    unit: 'BGN',
    quantity: 42,
    fruit_image: 'orange.jpg',
};

const plumbus = {
    name: 'Plumbus',
    color: 'pink',
    price: 4000,
    unit: 'flurbo',
    quantity: 0,
    fruit_image: 'plumbus.jpg',
};

function addInitialData() {
    Promise.all([
            fruitsProvider.getFruitByName(apple.name),
            fruitsProvider.getFruitByName(orange.name),
            fruitsProvider.getFruitByName(plumbus.name)
        ]).then(async (values) => {
            for (const val of values) {
                if (val.length !== 0) return;
            }

            await fruitsProvider.addFruit(apple);
            await fruitsProvider.addFruit(orange);
            await fruitsProvider.addFruit(plumbus);
        })
        .catch(error => {
            console.error('Error generating the initial data', error.message)
        })
}

module.exports = {
    addInitialData
}
