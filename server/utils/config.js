require('dotenv').config();

const MONGODB_URLS = {
    production: 'mongodb://localhost/tutti-frutti-production',
    development: 'mongodb://localhost/tutti-frutti-development'
};
const NODE_ENV = process.env.NODE_ENV || 'development';
const MONGODB_URL = MONGODB_URLS[NODE_ENV];
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'shhhhhh';
const accessKeyId = process.env.accessKeyId || 'accessKeyId';
const secretAccessKey = process.env.secretAccessKey || 'secretAccessKey';

module.exports = {
    NODE_ENV,
    PORT,
    MONGODB_URL,
    JWT_SECRET,
    accessKeyId,
    secretAccessKey
};