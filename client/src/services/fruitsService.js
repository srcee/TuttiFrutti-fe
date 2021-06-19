import Axios from 'axios';
import {baseUrl} from '../constants/general';

var axios = Axios.create({
  baseURL: baseUrl,
});

function getAllFruits() {
    return axios.get('/api/fruits')
            .catch(console.error);
}

function addFruit(fruit) {
    return axios.post('/api/fruits', fruit)
        .then(response => {
            console.log(response);
            return response;
        })
        .catch(console.error)
}

const fruitService = {
    getAllFruits,
    addFruit
}

export default fruitService;