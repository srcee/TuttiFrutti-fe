import Axios from 'axios';
import {baseUrl} from '../constants/general';

var axios = Axios.create({
  baseURL: baseUrl,
});

function getValidUnits() {
    return axios.get('/api/fruits/units')
        .catch(console.error)
}

const unitsService = {
    getValidUnits
}

export default unitsService;