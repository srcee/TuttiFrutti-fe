const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('./utils/config');
const initialDataGenerator = require('./utils/initialDataGenerator');

const fruitsAPI = require('./api/fruitsAPI');
const usersAPI = require('./api/usersAPI');

const mongodbUrl = config.MONGODB_URL;
const environment = config.NODE_ENV;
const port = config.PORT;

mongoose.connect(mongodbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => console.log('Successfully connected to DB!'))
    .catch(error => console.error('Failed to connect to DB!', error.reason));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log(`This is ${environment} version of the application!`));

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.use(express.static('public'));

app.use('/api/fruits', fruitsAPI);
app.use('/api/users', usersAPI);

app.use(express.static(path.join(__dirname, '/../client/build')));
app.get('*', (req, res) => { 
    res.sendFile(path.join(`${__dirname}/../client/build/index.html`)); 
});

initialDataGenerator.addInitialData();

app.listen(port, () => console.log(`Listening on port ${port}...`));
